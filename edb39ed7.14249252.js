(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(152)),c=n(156),o=n(157),s={title:"SectionList"},l={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",id:"react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",isDocsHomePage:!1,title:"SectionList",description:"SectionList\u306fFlatList\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u3055\u3089\u306b\u884c\u533a\u5207\u308a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30d8\u30c3\u30c0\u30fc\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list.mdx",slug:"/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/section-list",version:"current",lastUpdatedAt:1613389266,sidebar:"learn",previous:{title:"FlatList",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list"},next:{title:"Design",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/design"}},u=[],p={toc:u};function b(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SectionList"),"\u306f",Object(i.b)("inlineCode",{parentName:"p"},"FlatList"),"\u3068\u540c\u3058\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u307f\u3092\u63cf\u753b\u3057\u3001\u3055\u3089\u306b\u884c\u533a\u5207\u308a\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u30d8\u30c3\u30c0\u30fc\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"props"),"\u306b\u6307\u5b9a\u3057\u305f",Object(i.b)("inlineCode",{parentName:"p"},"renderSectionHeader"),"\u304a\u3088\u3073",Object(i.b)("inlineCode",{parentName:"p"},"renderItem"),"\u3092\u7528\u3044\u3066\u3001",Object(i.b)("inlineCode",{parentName:"p"},"sections"),"\u306b\u6e21\u3055\u308c\u305f\u9805\u76ee\u3092\u63cf\u753b\u3057\u307e\u3059\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"sections"),"\u306e\u5404\u9805\u76ee\u306f\u914d\u5217\u578b\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308b",Object(i.b)("inlineCode",{parentName:"p"},"data"),"\u3092\u3082\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),Object(i.b)(c.a,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"image",mdxType:"TabItem"},Object(i.b)("p",null,Object(i.b)("img",{alt:"SectionList",src:n(251).default}))),Object(i.b)(o.a,{value:"source",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'}),"import React from 'react';\nimport {SectionList, StyleSheet, Text} from 'react-native';\n\nconst sections = [\n  {\n    title: 'Basic',\n    data: ['View', 'Text', 'Button', 'Image'],\n  },\n  {\n    title: 'Lists',\n    data: ['FlatList', 'SectionList'],\n  },\n];\n\nexport const App = () => {\n  return (\n    <SectionList\n      style={styles.container}\n      sections={sections}\n      renderItem={({item}) => <Text style={styles.row}>{item}</Text>}\n      renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}\n      keyExtractor={(_, index) => index.toString()}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  row: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'lightskyblue',\n  },\n  header: {\n    padding: 15,\n    marginBottom: 5,\n    backgroundColor: 'steelblue',\n    color: 'white',\n    fontWeight: 'bold',\n  },\n});\n")))))}b.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},154:function(e,t,n){"use strict";var r=n(0),a=n(155);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(154),c=n(153),o=n(56),s=n.n(o),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(i.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,y=Object(r.useState)(o),O=y[0],g=y[1],j=r.Children.toArray(e.children);if(null!=b){var x=d[b];null!=x&&x!==O&&p.some((function(e){return e.value===x}))&&g(x)}var h=function(e){g(e),null!=b&&v(b,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},157:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},251:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/section-list-f94012fde7be96384ec16bece3aee540.png"}}]);