"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8258],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71135:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u691c\u8a0e\u306b\u3064\u3044\u3066",sidebar_label:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u691c\u8a0e\u306b\u3064\u3044\u3066"},i=void 0,p={unversionedId:"react-native/learn/qa-app/about-implementation-selection",id:"react-native/learn/qa-app/about-implementation-selection",title:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u691c\u8a0e\u306b\u3064\u3044\u3066",description:"Q&A\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u3001\u305d\u308c\u3089\u306f\u3069\u306e\u3088\u3046\u306a\u65b9\u6cd5\u3067\u5b9f\u88c5\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\u3002",source:"@site/docs/react-native/learn/qa-app/about-implementation-selection.mdx",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/about-implementation-selection",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/about-implementation-selection",draft:!1,tags:[],version:"current",lastUpdatedAt:1703140316,formattedLastUpdatedAt:"2023\u5e7412\u670821\u65e5",frontMatter:{title:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u691c\u8a0e\u306b\u3064\u3044\u3066",sidebar_label:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u691c\u8a0e\u306b\u3064\u3044\u3066"},sidebar:"learn",previous:{title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b - \u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/pre-app-implementation"},next:{title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5206\u5272\u306b\u3064\u3044\u3066",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/about-component-units"}},o={},c=[{value:"\u4ed5\u69d8\u306e\u78ba\u8a8d",id:"\u4ed5\u69d8\u306e\u78ba\u8a8d",level:2},{value:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u8abf\u67fb",id:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u8abf\u67fb",level:2},{value:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6bd4\u8f03",id:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6bd4\u8f03",level:2},{value:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6c7a\u5b9a",id:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6c7a\u5b9a",level:2}],m={toc:c},u="wrapper";function s(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Q&A\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u306b\u3042\u305f\u3063\u3066\u3001\u305d\u308c\u3089\u306f\u3069\u306e\u3088\u3046\u306a\u65b9\u6cd5\u3067\u5b9f\u88c5\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\u3002"),(0,r.kt)("p",null,"React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084API\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u5b9f\u88c5\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\u3002\u305d\u308c\u3068\u3082\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u3046\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\u3002\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u3046\u5834\u5408\u306f\u3001\u3069\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u305f\u3089\u826f\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u7591\u554f\u306b\u5bfe\u3059\u308b\u7b54\u3048\u306f\u3001\u4e00\u6982\u306b\u306f\u8a00\u3048\u307e\u305b\u3093\u3002\u6a5f\u80fd\u6027\u3084\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u5de5\u6570\u3001\u5b9f\u88c5\u5f8c\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306a\u3069\u3001\u69d8\u3005\u306a\u8981\u7d20\u3092\u8003\u616e\u3057\u3066\u6700\u9069\u306a\u65b9\u6cd5\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Q&A\u30a2\u30d7\u30ea\u306e\u30d8\u30c3\u30c0\u30fc\u3092\u4f8b\u306b\u3001\u5b9f\u88c5\u65b9\u6cd5\u3092\u6c7a\u3081\u308b\u307e\u3067\u306e\u904e\u7a0b\u3092\u9806\u306b\u8aac\u660e\u3057\u307e\u3059\u3002\u5b9f\u88c5\u65b9\u6cd5\u306e\u691c\u8a0e\u6642\u306e\u9032\u3081\u65b9\u3068\u3057\u3066\u30011\u3064\u306e\u53c2\u8003\u306b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u4ed5\u69d8\u306e\u78ba\u8a8d"},"\u4ed5\u69d8\u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u30d8\u30c3\u30c0\u30fc\u306e\u5b9f\u88c5\u65b9\u6cd5\u3092\u691c\u8a0e\u3059\u308b\u306b\u3042\u305f\u308a\u3001\u307e\u305a\u306f\u305d\u306e\u4ed5\u69d8\u3092\u628a\u63e1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Q&A\u30a2\u30d7\u30ea\u306e\u30d8\u30c3\u30c0\u30fc\u306f\u3001\u5927\u304d\u304f\u4ee5\u4e0b\u306e\u4ed5\u69d8\u3092\u6e80\u305f\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u753b\u9762\u4e0a\u90e8\u306b\u8868\u793a\u3067\u304d\u308b\u3053\u3068"),(0,r.kt)("li",{parentName:"ul"},"\u30d8\u30c3\u30c0\u30fc\u306e\u5de6\u53f3\u306b\u306f\u3001\u30e6\u30fc\u30b6\u64cd\u4f5c\u304c\u53ef\u80fd\u306a\u30dc\u30bf\u30f3\u306a\u3069\u3092\u81ea\u7531\u306b\u914d\u7f6e\u3067\u304d\u308b\u3053\u3068"),(0,r.kt)("li",{parentName:"ul"},"\u524d\u306e\u753b\u9762\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u3001\u30d8\u30c3\u30c0\u30fc\u306e\u5de6\u7aef\u306b\u623b\u308b\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3067\u304d\u308b\u3053\u3068"),(0,r.kt)("li",{parentName:"ul"},"\u30d8\u30c3\u30c0\u30fc\u306e\u4e2d\u592e\u306b\u306f\u3001\u305d\u306e\u753b\u9762\u306e\u30bf\u30a4\u30c8\u30eb\u304c\u8868\u793a\u3067\u304d\u308b\u3053\u3068")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30db\u30fc\u30e0\u753b\u9762"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8cea\u554f\u8a73\u7d30\u753b\u9762"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"\u30db\u30fc\u30e0\u753b\u9762\u30d8\u30c3\u30c0\u30fc",src:a(32686).Z,width:"1080",height:"455"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("img",{alt:"\u8cea\u554f\u8a73\u7d30\u753b\u9762\u30d8\u30c3\u30c0\u30fc",src:a(12458).Z,width:"1080",height:"455"}))))),(0,r.kt)("h2",{id:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u8abf\u67fb"},"\u5b9f\u88c5\u65b9\u6cd5\u306e\u8abf\u67fb"),(0,r.kt)("p",null,"\u4ed5\u69d8\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u306f\u3001\u305d\u308c\u3089\u3092\u6e80\u305f\u3059\u305f\u3081\u306e\u5b9f\u88c5\u65b9\u6cd5\u3092\u8abf\u67fb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b9f\u88c5\u65b9\u6cd5\u306f\u3001\u5927\u304d\u304f\u4ee5\u4e0b\u306e3\u3064\u306b\u5206\u985e\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084API\u3092\u7d44\u307f\u5408\u308f\u305b\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u65e2\u306b\u5c0e\u5165\u3057\u3066\u3044\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u305f\u306b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5c0e\u5165\u3059\u308b")),(0,r.kt)("p",null,"\u65e2\u306b\u5c0e\u5165\u3057\u3066\u3044\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/qa-app/app-project-desc#%E4%BD%BF%E7%94%A8%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB"},"Q&A\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aac\u660e - \u4f7f\u7528\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u306b\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u4e2d\u3067\u306f\u3001React Navigation\u306b",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/headers"},"\u30d8\u30c3\u30c0\u30fc\u306b\u95a2\u3059\u308b\u6a5f\u80fd"),"\u304c\u3042\u308a\u305d\u3046\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u65b0\u305f\u306b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5c0e\u5165\u3059\u308b\u5834\u5408\u306f\u3001\u307e\u305a",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/"},"Expo SDK"),"\u306b\u305d\u308c\u3089\u306e\u6a5f\u80fd\u304c\u5b58\u5728\u3059\u308b\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002Expo SDK\u306b\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u305d\u306e\u4ed6\u306e\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u8abf\u67fb\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a\u306b\u95a2\u3057\u3066\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\uff08SantokuApp\uff09\u3067\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a\u65b9\u91dd\u3092\u5b9a\u3081\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u306b\u306f\u3001Expo SDK\u3092\u512a\u5148\u7684\u306b\u5229\u7528\u3059\u308b\u7406\u7531\u3082\u8a18\u8f09\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u53c2\u8003\u306b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../santoku/application-architecture/third-party-libraries/overview#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E9%81%B8%E5%AE%9A%E6%96%B9%E9%87%9D"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a\u65b9\u91dd")))),(0,r.kt)("p",null,"Expo SDK\u304c\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\u30d8\u30c3\u30c0\u30fc\u306b\u95a2\u3059\u308b\u6a5f\u80fd\u306f\u5b58\u5728\u3057\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u305d\u3053\u3067\u3001\u4ed6\u306e\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u8abf\u67fb\u3057\u305f\u3068\u3053\u308d\u3001\u3044\u304f\u3064\u304b\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u30d8\u30c3\u30c0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/components/header"},"React Native Elements - Header")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://callstack.github.io/react-native-paper/docs/components/Appbar/"},"React Native Paper - Appbar"))),(0,r.kt)("h2",{id:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6bd4\u8f03"},"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6bd4\u8f03"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u8abf\u67fb\u3057\u305f\u5b9f\u88c5\u65b9\u6cd5\u306b\u5bfe\u3057\u3066\u3001\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8\u3092\u6319\u3052\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30e1\u30ea\u30c3\u30c8"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30c7\u30e1\u30ea\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"React Native\u306e\u307f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30fb\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u306a\u3044\u305f\u3081\u3001\u6a5f\u80fd\u5b9f\u73fe\u306b\u95a2\u3057\u3066\u5236\u9650\u304c\u306a\u3044"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30fb\u5fc5\u8981\u306a\u5168\u3066\u306e\u6a5f\u80fd\u3092\u81ea\u8eab\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"React Navigation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30fb\u30c6\u30fc\u30de\u306b\u6e96\u62e0\u3057\u305f\u30b9\u30bf\u30a4\u30eb\u3067\u30d8\u30c3\u30c0\u30fc\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b",(0,r.kt)("br",null),"\u30fb\u524d\u306e\u753b\u9762\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u623b\u308b\u30dc\u30bf\u30f3\u3092\u81ea\u52d5\u3067\u8868\u793a\u3067\u304d\u308b",(0,r.kt)("br",null),"\u30fb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff08Android/iOS\uff09\u56fa\u6709\u306eAPI\u3092\u4f7f\u7528\u3057\u305fUI\u3092\u8868\u793a\u3067\u304d\u308b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30fbUI\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u5236\u9650\u304c\u3042\u308b\uff08\u7279\u306b",(0,r.kt)("a",{parentName:"td",href:"https://reactnavigation.org/docs/native-stack-navigator"},"Native Stack Navigator"),"\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UI\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30fb\u30c6\u30fc\u30de\u306b\u6e96\u62e0\u3057\u305f\u30b9\u30bf\u30a4\u30eb\u3067\u30d8\u30c3\u30c0\u30fc\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30fb\u30d8\u30c3\u30c0\u30fc\u4ee5\u5916\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u542b\u307e\u308c\u308b\u305f\u3081\u3001\u30d8\u30c3\u30c0\u30fc\u306e\u305f\u3081\u3060\u3051\u306b\u5c0e\u5165\u3059\u308b\u306b\u306f\u6a5f\u80fd\u304c\u8c4a\u5bcc\u3059\u304e\u308b\uff08\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u30b3\u30b9\u30c8\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3059\u304e\u308b\uff09",(0,r.kt)("br",null),"\u30fbUI\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u5236\u9650\u304c\u3042\u308b\uff08\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u306eAPI\u3092\u4f7f\u7528\u3067\u304d\u306a\u3044\u306a\u3069\uff09")))),(0,r.kt)("h2",{id:"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6c7a\u5b9a"},"\u5b9f\u88c5\u65b9\u6cd5\u306e\u6c7a\u5b9a"),(0,r.kt)("p",null,"\u5404\u5b9f\u88c5\u65b9\u6cd5\u306e\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8\u3092\u628a\u63e1\u3057\u305f\u5f8c\u306f\u3001\u3053\u306e\u4e2d\u3067\u4f55\u3092\u512a\u5148\u3059\u308b\u304b\u3092\u6c7a\u3081\u3066\u3001\u305d\u308c\u306b\u5f93\u3063\u3066\u5b9f\u88c5\u65b9\u6cd5\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\uff08SantokuApp\uff09\u3067\u306f\u3001\u300c\u623b\u308b\u30dc\u30bf\u30f3\u306e\u81ea\u52d5\u8868\u793a\u300d\u3068\u300c\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u306eAPI\u3092\u4f7f\u7528\u3057\u305fUI\u8868\u793a\u300d\u3092\u512a\u5148\u3057\u3001React Navigation\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5b9f\u88c5\u65b9\u6cd5\u3092\u8abf\u67fb\u3057\u3001\u305d\u308c\u305e\u308c\u306e\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8\u3092\u6319\u3052\u3066\u3044\u304f\u306b\u306f\u76f8\u5fdc\u306e\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\n\u5168\u3066\u306e\u6a5f\u80fd\u306b\u5bfe\u3057\u3066\u3053\u3046\u3044\u3063\u305f\u624b\u9806\u3092\u8e0f\u3080\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u5b9f\u88c5\u65b9\u6cd5\u3092\u9078\u629e\u3059\u308b\u4e0a\u3067\u306e1\u3064\u306e\u53c2\u8003\u306b\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0},32686:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/screen-home-header-1fa4a407b108a5f9af2c36d36b75ac40.png"},12458:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/screen-question-detail-header-4a469611c0ca23c5ec3c9deae8c345df.png"}}]);