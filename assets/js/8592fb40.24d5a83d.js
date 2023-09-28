"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7767],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),v=r,m=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>m});var n=a(87462),r=a(39960),i=a(44996),o=a(86010),c=a(67294);const s={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},l=e=>{let{children:t,colSize:a=4,...l}=e;const d=(0,i.Z)(l.to);return c.createElement("div",{className:(0,o.Z)("col",`col--${a}`,s.pageOverviewContainer)},c.createElement(r.Z,(0,n.Z)({className:(0,o.Z)("card",s.pageOverviewLinkCard)},l,{to:d}),t))},d=e=>{let{title:t}=e;return c.createElement("div",{className:(0,o.Z)("card__header",s.pageOverviewTitle)},c.createElement("h3",null,t))},p=e=>{let{src:t,alt:a,...r}=e;const l=(0,i.Z)(t);return c.createElement("div",{className:(0,o.Z)("card__image")},c.createElement("img",(0,n.Z)({className:s.pageOverviewImage},r,{alt:a,src:l})))},u=e=>{let{summary:t}=e;return c.createElement("div",{className:(0,o.Z)("card__body",s.pageOverviewSummary)},c.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:a,summary:n,...r}=e;return c.createElement(l,r,c.createElement(d,{title:`${t} \xbb`}),a&&c.createElement(p,{src:a,alt:t}),n&&c.createElement(u,{summary:n}))},m=e=>{let{overviews:t,colSize:a}=e;return c.createElement("section",{className:(0,o.Z)(s.pageList)},c.createElement("div",{className:(0,o.Z)("container")},c.createElement("div",{className:(0,o.Z)("row",s.pageListRow)},t.map((e=>c.createElement(v,(0,n.Z)({key:e.to,colSize:a},e)))))))}},27286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(26201);const o={title:"Decision Records",sidebar_label:"\u76ee\u6b21",pagination_label:"Decision Records - \u76ee\u6b21",hide_table_of_contents:!0},c=void 0,s={unversionedId:"react-native/santoku/decisions",id:"react-native/santoku/decisions",title:"Decision Records",description:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332\u3067\u3059\u3002\u5b9f\u969b\u306b\u65b9\u5f0f\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u6709\u52b9\u306b\u6d3b\u7528\u3067\u304d\u308b\u3088\u3046\u3001\u8a2d\u8a08\u3057\u305f\u65b9\u5f0f\u3060\u3051\u3067\u306a\u304f\u691c\u8a0e\u904e\u7a0b\u3082\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/decisions.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/decisions",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions",draft:!1,tags:[],version:"current",lastUpdatedAt:1695883496,formattedLastUpdatedAt:"2023\u5e749\u670828\u65e5",frontMatter:{title:"Decision Records",sidebar_label:"\u76ee\u6b21",pagination_label:"Decision Records - \u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"Expo SDK 46\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-46-upgrade"},next:{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"}},l={},d=[{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-001-error-handling"},{title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",to:"/react-native/santoku/decisions/adr-002-http-api-libraries"},{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-003-http-api-error-handling"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f\uff08\u5ec3\u6b62\uff09",to:"/react-native/santoku/decisions/adr-004-deep-link"},{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-005-message"},{title:"\u30ed\u30b0\u51fa\u529b\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-006-logging"},{title:"\u8a8d\u8a3c\u65b9\u5f0f\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-007-auth"},{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u65b9\u5f0f\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-008-push-notification"},{title:"FCM\u3092\u7528\u3044\u305f\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u7ba1\u7406\u65b9\u91dd",to:"react-native/santoku/decisions/adr-008-push-notification"},{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u65b9\u91dd",to:"react-native/santoku/decisions/adr-008-push-notification"},{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044\u306b\u95a2\u3059\u308b\u65b9\u91dd",to:"react-native/santoku/decisions/adr-011-cache-management"},{title:"HTTP API\u901a\u4fe1\u306b\u95a2\u3059\u308b\u65b9\u91dd",to:"react-native/santoku/decisions/adr-012-http-api"},{title:"React Query\u3092\u7528\u3044\u305f\u958b\u767a\u65b9\u91dd",to:"react-native/santoku/decisions/adr-013-react-query"},{title:"UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u9078\u5b9a",to:"react-native/santoku/decisions/adr-014-ui-libraries"},{title:"Android\u306e\u30d8\u30c3\u30c9\u30a2\u30c3\u30d7\u901a\u77e5",to:"react-native/santoku/decisions/adr-015-android-head-up-notification"},{title:"\u5f37\u5236\u30a2\u30d7\u30ea\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",to:"react-native/santoku/decisions/adr-016-forced-app-updates"},{title:"\u5730\u56f3\u8868\u793a\u30e9\u30a4\u30d6\u30e9\u30ea",to:"react-native/santoku/decisions/adr-017-map-view-library"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/decisions/adr-018-deep-link"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306e\u753b\u9762\u9077\u79fb",to:"react-native/santoku/decisions/adr-019-deep-link-navigation"}],p=[{value:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",id:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",level:3}],u={toc:p},v="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332\u3067\u3059\u3002\u5b9f\u969b\u306b\u65b9\u5f0f\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u6709\u52b9\u306b\u6d3b\u7528\u3067\u304d\u308b\u3088\u3046\u3001\u8a2d\u8a08\u3057\u305f\u65b9\u5f0f\u3060\u3051\u3067\u306a\u304f\u691c\u8a0e\u904e\u7a0b\u3082\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"},"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"),(0,r.kt)("p",null,"\u5404\u5224\u65ad\u306b\u3042\u305f\u308a\u3001\u3053\u306e\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u8981\u4ef6\u304a\u3088\u3073\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u6e80\u305f\u3059\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/requirements"},"Requirements"))),(0,r.kt)(i.L,{overviews:d,colSize:12,mdxType:"PageList"}))}m.isMDXComponent=!0}}]);