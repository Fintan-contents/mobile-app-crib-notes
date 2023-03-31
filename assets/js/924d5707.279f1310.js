"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9311],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762\u306e\u5b9f\u88c5",sidebar_label:"\u753b\u9762\u306e\u5b9f\u88c5",hide_table_of_contents:!0},i=void 0,p={unversionedId:"react-native/learn/qa-app/exercise-basic-list-event-screen",id:"react-native/learn/qa-app/exercise-basic-list-event-screen",title:"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762\u306e\u5b9f\u88c5",description:"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/qa-app/exercise-basic-list-event-screen.md",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/exercise-basic-list-event-screen",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-list-event-screen",draft:!1,tags:[],version:"current",lastUpdatedAt:1670563798,formattedLastUpdatedAt:"2022\u5e7412\u67089\u65e5",frontMatter:{title:"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762\u306e\u5b9f\u88c5",sidebar_label:"\u753b\u9762\u306e\u5b9f\u88c5",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"API\u547c\u3073\u51fa\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-home-api"},next:{title:"API\u547c\u3073\u51fa\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-list-event-api"}},o={},c=[{value:"\u88dc\u8db3",id:"\u88dc\u8db3",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"API\u547c\u3073\u51fa\u3057\u306f\u5f8c\u3067\u5b9f\u88c5\u3059\u308b\u306e\u3067\u3001API\u306e\u623b\u308a\u5024\u306f\u4e00\u65e6\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u4e0a\u306b\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7\u753b\u9762",src:r(57180).Z,width:"960",height:"960"})),(0,a.kt)("h2",{id:"\u88dc\u8db3"},"\u88dc\u8db3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u88dc\u8db3\u7b87\u6240"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30d8\u30c3\u30c0\u30fc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u623b\u308b\u30dc\u30bf\u30f3\u3068\u753b\u9762\u30bf\u30a4\u30c8\u30eb\u3092\u8868\u793a\u3059\u308b\u3002\u623b\u308b\u30dc\u30bf\u30f3\u62bc\u4e0b\u3067\u524d\u753b\u9762\u3078\u9077\u79fb\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30a4\u30d9\u30f3\u30c8\u4e00\u89a7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u3059\u3079\u3066\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u8868\u793a\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pull-to-refresh"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30da\u30fc\u30b8\u6700\u4e0a\u90e8\u3067\u4e0b\u306b\u30b9\u30ef\u30a4\u30d7\u3057\u3066\u96e2\u3059\u3068Pull-to-refresh\u3068\u306a\u308b\u3088\u3046\u306b\u3059\u308b\u3002",(0,a.kt)("br",null),"refresh\u4e2d\u306f\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u4e2d\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3088\u3046\u306b\u3001\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3092\u8868\u793a\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30a4\u30d9\u30f3\u30c8\u30bf\u30a4\u30c8\u30eb"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62bc\u4e0b\u3067\u30a4\u30d9\u30f3\u30c8\u8a73\u7d30\u753b\u9762\u306b\u9077\u79fb\u3059\u308b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7e26\u306e\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62bc\u4e0b\u6642\u306e\u51e6\u7406\u306f\u5b9f\u88c5\u5bfe\u8c61\u5916\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u65b0\u898f\u4f5c\u6210\u30dc\u30bf\u30f3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30dc\u30bf\u30f3\u306f\u4e00\u89a7\u753b\u9762\u306e\u4e0a\u306b\u5e38\u306b\u8868\u793a\u3057\u3001\u4e00\u89a7\u753b\u9762\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u3082\u8868\u793a\u4f4d\u7f6e\u306f\u56fa\u5b9a\u3068\u3059\u308b\u3002",(0,a.kt)("br",null),"\u62bc\u4e0b\u3067\u30a4\u30d9\u30f3\u30c8\u5165\u529b\u753b\u9762\u306b\u9077\u79fb\u3059\u308b\u3002")))))}d.isMDXComponent=!0},57180:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screen-list-event-de775268bca35b5d6481785510cad48d.png"}}]);