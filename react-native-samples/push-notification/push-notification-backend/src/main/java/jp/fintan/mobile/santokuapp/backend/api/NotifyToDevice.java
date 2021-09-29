package jp.fintan.mobile.santokuapp.backend.api;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.microsoft.azure.functions.ExecutionContext;
import com.microsoft.azure.functions.HttpMethod;
import com.microsoft.azure.functions.HttpRequestMessage;
import com.microsoft.azure.functions.HttpResponseMessage;
import com.microsoft.azure.functions.HttpStatus;
import com.microsoft.azure.functions.annotation.AuthorizationLevel;
import com.microsoft.azure.functions.annotation.FunctionName;
import com.microsoft.azure.functions.annotation.HttpTrigger;

import jp.fintan.mobile.santokuapp.backend.Firebase;

import java.io.IOException;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

/**
 * Azure Functions with HTTP Trigger.
 */
public class NotifyToDevice {
    private static final Gson gson = new Gson();

    /**
     * Push notification message to specified device.
     */
    @FunctionName("messages")
    public HttpResponseMessage run(
            @HttpTrigger(name = "req", methods = { HttpMethod.POST }, authLevel = AuthorizationLevel.FUNCTION)
            HttpRequestMessage<Optional<String>> request,
            final ExecutionContext context) {
        Logger logger = context.getLogger();

        // Initialize Firebase Admin SDK
        try {
            Firebase.initializeApp(logger);
        } catch (IOException e) {
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to initialize Firebase app.")
                    .build();
        }

        // Parse request parameters
        RequestParameters params;
        try {
            params = gson.fromJson(request.getBody().orElse("{}"), RequestParameters.class);
        } catch (JsonSyntaxException e) {
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to parse request body. Request body must be a JSON string.")
                    .build();
        }

        // Validate request parameters
        if (params.token == null) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST)
                    .body("Missing required parameter 'token'.")
                    .build();
        } else if (params.token.isBlank()) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST)
                    .body("'token' must not be empty.")
                    .build();
        }
        if (params.delay < 0 || params.delay > 30) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST)
                .body("'delay' must be between 0 and 30.")
                .build();
        }

        // Build message
        Message.Builder messageBuilder = Message.builder();
        messageBuilder.setToken(params.token);
        if (params.notification != null) {
            Notification.Builder notificationBuilder = Notification.builder();
            if (params.notification.title != null && !params.notification.title.isEmpty()) {
                notificationBuilder.setTitle(params.notification.title);
            }
            if (params.notification.body != null && !params.notification.body.isEmpty()) {
                notificationBuilder.setBody(params.notification.body);
            }
            Notification notification = notificationBuilder.build();
            messageBuilder.setNotification(notification);
        }
        if (params.data != null) {
            if (params.data.text != null) {
                messageBuilder.putData("text", params.data.text);
            }
        }
        Message message = messageBuilder.build();

        // Send a message to the device corresponding to the provided token.
        try {
            if (params.delay > 0) {
                TimeUnit.SECONDS.sleep(params.delay);
            }
            // Response is a message ID string.
            String response = FirebaseMessaging.getInstance().send(message);
            logger.info("Successfully sent message: " + response);
        } catch (FirebaseMessagingException e) {
            logger.info("Failed to send message to Firebase Cloud Messaging. " + e.getMessage());
            return Firebase.buildErrorResponseFromFirebaseMessagingException(request, e);
        } catch (InterruptedException e) {
            logger.info("Failed to send message to Firebase Cloud Messaging. " + e.getMessage());
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to send message to Firebase Cloud Messaging.")
                    .build();
        }

        // return 200 OK
        return request.createResponseBuilder(HttpStatus.OK).build();
    }

    public static class RequestParameters {
        String token;
        NotificationParameters notification;
        DataParameters data;
        int delay;
    }

    public static class NotificationParameters {
        String title;
        String body;
    }

    public static class DataParameters {
        String text;
    }
}
