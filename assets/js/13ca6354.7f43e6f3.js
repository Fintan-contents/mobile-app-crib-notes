"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7744],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5"},c=void 0,s={unversionedId:"react-native/santoku/application-architecture/error-handling/how-to-handle-error",id:"react-native/santoku/application-architecture/error-handling/how-to-handle-error",title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5",description:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u306f\u5927\u304d\u304f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5206\u985e\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/error-handling/how-to-handle-error.mdx",sourceDirName:"react-native/santoku/application-architecture/error-handling",slug:"/react-native/santoku/application-architecture/error-handling/how-to-handle-error",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/how-to-handle-error",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",frontMatter:{title:"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u3068\u51e6\u7406\u65b9\u6cd5"},sidebar:"santoku",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview"},next:{title:"HTTP API\u901a\u4fe1\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-error-handling"}},p=[{value:"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",id:"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",children:[{value:"Firebase Crashlytics\u306e\u8a2d\u5b9a",id:"firebase-crashlytics\u306e\u8a2d\u5b9a",children:[],level:3}],level:2},{value:"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",id:"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5",children:[{value:"React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"react\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[],level:3},{value:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[],level:3},{value:"Native Modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"native-modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30a8\u30e9\u30fc\u306e\u767a\u751f\u7b87\u6240\u306f\u5927\u304d\u304f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5206\u985e\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JSX"),(0,i.kt)("li",{parentName:"ul"},"Promise"),(0,i.kt)("li",{parentName:"ul"},"Promise\u4ee5\u5916\uff08\u540c\u671f\u51e6\u7406\u3084",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\u306b\u6e21\u3059\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u306a\u3069\uff09"))),(0,i.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Promise"),(0,i.kt)("li",{parentName:"ul"},"Promise\u4ee5\u5916\uff08\u540c\u671f\u51e6\u7406\u3084",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\u306b\u6e21\u3059\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u306a\u3069\uff09"))),(0,i.kt)("li",{parentName:"ul"},"Native Modules")),(0,i.kt)("h2",{id:"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"},"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"),(0,i.kt)("p",null,"\u672a\u51e6\u7406\u306e\u30a8\u30e9\u30fc\u306f\u3001Firebase Crashlytics SDK\u304c\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066Firebase Crashlytics\u306b\u30af\u30e9\u30c3\u30b7\u30e5\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001Promise\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306b\u95a2\u3057\u3066\u306f\u3001Firebase Crashlytics SDK\u3067\u6355\u6349\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u5fc5\u305a\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Firebase Crashlytics\u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u3092\u518d\u8d77\u52d5\u3057\u305f\u6642\u306b\u306a\u308a\u307e\u3059\u3002\u5373\u5ea7\u306b\u30ed\u30b0\u304c\u9001\u4fe1\u3055\u308c\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("h3",{id:"firebase-crashlytics\u306e\u8a2d\u5b9a"},"Firebase Crashlytics\u306e\u8a2d\u5b9a"),(0,i.kt)("p",null,"Firebase Crashlytics\u306e\u52d5\u4f5c\u8a2d\u5b9a\u306f\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306eFirebase.json\u3067\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='Firebase.json'",title:"'Firebase.json'"},'{\n  "react-native": {\n    "crashlytics_debug_enabled": false,\n    "crashlytics_auto_collection_enabled": true,\n    "crashlytics_ndk_enabled": true,\n    "crashlytics_is_error_generation_on_js_crash_enabled": false,\n    "crashlytics_javascript_exception_handler_chaining_enabled": true\n  }\n}\n')),(0,i.kt)("p",null,"\u5404\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5b9a\u7fa9\u3068\u52b9\u679c\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://rnfirebase.io/crashlytics/usage"},"Crashlytics - Installation and getting started with Crashlytics")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"},"\u500b\u5225\u306b\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3059\u308b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"react\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001JSX\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u5fdc\u3058\u305f\u51e6\u7406\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"\u3084",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u306a\u3069\uff09\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"JSX\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://ja.reactjs.org/docs/error-boundaries.html"},"Error Boundary"),"\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002\u8a72\u5f53\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u3067\u30e9\u30c3\u30d7\u3057\u3066\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title='Error Boundary\u306e\u4f8b'",jsx:!0,title:"'Error","Boundary\u306e\u4f8b'":!0},"const Avator = () => {\n  return (\n    // \u30a2\u30d0\u30bf\u30fc\u8868\u793a\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b\n    <AvatorErrorBoundary>\n      <ExternalAvator />\n    </AvatorErrorBoundary>\n  );\n};\n")),(0,i.kt)("p",null,"JSX\u306e\u30a8\u30e9\u30fc\u306f\u57fa\u672c\u7684\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4e0d\u5177\u5408\u306b\u3088\u308b\u3082\u306e\u3067\u3059\u3002\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u304a\u3044\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u3092\u4f7f\u7528\u3057\u3066\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\u306f\u306a\u3044\u3068\u601d\u308f\u308c\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3067\u304d\u307e\u305b\u3093\u3002JSX\u5185\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306b\u95a2\u3057\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%A9%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%A6%E7%90%86"},"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("p",null,"JSX\u4ee5\u5916\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306f\u3001\u767a\u751f\u5143\u304cPromise\u304b\u3069\u3046\u304b\u3067\u5bfe\u5fdc\u304c\u5909\u308f\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"Promise\u306e\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise.catch()"),"\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"await"),"\u5f0f\u3092\u5229\u7528\u3057\u305f\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"li"},"try...catch"),"\u6587\u3067\u56f2\u3093\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title=Promise.catch()\u306e\u4f8b",jsx:!0,title:"Promise.catch()\u306e\u4f8b"},"const Component = () => {\n  useEffect(() => {\n    asyncFunction\n      .then((value) => {\n        // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n      })\n      .catch((e) => {\n        // \u30a8\u30e9\u30fc\u51e6\u7406\n      });\n  }, [asyncFunction]);\n\n  /* \uff5e\u7701\u7565\uff5e */\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title=await\u5f0f\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306etry...catch\u306e\u4f8b",jsx:!0,title:"await\u5f0f\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306etry...catch\u306e\u4f8b"},"const Component = () => {\n  useEffect(() => {\n    try {\n      const result = await asyncFunction();\n      // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n    } catch(e) {\n      // \u30a8\u30e9\u30fc\u51e6\u7406\n    }\n  }, [asyncFunction]);\n\n  /* \uff5e\u7701\u7565\uff5e */\n};\n")),(0,i.kt)("p",null,"Promise\u4ee5\u5916\u306e\u5834\u5408\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),"\u6587\u3067\u56f2\u3093\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\u306a\u3069\u306b\u6e21\u3059\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3067\u306f\u3001\u30a8\u30e9\u30fc\u3092\u95a2\u6570\u5185\u3067\u6355\u6349\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title=try...catch\u306e\u4f8b",jsx:!0,title:"try...catch\u306e\u4f8b"},"const Component = () => {\n  useEffect(() => {\n    try {\n      const result = syncFunction();\n      // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n    } catch(e) {\n      // \u30a8\u30e9\u30fc\u51e6\u7406\n    }\n\n    setTimeout(() => {\n      // \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u5185\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3059\u308b\n      try {\n        const result = syncFunction();\n        // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n      } catch(e) {\n        // \u30a8\u30e9\u30fc\u51e6\u7406\n      }\n    });\n  }, [syncFunction]);\n\n  /* \uff5e\u7701\u7565\uff5e */\n};\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u5fdc\u3058\u305f\u540c\u671f\u51e6\u7406\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3082\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u3067\u6355\u6349\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u305d\u308c\u3089\u306e\u30a8\u30e9\u30fc\u3082",(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u3067\u6355\u6349\u3057\u3066\u3057\u307e\u3046\u3068\u3001\u500b\u3005\u306e\u30a8\u30e9\u30fc\u306b\u5fdc\u3058\u305f\u51e6\u7406\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\u304c\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u305d\u306e\u305f\u3081\u3001JSX\u4ee5\u5916\u306e\u540c\u671f\u51e6\u7406\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306b\u3064\u3044\u3066\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"Error Boundary"),"\u3092\u4f7f\u7528\u3057\u306a\u3044\u3067\u3001\u500b\u5225\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002"))),(0,i.kt)("h3",{id:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u3092\u500b\u5225\u306b\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306f\u3001React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u8aac\u660e\u3057\u3066\u3044\u308b\u5185\u5bb9\u3068\u540c\u69d8\u3067\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.catch()"),"\u3001\u307e\u305f\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),"\u3092\u5229\u7528\u3057\u3066\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title=try...catch\u306e\u4f8b",jsx:!0,title:"try...catch\u306e\u4f8b"},"const Component = () => {\n  const syncEventHandler = useCallback(() => {\n    try {\n      const result = syncFunction();\n      // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n    } catch(e) {\n      // \u30a8\u30e9\u30fc\u51e6\u7406\n    }\n\n    setTimeout(() => {\n      // \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u5185\u3067\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3059\u308b\n      try {\n        const result = syncFunction();\n        // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n      } catch(e) {\n        // \u30a8\u30e9\u30fc\u51e6\u7406\n      }\n    });\n  }, [syncFunction]);\n\n  return (\n    <View>\n      <Button onPress={syncEventHandler} />\n    </View>\n  );\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx title=Promise.catch()\u306e\u4f8b",jsx:!0,title:"Promise.catch()\u306e\u4f8b"},"const Component = () => {\n  const asyncEventHandler = useCallback(() => {\n    asyncFunction\n      .then((value) => {\n        // \u6b63\u5e38\u6642\u306e\u51e6\u7406\n      })\n      .catch((e) => {\n        // \u30a8\u30e9\u30fc\u51e6\u7406\n      });\n  }, [asyncFunction]);\n\n  return (\n    <View>\n      <Button onPress={asyncEventHandler} />\n    </View>\n  );\n};\n")),(0,i.kt)("h3",{id:"native-modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406"},"Native Modules\u306e\u30a8\u30e9\u30fc\u51e6\u7406"),(0,i.kt)("p",null,"Native Modules\u306fJava\uff08Kotlin\uff09\u3084Objective-C\uff08Swift\uff09\u3001C++\u306a\u3069\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u8a00\u8a9e\u3092\u4f7f\u7528\u3057\u305f\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u3059\u3002OS\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308bAPI\u306a\u3069\u3092\u5229\u7528\u3059\u308b\u6642\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Native Modules\u3067\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u3092\u500b\u5225\u306b\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b\u5834\u5408\u306f\u3001\u8a00\u8a9e\u6bce\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u65b9\u5f0f\u306b\u5f93\u3063\u3066\u30a8\u30e9\u30fc\u3092\u6355\u6349\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u307e\u305f\u3001Native Modules\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u3092JavaScript\u5074\u306b\u4f1d\u3048\u305f\u3044\u5834\u9762\u3082\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u3001JavaScript\u5074\u304b\u3089\u30a8\u30e9\u30fc\u6642\u306b\u5b9f\u884c\u3057\u305f\u3044\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092\u53d7\u3051\u53d6\u308b\u304b\u3001Native Modules\u304b\u3089Promise\u3092\u8fd4\u5374\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306f\u3001React Native\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-android#callbacks"},"Android - Callbacks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-android#promises"},"Android - Promises")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-ios#callbacks"},"iOS - Callbacks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/native-modules-ios#promises"},"iOS - Promises"))))}d.isMDXComponent=!0}}]);