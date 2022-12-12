"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"OpenID Connect\u3068\u7aef\u672b\u8a8d\u8a3c\u3092\u7528\u3044\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c\u65b9\u5f0f"},o=void 0,c={unversionedId:"reference/auth/authn-with-backend-using-OIDC-and-device-authn",id:"reference/auth/authn-with-backend-using-OIDC-and-device-authn",title:"OpenID Connect\u3068\u7aef\u672b\u8a8d\u8a3c\u3092\u7528\u3044\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c\u65b9\u5f0f",description:"\u8a8d\u8a3c\u65b9\u5f0f",source:"@site/docs/reference/auth/authn-with-backend-using-OIDC-and-device-authn.md",sourceDirName:"reference/auth",slug:"/reference/auth/authn-with-backend-using-OIDC-and-device-authn",permalink:"/mobile-app-crib-notes/reference/auth/authn-with-backend-using-OIDC-and-device-authn",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"OpenID Connect\u3068\u7aef\u672b\u8a8d\u8a3c\u3092\u7528\u3044\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c\u65b9\u5f0f"},sidebar:"reference",previous:{title:"Web\u30a2\u30d7\u30ea\u3068\u306e\u8a8d\u8a3c\u60c5\u5831\u306e\u9023\u643a",permalink:"/mobile-app-crib-notes/reference/auth/webassets-integration"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/reference/notification/overview"}},p={},l=[{value:"\u8a8d\u8a3c\u65b9\u5f0f",id:"\u8a8d\u8a3c\u65b9\u5f0f",level:2},{value:"RFC 8252\u306b\u5f93\u3063\u305fOpenID Connect\u8a8d\u8a3c",id:"rfc-8252\u306b\u5f93\u3063\u305fopenid-connect\u8a8d\u8a3c",level:3},{value:"ID\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u78ba\u7acb",id:"id\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u78ba\u7acb",level:3},{value:"\u30c8\u30fc\u30af\u30f3\u4fdd\u7ba1\u306b\u3088\u308b\u8a8d\u8a3c\u306e\u7d99\u7d9a\u3068\u7aef\u672b\u8a8d\u8a3c\u306b\u3088\u308b\u4fdd\u8b77",id:"\u30c8\u30fc\u30af\u30f3\u4fdd\u7ba1\u306b\u3088\u308b\u8a8d\u8a3c\u306e\u7d99\u7d9a\u3068\u7aef\u672b\u8a8d\u8a3c\u306b\u3088\u308b\u4fdd\u8b77",level:3},{value:"\u8a8d\u8a3c\u30d5\u30ed\u30fc",id:"\u8a8d\u8a3c\u30d5\u30ed\u30fc",level:3},{value:"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3067\u671f\u5f85\u3055\u308c\u308b\u52b9\u679c",id:"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3067\u671f\u5f85\u3055\u308c\u308b\u52b9\u679c",level:3}],u={toc:l};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8a8d\u8a3c\u65b9\u5f0f"},"\u8a8d\u8a3c\u65b9\u5f0f"),(0,a.kt)("p",null,"\u4eca\u56de\u7d39\u4ecb\u3059\u308b\u8a8d\u8a3c\u65b9\u5f0f\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/overview#%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A7%8B%E6%88%90%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E4%B8%8D%E6%98%8E%E7%82%B9%E3%82%84%E8%AA%B2%E9%A1%8C"},"\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u305f\u30b7\u30b9\u30c6\u30e0\u69cb\u6210\u306b\u95a2\u3059\u308b\u4e0d\u660e\u70b9\u3084\u8ab2\u984c"),"\u306b\u5bfe\u3059\u308b1\u3064\u306e\u89e3\u6c7a\u624b\u6cd5\u3067\u3059\u3002\n\u3053\u306e\u8a8d\u8a3c\u65b9\u5f0f\u306e\u7279\u5fb4\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc8252.txt"},"RFC 8252"),"\u306b\u5f93\u3063\u305fOpenID Connect\u8a8d\u8a3c"),(0,a.kt)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u78ba\u7acb"),(0,a.kt)("li",{parentName:"ul"},"\u30c8\u30fc\u30af\u30f3\u4fdd\u7ba1\u306b\u3088\u308b\u8a8d\u8a3c\u306e\u7d99\u7d9a\u3068\u7aef\u672b\u8a8d\u8a3c\uff08\u30d1\u30b9\u30b3\u30fc\u30c9\u306e\u5165\u529b\u3084\u6307\u7d0b\u8a8d\u8a3c\u3001Face ID\u306a\u3069\u7aef\u672b\u6a5f\u80fd\u3092\u7528\u3044\u305f\u672c\u4eba\u8a8d\u8a3c\uff09\u306b\u3088\u308b\u4fdd\u8b77")),(0,a.kt)("p",null,"\u8a8d\u8a3c\u65b9\u5f0f\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenID Connect\u3068\u7aef\u672b\u8a8d\u8a3c\u3092\u7528\u3044\u305f\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u65b9\u5f0f",src:n(88053).Z,width:"571",height:"476"})),(0,a.kt)("h3",{id:"rfc-8252\u306b\u5f93\u3063\u305fopenid-connect\u8a8d\u8a3c"},"RFC 8252\u306b\u5f93\u3063\u305fOpenID Connect\u8a8d\u8a3c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8252.txt"},"RFC 8252"),"\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u306bOAuth 2.0\u3092\u5229\u7528\u3059\u308b\u3068\u304d\u306eBest Current Practice\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u306b\u5f93\u3046\u3053\u3068\u3067\u3001\u5145\u5206\u306b\u691c\u8a3c\u3055\u308c\u305f\u624b\u6cd5\u3067\u8a8d\u8a3c\u51fa\u6765\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8252.txt"},"RFC 8252"),"\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/stateless-authn#openid-connect%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%AA%8D%E8%A8%BC%E3%83%95%E3%83%AD%E3%83%BC"},"OpenID Connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc"),"\u3067\u3082\u7d39\u4ecb\u3057\u3066\u304a\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"id\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u78ba\u7acb"},"ID\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u78ba\u7acb"),(0,a.kt)("p",null,"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3067\u306f\u3001\u8a8d\u8a3c\u30b5\u30fc\u30d3\u30b9\u306b\u3088\u308b\u8a8d\u8a3c\u3067\u5f97\u305fID\u30c8\u30fc\u30af\u30f3\u3092\u7528\u3044\u3066\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002\nID\u30c8\u30fc\u30af\u30f3\u306f\u30ea\u30e9\u30a4\u30f3\u30b0\u30fb\u30d1\u30fc\u30c6\u30a3\u306b\u3088\u308b\u89e3\u6790\u3092\u610f\u56f3\u3055\u308c\u305f\u3082\u306e\u3067\u3059\u3002\n\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u304c\u540c\u4e00\u30ea\u30e9\u30a4\u30f3\u30b0\u30fb\u30d1\u30fc\u30c6\u30a3\u5185\u306b\u3042\u308b\u524d\u63d0\u306b\u304a\u3044\u3066\u3001ID\u30c8\u30fc\u30af\u30f3\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002\n\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3068\u306f\u9055\u3044\u3001ID\u30c8\u30fc\u30af\u30f3\u306f\u8a8d\u8a3c\u306e\u8a3c\u660e\u306b\u4f7f\u7528\u3067\u304d\u3001\u305d\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3082\u4ed5\u69d8\u3067\u5b9a\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u306eID\u30c8\u30fc\u30af\u30f3\u3092HTTPS\u3092\u4f7f\u7528\u3057\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u306b\uff08\u5f93\u6765\u306eID/\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u4ee3\u308f\u308a\u306b\uff09\u9001\u4fe1\u3057\u3001ID\u30c8\u30fc\u30af\u30f3\u306e\u59a5\u5f53\u6027\u3092\u691c\u8a3c\u3059\u308b\u3053\u3068\u3067\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002\nID\u30c8\u30fc\u30af\u30f3\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u8a8d\u8a3c\u306e\u307f\u306b\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u6709\u52b9\u671f\u9650\u306f\u5145\u5206\u306b\u77ed\u304f\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\uff08\u901a\u5e38\u6570\u5206\u4ee5\u5185\uff09\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"ID\u30c8\u30fc\u30af\u30f3\u306e\u59a5\u5f53\u6027\u691c\u8a3c\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://fintan.jp/?p=6598"},"Amazon Cognito\u306eID\u30c8\u30fc\u30af\u30f3\u3092\u5229\u7528\u3057\u305fREST API\u306e\u8a8d\u8a3c\u4f8b"),"\u306b\u8a73\u7d30\u306a\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"ID\u30c8\u30fc\u30af\u30f3\u306f\uff08\u30ea\u30e9\u30a4\u30f3\u30b0\u30fb\u30d1\u30fc\u30c6\u30a3\u5185\u3067\u306a\u3044\uff09\u4ed6\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u9023\u643a\u3067\u7528\u3044\u308b\u306e\u306f\u4e0d\u9069\u5207\u3067\u3059\u3002\n\u4ed6\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u306b\u3088\u308b\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u306f\u5225\u306e\u65b9\u5f0f\u3092\u63a1\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"OpenID Connect\u8a8d\u8a3c\u3068\u7d44\u5408\u308f\u305b\u305f\u8a8d\u8a3c\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8a8d\u8a3c\u30b7\u30fc\u30b1\u30f3\u30b9\u56f3\u2460",src:n(16448).Z,width:"666",height:"672"})),(0,a.kt)("h3",{id:"\u30c8\u30fc\u30af\u30f3\u4fdd\u7ba1\u306b\u3088\u308b\u8a8d\u8a3c\u306e\u7d99\u7d9a\u3068\u7aef\u672b\u8a8d\u8a3c\u306b\u3088\u308b\u4fdd\u8b77"},"\u30c8\u30fc\u30af\u30f3\u4fdd\u7ba1\u306b\u3088\u308b\u8a8d\u8a3c\u306e\u7d99\u7d9a\u3068\u7aef\u672b\u8a8d\u8a3c\u306b\u3088\u308b\u4fdd\u8b77"),(0,a.kt)("p",null,"\u8a8d\u8a3c\u3067\u5f97\u305f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3092\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3068\u3057\u3066\u4fdd\u7ba1\u3059\u308b\u3053\u3068\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u306a\u3057\u306e\u8a8d\u8a3c\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u7ba1\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/manage-credentials"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"),"\u306b\u8a73\u7d30\u306a\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u306a\u3057\u306e\u8a8d\u8a3c\u306b\u3088\u308a\u30e6\u30fc\u30b6\u306e\u5229\u4fbf\u6027\u306f\u3042\u304c\u308a\u307e\u3059\u3002\u4e00\u65b9\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u7d1b\u5931\u3084\u76d7\u96e3\u6642\u306e\u30ea\u30b9\u30af\u304c\u751f\u3058\u307e\u3059\u3002\n\u305d\u3053\u3067\u3001\u4fdd\u7ba1\u3055\u308c\u305f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u7aef\u672b\u8a8d\u8a3c\u306b\u3088\u308b\u8a31\u53ef\u3092\u6c42\u3081\u307e\u3059\u3002\n\u305d\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u7aef\u672b\u6240\u6301\u8005\u306e\u307f\u306b\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u306a\u3057\u306e\u8a8d\u8a3c\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4fdd\u7ba1\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u3068\u7aef\u672b\u8a8d\u8a3c\u3092\u5229\u7528\u3057\u305f\u8a8d\u8a3c\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8a8d\u8a3c\u30b7\u30fc\u30b1\u30f3\u30b9\u56f3\u2461",src:n(68553).Z,width:"541",height:"672"})),(0,a.kt)("h3",{id:"\u8a8d\u8a3c\u30d5\u30ed\u30fc"},"\u8a8d\u8a3c\u30d5\u30ed\u30fc"),(0,a.kt)("p",null,"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3092\u307e\u3068\u3081\u305f\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8a8d\u8a3c\u30d5\u30ed\u30fc",src:n(37862).Z,width:"431",height:"1052"})),(0,a.kt)("h3",{id:"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3067\u671f\u5f85\u3055\u308c\u308b\u52b9\u679c"},"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3067\u671f\u5f85\u3055\u308c\u308b\u52b9\u679c"),(0,a.kt)("p",null,"\u672c\u8a8d\u8a3c\u65b9\u5f0f\u3067\u671f\u5f85\u3055\u308c\u308b\u52b9\u679c\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc8252.txt"},"RFC 8252"),"\u3092\u5b9f\u88c5\u3057\u305fSDK\uff08",(0,a.kt)("a",{parentName:"li",href:"https://appauth.io/"},"AppAuth"),"\uff09\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u54c1\u8cea\u3068\u751f\u7523\u6027\u5411\u4e0a\u3092\u671f\u5f85\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u5c11\u306a\u3044\u30b3\u30b9\u30c8\u3067\u65e2\u5b58\u30b7\u30b9\u30c6\u30e0\u306e\u8a8d\u8a3c\u65b9\u5f0f\u3092\u6539\u4fee\u3067\u304d\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u8cc7\u7523\u3092\u6d41\u7528\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u7aef\u672b\u8a8d\u8a3c\u3068\u7d44\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3001\u30ea\u30b9\u30af\u306b\u5bfe\u51e6\u3057\u306a\u304c\u3089\u5229\u4fbf\u6027\u3092\u5411\u4e0a\u3067\u304d\u308b")))}s.isMDXComponent=!0},37862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-flowchart-67bbaafa07304e323e5150e5aadf4084.svg"},16448:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-sequence-1-e683c0af7f8f68a6108922b57fca367a.svg"},68553:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-sequence-2-8a148b93c277866f4cf20d8f25df2d76.svg"},88053:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authn-with-backend-using-OIDC-and-device-authn-architecture-30633a0c51634102cd4aa5c755f8c541.svg"}}]);