"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[190],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return b}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9"},c=void 0,u={unversionedId:"react-native/santoku/development/implement/cautions-on-using-firebase",id:"react-native/santoku/development/implement/cautions-on-using-firebase",title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u958b\u767a\u74b0\u5883 - Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u8a2d\u5b9a\u3092\u3059\u308b\u3053\u3068\u3067\u3001Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/implement/cautions-on-using-firebase.mdx",sourceDirName:"react-native/santoku/development/implement",slug:"/react-native/santoku/development/implement/cautions-on-using-firebase",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",frontMatter:{title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9"},sidebar:"santoku",previous:{title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30a2\u30d7\u30ea\u8d77\u52d5",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/app-launch-with-build-variants"},next:{title:"\u74b0\u5883\u8a2d\u5b9a\u5024\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/configurations"}},s=[{value:"Firebase\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u30c0\u30df\u30fc\u306e\u5834\u5408\u306fFirebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093",id:"firebase\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u30c0\u30df\u30fc\u306e\u5834\u5408\u306ffirebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093",children:[],level:3},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c<code>Debug</code>\u3001\u307e\u305f\u306f<code>DebugAdvanced</code>\u306e\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30af\u30e9\u30c3\u30b7\u30e5\u6642\u306bFirebase Crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304cdebug\u307e\u305f\u306fdebugadvanced\u306e\u5834\u5408\u306f\u30a2\u30d7\u30ea\u30af\u30e9\u30c3\u30b7\u30e5\u6642\u306bfirebase-crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093",children:[],level:3}],p={toc:s};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase"},"\u958b\u767a\u74b0\u5883 - Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u8a2d\u5b9a\u3092\u3059\u308b\u3053\u3068\u3067\u3001Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001\u3044\u304f\u3064\u304b\u6ce8\u610f\u70b9\u304c\u3042\u308b\u305f\u3081\u3001\u3053\u3053\u3067\u306f\u305d\u308c\u3089\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"firebase\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u30c0\u30df\u30fc\u306e\u5834\u5408\u306ffirebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093"},"Firebase\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u30c0\u30df\u30fc\u306e\u5834\u5408\u306fFirebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093"),(0,i.kt)("p",null,"Firebase\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u30c0\u30df\u30fc\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,i.kt)("inlineCode",{parentName:"li"},"Debug"),"\u3001\u304b\u3064\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,i.kt)("inlineCode",{parentName:"li"},"DevSantokuApp"),"\u306e\u5834\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u306a\u304b\u3063\u305f\u5834\u5408")),(0,i.kt)("p",null,"\u30c0\u30df\u30fc\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u4f7f\u7528\u3055\u308c\u305f\u5834\u5408\u306f\u3001Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("h3",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304cdebug\u307e\u305f\u306fdebugadvanced\u306e\u5834\u5408\u306f\u30a2\u30d7\u30ea\u30af\u30e9\u30c3\u30b7\u30e5\u6642\u306bfirebase-crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,i.kt)("inlineCode",{parentName:"h3"},"Debug"),"\u3001\u307e\u305f\u306f",(0,i.kt)("inlineCode",{parentName:"h3"},"DebugAdvanced"),"\u306e\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30af\u30e9\u30c3\u30b7\u30e5\u6642\u306bFirebase Crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093"),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"Debug"),"\u3001\u307e\u305f\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"DebugAdvanced"),"\u306e\u5834\u5408\u306f\u3001React Native\u304c\u30a2\u30d7\u30ea\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u30a4\u30f3\u30bf\u30fc\u30bb\u30d7\u30c8\u3057\u3066",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/debugging#logbox"},"LogBox"),"\u3092\u8868\u793a\u3057\u307e\u3059\u3002React Native\u304c\u30a8\u30e9\u30fc\u3092\u30a4\u30f3\u30bf\u30fc\u30bb\u30d7\u30c8\u3059\u308b\u305f\u3081\u3001Firebase Crashlytics SDK\u3067\u306f\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3067\u304d\u305a\u3001Firebase Crashlytics\u306b\u306f\u30ed\u30b0\u304c\u9001\u4fe1\u3055\u308c\u307e\u305b\u3093\u3002"))}b.isMDXComponent=!0}}]);