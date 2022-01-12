"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1133],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return m}});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),i=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},d=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=i(a),m=o,v=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return a?t.createElement(v,u(u({ref:n},d),{},{components:a})):t.createElement(v,u({ref:n},d))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,u=new Array(r);u[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<r;i++)u[i]=a[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:o},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(87462),o=a(67294),r=a(72389),u=a(79443);var l=function(){var e=(0,o.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(63616),i=a(86010),d="tabItem_1uMI";function c(e){var n,a,r,u=e.lazy,c=e.block,s=e.defaultValue,m=e.values,v=e.groupId,k=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,p.lx)(b,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(n=null!=s?s:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),A=N.tabGroupChoices,S=N.setTabGroupChoices,D=(0,o.useState)(g),y=D[0],C=D[1],w=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=A[v];null!=x&&x!==y&&b.some((function(e){return e.value===x}))&&C(x)}var O=function(e){var n=e.currentTarget,a=w.indexOf(n),t=b[a].value;t!==y&&(I(n),C(t),null!=v&&S(v,t))},R=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;a=w[o]||w[w.length-1]}null==(n=a)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var n=e.value,a=e.label,r=e.attributes;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:O,onClick:O},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":y===n})}),null!=a?a:n)}))),u?(0,o.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}function s(e){var n=(0,r.Z)();return o.createElement(c,(0,t.Z)({key:String(n)},e))}},82642:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return v}});var t=a(87462),o=a(63366),r=(a(67294),a(3905)),u=a(26396),l=a(58215),p=["components"],i={title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30a2\u30d7\u30ea\u8d77\u52d5"},d=void 0,c={unversionedId:"react-native/santoku/development/implement/app-launch-with-build-variants",id:"react-native/santoku/development/implement/app-launch-with-build-variants",title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30a2\u30d7\u30ea\u8d77\u52d5",description:"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306b\u30d3\u30eb\u30c9\u306e\u7a2e\u985e\uff08\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3001\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u306a\u3069\uff09\u3084\u63a5\u7d9a\u5148\u306e\u30db\u30b9\u30c8\u540d\u306a\u3069\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/santoku/development/implement/app-launch-with-build-variants.mdx",sourceDirName:"react-native/santoku/development/implement",slug:"/react-native/santoku/development/implement/app-launch-with-build-variants",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/app-launch-with-build-variants",tags:[],version:"current",lastUpdatedAt:1637203136,formattedLastUpdatedAt:"2021/11/18",frontMatter:{title:"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306e\u30a2\u30d7\u30ea\u8d77\u52d5"},sidebar:"santoku",previous:{title:"\u30ed\u30b0\u306e\u5229\u7528",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation"},next:{title:"Firebase\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",permalink:"/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase"}},s=[{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Debug</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Debug</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>DebugAdvanced</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>DebugAdvanced</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>ReleaseInHouse</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>ReleaseInHouse</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Release</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Release</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Debug</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Debug</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>DebugAdvanced</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>DebugAdvanced</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>ReleaseInHouse</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>ReleaseInHouse</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Release</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>DevSantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1",children:[],level:4},{value:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a<code>Release</code>\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a<code>SantokuApp</code>",id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1",children:[],level:4}],m={toc:s};function v(e){var n=e.components,a=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306b\u30d3\u30eb\u30c9\u306e\u7a2e\u985e\uff08\u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u3001\u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u306a\u3069\uff09\u3084\u63a5\u7d9a\u5148\u306e\u30db\u30b9\u30c8\u540d\u306a\u3069\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/santoku/development/build-configuration"},"\u30d3\u30eb\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u306b\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)(u.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Android",value:"android"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Debug"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "DevSantokuApp" --configuration "Debug"\n')),(0,r.kt)("p",null,"\u3082\u3057\u304f\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"scheme"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"configuration"),"\u3092\u7701\u7565\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run ios\n")),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Debug"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "SantokuApp" --configuration "Debug"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DebugAdvanced"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "DevSantokuApp" --configuration "DebugAdvanced"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DebugAdvanced"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "SantokuApp" --configuration "DebugAdvanced"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"ReleaseInHouse"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "DevSantokuApp" --configuration "ReleaseInHouse"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"ReleaseInHouse"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "SantokuApp" --configuration "ReleaseInHouse"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Release"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "DevSantokuApp" --configuration "Release"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Release"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run ios -- --scheme "SantokuApp" --configuration "Release"\n'))),(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Debug"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "devSantokuAppDebug" --appIdSuffix "dev.debug"\n')),(0,r.kt)("p",null,"\u3082\u3057\u304f\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"variant"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"appIdSuffix"),"\u3092\u7701\u7565\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run android\n")),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debug\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Debug"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "santokuAppDebug" --appIdSuffix "debug"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DebugAdvanced"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "devSantokuAppDebugAdvanced" --appIdSuffix "dev.debugAdvanced"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7debugadvanced\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DebugAdvanced"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "santokuAppDebugAdvanced" --appIdSuffix "debugAdvanced"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"ReleaseInHouse"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "devSantokuAppReleaseInHouse" --appIdSuffix "dev.house"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7releaseinhouse\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"ReleaseInHouse"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "santokuAppReleaseInHouse" --appIdSuffix "house"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcdevsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Release"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"DevSantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "devSantokuAppRelease" --appIdSuffix "dev"\n')),(0,r.kt)("h4",{id:"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7release\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fcsantokuapp-1"},"\u30d3\u30eb\u30c9\u30bf\u30a4\u30d7\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"Release"),"\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u30d5\u30ec\u30fc\u30d0\u30fc\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"SantokuApp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm run android -- --variant "santokuAppRelease" --appIdSuffix ""\n')))))}v.isMDXComponent=!0}}]);