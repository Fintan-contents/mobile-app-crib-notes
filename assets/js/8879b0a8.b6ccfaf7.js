"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4905],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},69309:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"},c=void 0,u={unversionedId:"reference/auth/manage-credentials",id:"reference/auth/manage-credentials",title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",description:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u7ba1\u65b9\u6cd5",source:"@site/docs/reference/auth/manage-credentials.md",sourceDirName:"reference/auth",slug:"/reference/auth/manage-credentials",permalink:"/mobile-app-crib-notes/reference/auth/manage-credentials",tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"},sidebar:"reference",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3",permalink:"/mobile-app-crib-notes/reference/auth/login-screens"},next:{title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c",permalink:"/mobile-app-crib-notes/reference/auth/stateless-authn"}},p=[{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u7ba1\u65b9\u6cd5",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u7ba1\u65b9\u6cd5",children:[],level:2},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u306b\u304a\u3051\u308b\u6ce8\u610f\u70b9",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u306b\u304a\u3051\u308b\u6ce8\u610f\u70b9",children:[{value:"Android (KeyStore)",id:"android-keystore",children:[],level:3},{value:"iOS (Keychain)",id:"ios-keychain",children:[{value:"1. \u30a2\u30d7\u30ea\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u6d88\u3048\u306a\u3044",id:"1-\u30a2\u30d7\u30ea\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u6d88\u3048\u306a\u3044",children:[],level:4},{value:"2. iCloud\u3067\u540c\u671f\u3055\u308c\u308b",id:"2-icloud\u3067\u540c\u671f\u3055\u308c\u308b",children:[],level:4}],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u7ba1\u65b9\u6cd5"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u7ba1\u65b9\u6cd5"),(0,i.kt)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fdc\u3058\u3066\u30bb\u30ad\u30e5\u30a2\u306a\u65b9\u6cd5\u3067\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\uff08OIDC\u306e\u30c8\u30fc\u30af\u30f3\u3084\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306a\u3069\uff09\u3092\u4fdd\u7ba1\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android: KeyStore\u306b\u4fdd\u5b58\u3057\u305f\u9375\u3067\u6697\u53f7\u5316\u3057\u3066\u3001SharedPreferences\u306b\u4fdd\u7ba1\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"iOS: Keychain\u306b\u4fdd\u7ba1\u3059\u308b")),(0,i.kt)("h2",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u306b\u304a\u3051\u308b\u6ce8\u610f\u70b9"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u306b\u304a\u3051\u308b\u6ce8\u610f\u70b9"),(0,i.kt)("p",null,"Android\u306a\u3089KeyStore\u3001iOS\u306a\u3089Keychain\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3092\u524d\u63d0\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u306b\u3064\u3044\u3066\u3044\u304f\u3064\u304b\u6ce8\u610f\u70b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"android-keystore"},"Android (KeyStore)"),(0,i.kt)("p",null,"KeyStore\u306b\u4fdd\u5b58\u3057\u305f\u9375\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u64cd\u4f5c\u3067\u6d88\u3048\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u9375\u304c\u53d6\u5f97\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u30e6\u30fc\u30b6\u306b\u518d\u5ea6\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u3092\u8981\u6c42\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/articles/keystore?hl=ja#UserAuthentication"},"\u30ad\u30fc\u4f7f\u7528\u3092\u627f\u8a8d\u3059\u308b\u3046\u3048\u3067\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u3092\u8981\u6c42\u3059\u308b"),"\u5834\u5408\u306f\u3001\u627f\u8a8d\u5185\u5bb9\u306b\u5fdc\u3058\u3066\u30ad\u30fc\u304c\u7121\u52b9\u5316\u3055\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u7570\u306a\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u6982\u8981\u3092\u793a\u3057\u307e\u3059\u304c\u3001\u8a73\u7d30\u306b\u3064\u3044\u3066\u30ea\u30f3\u30af\u5148\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u8a8d\u8a3c\u306b\u57fa\u3065\u3044\u3066\u3001\u4e00\u5b9a\u671f\u9593\u3001\u30ad\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u627f\u8a8d\u3059\u308b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bb\u30ad\u30e5\u30a2\u30ed\u30c3\u30af\u753b\u9762\u304c\u7121\u52b9\u5316\u3055\u308c\u305f\u5834\u5408\u3084\u5f37\u5236\u7684\u306b\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u305f\u5834\u5408"))),(0,i.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u8a8d\u8a3c\u306b\u3088\u3063\u3066\u3001\u30ad\u30fc\u3068\u6697\u53f7\u51e6\u7406\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u500b\u5225\u306b\u627f\u8a8d\u3059\u308b\uff08\u6307\u7d0b\u8a8d\u8a3c\u306e\u5834\u5408\u306e\u307f\u5229\u7528\u53ef\u80fd\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65b0\u3057\u3044\u6307\u7d0b\u304c\u767b\u9332\u3055\u308c\u305f\u5834\u5408\u3084\u3059\u3079\u3066\u306e\u6307\u7d0b\u306e\u767b\u9332\u304c\u62b9\u6d88\u3055\u308c\u305f\u5834\u5408")))))),(0,i.kt)("h3",{id:"ios-keychain"},"iOS (Keychain)"),(0,i.kt)("h4",{id:"1-\u30a2\u30d7\u30ea\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u6d88\u3048\u306a\u3044"},"1. \u30a2\u30d7\u30ea\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u6d88\u3048\u306a\u3044"),(0,i.kt)("p",null,"Keychain\u306e\u60c5\u5831\u306f\u30a2\u30d7\u30ea\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u6d88\u3048\u306a\u3044\u305f\u3081\u3001\u7279\u306b\u4f55\u3082\u3057\u306a\u3044\u5834\u5408\u306f\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3082\u8a8d\u8a3c\u72b6\u614b\u304c\u5f15\u304d\u7d99\u304c\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u306b\u5fc5\u305a\u8a8d\u8a3c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001UserDefaults\u306b\u30d5\u30e9\u30b0\u3092\u8a2d\u3051\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u304b\u3089\u306e\u30ed\u30b0\u30a4\u30f3\u5b9f\u7e3e\u3092\u7ba1\u7406\u3059\u308b\u306a\u3069\u306e\u5b9f\u88c5\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"2-icloud\u3067\u540c\u671f\u3055\u308c\u308b"},"2. iCloud\u3067\u540c\u671f\u3055\u308c\u308b"),(0,i.kt)("p",null,"Keychain\u306b\u4fdd\u5b58\u3057\u305f\u60c5\u5831\u306f\u3001iCloud\u540c\u671f\u306b\u3088\u308a\u540c\u3058AppleID\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u5225\u306e\u7aef\u672b\u306b\u540c\u671f\u3055\u308c\u307e\u3059\u3002\u3055\u3089\u306b\u3001iCloud\u540c\u671f\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u4e0d\u5b9a\u671f\u306e\u305f\u3081\u3001\u3044\u3064\u30d0\u30c3\u30af\u30a2\u30c3\u30d7/\u540c\u671f\u3055\u308c\u308b\u304b\u5206\u304b\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u4e00\u53f0\u3067\u306e\u307f\u5229\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u524d\u63d0\u306e\u60c5\u5831\u3092\u5b89\u6613\u306bKeychain\u306b\u4fdd\u7ba1\u3057\u3066\u3057\u307e\u3046\u3068\u3001\u8907\u6570\u53f0\u3067\u540c\u6642\u306b\u5229\u7528\u3055\u308c\u3066\u4e88\u671f\u3057\u306a\u3044\u4e0d\u6574\u5408\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3084\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3092\u4e00\u5ea6\u3057\u304b\u5229\u7528\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u5236\u9650\u3057\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u304c\u8a72\u5f53\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);