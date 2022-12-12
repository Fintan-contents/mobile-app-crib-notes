"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,k=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"},l=void 0,o={unversionedId:"react-native/santoku/application-architecture/message-configuration/managed-message",id:"react-native/santoku/application-architecture/message-configuration/managed-message",title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",description:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",source:"@site/docs/react-native/santoku/application-architecture/message-configuration/managed-message.mdx",sourceDirName:"react-native/santoku/application-architecture/message-configuration",slug:"/react-native/santoku/application-architecture/message-configuration/managed-message",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/managed-message",draft:!1,tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021\u5e7411\u670818\u65e5",frontMatter:{title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"},sidebar:"santoku",previous:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30ed\u30fc\u30c9",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/load-message"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/overview"}},p={},c=[{value:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",id:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"},"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u7ba1\u7406\u5bfe\u8c61\u5916\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,n.kt)("p",null,"\u7ba1\u7406\u5bfe\u8c61\u3068\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4f7f\u7528\u30d1\u30bf\u30fc\u30f3\u6bce\u306b\u5206\u985e\u3057\u305f\u30ea\u30b9\u30c8\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u753b\u9762\u306e\u8868\u793a\u9805\u76ee",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30e9\u30d9\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u753b\u9762\u30bf\u30a4\u30c8\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u5165\u529b\u30c6\u30ad\u30b9\u30c8\u5185\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc"),(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u30ac\u30a4\u30c0\u30f3\u30b9"),(0,n.kt)("li",{parentName:"ul"},"\u5165\u529b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5358\u9805\u76ee\u30a8\u30e9\u30fc"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u95a2\u9805\u76ee\u30a8\u30e9\u30fc"))))),(0,n.kt)("li",{parentName:"ul"},"\u30c0\u30a4\u30a2\u30ed\u30b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u78ba\u8a8d\u30e1\u30c3\u30bb\u30fc\u30b8"))),(0,n.kt)("li",{parentName:"ul"},"\u30b9\u30ca\u30c3\u30af\u30d0\u30fc\uff08\u203b1\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,n.kt)("li",{parentName:"ul"},"\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,n.kt)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,n.kt)("p",null,"\uff08\u203b1\uff09API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u7d50\u679c\u306b\u5fdc\u3058\u3066\u3001\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u5074\u3067\u7528\u610f\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6642\u306b\u8fc5\u901f\u304b\u3064\u9069\u5207\u306a\u5185\u5bb9\u3092\u30e6\u30fc\u30b6\u306b\u4f1d\u3048\u308b\u305f\u3081\u3001API\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u542b\u307e\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u305d\u306e\u307e\u307e\u8868\u793a\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4e00\u65b9\u3001\u7ba1\u7406\u5bfe\u8c61\u5916\u3068\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30ed\u30b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u30e1\u30c3\u30bb\u30fc\u30b8"))),(0,n.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u30c0\u30a4\u30a2\u30ed\u30b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30ab\u30e1\u30e9\u3084\u30de\u30a4\u30af\u3001\u4f4d\u7f6e\u60c5\u5831\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u8868\u793a\u3059\u308b\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u30e1\u30c3\u30bb\u30fc\u30b8")))))}s.isMDXComponent=!0}}]);