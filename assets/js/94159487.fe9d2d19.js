"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,d=m["".concat(c,".").concat(u)]||m[u]||v[u]||i;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>d});var a=r(87462),n=r(39960),i=r(44996),o=r(86010),l=r(67294);const c={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},p=e=>{let{children:t,colSize:r=4,...p}=e;const s=(0,i.Z)(p.to);return l.createElement("div",{className:(0,o.Z)("col",`col--${r}`,c.pageOverviewContainer)},l.createElement(n.Z,(0,a.Z)({className:(0,o.Z)("card",c.pageOverviewLinkCard)},p,{to:s}),t))},s=e=>{let{title:t}=e;return l.createElement("div",{className:(0,o.Z)("card__header",c.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...n}=e;const p=(0,i.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,a.Z)({className:c.pageOverviewImage},n,{alt:r,src:p})))},v=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,o.Z)("card__body",c.pageOverviewSummary)},l.createElement("p",null,t))},u=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return l.createElement(p,n,l.createElement(s,{title:`${t} \xbb`}),r&&l.createElement(m,{src:r,alt:t}),a&&l.createElement(v,{summary:a}))},d=e=>{let{overviews:t,colSize:r}=e;return l.createElement("section",{className:(0,o.Z)(c.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",c.pageListRow)},t.map((e=>l.createElement(u,(0,a.Z)({key:e.to,colSize:r},e)))))))}},87133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),i=r(26201);const o={title:"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044",sidebar_label:"\u76ee\u6b21"},l=void 0,c={unversionedId:"react-native/common-pitfalls/overview",id:"react-native/common-pitfalls/overview",title:"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044",description:"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044\u305d\u308c\u305e\u308c\u306e\u4e8b\u8c61\u3068\u5bfe\u5fdc\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/common-pitfalls/overview.md",sourceDirName:"react-native/common-pitfalls",slug:"/react-native/common-pitfalls/overview",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044",sidebar_label:"\u76ee\u6b21"},sidebar:"pitfalls",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls"},next:{title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/unable-to-load-script"}},p={},s=[{title:"JavaScript\u304c\u30ed\u30fc\u30c9\u3067\u304d\u306a\u3044",to:"/react-native/common-pitfalls/unable-to-load-script"},{title:"debug.keystore\u304c\u5b58\u5728\u3057\u306a\u3044",to:"/react-native/common-pitfalls/debug-keystore-not-found"},{title:"react-native-cli\u306b\u3064\u3044\u3066",to:"/react-native/common-pitfalls/react-native-cli-uninstall"},{title:"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b",to:"/react-native/common-pitfalls/cant-build-in-xcode"}],m=[],v={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044\u305d\u308c\u305e\u308c\u306e\u4e8b\u8c61\u3068\u5bfe\u5fdc\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)(i.L,{overviews:s,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);