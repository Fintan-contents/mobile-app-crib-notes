(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8149],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),v=a,d=f["".concat(u,".").concat(v)]||f[v]||p[v]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6742:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(9756),a=r(7294),i=r(3727),o=r(2263),c=r(3919),u=r(412),l=(0,a.createContext)({collectLink:function(){}}),s=r(4996),p=r(8780);var f=function(e){var t,r,f=e.isNavLink,v=e.to,d=e.href,m=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,O=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig.trailingSlash,k=(0,s.C)().withBaseUrl,_=(0,a.useContext)(l),T=v||d,E=(0,c.Z)(T),Z=null==T?void 0:T.replace("pathname://",""),P=void 0!==Z?(r=Z,w&&function(e){return e.startsWith("/")}(r)?k(r):r):void 0;P&&E&&(P=(0,p.applyTrailingSlash)(P,h));var j,C=(0,a.useRef)(!1),D=f?i.OL:i.rU,L=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!L&&E&&null!=P&&window.docusaurus.prefetch(P),function(){L&&j&&j.disconnect()}}),[P,L,E]);var N=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,S=!P||!E||N;return P&&E&&!N&&!g&&_.collectLink(P),S?a.createElement("a",Object.assign({href:P},T&&!E&&{target:"_blank",rel:"noopener noreferrer"},O)):a.createElement(D,Object.assign({},O,{onMouseEnter:function(){C.current||null==P||(window.docusaurus.preload(P),C.current=!0)},innerRef:function(e){var t,r;L&&e&&E&&(t=e,r=function(){null!=P&&window.docusaurus.prefetch(P)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),r())}))}))).observe(t))},to:P||""},f&&{isActive:b,activeClassName:m}))}},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var r,n=e.split(/[#?]/)[0],a="/"===n?"/":t?(r=n).endsWith("/")?r:r+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);return e.replace(n,a)}},8780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){"use strict";r.d(t,{L:function(){return m}});var n=r(2122),a=r(9756),i=r(6742),o=r(4996),c=r(6010),u=r(7294),l={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},s=function(e){var t=e.children,r=e.colSize,s=void 0===r?4:r,p=(0,a.Z)(e,["children","colSize"]),f=(0,o.Z)(p.to);return u.createElement("div",{className:(0,c.Z)("col","col--"+s,l.pageOverviewContainer)},u.createElement(i.Z,(0,n.Z)({className:(0,c.Z)("card",l.pageOverviewLinkCard)},p,{to:f}),t))},p=function(e){var t=e.title;return u.createElement("div",{className:(0,c.Z)("card__header",l.pageOverviewTitle)},u.createElement("h3",null,t))},f=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,["src","alt"]),s=(0,o.Z)(t);return u.createElement("div",{className:(0,c.Z)("card__image")},u.createElement("img",(0,n.Z)({className:l.pageOverviewImage},i,{alt:r,src:s})))},v=function(e){var t=e.summary;return u.createElement("div",{className:(0,c.Z)("card__body",l.pageOverviewSummary)},u.createElement("p",null,t))},d=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,["title","imageUrl","summary"]);return u.createElement(s,i,u.createElement(p,{title:t+" \xbb"}),r&&u.createElement(f,{src:r,alt:t}),n&&u.createElement(v,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return u.createElement("section",{className:(0,c.Z)(l.pageList)},u.createElement("div",{className:(0,c.Z)("container")},u.createElement("div",{className:(0,c.Z)("row",l.pageListRow)},t.map((function(e){return u.createElement(d,(0,n.Z)({key:e.to,colSize:r},e))})))))}},3803:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},default:function(){return d}});var n=r(2122),a=r(9756),i=r(7294),o=r(3905),c=r(6258),u={title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",sidebar_label:"Overview",hide_table_of_contents:!0},l=void 0,s={unversionedId:"react-native/learn/todo-app",id:"react-native/learn/todo-app",isDocsHomePage:!1,title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",description:"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306fWeb\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3068\u540c\u3058\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002",source:"@site/docs/react-native/learn/todo-app.md",sourceDirName:"react-native/learn",slug:"/react-native/learn/todo-app",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app",version:"current",lastUpdatedAt:1624011651,formattedLastUpdatedAt:"2021/6/18",frontMatter:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5",sidebar_label:"Overview",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"Tab",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab"},next:{title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/app-spec"}},p=[{title:"ToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8",to:"/react-native/learn/todo-app/app-spec",summary:(0,o.kt)(i.Fragment,null,"\u3053\u308c\u304b\u3089\u5b9f\u88c5\u3059\u308bToDo\u30a2\u30d7\u30ea\u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3057\u307e\u3059\u3002")},{title:"ToDo\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aac\u660e",to:"/react-native/learn/todo-app/app-project-desc",summary:(0,o.kt)(i.Fragment,null,"ToDo\u30a2\u30d7\u30ea\u306e\u958b\u767a\u306b\u5229\u7528\u3059\u308bReact Native\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u306a\u3069\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002")},{title:"\u753b\u9762\u306e\u5b9f\u88c5",to:"/react-native/learn/todo-app/screens/welcome",summary:(0,o.kt)(i.Fragment,null,"\u307e\u305a\u306f\u3001ToDo\u30a2\u30d7\u30ea\u306e\u5404\u753b\u9762\u3068\u753b\u9762\u9077\u79fb\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\u3053\u306e\u6642\u70b9\u3067\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306eREST API\u306f\u5229\u7528\u305b\u305a\u3001\u30c7\u30fc\u30bf\u306f\u56fa\u5b9a\u5024\u3068\u3057\u307e\u3059\u3002\u305d\u306e\u4ed6\u306b\u79c1\u305f\u3061\u304c\u3001\u7406\u89e3\u3059\u308b\u306e\u306b\u96e3\u3057\u3044\u3068\u611f\u3058\u305fReact Navigation\uff08Stack\u3001Modal\u3001Tab\uff09\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u30dd\u30a4\u30f3\u30c8\u3084\u6ce8\u610f\u4e8b\u9805\u3092\u4ea4\u3048\u305f\u5b9f\u88c5\u65b9\u6cd5\u3068\u3001\u30b9\u30c6\u30fc\u30c8\u30d5\u30c3\u30af\u3068\u526f\u4f5c\u7528\u30d5\u30c3\u30af\u3092\u5229\u7528\u3057\u305fState\u306e\u7ba1\u7406\u65b9\u6cd5\u3092\u3088\u308a\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"REST API\u3068\u306e\u63a5\u7d9a",to:"/react-native/learn/todo-app/networking/setting-up-local-server",summary:(0,o.kt)(i.Fragment,null,"ToDo\u30a2\u30d7\u30ea\u306e\u5404\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u3092REST API\u304b\u3089\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u307e\u305f\u3001HTTP API\u306e\u547c\u3073\u51fa\u3057\u306b\u95a2\u9023\u3057\u3066\u753b\u9762\u30c7\u30b6\u30a4\u30f3\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002")}],f=[],v={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u4f5c\u6210\u3059\u308bToDo\u30a2\u30d7\u30ea\u306f",(0,o.kt)("a",{parentName:"p",href:"https://fintan-contents.github.io/spa-restapi-handson/"},"Web\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3"),"\u3068\u540c\u3058\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,o.kt)("p",null,"React\u3067\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7d4c\u9a13\u304c\u306a\u3044\u3001\u307e\u305f\u306f\u524d\u63d0\u3068\u306a\u308b\u30ec\u30d9\u30eb\u3092\u78ba\u8a8d\u3057\u305f\u3044\u65b9\u306fWeb\u30d9\u30fc\u30b9\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u53c2\u7167\u3057\u3001\u5fc5\u8981\u3067\u3042\u308c\u3070\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(c.L,{overviews:p,colSize:12,mdxType:"PageList"}))}d.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);