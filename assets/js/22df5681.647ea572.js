"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1202],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=r,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c"},p=void 0,m={unversionedId:"reference/auth/stateless-authn",id:"reference/auth/stateless-authn",isDocsHomePage:!1,title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c",description:"OpenID Connect (OIDC)",source:"@site/docs/reference/auth/stateless-authn.md",sourceDirName:"reference/auth",slug:"/reference/auth/stateless-authn",permalink:"/mobile-app-crib-notes/reference/auth/stateless-authn",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c"},sidebar:"reference",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",permalink:"/mobile-app-crib-notes/reference/auth/manage-credentials"},next:{title:"Web\u30a2\u30d7\u30ea\u3068\u306e\u8a8d\u8a3c\u60c5\u5831\u306e\u9023\u643a",permalink:"/mobile-app-crib-notes/reference/auth/webassets-integration"}},d=[{value:"OpenID Connect (OIDC)",id:"openid-connect-oidc",children:[{value:"OpenID Connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc",id:"openid-connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc",children:[],level:3},{value:"OpenID Connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",id:"openid-connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",children:[],level:3},{value:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE",id:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc--pkce",children:[{value:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272",id:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272",children:[],level:4}],level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc",id:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30d1\u30b9\u30ef\u30fc\u30c9\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc",children:[{value:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272",id:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272-1",children:[],level:4}],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"openid-connect-oidc"},"OpenID Connect (OIDC)"),(0,i.kt)("p",null,"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u8a8d\u8a3c\u306b\u304a\u3044\u3066OpenID Connect (OIDC)\u306f\u4e3b\u6d41\u306a\u8a8d\u8a3c\u65b9\u5f0f\u306e1\u3064\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u65b0\u3057\u3044\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u3046\u6642\u306b\u540d\u524d\u3084\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u767b\u9332\u305b\u305a\u306bSNS\u306eID\u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u306e\u304c\u6700\u8fd1\u306e\u30c8\u30ec\u30f3\u30c9\u3067\u3059\u304c\u3001\u305d\u308c\u3089\u306fOpenID Connect\u3092\u4f7f\u3063\u3066\u5b9f\u73fe\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u3067\u306f\u3001OpenID Connect\u306b\u3088\u308b\u8a8d\u8a3c\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"openid-connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc"},"OpenID Connect\u306b\u304a\u3051\u308b\u8a8d\u8a3c\u30d5\u30ed\u30fc"),(0,i.kt)("p",null,"OpenID Connect\u3067\u306f\u8a8d\u8a3c\u306e\u305f\u3081\u306e\u30d5\u30ed\u30fc\u304c\u3044\u304f\u3064\u304b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/login-screens"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u8868\u793a\u30d1\u30bf\u30fc\u30f3"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u3088\u3046\u306b\u3001\n\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4e3b\u306b\u5229\u7528\u3055\u308c\u308bOIDC\u306e\u8a8d\u8a3c\u30d5\u30ed\u30fc\u306e\u4ee5\u4e0b2\u3064\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE"),(0,i.kt)("li",{parentName:"ol"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc")),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e\u30d5\u30ed\u30fc\u306fOAuth 2.0\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u6587\u7ae0\u4e2d\u3067\u3082OAuth 2.0\u3068\u3057\u3066\u8a00\u53ca\u3057\u3066\u3044\u308b\u90e8\u5206\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u306a\u304a\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u306bOAuth 2.0\u3092\u5229\u7528\u3059\u308b\u3068\u304d\u306eBest Current Practice\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u308b",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8252.txt"},"RFC 8252"),"\u3067\u306f\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\uff0bPKCE\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001OpenID Foundation\u306fRFC 8252\u3092\u5b9f\u88c5\u3057\u305fSDK\uff08",(0,i.kt)("a",{parentName:"p",href:"https://appauth.io/"},"AppAuth"),"\uff09\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306eSDK\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u306b\u6bd4\u8f03\u7684\u7c21\u5358\u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\uff0bPKCE\u3067\u306e\u8a8d\u8a3c\u3092\u5c0e\u5165\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"OpenID Connect\u3067\u306f\u3001\u3088\u308a\u5b89\u5168\u306a\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30d5\u30ed\u30fc\u3068\u3044\u3046\u8a8d\u8a3c\u30d5\u30ed\u30fc\u3082\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305f\u3060\u3001\u30d5\u30ed\u30fc\u304c\u8907\u96d1\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6\u64cd\u4f5c\u3068\u3044\u3046\u89b3\u70b9\u3067\u306f\u300c\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\uff0bPKCE\u300d\u3068\u5909\u308f\u3089\u306a\u3044\u306e\u3067\u3053\u3053\u3067\u306f\u5272\u611b\u3057\u3066\u3044\u307e\u3059\u3002\n\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30d5\u30ed\u30fc\u306e\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f",(0,i.kt)("a",{parentName:"p",href:"https://openid-foundation-japan.github.io/openid-connect-core-1_0.ja.html#HybridFlowAuth"},"Authentication using the Hybrid Flow - OpenID Connect Core 1.0"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u3053\u3053\u3067\u306e\u7d39\u4ecb\u306f\u3054\u304f\u7c21\u5358\u306a\u3082\u306e\u306b\u3068\u3069\u3081\u3066\u304a\u308a\u3001\u4e0d\u6b63\u78ba\u306a\u8868\u73fe\u3092\u542b\u3080\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u6b63\u78ba\u306a\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306fRFC\u306a\u3069\u3067\u78ba\u8a8d\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("a",{parentName:"p",href:"https://www.openid.or.jp/document/index.html"},"OpenID \u30d5\u30a1\u30a6\u30f3\u30c7\u30fc\u30b7\u30e7\u30f3\u30fb\u30b8\u30e3\u30d1\u30f3"),"\u3067\u306f\u3001OpenID\u95a2\u9023RFC\u306e\u65e5\u672c\u8a9e\u8a33\u3084\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u8cc7\u6599\u3001\u305d\u306e\u4ed6\u5404\u7a2e\u6587\u66f8\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"))),(0,i.kt)("h3",{id:"openid-connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"},"OpenID Connect\u306e\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"),(0,i.kt)("p",null,"OpenID Connect\u3067\u5229\u7528\u3055\u308c\u308b\u30c8\u30fc\u30af\u30f3\u306f\u5168\u90e8\u30673\u7a2e\u985e\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JSON Web Token(JWT)\u5f62\u5f0f\u3067\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u306e\u5c5e\u6027\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38ID\u30c8\u30fc\u30af\u30f3\u306b\u306f\u77ed\u3044\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002Relying Party\u3067\u30a4\u30b7\u30e5\u30a2\u30fc\u306e\u7ba1\u7406\u3059\u308bID\u60c5\u5831\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059"))),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30af\u30bb\u30b9\u306b\u5fc5\u8981\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u306f\u77ed\u3044\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u53ef\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u30b5\u30fc\u30d0\u3078\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u76ee\u7684\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059"))),(0,i.kt)("li",{parentName:"ul"},"\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65b0\u3057\u3044ID\u30c8\u30fc\u30af\u30f3\u3082\u3057\u304f\u306f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u3082\u3057\u304f\u306f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u671f\u9650\u304c\u5207\u308c\u305f\u5f8c\u306b\u3001\u518d\u767a\u884c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u306b\u306f\u6bd4\u8f03\u7684\u9577\u3081\u306e\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059")))),(0,i.kt)("h3",{id:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc--pkce"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc + PKCE"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openid-foundation-japan.github.io/openid-connect-core-1_0.ja.html#CodeFlowAuth"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc"),"\u3067\u306f\u3001\u4ee5\u4e0b\u306e3\u8005\u3067\u3084\u308a\u53d6\u308a\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"End User",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6"))),(0,i.kt)("li",{parentName:"ul"},"OpenID Provider",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u8a8d\u8a3c\u306e\u6a5f\u80fd\u304c\u3042\u308a\u3001Relying Party\u304b\u3089\u8981\u6c42\u3055\u308c\u305f\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u6301\u3064"))),(0,i.kt)("li",{parentName:"ul"},"Relying Party(RP)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenID Provider\u304c\u767a\u884c\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3092\u4f7f\u3046\u30b5\u30fc\u30d3\u30b9")))),(0,i.kt)("p",null,"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u8a8d\u8a3c\u3059\u308b\u30d5\u30ed\u30fc\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002\n\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306f\u30c8\u30fc\u30af\u30f3\uff08\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3068ID\u30c8\u30fc\u30af\u30f3\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3082\u542b\u3080\uff09\u3092\u4fdd\u7ba1\u3057\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u9001\u3089\u308c\u3066\u304d\u305fID\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b\u3053\u3068\u3067\u8a8d\u8a3c\u3057\u307e\u3059\u3002\n\u3053\u306e\u5834\u5408\u306eRP\u306f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc",src:n(1560).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u56f3\u306e\u300c11. \u8a8d\u8a3c\uff08\u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c\u3001\u30e6\u30fc\u30b6\u60c5\u5831\u62bd\u51fa\uff09\u300d\u306b\u304a\u3044\u3066\u306f\u3001OP\u306e\u516c\u958b\u9375\u3092\u7528\u3044\u3066\u7f72\u540d\u691c\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002RP\u306f\u3042\u3089\u304b\u3058\u3081\u516c\u958b\u9375\u3092\u53d6\u5f97\u30fb\u4fdd\u7ba1\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u3067\u8a8d\u8a3c\u3059\u308b\u969b\u306e\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306e\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u30fb\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u62bd\u51fa\u306b\u3064\u3044\u3066\u306f\u56f3\u793a\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u3053\u3053\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u8a8d\u8a3c\u306b\u3064\u3044\u3066\u8a00\u53ca\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"))),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3092\u4f7f\u3046\u4e0a\u3067\u306f\u3082\u30461\u3064\u91cd\u8981\u306a\u4ed5\u69d8\u3068\u3057\u3066\u3001",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7636"},"PKCE"),"\u3068\u547c\u3070\u308c\u308b\u4ed5\u69d8\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u4ed5\u69d8\u306f\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u6a2a\u53d6\u308a\u653b\u6483\uff08authorization code interception attack\uff09\u3078\u306e\u5bfe\u7b56\u3068\u3057\u3066\u7b56\u5b9a\u3055\u308c\u305f\u3082\u306e\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3067\u3001\u308f\u304b\u308a\u3084\u3059\u304f\u89e3\u8aac\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://qiita.com/TakahikoKawasaki/items/00f333c72ed96c4da659"},"PKCE: \u8a8d\u53ef\u30b3\u30fc\u30c9\u6a2a\u53d6\u308a\u653b\u6483\u5bfe\u7b56\u306e\u305f\u3081\u306b OAuth \u30b5\u30fc\u30d0\u30fc\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5b9f\u88c5\u3059\u3079\u304d\u3053\u3068 - Qiita"))),(0,i.kt)("h4",{id:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272"),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u4e0a\u306e\u56f3\u306eRelying Party\u306b\u8a72\u5f53\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f79\u5272\u3092\u62c5\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u30d5\u30ed\u30fc\u306e\u958b\u59cb",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"End User\u306e\u6307\u793a\u306b\u5f93\u3063\u3066\u3001OpenID Provider\u306e\u8a8d\u53ef\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"End User\u304cOpenID Provider\u306b\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u3067\u306a\u3044\u5834\u5408\u306f\u3001OpenID Provider\u304c\u8fd4\u3057\u305f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"End User\u304cRelying Party\u306b\u5bfe\u3057\u3066\u8a8d\u53ef\u3092\u4e0e\u3048\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001OpenID Provider\u304c\u8fd4\u3057\u305f\u8a8d\u53ef\u753b\u9762\u3092\u8868\u793a\u3059\u308b"))),(0,i.kt)("li",{parentName:"ul"},"\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u30fb\u4fdd\u7ba1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenId Provider\u304b\u3089\u8fd4\u5374\u3055\u308c\u308b\u8a8d\u53ef\u30b3\u30fc\u30c9\u3092\u53d7\u3051\u53d6\u308a\u3001Open Provider\u306e\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u3092\u4ed8\u4e0e\u3057\u3066\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u304b\u3089\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b89\u5168\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u7ba1\u3059\u308b"))),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3078\u306e\u30a2\u30af\u30bb\u30b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4ed8\u4e0e\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b")))),(0,i.kt)("h3",{id:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30d1\u30b9\u30ef\u30fc\u30c9\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://openid-foundation-japan.github.io/rfc6749.ja.html#grant-password"},"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc"),"\u306b\u3082\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3068\u540c\u3058\u304fEnd User\u3001OpenID Provider\u3001Relying Party\u306e3\u8005\u304c\u767b\u5834\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u3068\u306f\u7570\u306a\u308aEnd User\u304c\u3059\u3067\u306bRelying Party\u3092\u4fe1\u983c\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u306b\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30d5\u30ed\u30fc\u3068\u3057\u3066\u6b21\u306e\u3088\u3046\u306a\u9055\u3044\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u60c5\u5831\u306e\u53d7\u3051\u6e21\u3057",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"End User\u306fOpenID Provider\u306b\u5bfe\u3057\u3066\u3067\u306f\u306a\u304f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a8d\u8a3c\u60c5\u5831\u3092\u6e21\u3059",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u53ef\u30b3\u30fc\u30c9\u30d5\u30ed\u30fc\u306e\u5834\u5408\u3001End User\u306fOpenID Provider\u306b\u5bfe\u3057\u3066\u8a8d\u8a3c\u60c5\u5831\u3092\u6e21\u3059"))))),(0,i.kt)("li",{parentName:"ul"},"\u30ea\u30af\u30a8\u30b9\u30c8\u5148\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089OpenID Provider\u306e\u8a8d\u53ef\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u547c\u3070\u305a\u3001\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u76f4\u63a5\u547c\u3073\u3060\u3059")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30ca\u30fc\u30fb\u30d1\u30b9\u30ef\u30fc\u30c9\u30fb\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30ba\u30d5\u30ed\u30fc",src:n(8063).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u56f3\u306e\u300c4. \u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c\u300d\u306b\u304a\u3044\u3066\u306f\u3001OP\u306e\u516c\u958b\u9375\u3092\u7528\u3044\u3066\u7f72\u540d\u691c\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002RP\u306f\u3042\u3089\u304b\u3058\u3081\u516c\u958b\u9375\u3092\u53d6\u5f97\u30fb\u4fdd\u7ba1\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u5185\u3067\u8a8d\u8a3c\u3059\u308b\u969b\u306e\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3067\u306e\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u30fb\u30e6\u30fc\u30b6\u60c5\u5831\u306e\u62bd\u51fa\u306b\u3064\u3044\u3066\u306f\u56f3\u793a\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u3053\u3053\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u8a8d\u8a3c\u306b\u3064\u3044\u3066\u8a00\u53ca\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"))),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bEnd User\u306e\u8a8d\u8a3c\u60c5\u5831\u304c\u6e21\u3055\u308c\u308b\u305f\u3081\u3001End User\u304b\u3089\u898b\u308b\u3068\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u8a8d\u8a3c\u60c5\u5831\u3092\u60aa\u7528\u3067\u304d\u307e\u3059\u3002\u300c",(0,i.kt)("a",{parentName:"p",href:"https://openid-foundation-japan.github.io/rfc6749.ja.html#anchor26"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u76f4\u5f8c\u306b\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u3092\u7834\u68c4\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044"),"\u300d\u3068\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4ed5\u69d8\u306b\u6e96\u62e0\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u306e\u306f\u96e3\u3057\u3044\u3053\u3068\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u3057\u305f\u304c\u3063\u3066\u3001\u3053\u306e\u30d5\u30ed\u30fc\u306fEnd User\u306e\u3053\u306e\u3088\u3046\u306a\u4e0d\u5b89\u3092\u89e3\u6d88\u3067\u304d\u308b\u5834\u5408\u306e\u307f\u5229\u7528\u3067\u304d\u308b\u30d5\u30ed\u30fc\u306b\u306a\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068OpenID Provider\u304c\u3001End User\u304b\u3089\u898b\u3066\u540c\u3058\u30b7\u30b9\u30c6\u30e0\u3067\u3042\u308b\u5834\u5408\u306a\u3069\u304c\u8a72\u5f53\u3057\u307e\u3059\u3002\u307e\u305f\u3001OpenID Provider\u304b\u3089\u898b\u3066\u3082\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4ed5\u69d8\u3092\u9075\u5b88\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3080\u305a\u304b\u3057\u304f\u3001OpenID Provider\u5074\u3067\u3053\u306e\u30d5\u30ed\u30fc\u3092\u8a31\u53ef\u3057\u306a\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30d5\u30ed\u30fc\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001\u4e0a\u8a18\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272-1"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5f79\u5272"),(0,i.kt)("p",null,"\u4e0a\u8a18\u56f3\u306eRelying Party\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a72\u5f53\u3057\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5f79\u5272\u3092\u62c5\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u60c5\u5831\u306e\u53d6\u5f97\u30fb\u9001\u4fe1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u8868\u793a\u3057\u3066\u3001\u30e6\u30fc\u30b6\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d7\u3051\u53d6\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u53d7\u3051\u53d6\u3063\u305f\u8a8d\u8a3c\u60c5\u5831\u3092\u3001OpenID Provider\u306e\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u9001\u4fe1\u3059\u308b"))),(0,i.kt)("li",{parentName:"ul"},"\u30c8\u30fc\u30af\u30f3\u53d6\u5f97\u30fb\u4fdd\u7ba1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenID Provider\u304b\u3089\u30c8\u30fc\u30af\u30f3\u3092\u53d7\u3051\u53d6\u308a\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b89\u5168\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u7ba1\u3059\u308b"))),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u3078\u306e\u30a2\u30af\u30bb\u30b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ID\u30c8\u30fc\u30af\u30f3\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4ed8\u4e0e\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b")))))}u.isMDXComponent=!0},1560:function(e,t,n){t.Z=n.p+"assets/images/oidc-authorization-code-flow.drawio-87394e9ff8a3064979afebadebaa8240.png"},8063:function(e,t,n){t.Z=n.p+"assets/images/oidc-resource-owner-password-credentials-flow.drawio-0680ca80965d5d00fdafd713a5442682.png"}}]);