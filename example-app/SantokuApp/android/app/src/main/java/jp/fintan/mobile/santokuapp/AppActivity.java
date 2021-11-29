package jp.fintan.mobile.santokuapp;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import expo.modules.ReactActivityDelegateWrapper;

public class AppActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // https://github.com/software-mansion/react-native-screens#android
    // https://github.com/software-mansion/react-native-screens/issues/17
    // Discard any Activity state persisted during the Activity restart process, to avoid inconsistencies that lead to crashes.
    super.onCreate(null);
  }


  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
      return "main";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(
        this,
        new ReactActivityDelegate(this, getMainComponentName()) {
          @Override
          protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(AppActivity.this);
          }
        });
  }
}
