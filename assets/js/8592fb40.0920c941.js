"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7767],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),v=i,p=d["".concat(u,".").concat(v)]||d[v]||f[v]||a;return n?r.createElement(p,o(o({ref:t},l),{},{components:n})):r.createElement(p,o({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(63366),i=n(67294),a=n(73727),o=n(52263),c=n(13919),u=n(10412),s=(0,i.createContext)({collectLink:function(){}}),l=n(44996),f=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,p=e.to,m=e.href,g=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,k=void 0===h||h,w=(0,r.Z)(e,d),O=(0,o.Z)().siteConfig,_=O.trailingSlash,E=O.baseUrl,Z=(0,l.C)().withBaseUrl,j=(0,i.useContext)(s),P=p||m,C=(0,c.Z)(P),L=null==P?void 0:P.replace("pathname://",""),N=void 0!==L?(n=L,k&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;N&&C&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:_,baseUrl:E}));var T=(0,i.useRef)(!1),S=v?a.OL:a.rU,U=u.default.canUseIntersectionObserver,x=(0,i.useRef)();(0,i.useEffect)((function(){return!U&&C&&null!=N&&window.docusaurus.prefetch(N),function(){U&&x.current&&x.current.disconnect()}}),[x,N,U,C]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,D=!N||!C||A;return N&&C&&!A&&!y&&j.collectLink(N),D?i.createElement("a",Object.assign({href:N},P&&!C&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(S,Object.assign({},w,{onMouseEnter:function(){T.current||null==N||(window.docusaurus.preload(N),T.current=!0)},innerRef:function(e){var t,n;U&&e&&C&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:N||""},v&&{isActive:b,activeClassName:g}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),i=n(63366),a=n(36742),o=n(44996),c=n(86010),u=n(67294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},l=["children","colSize"],f=["src","alt"],d=["title","imageUrl","summary"],v=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,d=(0,i.Z)(e,l),v=(0,o.Z)(d.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+f,s.pageOverviewContainer)},u.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},d,{to:v}),t))},p=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},u.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,a=(0,i.Z)(e,f),l=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,r.Z)({className:s.pageOverviewImage},a,{alt:n,src:l})))},g=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},u.createElement("p",null,t))},b=function(e){var t=e.title,n=e.imageUrl,r=e.summary,a=(0,i.Z)(e,d);return u.createElement(v,a,u.createElement(p,{title:t+" \xbb"}),n&&u.createElement(m,{src:n,alt:t}),r&&u.createElement(g,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,c.Z)(s.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return u.createElement(b,(0,r.Z)({key:e.to,colSize:n},e))})))))}},27286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(66258),c=["components"],u={title:"Decisions Records",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},s=void 0,l={unversionedId:"react-native/santoku/decisions",id:"react-native/santoku/decisions",isDocsHomePage:!1,title:"Decisions Records",description:"const overviews = [",source:"@site/docs/react-native/santoku/decisions.mdx",sourceDirName:"react-native/santoku",slug:"/react-native/santoku/decisions",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions",tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"Decisions Records",sidebar_label:"\u76ee\u6b21",hide_table_of_contents:!0},sidebar:"santoku",previous:{title:"Glossary",permalink:"/mobile-app-crib-notes/react-native/santoku/glossary"},next:{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-001-error-handling"}},f=[{title:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-001-error-handling"},{title:"HTTP\u901a\u4fe1\u3067\u4f7f\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea",to:"/react-native/santoku/decisions/adr-002-http-api-libraries"},{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",to:"/react-native/santoku/decisions/adr-003-http-api-error-handling"},{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u5b9f\u73fe\u65b9\u5f0f",to:"/react-native/santoku/decisions/adr-004-deep-link"},{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-005-message"},{title:"\u30ed\u30b0\u51fa\u529b\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-006-logging"},{title:"\u8a8d\u8a3c\u65b9\u5f0f\u306e\u65b9\u91dd",to:"react-native/santoku/decisions/adr-007-auth"}],d=[{value:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",id:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0",children:[],level:3}],v={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3084\u6a5f\u80fd\u8a2d\u8a08\u306b\u95a2\u3059\u308b\u5224\u65ad\u306e\u8a18\u9332\u3067\u3059\u3002\u5b9f\u969b\u306b\u65b9\u5f0f\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u6709\u52b9\u306b\u6d3b\u7528\u3067\u304d\u308b\u3088\u3046\u3001\u8a2d\u8a08\u3057\u305f\u65b9\u5f0f\u3060\u3051\u3067\u306a\u304f\u691c\u8a0e\u904e\u7a0b\u3082\u8a18\u9332\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"},"\u5404\u5224\u65ad\u306b\u3042\u305f\u3063\u3066\u306e\u524d\u63d0"),(0,a.kt)("p",null,"\u5404\u5224\u65ad\u306b\u3042\u305f\u308a\u3001\u3053\u306e\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u8981\u4ef6\u304a\u3088\u3073\u975e\u6a5f\u80fd\u8981\u4ef6\u3092\u6e80\u305f\u3059\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/requirements"},"Requirements"))),(0,a.kt)(o.L,{overviews:f,colSize:12,mdxType:"PageList"}))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);