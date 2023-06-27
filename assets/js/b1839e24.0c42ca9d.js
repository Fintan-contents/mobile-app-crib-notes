"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,d=p["".concat(l,".").concat(u)]||p[u]||v[u]||i;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var a=r(87462),n=r(39960),i=r(44996),o=r(86010),c=r(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const m=(0,i.Z)(s.to);return c.createElement("div",{className:(0,o.Z)("col",`col--${r}`,l.pageOverviewContainer)},c.createElement(n.Z,(0,a.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},s,{to:m}),t))},m=e=>{let{title:t}=e;return c.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},c.createElement("h3",null,t))},p=e=>{let{src:t,alt:r,...n}=e;const s=(0,i.Z)(t);return c.createElement("div",{className:(0,o.Z)("card__image")},c.createElement("img",(0,a.Z)({className:l.pageOverviewImage},n,{alt:r,src:s})))},v=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},c.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return c.createElement(s,n,c.createElement(m,{title:`${t} \xbb`}),r&&c.createElement(p,{src:r,alt:t}),a&&c.createElement(v,{summary:a}))},d=e=>{let{overviews:t,colSize:r}=e;return c.createElement("section",{className:(0,o.Z)(l.pageList)},c.createElement("div",{className:(0,o.Z)("container")},c.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((e=>c.createElement(u,(0,a.Z)({key:e.to,colSize:r},e)))))))}},76880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),i=r(26201);const o={title:"\u30c7\u30e2\u6a5f\u80fd",sidebar_label:"\u76ee\u6b21",pagination_label:"\u30c7\u30e2\u6a5f\u80fd - \u76ee\u6b21",hide_table_of_contents:!0},c=void 0,l={unversionedId:"react-native/santoku/design/demo/overview",id:"react-native/santoku/design/demo/overview",title:"\u30c7\u30e2\u6a5f\u80fd",description:"React Native\u3084\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306e\u30c7\u30e2\u6a5f\u80fd\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/design/demo/overview.mdx",sourceDirName:"react-native/santoku/design/demo",slug:"/react-native/santoku/design/demo/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/demo/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1687749071,formattedLastUpdatedAt:"2023\u5e746\u670826\u65e5",frontMatter:{title:"\u30c7\u30e2\u6a5f\u80fd",sidebar_label:"\u76ee\u6b21",pagination_label:"\u30c7\u30e2\u6a5f\u80fd - \u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"\u30c6\u30fc\u30de\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",permalink:"/mobile-app-crib-notes/react-native/santoku/design/context/theme"},next:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",permalink:"/mobile-app-crib-notes/react-native/santoku/design/demo/push-notification/overview"}},s={},m=[{title:"Push\u901a\u77e5",to:"/react-native/santoku/design/demo/push-notification/overview",summary:(0,n.kt)("span",{style:{color:"#666666"}},"@react-native-firebase/messaging,@notifee/react-native")},{title:"QR\u30b3\u30fc\u30c9",to:"/react-native/santoku/design/demo/qrcode/overview",summary:(0,n.kt)("span",{style:{color:"#666666"}},"react-native-qrcode-svg")},{title:"\u30d0\u30fc\u30b3\u30fc\u30c9",to:"/react-native/santoku/design/demo/barcode/overview",summary:(0,n.kt)("span",{style:{color:"#666666"}},"jsbarcode")},{title:"\u5730\u56f3\u8868\u793a",to:"/react-native/santoku/design/demo/map/overview",summary:(0,n.kt)("span",{style:{color:"#666666"}},"react-native-maps")}],p=[],v={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"React Native\u3084\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306e\u30c7\u30e2\u6a5f\u80fd\u3067\u3059\u3002"),(0,n.kt)(i.L,{overviews:m,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);