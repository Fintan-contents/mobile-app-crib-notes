"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7604],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=i,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(v,c(c({ref:t},l),{},{components:a})):n.createElement(v,c({ref:t},l))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52524:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),c=["components"],o={title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc"},p=void 0,s={unversionedId:"react-native/santoku/application-architecture/deep-link/react-native-firebase",id:"react-native/santoku/application-architecture/deep-link/react-native-firebase",title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc",description:"React Native Fireabase\u3067\u767a\u751f\u3059\u308b2\u3064\u306e\u8ab2\u984c\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/deep-link/react-native-firebase.mdx",sourceDirName:"react-native/santoku/application-architecture/deep-link",slug:"/react-native/santoku/application-architecture/deep-link/react-native-firebase",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/react-native-firebase",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc"},sidebar:"santoku",previous:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/create-deep-link"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview"}},l=[{value:"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b",id:"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b",children:[],level:2},{value:"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044",id:"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044",children:[],level:2}],u={toc:l};function m(e){var t=e.components,a=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native Fireabase\u3067\u767a\u751f\u3059\u308b2\u3064\u306e\u8ab2\u984c\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS\u3067\u3001",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/reference/swift/firebasedynamiclinks/api/reference/Enums/DLMatchType.html"},"Firebase Dynamic Links\u306ematchType"),"\u3092\u691c\u8a3c\u3067\u304d\u306a\u3044"),(0,r.kt)("li",{parentName:"ul"},"iOS\u3067\u3001\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044")),(0,r.kt)("h2",{id:"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b"},"\u4ed6\u306e\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u8aad\u307f\u53d6\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b"),(0,r.kt)("p",null,"Firebase Dynamic Links\u306f\u3001iOS\u3067\u521d\u56de\u8d77\u52d5\u6642\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/operating-system-integrations#ios_integration_flowchart"},"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u5229\u7528\u3059\u308b\u3068\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059"),"\u3002\u305f\u3060\u3057\u3001\u5b9f\u969b\u306f\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306e\u5024\u3060\u3051\u3067\u306a\u304f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link#ios%E3%81%A7%E3%81%AE%E6%84%8F%E5%9B%B3%E3%81%97%E3%81%AA%E3%81%84%E5%85%B1%E6%9C%89"},"\u30c7\u30d0\u30a4\u30b9\u60c5\u5831\u306a\u3069\u3082\u5229\u7528"),"\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u305f\u3081\u3001\u4f8b\u3048\u3070\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304c\u7a7a\u3060\u3063\u305f\u3068\u3057\u3066\u3082\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3044\u3063\u305f\u5834\u5408\u306f\u3001\u30e6\u30fc\u30b6\u81ea\u8eab\u304c\u5b9f\u969b\u306b\u958b\u3053\u3046\u3068\u3057\u305f\u308f\u3051\u3067\u306f\u306a\u3044\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304c\u53d6\u5f97\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u30e6\u30fc\u30b6\u304c\u958b\u3044\u305f\u3082\u306e\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3059\u308b\u305f\u3081\u306b",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/swift/firebasedynamiclinks/api/reference/Enums/DLMatchType.html"},"matchType"),"\u3068\u3044\u3046\u9805\u76ee\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306ematchType\u306e\u5024\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),"\u3067\u306a\u3044\u5834\u5408\u306f\u8aa4\u3063\u3066\u53d7\u3051\u53d6\u3063\u305f\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3053\u306eURL\u306f\u5229\u7528\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001React Native Firebase Dynamic Links\u3067\u306f\u3001matchType\u3092JavaScript Module\u306b\u6e21\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u53c2\u7167\u3067\u304d\u307e\u305b\u3093\u3002\n\u305d\u306e\u305f\u3081React Native Firebase Dynamic Links\u306b",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/patch-package"},"patch-package"),"\u3067\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3057\u3001\u5224\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Android\u306e\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/operating-system-integrations#android_integration_flowchart"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306e\u30d5\u30ed\u30fc\u306b\u3082\u3042\u308b\u3088\u3046\u306b\u3001Google Play Services\u3092\u7d4c\u7531\u3057\u3066Intent\u3067URL\u3092\u6e21\u3059\u305f\u3081\u3001\u30c7\u30d0\u30a4\u30b9\u5916\u306b\u60c5\u5831\u3092\u6301\u3064\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"))),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044"},"\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u5834\u5408\u306b\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044"),(0,r.kt)("p",null,"iOS\u30a2\u30d7\u30ea\u3067\u306f\u30a2\u30d7\u30ea\u8d77\u52d5\u306e\u6642\u9593\u304c\u77ed\u3044\u3068\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3067\u304d\u306a\u3044",(0,r.kt)("a",{parentName:"p",href:"https://github.com/invertase/react-native-firebase/issues/2660"},"issue"),"\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306eissue\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getInitialLink"),"\u3067\u306f\u306a\u304f\u3001React Native Linking\u306e",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking#getinitialurl"},(0,r.kt)("inlineCode",{parentName:"a"},"getInitialURL")),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"React Native Linking\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3067\u306f\u306a\u304f\u3001\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u304c\u53d6\u5f97\u3055\u308c\u308b\u305f\u3081",(0,r.kt)("a",{parentName:"p",href:"https://rnfirebase.io/reference/dynamic-links#resolveLink"},"resolveLink"),"\u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Android\u30a2\u30d7\u30ea\u3067\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/25675"},"React Native Linking\u306bissue"),"\u304c\u3042\u308b\u305f\u3081\u3001iOS\u306e\u307fReact Native Linking\u3092\u5229\u7528\u3057\u307e\u3059\u3002"))))}m.isMDXComponent=!0}}]);