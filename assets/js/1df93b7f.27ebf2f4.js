(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[3237],{6258:function(e,t,a){"use strict";a.d(t,{L:function(){return d}});var r=a(2122),n=a(9756),i=a(6742),l=a(4996),c=a(6010),m=a(7294),s={pageList:"pageList_1XMy",pageListRow:"pageListRow_vu2c",pageOverviewTitle:"pageOverviewTitle_oKPA",pageOverviewContainer:"pageOverviewContainer_2nek",pageOverviewLinkCard:"pageOverviewLinkCard_2eLB",pageOverviewImage:"pageOverviewImage_2njI"},o=function(e){var t=e.children,a=e.colSize,o=void 0===a?4:a,v=(0,n.Z)(e,["children","colSize"]),u=(0,l.Z)(v.to);return m.createElement("div",{className:(0,c.Z)("col","col--"+o,s.pageOverviewContainer)},m.createElement(i.Z,(0,r.Z)({className:(0,c.Z)("card",s.pageOverviewLinkCard)},v,{to:u}),t))},v=function(e){var t=e.title;return m.createElement("div",{className:(0,c.Z)("card__header",s.pageOverviewTitle)},m.createElement("h3",null,t))},u=function(e){var t=e.src,a=e.alt,i=(0,n.Z)(e,["src","alt"]),o=(0,l.Z)(t);return m.createElement("div",{className:(0,c.Z)("card__image")},m.createElement("img",(0,r.Z)({className:s.pageOverviewImage},i,{alt:a,src:o})))},g=function(e){var t=e.summary;return m.createElement("div",{className:(0,c.Z)("card__body",s.pageOverviewSummary)},m.createElement("p",null,t))},_=function(e){var t=e.title,a=e.imageUrl,r=e.summary,i=(0,n.Z)(e,["title","imageUrl","summary"]);return m.createElement(o,i,m.createElement(v,{title:t+" \xbb"}),a&&m.createElement(u,{src:a,alt:t}),r&&m.createElement(g,{summary:r}))},d=function(e){var t=e.overviews,a=e.colSize;return m.createElement("section",{className:(0,c.Z)(s.pageList)},m.createElement("div",{className:(0,c.Z)("container")},m.createElement("div",{className:(0,c.Z)("row",s.pageListRow)},t.map((function(e){return m.createElement(_,(0,r.Z)({key:e.to,colSize:a},e))})))))}},5e3:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var r=a(2263),n=a(9349),i=a(6010),l=a(7294),c=a(6258),m="heroBanner_3P7f",s=[{title:"Reference",to:"reference",imageUrl:"img/undraw_Bibliophile_re_xarc.svg",summary:l.createElement(l.Fragment,null,"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9")},{title:"Distribution",to:"distribution",imageUrl:"img/undraw_Outer_space_re_u9vd.svg",summary:l.createElement(l.Fragment,null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u914d\u5e03")}],o=[{title:"Learn React Native",to:"react-native/learn",imageUrl:"img/undraw_studying_s3l7.svg",summary:l.createElement(l.Fragment,null,"\u5b66\u7fd2\u7528\u30b3\u30f3\u30c6\u30f3\u30c4")},{title:"Common Pitfalls",to:"react-native/common-pitfalls",imageUrl:"img/undraw_void_3ggu.svg",summary:l.createElement(l.Fragment,null,"\u30cf\u30de\u308a\u304c\u3061\u306a\u843d\u3068\u3057\u7a74")}];var v=function(){var e=(0,r.Z)().siteConfig;return l.createElement(n.Z,null,l.createElement("header",{className:(0,i.Z)("hero hero--primary",m)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},(null==e?void 0:e.title)||""),l.createElement("p",{className:"hero__subtitle"},(null==e?void 0:e.tagline)||""))),l.createElement("main",null,l.createElement(c.L,{overviews:s,colSize:4}),l.createElement(c.L,{overviews:o,colSize:4})))}}}]);