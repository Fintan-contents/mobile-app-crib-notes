"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),v=a,g=u["".concat(c,".").concat(v)]||u[v]||m[v]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26201:(e,t,n)=>{n.d(t,{L:()=>g});var r=n(87462),a=n(39960),i=n(44996),o=n(86010),l=n(67294);const c={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},s=e=>{let{children:t,colSize:n=4,...s}=e;const p=(0,i.Z)(s.to);return l.createElement("div",{className:(0,o.Z)("col",`col--${n}`,c.pageOverviewContainer)},l.createElement(a.Z,(0,r.Z)({className:(0,o.Z)("card",c.pageOverviewLinkCard)},s,{to:p}),t))},p=e=>{let{title:t}=e;return l.createElement("div",{className:(0,o.Z)("card__header",c.pageOverviewTitle)},l.createElement("h3",null,t))},m=e=>{let{src:t,alt:n,...a}=e;const s=(0,i.Z)(t);return l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement("img",(0,r.Z)({className:c.pageOverviewImage},a,{alt:n,src:s})))},u=e=>{let{summary:t}=e;return l.createElement("div",{className:(0,o.Z)("card__body",c.pageOverviewSummary)},l.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:n,summary:r,...a}=e;return l.createElement(s,a,l.createElement(p,{title:`${t} \xbb`}),n&&l.createElement(m,{src:n,alt:t}),r&&l.createElement(u,{summary:r}))},g=e=>{let{overviews:t,colSize:n}=e;return l.createElement("section",{className:(0,o.Z)(c.pageList)},l.createElement("div",{className:(0,o.Z)("container")},l.createElement("div",{className:(0,o.Z)("row",c.pageListRow)},t.map((e=>l.createElement(v,(0,r.Z)({key:e.to,colSize:n},e)))))))}},95141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(67294),i=n(3905),o=n(26201);const l={title:"\u30c6\u30b9\u30c8\u89b3\u70b9",sidebar_label:"\u6982\u8981"},c=void 0,s={unversionedId:"react-native/santoku/test-planning/test-type/overview",id:"react-native/santoku/test-planning/test-type/overview",title:"\u30c6\u30b9\u30c8\u89b3\u70b9",description:"\u975e\u6a5f\u80fd\u8981\u4ef6\u300c\u30c6\u30b9\u30c8\u306b\u95a2\u3059\u308b\u4e8b\u9805\u300d\u306e\u30c6\u30b9\u30c8\u7a2e\u5225\u3054\u3068\u306b\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/test-planning/test-type/overview.mdx",sourceDirName:"react-native/santoku/test-planning/test-type",slug:"/react-native/santoku/test-planning/test-type/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/test-type/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021\u5e7412\u670820\u65e5",frontMatter:{title:"\u30c6\u30b9\u30c8\u89b3\u70b9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u5358\u4f53\u30c6\u30b9\u30c8\u8a08\u753b",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/ut-planning"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/test-planning/test-type/functional-testing"}},p={},m=[{title:"\u6a5f\u80fd\u30c6\u30b9\u30c8",to:"/react-native/santoku/test-planning/test-type/functional-testing",summary:(0,i.kt)(a.Fragment,null,"\u5404\u7a2e\u30c6\u30b9\u30c8\u89b3\u70b9\uff08\u753b\u9762\u306e\u8868\u793a\u7d50\u679c\u3084\u753b\u9762\u5185\u64cd\u4f5c\u306e\u7d50\u679c\u306a\u3069\uff09\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059")},{title:"\u69cb\u6210\u30c6\u30b9\u30c8",to:"/react-native/santoku/test-planning/test-type/configuration-test",summary:(0,i.kt)(a.Fragment,null,"OS\u30d0\u30fc\u30b8\u30e7\u30f3\u3084\u7aef\u672b\u89e3\u50cf\u5ea6\u3054\u3068\u306b\u5b9f\u65bd\u304c\u5fc5\u8981\u306a\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059")},{title:"\u6027\u80fd\u30c6\u30b9\u30c8",to:"/react-native/santoku/test-planning/test-type/performance-test",summary:(0,i.kt)(a.Fragment,null,"\u30a2\u30d7\u30ea\u306e\u5fdc\u7b54\u6642\u9593\u3084CPU\u30fb\u30e1\u30e2\u30ea\u4f7f\u7528\u7387\u306e\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059")}],u=[],v={toc:u};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u975e\u6a5f\u80fd\u8981\u4ef6\u300c\u30c6\u30b9\u30c8\u306b\u95a2\u3059\u308b\u4e8b\u9805\u300d\u306e",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/test-outline#%E3%83%86%E3%82%B9%E3%83%88%E7%A8%AE%E5%88%A5"},"\u30c6\u30b9\u30c8\u7a2e\u5225"),"\u3054\u3068\u306b\u30c6\u30b9\u30c8\u89b3\u70b9\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(o.L,{overviews:m,colSize:12,mdxType:"PageList"}))}g.isMDXComponent=!0}}]);