"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7081],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,d=m["".concat(l,".").concat(v)]||m[v]||p[v]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26201:function(e,t,n){n.d(t,{L:function(){return b}});var r=n(87462),a=n(63366),i=n(39960),o=n(44996),c=n(86010),l=n(67294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},u=["children","colSize"],p=["src","alt"],m=["title","imageUrl","summary"],v=function(e){var t=e.children,n=e.colSize,p=void 0===n?4:n,m=(0,a.Z)(e,u),v=(0,o.Z)(m.to);return l.createElement("div",{className:(0,c.Z)("col","col--"+p,s.pageOverviewContainer)},l.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},m,{to:v}),t))},d=function(e){var t=e.title;return l.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},l.createElement("h3",null,t))},f=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,p),u=(0,o.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,r.Z)({className:s.pageOverviewImage},i,{alt:n,src:u})))},g=function(e){var t=e.summary;return l.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},l.createElement("p",null,t))},y=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,m);return l.createElement(v,i,l.createElement(d,{title:t+" \xbb"}),n&&l.createElement(f,{src:n,alt:t}),r&&l.createElement(g,{summary:r}))},b=function(e){var t=e.overviews,n=e.colSize;return l.createElement("section",{className:(0,c.Z)(s.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return l.createElement(y,(0,r.Z)({key:e.to,colSize:n},e))})))))}},14968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(26201),c=["components"],l={title:"\u8a2d\u8a08",sidebar_label:"\u6982\u8981"},s=void 0,u={unversionedId:"react-native/santoku/development/design",id:"react-native/santoku/development/design",title:"\u8a2d\u8a08",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306e\u65b9\u91dd\u3084\u30eb\u30fc\u30eb\u3001\u6c7a\u5b9a\u4e8b\u9805\u3084\u6ce8\u610f\u70b9\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/design.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/design",permalink:"/mobile-app-crib-notes/react-native/santoku/development/design",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",frontMatter:{title:"\u8a2d\u8a08",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u305d\u306e\u4ed6\u306e\u30c4\u30fc\u30eb",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/other-tools"},next:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/development/design/message-configuration"}},p=[{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u7ba1\u7406",to:"/react-native/santoku/development/design/message-configuration"},{title:"\u30ed\u30b0\u306e\u5229\u7528",to:"/react-native/santoku/development/design/logs"}],m=[],v={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306e\u65b9\u91dd\u3084\u30eb\u30fc\u30eb\u3001\u6c7a\u5b9a\u4e8b\u9805\u3084\u6ce8\u610f\u70b9\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)(o.L,{overviews:p,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);