"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1763],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),v=u(n),p=i,d=v["".concat(s,".").concat(p)]||v[p]||f[p]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},36742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(63366),i=n(67294),a=n(73727),o=n(52263),c=n(13919),s=n(10412),u=(0,i.createContext)({collectLink:function(){}}),l=n(44996),f=n(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,d=e.to,m=e.href,g=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,O=void 0===w||w,h=(0,r.Z)(e,v),k=(0,o.Z)().siteConfig,E=k.trailingSlash,_=k.baseUrl,Z=(0,l.C)().withBaseUrl,j=(0,i.useContext)(u),C=d||m,L=(0,c.Z)(C),P=null==C?void 0:C.replace("pathname://",""),N=void 0!==P?(n=P,O&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;N&&L&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:E,baseUrl:_}));var S=(0,i.useRef)(!1),T=p?a.OL:a.rU,U=s.default.canUseIntersectionObserver,x=(0,i.useRef)();(0,i.useEffect)((function(){return!U&&L&&null!=N&&window.docusaurus.prefetch(N),function(){U&&x.current&&x.current.disconnect()}}),[x,N,U,L]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,M=!N||!L||A;return N&&L&&!A&&!y&&j.collectLink(N),M?i.createElement("a",Object.assign({href:N},C&&!L&&{target:"_blank",rel:"noopener noreferrer"},h)):i.createElement(T,Object.assign({},h,{onMouseEnter:function(){S.current||null==N||(window.docusaurus.preload(N),S.current=!0)},innerRef:function(e){var t,n;U&&e&&L&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:N||""},p&&{isActive:b,activeClassName:g}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66258:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(87462),i=n(63366),a=n(36742),o=n(44996),c=n(86010),s=n(67294),u={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},l=["children","colSize"],f=["src","alt"],v=["title","imageUrl","summary"],p=function(e){var t=e.children,n=e.colSize,f=void 0===n?4:n,v=(0,i.Z)(e,l),p=(0,o.Z)(v.to);return s.createElement("div",{className:(0,c.Z)("col","col--"+f,u.pageOverviewContainer)},s.createElement(a.Z,(0,r.Z)({className:(0,c.Z)("card",u.pageOverviewLinkCard)},v,{to:p}),t))},d=function(e){var t=e.title;return s.createElement("div",{className:(0,c.Z)("card__header",u.pageOverviewTitle)},s.createElement("h3",null,t))},m=function(e){var t=e.src,n=e.alt,a=(0,i.Z)(e,f),l=(0,o.Z)(t);return s.createElement("div",{className:(0,c.Z)("card__image")},s.createElement("img",(0,r.Z)({className:u.pageOverviewImage},a,{alt:n,src:l})))},g=function(e){var t=e.summary;return s.createElement("div",{className:(0,c.Z)("card__body",u.pageOverviewSummary)},s.createElement("p",null,t))},b=function(e){var t=e.title,n=e.imageUrl,r=e.summary,a=(0,i.Z)(e,v);return s.createElement(p,a,s.createElement(d,{title:t+" \xbb"}),n&&s.createElement(m,{src:n,alt:t}),r&&s.createElement(g,{summary:r}))},y=function(e){var t=e.overviews,n=e.colSize;return s.createElement("section",{className:(0,c.Z)(u.pageList)},s.createElement("div",{className:(0,c.Z)("container")},s.createElement("div",{className:(0,c.Z)("row",u.pageListRow)},t.map((function(e){return s.createElement(b,(0,r.Z)({key:e.to,colSize:n},e))})))))}},42651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return v},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(66258),c=["components"],s={title:"\u753b\u9762\u4ed5\u69d8\u306b\u304a\u3051\u308b\u5b9a\u7fa9\u4e8b\u9805",sidebar_label:"\u6982\u8981"},u=void 0,l={unversionedId:"react-native/santoku/design/screen-specs/definitions/overview",id:"react-native/santoku/design/screen-specs/definitions/overview",isDocsHomePage:!1,title:"\u753b\u9762\u4ed5\u69d8\u306b\u304a\u3051\u308b\u5b9a\u7fa9\u4e8b\u9805",description:"\u753b\u9762\u4ed5\u69d8\u306b\u3066\u4f7f\u7528\u3059\u308b\u5b9a\u7fa9\u4e8b\u9805\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/design/screen-specs/definitions/overview.mdx",sourceDirName:"react-native/santoku/design/screen-specs/definitions",slug:"/react-native/santoku/design/screen-specs/definitions/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/definitions/overview",tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021/12/20",frontMatter:{title:"\u753b\u9762\u4ed5\u69d8\u306b\u304a\u3051\u308b\u5b9a\u7fa9\u4e8b\u9805",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u57fa\u672c\u65b9\u91dd",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/basic-policy"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/definitions/screen-type/overview"}},f=[{title:"\u753b\u9762\u7a2e\u5225",to:"/react-native/santoku/design/screen-specs/definitions/screen-type/overview"}],v=[],p={toc:v};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u753b\u9762\u4ed5\u69d8\u306b\u3066\u4f7f\u7528\u3059\u308b\u5b9a\u7fa9\u4e8b\u9805\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,a.kt)(o.L,{overviews:f,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);