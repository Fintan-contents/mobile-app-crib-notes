"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},26201:(e,t,n)=>{n.d(t,{L:()=>d});var r=n(87462),a=n(39960),i=n(44996),c=n(86010),o=n(67294);const l={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:n=4,...s}=e;const p=(0,i.Z)(s.to);return o.createElement("div",{className:(0,c.Z)("col",`col--${n}`,l.pageOverviewContainer)},o.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return o.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},o.createElement("h3",null,t))},m=e=>{let{src:t,alt:n,...a}=e;const s=(0,i.Z)(t);return o.createElement("div",{className:(0,c.Z)("card__image")},o.createElement("img",(0,r.Z)({className:l.pageOverviewImage},a,{alt:n,src:s})))},u=e=>{let{summary:t}=e;return o.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},o.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:n,summary:r,...a}=e;return o.createElement(s,a,o.createElement(p,{title:`${t} \xbb`}),n&&o.createElement(m,{src:n,alt:t}),r&&o.createElement(u,{summary:r}))},d=e=>{let{overviews:t,colSize:n}=e;return o.createElement("section",{className:(0,c.Z)(l.pageList)},o.createElement("div",{className:(0,c.Z)("container")},o.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((e=>o.createElement(v,(0,r.Z)({key:e.to,colSize:n},e)))))))}},26766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(26201);const c={title:"\u30a8\u30f3\u30cf\u30f3\u30b9",sidebar_label:"\u6982\u8981"},o=void 0,l={unversionedId:"react-native/santoku/maintenance/enhance",id:"react-native/santoku/maintenance/enhance",title:"\u30a8\u30f3\u30cf\u30f3\u30b9",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3059\u308b\u57fa\u76e4\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u4e3b\u8981\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3068\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u5bfe\u5fdc\u3059\u308b\u969b\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u624b\u9806\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/maintenance/enhance.mdx",sourceDirName:"react-native/santoku/maintenance",slug:"/react-native/santoku/maintenance/enhance",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance/enhance",draft:!1,tags:[],version:"current",lastUpdatedAt:1680240073,formattedLastUpdatedAt:"2023\u5e743\u670831\u65e5",frontMatter:{title:"\u30a8\u30f3\u30cf\u30f3\u30b9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance"},next:{title:"Config Plugins\u5bfe\u5fdc",permalink:"/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/config-plugins"}},s={},p=[{title:"Config Plugins\u5bfe\u5fdc",to:"/react-native/santoku/maintenance/enhance/config-plugins"},{title:"Expo SDK 46\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",to:"/react-native/santoku/maintenance/enhance/expo-46-upgrade"}],m=[],u={toc:m},v="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u5229\u7528\u3059\u308b\u57fa\u76e4\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u4e3b\u8981\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3068\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u5bfe\u5fdc\u3059\u308b\u969b\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u624b\u9806\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,a.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0}}]);