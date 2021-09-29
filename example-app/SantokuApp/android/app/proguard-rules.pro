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
