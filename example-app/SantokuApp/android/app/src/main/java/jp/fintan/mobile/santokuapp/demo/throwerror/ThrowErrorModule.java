package jp.fintan.mobile.santokuapp.demo.throwerror;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

public class ThrowErrorModule extends ReactContextBaseJavaModule {
    ThrowErrorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ThrowErrorModule";
    }

    @ReactMethod
    public void throwErrorSyncProcess() {
        Log.d("ThrowErrorModule", "Throw exception in synchronous process.");
        throw new RuntimeException("Error has occurred in synchronous process.");
    }

    @ReactMethod
    public void throwErrorAsyncProcess() {
        Log.d("ThrowErrorModule", "Throw exception in asynchronous process.");
        new Thread(() -> {
            throw new RuntimeException("Error has occurred in asynchronous process.");
        }).start();
    }
}
