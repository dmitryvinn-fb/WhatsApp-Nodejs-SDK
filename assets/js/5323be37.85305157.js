"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[6739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"ContactObject",title:"ContactObject"},c="Contact Object",i={unversionedId:"api-reference/types/ContactObject",id:"api-reference/types/ContactObject",title:"ContactObject",description:"The object required for sharing contact(s) information.",source:"@site/docs/api-reference/types/ContactObject.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/ContactObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/ContactObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/ContactObject.md",tags:[],version:"current",frontMatter:{id:"ContactObject",title:"ContactObject"},sidebar:"mainSidebar",previous:{title:"ComponentObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/component_object"},next:{title:"CurrencyObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/currency_object"}},p={},l=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}],s={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contact-object"},"Contact Object"),(0,a.kt)("p",null,"The object required for sharing contact(s) information."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[ {\n    "addresses": [ {\n        "street": "STREET",\n        "city": "CITY",\n        "state": "STATE",\n        "zip": "ZIP",\n        "country": "COUNTRY",\n        "country_code": "COUNTRY_CODE",\n        "type": "HOME"\n    } ],\n    "birthday": "1911-01-11",\n    "emails": [ {\n        "email": "EMAIL@EXAMPLE.COM",\n        "type": "WORK"\n    } ],\n    "name": {\n        "formatted_name": "NAME",\n        "first_name": "FIRST_NAME",\n        "last_name": "LAST_NAME",\n        "middle_name": "MIDDLE_NAME",\n        "suffix": "SUFFIX",\n        "prefix": "PREFIX"\n    },\n    "org": {\n        "company": "COMPANY",\n        "department": "DEPARTMENT",\n        "title": "TITLE"\n    },\n    "phones": [ {\n        "phone": "PHONE_NUMBER",\n        "type": "HOME"\n    },\n    {\n        "phone": "PHONE_NUMBER",\n        "type": "WORK",\n        "wa_id": "PHONE_OR_WA_ID"\n    } ],\n    "urls": [ {\n        "url": new URL( "https://wwww.example.com" ).href,\n        "type": "WORK"\n    } ]\n} ]\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"addresses")," : ",(0,a.kt)("a",{parentName:"li",href:"addresses_object"},"AddressesObject"),"[] (optional) \u2014 array of the contact's addresses."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"birthday")," : string (optional) \u2014 birthday in YYYY-MM-DD format."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"emails")," : ",(0,a.kt)("a",{parentName:"li",href:"EmailObject"},"EmailObject"),"[] (optional) \u2014 array of the contact's emails."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," : ",(0,a.kt)("a",{parentName:"li",href:"NameObject"},"NameObject")," \u2014 contact's name."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"org")," : ",(0,a.kt)("a",{parentName:"li",href:"OrgObject"},"OrgObject")," (optional) \u2014 the contact's organization."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"phones")," : ",(0,a.kt)("a",{parentName:"li",href:"PhoneObject"},"PhoneObject"),"[] (optional) \u2014 array of the contact's phone numbers."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"urls"),"[] : ",(0,a.kt)("a",{parentName:"li",href:"URLObject"},"URLObject"),"[] (optional) \u2014 array of the contact's URLs.")))}d.isMDXComponent=!0}}]);