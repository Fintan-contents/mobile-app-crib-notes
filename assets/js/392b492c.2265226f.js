"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[1472],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"React Native\u306e\u57fa\u672c",sidebar_label:"\u6982\u8981",hide_table_of_contents:!0},c=void 0,p={unversionedId:"react-native/learn/basic-concepts/react-native-basics",id:"react-native/learn/basic-concepts/react-native-basics",title:"React Native\u306e\u57fa\u672c",description:"React Native\u306f\u3001Facebook\u304c\u4f5c\u6210\u3057\u305f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002",source:"@site/docs/react-native/learn/basic-concepts/react-native-basics.md",sourceDirName:"react-native/learn/basic-concepts",slug:"/react-native/learn/basic-concepts/react-native-basics",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"React Native\u306e\u57fa\u672c",sidebar_label:"\u6982\u8981",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"\u524d\u63d0\u77e5\u8b58",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/pre-requisites"},next:{title:"\u6982\u8981",permalink:"/mobile-app-crib-notes/react-native/learn/basic-concepts/react-native-basics/components"}},d=[],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native\u306f\u3001Facebook\u304c\u4f5c\u6210\u3057\u305f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002\nReact\u3068\u305d\u308c\u305e\u308c\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001Android\u3001\u304a\u3088\u3073iOS\u30a2\u30d7\u30ea\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\nJavaScript\u3092\u7528\u3044\u3066\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306eAPI\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7528\u3044\u3066UI\u306e\u5916\u89b3\u3068\u52d5\u4f5c\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u753b\u9762\u306e\u63cf\u753b\u306b\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6UI\u90e8\u54c1\u306b\u5bfe\u5fdc\u3059\u308b\u7279\u5225\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u7528\u3044\u307e\u3059\u3002\n\u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u547c\u3073\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306e\u8868\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30cd\u30a4\u30c6\u30a3\u30d6UI\u90e8\u54c1\u3068\u306e\u5bfe\u5fdc\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30cd\u30a4\u30c6\u30a3\u30d6",(0,i.kt)("br",null),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<View>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<ViewGroup>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<UIView>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u306a\u3044",(0,i.kt)("inlineCode",{parentName:"td"},"<div>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<Text>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<TextView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<UITextView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<p>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<Image>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<ImageView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<UIImageView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<img>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<ScrollView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<ScrollView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<UIScrollView>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<div>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<TextInput>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<EditText>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<UITextField>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'<input type="text">'))))),(0,i.kt)("p",null,"React Native\u306b\u306f\u3001\u3059\u3050\u306b\u4f7f\u7528\u3067\u304d\u308b\u591a\u6570\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u521d\u3081\u304b\u3089\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3089\u3092",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/components-and-apis"},"\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),"\u3068\u547c\u3073\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);