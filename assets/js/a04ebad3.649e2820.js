"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9117],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),v=a,d=m["".concat(s,".").concat(v)]||m[v]||u[v]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26201:function(e,t,r){r.d(t,{L:function(){return w}});var n=r(87462),a=r(63366),i=r(39960),o=r(44996),c=r(86010),s=r(67294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},p=["children","colSize"],u=["src","alt"],m=["title","imageUrl","summary"],v=function(e){var t=e.children,r=e.colSize,u=void 0===r?4:r,m=(0,a.Z)(e,p),v=(0,o.Z)(m.to);return s.createElement("div",{className:(0,c.Z)("col","col--"+u,l.pageOverviewContainer)},s.createElement(i.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},m,{to:v}),t))},d=function(e){var t=e.title;return s.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},s.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,u),p=(0,o.Z)(t);return s.createElement("div",{className:(0,c.Z)("card__image")},s.createElement("img",(0,n.Z)({className:l.pageOverviewImage},i,{alt:r,src:p})))},g=function(e){var t=e.summary;return s.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},s.createElement("p",null,t))},b=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,m);return s.createElement(v,i,s.createElement(d,{title:t+" \xbb"}),r&&s.createElement(f,{src:r,alt:t}),n&&s.createElement(g,{summary:n}))},w=function(e){var t=e.overviews,r=e.colSize;return s.createElement("section",{className:(0,c.Z)(l.pageList)},s.createElement("div",{className:(0,c.Z)("container")},s.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return s.createElement(b,(0,n.Z)({key:e.to,colSize:r},e))})))))}},59942:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(26201),c=["components"],s={title:"\u5171\u901a\u90e8\u54c1",sidebar_label:"\u6982\u8981"},l=void 0,p={unversionedId:"react-native/santoku/design/screen-specs/common-parts/overview",id:"react-native/santoku/design/screen-specs/common-parts/overview",title:"\u5171\u901a\u90e8\u54c1",description:"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u3001\u753b\u9762\u5168\u4f53\u3067\u4f7f\u7528\u3059\u308b\u5171\u901a\u90e8\u54c1\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/design/screen-specs/common-parts/overview.mdx",sourceDirName:"react-native/santoku/design/screen-specs/common-parts",slug:"/react-native/santoku/design/screen-specs/common-parts/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/overview",tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"\u5171\u901a\u90e8\u54c1",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u5229\u7528\u898f\u7d04\u540c\u610f",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/screens/terms-of-service-agreement/overview"},next:{title:"\u30dc\u30bf\u30f3",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/button/overview"}},u=[{title:"\u30dc\u30bf\u30f3",to:"/react-native/santoku/design/screen-specs/common-parts/button/overview"},{title:"\u30b9\u30ca\u30c3\u30af\u30d0\u30fc",to:"/react-native/santoku/design/screen-specs/common-parts/snackbar/overview"},{title:"WebView",to:"/react-native/santoku/design/screen-specs/common-parts/webview/overview"}],m=[],v={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u3001\u753b\u9762\u5168\u4f53\u3067\u4f7f\u7528\u3059\u308b\u5171\u901a\u90e8\u54c1\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,i.kt)(o.L,{overviews:u,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);