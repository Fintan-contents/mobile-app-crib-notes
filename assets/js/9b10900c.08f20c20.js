"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,d=u["".concat(o,".").concat(b)]||u[b]||f[b]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=b;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u5165\u529b\u753b\u9762\u306e\u5358\u4f53\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd",sidebar_label:"\u5358\u4f53\u30c6\u30b9\u30c8\u306e\u5b9f\u65bd"},c=void 0,p={unversionedId:"react-native/learn/qa-app/exercise-basic-input-test-case",id:"react-native/learn/qa-app/exercise-basic-input-test-case",title:"\u5165\u529b\u753b\u9762\u306e\u5358\u4f53\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd",description:"\u5165\u529b\u753b\u9762\u3092\u4f5c\u6210\u51fa\u6765\u305f\u3089\u3001\u5358\u4f53\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/qa-app/exercise-basic-input-test-case.md",sourceDirName:"react-native/learn/qa-app",slug:"/react-native/learn/qa-app/exercise-basic-input-test-case",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-test-case",draft:!1,tags:[],version:"current",lastUpdatedAt:1703140316,formattedLastUpdatedAt:"2023\u5e7412\u670821\u65e5",frontMatter:{title:"\u5165\u529b\u753b\u9762\u306e\u5358\u4f53\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd",sidebar_label:"\u5358\u4f53\u30c6\u30b9\u30c8\u306e\u5b9f\u65bd"},sidebar:"learn",previous:{title:"API\u547c\u3073\u51fa\u3057",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-api"},next:{title:"Q&A\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\uff08\u5fdc\u7528\u7de8\uff09",permalink:"/mobile-app-crib-notes/react-native/learn/qa-app/exercise-advanced"}},o={},l=[{value:"\u30c6\u30b9\u30c8\u4ed5\u69d8\u66f8\u306b\u3064\u3044\u3066",id:"\u30c6\u30b9\u30c8\u4ed5\u69d8\u66f8\u306b\u3064\u3044\u3066",level:3},{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:3}],s={toc:l},u="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5165\u529b\u753b\u9762\u3092\u4f5c\u6210\u51fa\u6765\u305f\u3089\u3001\u5358\u4f53\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30c6\u30b9\u30c8\u4ed5\u69d8\u66f8\u306b\u3064\u3044\u3066"},"\u30c6\u30b9\u30c8\u4ed5\u69d8\u66f8\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"\u672c\u8cc7\u6599\u306f\u3001\u4ee5\u4e0b\u306e\u300c\u30c6\u30b9\u30c8\u7a2e\u5225\uff06\u30c6\u30b9\u30c8\u89b3\u70b9\u30ab\u30bf\u30ed\u30b0\u300d\u304b\u3089\u62bd\u51fa\u3057\u305f\u8996\u70b9\u3092\u57fa\u306b\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://fintan.jp/page/1456"},"\u30c6\u30b9\u30c8\u7a2e\u5225\uff06\u30c6\u30b9\u30c8\u89b3\u70b9\u30ab\u30bf\u30ed\u30b0 | Fintan")),(0,a.kt)("h3",{id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(46288).Z},"\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9_\u5165\u529b\u753b\u9762.xlsx")))}f.isMDXComponent=!0},46288:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9_\u5165\u529b\u753b\u9762-294c4d7f7cb2cc5c8953ae57f51a7b4c.xlsx"}}]);