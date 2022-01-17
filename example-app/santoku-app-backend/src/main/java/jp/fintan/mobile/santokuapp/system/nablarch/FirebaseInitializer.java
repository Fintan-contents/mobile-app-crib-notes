package jp.fintan.mobile.santokuapp.system.nablarch;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import nablarch.core.repository.initialization.Initializable;

public class FirebaseInitializer implements Initializable {
  @Override
  public void initialize() {
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
          throw new RuntimeException("Failed to load Google service account file.", e);
        }
      } else if (serviceAccountJson.startsWith("@Microsoft.KeyVault")) {
        // Failed to load KeyVault secret value. (e.g. no permission, service failure, etc.)
        throw new RuntimeException("Failed to load KeyVault secret 'FIREBASE_SERVICE_ACCOUNT'.");
      } else {
        // Load service account json from KeyVault secret
        try (InputStream serviceAccountStream = new ByteArrayInputStream(serviceAccountJson.getBytes(StandardCharsets.UTF_8))) {
          credentials = GoogleCredentials.fromStream(serviceAccountStream);
        } catch (IOException e) {
          throw new RuntimeException("Failed to parse Google service account json.", e);
        }
      }
      FirebaseOptions options = FirebaseOptions.builder().setCredentials(credentials).build();
      FirebaseApp.initializeApp(options);
    }
  }
}
