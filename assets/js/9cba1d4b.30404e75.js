"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3015],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),f=r,g=m["".concat(o,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(g,l(l({ref:e},s),{},{components:a})):n.createElement(g,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},57017:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Config Plugins\u306e\u9069\u7528"},l=void 0,p={unversionedId:"react-native/santoku/development/build-configuration/apply-plugins",id:"react-native/santoku/development/build-configuration/apply-plugins",title:"Config Plugins\u306e\u9069\u7528",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Expo\u304c\u6a19\u6e96\u3067\u7528\u610f\u3057\u3066\u3044\u308bConfig Plugins\u306b\u52a0\u3048\u3066\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u516c\u958b\u3057\u3066\u3044\u308b\u3082\u306e\u3084\u3001\u30a2\u30d7\u30ea\u3067\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305fConfig Plugins\u3082\u9069\u7528\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/build-configuration/apply-plugins.mdx",sourceDirName:"react-native/santoku/development/build-configuration",slug:"/react-native/santoku/development/build-configuration/apply-plugins",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/apply-plugins",draft:!1,tags:[],version:"current",lastUpdatedAt:1680240073,formattedLastUpdatedAt:"2023\u5e743\u670831\u65e5",frontMatter:{title:"Config Plugins\u306e\u9069\u7528"},sidebar:"santoku",previous:{title:"Config Plugins\u306b\u3064\u3044\u3066",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/about-plugins"},next:{title:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/build-type"}},o={},d=[{value:"\u30b5\u30fc\u30c9\u30d0\u30fc\u30c6\u30a3\u306eConfig Plugins",id:"\u30b5\u30fc\u30c9\u30d0\u30fc\u30c6\u30a3\u306econfig-plugins",level:2},{value:"\u30a2\u30d7\u30ea\u3067\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305fConfig Plugins",id:"\u30a2\u30d7\u30ea\u3067\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305fconfig-plugins",level:2}],s={toc:d},m="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001Expo\u304c\u6a19\u6e96\u3067\u7528\u610f\u3057\u3066\u3044\u308bConfig Plugins\u306b\u52a0\u3048\u3066\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u516c\u958b\u3057\u3066\u3044\u308b\u3082\u306e\u3084\u3001\u30a2\u30d7\u30ea\u3067\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305fConfig Plugins\u3082\u9069\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b5\u30fc\u30c9\u30d0\u30fc\u30c6\u30a3\u306econfig-plugins"},"\u30b5\u30fc\u30c9\u30d0\u30fc\u30c6\u30a3\u306eConfig Plugins"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30d7\u30e9\u30b0\u30a4\u30f3\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"OS"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u74b0\u5883"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.expo.dev/versions/latest/sdk/build-properties/"},"expo-build-properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS/Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ios/Podfile.properties.json"),"\u3068",(0,r.kt)("inlineCode",{parentName:"td"},"android/gradle.properties"),"\u306b\u5b9a\u7fa9\u3057\u3066\u3044\u308b\u8a2d\u5b9a\u5024\u3092\u5909\u66f4\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://rnfirebase.io/#managed-workflow"},"@react-native-firebase/app")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS/Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@react-native-firebase/app"),"\u306e\u521d\u671f\u8a2d\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://rnfirebase.io/crashlytics/usage#installation"},"@react-native-firebase/crashlytics")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS/Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@react-native-firebase/crashlytics"),"\u306e\u521d\u671f\u8a2d\u5b9a\u3092\u5b9f\u65bd\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3059\u3002")))),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u3067\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305fconfig-plugins"},"\u30a2\u30d7\u30ea\u3067\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305fConfig Plugins"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30d7\u30e9\u30b0\u30a4\u30f3\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"OS"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u74b0\u5883"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/withAddNativeModules.ts"},"withAddNativeModules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android/iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u4f5c\u6210\u3057\u305fNativeModules\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidAddAppActivity.ts"},"withAndroidAddAppActivity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/software-mansion/react-native-screens/issues/380"},"Transition\u4e2d\u306bActivity\u306ebackground\u304c\u8868\u793a\u3055\u308c\u308b\u554f\u984c"),"\u304c\u3042\u308b\u305f\u3081\u3001Splash Screen\u7528\u3068React Native\u7528\u306bActivity\u3092\u5206\u3051\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidEnabledStatusBarTranslucent.ts"},"withAndroidEnabledStatusBarTranslucent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/crazycodeboy/react-native-splash-screen/issues/241"},"\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u304cexpo-splash-screen\u3067\u8868\u793a\u3055\u308c\u308bImageView\u306b\u5909\u308f\u3063\u305f\u6642\u306b\u3001\u753b\u50cf\u304c\u305a\u308c\u3066\u3057\u307e\u3046\u554f\u984c"),"\u304c\u3042\u308b\u305f\u3081\u3001",(0,r.kt)("a",{parentName:"td",href:"https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-optional-customize-statusbar-1"},"expo_splash_screen_status_bar_translucent"),"\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidDisabledWindowDrawsSystemBarBackgrounds.ts"},"withAndroidDisabledWindowDrawsSystemBarBackgrounds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/crazycodeboy/react-native-splash-screen/issues/241"},"\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u304cexpo-splash-screen\u3067\u8868\u793a\u3055\u308c\u308bImageView\u306b\u5909\u308f\u3063\u305f\u6642\u306b\u3001\u753b\u50cf\u304c\u305a\u308c\u3066\u3057\u307e\u3046\u554f\u984c"),"\u304c\u3042\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"windowDrawsSystemBarBackgrounds"),"\u3092\u7121\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidMoveDevSettingsActivityToDebugAndroidManifest.ts"},"withAndroidMoveDevSettingsActivityToDebugAndroidManifest")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DevSettingsActivity\u306e\u8a2d\u5b9a\u3092",(0,r.kt)("inlineCode",{parentName:"td"},"main/AndroidManifest.xml"),"\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"td"},"debug/AndroidManifest.xml"),"\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidFlexibleSplashScreen.ts"},"withAndroidFlexibleSplashScreen")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expo\u306e\u6a19\u6e96\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u306f\u3001\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u306b1\u679a\u306e\u753b\u50cf\u3057\u304b\u8a2d\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u8907\u6570\u306e\u753b\u50cf\u3092\u4e2d\u592e\u3067\u753b\u9762\u30b5\u30a4\u30ba\u306b\u5408\u308f\u305b\u3066\u8868\u793a\u3057\u305f\u308a\u3001\u4e0b\u63c3\u3048\u3067\u8868\u793a\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),"\u305d\u306e\u305f\u3081\u3001\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u7528\u306b\u8907\u6570\u679a\u306e\u753b\u50cf\u3092\u30b3\u30d4\u30fc\u3057\u305f\u308a\u3001\u305d\u308c\u3089\u306e\u753b\u50cf\u3092\u4f7f\u7528\u3059\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidAppBuildGradleForRelease.ts"},"withAndroidAppBuildGradleForRelease")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"stg",(0,r.kt)("br",null),"prod"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30ea\u30fc\u30b9\u7528\u306e\u7f72\u540d\u8a2d\u5b9a\u3084\u3001",(0,r.kt)("a",{parentName:"td",href:"https://rnfirebase.io/crashlytics/android-setup#4-optional-enable-crashlytics-ndk-reporting"},"NDK\u306e\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u53ce\u96c6\u306b\u95a2\u3059\u308b\u8a2d\u5b9a"),"\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/android/withAndroidRemoveUsesClearTextTrafficForRelease.ts"},"withAndroidRemoveUsesClearTextTrafficForRelease")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("td",{parentName:"tr",align:"left"},"stg",(0,r.kt)("br",null),"prod"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"usesCleartextTraffic"),"\u306e\u8a2d\u5b9a\u3092\u524a\u9664\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/ios/withIosRemoveCFBundleUrlTypes.ts"},"withIosRemoveCFBundleUrlTypes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30ab\u30b9\u30bf\u30e0\u30b9\u30ad\u30fc\u30de\u3092\u5b9a\u7fa9\u3057\u306a\u3044\u305f\u3081\u3001CFBundleURLTypes\u3092\u524a\u9664\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/ios/withIosOverrideStoryboard.ts"},"withIosOverrideStoryboard")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expo\u306e\u6a19\u6e96\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u306f\u3001\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u306b1\u679a\u306e\u753b\u50cf\u3057\u304b\u8a2d\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u8907\u6570\u306e\u753b\u50cf\u3092\u4e2d\u592e\u3067\u753b\u9762\u30b5\u30a4\u30ba\u306b\u5408\u308f\u305b\u3066\u8868\u793a\u3057\u305f\u308a\u3001\u4e0b\u63c3\u3048\u3067\u8868\u793a\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),"\u305d\u306e\u305f\u3081\u3001\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u30b9\u30af\u30ea\u30fc\u30f3\u7528\u306b\u8907\u6570\u679a\u306e\u753b\u50cf\u3092\u30b3\u30d4\u30fc\u3057\u305f\u308a\u3001Storyboard\u3092\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/ios/withIosSetCredentials.ts"},"withIosSetCredentials")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"all"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BundleIdentifier\u3084\u7f72\u540d\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/ios/withIosDisabledATS.ts"},"withIosDisabledATS")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"local"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ATS\uff08App Transport Security\uff09\u3092\u7121\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/ios/withIosEnabledATS.ts"},"withIosEnabledATS")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"stg",(0,r.kt)("br",null),"prod"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ATS\uff08App Transport Security\uff09\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fintan-contents/mobile-app-crib-notes/tree/master/example-app/SantokuApp/config/plugin/src/ios/withIosAddPersonalAccountConfig.ts"},"withIosAddPersonalAccountConfig")),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"local"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u305f",(0,r.kt)("inlineCode",{parentName:"td"},"PersonalAccount.xcconfig"),"\u3092\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002")))))}c.isMDXComponent=!0}}]);