"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1809],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(v,u(u({ref:t},s),{},{components:r})):n.createElement(v,u({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26201:function(e,t,r){r.d(t,{L:function(){return b}});var n=r(87462),a=r(63366),o=r(39960),u=r(44996),c=r(86010),i=r(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=["children","colSize"],m=["src","alt"],p=["title","imageUrl","summary"],d=function(e){var t=e.children,r=e.colSize,m=void 0===r?4:r,p=(0,a.Z)(e,s),d=(0,u.Z)(p.to);return i.createElement("div",{className:(0,c.Z)("col","col--"+m,l.pageOverviewContainer)},i.createElement(o.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},p,{to:d}),t))},v=function(e){var t=e.title;return i.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},i.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,o=(0,a.Z)(e,m),s=(0,u.Z)(t);return i.createElement("div",{className:(0,c.Z)("card__image")},i.createElement("img",(0,n.Z)({className:l.pageOverviewImage},o,{alt:r,src:s})))},g=function(e){var t=e.summary;return i.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},i.createElement("p",null,t))},y=function(e){var t=e.title,r=e.imageUrl,n=e.summary,o=(0,a.Z)(e,p);return i.createElement(d,o,i.createElement(v,{title:t+" \xbb"}),r&&i.createElement(f,{src:r,alt:t}),n&&i.createElement(g,{summary:n}))},b=function(e){var t=e.overviews,r=e.colSize;return i.createElement("section",{className:(0,c.Z)(l.pageList)},i.createElement("div",{className:(0,c.Z)("container")},i.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return i.createElement(y,(0,n.Z)({key:e.to,colSize:r},e))})))))}},99147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var n=r(87462),a=r(63366),o=r(67294),u=r(3905),c=r(26201),i=["components"],l={title:"Docusaurus",sidebar_label:"\u306f\u3058\u3081\u306b",slug:"/docusaurus"},s=void 0,m={unversionedId:"docusaurus/index",id:"docusaurus/index",title:"Docusaurus",description:"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002",source:"@site/docs/docusaurus/index.mdx",sourceDirName:"docusaurus",slug:"/docusaurus",permalink:"/mobile-app-crib-notes/docusaurus",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"Docusaurus",sidebar_label:"\u306f\u3058\u3081\u306b",slug:"/docusaurus"},sidebar:"docusaurus",next:{title:"Markdown Syntax",permalink:"/mobile-app-crib-notes/docusaurus/doc1"}},p=[{title:"Markdown",summary:(0,u.kt)(o.Fragment,null,"Markdown Syntax"),to:"/docusaurus/doc1"},{title:"MDX",summary:(0,u.kt)(o.Fragment,null,"About MDX"),to:"/docusaurus/mdx"},{title:"Plugin",summary:(0,u.kt)(o.Fragment,null,"About Custom Plugins"),to:"/docusaurus/plugins"}],d=[],v={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002"),(0,u.kt)(c.L,{overviews:p,colSize:12,mdxType:"PageList"}))}f.isMDXComponent=!0}}]);