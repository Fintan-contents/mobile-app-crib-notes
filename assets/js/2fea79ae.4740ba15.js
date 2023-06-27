"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,b=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406",sidebar_label:"\u6982\u8981",pagination_label:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406"},o=void 0,c={unversionedId:"react-native/santoku/application-architecture/message-configuration/overview",id:"react-native/santoku/application-architecture/message-configuration/overview",title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406",description:"\u753b\u9762\u306e\u8868\u793a\u9805\u76ee\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7ba1\u7406\u3057\u306a\u3044\u5834\u5408\u3001\u753b\u9762\u3054\u3068\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3055\u308c\u3001\u30a2\u30d7\u30ea\u5168\u4f53\u3068\u3057\u3066\u306e\u6587\u8a00\u3084\u6587\u4f53\u306e\u4f53\u88c1\u304c\u7d71\u4e00\u3055\u308c\u305a\u3001UI/UX\u306e\u54c1\u8cea\u4f4e\u4e0b\u3092\u62db\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/message-configuration/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/message-configuration",slug:"/react-native/santoku/application-architecture/message-configuration/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1687749071,formattedLastUpdatedAt:"2023\u5e746\u670826\u65e5",frontMatter:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406",sidebar_label:"\u6982\u8981",pagination_label:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406"},sidebar:"santoku",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/credential-management"},next:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30ed\u30fc\u30c9",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/load-message"}},l={},p=[{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u65b9\u5f0f",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u65b9\u5f0f",level:2},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u753b\u9762\u306e\u8868\u793a\u9805\u76ee\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7ba1\u7406\u3057\u306a\u3044\u5834\u5408\u3001\u753b\u9762\u3054\u3068\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3055\u308c\u3001\u30a2\u30d7\u30ea\u5168\u4f53\u3068\u3057\u3066\u306e\u6587\u8a00\u3084\u6587\u4f53\u306e\u4f53\u88c1\u304c\u7d71\u4e00\u3055\u308c\u305a\u3001UI/UX\u306e\u54c1\u8cea\u4f4e\u4e0b\u3092\u62db\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5909\u66f4\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u5909\u66f4\u7b87\u6240\u304c\u591a\u5c90\u306b\u308f\u305f\u308a\u307e\u3059\uff08\u4f4e\u3044\u4fdd\u5b88\u6027\uff09\u3002\n\u305d\u306e\u4ed6\u306b\u3082\u3001\u591a\u8a00\u8a9e\u5bfe\u5fdc\u3059\u308b\u5834\u5408\u306e\u62e1\u5f35\u6027\u3082\u4f4e\u3044\u3082\u306e\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4e0a\u306b\u3042\u3052\u305f\u7406\u7531\u306b\u3088\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u96c6\u7d04\u7684\u306b\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u65b9\u5f0f"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u65b9\u5f0f"),(0,a.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u65b9\u5f0f\u306e\u5168\u4f53\u50cf\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",src:r(44742).Z,width:"331",height:"442"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u306e\u521d\u671f\u51e6\u7406\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u30ed\u30fc\u30c0\u30fc\u3092\u6307\u5b9a\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u8aad\u307f\u8fbc\u307f\u51e6\u7406\u3092\u547c\u3073\u51fa\u3057"),(0,a.kt)("li",{parentName:"ol"},"\u30a2\u30d7\u30ea\u5185\u306b\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e1\u30c3\u30bb\u30fc\u30b8\u30ed\u30fc\u30c0\u30fc\u306e\u5b9f\u88c5\u30af\u30e9\u30b9\u3092\u901a\u3058\u3066\u8aad\u307f\u8fbc\u307f")),(0,a.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-005-message"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd"))))}m.isMDXComponent=!0},44742:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/message-configuration.drawio-7ebb333b6a8053221e8d456c490cbd11.png"}}]);