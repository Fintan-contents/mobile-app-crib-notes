"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>v});var n=r(87462),a=r(39960),i=r(44996),o=r(86010),l=r(67294);const c={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const p=(0,i.Z)(s.to);return l.createElement("div",{className:(0,o.Z)("col",`col--${r}`,c.pageOverviewContainer)},l.createElement(a.Z,(0,n.Z)({className:(0,o.Z)("card",c.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return l.createElement("div",{className:(0,o.Z)("card__header",c.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:r,...a}=e;const s=(0,i.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,n.Z)({className:c.pageOverviewImage},a,{alt:r,src:s})))},u=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,o.Z)("card__body",c.pageOverviewSummary)},l.createElement("p",null,t))},d=e=>{let{title:t,imageUrl:r,summary:n,...a}=e;return l.createElement(s,a,l.createElement(p,{title:`${t} \xbb`}),r&&l.createElement(m,{src:r,alt:t}),n&&l.createElement(u,{summary:n}))},v=e=>{let{overviews:t,colSize:r}=e;return l.createElement("section",{className:(0,o.Z)(c.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",c.pageListRow)},t.map((e=>l.createElement(d,(0,n.Z)({key:e.to,colSize:r},e)))))))}},37095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(67294),i=r(3905),o=r(26201);const l={title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03",sidebar_label:"\u306f\u3058\u3081\u306b"},c=void 0,s={unversionedId:"distribution",id:"distribution",title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fWeb\u3068\u306f\u9055\u3063\u3066\u3001\u30e6\u30fc\u30b6\u3084\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/distribution.mdx",sourceDirName:".",slug:"/distribution",permalink:"/mobile-app-crib-notes/distribution",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03",sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"distribution",next:{title:"iOS\u306e\u30e9\u30a4\u30bb\u30f3\u30b9",permalink:"/mobile-app-crib-notes/distribution/ios-license"}},p={},m=[{title:"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",summary:(0,i.kt)(a.Fragment,null,"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3054\u3068\u306b\u3001\u3069\u306e\u3088\u3046\u306a\u914d\u5e03\u65b9\u6cd5\u304c\u9078\u629e\u3067\u304d\u308b\u304b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),to:"/distribution/usecase"}],u=[],d={toc:u};function v(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fWeb\u3068\u306f\u9055\u3063\u3066\u3001\u30e6\u30fc\u30b6\u3084\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u958b\u767a\u8005\u304c\u5b9f\u65bd\u3059\u308b\u624b\u9806\u3084\u5229\u7528\u3059\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3064\u3044\u3066\u3001\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3044\u30b7\u30c1\u30e5\u30a8\u30fc\u30b7\u30e7\u30f3\u3054\u3068\u306b\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(o.L,{overviews:m,colSize:12,mdxType:"PageList"}))}v.isMDXComponent=!0}}]);