"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),b=r,u=m["".concat(s,".").concat(b)]||m[b]||v[b]||i;return a?n.createElement(u,c(c({ref:t},p),{},{components:a})):n.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},26201:(e,t,a)=>{a.d(t,{L:()=>u});var n=a(87462),r=a(39960),i=a(44996),c=a(86010),o=a(67294);const s={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},l=e=>{let{children:t,colSize:a=4,...l}=e;const p=(0,i.Z)(l.to);return o.createElement("div",{className:(0,c.Z)("col",`col--${a}`,s.pageOverviewContainer)},o.createElement(r.Z,(0,n.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},l,{to:p}),t))},p=e=>{let{title:t}=e;return o.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},o.createElement("h3",null,t))},m=e=>{let{src:t,alt:a,...r}=e;const l=(0,i.Z)(t);return o.createElement("div",{className:(0,c.Z)("card__image")},o.createElement("img",(0,n.Z)({className:s.pageOverviewImage},r,{alt:a,src:l})))},v=e=>{let{summary:t}=e;return o.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},o.createElement("p",null,t))},b=e=>{let{title:t,imageUrl:a,summary:n,...r}=e;return o.createElement(l,r,o.createElement(p,{title:`${t} \xbb`}),a&&o.createElement(m,{src:a,alt:t}),n&&o.createElement(v,{summary:n}))},u=e=>{let{overviews:t,colSize:a}=e;return o.createElement("section",{className:(0,c.Z)(s.pageList)},o.createElement("div",{className:(0,c.Z)("container")},o.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((e=>o.createElement(b,(0,n.Z)({key:e.to,colSize:a},e)))))))}},8165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(26201);const c={title:"Components",sidebar_label:"\u6982\u8981"},o=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components",id:"react-native/learn/basic-concepts/react-native-basics/components",title:"Components",description:"\u3053\u3053\u304b\u3089\u306f\u3001\u4e3b\u306b\u958b\u767a\u3067\u3088\u304f\u4f7f\u308f\u308c\u308b\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics",slug:"/react-native/learn/basic-concepts/react-native-basics/components",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components",draft:!1,tags:[],version:"current",lastUpdatedAt:1648603685,formattedLastUpdatedAt:"2022\u5e743\u670830\u65e5",frontMatter:{title:"Components",sidebar_label:"\u6982\u8981"},sidebar:"learn",previous:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics"},next:{title:"View",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/view"}},l={},p=[{title:"View",to:"react-native/learn/basic-concepts/react-native-basics/components/view"},{title:"Text",to:"react-native/learn/basic-concepts/react-native-basics/components/text"},{title:"Button",to:"react-native/learn/basic-concepts/react-native-basics/components/button"},{title:"TouchableOpacity",to:"react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"},{title:"Image",to:"react-native/learn/basic-concepts/react-native-basics/components/image"},{title:"ScrollView",to:"react-native/learn/basic-concepts/react-native-basics/components/scroll-view"},{title:"Lists",to:"react-native/learn/basic-concepts/react-native-basics/components/lists"}],m=[{value:"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:2},{value:"React Native Elements",id:"react-native-elements",level:2}],v={toc:m},b="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u3053\u304b\u3089\u306f\u3001\u4e3b\u306b\u958b\u767a\u3067\u3088\u304f\u4f7f\u308f\u308c\u308b\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u7d39\u4ecb\u30da\u30fc\u30b8\u306b\u3042\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u3001\u3059\u3079\u3066RN Spoiler\u304b\u3089\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u30d5\u30a1\u30a4\u30eb\u306b\u5f35\u308a\u4ed8\u3051\u308b\u3060\u3051\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002\n\u624b\u5143\u306e\u74b0\u5883\u3067\u5b9f\u969b\u306b\u52d5\u4f5c\u3055\u305b\u3066\u307f\u3066\u3001\u52d5\u304d\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u63b4\u3093\u3067\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,r.kt)(i.L,{overviews:p,colSize:12,mdxType:"PageList"}),(0,r.kt)("h2",{id:"react-native-elements"},(0,r.kt)("a",{parentName:"h2",href:"https://reactnativeelements.com/"},"React Native Elements")),(0,r.kt)("p",null,"React Native Elements\u306f\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bReact Native\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\nReact Native\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u975e\u5e38\u306b\u4eba\u6c17\u304c\u9ad8\u304f\u3001\u8868\u73fe\u529b\u8c4a\u304b\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u63c3\u3063\u3066\u3044\u307e\u3059\u3002\n\u3069\u306e\u3088\u3046\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u306f\u6b21\u306e\u30b5\u30a4\u30c8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs"},"https://reactnativeelements.com/docs/overview")),(0,r.kt)("p",null,"RN Spoiler\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5165\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"React Native Elements\u4ee5\u5916\u306b\u3082\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308bReact Native\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u591a\u6570\u5b58\u5728\u3057\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,r.kt)("a",{parentName:"p",href:"https://nativebase.io/"},"NativeBase"),"\u3082React Native Elements\u306b\u4e26\u3093\u3067\u6709\u540d\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.nativebase.io"},"https://docs.nativebase.io")),(0,r.kt)("p",{parentName:"admonition"},"\u305d\u306e\u4ed6\u306b\u3082\u69d8\u3005\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304b\u3089\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community"},"https://github.com/react-native-community")),(0,r.kt)("p",{parentName:"admonition"},"\u30a2\u30d7\u30ea\u306b\u6b32\u3057\u3044\u90e8\u54c1\u304c\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084React Native Elements\u306b\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001\u4ed6\u306eUI\u30e9\u30a4\u30d6\u30e9\u30ea\u3082\u63a2\u3057\u3066\u307f\u308b\u3068\u3044\u3044\u3067\u3057\u3087\u3046\u3002")))}u.isMDXComponent=!0}}]);