"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af",sidebar_label:"\u6982\u8981",pagination_label:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af"},o=void 0,p={unversionedId:"react-native/santoku/application-architecture/deep-link/overview",id:"react-native/santoku/application-architecture/deep-link/overview",title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af",description:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3068\u306f\u3001iOS\u3084Android\u3067URL\u306e\u30ea\u30f3\u30af\u3092\u958b\u304f\u3068\u30a2\u30d7\u30ea\u304c\u8d77\u52d5\u3059\u308b\u4ed5\u7d44\u307f\u306e\u3053\u3068\u3067\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/deep-link/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/deep-link",slug:"/react-native/santoku/application-architecture/deep-link/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1695803553,formattedLastUpdatedAt:"2023\u5e749\u670827\u65e5",frontMatter:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af",sidebar_label:"\u6982\u8981",pagination_label:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af"},sidebar:"santoku",previous:{title:"React Query\u3092\u7528\u3044\u305fHTTP API\u901a\u4fe1",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-react-query"},next:{title:"Universal Links",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/universal-links"}},l={},c=[{value:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u6cd5",id:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u6cd5",level:2},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3068\u306f\u3001iOS\u3084Android\u3067URL\u306e\u30ea\u30f3\u30af\u3092\u958b\u304f\u3068\u30a2\u30d7\u30ea\u304c\u8d77\u52d5\u3059\u308b\u4ed5\u7d44\u307f\u306e\u3053\u3068\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u304b\u3089\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u305f\u3068\u304d\u306b\u3001\u305d\u306eURL\u306b\u5fdc\u3058\u305f\u753b\u9762\u306e\u8868\u793a\u3084\u3001URL\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u5f93\u3063\u305f\u521d\u671f\u5024\u306e\u8a2d\u5b9a\u306a\u3069\u3001\u5e45\u5e83\u304f\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u6cd5"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u6cd5"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u3001OS\u306e\u6a19\u6e96\u6a5f\u80fd\u3067\u3042\u308b",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/ios/universal-links/"},"Universal Links"),"\u3068",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links"},"Android App Links"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u3082\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u306f\u3001\u8907\u6570\u306e\u30a2\u30d7\u30ea\u304c\u540c\u3058\u30b9\u30ad\u30fc\u30e0\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u305f\u3081\u3001OS\u306fURL\u30ea\u30f3\u30af\u306e\u5bfe\u8c61\u3068\u3059\u308b\u30a2\u30d7\u30ea\u3092\u4e00\u610f\u306b\u7279\u5b9a\u3067\u304d\u307e\u305b\u3093\u3002\u305d\u306e\u7d50\u679c\u3001\u6b63\u898f\u30a2\u30d7\u30ea\u306e\u30b9\u30ad\u30fc\u30e0\u3092\u507d\u88c5\u3057\u305f\u4e0d\u6b63\u30a2\u30d7\u30ea\u306b\u3088\u3063\u3066URL\u30ea\u30f3\u30af\u3092\u4e57\u3063\u53d6\u3089\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app"},"Apple\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u3082\u3001\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u3067\u306f\u306a\u304fUniversal Links\u3092\u63a8\u5968\u3059\u308b\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"While custom URL schemes are an acceptable form of deep linking, universal links are strongly recommended.")),(0,a.kt)("p",{parentName:"admonition"},"\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30ab\u30b9\u30bf\u30e0URL\u30b9\u30ad\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002")),(0,a.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-018-deep-link"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-019-deep-link-navigation"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u53d7\u4fe1\u6642\u306e\u753b\u9762\u9077\u79fb"))))}d.isMDXComponent=!0}}]);