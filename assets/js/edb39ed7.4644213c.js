"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8135],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,a=e.block,l=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=r.Children.toArray(e.children),d=null!=u?u:f.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=l?l:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),y=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,r.useState)(b),k=h[0],x=h[1],O=[];if(null!=p){var w=y[p];null!=w&&w!==k&&d.some((function(e){return e.value===w}))&&x(w)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=d[n].value;x(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,i,o,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},5515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5064),c=n(8215),s={title:"SectionList"},l=void 0,u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",id:"react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",isDocsHomePage:!1,title:"SectionList",description:"SectionList\u306fFlatList\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u3055\u3089\u306b\u884c\u533a\u5207\u308a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30d8\u30c3\u30c0\u30fc\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components/lists",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"SectionList"},sidebar:"learn",previous:{title:"FlatList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design"}},p=[],m={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SectionList"),"\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u3055\u3089\u306b\u884c\u533a\u5207\u308a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30d8\u30c3\u30c0\u30fc\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u306b\u6307\u5b9a\u3057\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"renderSectionHeader"),"\u304a\u3088\u3073",(0,i.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u3092\u7528\u3044\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"sections"),"\u306b\u6e21\u3055\u308c\u305f\u9805\u76ee\u3092\u63cf\u753b\u3057\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"sections"),"\u306e\u5404\u9805\u76ee\u306f\u914d\u5217\u578b\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"\u3092\u3082\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(o.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"image",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SectionList",src:n(8338).Z}))),(0,i.kt)(c.Z,{value:"source",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {SectionList, StyleSheet, Text} from 'react-native';\n\nconst sections = [\n  {\n    title: 'Basic',\n    data: ['View', 'Text', 'Button', 'Image'],\n  },\n  {\n    title: 'Lists',\n    data: ['FlatList', 'SectionList'],\n  },\n];\n\nexport const App = () => {\n  return (\n    <SectionList\n      style={styles.container}\n      sections={sections}\n      renderItem={({item}) => <Text style={styles.row}>{item}</Text>}\n      renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}\n      keyExtractor={(_, index) => index.toString()}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  row: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'lightskyblue',\n  },\n  header: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'steelblue',\n    color: 'white',\n    fontWeight: 'bold',\n  },\n});\n")))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8338:function(e,t,n){t.Z=n.p+"assets/images/section-list-f94012fde7be96384ec16bece3aee540.png"}}]);