"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(r),u=a,d=v["".concat(s,".").concat(u)]||v[u]||m[u]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var n=r(87462),a=r(39960),o=r(44996),i=r(86010),c=r(67294);const s={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},l=e=>{let{children:t,colSize:r=4,...l}=e;const p=(0,o.Z)(l.to);return c.createElement("div",{className:(0,i.Z)("col",`col--${r}`,s.pageOverviewContainer)},c.createElement(a.Z,(0,n.Z)({className:(0,i.Z)("card",s.pageOverviewLinkCard)},l,{to:p}),t))},p=e=>{let{title:t}=e;return c.createElement("div",{className:(0,i.Z)("card__header",s.pageOverviewTitle)},c.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...a}=e;const l=(0,o.Z)(t);return c.createElement("div",{className:(0,i.Z)("card__image")},c.createElement("img",(0,n.Z)({className:s.pageOverviewImage},a,{alt:r,src:l})))},v=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,i.Z)("card__body",s.pageOverviewSummary)},c.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:n,...a}=e;return c.createElement(l,a,c.createElement(p,{title:`${t} \xbb`}),r&&c.createElement(m,{src:r,alt:t}),n&&c.createElement(v,{summary:n}))},d=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,i.Z)(s.pageList)},c.createElement("div",{className:(0,i.Z)("container")},c.createElement("div",{className:(0,i.Z)("row",s.pageListRow)},t.map((e=>c.createElement(u,(0,n.Z)({key:e.to,colSize:r},e)))))))}},59942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(26201);const i={title:"\u5171\u901a\u90e8\u54c1",sidebar_label:"\u6982\u8981"},c=void 0,s={unversionedId:"react-native/santoku/design/screen-specs/common-parts/overview",id:"react-native/santoku/design/screen-specs/common-parts/overview",title:"\u5171\u901a\u90e8\u54c1",description:"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u3001\u753b\u9762\u5168\u4f53\u3067\u4f7f\u7528\u3059\u308b\u5171\u901a\u90e8\u54c1\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/design/screen-specs/common-parts/overview.mdx",sourceDirName:"react-native/santoku/design/screen-specs/common-parts",slug:"/react-native/santoku/design/screen-specs/common-parts/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021\u5e7412\u670820\u65e5",frontMatter:{title:"\u5171\u901a\u90e8\u54c1",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u5229\u7528\u898f\u7d04\u540c\u610f",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/screens/terms-of-service-agreement/overview"},next:{title:"\u30dc\u30bf\u30f3",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/button/overview"}},l={},p=[{title:"\u30dc\u30bf\u30f3",to:"/react-native/santoku/design/screen-specs/common-parts/button/overview"},{title:"\u30b9\u30ca\u30c3\u30af\u30d0\u30fc",to:"/react-native/santoku/design/screen-specs/common-parts/snackbar/overview"},{title:"WebView",to:"/react-native/santoku/design/screen-specs/common-parts/webview/overview"}],m=[],v={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u3001\u753b\u9762\u5168\u4f53\u3067\u4f7f\u7528\u3059\u308b\u5171\u901a\u90e8\u54c1\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,a.kt)(o.L,{overviews:p,colSize:12,mdxType:"PageList"}))}u.isMDXComponent=!0}}]);