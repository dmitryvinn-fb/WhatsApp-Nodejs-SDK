"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,p=new Array(s);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var o=2;o<s;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const s={id:"template",title:".template"},p="WhatsApp.messages.template()",i={unversionedId:"api-reference/messages/template",id:"api-reference/messages/template",title:".template",description:"Send an existing approved and enabled message template. This request dynamically fills out a message template with provided component parameters.",source:"@site/docs/api-reference/messages/template.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/template",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/template",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/template.md",tags:[],version:"current",frontMatter:{id:"template",title:".template"},sidebar:"mainSidebar",previous:{title:".sticker",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/sticker"},next:{title:".text",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/text"}},l={},o=[{value:"Example:",id:"example",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],c={toc:o},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappmessagestemplate"},"WhatsApp.messages.template()"),(0,a.kt)("p",null,"Send an existing approved and enabled message template. This request dynamically fills out a message template with provided component parameters."),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,'Send a template message called "Subscribe" in the en_US language with a parameter to fill dynamic text in the body to the recipient ',(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import WhatsApp from \'whatsapp\';\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst newsletter_subscription_body =\n{\n    "name": "Subscribe",\n    "language":\n    {\n        "policy": "deterministic",\n        "code": "en_US"\n    },\n    "components":\n    [\n        {\n        "type": "body",\n        "parameters": [\n            {\n            "type": "text",\n            "text": "newsletter"\n            }\n        ]\n        }\n    ]\n};\n\nawait wa.messages.template( newsletter_subscription_body, 12345678901 );\n')),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"../types/template_object"},"Template_Object")," \u2014 the object describing the template to use and any components to dynamically fill the parameters with."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"recipient")," : number \u2014 the recipient's phone number with country code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"reply_message_id")," : string (optional) \u2014 the received WhatsApp message Id to reply back to.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise \u2014 Server response object on success."))}u.isMDXComponent=!0}}]);