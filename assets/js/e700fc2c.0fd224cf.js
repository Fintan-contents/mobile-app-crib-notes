"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1809],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,v=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6742:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3366),a=r(7294),i=r(3727),o=r(2263),u=r(3919),c=r(412),s=(0,a.createContext)({collectLink:function(){}}),l=r(4996),f=r(8780);var d=function(e){var t,r,d=e.isNavLink,p=e.to,v=e.href,m=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,O=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,o.Z)().siteConfig,k=h.trailingSlash,E=h.baseUrl,_=(0,l.C)().withBaseUrl,Z=(0,a.useContext)(s),j=p||v,C=(0,u.Z)(j),P=null==j?void 0:j.replace("pathname://",""),L=void 0!==P?(r=P,w&&function(e){return e.startsWith("/")}(r)?_(r):r):void 0;L&&C&&(L=(0,f.applyTrailingSlash)(L,{trailingSlash:k,baseUrl:E}));var x,S=(0,a.useRef)(!1),N=d?i.OL:i.rU,D=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!D&&C&&null!=L&&window.docusaurus.prefetch(L),function(){D&&x&&x.disconnect()}}),[L,D,C]);var M=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,T=!L||!C||M;return L&&C&&!M&&!b&&Z.collectLink(L),T?a.createElement("a",Object.assign({href:L},j&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):a.createElement(N,Object.assign({},O,{onMouseEnter:function(){S.current||null==L||(window.docusaurus.preload(L),S.current=!0)},innerRef:function(e){var t,r;D&&e&&C&&(t=e,r=function(){null!=L&&window.docusaurus.prefetch(L)},(x=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),r())}))}))).observe(t))},to:L||""},d&&{isActive:g,activeClassName:m}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,u=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6258:function(e,t,r){r.d(t,{L:function(){return m}});var n=r(7462),a=r(3366),i=r(6742),o=r(4996),u=r(6010),c=r(7294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},l=function(e){var t=e.children,r=e.colSize,l=void 0===r?4:r,f=(0,a.Z)(e,["children","colSize"]),d=(0,o.Z)(f.to);return c.createElement("div",{className:(0,u.Z)("col","col--"+l,s.pageOverviewContainer)},c.createElement(i.Z,(0,n.Z)({className:(0,u.Z)("card",s.pageOverviewLinkCard)},f,{to:d}),t))},f=function(e){var t=e.title;return c.createElement("div",{className:(0,u.Z)("card__header",s.pageOverviewTitle)},c.createElement("h3",null,t))},d=function(e){var t=e.src,r=e.alt,i=(0,a.Z)(e,["src","alt"]),l=(0,o.Z)(t);return c.createElement("div",{className:(0,u.Z)("card__image")},c.createElement("img",(0,n.Z)({className:s.pageOverviewImage},i,{alt:r,src:l})))},p=function(e){var t=e.summary;return c.createElement("div",{className:(0,u.Z)("card__body",s.pageOverviewSummary)},c.createElement("p",null,t))},v=function(e){var t=e.title,r=e.imageUrl,n=e.summary,i=(0,a.Z)(e,["title","imageUrl","summary"]);return c.createElement(l,i,c.createElement(f,{title:t+" \xbb"}),r&&c.createElement(d,{src:r,alt:t}),n&&c.createElement(p,{summary:n}))},m=function(e){var t=e.overviews,r=e.colSize;return c.createElement("section",{className:(0,u.Z)(s.pageList)},c.createElement("div",{className:(0,u.Z)("container")},c.createElement("div",{className:(0,u.Z)("row",s.pageListRow)},t.map((function(e){return c.createElement(v,(0,n.Z)({key:e.to,colSize:r},e))})))))}},9147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return v}});var n=r(7462),a=r(3366),i=r(7294),o=r(3905),u=r(6258),c={title:"Docusaurus",sidebar_label:"\u306f\u3058\u3081\u306b",slug:"/docusaurus"},s=void 0,l={unversionedId:"docusaurus/index",id:"docusaurus/index",isDocsHomePage:!1,title:"Docusaurus",description:"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002",source:"@site/docs/docusaurus/index.mdx",sourceDirName:"docusaurus",slug:"/docusaurus",permalink:"/mobile-app-crib-notes/docusaurus",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"Docusaurus",sidebar_label:"\u306f\u3058\u3081\u306b",slug:"/docusaurus"},sidebar:"docusaurus",next:{title:"Markdown Syntax",permalink:"/mobile-app-crib-notes/docusaurus/doc1"}},f=[{title:"Markdown",summary:(0,o.kt)(i.Fragment,null,"Markdown Syntax"),to:"/docusaurus/doc1"},{title:"MDX",summary:(0,o.kt)(i.Fragment,null,"About MDX"),to:"/docusaurus/mdx"},{title:"Plugin",summary:(0,o.kt)(i.Fragment,null,"About Custom Plugins"),to:"/docusaurus/plugins"}],d=[],p={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docusaurus\u3067\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002"),(0,o.kt)(u.L,{overviews:f,colSize:12,mdxType:"PageList"}))}v.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);