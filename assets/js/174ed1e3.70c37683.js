"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3281],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48430:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3"},o=void 0,l={unversionedId:"react-native/santoku/application-architecture/auth/login",id:"react-native/santoku/application-architecture/auth/login",title:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3",description:"\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u81ea\u52d5\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u306f\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u306a\u3057\u306b\u30a2\u30d7\u30ea\u306e\u5229\u7528\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/login.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/login",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login",draft:!1,tags:[],version:"current",lastUpdatedAt:1670563798,formattedLastUpdatedAt:"2022\u5e7412\u67089\u65e5",frontMatter:{title:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3"},sidebar:"santoku",previous:{title:"\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup"},next:{title:"\u30ed\u30b0\u30a2\u30a6\u30c8",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/logout"}},p={},c=[{value:"\u51e6\u7406\u30d5\u30ed\u30fc",id:"\u51e6\u7406\u30d5\u30ed\u30fc",level:3},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5",level:3},{value:"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301",id:"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301",level:2}],u={toc:c};function s(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u7528\u3044\u3066\u81ea\u52d5\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u306f\u30ed\u30b0\u30a4\u30f3\u64cd\u4f5c\u306a\u3057\u306b\u30a2\u30d7\u30ea\u306e\u5229\u7528\u3092\u958b\u59cb\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3092\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306b\u6210\u529f\u3057\u305f\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306b\u30ed\u30b0\u30a4\u30f3\u5f8c\u3001\u30ed\u30b0\u30a2\u30a6\u30c8\u305b\u305a\u306b\u30a2\u30d7\u30ea\u3092\u7d42\u4e86\u3057\u3066\u30a2\u30d7\u30ea\u3092\u518d\u8d77\u52d5\u3057\u305f\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u4f7f\u7528\u4e2d\u306b\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u5834\u5408")),(0,r.kt)("h3",{id:"\u51e6\u7406\u30d5\u30ed\u30fc"},"\u51e6\u7406\u30d5\u30ed\u30fc"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306e\u51e6\u7406\u30d5\u30ed\u30fc",src:n(7233).Z,width:"686",height:"632"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"No"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2460"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u305f\u3060\u3057\u3001\u533f\u540d\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u5f8c\u306f\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3067\u306f\u306a\u304f\u3001",(0,r.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup#%E5%87%A6%E7%90%86%E3%83%95%E3%83%AD%E3%83%BC"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u8fd4\u5374\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2461"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u306e\u30ea\u30af\u30a8\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2462"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8a8d\u8a3c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u53d7\u3051\u53d6\u3063\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7528\u3044\u3066\u8a8d\u8a3c\u51e6\u7406\u3092\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2463"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8a8d\u8a3c\u7d50\u679c\u306e\u8fd4\u5374"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u8a8d\u8a3c\u51e6\u7406\u306e\u7d50\u679c\u3092\u30a2\u30d7\u30ea\u306b\u8fd4\u5374\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2464"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cookie\u306e\u4fdd\u5b58"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u8a8d\u8a3c\u51e6\u7406\u306e\u7d50\u679c\u3092\u53d7\u3051\u53d6\u3063\u3066\u3001Cookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002Cookie\u306e\u4fdd\u5b58\u306b\u95a2\u3057\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login#%E8%AA%8D%E8%A8%BC%E7%8A%B6%E6%85%8B%E3%81%AE%E7%B6%AD%E6%8C%81"},"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,r.kt)("h3",{id:"\u5229\u7528\u65b9\u6cd5"},"\u5229\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useAuthCommands"),"\u306e\u623b\u308a\u5024\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"autoLogin"),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\n\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089CSRF\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u524d\u56de\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u53d6\u5f97\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u307e\u305b\u3093\u3002\n\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u306a\u3044\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"autoLogin"),"\u95a2\u6570\u306e\u623b\u308a\u5024\u306fundefined\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306e\u5229\u7528\u65b9\u6cd5"',title:'"\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u306e\u5229\u7528\u65b9\u6cd5"'},"const {autoLogin} = useAuthCommands();\ntry {\n  // CSRF\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97\n  await refreshCsrfToken();\n  // \u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3059\u308b\n  const response = await autoLogin();\n  if (!response) {\n    // \u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u306a\u3044\u5834\u5408\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306fundefined\n    // \u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u9077\u79fb\u3059\u308b\u306a\u3069\u306e\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\n  }\n\n} catch (e) {\n  // \u30a8\u30e9\u30fc\u51e6\u7406\n}\n")),(0,r.kt)("h2",{id:"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"},"\u8a8d\u8a3c\u72b6\u614b\u306e\u7dad\u6301"),(0,r.kt)("p",null,"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3078\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u9001\u4fe1\u6642\u306b\u3001Cookie\u7d4c\u7531\u3067\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u6e21\u3059\u3053\u3068\u306b\u3088\u308a\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8a8d\u8a3c\u5f8c\u306b\u53d7\u3051\u53d6\u3063\u305fCookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u306a\u3069\u3001HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u3057\u3066\u53d7\u3051\u53d6\u3063\u305fCookie\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u6a5f\u80fd\u3067\u7aef\u672b\u5185\u306b\u81ea\u52d5\u3067\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3078\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u9001\u4fe1\u6642\u306b\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u6a5f\u80fd\u3067Cookie\uff08\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff09\u3092\u900f\u904e\u7684\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u306a\u304a\u3001\u30bb\u30c3\u30b7\u30e7\u30f3ID\u306b\u306f\u6709\u52b9\u671f\u9650\u304c\u3042\u308a\u307e\u3059\u3002\u6709\u52b9\u671f\u9650\u5207\u308c\u3092\u691c\u77e5\u3057\u305f\u5834\u5408\u306f\u3001\u81ea\u52d5\u30ed\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u304c\u81ea\u52d5\u7684\u306b\u518d\u5ea6\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0},7233:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/auth-auto-login-flow.drawio-73beb0765c44d795563c25464543cb54.png"}}]);