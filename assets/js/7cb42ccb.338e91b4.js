"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8208],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,v=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,m=e.values,d=e.groupId,s=e.className,u=a.Children.toArray(e.children),v=null!=m?m:u.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=c?c:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,N=i(),f=N.tabGroupChoices,g=N.setTabGroupChoices,h=(0,a.useState)(k),b=h[0],y=h[1],w=[];if(null!=d){var C=f[d];null!=C&&C!==b&&v.some((function(e){return e.value===C}))&&y(C)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=v[n].value;y(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},s)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8440:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),p={title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9"},c=void 0,m={unversionedId:"react-native/learn/getting-started/setting-up-development-environment",id:"react-native/learn/getting-started/setting-up-development-environment",isDocsHomePage:!1,title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",description:"React Native\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u624b\u9806\u3067\u3059\u3002\u74b0\u5883\u69cb\u7bc9\u3092\u9032\u3081\u308b\u524d\u306b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u8a72\u5f53\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30c4\u30fc\u30eb\u304c\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u4e0d\u8981\u3067\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\uff09\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/react-native/learn/getting-started/setting-up-development-environment.mdx",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/setting-up-development-environment",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9"},sidebar:"learn",previous:{title:"\u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"}},d=[{value:"React Native\u958b\u767a\u74b0\u5883\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb",id:"react-native\u958b\u767a\u74b0\u5883\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb",children:[{value:"\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u78ba\u8a8d\u624b\u9806",id:"\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u78ba\u8a8d\u624b\u9806",children:[]},{value:"Android SDK",id:"android-sdk",children:[]}]},{value:"\u74b0\u5883\u69cb\u7bc9",id:"\u74b0\u5883\u69cb\u7bc9",children:[]}],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u624b\u9806\u3067\u3059\u3002\u74b0\u5883\u69cb\u7bc9\u3092\u9032\u3081\u308b\u524d\u306b\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u8a72\u5f53\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30c4\u30fc\u30eb\u304c\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u4e0d\u8981\u3067\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\uff09\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"react-native\u958b\u767a\u74b0\u5883\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb"},"React Native\u958b\u767a\u74b0\u5883\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb"),(0,i.kt)("p",null,"\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u78ba\u8a8d\u624b\u9806\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u78ba\u8a8d\u624b\u9806"},"\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u78ba\u8a8d\u624b\u9806"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5171\u901a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Node.js"),(0,i.kt)("p",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u30bf\u30fc\u30df\u30ca\u30eb\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"node -v"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"v12.x.x")," \u4ee5\u964d\u3067\u3042\u308c\u3070OK\u3067\u3059\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ node -v\nv14.15.1\n")),(0,i.kt)("p",{parentName:"li"},"\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u307e\u305f\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"v11.x.x"),"\u4ee5\u4e0b\u306e\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Java Development Kit"),(0,i.kt)("p",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u30bf\u30fc\u30df\u30ca\u30eb\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"java -version"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"1.8.x")," \u4ee5\u964d\u3067\u3042\u308c\u3070OK\u3067\u3059\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ java -version\nopenjdk version "1.8.0_275"\nOpenJDK Runtime Environment (AdoptOpen_JDK)(build 1.8.0_275-b01)\nOpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.275-b01, mixed mode)\n')),(0,i.kt)("p",{parentName:"li"},"\u4e0a\u8a18\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"OpenJDK"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u51fa\u529b\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u3059\u3002JDK\u3068\u6bd4\u8f03\u3057\u3066\u4e00\u90e8\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u306b\u76f8\u9055\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u78ba\u8a8d\u7b87\u6240\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},'openjdk version "1.8.0_275"'),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},'"1.8.0_275"'),"\uff08\u30d0\u30fc\u30b8\u30e7\u30f3\uff09\u90e8\u5206\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"li"},"\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u307e\u305f\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"1.7.x"),"\u4ee5\u4e0b\u306e\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Android Studio"),(0,i.kt)("p",{parentName:"li"},"Android Studio\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001Android SDK\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3082\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u78ba\u8a8d\u65b9\u6cd5\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"#android-sdk"},"Android SDK"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"react-native-cli"),(0,i.kt)("p",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u30bf\u30fc\u30df\u30ca\u30eb\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"react-native -v")," \u3092\u5b9f\u884c\u3057\u3066",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-cli")," \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c",(0,i.kt)("strong",{parentName:"p"},"\u8868\u793a\u3055\u308c\u306a\u3044\u3053\u3068"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"react-native-cli"),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3068\u3001\u30a2\u30d7\u30ea\u5b9f\u884c\u306b\u5931\u6557\u3057\u307e\u3059\u3002\n\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/common-pitfalls/react-native-cli-uninstall"},"react-native-cli\u306b\u3064\u3044\u3066"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"macOS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Watchman"),(0,i.kt)("p",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"watchman -v"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ watchman -v\n4.9.0\n")),(0,i.kt)("p",{parentName:"li"},"\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u95a2\u3057\u3066\u7279\u306b\u6307\u5b9a\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CocoaPods"),(0,i.kt)("p",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"pod --version"),"\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ pod --version\n1.10.1\n")),(0,i.kt)("p",{parentName:"li"},"\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u95a2\u3057\u3066\u7279\u306b\u6307\u5b9a\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Xcode"),(0,i.kt)("p",{parentName:"li"},"Xcode\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001Xcode\u3092\u8d77\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u8d77\u52d5\u5f8c\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"12.x")," \u4ee5\u964d\u3067\u3042\u308c\u3070OK\u3067\u3059\u3002"),(0,i.kt)("p",{parentName:"li"},"Xcode\u8868\u793a\u4f8b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Version 12.3(12C33)")),(0,i.kt)("p",{parentName:"li"},"Xcode\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u307e\u305f\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"11.x"),"\u4ee5\u4e0b\u306e\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002"))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u516c\u5f0f\u624b\u9806\u3067iOS\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3088\u3046\u3068\u3057\u3066\u3082\u30d3\u30eb\u30c9\u30a8\u30e9\u30fc\u306b\u306a\u308b",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/30836"},"issue"),"\u304c\u3042\u308a\u307e\u3059\u3002\nissue\u304cClose\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/common-pitfalls/cant-build-in-xcode"},"Xcode\u3067\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b"),"\u3092\u53c2\u7167\u3057\u3066\u5bfe\u5fdc\u3059\u308b\u304b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"AwesomeProject"),"\u306eiOS\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u78ba\u8a8d\u3092Skip\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5b66\u7fd2\u3067\u5229\u7528\u3059\u308b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u306f\u767a\u751f\u3057\u306a\u3044\u305f\u3081\u3001",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u4ee5\u964d\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))),(0,i.kt)("h3",{id:"android-sdk"},"Android SDK"),(0,i.kt)("p",null,"Android\u958b\u767a\u306fAndroid SDK\u306e\u30c4\u30fc\u30eb\u985e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u6b21\u306e\u624b\u9806\u306b\u305d\u3063\u3066\u30c4\u30fc\u30eb\u304c\u5229\u7528\u53ef\u80fd\u306a\u72b6\u614b\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nSDK Manager\u306b\u3066\u30c4\u30fc\u30eb\u306e\u72b6\u6cc1\u3092\u6b21\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Android Studio\u3092\u8d77\u52d5"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Configure > SDK Manager > Appearance & Behavior > System Setting > Android SDK"),"\u307e\u3067\u79fb\u52d5"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SDK Tools"),"\u30bf\u30d6\u3092\u9078\u629e"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Android SDK Platform-Tools"),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u614b\u3067\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d")),(0,i.kt)("p",null,"Android SDK Platform-Tools\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u3064\u3065\u3044\u3066\u74b0\u5883\u5909\u6570\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"\u306b\u4ee5\u4e0b\u306e\u30d1\u30b9\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)(o.Z,{groupId:"operating-systems",defaultValue:"mac",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"~/Library/Android/sdk/platform-tools\n"))),(0,i.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"%LOCALAPPDATA%\\Android\\Sdk\\platform-tools\n")))),(0,i.kt)("p",null,"\u74b0\u5883\u5909\u6570\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"\u306b\u542b\u307e\u308c\u3066\u3044\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"\u74b0\u5883\u69cb\u7bc9"},"\u74b0\u5883\u69cb\u7bc9"),(0,i.kt)("p",null,"\u4e0a\u8a18\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u3057\u305f\u304c\u3044\u4e0d\u8db3\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306fWindows\u3068macOS\u4e21\u65b9\u306e\u8aac\u660e\u304c\u3042\u308a\u307e\u3059\u3002\u74b0\u5883\u306b\u5fdc\u3058\u3066\u53c2\u7167\u3059\u308b\u5185\u5bb9\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3059\u308b\u969b\u306f\u3001",(0,i.kt)("strong",{parentName:"p"},"React Native CLI Quickstart"),"\u30bf\u30d6\u3092\u9078\u629e\u3057\u3066\u3001\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067\u3001\u74b0\u5883\u69cb\u7bc9\u306b\u95a2\u9023\u3059\u308b\u8aac\u660e\u306f\u7d42\u4e86\u3067\u3059\u3002\u305d\u306e\u4ed6\u306bVisual Studio Code\u3084proxy\u8a2d\u5b9a\u3092",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/supplement"},"\u958b\u767a\u74b0\u5883\u306e\u88dc\u8db3"),"\u3068\u3057\u3066\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u4e0a\u3067\u5fc5\u8981\u306a\u65b9\u306f\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);