"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[5758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(a),s=r,u=m["".concat(o,".").concat(s)]||m[s]||k[s]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u4f5c\u6210"},l=void 0,p={unversionedId:"react-native/santoku/application-architecture/deep-link/create-deep-link",id:"react-native/santoku/application-architecture/deep-link/create-deep-link",title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u4f5c\u6210",description:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u4f5c\u6210\u306b\u306fReact Native Firebase Dynamic Links\u306eAPI\u3092\u5229\u7528\u3057\u3001\u5171\u6709\u3057\u3084\u3059\u3044\u3088\u3046\u306b\u77ed\u3044Dynamic Link\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/application-architecture/deep-link/create-deep-link.mdx",sourceDirName:"react-native/santoku/application-architecture/deep-link",slug:"/react-native/santoku/application-architecture/deep-link/create-deep-link",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/create-deep-link",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u4f5c\u6210"},sidebar:"santoku",previous:{title:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306e\u51e6\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/process-deep-link"},next:{title:"React Native Firebase\u306e\u8ab2\u984c\u5bfe\u5fdc",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/react-native-firebase"}},o={},c=[{value:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u69cb\u6210\u30eb\u30fc\u30eb",id:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u306e\u69cb\u6210\u30eb\u30fc\u30eb",level:3}],d={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u4f5c\u6210\u306b\u306f",(0,r.kt)("a",{parentName:"p",href:"https://rnfirebase.io/dynamic-links/usage#create-a-link"},"React Native Firebase Dynamic Links\u306eAPI"),"\u3092\u5229\u7528\u3057\u3001\u5171\u6709\u3057\u3084\u3059\u3044\u3088\u3046\u306b",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/dynamic-links/android/create"},"\u77ed\u3044Dynamic Link"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afurl\u306e\u69cb\u6210\u30eb\u30fc\u30eb"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u69cb\u6210\u30eb\u30fc\u30eb"),(0,r.kt)("p",null,"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u30c9\u30e1\u30a4\u30f3\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u4ed8\u3051\u305f\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u307e\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"link"),"\uff09\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u69cb\u6210\u3092\u6c7a\u3081\u3066\u4fe1\u983c\u3067\u304d\u308bURL\u304b\u3069\u3046\u304b\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u672c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306fFireabse\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"page.link"),"\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3057\u307e\u3059\u3002\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u69cb\u6210\u30eb\u30fc\u30eb\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"API\u306e\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5024"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u672c\u756a\u306e\u8a2d\u5b9a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30afURL\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"domainUriPrefix"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u4ed8\u3051\u305f\u30c9\u30e1\u30a4\u30f3\u3092\u6301\u3064URI\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"https://santokuapp.page.link/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ea\u30f3\u30afURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"link"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"screen"),"\u3067\u753b\u9762\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"key"),"\u3068",(0,r.kt)("inlineCode",{parentName:"td"},"value"),"\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"https://santokuapp.page.link/${screen}?{key}=${value}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30afURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ios.fallbackUrl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"iOS\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u304d\u306eURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App Store\u306e\u30a2\u30d7\u30ea\u306eURL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30f3\u30c9\u30ebID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ios.bundleId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306ebundleId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"jp.fintan.mobile.SantokuApp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"android\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30afURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"android.fallbackUrl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u304d\u306eURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Play\u306e\u30a2\u30d7\u30ea\u306eURL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"android.packageName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Android\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"jp.fintan.mobile.SantokuApp"))))))}k.isMDXComponent=!0}}]);