"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5677],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),g=a,m=f["".concat(l,".").concat(g)]||f[g]||s[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66726:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u51fa\u529b",sidebar_label:"\u6982\u8981"},l=void 0,p={unversionedId:"react-native/santoku/application-architecture/logging-app/overview",id:"react-native/santoku/application-architecture/logging-app/overview",isDocsHomePage:!1,title:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u51fa\u529b",description:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u3067\u30ed\u30b0\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/logging-app/overview.mdx",sourceDirName:"react-native/santoku/application-architecture/logging-app",slug:"/react-native/santoku/application-architecture/logging-app/overview",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/overview",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u51fa\u529b",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u7ba1\u7406\u5bfe\u8c61\u306e\u30e1\u30c3\u30bb\u30fc\u30b8",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/managed-message"},next:{title:"\u30ed\u30b0\u51fa\u529b",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/logging"}},u=[{value:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u7ba1\u7406\u306e\u4ed5\u7d44\u307f",id:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u7ba1\u7406\u306e\u4ed5\u7d44\u307f",children:[],level:2},{value:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805",children:[],level:2}],s={toc:u};function f(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u9014\u3067\u30ed\u30b0\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n\u307e\u305f\u3001\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u5f8c\u306e\u30a2\u30d7\u30ea\u30af\u30e9\u30c3\u30b7\u30e5\u306e\u3088\u3046\u306a\u91cd\u5ea6\u969c\u5bb3\u306e\u767a\u751f\u306b\u5099\u3048\u3001\u30a8\u30e9\u30fc\u60c5\u5831\u3068\u3057\u3066\u30ed\u30b0\u3092\u53ce\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e\u8981\u4ef6\u306b\u5bfe\u3057\u3066\u30ed\u30b0\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u7ba1\u7406\u306e\u4ed5\u7d44\u307f"},"\u30a2\u30d7\u30ea\u306e\u30ed\u30b0\u7ba1\u7406\u306e\u4ed5\u7d44\u307f"),(0,i.kt)("p",null,"\u30ed\u30b0\u51fa\u529b\u3092\u884c\u3046\u306b\u306f\u3001\u56f3\u306e\u3088\u3046\u306b\u30ed\u30ac\u30fc\u30af\u30e9\u30b9\u3092\u7528\u3044\u3066\u3001info\u3084warn\u306a\u3069\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u3054\u3068\u306eAPI\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30ed\u30ac\u30fc\u306e\u6982\u8981",src:n(96266).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u30ed\u30ac\u30fc\u30af\u30e9\u30b9\u306f\u3001\u51fa\u529b\u5148\u3092\u5207\u308a\u66ff\u3048\u308b\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u8907\u6570\u6301\u3066\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u51fa\u529b\u3059\u308b\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3068\u3001\u30a8\u30e9\u30fc\u3092Firebase Crashlytics\u306b\u51fa\u529b\u3059\u308b\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u304c\u3042\u308a\u307e\u3059\u3002")),(0,i.kt)("p",null,"\u30a8\u30e9\u30fc\u30ec\u30d9\u30eb\u3067\u51fa\u529b\u3057\u305f\u30ed\u30b0\u306f\u3001Firebase Crashlytics\u306b\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\u30a2\u30d7\u30ea\u3067\u30af\u30e9\u30c3\u30b7\u30e5\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001\u6b21\u306e\u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u6642\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"},"\u95a2\u9023\u3059\u308b\u6c7a\u5b9a\u4e8b\u9805"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../decisions/adr-006-logging"},"\u30ed\u30b0\u51fa\u529b\u306e\u65b9\u91dd"))))}f.isMDXComponent=!0},96266:function(e,t,n){t.Z=n.p+"assets/images/log-overview.drawio-208301a5aca1b812fc02950a099a1db8.png"}}]);