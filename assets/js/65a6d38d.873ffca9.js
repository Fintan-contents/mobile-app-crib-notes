"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[2780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),c=n(67392),i=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:b,groupId:d,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=b??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,c.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,i.U)(),[O,T]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=d){const e=w[d];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==O&&(E(t),T(a),null!=d&&k(d,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:I,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},33171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const c={title:"Image"},i=void 0,s={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/image",id:"react-native/learn/basic-concepts/react-native-basics/components/image",title:"Image",description:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/image.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image",draft:!1,tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021\u5e749\u670829\u65e5",frontMatter:{title:"Image"},sidebar:"learn",previous:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"},next:{title:"ScrollView",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view"}},u={},p=[],m={toc:p};function b(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3001\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u3001\u4e00\u6642\u7684\u306a\u30ed\u30fc\u30ab\u30eb\u753b\u50cf\u3001\u30ab\u30e1\u30e9\u30ed\u30fc\u30eb\u306a\u3069\u306e\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u304b\u3089\u306e\u753b\u50cf\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u7a2e\u985e\u306e\u753b\u50cf\u3092\u8868\u793a\u3067\u304d\u308bReact\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u9759\u7684\u30ea\u30bd\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u30b9\u30ad\u30e3\u30f3\u3055\u308c\u3001\u753b\u50cf\u30b5\u30a4\u30ba\u304c\u30a2\u30d7\u30ea\u30d0\u30f3\u30c9\u30eb\u306b\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u3057\u3066\u542b\u307e\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u753b\u50cf\u306e\u5927\u304d\u3055\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u306f\u30d3\u30eb\u30c9\u6642\u306b\u306f\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u304c\u308f\u304b\u3089\u306a\u3044\u305f\u3081\u3001\u5e45\u3068\u9ad8\u3055\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u30670\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u753b\u50cf\u3084\u30c7\u30fc\u30bf\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u3092\u624b\u52d5\u3067\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u306e\u753b\u50cf\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(l.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"image",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(25609).Z,width:"1080",height:"2220"}))),(0,r.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {StyleSheet, Image, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <View style={styles.container}>\n      <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  image: {\n    width: 150,\n    height: 150,\n  },\n});\n")))))}b.isMDXComponent=!0},25609:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-c4ae98adb6d41c4681671baef4ddf717.png"}}]);