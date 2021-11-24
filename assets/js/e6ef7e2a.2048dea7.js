"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[853],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],p={title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406"},l=void 0,c={unversionedId:"react-native/santoku/application-architecture/deep-link/process-deep-link",id:"react-native/santoku/application-architecture/deep-link/process-deep-link",isDocsHomePage:!1,title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406",description:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u51e6\u7406\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/deep-link/process-deep-link.mdx",sourceDirName:"react-native/santoku/application-architecture/deep-link",slug:"/react-native/santoku/application-architecture/deep-link/process-deep-link",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/process-deep-link",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/overview"},next:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/create-deep-link"}},s=[{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u53d6\u5f97",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u306e\u53d6\u5f97",children:[{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u306e\u4fdd\u6301",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afurl\u306e\u4fdd\u6301",children:[],level:3},{value:"iOS14\u4ee5\u964d\u3067\u306e\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u5229\u7528\u306e\u901a\u77e5",id:"ios14\u4ee5\u964d\u3067\u306e\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u5229\u7528\u306e\u901a\u77e5",children:[],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u51e6\u7406\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u306e\u53d6\u5f97"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u53d6\u5f97"),(0,r.kt)("p",null,"React Native Firebase Dynamic Links\u3067\u306f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306e",(0,r.kt)("a",{parentName:"p",href:"https://rnfirebase.io/dynamic-links/usage#listening-for-dynamic-links"},"API"),"\u306f\u6b21\u306e2\u3064\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%89%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88"},"\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3001\u30a6\u30a9\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8"),"\u3067\u306f",(0,r.kt)("a",{parentName:"li",href:"https://rnfirebase.io/reference/dynamic-links#getInitialLink"},"getInitialLink"),"\u3067\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"iOS\u3067\u306f",(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/react-native-firebase"},"\u4e0d\u5177\u5408\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081"),"\u306bReact Native Linking\u3092\u5229\u7528\u3057\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview#%E3%83%9B%E3%83%83%E3%83%88%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88"},"\u30db\u30c3\u30c8\u30b9\u30bf\u30fc\u30c8"),"\u3067\u306f",(0,r.kt)("a",{parentName:"li",href:"https://rnfirebase.io/reference/dynamic-links#onLink"},"onLink"),"\u3067\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u3069\u3061\u3089\u306e\u5834\u5408\u3067\u3082\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304b\u3089\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u3001\u753b\u9762\u9077\u79fb\u3092\u5224\u5b9a\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u51e6\u7406\u3057\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306f",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/create-deep-link#%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%AA%E3%83%B3%E3%82%AFurl%E3%81%AE%E6%A7%8B%E6%88%90%E3%83%AB%E3%83%BC%E3%83%AB"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u69cb\u6210"),"\u306b\u3042\u308b\u3068\u304a\u308a\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app"},"Universal Links\u306e\u8b66\u544a"),"\u306b\u3082\u3042\u308b\u3088\u3046\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u304c\u59a5\u5f53\u306aURL\u304b\u3069\u3046\u304b\u3092\u691c\u8a3c\u3057\u3066\u3001\u30e6\u30fc\u30b6\u306b\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u306a\u3069\u5b89\u5168\u306a\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3068\u3069\u3081\u3066\u304f\u3060\u3055\u3044\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u304c\u60f3\u5b9a\u3055\u308c\u306a\u3044\u5024\u306e\u5834\u5408\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5229\u7528\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afurl\u306e\u4fdd\u6301"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u306e\u4fdd\u6301"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u53d6\u5f97\u3057\u305f\u5f8c\u3001\u8a8d\u8a3c\u304c\u5fc5\u8981\u306a\u3069\u306e\u7406\u7531\u3067\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u5bfe\u5fdc\u3059\u308b\u30da\u30fc\u30b8\u3078\u9077\u79fb\u3067\u304d\u306a\u3044\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u3001\u8a72\u5f53\u30da\u30fc\u30b8\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u3001\u30b3\u30f3\u30c6\u30af\u30b9\u30c8\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u753b\u9762\u9593\u3067\u6301\u3061\u56de\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u30b3\u30f3\u30c6\u30af\u30b9\u30c8\u306b\u8a2d\u5b9a\u3057\u3066\u3057\u307e\u3046\u3068\u30af\u30ea\u30a2\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306a\u3069\u306e\u8a2d\u8a08\u304c\u96e3\u3057\u304f\u3001\u7ba1\u7406\u304c\u7169\u96d1\u306b\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53c2\u7167\u3059\u308b\u7bc4\u56f2\u3092\u6c7a\u3081\u3066\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u753b\u9762\u9593\u3067\u6301\u3061\u56de\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3057\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking#handling-intents"},"\u30e6\u30fc\u30b6\u30fc \u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b"),"\u3067\u3082\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u304b\u3089\u8a72\u5f53\u306e\u30da\u30fc\u30b8\u3078\u306e\u9077\u79fb\u307e\u3067\u306b\u591a\u304f\u306e\u753b\u9762\u3092\u307e\u305f\u304c\u306a\u3044\u3053\u3068\u304c\u597d\u307e\u3057\u3044\u3067\u3059\u3002"))),(0,r.kt)("h3",{id:"ios14\u4ee5\u964d\u3067\u306e\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u5229\u7528\u306e\u901a\u77e5"},"iOS14\u4ee5\u964d\u3067\u306e\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u5229\u7528\u306e\u901a\u77e5"),(0,r.kt)("p",null,"iOS\u306e\u307f\u3067\u3059\u304c\u3001Firebase Dynamic Links\u306f\u3001\u30a2\u30d7\u30ea\u304c\u307e\u3060\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u304d\u306b\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u6b21\u306e\u3088\u3046\u306b\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d6\u30e9\u30a6\u30b6\u3067\u8868\u793a\u3057\u305f\u30d7\u30ec\u30d3\u30e5\u30fc\u30da\u30fc\u30b8\u304b\u3089\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30afURL\u3078\u9077\u79fb\u3059\u308b\u969b\u306b\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc"),(0,r.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u306b\u521d\u3081\u3066\u8d77\u52d5\u3057\u305f\u30a2\u30d7\u30ea\u306f\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306e\u5024\u3092\u8aad\u307f\u8fbc\u3080")),(0,r.kt)("p",null,"iOS14\u4ee5\u964d\u3067\u306f\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308b\u3068OS\u304c\u901a\u77e5\u3092\u8868\u793a\u3059\u308b\u4ed5\u69d8\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u521d\u3081\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u305f\u3068\u304d\u306e\u307f\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u5024\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u3068\u3001\u300c",(0,r.kt)("inlineCode",{parentName:"p"},"<\u30a2\u30d7\u30ea\u540d>\u306bSafari\u304b\u3089\u30da\u30fc\u30b9\u30c8"),"\u300d\u306e\u3088\u3046\u306a\u901a\u77e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"Firebase SDK\u306e\u8a2d\u5b9a\u3067",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/ios/receive?hl=ja#set-up-firebase-and-the-dynamic-links-sdk"},"\u3053\u306e\u6a5f\u80fd\u3092\u7121\u52b9\u306b\u3059\u308b"),"\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u306b\u305d\u306e\u307e\u307e\u8d77\u52d5\u3057\u3066\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u8aad\u307f\u53d6\u308b\u6a5f\u80fd\u304c\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8b66\u544a\u306b\u8a18\u8f09\u304c\u3042\u308b\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"matchType"),"\u306e\u5024\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"week"),"\u7a0b\u5ea6\u306b\u306a\u308a\u3001\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"matchType"),"\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),"\u3067\u306a\u3044\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306f\u5229\u7528\u3057\u306a\u3044\u305f\u3081\u3067\u3059\u3002",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u521d\u56de\u8d77\u52d5\u6642\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u304b\u3089\u958b\u304b\u308c\u305f\u3068\u3057\u3066\u3082\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306e\u5024\u304cURL\u5f62\u5f0f\u3067\u3042\u308c\u3070\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u8d77\u52d5\u3057\u305f\u3068\u304d\u306e\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30b0URL\u304c\u512a\u5148\u3055\u308c\u308b\u305f\u3081\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304b\u3089\u8aad\u307f\u53d6\u3063\u305f\u3068\u3044\u3046\u901a\u77e5\u306f\u51fa\u307e\u3059\u304c\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306e\u5024\u306f\u5229\u7528\u3055\u308c\u306a\u3044\u3068\u3044\u3046\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/react-native-firebase#%E4%BB%96%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%8C%E9%96%8B%E3%81%84%E3%81%9F%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%AA%E3%83%B3%E3%82%AFurl%E3%82%92%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%81%8C%E3%81%82%E3%82%8B"},"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);