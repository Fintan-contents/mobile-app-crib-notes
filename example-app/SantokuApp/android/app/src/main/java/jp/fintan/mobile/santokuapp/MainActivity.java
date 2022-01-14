package jp.fintan.mobile.santokuapp;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

// Transition中にActivityのbackgroundが表示される問題があるため、Splash Screen用とReact Native用にActivityを分ける.
// https://github.com/software-mansion/react-native-screens/issues/380
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Push通知で、onNotificationOpenedAppやgetInitialNotificationを使用してイベントを受け取れない事象の対応
        // https://github.com/invertase/react-native-firebase/issues/3469#issuecomment-614990736
        Intent intent = new Intent(this, AppActivity.class);

        // Pass along FCM messages/notifications etc.
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            intent.putExtras(extras);
        }
        startActivity(intent);
        finish();
    }
}
