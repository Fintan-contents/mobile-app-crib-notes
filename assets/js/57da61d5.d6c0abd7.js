"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7043],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=l(r),p=i,d=v["".concat(u,".").concat(p)]||v[p]||f[p]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6742:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(3366),i=r(7294),a=r(3727),o=r(2263),c=r(3919),u=r(412),l=(0,i.createContext)({collectLink:function(){}}),s=r(4996),f=r(8780);var v=function(e){var t,r,v=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,h=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=(0,o.Z)().siteConfig,k=O.trailingSlash,E=O.baseUrl,_=(0,s.C)().withBaseUrl,N=(0,i.useContext)(l),Z=p||d,C=(0,c.Z)(Z),j=null==Z?void 0:Z.replace("pathname://",""),L=void 0!==j?(r=j,w&&function(e){return e.startsWith("/")}(r)?_(r):r):void 0;L&&C&&(L=(0,f.applyTrailingSlash)(L,{trailingSlash:k,baseUrl:E}));var P,S=(0,i.useRef)(!1),x=v?a.OL:a.rU,T=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!T&&C&&null!=L&&window.docusaurus.prefetch(L),function(){T&&P&&P.disconnect()}}),[L,T,C]);var U=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,A=!L||!C||U;return L&&C&&!U&&!b&&N.collectLink(L),A?i.createElement("a",Object.assign({href:L},Z&&!C&&{target:"_blank",rel:"noopener noreferrer"},h)):i.createElement(x,Object.assign({},h,{onMouseEnter:function(){S.current||null==L||(window.docusaurus.preload(L),S.current=!0)},innerRef:function(e){var t,r;T&&e&&C&&(t=e,r=function(){null!=L&&window.docusaurus.prefetch(L)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),r())}))}))).observe(t))},to:L||""},v&&{isActive:g,activeClassName:m}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){r.d(t,{L:function(){return m}});var n=r(7462),i=r(3366),a=r(6742),o=r(4996),c=r(6010),u=r(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,r=e.colSize,s=void 0===r?4:r,f=(0,i.Z)(e,["children","colSize"]),v=(0,o.Z)(f.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(a.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},f,{to:v}),t))},f=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},v=function(e){var t=e.src,r=e.alt,a=(0,i.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:l.pageOverviewImage},a,{alt:r,src:s})))},p=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},d=function(e){var t=e.title,r=e.imageUrl,n=e.summary,a=(0,i.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,a,u.createElement(f,{title:t+" \xbb"}),r&&u.createElement(v,{src:r,alt:t}),n&&u.createElement(p,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(d,(0,n.Z)({key:e.to,colSize:r},e))})))))}},4100:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return v},default:function(){return d}});var n=r(7462),i=r(3366),a=r(7294),o=r(3905),c=r(6258),u={title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"\u306f\u3058\u3081\u306b"},l=void 0,s={unversionedId:"reference",id:"reference",isDocsHomePage:!1,title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",description:"Android/iOS\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/reference.mdx",sourceDirName:".",slug:"/reference",permalink:"/mobile-app-crib-notes/reference",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"reference",next:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u30ea\u30f3\u30af",permalink:"/mobile-app-crib-notes/reference/security/awesome-sites"}},f=[{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",summary:(0,o.kt)(a.Fragment,null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u59cb\u3081\u308b\u4e0a\u3067\u53c2\u8003\u306b\u306a\u308b\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u306e\u30ac\u30a4\u30c9\u3084\u8a18\u4e8b\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),to:"/reference/security/awesome-sites"},{title:"\u8a8d\u8a3c",summary:(0,o.kt)(a.Fragment,null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u8a8d\u8a3c\u65b9\u5f0f\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002\u7279\u306b\u3001WebView\u3068API\u3067\u8a8d\u8a3c\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u65b9\u5f0f\u3084OpenID Connect\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u3059\u308b\u5834\u5408\u306e\u65b9\u5f0f\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),to:"/reference/auth/overview"},{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5",summary:(0,o.kt)(a.Fragment,null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\uff08\u30ea\u30e2\u30fc\u30c8\u30d7\u30c3\u30b7\u30e5\uff09\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002Firebase Cloud Messaging\u3092\u5229\u7528\u3057\u3066\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u53d7\u4fe1\u3059\u308b\u305f\u3081\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u4f8b\u3082\u8f09\u305b\u3066\u3044\u307e\u3059\u3002"),to:"/reference/notification/overview"}],v=[],p={toc:v};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Android/iOS\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5fc5\u8981\u3068\u306a\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"attention")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u3053\u308c\u307e\u3067Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3057\u3066\u3044\u305f\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3092\u59cb\u3081\u308b\u305f\u3081\u306b\u8abf\u67fb\u3057\u305f\u5185\u5bb9\u306a\u3069\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Web\u3068\u306f\u8003\u3048\u65b9\u3084\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304c\u7570\u306a\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u91cd\u8996\u3057\u305f\u5185\u5bb9\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"div"},"\u3053\u3053\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u304a\u3051\u308b\u3054\u304f\u4e00\u90e8\u306e\u5074\u9762\u3057\u304b\u7d39\u4ecb\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u3059\u3067\u306b\u7d39\u4ecb\u3057\u3066\u3044\u308b\u5185\u5bb9\u306b\u3064\u3044\u3066\u3082\u3001\u5185\u5bb9\u3092\u8ffd\u8a18\u3059\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3057\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u5909\u5316\u306a\u3069\u3067\u5909\u66f4\u3055\u308c\u3066\u3044\u304f\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002"))),(0,o.kt)(c.L,{overviews:f,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);