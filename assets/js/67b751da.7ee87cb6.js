"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[4481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),v=r,u=s["".concat(p,".").concat(v)]||s[v]||c[v]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},26201:(e,t,n)=>{n.d(t,{L:()=>u});var a=n(87462),r=n(39960),i=n(44996),l=n(86010),o=n(67294);const p={pageList:"pageList_n8aW",pageListRow:"pageListRow_NBap",pageOverviewTitle:"pageOverviewTitle_xKrE",pageOverviewContainer:"pageOverviewContainer_d9JB",pageOverviewLinkCard:"pageOverviewLinkCard_bnn5",pageOverviewImage:"pageOverviewImage_Sodf"},m=e=>{let{children:t,colSize:n=4,...m}=e;const d=(0,i.Z)(m.to);return o.createElement("div",{className:(0,l.Z)("col",`col--${n}`,p.pageOverviewContainer)},o.createElement(r.Z,(0,a.Z)({className:(0,l.Z)("card",p.pageOverviewLinkCard)},m,{to:d}),t))},d=e=>{let{title:t}=e;return o.createElement("div",{className:(0,l.Z)("card__header",p.pageOverviewTitle)},o.createElement("h3",null,t))},s=e=>{let{src:t,alt:n,...r}=e;const m=(0,i.Z)(t);return o.createElement("div",{className:(0,l.Z)("card__image")},o.createElement("img",(0,a.Z)({className:p.pageOverviewImage},r,{alt:n,src:m})))},c=e=>{let{summary:t}=e;return o.createElement("div",{className:(0,l.Z)("card__body",p.pageOverviewSummary)},o.createElement("p",null,t))},v=e=>{let{title:t,imageUrl:n,summary:a,...r}=e;return o.createElement(m,r,o.createElement(d,{title:`${t} \xbb`}),n&&o.createElement(s,{src:n,alt:t}),a&&o.createElement(c,{summary:a}))},u=e=>{let{overviews:t,colSize:n}=e;return o.createElement("section",{className:(0,l.Z)(p.pageList)},o.createElement("div",{className:(0,l.Z)("container")},o.createElement("div",{className:(0,l.Z)("row",p.pageListRow)},t.map((e=>o.createElement(v,(0,a.Z)({key:e.to,colSize:n},e)))))))}},13048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,cicd:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>m,toc:()=>c,v:()=>v});var a=n(87462),r=n(67294),i=n(3905),l=n(26201);const o={title:"\u958b\u767a\u74b0\u5883\u69cb\u7bc9",sidebar_label:"\u6982\u8981"},p=void 0,m={unversionedId:"react-native/santoku/development/development-environment",id:"react-native/santoku/development/development-environment",title:"\u958b\u767a\u74b0\u5883\u69cb\u7bc9",description:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",source:"@site/docs/react-native/santoku/development/development-environment.mdx",sourceDirName:"react-native/santoku/development",slug:"/react-native/santoku/development/development-environment",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment",draft:!1,tags:[],version:"current",lastUpdatedAt:1680240073,formattedLastUpdatedAt:"2023\u5e743\u670831\u65e5",frontMatter:{title:"\u958b\u767a\u74b0\u5883\u69cb\u7bc9",sidebar_label:"\u6982\u8981"},sidebar:"santoku",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/santoku/development"},next:{title:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-environment"}},d={},s=[{title:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",to:"/react-native/santoku/development/development-environment/setting-up-environment",summary:(0,i.kt)(r.Fragment,null,"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u958b\u767a\u306b\u5229\u7528\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002")},{title:"\u57fa\u672c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",to:"/react-native/santoku/development/development-environment/basic-setup",summary:(0,i.kt)(r.Fragment,null,"\u958b\u767a\u4e2d\u306f\u3001\u57fa\u672c\u7684\u306b\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3084\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u5185\u3067\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3066\u958b\u767a\u3057\u3066\u3044\u304f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u624b\u9806\u3092\u5b8c\u4e86\u3059\u308c\u3070\u3001\u305d\u3046\u3044\u3063\u305f\u57fa\u672c\u7684\u306a\u958b\u767a\u3092\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")},{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",to:"/react-native/santoku/development/development-environment/setting-up-ios-run-on-device",summary:(0,i.kt)(r.Fragment,null,"iOS\u30a2\u30d7\u30ea\u3092\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u624b\u9806\u3067\u3059\u3002")},{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\uff09",to:"/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device",summary:(0,i.kt)(r.Fragment,null,"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3084\u30c7\u30a3\u30fc\u30d7\u30ea\u30f3\u30af\u306a\u3069\u3001App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3068\u547c\u3070\u308c\u308b\u6a5f\u80fd\u3092\u30c7\u30d0\u30a4\u30b9\u3067\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u624b\u9806\u3067\u3059\u3002")},{title:"Firebase\u3092\u5229\u7528\u3059\u308b",to:"/react-native/santoku/development/development-environment/use-firebase",summary:(0,i.kt)(r.Fragment,null,"\u30a2\u30d7\u30ea\u3092Firebase\u3068\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u624b\u9806\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u72b6\u614b\u3067\u306f\u3001Firebase SDK\u306f\u547c\u3073\u51fa\u3055\u306a\u3044\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002")}],c=[{value:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u914d\u5e03\u7528\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u69cb\u7bc9",id:"\u914d\u5e03\u7528\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u69cb\u7bc9",level:2},{value:"CI/CD\u74b0\u5883\u306e\u69cb\u7bc9",id:"cicd\u74b0\u5883\u306e\u69cb\u7bc9",level:2}],v=[{title:"Android\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u7528\u30d3\u30eb\u30c9\u306e\u8a2d\u5b9a",to:"/react-native/santoku/development/development-environment/setting-up-android-distribution-build",summary:(0,i.kt)(r.Fragment,null,"\u914d\u5e03\u7528\u306eAndroid\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u624b\u9806\u3067\u3059\u3002")},{title:"iOS\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u7528\u30d3\u30eb\u30c9\u306e\u8a2d\u5b9a",to:"/react-native/santoku/development/development-environment/setting-up-ios-distribution-build",summary:(0,i.kt)(r.Fragment,null,"\u914d\u5e03\u7528\u306eiOS\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u624b\u9806\u3067\u3059\u3002")}],u=[{title:"CI/CD\u74b0\u5883\u306e\u69cb\u7bc9",to:"/react-native/santoku/development/development-environment/ci-cd",summary:(0,i.kt)(r.Fragment,null,"\u3053\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u969b\u306b\u69cb\u7bc9\u3057\u305fCI/CD\u74b0\u5883\u306e\u69cb\u6210\u4f8b\u3067\u3059\u3002")}],k={toc:c,v:v,cicd:u},g="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3092\u59cb\u3081\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u624b\u9806\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305a\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-environment"},"\u958b\u767a\u306b\u5229\u7528\u3059\u308b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u3092\u53c2\u7167\u3057\u3066\u3001\u958b\u767a\u74b0\u5883\u3092\u6e96\u5099\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u5f8c\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/basic-setup"},"\u57fa\u672c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),"\u3092\u5b8c\u4e86\u3059\u308c\u3070\u3001\u958b\u767a\u3092\u9032\u3081\u3089\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002\u305d\u306e\u4ed6\u306e\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001\u5fc5\u8981\u306b\u306a\u308a\u6b21\u7b2c\u5b9f\u65bd\u3059\u308c\u3070\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u624b\u9806\u306a\u3069\u3067\u51fa\u3066\u304f\u308b\u30b3\u30de\u30f3\u30c9\u306f\u3001\u5168\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"example-app/SantokuApp"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)(l.L,{overviews:s,colSize:12,mdxType:"PageList"}),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u74b0\u5883\u3084\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148\u3054\u3068\u306b\u5fc5\u8981\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u74b0\u5883"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u8981\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806",(0,i.kt)("sup",{parentName:"th",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"local"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Debug/Release"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3001Android\u7aef\u672b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stg\u3001prod"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3001Android\u7aef\u672b"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stg\u3001prod"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3001Android\u7aef\u672b"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-android-distribution-build"},"Android\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u7528\u30d3\u30eb\u30c9\u306e\u8a2d\u5b9a"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"local\u3001stg\u3001prod"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Debug/Release"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iOS\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"local"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Debug/Release"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iOS\u7aef\u672b"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-run-on-device"},"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stg\u3001prod"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Debug/Release"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iOS\u7aef\u672b"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device"},"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\uff09"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"stg\u3001prod"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Debug/Release"),(0,i.kt)("td",{parentName:"tr",align:"left"},"iOS\u7aef\u672b"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-distribution-build"},"iOS\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u7528\u30d3\u30eb\u30c9\u306e\u8a2d\u5b9a"))))),(0,i.kt)("h2",{id:"\u914d\u5e03\u7528\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u69cb\u7bc9"},"\u914d\u5e03\u7528\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u69cb\u7bc9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools/"},"fastlane"),"\u3092\u5229\u7528\u3057\u3066\u3001\u914d\u5e03\u7528\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u3042\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u306e\u30ea\u30bd\u30fc\u30b9\u3060\u3051\u3067\u306f\u30d3\u30eb\u30c9\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u6e96\u5099\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(l.L,{overviews:v,colSize:12,mdxType:"PageList"}),(0,i.kt)("p",null,"\u30d3\u30eb\u30c9\u74b0\u5883\u3054\u3068\u306b\u3001\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u30ec\u30fc\u30f3\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30de\u30f3\u30c9\u3067fastlane\u3092\u5b9f\u884c\u3059\u308b\u3068\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bundle exec fastlane <Platform: ios/android> <Lane>\n")),(0,i.kt)("p",null,"\u7528\u610f\u3057\u3066\u3042\u308b\u30ec\u30fc\u30f3\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec fastlane lanes"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u30ec\u30fc\u30f3\u306e\u8a73\u7d30\u304c\u78ba\u8a8d\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fintan-contents/mobile-app-crib-notes/blob/master/example-app/SantokuApp/fastlane/Fastfile"},"Fastfile"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"cicd\u74b0\u5883\u306e\u69cb\u7bc9"},"CI/CD\u74b0\u5883\u306e\u69cb\u7bc9"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u969b\u306b\u69cb\u7bc9\u3057\u305fCI/CD\u74b0\u5883\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(l.L,{overviews:u,colSize:12,mdxType:"PageList"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/basic-setup"},"\u57fa\u672c\u7684\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),"\u306f\u3001\u3059\u3079\u3066\u306e\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u3067\u306e\u30d3\u30eb\u30c9\u306b\u5fc5\u8981\u306a\u624b\u9806\u3067\u3059\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);