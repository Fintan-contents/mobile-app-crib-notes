"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2976],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3366),a=n(7294),i=n(3727),o=n(2263),l=n(3919),u=n(412),c=(0,a.createContext)({collectLink:function(){}}),d=n(4996),s=n(8780);var p=function(e){var t,n,p=e.isNavLink,m=e.to,f=e.href,v=e.activeClassName,g=e.isActive,k=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,h=void 0===b||b,y=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=(0,o.Z)().siteConfig,w=N.trailingSlash,O=N.baseUrl,S=(0,d.C)().withBaseUrl,C=(0,a.useContext)(c),E=m||f,_=(0,l.Z)(E),Z=null==E?void 0:E.replace("pathname://",""),P=void 0!==Z?(n=Z,h&&function(e){return e.startsWith("/")}(n)?S(n):n):void 0;P&&_&&(P=(0,s.applyTrailingSlash)(P,{trailingSlash:w,baseUrl:O}));var j,L=(0,a.useRef)(!1),A=p?i.OL:i.rU,D=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!D&&_&&null!=P&&window.docusaurus.prefetch(P),function(){D&&j&&j.disconnect()}}),[P,D,_]);var T=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,x=!P||!_||T;return P&&_&&!T&&!k&&C.collectLink(P),x?a.createElement("a",Object.assign({href:P},E&&!_&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(A,Object.assign({},y,{onMouseEnter:function(){L.current||null==P||(window.docusaurus.preload(P),L.current=!0)},innerRef:function(e){var t,n;D&&e&&_&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))}))).observe(t))},to:P||""},p&&{isActive:g,activeClassName:v}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,n){n.d(t,{L:function(){return v}});var r=n(7462),a=n(3366),i=n(6742),o=n(4996),l=n(6010),u=n(7294),c={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},d=function(e){var t=e.children,n=e.colSize,d=void 0===n?4:n,s=(0,a.Z)(e,["children","colSize"]),p=(0,o.Z)(s.to);return u.createElement("div",{className:(0,l.Z)("col","col--"+d,c.pageOverviewContainer)},u.createElement(i.Z,(0,r.Z)({className:(0,l.Z)("card",c.pageOverviewLinkCard)},s,{to:p}),t))},s=function(e){var t=e.title;return u.createElement("div",{className:(0,l.Z)("card__header",c.pageOverviewTitle)},u.createElement("h3",null,t))},p=function(e){var t=e.src,n=e.alt,i=(0,a.Z)(e,["src","alt"]),d=(0,o.Z)(t);return u.createElement("div",{className:(0,l.Z)("card__image")},u.createElement("img",(0,r.Z)({className:c.pageOverviewImage},i,{alt:n,src:d})))},m=function(e){var t=e.summary;return u.createElement("div",{className:(0,l.Z)("card__body",c.pageOverviewSummary)},u.createElement("p",null,t))},f=function(e){var t=e.title,n=e.imageUrl,r=e.summary,i=(0,a.Z)(e,["title","imageUrl","summary"]);return u.createElement(d,i,u.createElement(s,{title:t+" \xbb"}),n&&u.createElement(p,{src:n,alt:t}),r&&u.createElement(m,{summary:r}))},v=function(e){var t=e.overviews,n=e.colSize;return u.createElement("section",{className:(0,l.Z)(c.pageList)},u.createElement("div",{className:(0,l.Z)("container")},u.createElement("div",{className:(0,l.Z)("row",c.pageListRow)},t.map((function(e){return u.createElement(f,(0,r.Z)({key:e.to,colSize:n},e))})))))}},1460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),l=n(6258),u={title:"\u30d3\u30eb\u30c9",sidebar_label:"\u6982\u8981"},c=void 0,d={unversionedId:"react-native/santoku/development/build-configuration",id:"react-native/santoku/development/build-configuration",isDocsHomePage:!1,title:"\u30d3\u30eb\u30c9",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u95a2\u9023\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001Android\u306e\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\uff08\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff09\u306e\u8003\u3048\u65b9\u3092\u53c2\u8003\u306b\u3057\u3066\u3001React Native\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/build-configuration.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/build-configuration",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30d3\u30eb\u30c9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/santoku/development"},next:{title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8",permalink:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration/build-variants"}},s=[{title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8",to:"/react-native/santoku/development/build-configuration/build-variants",summary:(0,o.kt)(i.Fragment,null,"\u30d3\u30eb\u30c9\u8a2d\u5b9a\u306e\u6982\u8981\u3068\u3057\u3066\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u305d\u308c\u305e\u308c\u3067\u5909\u66f4\u3059\u308b\u8a2d\u5b9a\u5185\u5bb9\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3092\u6307\u5b9a\u3057\u3066\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3001\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3082\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7",to:"/react-native/santoku/development/build-configuration/build-type-configurations",summary:(0,o.kt)(i.Fragment,null,"\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3084\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u306a\u3069\u306e\u30d3\u30eb\u30c9\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3092\u6e96\u5099\u3059\u308b\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")},{title:"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",to:"/react-native/santoku/development/build-configuration/product-flavor-configurations",summary:(0,o.kt)(i.Fragment,null,"react-native-config\u3092\u5229\u7528\u3057\u3066\u3001\u672c\u756a\u74b0\u5883\u7528\u3084\u958b\u767a\u74b0\u5883\u7528\u306a\u3069\u74b0\u5883\u306b\u5fdc\u3058\u305f\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3092\u6e96\u5099\u3059\u308b\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002")}],p=[{value:"\u7528\u8a9e\u306b\u3064\u3044\u3066",id:"\u7528\u8a9e\u306b\u3064\u3044\u3066",children:[{value:"Android\u306e\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",id:"android\u306e\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc",children:[]},{value:"iOS\u306eConfiguration\u3068Scheme",id:"ios\u306econfiguration\u3068scheme",children:[]}]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u95a2\u9023\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001Android\u306e",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/build-variants"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8"),"\uff08",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build#build-config"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),"\uff09\u306e\u8003\u3048\u65b9\u3092\u53c2\u8003\u306b\u3057\u3066\u3001React Native\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u958b\u767a\u4e2d\u3084\u30c6\u30b9\u30c8\u4e2d\u306f\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u3084\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u306e\u63a5\u7d9a\u5148\u30b5\u30fc\u30d0\u306a\u3069\u3092\u5909\u66f4\u3057\u3066\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u305f\u3044\u30b1\u30fc\u30b9\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u305f\u3081\u306e\u30d3\u30eb\u30c9\u306e\u4ed5\u7d44\u307f\u3068\u3057\u3066\u3001iOS\u30a2\u30d7\u30ea\u306b\u306f\u300cConfiguration\u300d\u3084\u300cScheme\u300d\u306a\u3069\u304c\u3042\u308a\u3001Android\u306b\u306f\u300c\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u300d\u3084\u300c\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u300d\u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u4ed5\u7d44\u307f\u3092\u4f7f\u3063\u3066\u67d4\u8edf\u306b\u30d3\u30eb\u30c9\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001\u3069\u306e\u3088\u3046\u306b\u30d3\u30eb\u30c9\u8a2d\u5b9a\u3092\u4f7f\u3044\u5206\u3051\u308b\u304b\u306b\u3064\u3044\u3066\u306f\u958b\u767a\u8005\u306b\u4efb\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3073\u306b\u8a2d\u5b9a\u65b9\u6cd5\u3092\u958b\u767a\u8005\u305d\u308c\u305e\u308c\u3067\u5224\u65ad\u3057\u3066\u3044\u308b\u3068\u8a2d\u5b9a\u5185\u5bb9\u306e\u898b\u901a\u3057\u304c\u60aa\u304f\u306a\u308a\u304c\u3061\u306a\u306e\u3067\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u8981\u6c42\u3092\u6e80\u305f\u305b\u308b\u3088\u3046\u306b\u65b9\u91dd\u3092\u6574\u7406\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u7a2e\u985e\uff08\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3001\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u306a\u3069\uff09\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u74b0\u5883\uff08\u63a5\u7d9a\u5148\u306e\u30db\u30b9\u30c8\u540d\u306a\u3069\uff09\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u7a2e\u985e\u3068\u74b0\u5883\u306f\u72ec\u7acb\u3057\u3066\u8a2d\u5b9a\u3067\u304d\u308b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883\u5411\u3051\u306e\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3001\u672c\u756a\u74b0\u5883\u5411\u3051\u306e\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u306a\u3069\u3092\u7528\u610f\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081"))),(0,o.kt)("li",{parentName:"ul"},"\u3069\u306e\u30d3\u30eb\u30c9\u8a2d\u5b9a\u3067\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30a2\u30d7\u30ea\u306a\u306e\u304b\u3092\u3001\u7c21\u5358\u306b\u5224\u5225\u3067\u304d\u308b")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/build-variants#build-types"},"Android\u306e\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u306f\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3092\u5229\u7528\u3057\u3066\u63a5\u7d9a\u5148\u30db\u30b9\u30c8\u3092\u5909\u66f4\u3059\u308b\u4f8b\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4e00\u65b9\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u540c\u3058\u3053\u3068\u3092\u3059\u308b\u305f\u3081\u306b\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u306e\u3069\u3061\u3089\u3092\u5229\u7528\u3057\u3066\u3082\u540c\u3058\u8a2d\u5b9a\u3092\u5b9f\u73fe\u3067\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002iOS\u306eConfiguration\u3068Scheme\u306b\u3064\u3044\u3066\u3082\u540c\u3058\u3053\u3068\u304c\u8a00\u3048\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"div"},"\u3069\u3061\u3089\u306e\u65b9\u6cd5\u3067\u8a2d\u5b9a\u3059\u308b\u3079\u304d\u304b\u306b\u3064\u3044\u3066\u306e\u6df7\u4e71\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u660e\u78ba\u306b\u8a2d\u5b9a\u65b9\u91dd\u3092\u5b9a\u3081\u3066\u3044\u307e\u3059\u3002"))),(0,o.kt)(l.L,{overviews:s,colSize:12,mdxType:"PageList"}),(0,o.kt)("h2",{id:"\u7528\u8a9e\u306b\u3064\u3044\u3066"},"\u7528\u8a9e\u306b\u3064\u3044\u3066"),(0,o.kt)("h3",{id:"android\u306e\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"},"Android\u306e\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),(0,o.kt)("p",null,"Android\u3067\u306f\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u306fGradle\u306eDSL\u3068\u3057\u3066\u306f\u533a\u5225\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u7528\u9014\u306f\u660e\u78ba\u306b\u533a\u5225\u3057\u3066\u3044\u306a\u3044\u3088\u3046\u3067\u3059\u3002\u5b9f\u969b\u3001BuildType\u3068ProductFlavor\u306f\u591a\u304f\u306e\u8a2d\u5b9a\u5024\u3092\u5171\u6709\u3057\u3066\u3044\u307e\u3059\uff08VariantDimension\uff09\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/tools/gradle-api/4.1/com/android/build/api/dsl/BuildType"},"BuildType ","|"," Android Developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/tools/gradle-api/4.1/com/android/build/api/dsl/ProductFlavor"},"ProductFlavor ","|"," Android Developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/tools/gradle-api/4.1/com/android/build/api/dsl/VariantDimension"},"VariantDimension ","|"," Android Developers"))),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7528\u9014\u3082\u542b\u3081\u3066\u660e\u78ba\u306b\u533a\u5225\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7528\u8a9e"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u65b9\u6cd5"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u7a2e\u985e\uff08\u30ea\u30ea\u30fc\u30b9\u3084\u30c7\u30d0\u30c3\u30b0\u306a\u3069\uff09\u306e\u8a2d\u5b9a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"BuildType DSL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30fc\u30d0\u30a2\u30d7\u30ea\u3067\u3042\u308c\u3070\u74b0\u5883\u5909\u6570\u3092\u5229\u7528\u3059\u308b\u3088\u3046\u306a\u8a2d\u5b9a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ProductFlavor DSL\uff08\u74b0\u5883\u5225\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff09")))),(0,o.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u6587\u8108\u306b\u3088\u3063\u3066\u306fAndroid Developers\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3068\u306f\u610f\u5473\u304c\u7570\u306a\u308b\u5834\u5408\u3082\u3042\u308b\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h3",{id:"ios\u306econfiguration\u3068scheme"},"iOS\u306eConfiguration\u3068Scheme"),(0,o.kt)("p",null,"\u4e00\u822c\u7684\u306b\u306f\u3001Configuration\u306f\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u8a2d\u5b9a\u3092\u5207\u308a\u66ff\u3048\u308b\u305f\u3081\u306b\u5229\u7528\u3057\u3001Scheme\u306f\u30d3\u30eb\u30c9\u624b\u9806\u3092\u5207\u308a\u66ff\u3048\u308b\u305f\u3081\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u306e\u8a2d\u5b9a\u306b\u306fConfiguration\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u306b\u306fScheme\u3092\u5229\u7528\u3057\u3001\u3042\u3089\u304b\u3058\u3081\u7528\u610f\u3057\u305f\u74b0\u5883\u5225\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u3046\u3061\u3069\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5229\u7528\u3059\u308b\u304b\u3068\u3044\u3046\u30d3\u30eb\u30c9\u624b\u9806\u3092Scheme\u3054\u3068\u306b\u5909\u3048\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3057\u3066\u3001Configuration\u3068Scheme\u3067\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u306e\u8003\u3048\u65b9\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7528\u8a9e"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u65b9\u6cd5"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u7a2e\u985e\uff08\u30ea\u30ea\u30fc\u30b9\u3084\u30c7\u30d0\u30c3\u30b0\u306a\u3069\uff09\u306e\u8a2d\u5b9a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Configuration")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30fc\u30d0\u30a2\u30d7\u30ea\u3067\u3042\u308c\u3070\u74b0\u5883\u5909\u6570\u3092\u5229\u7528\u3059\u308b\u3088\u3046\u306a\u8a2d\u5b9a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Scheme\uff08\u74b0\u5883\u5225\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff09")))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);