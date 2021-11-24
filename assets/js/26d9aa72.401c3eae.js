"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[357],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(3039),d=n(6010),u="tabItem_1uMI";function s(e){var t,n,a,l=e.lazy,o=e.block,s=e.defaultValue,m=e.values,c=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),N=(0,p.lx)(f,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),h=b.tabGroupChoices,y=b.setTabGroupChoices,S=(0,r.useState)(g),A=S[0],D=S[1],C=[],w=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=h[c];null!=O&&O!==A&&f.some((function(e){return e.value===O}))&&D(O)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==A&&(w(t),D(a),null!=c&&y(c,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},k)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":A===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:I,onClick:I},null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},9256:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(5064),i=n(8215),p=["components"],d={title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b"},u=void 0,s={unversionedId:"react-native/santoku/development/development-environment/use-firebase",id:"react-native/santoku/development/development-environment/use-firebase",isDocsHomePage:!1,title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b",description:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001Firebase SDK\u7528\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u30c0\u30df\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5bfe\u8c61OS\u3068\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u5225\u9014\u5165\u624b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/development-environment/04.use-firebase.mdx",sourceDirName:"react-native/santoku/development/development-environment",slug:"/react-native/santoku/development/development-environment/use-firebase",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",sidebarPosition:4,frontMatter:{title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b"},sidebar:"santoku",previous:{title:"USB\u63a5\u7d9a\u3067iOS\u7aef\u672b\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08App\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\uff09",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device"},next:{title:"Android\u30a2\u30d7\u30ea\u306e\u914d\u5e03\u7528\u30d3\u30eb\u30c9\u306e\u8a2d\u5b9a",permalink:"/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-android-distribution-build"}},m=[],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001Firebase SDK\u7528\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u30c0\u30df\u30fc\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5bfe\u8c61OS\u3068\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u5225\u9014\u5165\u624b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306f\u3001\u7570\u306a\u308b\u30a2\u30d7\u30ea\u3068\u3057\u3066Firebase\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)(o.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Android",value:"android"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,l.kt)("p",null,"iOS\u7528\u306b\u306f\u3001\u6b21\u306e\u547d\u540d\u30eb\u30fc\u30eb\u3067",(0,l.kt)("inlineCode",{parentName:"p"},"ios/SantokuApp/Supporting"),"\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u3046\u3061\u3001\u30d3\u30eb\u30c9\u6642\u306b\u6307\u5b9a\u3055\u308c\u305f\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3068\u5bfe\u5fdc\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"ios/Supporting/GoogleService-Info.plist"),"\u3068\u3057\u3066\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"ios/SantokuApp/Supporting/GoogleService-Info.<Scheme>.<Configuration>.plist\n")),(0,l.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u540d\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff08Configuration\uff09"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff08Scheme\uff09"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.Debug.plist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.DevSantokuApp.DebugAdvanced.plist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.DebugAdvanced.plist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.DevSantokuApp.ReleaseInHouse.plist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.ReleaseInHouse.plist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.DevSantokuApp.Release.plist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GoogleService-Info.SantokuApp.Release.plist"))))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u306e\u3069\u3061\u3089\u304b\u306b\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f\u3001\u30c0\u30df\u30fc\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"GoogleService-Info.Dummy.plist"),"\uff09\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,l.kt)("inlineCode",{parentName:"li"},"Debug"),"\u3001\u304b\u3064\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,l.kt)("inlineCode",{parentName:"li"},"DevSantokuApp"),"\u306e\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u306a\u304b\u3063\u305f\u5834\u5408"))))),(0,l.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,l.kt)("p",null,"Android\u7528\u306b\u306f\u3001\u6b21\u306e\u547d\u540d\u30eb\u30fc\u30eb\u3067",(0,l.kt)("inlineCode",{parentName:"p"},"android/app/src"),"\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"android/app/src/<variant>/google-services.json\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<variant>"),"\u306f\u3001\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u540d\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"ReleaseInHouse"),"\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"DevSantokuApp"),"\u306e\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"devSantokuAppReleaseInHouse"),"\u3068\u306a\u308a\u307e\u3059\u3002\u5148\u982d\u306e\u6587\u5b57\u306f\u5c0f\u6587\u5b57\u3068\u306a\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u683c\u7d0d\u5148\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Debug"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppDebug"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/devSantokuAppDebugAdvanced"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DebugAdvanced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppDebugAdvanced"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/devSantokuAppReleaseInHouse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ReleaseInHouse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppReleaseInHouse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DevSantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/devSantokuAppRelease"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SantokuApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"android/app/src/santokuAppRelease"))))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u306e\u3069\u3061\u3089\u304b\u306b\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f\u3001\u30c0\u30df\u30fc\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"src/app/google-services.json"),"\uff09\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\u304c",(0,l.kt)("inlineCode",{parentName:"li"},"Debug"),"\u3001\u304b\u3064\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\u304c",(0,l.kt)("inlineCode",{parentName:"li"},"DevSantokuApp"),"\u306e\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u306a\u304b\u3063\u305f\u5834\u5408")))))),(0,l.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration"},"\u30d3\u30eb\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);