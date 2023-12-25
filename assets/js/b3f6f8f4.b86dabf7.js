"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,d=u["".concat(l,".").concat(m)]||u[m]||v[m]||n;return a?r.createElement(d,c(c({ref:t},s),{},{components:a})):r.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,c=new Array(n);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>d});var r=a(87462),i=a(39960),n=a(44996),c=a(86010),o=a(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},p=e=>{let{children:t,colSize:a=4,...p}=e;const s=(0,n.Z)(p.to);return o.createElement("div",{className:(0,c.Z)("col",`col--${a}`,l.pageOverviewContainer)},o.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},p,{to:s}),t))},s=e=>{let{title:t}=e;return o.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},o.createElement("h3",null,t))},u=e=>{let{src:t,alt:a,...i}=e;const p=(0,n.Z)(t);return o.createElement("div",{className:(0,c.Z)("card__image")},o.createElement("img",(0,r.Z)({className:l.pageOverviewImage},i,{alt:a,src:p})))},v=e=>{let{summary:t}=e;return o.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},o.createElement("p",null,t))},m=e=>{let{title:t,imageUrl:a,summary:r,...i}=e;return o.createElement(p,i,o.createElement(s,{title:`${t} \xbb`}),a&&o.createElement(u,{src:a,alt:t}),r&&o.createElement(v,{summary:r}))},d=e=>{let{overviews:t,colSize:a}=e;return o.createElement("section",{className:(0,c.Z)(l.pageList)},o.createElement("div",{className:(0,c.Z)("container")},o.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((e=>o.createElement(m,(0,r.Z)({key:e.to,colSize:a},e)))))))}},27678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=a(87462),i=(a(67294),a(3905)),n=a(26201);const c={title:"Application Architecture",sidebar_label:"\u76ee\u6b21",pagination_label:"Application Architecture - \u76ee\u6b21"},o=void 0,l={unversionedId:"react-native/santoku/application-architecture",id:"react-native/santoku/application-architecture",title:"Application Architecture",description:"React Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u305f\u3068\u304d\u306b\u3001\u521d\u3081\u306b\u304d\u3061\u3093\u3068\u691c\u8a0e\u3059\u308b\u3079\u304d\u3060\u3063\u305f\u3068\u3075\u308a\u304b\u3048\u3063\u305f\u30c6\u30fc\u30de\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/application-architecture",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture",draft:!1,tags:[],version:"current",lastUpdatedAt:1703140316,formattedLastUpdatedAt:"2023\u5e7412\u670821\u65e5",frontMatter:{title:"Application Architecture",sidebar_label:"\u76ee\u6b21",pagination_label:"Application Architecture - \u76ee\u6b21"},sidebar:"santoku",previous:{title:"\u305d\u306e\u4ed6\u4e8b\u9805",permalink:"/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/other"},next:{title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/system-configuration/overview"}},p={},s=[{title:"\u30b7\u30b9\u30c6\u30e0\u69cb\u6210",to:"/react-native/santoku/application-architecture/system-configuration/overview"},{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u69cb\u9020",to:"/react-native/santoku/application-architecture/application-structure/overview"},{title:"\u30a2\u30d7\u30ea\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406",to:"/react-native/santoku/application-architecture/life-cycle-management/overview"},{title:"\u30a2\u30d7\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",to:"/react-native/santoku/application-architecture/app-updates/overview"},{title:"\u8a8d\u8a3c",to:"/react-native/santoku/application-architecture/auth/overview"},{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406",to:"/react-native/santoku/application-architecture/message-configuration/overview"},{title:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u51fa\u529b",to:"/react-native/santoku/application-architecture/logging-app/overview"},{title:"HTTP API\u901a\u4fe1",to:"/react-native/santoku/application-architecture/http-api/overview"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af",to:"/react-native/santoku/application-architecture/deep-link/overview"},{title:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/application-architecture/error-handling/overview"},{title:"Push\u901a\u77e5",to:"/react-native/santoku/application-architecture/push-notification/overview"},{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044",to:"/react-native/santoku/application-architecture/cache-management/overview"},{title:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5c0e\u5165",to:"/react-native/santoku/application-architecture/third-party-libraries/overview"}],u=[],v={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"attention",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"React Native\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u305f\u3068\u304d\u306b\u3001\u521d\u3081\u306b\u304d\u3061\u3093\u3068\u691c\u8a0e\u3059\u308b\u3079\u304d\u3060\u3063\u305f\u3068\u3075\u308a\u304b\u3048\u3063\u305f\u30c6\u30fc\u30de\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30de\u304b\u3089\u9806\u756a\u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u308b\u306e\u3067\u3001\u73fe\u6642\u70b9\u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u5fc5\u8981\u306b\u306a\u308b\u3067\u3042\u308d\u3046\u30c6\u30fc\u30de\u306e\u3054\u304f\u4e00\u90e8\u3057\u304b\u30ab\u30d0\u30fc\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002\u4eca\u5f8c\u3082\u65b0\u3057\u3044\u30c6\u30fc\u30de\u3092\u8ffd\u52a0\u3057\u3001\u5185\u5bb9\u3092\u5145\u5b9f\u3055\u305b\u3066\u3044\u304d\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u307e\u305f\u3001\u3059\u3067\u306b\u7d39\u4ecb\u3057\u3066\u3044\u308b\u30c6\u30fc\u30de\u306b\u3064\u3044\u3066\u3082\u3001\u5185\u5bb9\u3092\u8ffd\u8a18\u3059\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3057\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3084\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u5909\u5316\u306a\u3069\u3067\u5909\u66f4\u3055\u308c\u3066\u3044\u304f\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002")),(0,i.kt)(n.L,{overviews:s,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);