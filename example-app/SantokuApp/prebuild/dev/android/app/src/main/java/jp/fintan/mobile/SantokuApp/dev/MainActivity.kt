package jp.fintan.mobile.SantokuApp.dev

import android.net.Uri
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

// Transition中にActivityのbackgroundが表示される問題があるため、Splash Screen用とReact Native用にActivityを分ける.
// https://github.com/software-mansion/react-native-screens/issues/380
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val mainIntent = getIntent()
        val appIntent = Intent(this, AppActivity::class.java)

        // Push通知で、onNotificationOpenedAppやgetInitialNotificationを使用してイベントを受け取れない事象の対応
        // https://github.com/invertase/react-native-firebase/issues/3469#issuecomment-614990736
        // Pass along FCM messages/notifications etc.
        var extras = mainIntent.getExtras()
        if (extras != null) {
            appIntent.putExtras(extras)
        }

        // Pass along deep links etc.
        val action = mainIntent.getAction()
        val data = mainIntent.getData()
        val categories = mainIntent.getCategories()
        if (action != null) {
            appIntent.setAction(action)
        }
        if (data != null) {
            appIntent.setData(data)
        }
        if (categories != null && !categories.isEmpty()) {
            for (category in categories) {
                appIntent.addCategory(category)
            }
        }

        startActivity(appIntent)
        finish()
    }
}
