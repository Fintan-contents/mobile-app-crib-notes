"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),c=n(16550),s=n(91980),i=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=d({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??p;return b({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==c&&(p(t),s(r))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:m},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":c===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},33171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const c={title:"Image"},s=void 0,i={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/image",id:"react-native/learn/basic-concepts/react-native-basics/components/image",title:"Image",description:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/image.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"Image"},sidebar:"learn",previous:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"},next:{title:"ScrollView",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view"}},u={},p=[],m={toc:p},b="wrapper";function d(e){let{components:t,...c}=e;return(0,a.kt)(b,(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u30b9\u30ad\u30e3\u30f3\u3055\u308c\u3001\u753b\u50cf\u30b5\u30a4\u30ba\u304c\u30a2\u30d7\u30ea\u30d0\u30f3\u30c9\u30eb\u306b\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u3057\u3066\u542b\u307e\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u753b\u50cf\u306e\u5927\u304d\u3055\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u306f\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u304c\u308f\u304b\u3089\u306a\u3044\u305f\u3081\u3001\u5e45\u3068\u9ad8\u3055\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u30670\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u3092\u624b\u52d5\u3067\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u306e\u753b\u50cf\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"image",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(25609).Z,width:"1080",height:"2220"}))),(0,a.kt)(l.Z,{value:"source",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, Image, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  image: {\n    width: 150,\n    height: 150,\n  },\n});\n")))))}d.isMDXComponent=!0},25609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-c4ae98adb6d41c4681671baef4ddf717.png"}}]);