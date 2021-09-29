package jp.fintan.mobile.santokuapp.backend;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.microsoft.azure.functions.HttpRequestMessage;
import com.microsoft.azure.functions.HttpResponseMessage;
import com.microsoft.azure.functions.HttpStatus;

import java.io.IOException;
import java.io.InputStream;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import java.util.logging.Logger;

public class Firebase {
    public static void initializeApp(Logger logger) throws IOException {
        // Skip initialization if [DEFAULT] app already initialized.
        if (FirebaseApp.getApps().isEmpty()) {
            GoogleCredentials credentials;
            String serviceAccountJson = System.getenv("FIREBASE_SERVICE_ACCOUNT");
            if (serviceAccountJson == null || serviceAccountJson.isEmpty()) {
                // Load service account file from local disk.
                // File path is defined in the GOOGLE_APPLICATION_CREDENTIALS environment variable.
                try {
                    credentials = GoogleCredentials.getApplicationDefault();
                } catch (IOException e) {
                    logger.warning("Failed to load Google service account file.");
                    throw e;
                }
            } else if (serviceAccountJson.startsWith("@Microsoft.KeyVault")) {
                // Failed to load KeyVault secret value. (e.g. no permission, service failure, etc.)
                logger.warning("Failed to load KeyVault secret 'FIREBASE_SERVICE_ACCOUNT'.");
                throw new IOException();
            } else {
                // Load service account json from KeyVault secret
                try (InputStream serviceAccountStream = new ByteArrayInputStream(serviceAccountJson.getBytes(StandardCharsets.UTF_8))) {
                    credentials = GoogleCredentials.fromStream(serviceAccountStream);
                } catch (IOException e) {
                    logger.warning("Failed to parse Google service account json.");
                    throw e;
                }
            }
            FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
            FirebaseApp.initializeApp(options);
        }
    }

    public static HttpResponseMessage buildErrorResponseFromFirebaseMessagingException(
            HttpRequestMessage<Optional<String>> request,
            FirebaseMessagingException e) {
        switch(e.getMessagingErrorCode()) {
            case INVALID_ARGUMENT:
                // One or more arguments specified in the request were invalid.
                return request.createResponseBuilder(HttpStatus.BAD_REQUEST)
                        .body(e.getMessage())
                        .build();
            case QUOTA_EXCEEDED:
                // Sending limit exceeded for the message target.
                return request.createResponseBuilder(HttpStatus.TOO_MANY_REQUESTS)
                        .body("Sending limit exceeded for the message target.")
                        .build();
            case SENDER_ID_MISMATCH:
                // The authenticated sender ID is different from the sender ID for the registration token.
                return request.createResponseBuilder(HttpStatus.BAD_REQUEST)
                        .body("This registration token is invalid for this Firebase project.")
                        .build();
            case THIRD_PARTY_AUTH_ERROR:
                // APNs certificate or web push auth key was invalid or missing.
                return request.createResponseBuilder(HttpStatus.FORBIDDEN)
                        .body("APNs certificate or web push auth key was invalid or missing.")
                        .build();
            case UNAVAILABLE:
                // Cloud Messaging service is temporarily unavailable.
                return request.createResponseBuilder(HttpStatus.SERVICE_UNAVAILABLE)
                        .body("Firebase Cloud Messaging service is temporarily unavailable.")
                        .build();
            case UNREGISTERED:
                // App instance was unregistered from FCM.
                // This usually means that the token used is no longer valid and a new one must be used.
                return request.createResponseBuilder(HttpStatus.BAD_REQUEST)
                        .body("This registration token is no longer valid and a new one must be used.")
                        .build();
            default:
                return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Unexpected exception occured sending request to Firebase Cloud Messaging service.")
                        .build();
        }
    }
}
