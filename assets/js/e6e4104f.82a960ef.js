"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[9065],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,v=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?a.createElement(v,o(o({ref:n},m),{},{components:t})):a.createElement(v,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},196:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],s={title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762"},p=void 0,l={unversionedId:"react-native/learn/todo-app/screens/login",id:"react-native/learn/todo-app/screens/login",isDocsHomePage:!1,title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762",description:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762",source:"@site/docs/react-native/learn/todo-app/screens/login.mdx",sourceDirName:"react-native/learn/todo-app/screens",slug:"/react-native/learn/todo-app/screens/login",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/login",tags:[],version:"current",lastUpdatedAt:1632898051,formattedLastUpdatedAt:"2021/9/29",frontMatter:{title:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762"},sidebar:"learn",previous:{title:"Modal\u30b9\u30af\u30ea\u30fc\u30f3",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/modal"},next:{title:"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1",permalink:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/keyboard-avoiding-view"}},m=[{value:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762",id:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762",children:[],level:2}],c={toc:m};function d(e){var n=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762"),(0,i.kt)("p",null,"\u6b21\u306f\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u306f\u540d\u524d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u304c\u3042\u308a\u3001\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306e\u691c\u8a3c\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u81ea\u5206\u3067\u30d5\u30a9\u30fc\u30e0\u691c\u8a3c\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306f",(0,i.kt)("a",{parentName:"p",href:"https://ja.reactjs.org/docs/forms.html#fully-fledged-solutions"},"React\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b",(0,i.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npm install formik@2.2.6\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8a73\u7d30\u306f",(0,i.kt)("a",{parentName:"p",href:"https://formik.org/docs/overview"},"Formik\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("p",null,"\u307e\u305f\u3001\u30d0\u30ea\u30c7\u30fc\u30bf\u3082",(0,i.kt)("a",{parentName:"p",href:"https://formik.org/docs/overview#complementary-packages"},"Formik\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npm install yup@0.32.9\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8a73\u7d30\u306f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup\u306eGitHub"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u3057\u305f\u3089\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u5b9f\u88c5\u3057\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("p",null,"\u4fee\u6b63\u91cf\u304c\u591a\u3044\u306e\u3067\u3001\u6b21\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"/src/screens/auth/Login.tsx"),"\u3092\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'jsx title="/src/screens/auth/Login.tsx"',jsx:!0,title:'"/src/screens/auth/Login.tsx"'},"import {useUserContext} from 'contexts/UserContext';\nimport {useFormik} from 'formik';\nimport React, {useCallback} from 'react';\nimport {StyleSheet, View} from 'react-native';\nimport {Button, Input} from 'react-native-elements';\nimport * as Yup from 'yup';\n\nexport const Login: React.FC = () => {\n  const userContext = useUserContext();\n\n  const login = useCallback(\n    (values: {name: string; password: string}) => {\n      userContext.login(values.name, values.password).then(\n        () => {},\n        () => {},\n      );\n    },\n    [userContext],\n  );\n\n  const formik = useFormik({\n    initialValues: {name: '', password: ''},\n    validationSchema: Yup.object().shape({\n      name: Yup.string().required('\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044'),\n      password: Yup.string().required('\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044'),\n    }),\n    validateOnChange: false,\n    onSubmit: login,\n  });\n\n  return (\n    <View style={styles.form}>\n      <Input\n        label=\"\u540d\u524d\"\n        containerStyle={styles.input}\n        autoCapitalize=\"none\"\n        errorMessage={formik.errors.name}\n        onChangeText={formik.handleChange('name')}\n        value={formik.values.name}\n      />\n      <Input\n        label=\"\u30d1\u30b9\u30ef\u30fc\u30c9\"\n        containerStyle={styles.input}\n        errorMessage={formik.errors.password}\n        secureTextEntry\n        onChangeText={formik.handleChange('password')}\n        value={formik.values.password}\n      />\n      <Button\n        disabled={formik.isSubmitting}\n        onPress={() => formik.handleSubmit()}\n        title=\"\u30ed\u30b0\u30a4\u30f3\u3059\u308b\"\n        buttonStyle={styles.button}\n      />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  form: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  input: {marginTop: 20, width: '80%'},\n  button: {\n    marginTop: 30,\n  },\n});\n")),(0,i.kt)("p",null,"\u4e0a\u8a18\u30b3\u30fc\u30c9\u3067\u306f\u3001\u5165\u529b\u30c6\u30ad\u30b9\u30c8\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"Input"),"\uff09\u3068\u30dc\u30bf\u30f3\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),"\uff09\u306b",(0,i.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/"},"React Native Elements"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n\u30a8\u30e9\u30fc\u6642\u306e\u30ac\u30a4\u30c9\u30e1\u30c3\u30bb\u30fc\u30b8\u8868\u793a\u3084\u30dc\u30bf\u30f3\u306e\u30b9\u30bf\u30a4\u30eb\u6307\u5b9a\u306a\u3069\u3001\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306a\u3044\u6a5f\u80fd\u304c",(0,i.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/"},"React Native Elements"),"\u306b\u306f\u63c3\u3063\u3066\u3044\u307e\u3059\u3002\n\u305d\u308c\u305e\u308c\u306e\u4f7f\u3044\u65b9\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/input"},(0,i.kt)("inlineCode",{parentName:"a"},"Input"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/button"},(0,i.kt)("inlineCode",{parentName:"a"},"Button")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RN Spoiler\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u305f\u5834\u5408\u3001React Native Elements\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5165\u3063\u3066\u3044\u307e\u3059\u3002"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Formik"),"\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"useFormik"),"\u30d5\u30c3\u30af\u3092\u7528\u3044\u3066\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306e\u691c\u8a3c\u65b9\u6cd5\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  /* \uff5e\u7701\u7565\uff5e */\n  const formik = useFormik({\n    initialValues: {name: '', password: ''},\n    validationSchema: Yup.object().shape({\n      name: Yup.string().required('\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044'),\n      password: Yup.string().required('\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044'),\n    }),\n    validateOnChange: false,\n    onSubmit: login,\n  });\n  /* \uff5e\u7701\u7565\uff5e */\n")),(0,i.kt)("p",null,"\u540d\u524d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fc5\u9808\u5165\u529b\u3068\u3057\u3066\u3044\u307e\u3059\u3002\n\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onSubmit"),"\u306b\u6307\u5b9a\u3055\u308c\u305f",(0,i.kt)("inlineCode",{parentName:"p"},"login"),"\u51e6\u7406\u304c\u547c\u3070\u308c\u307e\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"login"),"\u51e6\u7406\u306f\u307e\u3060\u672a\u5b9f\u88c5\uff08\u524d\u306e\u753b\u9762\u306b\u623b\u308b\u3060\u3051\uff09\u3067\u3059\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"validateOnChange"),"\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u30dc\u30bf\u30f3\u62bc\u4e0b\u6642\u306e\u307f\u5165\u529b\u5024\u304c\u691c\u8a3c\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"validateOnChange"),"\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3067\u3059\u3002\n\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u5165\u529b\u306e\u90fd\u5ea6\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("p",null,"\u4fee\u6b63\u3067\u304d\u305f\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u304c\u4e0b\u56f3\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u305f\u3089\u6210\u529f\u3067\u3059\u3002\n\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306e\u691c\u8a3c\u304c\u52d5\u4f5c\u3057\u3066\u3044\u308b\u304b\u3082\u4f75\u305b\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"iOS\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u7269\u7406\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089\u300cHardware\u300d\uff1e\u300cKeyboard\u300d\uff1e\u300cConnect Hardware Keyboard\u300d\u306e\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u73fe\u6642\u70b9\u3067\u306f\u3001iOS\u3067\u52d5\u304b\u3057\u305f\u5834\u5408\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30ad\u30fc\u30dc\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3068\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u304c\u96a0\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u6b21\u30bb\u30af\u30b7\u30e7\u30f3\u306e",(0,i.kt)("a",{parentName:"p",href:"/mobile-app-crib-notes/react-native/learn/todo-app/screens/keyboard-avoiding-view"},"\u4eee\u60f3\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u5236\u5fa1"),"\u3067\u305d\u306e\u4e0d\u5177\u5408\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login",src:t(9232).Z})))}d.isMDXComponent=!0},9232:function(e,n,t){n.Z=t.p+"assets/images/login-df9ebd4f213c074451e92cee2d2171a3.png"}}]);