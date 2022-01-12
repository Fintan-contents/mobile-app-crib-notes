"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4391],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=l(r),m=a,d=v["".concat(s,".").concat(m)]||v[m]||u[m]||i;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},26201:function(e,t,r){r.d(t,{L:function(){return b}});var n=r(87462),a=r(63366),i=r(39960),c=r(44996),o=r(86010),s=r(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},p=["children","colSize"],u=["src","alt"],v=["title","imageUrl","summary"],m=function(e){var t=e.children,r=e.colSize,u=void 0===r?4:r,v=(0,a.Z)(e,p),m=(0,c.Z)(v.to);return s.createElement("div",{className:(0,o.Z)("col","col--"+u,l.pageOverviewContainer)},s.createElement(i.Z,(0,n.Z)({className:(0,o.Z)("card",l.pageOverviewLinkCard)},v,{to:m}),t))},d=function(e){var t=e.title;return s.createElement("div",{className:(0,o.Z)("card__header",l.pageOverviewTitle)},s.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,u),p=(0,c.Z)(t);return s.createElement("div",{className:(0,o.Z)("card__image")},s.createElement("img",(0,n.Z)({className:l.pageOverviewImage},i,{alt:r,src:p})))},g=function(e){var t=e.summary;return s.createElement("div",{className:(0,o.Z)("card__body",l.pageOverviewSummary)},s.createElement("p",null,t))},y=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,v);return s.createElement(m,i,s.createElement(d,{title:t+" \xbb"}),r&&s.createElement(f,{src:r,alt:t}),n&&s.createElement(g,{summary:n}))},b=function(e){var t=e.overviews,r=e.colSize;return s.createElement("section",{className:(0,o.Z)(l.pageList)},s.createElement("div",{className:(0,o.Z)("container")},s.createElement("div",{className:(0,o.Z)("row",l.pageListRow)},t.map((function(e){return s.createElement(y,(0,n.Z)({key:e.to,colSize:r},e))})))))}},49380:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return v},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),c=r(26201),o=["components"],s={title:"\u753b\u9762\u4ed5\u69d8",sidebar_label:"\u6982\u8981"},l=void 0,p={unversionedId:"react-native/santoku/design/screen-specs/overview",id:"react-native/santoku/design/screen-specs/overview",title:"\u753b\u9762\u4ed5\u69d8",description:"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u753b\u9762\u4ed5\u69d8\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/design/screen-specs/overview.mdx",sourceDirName:"react-native/santoku/design/screen-specs",slug:"/react-native/santoku/design/screen-specs/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/overview",tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"\u753b\u9762\u4ed5\u69d8",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u753b\u9762\u9077\u79fb\u56f3",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-transitions/overview"},next:{title:"\u57fa\u672c\u65b9\u91dd",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/basic-policy"}},u=[{title:"\u57fa\u672c\u65b9\u91dd",to:"/react-native/santoku/design/screen-specs/basic-policy"},{title:"\u753b\u9762\u4ed5\u69d8\u306b\u304a\u3051\u308b\u5b9a\u7fa9\u4e8b\u9805",to:"/react-native/santoku/design/screen-specs/definitions/overview"},{title:"\u753b\u9762",to:"/react-native/santoku/design/screen-specs/screens/overview"},{title:"\u5171\u901a\u90e8\u54c1",to:"/react-native/santoku/design/screen-specs/common-parts/overview"}],v=[],m={toc:v};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u753b\u9762\u4ed5\u69d8\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,i.kt)(c.L,{overviews:u,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);