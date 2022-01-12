"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5467],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,f=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26201:function(e,t,n){n.d(t,{L:function(){return b}});var r=n(87462),a=n(63366),i=n(39960),o=n(44996),c=n(86010),l=n(67294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},p=["children","colSize"],u=["src","alt"],m=["title","imageUrl","summary"],v=function(e){var t=e.children,n=e.colSize,u=void 0===n?4:n,m=(0,a.Z)(e,p),v=(0,o.Z)(m.to);return l.createElement("div",{className:(0,c.Z)("col","col--"+u,s.pageOverviewContainer)},l.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},m,{to:v}),t))},f=function(e){var t=e.title;return l.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},l.createElement("h3",null,t))},g=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,u),p=(0,o.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,r.Z)({className:s.pageOverviewImage},i,{alt:n,src:p})))},y=function(e){var t=e.summary;return l.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},l.createElement("p",null,t))},d=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,m);return l.createElement(v,i,l.createElement(f,{title:t+" \xbb"}),n&&l.createElement(g,{src:n,alt:t}),r&&l.createElement(y,{summary:r}))},b=function(e){var t=e.overviews,n=e.colSize;return l.createElement("section",{className:(0,c.Z)(s.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return l.createElement(d,(0,r.Z)({key:e.to,colSize:n},e))})))))}},95141:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return v},default:function(){return g}});var r=n(87462),a=n(63366),i=n(67294),o=n(3905),c=n(26201),l=["components"],s={title:"\u30c6\u30b9\u30c8\u89b3\u70b9",sidebar_label:"\u6982\u8981"},p=void 0,u={unversionedId:"react-native/santoku/test-planning/test-type/overview",id:"react-native/santoku/test-planning/test-type/overview",title:"\u30c6\u30b9\u30c8\u89b3\u70b9",description:"\u975e\u6a5f\u80fd\u8981\u4ef6\u300c\u30c6\u30b9\u30c8\u306b\u95a2\u3059\u308b\u4e8b\u9805\u300d\u306e\u30c6\u30b9\u30c8\u7a2e\u5225\u3054\u3068\u306b\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/test-planning/test-type/overview.mdx",sourceDirName:"react-native/santoku/test-planning/test-type",slug:"/react-native/santoku/test-planning/test-type/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/test-type/overview",tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"\u30c6\u30b9\u30c8\u89b3\u70b9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u5358\u4f53\u30c6\u30b9\u30c8\u8a08\u753b",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/ut-planning"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/test-type/functional-testing"}},m=[{title:"\u6a5f\u80fd\u30c6\u30b9\u30c8",to:"/react-native/santoku/test-planning/test-type/functional-testing",summary:(0,o.kt)(i.Fragment,null,"\u5404\u7a2e\u30c6\u30b9\u30c8\u89b3\u70b9\uff08\u753b\u9762\u306e\u8868\u793a\u7d50\u679c\u3084\u753b\u9762\u5185\u64cd\u4f5c\u306e\u7d50\u679c\u306a\u3069\uff09\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059")},{title:"\u69cb\u6210\u30c6\u30b9\u30c8",to:"/react-native/santoku/test-planning/test-type/configuration-test",summary:(0,o.kt)(i.Fragment,null,"OS\u30d0\u30fc\u30b8\u30e7\u30f3\u3084\u7aef\u672b\u89e3\u50cf\u5ea6\u3054\u3068\u306b\u5b9f\u65bd\u304c\u5fc5\u8981\u306a\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059")},{title:"\u6027\u80fd\u30c6\u30b9\u30c8",to:"/react-native/santoku/test-planning/test-type/performance-test",summary:(0,o.kt)(i.Fragment,null,"\u30a2\u30d7\u30ea\u306e\u5fdc\u7b54\u6642\u9593\u3084CPU\u30fb\u30e1\u30e2\u30ea\u4f7f\u7528\u7387\u306e\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059")}],v=[],f={toc:v};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u975e\u6a5f\u80fd\u8981\u4ef6\u300c\u30c6\u30b9\u30c8\u306b\u95a2\u3059\u308b\u4e8b\u9805\u300d\u306e",(0,o.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/test-outline#%E3%83%86%E3%82%B9%E3%83%88%E7%A8%AE%E5%88%A5"},"\u30c6\u30b9\u30c8\u7a2e\u5225"),"\u3054\u3068\u306b\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(c.L,{overviews:m,colSize:12,mdxType:"PageList"}))}g.isMDXComponent=!0}}]);