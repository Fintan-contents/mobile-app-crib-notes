package com.helloworld;

import android.net.Uri;
import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import java.util.Set;

// Transition中にActivityのbackgroundが表示される問題があるため、Splash Screen用とReact Native用にActivityを分ける.
// https://github.com/software-mansion/react-native-screens/issues/380
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent mainIntent = getIntent();
        Intent appIntent = new Intent(this, AppActivity.class);

        // Push通知で、onNotificationOpenedAppやgetInitialNotificationを使用してイベントを受け取れない事象の対応
        // https://github.com/invertase/react-native-firebase/issues/3469#issuecomment-614990736
        // Pass along FCM messages/notifications etc.
        Bundle extras = mainIntent.getExtras();
        if (extras != null) {
            appIntent.putExtras(extras);
        }

        // Pass along deep links etc.
        String action = mainIntent.getAction();
        Uri data = mainIntent.getData();
        Set<String> categories = mainIntent.getCategories();
        if (action != null) {
            appIntent.setAction(action);
        }
        if (data != null) {
            appIntent.setData(data);
        }
        if (categories != null && !categories.isEmpty()) {
            for (String category : categories) {
                appIntent.addCategory(category);
            }
        }

        startActivity(appIntent);
        finish();
    }
}
