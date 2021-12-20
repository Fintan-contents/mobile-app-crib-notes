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
        startActivity(new Intent(this, AppActivity.class));
        finish();
    }
}
