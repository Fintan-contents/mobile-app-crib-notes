"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3295],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,v=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},15973:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},p=void 0,c={unversionedId:"react-native/santoku/development/development-environment/setting-up-ios-run-on-device",id:"react-native/santoku/development/development-environment/setting-up-ios-run-on-device",title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63",source:"@site/docs/react-native/santoku/development/development-environment/02.setting-up-ios-run-on-device.mdx",sourceDirName:"react-native/santoku/development/development-environment",slug:"/react-native/santoku/development/development-environment/setting-up-ios-run-on-device",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-run-on-device",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",sidebarPosition:2,frontMatter:{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"santoku",previous:{title:"\u57fa\u672c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/basic-setup"},next:{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\uff09",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device"}},m=[{value:"iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63",id:"ios\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63",children:[{value:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u3092\u78ba\u8a8d\u3059\u308b",id:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0id\u3092\u78ba\u8a8d\u3059\u308b",children:[],level:3}],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ios\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63"},"iOS\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u306e\u4fee\u6b63"),(0,i.kt)("p",null,"iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u958b\u767a\u3059\u308b\u5834\u5408\u3001Xcode\u304b\u3089Apple ID\uff08\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\uff09\u3067\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u305d\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3084\u8a3c\u660e\u66f8\u3092\u5229\u7528\u3057\u3066\u30d3\u30eb\u30c9\u3059\u308b\u3088\u3046\u306b\u3001iOS\u30a2\u30d7\u30ea\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ios/PersonalAccount.xcconfig.template")," \u3092 ",(0,i.kt)("inlineCode",{parentName:"li"},"ios/PersonalAccount.xcconfig")," \u3068\u3057\u3066\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u8a2d\u5b9a\u5024\u3092\u3001\u305d\u308c\u305e\u308c\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CODE_SIGN_STYLE"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Automatic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PERSONAL_IDENTIFIER"),": \u4ed6\u306e\u4eba\u3068\u304b\u3076\u3089\u306a\u3044\u3001\u4f55\u3089\u304b\u306e\u4e00\u610f\u306e\u5024"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEVELOPMENT_TEAM"),": \u500b\u4eba\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30c1\u30fc\u30e0ID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"li",href:"#%E3%83%87%E3%83%99%E3%83%AD%E3%83%83%E3%83%91%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE%E3%83%81%E3%83%BC%E3%83%A0id%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u3092\u78ba\u8a8d\u3059\u308b"),"\u306e\u624b\u9806\u3067\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"xed ios"),"\u3068\u5b9f\u884c\u3057\u3066\u3001Xcode\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002\u958b\u304f\u3060\u3051\u3067\u826f\u3044\u3088\u3046\u3067\u3059\u3002")),(0,i.kt)("p",null,"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u304d\u305f\u3089\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"<device name>"),"\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148\u306eiOS\u30c7\u30d0\u30a4\u30b9\u540d\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=iOS\u7aef\u672b\u3067\u8d77\u52d5\u3059\u308b",title:"iOS\u7aef\u672b\u3067\u8d77\u52d5\u3059\u308b"},"npm run ios -- --device='<device name>'\n")),(0,i.kt)("p",null,"\u30c7\u30d0\u30a4\u30b9\u540d\u304c\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306b\u6319\u3052\u308b\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\u30c7\u30d0\u30a4\u30b9\u540d\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u540d\u3092\u78ba\u8a8d\u3059\u308b",title:"\u30c7\u30d0\u30a4\u30b9\u540d\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u540d\u3092\u78ba\u8a8d\u3059\u308b"},"xcrun xctrace list devices\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=USB\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30c7\u30d0\u30a4\u30b9\u3092\u78ba\u8a8d\u3059\u308b",title:"USB\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30c7\u30d0\u30a4\u30b9\u3092\u78ba\u8a8d\u3059\u308b"},"ios-deploy --detect\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Xcode\u3067\u4e00\u5ea6\u3082\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"error: No profiles for 'personal.jp.fintan.mobile.SantokuApp.<personal>.dev.debug' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'personal.jp.fintan.mobile.SantokuApp.<personal>.dev.debug'. Automatic signing is disabled and unable to generate a profile. To enable automatic signing, pass -allowProvisioningUpdates to xcodebuild. (in target 'SantokuApp' from project 'SantokuApp')\n")),(0,i.kt)("p",{parentName:"div"},"\u3053\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001\u4e00\u5ea6Xcode\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u304b\u3089\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("h3",{id:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0id\u3092\u78ba\u8a8d\u3059\u308b"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u3092\u78ba\u8a8d\u3059\u308b"),(0,i.kt)("p",null,"\u7121\u511f\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c1\u30fc\u30e0ID\u306f\u3001Xcode\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3084\u958b\u767a\u7528\u8a3c\u660e\u66f8\u306a\u3069\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u958b\u767a\u7528\u8a3c\u660e\u66f8\u304b\u3089\u78ba\u8a8d\u3059\u308b\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305a\u3001Xcode\u304b\u3089Apple ID\uff08\u30c7\u30d9\u30ed\u30c3\u30d1\u30a2\u30ab\u30a6\u30f3\u30c8\uff09\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u958b\u767a\u7528\u306e\u8a3c\u660e\u66f8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Xcode\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8a2d\u5b9a\u753b\u9762\u3092\u958b\u304d\u3001\u5fc5\u8981\u306a\u3089\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u300cPreferences\u300d\uff1e\u300cAccounts\u300d\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8a2d\u5b9a\u753b\u9762\u304c\u958b\u304d\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5834\u5408\u3001\u5de6\u4e0b\u306e\u300c\uff0b\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u5229\u7528\u3059\u308bApple ID\u3092\u9078\u629e\u72b6\u614b\u306b\u3057\u3001\u53f3\u5074\u306e\u30c1\u30fc\u30e0\u4e00\u89a7\u3067\u300c<Apple ID\u306e\u6c0f\u540d> ",(0,i.kt)("strong",{parentName:"li"},"(Personal Team)"),"\u300d\u3068\u66f8\u304b\u308c\u3066\u3044\u308b\u30c1\u30fc\u30e0\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Apple Developer Program\u306a\u3069\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u306e\u5834\u5408\u3001Apple Developer Program\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u540d\u306a\u3069\u3082\u8868\u793a\u3055\u308c\u308b\u305f\u3081\u3001\u8907\u6570\u306e\u30c1\u30fc\u30e0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u300cPersonal Team\u300d\u3092\u9078\u629e\u3057\u305f\u72b6\u614b\u3067\u300cManage Certificates\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u300cApple Development Certificates\u300d\u306b\u8a3c\u660e\u66f8\u304c\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8a3c\u660e\u66f8\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u5de6\u4e0b\u306e\u300c\uff0b\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8a3c\u660e\u66f8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,i.kt)("p",null,"\u6b21\u306b\u3001\u300c\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u30a2\u30af\u30bb\u30b9\u300d\u3092\u958b\u304d\u3001\u958b\u767a\u7528\u306e\u8a3c\u660e\u66f8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u300c\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u30a2\u30af\u30bb\u30b9\u300d\u3092\u958b\u304d\u3001\u5de6\u4e0a\u306e\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u4e00\u89a7\u304b\u3089\u300c\u30ed\u30b0\u30a4\u30f3\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u300c\u5206\u985e\u300d\u306e\u300c\u8a3c\u660e\u66f8\u300d\u3092\u9078\u629e\u3057\u3001\u30ed\u30b0\u30a4\u30f3\u30ad\u30fc\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u8a3c\u660e\u66f8\u306e\u4e00\u89a7\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u300cApple Development: <Apple ID\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9> (xxxxxxxxxx)\u300d\u3068\u3044\u3046\u540d\u524d\u306e\u8a3c\u660e\u66f8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3001\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8868\u793a\u3055\u308c\u305f\u60c5\u5831\u306e\u4e2d\u306e\u300c\u90e8\u7f72\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u6587\u5b57\u5217\u304c\u30c1\u30fc\u30e0ID\u3067\u3059\u3002")))}s.isMDXComponent=!0}}]);