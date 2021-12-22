"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1195],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52829:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044"},c=void 0,p={unversionedId:"react-native/common-pitfalls/debug-keystore-not-found",id:"react-native/common-pitfalls/debug-keystore-not-found",isDocsHomePage:!1,title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044",description:"\u30a8\u30e9\u30fc\u5185\u5bb9",source:"@site/docs/react-native/common-pitfalls/debug-keystore-not-found.md",sourceDirName:"react-native/common-pitfalls",slug:"/react-native/common-pitfalls/debug-keystore-not-found",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/debug-keystore-not-found",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044"},sidebar:"pitfalls",previous:{title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/unable-to-load-script"},next:{title:"react-native-cli\u306b\u3064\u3044\u3066",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/react-native-cli-uninstall"}},u=[{value:"\u30a8\u30e9\u30fc\u5185\u5bb9",id:"\u30a8\u30e9\u30fc\u5185\u5bb9",children:[],level:2},{value:"\u5bfe\u51e6\u65b9\u6cd5",id:"\u5bfe\u51e6\u65b9\u6cd5",children:[{value:"debug.keystore\u306e\u4f5c\u6210",id:"debugkeystore\u306e\u4f5c\u6210",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9"},"\u30a8\u30e9\u30fc\u5185\u5bb9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm run android"),"\u3092\u5b9f\u884c\u3057\u305f\u3068\u304d\u306b\u3001\u5fc5\u8981\u306a\u30ad\u30fc\u30b9\u30c8\u30a2\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u3066\u3044\u306a\u3044\u3068\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"* What went wrong:\nExecution failed for task ':app:validateSigningDebug'.\n> Keystore file '/private/tmp/ProjectFromTemplate/android/app/debug.keystore' not found for signing config 'debug'.\n")),(0,a.kt)("h2",{id:"\u5bfe\u51e6\u65b9\u6cd5"},"\u5bfe\u51e6\u65b9\u6cd5"),(0,a.kt)("h3",{id:"debugkeystore\u306e\u4f5c\u6210"},"debug.keystore\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092React Native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"debug.keystore"),"\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'keytool -genkey -v -keystore android/app/debug.keystore -storepass android -alias androiddebugkey -keypass android -dname "CN=Android Debug,O=Android,C=US"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"debug.keystore"),"\u306f\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u306e\u30ad\u30fc\u30b9\u30c8\u30a2\u306a\u306e\u3067\u3001Git\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u542b\u3081\u3066\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"))}d.isMDXComponent=!0}}]);