"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1500],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=i,d=p["".concat(u,".").concat(v)]||p[v]||f[v]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(3366),i=r(7294),a=r(3727),o=r(2263),c=r(3919),u=r(412),l=(0,i.createContext)({collectLink:function(){}}),s=r(4996),f=r(8780);var p=function(e){var t,r,p=e.isNavLink,v=e.to,d=e.href,m=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,O=void 0===y||y,w=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,E=h.trailingSlash,_=h.baseUrl,k=(0,s.C)().withBaseUrl,Z=(0,i.useContext)(l),j=v||d,C=(0,c.Z)(j),L=null==j?void 0:j.replace("pathname://",""),P=void 0!==L?(r=L,O&&function(e){return e.startsWith("/")}(r)?k(r):r):void 0;P&&C&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:E,baseUrl:_}));var N,S=(0,i.useRef)(!1),T=p?a.OL:a.rU,U=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&C&&null!=P&&window.docusaurus.prefetch(P),function(){U&&N&&N.disconnect()}}),[P,U,C]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,A=!P||!C||x;return P&&C&&!x&&!g&&Z.collectLink(P),A?i.createElement("a",Object.assign({href:P},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(T,Object.assign({},w,{onMouseEnter:function(){S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:function(e){var t,r;U&&e&&C&&(t=e,r=function(){null!=P&&window.docusaurus.prefetch(P)},(N=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())}))}))).observe(t))},to:P||""},p&&{isActive:b,activeClassName:m}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){r.d(t,{L:function(){return m}});var n=r(7462),i=r(3366),a=r(6742),o=r(4996),c=r(6010),u=r(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,r=e.colSize,s=void 0===r?4:r,f=(0,i.Z)(e,["children","colSize"]),p=(0,o.Z)(f.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(a.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},f,{to:p}),t))},f=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},p=function(e){var t=e.src,r=e.alt,a=(0,i.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:l.pageOverviewImage},a,{alt:r,src:s})))},v=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},d=function(e){var t=e.title,r=e.imageUrl,n=e.summary,a=(0,i.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,a,u.createElement(f,{title:t+" \xbb"}),r&&u.createElement(p,{src:r,alt:t}),n&&u.createElement(v,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(d,(0,n.Z)({key:e.to,colSize:r},e))})))))}},7095:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),a=r(7294),o=r(3905),c=r(6258),u={title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03",sidebar_label:"\u306f\u3058\u3081\u306b"},l=void 0,s={unversionedId:"distribution",id:"distribution",isDocsHomePage:!1,title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03",description:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fWeb\u3068\u306f\u9055\u3063\u3066\u3001\u30e6\u30fc\u30b6\u3084\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/distribution.mdx",sourceDirName:".",slug:"/distribution",permalink:"/mobile-app-crib-notes/distribution",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03",sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"distribution",next:{title:"iOS\u306e\u30e9\u30a4\u30bb\u30f3\u30b9",permalink:"/mobile-app-crib-notes/distribution/ios-license"}},f=[{title:"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",summary:(0,o.kt)(a.Fragment,null,"\u3088\u304f\u3042\u308b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3054\u3068\u306b\u3001\u3069\u306e\u3088\u3046\u306a\u914d\u5e03\u65b9\u6cd5\u304c\u9078\u629e\u3067\u304d\u308b\u304b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),to:"/distribution/usecase"}],p=[],v={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fWeb\u3068\u306f\u9055\u3063\u3066\u3001\u30e6\u30fc\u30b6\u3084\u958b\u767a\u8005\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u958b\u767a\u8005\u304c\u5b9f\u65bd\u3059\u308b\u624b\u9806\u3084\u5229\u7528\u3059\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3064\u3044\u3066\u3001\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3044\u30b7\u30c1\u30e5\u30a8\u30fc\u30b7\u30e7\u30f3\u3054\u3068\u306b\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(c.L,{overviews:f,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);