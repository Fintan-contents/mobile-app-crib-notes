"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[6981],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=u(r),p=i,m=v["".concat(l,".").concat(p)]||v[p]||f[p]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6742:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(3366),i=r(7294),a=r(3727),o=r(2263),c=r(3919),l=r(412),u=(0,i.createContext)({collectLink:function(){}}),s=r(4996),f=r(8780);var v=function(e){var t,r,v=e.isNavLink,p=e.to,m=e.href,d=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,O=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,E=h.trailingSlash,_=h.baseUrl,k=(0,s.C)().withBaseUrl,Z=(0,i.useContext)(u),j=p||m,C=(0,c.Z)(j),L=null==j?void 0:j.replace("pathname://",""),P=void 0!==L?(r=L,w&&function(e){return e.startsWith("/")}(r)?k(r):r):void 0;P&&C&&(P=(0,f.applyTrailingSlash)(P,{trailingSlash:E,baseUrl:_}));var N,S=(0,i.useRef)(!1),T=v?a.OL:a.rU,U=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&C&&null!=P&&window.docusaurus.prefetch(P),function(){U&&N&&N.disconnect()}}),[P,U,C]);var x=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,A=!P||!C||x;return P&&C&&!x&&!b&&Z.collectLink(P),A?i.createElement("a",Object.assign({href:P},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(T,Object.assign({},O,{onMouseEnter:function(){S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:function(e){var t,r;U&&e&&C&&(t=e,r=function(){null!=P&&window.docusaurus.prefetch(P)},(N=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())}))}))).observe(t))},to:P||""},v&&{isActive:g,activeClassName:d}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){r.d(t,{L:function(){return d}});var n=r(7462),i=r(3366),a=r(6742),o=r(4996),c=r(6010),l=r(7294),u={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,r=e.colSize,s=void 0===r?4:r,f=(0,i.Z)(e,["children","colSize"]),v=(0,o.Z)(f.to);return l.createElement("div",{className:(0,c.Z)("col","col--"+s,u.pageOverviewContainer)},l.createElement(a.Z,(0,n.Z)({className:(0,c.Z)("card",u.pageOverviewLinkCard)},f,{to:v}),t))},f=function(e){var t=e.title;return l.createElement("div",{className:(0,c.Z)("card__header",u.pageOverviewTitle)},l.createElement("h3",null,t))},v=function(e){var t=e.src,r=e.alt,a=(0,i.Z)(e,["src","alt"]),s=(0,o.Z)(t);return l.createElement("div",{className:(0,c.Z)("card__image")},l.createElement("img",(0,n.Z)({className:u.pageOverviewImage},a,{alt:r,src:s})))},p=function(e){var t=e.summary;return l.createElement("div",{className:(0,c.Z)("card__body",u.pageOverviewSummary)},l.createElement("p",null,t))},m=function(e){var t=e.title,r=e.imageUrl,n=e.summary,a=(0,i.Z)(e,["title","imageUrl","summary"]);return l.createElement(s,a,l.createElement(f,{title:t+" \xbb"}),r&&l.createElement(v,{src:r,alt:t}),n&&l.createElement(p,{summary:n}))},d=function(e){var t=e.overviews,r=e.colSize;return l.createElement("section",{className:(0,c.Z)(u.pageList)},l.createElement("div",{className:(0,c.Z)("container")},l.createElement("div",{className:(0,c.Z)("row",u.pageListRow)},t.map((function(e){return l.createElement(m,(0,n.Z)({key:e.to,colSize:r},e))})))))}},2145:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return v},default:function(){return m}});var n=r(7462),i=r(3366),a=r(7294),o=r(3905),c=r(6258),l={title:"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74",sidebar_label:"\u306f\u3058\u3081\u306b"},u=void 0,s={unversionedId:"react-native/common-pitfalls",id:"react-native/common-pitfalls",isDocsHomePage:!1,title:"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74",description:"React Native\u3067\u958b\u767a\u3059\u308b\u969b\u306b\u8d77\u304d\u305f\u56f0\u308a\u4e8b\u3084\u4e0d\u5177\u5408\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/common-pitfalls.md",sourceDirName:"react-native",slug:"/react-native/common-pitfalls",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74",sidebar_label:"\u306f\u3058\u3081\u306b"},sidebar:"pitfalls",next:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/common-pitfalls/overview"}},f=[{title:"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044",summary:(0,o.kt)(a.Fragment,null,"\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3067\u304d\u306a\u3044\u305d\u308c\u305e\u308c\u306e\u4e8b\u8c61\u3068\u5bfe\u5fdc\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),to:"/react-native/common-pitfalls/overview"}],v=[],p={toc:v};function m(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Native\u3067\u958b\u767a\u3059\u308b\u969b\u306b\u8d77\u304d\u305f\u56f0\u308a\u4e8b\u3084\u4e0d\u5177\u5408\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(c.L,{overviews:f,colSize:12,mdxType:"PageList"}))}m.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);