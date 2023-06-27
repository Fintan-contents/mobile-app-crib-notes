"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),v=r,g=m["".concat(c,".").concat(v)]||m[v]||u[v]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},26201:(e,t,n)=>{n.d(t,{L:()=>g});var a=n(87462),r=n(39960),i=n(44996),l=n(86010),o=n(67294);const c={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:n=4,...s}=e;const p=(0,i.Z)(s.to);return o.createElement("div",{className:(0,l.Z)("col",`col--${n}`,c.pageOverviewContainer)},o.createElement(r.Z,(0,a.Z)({className:(0,l.Z)("card",c.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return o.createElement("div",{className:(0,l.Z)("card__header",c.pageOverviewTitle)},o.createElement("h3",null,t))},m=e=>{let{src:t,alt:n,...r}=e;const s=(0,i.Z)(t);return o.createElement("div",{className:(0,l.Z)("card__image")},o.createElement("img",(0,a.Z)({className:c.pageOverviewImage},r,{alt:n,src:s})))},u=e=>{let{summary:t}=e;return o.createElement("div",{className:(0,l.Z)("card__body",c.pageOverviewSummary)},o.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:n,summary:a,...r}=e;return o.createElement(s,r,o.createElement(p,{title:`${t} \xbb`}),n&&o.createElement(m,{src:n,alt:t}),a&&o.createElement(u,{summary:a}))},g=e=>{let{overviews:t,colSize:n}=e;return o.createElement("section",{className:(0,l.Z)(c.pageList)},o.createElement("div",{className:(0,l.Z)("container")},o.createElement("div",{className:(0,l.Z)("row",c.pageListRow)},t.map((e=>o.createElement(v,(0,a.Z)({key:e.to,colSize:n},e)))))))}},25165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(26201);const l={title:"Test Planning",sidebar_label:"\u76ee\u6b21",pagination_label:"Test Planning - \u76ee\u6b21",hide_table_of_contents:!0},o=void 0,c={unversionedId:"react-native/santoku/test-planning",id:"react-native/santoku/test-planning",title:"Test Planning",description:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c6\u30b9\u30c8\u8a08\u753b\u3067\u306f\u3001\u4e00\u822c\u7684\u306a\u958b\u767a\u3067\u4f5c\u6210\u3059\u308b\u90e8\u5206\u3088\u308a\u3082\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u7279\u6709\u306a\u89b3\u70b9\u306b\u91cd\u70b9\u3092\u304a\u3044\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/test-planning.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/test-planning",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning",draft:!1,tags:[],version:"current",lastUpdatedAt:1687749071,formattedLastUpdatedAt:"2023\u5e746\u670826\u65e5",frontMatter:{title:"Test Planning",sidebar_label:"\u76ee\u6b21",pagination_label:"Test Planning - \u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u53d6\u308a\u6271\u3044",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/cache-management/overview"},next:{title:"\u5168\u4f53\u30c6\u30b9\u30c8\u8a08\u753b",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/test-all-planning"}},s={},p=[{title:"\u5168\u4f53\u30c6\u30b9\u30c8\u8a08\u753b",to:"/react-native/santoku/test-planning/test-all-planning"},{title:"\u5358\u4f53\u30c6\u30b9\u30c8\u8a08\u753b",to:"/react-native/santoku/test-planning/ut-planning"},{title:"\u30c6\u30b9\u30c8\u89b3\u70b9",to:"/react-native/santoku/test-planning/test-type/overview"},{title:"\u30c6\u30b9\u30c8\u7aef\u672b\u30d0\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3",to:"/react-native/santoku/test-planning/test-variation"},{title:"QA\u5c02\u9580\u30d9\u30f3\u30c0\u30fc\u3068\u306e\u5354\u696d",to:"/react-native/santoku/test-planning/collaboration-with-qa-vendors"}],m=[],u={toc:m},v="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c6\u30b9\u30c8\u8a08\u753b\u3067\u306f\u3001\u4e00\u822c\u7684\u306a\u958b\u767a\u3067\u4f5c\u6210\u3059\u308b\u90e8\u5206\u3088\u308a\u3082\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u7279\u6709\u306a\u89b3\u70b9\u306b\u91cd\u70b9\u3092\u304a\u3044\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}g.isMDXComponent=!0}}]);