package jp.fintan.mobile.santokuapp.backend.api;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.TopicManagementResponse;
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
import java.util.Arrays;
import java.util.Optional;
import java.util.logging.Logger;

/**
 * Azure Functions with HTTP Trigger.
 */
public class SubscribeToTopic {
    private static final Gson gson = new Gson();

    /**
     * Subscribe token to topic.
     */
    @FunctionName("subscribe")
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
                    .body("Failed to initialize Firebase app.").build();
        }

        // Parse request parameters
        RequestParameters params;
        try {
            params = gson.fromJson(request.getBody().orElse("{}"), RequestParameters.class);
        } catch (JsonSyntaxException e) {
            return request.createResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to parse request body. Request body must be a JSON string.").build();
        }

        // Validate request parameters
        if (params.topic == null) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST).body("Missing required parameter 'topic'.")
                    .build();
        } else if (params.topic.isBlank()) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST).body("'topic' must not be empty.").build();
        }
        if (params.token == null) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST).body("Missing required parameter 'token'.")
                    .build();
        } else if (params.token.isBlank()) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST).body("'token' must not be empty.").build();
        }

        // Subscribe to topic.
        try {
            TopicManagementResponse response = FirebaseMessaging.getInstance()
                    .subscribeToTopic(Arrays.asList(params.token), params.topic);
            logger.info(response.getSuccessCount() + " tokens were subscribed successfully.");
        } catch (FirebaseMessagingException e) {
            logger.info("Failed to send subscription request to Firebase Cloud Messaging. " + e.getMessage());
            return Firebase.buildErrorResponseFromFirebaseMessagingException(request, e);
        }

        // return 200 OK
        return request.createResponseBuilder(HttpStatus.OK).build();
    }

    public static class RequestParameters {
        String topic;
        String token;
    }
}
