"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1809],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,v=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(v,c(c({ref:t},u),{},{components:r})):a.createElement(v,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26201:(e,t,r)=>{r.d(t,{L:()=>v});var a=r(87462),n=r(39960),o=r(44996),c=r(86010),i=r(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:r=4,...s}=e;const u=(0,o.Z)(s.to);return i.createElement("div",{className:(0,c.Z)("col",`col--${r}`,l.pageOverviewContainer)},i.createElement(n.Z,(0,a.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},s,{to:u}),t))},u=e=>{let{title:t}=e;return i.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},i.createElement("h3",null,t))},p=e=>{let{src:t,alt:r,...n}=e;const s=(0,o.Z)(t);return i.createElement("div",{className:(0,c.Z)("card__image")},i.createElement("img",(0,a.Z)({className:l.pageOverviewImage},n,{alt:r,src:s})))},m=e=>{let{summary:t}=e;return i.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},i.createElement("p",null,t))},d=e=>{let{title:t,imageUrl:r,summary:a,...n}=e;return i.createElement(s,n,i.createElement(u,{title:`${t} \xbb`}),r&&i.createElement(p,{src:r,alt:t}),a&&i.createElement(m,{summary:a}))},v=e=>{let{overviews:t,colSize:r}=e;return i.createElement("section",{className:(0,c.Z)(l.pageList)},i.createElement("div",{className:(0,c.Z)("container")},i.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((e=>i.createElement(d,(0,a.Z)({key:e.to,colSize:r},e)))))))}},99147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=r(87462),n=r(67294),o=r(3905),c=r(26201);const i={title:"Docusaurus",sidebar_label:"\u306f\u3058\u3081\u306b",slug:"/docusaurus"},l=void 0,s={unversionedId:"docusaurus/index",id:"docusaurus/index",title:"Docusaurus",description:"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002",source:"@site/docs/docusaurus/index.mdx",sourceDirName:"docusaurus",slug:"/docusaurus",permalink:"/mobile-app-crib-notes/docusaurus",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"Docusaurus",sidebar_label:"\u306f\u3058\u3081\u306b",slug:"/docusaurus"},sidebar:"docusaurus",next:{title:"Markdown Syntax",permalink:"/mobile-app-crib-notes/docusaurus/doc1"}},u={},p=[{title:"Markdown",summary:(0,o.kt)(n.Fragment,null,"Markdown Syntax"),to:"/docusaurus/doc1"},{title:"MDX",summary:(0,o.kt)(n.Fragment,null,"About MDX"),to:"/docusaurus/mdx"},{title:"Plugin",summary:(0,o.kt)(n.Fragment,null,"About Custom Plugins"),to:"/docusaurus/plugins"}],m=[],d={toc:m};function v(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002"),(0,o.kt)(c.L,{overviews:p,colSize:12,mdxType:"PageList"}))}v.isMDXComponent=!0}}]);