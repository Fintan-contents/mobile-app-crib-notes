"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1582],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),b=a,m=f["".concat(l,".").concat(b)]||f[b]||p[b]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,f=e.className,b=r.Children.toArray(e.children),m=null!=u?u:b.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value,d=o(),y=d.tabGroupChoices,g=d.setTabGroupChoices,h=(0,r.useState)(v),O=h[0],k=h[1],x=[];if(null!=p){var T=y[p];null!=T&&T!==O&&m.some((function(e){return e.value===T}))&&k(T)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),r=m[n].value;k(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,o,c,i,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,c=window,i=c.innerHeight,s=c.innerWidth,n>=0&&o<=s&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},f)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return b}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=n(5064),i=n(8215),l={title:"TouchableOpacity"},s=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",id:"react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",isDocsHomePage:!1,title:"TouchableOpacity",description:"\u30d3\u30e5\u30fc\u3092\u30bf\u30c3\u30c1\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u305f\u3081\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"TouchableOpacity"},sidebar:"learn",previous:{title:"Button",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/button"},next:{title:"Image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image"}},p=[],f={toc:p};function b(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30d3\u30e5\u30fc\u3092\u30bf\u30c3\u30c1\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u305f\u3081\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002\n\u62bc\u3059\u3068\u30e9\u30c3\u30d7\u3055\u308c\u305f\u30d3\u30e5\u30fc\u304c\u30d5\u30a7\u30fc\u30c9\u30a2\u30a6\u30c8\u3057\u3001\u96e2\u3059\u3068\u30d5\u30a7\u30fc\u30c9\u30a4\u30f3\u3057\u307e\u3059\u3002\n\u30b9\u30bf\u30a4\u30eb\u3092\u81ea\u7531\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"React Native\u30a2\u30d7\u30ea\u3067\u306f\u3001\u4e00\u822c\u7684\u306b\u30dc\u30bf\u30f3\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)(c.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TouchableOpacity",src:n(4414).Z}))),(0,o.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React, {useState} from 'react';\nimport {StyleSheet, Text, TouchableOpacity, View} from 'react-native';\n\nexport const App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <TouchableOpacity\n        style={styles.button}\n        onPress={() => {\n          setCount(count + 1);\n        }}>\n        <Text>count is {count}</Text>\n      </TouchableOpacity>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  button: {\n    padding: 20,\n    borderRadius: 20,\n    borderWidth: 1,\n    borderColor: 'blue',\n    backgroundColor: 'lightskyblue',\n  },\n});\n")))))}b.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},4414:function(e,t,n){t.Z=n.p+"assets/images/touchable-opacity-b1d7c0efff9f713f64d891197820003c.png"}}]);