# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

-keep class jp.fintan.mobile.santokuapp.BuildConfig { *; }

# Firebase ConsoleでCrashlyticsのエラータイトルが表示されない問題に対応
# https://firebase.google.com/docs/crashlytics/get-deobfuscated-reports?hl=ja&platform=android
-keepattributes SourceFile,LineNumberTable        # Keep file names and line numbers.
-keep public class * extends java.lang.Exception  # Optional: Keep custom exceptions.

# React Native ReanimatedからTurbomoduleを使うための設定
# https://docs.swmansion.com/react-native-reanimated/docs/2.2.0/installation
-keep class com.facebook.react.turbomodule.** { *; }

# ExpoModulesPakage.ktから、自動生成されたクラスを参照するためにクラス名を利用しているので、クラス名が変わるとアプリが起動しなくなる。
# https://github.com/expo/expo/blob/sdk-43/packages/expo/android/src/main/java/expo/modules/ExpoModulesPackage.kt#L22
-keep class expo.modules.ExpoModulesPackageList { *; }
