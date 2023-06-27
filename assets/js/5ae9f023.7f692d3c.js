"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"},i=void 0,l={unversionedId:"react-native/santoku/application-architecture/auth/credential-management",id:"react-native/santoku/application-architecture/auth/credential-management",title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406",description:"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6642\u306a\u3069\u306b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002Android\u3067\u306fKeyStore\u3001iOS\u306e\u5834\u5408\u306fKeychain\u3092\u5229\u7528\u3057\u307e\u3059\u3002KeyStore\u3084Keychain\u306e\u8a73\u7d30\u306f\u3001Reference - \u8a8d\u8a3c - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/react-native/santoku/application-architecture/auth/credential-management.mdx",sourceDirName:"react-native/santoku/application-architecture/auth",slug:"/react-native/santoku/application-architecture/auth/credential-management",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/credential-management",draft:!1,tags:[],version:"current",lastUpdatedAt:1670563798,formattedLastUpdatedAt:"2022\u5e7412\u67089\u65e5",frontMatter:{title:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"},sidebar:"santoku",previous:{title:"\u7aef\u672b\u8a8d\u8a3c",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/local-auth"},next:{title:"\u30e1\u30c3\u30bb\u30fc\u30b8\u7ba1\u7406",permalink:"/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/overview"}},p={},c=[{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:2},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58",level:3},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97",level:3},{value:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4",id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u6642\u306a\u3069\u306b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u3092\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002Android\u3067\u306fKeyStore\u3001iOS\u306e\u5834\u5408\u306fKeychain\u3092\u5229\u7528\u3057\u307e\u3059\u3002KeyStore\u3084Keychain\u306e\u8a73\u7d30\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/reference/auth/manage-credentials#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E8%B3%87%E6%A0%BC%E6%83%85%E5%A0%B1%E3%81%AE%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E7%AE%A1%E7%90%86%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%B3%A8%E6%84%8F%E7%82%B9"},"Reference - \u8a8d\u8a3c - \u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066Expo\u306e",(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/"},"SecureStore"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u6a5f\u80fd"},"\u6a5f\u80fd"),(0,n.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7ba1\u7406\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u4fdd\u5b58"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoresetitemasynckey-value-options"},"SecureStore.setItemAsync"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Key-Value\u5f62\u5f0f\u3067\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions"},"SecureStoreOptions"),"\u306e",(0,n.kt)("inlineCode",{parentName:"p"},"keychainAccessible"),"\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e",(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked"},"WHEN_UNLOCKED"),"\u3092\u6307\u5b9a\u3057\u3001\u30e6\u30fc\u30b6\u304c\u30c7\u30d0\u30a4\u30b9\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4ed6\u306e\u7aef\u672b\u3067\u30bb\u30ad\u30e5\u30a2\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u5024\u3092\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306a\u3069\u304b\u3089\u5fa9\u5143\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"iOS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions"},"SecureStoreOptions"),"\u306e",(0,n.kt)("inlineCode",{parentName:"li"},"keychainAccessible"),"\u306b",(0,n.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked_this_device_only"},"WHEN_UNLOCKED_THIS_DEVICE_ONLY"),"\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"))),(0,n.kt)("li",{parentName:"ul"},"Android",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Android\u306e\u5834\u5408\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"SecureStore"),"\u306e\u6a5f\u80fd\u3067\u306f\u5b9f\u73fe\u3067\u304d\u307e\u305b\u3093\u3002Android\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc \u30ac\u30a4\u30c9\u306e",(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/topics/data/autobackup?hl=ja#IncludingFiles"},"\u30c7\u30fc\u30bf\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7 - \u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u307e\u305f\u306f\u9664\u5916\u3059\u308b"),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))))),(0,n.kt)("p",null,"\u4fdd\u5b58\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u5024"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u4fdd\u5b58\u30bf\u30a4\u30df\u30f3\u30b0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"activeAccountId")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u306b\u6210\u529f\u3057\u305f\u5834\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30cf\u30c3\u30b7\u30e5\u5024_",(0,n.kt)("inlineCode",{parentName:"td"},"password"),(0,n.kt)("sup",{parentName:"td",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,n.kt)("sup",{parentName:"td",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306b\u6210\u529f\u3057\u305f\u5834\u5408")))),(0,n.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u53d6\u5f97"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoregetitemasynckey-options"},"SecureStore.getItemAsync"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Key\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u53d6\u5f97\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u5f97\u3059\u308b\u5024"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"activeAccountId")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30cf\u30c3\u30b7\u30e5\u5024_",(0,n.kt)("inlineCode",{parentName:"td"},"password")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9")))),(0,n.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4"},"\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306e\u7834\u68c4"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/securestore/#securestoredeleteitemasynckey-options"},"SecureStore.deleteItemAsync"),"\u3092\u4f7f\u7528\u3057\u3066\u3001Key\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u7834\u68c4\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u7834\u68c4\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7834\u68c4\u3059\u308b\u5024"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7834\u68c4\u30bf\u30a4\u30df\u30f3\u30b0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"activeAccountId")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u6642")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30cf\u30c3\u30b7\u30e5\u5024_",(0,n.kt)("inlineCode",{parentName:"td"},"password")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306b\u7d10\u3065\u304f\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a2\u30a6\u30c8\u6642")))),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"\u3053\u306e\u30a2\u30d7\u30ea\u3067\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8907\u6570\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3069\u306e\u30a2\u30ab\u30a6\u30f3\u30c8ID\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306b\u3001\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306b\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u4ed8\u4e0e\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Android\u3067\u306f\u3001KeyStore\u3092\u4f7f\u7528\u3057\u3066\u6697\u53f7\u5316\u3057\u305f\u5024\u3092SharedPreferences\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u305d\u306e\u969b\u306b\u3001Key\u306f\u5e73\u6587\u3067\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u306b\u4f7f\u7528\u3059\u308b\u3088\u3046\u306a\u9805\u76ee\u306f\u3001\u5e73\u6587\u3067\u4fdd\u5b58\u3057\u306a\u3044\u65b9\u304c\u826f\u3044\u3068\u8003\u3048\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4fdd\u5b58\u3059\u308b\u969b\u306eKey\u306e\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092SHA-256\u3067\u30cf\u30c3\u30b7\u30e5\u5316\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);