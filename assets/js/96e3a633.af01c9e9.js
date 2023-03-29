"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>_});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=o(r),m=a,_=l["".concat(i,".").concat(m)]||l[m]||c[m]||p;return r?n.createElement(_,u(u({ref:t},d),{},{components:r})):n.createElement(_,u({ref:t},d))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,u=new Array(p);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:a,u[1]=s;for(var o=2;o<p;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const p={id:"update_sender_number_id",title:".update_sender_number_id"},u="WhatsApp.update_sender_number_id()",s={unversionedId:"api-reference/whatsapp/update_sender_number_id",id:"api-reference/whatsapp/update_sender_number_id",title:".update_sender_number_id",description:"Change the sender phone number Id. Should only input a value that is registered with the Cloud API otherwise requests will send an unauthorized error.",source:"@site/docs/api-reference/whatsapp/update_sender_number_id.md",sourceDirName:"api-reference/whatsapp",slug:"/api-reference/whatsapp/update_sender_number_id",permalink:"/api-reference/whatsapp/update_sender_number_id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/whatsapp/update_sender_number_id.md",tags:[],version:"current",frontMatter:{id:"update_sender_number_id",title:".update_sender_number_id"},sidebar:"mainSidebar",previous:{title:".update_timeout",permalink:"/api-reference/whatsapp/update_timeout"},next:{title:".update_access_token",permalink:"/api-reference/whatsapp/update_access_token"}},i={},o=[{value:"Example:",id:"example",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],d={toc:o},l="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappupdate_sender_number_id"},"WhatsApp.update_sender_number_id()"),(0,a.kt)("p",null,"Change the sender phone number Id. Should only input a value that is registered with the Cloud API otherwise requests will send an unauthorized error."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"Change the sender number Id to ",(0,a.kt)("inlineCode",{parentName:"p"},"09876543210987654321"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const WhatsApp = require('whatsapp');\n\nconst sender_number_1 = 12345678901234567890;\nconst sender_number_2 = 09876543210987654321;\nconst wa = new WhatsApp( sender_number_1 );\nconst was_sender_changed = wa.update_sender_number_id( sender_number_2 );\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"phone_number_id : number \u2014 the WhatsApp phone number Id of the sender.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Boolean \u2014 the value was updated."))}c.isMDXComponent=!0}}]);