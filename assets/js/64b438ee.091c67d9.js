"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),p=n(91980),u=n(67392),c=n(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,u]=b({queryString:n,groupId:a}),[s,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=p??s;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:p,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(s(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},96885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"},p=void 0,u={unversionedId:"react-native/learn/getting-started/launch-created-app",id:"react-native/learn/getting-started/launch-created-app",title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3067\u4f5c\u3063\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/getting-started/launch-created-app.mdx",sourceDirName:"react-native/learn/getting-started",slug:"/react-native/learn/getting-started/launch-created-app",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app",draft:!1,tags:[],version:"current",lastUpdatedAt:1703140316,formattedLastUpdatedAt:"2023\u5e7412\u670821\u65e5",frontMatter:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u884c"},sidebar:"learn",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},next:{title:"\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u524d\u306b - \u76ee\u6b21",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts"}},c={},s=[],d={toc:s},m="wrapper";function b(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/getting-started/create-project"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),"\u3067\u4f5c\u3063\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"iOS\u30a2\u30d7\u30ea\u306fiPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3001Android\u30a2\u30d7\u30ea\u306fAndroid\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u8d77\u52d5\u3059\u308b\u306e\u304c\u57fa\u672c\u3067\u3059\u3002\u307e\u305f\u3001\u4eca\u56de\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306fExpo\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3001Expo Go\u3068\u3044\u3046\u30a2\u30d7\u30ea\u3067\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001React Native\u30a2\u30d7\u30ea\u306e\u5b9f\u884c\u65b9\u6cd5\u3068\u4ed5\u7d44\u307f\u3092\u304b\u3093\u305f\u3093\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001React Native\u3084Expo\u306e\u6982\u8981\u3068\u3001\u958b\u767a\u6642\u306e\u8d77\u52d5\u69cb\u6210\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u3061\u3089\u3082\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-react-native"},"React Native\u3068\u306f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-expo"},"Expo\u3068\u306f")))),(0,r.kt)("p",null,"\u5b9f\u884c\u65b9\u6cd5\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u30b3\u30de\u30f3\u30c9\u306f\u3001\u5168\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\uff09\u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3046\u307e\u304f\u8d77\u52d5\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/common-pitfalls"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{defaultValue:"expo",values:[{label:"Expo Go",value:"expo"},{label:"iPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf",value:"iphone"},{label:"Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf",value:"android"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"expo",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(44630).Z,width:"432",height:"257"})),(0,r.kt)("p",null,"Expo Go\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-expo#expo-go%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E9%96%8B%E7%99%BA"},"Expo Go\u3092\u4f7f\u7528\u3057\u305f\u958b\u767a"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/jp/app/expo-go/id982107779"},"App Store"),", ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent"},"Google Play"),"\u304b\u3089Expo Go\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Expo Go\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3089\u3001Expo\u306e\u6a19\u6e96\u3067\u306f\u63d0\u4f9b\u3055\u308c\u3066\u3044\u306a\u3044Config Plugin\u3092\u30d3\u30eb\u30c9\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:plugin\n")),(0,r.kt)("p",null,"Expo\u306e\u958b\u767a\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo start\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"expo-cli"),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"expo-cli"),"\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u6c42\u3081\u3089\u308c\u307e\u3059\u3002Expo Go\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u306f\u5fc5\u8981\u306a\u306e\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"This command requires Expo CLI.\nDo you want to install it globally [Y/n]?\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expo start")," \u3092\u5b9f\u884c\u3059\u308b\u3068Expo\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\n\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308bQR\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u3067\u3001Expo Go\u306f\u540c\u4e00\u7121\u7dda\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5185\u306eMetro Bundler\u306b\u63a5\u7d9a\u3059\u308b\u3088\u3046\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u3066Metro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3001\u3082\u3057\u304f\u306f\u8d77\u52d5\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u306e\u5de6\u4e0b\u306b\u8868\u793a\u3055\u308c\u305fQR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u307e\u3059\u3002Android\u3067\u306fExpo Go\u304b\u3089\u3001iOS\u3067\u306fOS\u306e\u30ab\u30e1\u30e9\u30a2\u30d7\u30ea\u304b\u3089QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"Android\u3067\u306f\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3068\u30a2\u30d7\u30ea\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"iOS\u3067\u306f\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3068Expo Go\u3067\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30d0\u30ca\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30d0\u30ca\u30fc\u3092\u30bf\u30c3\u30d7\u3057\u3066Expo Go\u3067\u30a2\u30d7\u30ea\u3092\u8868\u793a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"npx expo start"),"\u3067\u306f\u3001Expo\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3068Metro Bundler\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"19002"),"\u30dd\u30fc\u30c8\u3001Metro Bundler\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"19000"),"\u30dd\u30fc\u30c8\u3067\u305d\u308c\u305e\u308c\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u30d6\u30e9\u30a6\u30b6\u304c\u3046\u307e\u304f\u8d77\u52d5\u305b\u305a\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306e\u753b\u9762\u304c\u81ea\u52d5\u7684\u306b\u958b\u304b\u308c\u306a\u304b\u3063\u305f\u3068\u3057\u3066\u3082\u3001",(0,r.kt)("a",{parentName:"p",href:"http://localhost:19002"},"http://localhost:19002"),"\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308c\u3070\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u306a\u304a\u3001\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u306a\u3069\u306b\u3088\u3063\u3066\u3053\u308c\u3089\u306e\u30dd\u30fc\u30c8\u304c\u3059\u3067\u306b\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u81ea\u52d5\u7684\u306b\u7570\u306a\u308b\u30dd\u30fc\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u8d77\u52d5\u3057\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u3067\u3082\u3001\u6b21\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30ed\u30b0\u304b\u3089URL\u3092\u78ba\u8a8d\u3057\u3066\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Expo DevTools is running at http://localhost:19003\n")))),(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(1833).Z,width:"507",height:"209"})),(0,r.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\uff08iPhone\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u624b\u9806\u3067\u65e2\u306b\u751f\u6210\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u4e0d\u8981\u3067\u3059\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run prebuild\n")),(0,r.kt)("p",null,"Metro Bundler\u306e\u8d77\u52d5\u3068\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u3092\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run android\n")),(0,r.kt)("p",null,"Android\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u5f8c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u304cMetro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,r.kt)(l.Z,{value:"iphone",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(37722).Z,width:"509",height:"172"})),(0,r.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\uff08Android\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u624b\u9806\u3067\u65e2\u306b\u751f\u6210\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u4e0d\u8981\u3067\u3059\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run prebuild\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"npm run prebuild"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u8b66\u544a\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u8d77\u52d5\u306b\u5f71\u97ff\u306f\u306a\u3044\u306e\u3067\u7121\u8996\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Failed to copy PersonalAccount.xcconfig because PersonalAccount.xcconfig does not exist. Error: ENOENT: no such file or directory, stat '[PJ\u306e\u30d1\u30b9]/config/plugin/template/ios/[PJ\u540d]/PersonalAccount.xcconfig'\n    at Object.statSync (node:fs:1583:3)\n\u301c\u301c \u4ee5\u4e0b\u7565 \u301c\u301c\n")),(0,r.kt)("p",{parentName:"admonition"},"\u30ed\u30b0\u306e\u6700\u5f8c\u306b\u300cConfig synced\u300d\u304c\u51fa\u529b\u3055\u308c\u3066\u3044\u308c\u3070\u3001\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("p",null,"Pods\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run pod-install\n")),(0,r.kt)("p",null,"Metro Bundler\u306e\u8d77\u52d5\u3068\u3001\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u3092\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run ios\n")),(0,r.kt)("p",null,"iOS\u30a2\u30d7\u30ea\u304c\u30d3\u30eb\u30c9\u3055\u308c\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u5f8c\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a2\u30d7\u30ea\u304cMetro Bundler\u3092\u901a\u3057\u3066Java Script\u306e\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u30bd\u30fc\u30b9\u304c\u5909\u66f4\u3055\u308c\u308b\u5ea6\u306b\u90fd\u5ea6\u30a2\u30d7\u30ea\u304c\u66f4\u65b0\u3055\u308c\u308b\u305f\u3081\u3001\u5b9f\u88c5\u4fee\u6b63\u4e2d\u306f\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u3084\u3059\u3044\u3067\u3059\u3002\n\u305d\u306e\u6642\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"r"),"\u3092\u5165\u529b\u3059\u308b\u3053\u3068\u3067\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3067\u304d\u307e\u3059\uff08\u30a8\u30e9\u30fc\u306e\u5ea6\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"npx expo start"),"\u3084",(0,r.kt)("inlineCode",{parentName:"p"},"npm run android/ios"),"\u3092\u5b9f\u884c\u3057\u76f4\u3059\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\uff09\u3002")))}b.isMDXComponent=!0},44630:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/expo-build-28965c27a1de05a986ffaa6c6157fc04.png"},1833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/react-native-android-build-c9f25bdea97ce41c93a579624c95a67d.png"},37722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/react-native-ios-build-fd14892b50df87a486e18318a3283bd2.png"}}]);