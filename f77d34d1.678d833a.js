(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(152)),o=n(156),i=n(157),s={title:"Button"},u={unversionedId:"react-native/learn/basic-concepts/react-native-basics/components/button",id:"react-native/learn/basic-concepts/react-native-basics/components/button",isDocsHomePage:!1,title:"Button",description:"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics/components/button.mdx",slug:"/react-native/learn/basic-concepts/react-native-basics/components/button",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/button",version:"current",lastUpdatedAt:1613389266,sidebar:"learn",previous:{title:"Text",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/text"},next:{title:"TouchableOpacity",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity"}},l=[],p={toc:l};function b(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5404\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u6a19\u6e96\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u8272\u4ee5\u5916\u306e\u30b9\u30bf\u30a4\u30eb\u304c\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u306a\u3044\u305f\u3081\u3001\u30c7\u30b6\u30a4\u30f3\u304c\u30a2\u30d7\u30ea\u306b\u9069\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u4ee3\u308f\u308a\u306b",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/handling-touches#touchables"}),"Touchables"),"\u3092\u4f7f\u7528\u3057\u3066\u72ec\u81ea\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),Object(c.b)(o.a,{defaultValue:"image",values:[{label:"\u753b\u9762\u30a4\u30e1\u30fc\u30b8",value:"image"},{label:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",value:"source"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"image",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("img",{alt:"Button",src:n(254).default}))),Object(c.b)(i.a,{value:"source",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'jsx title="/src/App.tsx"',jsx:!0,title:'"/src/App.tsx"'}),"import React, {useState} from 'react';\nimport {Button, StyleSheet, View} from 'react-native';\n\nexport const App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Button\n        title={`count is ${count}`}\n        onPress={() => {\n          setCount(count + 1);\n        }}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n")))))}b.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||c;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},154:function(e,t,n){"use strict";var r=n(0),a=n(155);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(154),o=n(153),i=n(56),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(c.a)(),v=m.tabGroupChoices,d=m.setTabGroupChoices,y=Object(r.useState)(i),O=y[0],j=y[1],g=r.Children.toArray(e.children);if(null!=b){var h=v[b];null!=h&&h!==O&&p.some((function(e){return e.value===h}))&&j(h)}var x=function(e){j(e),null!=b&&d(b,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},157:function(e,t,n){"use strict";var r=n(3),a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},254:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/button-4c848f5fac0c7c1f3a31cc893a0888e4.png"}}]);