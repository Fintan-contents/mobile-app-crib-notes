"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[8962],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,v=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3039),s=n(6010),u="tabItem_1uMI";function p(e){var t,n,r,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,c.lx)(d,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==w&&!d.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+d.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),h=g.tabGroupChoices,x=g.setTabGroupChoices,k=(0,a.useState)(w),O=k[0],T=k[1],E=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var V=h[f];null!=V&&V!==O&&d.some((function(e){return e.value===V}))&&T(V)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),r=d[n].value;r!==O&&(S(t),T(r),null!=f&&x(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=n(5064),i=n(8215),c=["components"],s={title:"ScrollView"},u=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/scroll-view",id:"react-native/learn/basic-concepts/react-native-basics/components/scroll-view",isDocsHomePage:!1,title:"ScrollView",description:"ScrollView\u306f\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/scroll-view.mdx",sourceDirName:"react-native/learn/basic-concepts/react-native-basics/components",slug:"/react-native/learn/basic-concepts/react-native-basics/components/scroll-view",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/scroll-view",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"ScrollView"},sidebar:"learn",previous:{title:"Image",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/image"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/lists"}},m=[],f={toc:m};function v(e){var t=e.components,s=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ScrollView\u306f\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\n\u5c11\u91cf\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u3059\u308b\u5834\u5408\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002\n\u6c34\u5e73\u65b9\u5411\u307e\u305f\u306f\u5782\u76f4\u65b9\u5411\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"ScrollView\u306f\u3059\u3079\u3066\u306e\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4e00\u5ea6\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30a2\u30a4\u30c6\u30e0\u304c\u5927\u91cf\u306b\u3042\u308b\u5834\u5408\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u4e0a\u306e\u6b20\u70b9\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u3067\u306f\u3001FlatList\u306e\u4f7f\u7528\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(l.Z,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"image",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ScrollView",src:n(9103).Z}))),(0,o.kt)(i.Z,{value:"source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'},"import React from 'react';\nimport {ScrollView, StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  return (\n    <ScrollView style={styles.container}>\n      <View style={styles.box1} />\n      <ScrollView horizontal>\n        <View style={styles.box2} />\n        <View style={styles.box2} />\n        <View style={styles.box2} />\n      </ScrollView>\n      <View style={styles.box1} />\n    </ScrollView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  box1: {\n    width: 400,\n    height: 400,\n    marginBottom: 10,\n    marginRight: 10,\n    backgroundColor: 'yellow',\n  },\n  box2: {\n    width: 200,\n    height: 200,\n    marginBottom: 10,\n    marginRight: 10,\n    backgroundColor: 'blue',\n  },\n});\n")))))}v.isMDXComponent=!0},9103:function(e,t,n){t.Z=n.p+"assets/images/scroll-view-84b4d1b713ce4121e605a8c1cd6cca46.png"}}]);