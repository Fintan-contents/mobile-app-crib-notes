"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4276],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(a),b=n,s=d["".concat(p,".").concat(b)]||d[b]||k[b]||l;return a?r.createElement(s,i(i({ref:e},c),{},{components:a})):r.createElement(s,i({ref:e},c))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39645:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"WebView",sidebar_label:"WebView"},i=void 0,o={unversionedId:"react-native/santoku/design/screen-specs/common-parts/webview/overview",id:"react-native/santoku/design/screen-specs/common-parts/webview/overview",title:"WebView",description:"\u6982\u8981",source:"@site/docs/react-native/santoku/design/screen-specs/common-parts/webview/overview.mdx",sourceDirName:"react-native/santoku/design/screen-specs/common-parts/webview",slug:"/react-native/santoku/design/screen-specs/common-parts/webview/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/webview/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1639992127,formattedLastUpdatedAt:"2021\u5e7412\u670820\u65e5",frontMatter:{title:"WebView",sidebar_label:"WebView"},sidebar:"santoku",previous:{title:"\u30b9\u30ca\u30c3\u30af\u30d0\u30fc",permalink:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/snackbar/overview"},next:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7",permalink:"/mobile-app-crib-notes/react-native/santoku/design/message-list/overview"}},p={},m=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:2},{value:"\u753b\u9762\u30ec\u30a4\u30a2\u30a6\u30c8",id:"\u753b\u9762\u30ec\u30a4\u30a2\u30a6\u30c8",level:2},{value:"\u753b\u9762\u9805\u76ee",id:"\u753b\u9762\u9805\u76ee",level:2},{value:"\u8868\u793a\u9805\u76ee",id:"\u8868\u793a\u9805\u76ee",level:3},{value:"\u64cd\u4f5c\u9805\u76ee",id:"\u64cd\u4f5c\u9805\u76ee",level:3},{value:"\u30a4\u30d9\u30f3\u30c8\u5b9a\u7fa9",id:"\u30a4\u30d9\u30f3\u30c8\u5b9a\u7fa9",level:2},{value:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",level:3},{value:"\u30e6\u30fc\u30b6\u64cd\u4f5c",id:"\u30e6\u30fc\u30b6\u64cd\u4f5c",level:3},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u52d5\u4f5c",id:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u52d5\u4f5c",level:2}],c={toc:m};function k(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,n.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u5185\u3067\u3001\u5916\u90e8\u306eWeb\u30b5\u30a4\u30c8\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},"React Native WebView"),"\u3092\u4f7f\u7528\u3057\u3001\u5171\u901a\u90e8\u54c1\u3068\u3057\u3066\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u6a5f\u80fd"},"\u6a5f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3055\u308c\u305fURL\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306f\u3001",(0,n.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview"},"Application Architecture"),"\u306b\u6e96\u62e0\u3057\u307e\u3059\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"onError/onHttpError\u767a\u751f\u6642\u306e\u51e6\u7406\u3092\u89aa\u753b\u9762\u304b\u3089\u6e21\u305b\u307e\u3059\u3002"))),(0,n.kt)("li",{parentName:"ul"},"onError\u767a\u751f\u6642\u306b\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u78ba\u8a8d\u3092\u4fc3\u3059\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3067\u8868\u793a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"\n\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u306e\u8868\u793a/\u975e\u8868\u793a\u3001\u307e\u305f\u8868\u793a\u3059\u308b\u969b\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u89aa\u753b\u9762\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u5834\u5408\u3001\u6700\u5e95\u90e8\u307e\u3067\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u305f\u6642\u306e\u51e6\u7406\u3092\u3001\u89aa\u753b\u9762\u3067\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"\u753b\u9762\u30ec\u30a4\u30a2\u30a6\u30c8"},"\u753b\u9762\u30ec\u30a4\u30a2\u30a6\u30c8"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"layout",src:a(29832).Z,width:"862",height:"443"})),(0,n.kt)("p",null,"\u203b onError\u3068onHttpError\u6642\u306e\u753b\u9762\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306f\u3001\u500b\u5225\u306e\u753b\u9762\u4ed5\u69d8\u66f8\u306b\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u753b\u9762\u9805\u76ee"},"\u753b\u9762\u9805\u76ee"),(0,n.kt)("h3",{id:"\u8868\u793a\u9805\u76ee"},"\u8868\u793a\u9805\u76ee"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u756a\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee\u7a2e\u5225"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u5f97\u5143"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8868\u793a/\u6d3b\u6027\u6761\u4ef6"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"O1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u5f97\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WebView"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-\uff08\u203b1\uff09"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u53d6\u5f97\u306b\u6210\u529f\u3057\u305f\u5834\u5408\u306e\u307f\u8868\u793a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"O2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/design/screen-specs/common-parts/snackbar/overview"},"\u30b9\u30ca\u30c3\u30af\u30d0\u30fc")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30ad\u30fc\uff1a",(0,n.kt)("inlineCode",{parentName:"td"},"app.webview.onError"),"\uff08\u203b2\uff09"),(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native WebView\u3067onError\u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u3001\u304b\u3064\u89aa\u753b\u9762\u304b\u3089\u30d7\u30ed\u30d1\u30c6\u30a3\uff1aonError\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306e\u307f\u8868\u793a")))),(0,n.kt)("p",null,"\uff08\u203b1\uff09",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#source"},"React Native WebView\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"),"\u3067\u4efb\u610f\u306eURL\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",null),"\n\uff08\u203b2\uff09\u89aa\u753b\u9762\u304b\u3089\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u3042\u308c\u3070\u3001\u305d\u3061\u3089\u3092\u512a\u5148\u3057\u307e\u3059\u3002\u6307\u5b9a\u304c\u306a\u3051\u308c\u3070\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u64cd\u4f5c\u9805\u76ee"},"\u64cd\u4f5c\u9805\u76ee"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u756a\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee\u7a2e\u5225"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u7a2e\u5225"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8868\u793a/\u6d3b\u6027\u6761\u4ef6"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"T1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u5f97\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WebView"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b9\u30af\u30ed\u30fc\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h2",{id:"\u30a4\u30d9\u30f3\u30c8\u5b9a\u7fa9"},"\u30a4\u30d9\u30f3\u30c8\u5b9a\u7fa9"),(0,n.kt)("h3",{id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"},"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30a4\u30d9\u30f3\u30c8"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406\u6982\u8981"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u521d\u671f\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3055\u308c\u305fURL\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")))),(0,n.kt)("h3",{id:"\u30e6\u30fc\u30b6\u64cd\u4f5c"},"\u30e6\u30fc\u30b6\u64cd\u4f5c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30a4\u30d9\u30f3\u30c8"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u51e6\u7406\u6982\u8981"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u756a\u4e0b\u307e\u3067\u30b9\u30af\u30ed\u30fc\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff1aonScrollEnd\u3067\u6e21\u3055\u308c\u305f\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"\u521d\u56de\u306e\u307f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\uff1aonceScrollEnd\u3067\u6e21\u3055\u308c\u305f\u51e6\u7406\u3082\u5b9f\u884c\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u30d7\u30ed\u30d1\u30c6\u30a3"},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"onScrollEnd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"function"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u756a\u4e0b\u307e\u3067\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u305f\u6642\u306b\u5b9f\u884c\u3059\u308b\u51e6\u7406")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"onceScrollEnd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"function"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u521d\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u756a\u4e0b\u307e\u3067\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u305f\u6642\u306b\u306e\u307f\u5b9f\u884c\u3059\u308b\u51e6\u7406")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"onError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"function"),(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native WebView\u306eonError\u304c\u767a\u751f\u3057\u305f\u6642\u306b\u5b9f\u884c\u3059\u308b\u51e6\u7406",(0,n.kt)("br",null),"\u6307\u5b9a\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u5f8c\u8ff0\u306e\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u51e6\u7406\u306b\u6e96\u62e0\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"onHttpError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"function"),(0,n.kt)("td",{parentName:"tr",align:"left"},"React Native WebView\u306eonHttpError\u304c\u767a\u751f\u3057\u305f\u6642\u306b\u5b9f\u884c\u3059\u308b\u51e6\u7406",(0,n.kt)("br",null),"\u6307\u5b9a\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u5f8c\u8ff0\u306e\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u51e6\u7406\u306b\u6e96\u62e0\u3057\u307e\u3059")))),(0,n.kt)("p",null,"\u203b React Native WebView\u306b\u306f\u5b58\u5728\u3057\u306a\u3044\u30d7\u30ed\u30d1\u30c6\u30a3\u3084\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u3082\u306e\u306e\u307f\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002\u4e0a\u8a18\u4ee5\u5916\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3064\u3044\u3066\u306f",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md"},"React Native WebView\u306eAPI\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u52d5\u4f5c"},"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u52d5\u4f5c"),(0,n.kt)("p",null,"Application Architecture\u306e",(0,n.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),"\u306e\u65b9\u91dd\u306b\u5247\u308a\u3001WebView\u3092\u4f7f\u7528\u3059\u308b\u5404\u753b\u9762\u304c\u30a8\u30e9\u30fc\u51e6\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3053\u3053\u3067\u306f\u3001\u5171\u901a\u90e8\u54c1\u3068\u3057\u3066\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u306e\u307f\u8a18\u8f09\u3057\u307e\u3059\u3002\u753b\u9762\u500b\u5225\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u753b\u9762\u5074\u306e\u8a2d\u8a08\u66f8\u306b\u8a18\u8f09\u3057\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},"React Native WebView"),"\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#onerror"},"onError"),"\u3001",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#onhttperror"},"onHttpError"),"\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"onHttpError")),(0,n.kt)("td",{parentName:"tr",align:"left"},"WebView\u3067\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u6642\u306b\u3001400\u4ee5\u4e0a\u306eHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3067\u8fd4\u5374\u3055\u308c\u305f\u5834\u5408\u306b\u547c\u3073\u3060\u3055\u308c\u307e\u3059\u3002SantokuApp\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u30a8\u30e9\u30fc\u306e\u6355\u6349\u5f8c\u306b\u7279\u306b\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001Web\u30a2\u30d7\u30ea\u304b\u3089\u8fd4\u3055\u308c\u305f\u30a8\u30e9\u30fc\u753b\u9762\u304c\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),"\u30e6\u30fc\u30b6\u5411\u3051\u306e\u30a8\u30e9\u30fc\u753b\u9762\u304c\u8fd4\u3055\u308c\u306a\u3044\u5834\u5408\u306a\u3069\u3001\u63a5\u7d9a\u5148\u306eWeb\u30a2\u30d7\u30ea\u306b\u5fdc\u3058\u305f\u51e6\u7406\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"onError")),(0,n.kt)("td",{parentName:"tr",align:"left"},"WebView\u3067\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u6642\u306b\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a8\u30e9\u30fc\u306a\u3069\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u547c\u3073\u3060\u3055\u308c\u307e\u3059\u3002SantokuApp\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3067\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u78ba\u8a8d\u3092\u4fc3\u3059\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u307e\u305f\u3001Firebase Crashlytics\u306b\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\u753b\u9762\u4ed5\u69d8\u306b\u4f9d\u5b58\u3057\u305f\u7279\u5225\u306a\u51e6\u7406\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"onHttpError"),"\u306f\u3001Android\u306e\u5834\u5408API\u30ec\u30d9\u30eb\u304c23\u4ee5\u4e0a\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"WebView\u3067\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u5185\u306e\u753b\u50cf\u3084CSS\u306a\u3069\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"onError"),"\u3084",(0,n.kt)("inlineCode",{parentName:"p"},"onHttpError"),"\u3067\u306f\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3067\u304d\u307e\u305b\u3093\u3002")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"iOS\u306e\u5834\u5408\u30c7\u30d5\u30a9\u30eb\u30c8\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306f60\u79d2\u3067\u3059\u3002Android\u306e\u5834\u5408\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u306a\u304a\u3001React Native WebView\u306f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u8868\u793a\u3059\u308b\u30da\u30fc\u30b8\u3068\u306e\u901a\u4fe1\u3092\u660e\u793a\u7684\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u305b\u3093\u3002")))}k.isMDXComponent=!0},29832:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/layout.drawio-086c053e9014ce4f2ecd7aeae45a0c45.png"}}]);