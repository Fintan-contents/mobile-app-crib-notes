(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(164)),o=r(174),i={title:"Example Application",sidebar_label:"About",hide_table_of_contents:!0},u={unversionedId:"react-native/santoku",id:"react-native/santoku",isDocsHomePage:!1,title:"Example Application",description:"React Native\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a2d\u8a08\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/santoku.md",slug:"/react-native/santoku",permalink:"/mobile-app-crib-notes/react-native/santoku",version:"current",lastUpdatedAt:1617698553,sidebar_label:"About"},s=[],l=[],f={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"React Native\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a2d\u8a08\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002"),Object(c.b)(o.a,{overviews:s,colSize:12,mdxType:"PageList"}))}p.isMDXComponent=!0},164:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),v=n,d=f["".concat(o,".").concat(v)]||f[v]||p[v]||c;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=v;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},165:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},170:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(20),a=r(171);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,i=void 0!==o&&o,u=c.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(c,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},171:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},172:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(10),o=r(171),i=r(11),u=Object(n.createContext)({collectLink:function(){}}),s=r(170),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,r,f,p=e.isNavLink,v=e.to,d=e.href,b=e.activeClassName,m=e.isActive,O=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,j=void 0===y||y,g=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(s.b)().withBaseUrl,h=Object(n.useContext)(u),E=v||d,k=Object(o.a)(E),N=null==E?void 0:E.replace("pathname://",""),P=void 0!==N?(r=N,j&&function(e){return e.startsWith("/")}(r)?w(r):r):void 0,x=Object(n.useRef)(!1),C=p?c.e:c.c,A=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!A&&k&&window.docusaurus.prefetch(P),function(){A&&f&&f.disconnect()}}),[P,A,k]);var S=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,_=!P||!k||S;return P&&k&&!S&&!O&&h.collectLink(P),_?a.a.createElement("a",Object.assign({href:P},E&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):a.a.createElement(C,Object.assign({},g,{onMouseEnter:function(){x.current||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,r;A&&e&&k&&(t=e,r=function(){window.docusaurus.prefetch(P)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:P||""},p&&{isActive:m,activeClassName:b}))}},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r(3),a=r(7),c=r(172),o=r(170),i=r(165),u=r(0),s=r.n(u),l=r(56),f=r.n(l),p=function(e){var t=e.children,r=e.colSize,u=void 0===r?4:r,l=Object(a.a)(e,["children","colSize"]),p=Object(o.a)(l.to);return s.a.createElement("div",{className:Object(i.a)("col","col--"+u,f.a.pageOverviewContainer)},s.a.createElement(c.a,Object(n.a)({className:Object(i.a)("card",f.a.pageOverviewLinkCard)},l,{to:p}),t))},v=function(e){var t=e.title;return s.a.createElement("div",{className:Object(i.a)("card__header",f.a.pageOverviewTitle)},s.a.createElement("h3",null,t))},d=function(e){var t=e.src,r=e.alt,c=Object(a.a)(e,["src","alt"]),u=Object(o.a)(t);return s.a.createElement("div",{className:Object(i.a)("card__image")},s.a.createElement("img",Object(n.a)({className:f.a.pageOverviewImage},c,{alt:r,src:u})))},b=function(e){var t=e.summary;return s.a.createElement("div",{className:Object(i.a)("card__body",f.a.pageOverviewSummary)},s.a.createElement("p",null,t))},m=function(e){var t=e.title,r=e.imageUrl,n=e.summary,c=Object(a.a)(e,["title","imageUrl","summary"]);return s.a.createElement(p,c,s.a.createElement(v,{title:t+" \xbb"}),r&&s.a.createElement(d,{src:r,alt:t}),n&&s.a.createElement(b,{summary:n}))},O=function(e){var t=e.overviews,r=e.colSize;return s.a.createElement("section",{className:Object(i.a)(f.a.pageList)},s.a.createElement("div",{className:Object(i.a)("container")},s.a.createElement("div",{className:Object(i.a)("row",f.a.pageListRow)},t.map((function(e){return s.a.createElement(m,Object(n.a)({key:e.to,colSize:r},e))})))))}}}]);