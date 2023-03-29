"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=s,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const o={id:"is_started",title:".is_started"},a="WhatsApp.webhooks.is_started()",i={unversionedId:"api-reference/webhooks/is_started",id:"api-reference/webhooks/is_started",title:".is_started",description:"Gets the status of the webhook web server.",source:"@site/docs/api-reference/webhooks/is_started.md",sourceDirName:"api-reference/webhooks",slug:"/api-reference/webhooks/is_started",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/is_started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/webhooks/is_started.md",tags:[],version:"current",frontMatter:{id:"is_started",title:".is_started"},sidebar:"mainSidebar",previous:{title:"this",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/this"},next:{title:".start",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/start"}},c={},p=[{value:"Example:",id:"example",level:2},{value:"Returns",id:"returns",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"whatsappwebhooksis_started"},"WhatsApp.webhooks.is_started()"),(0,s.kt)("p",null,"Gets the status of the webhook web server."),(0,s.kt)("h2",{id:"example"},"Example:"),(0,s.kt)("p",null,"Start the web server and check if it's running after 5 seconds from application start."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import WhatsApp from 'whatsapp';\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nasync function webhook_callback_function( status_code, req_headers, body, resp, err )\n{\n    console.log(\n        `Incoming webhook response status code: ${ status_code }\\n\\nHeaders:\n        ${ JSON.stringify( req_headers ) }`\n    );\n}\n\nasync function check_status()\n{\n    setTimeout( () =>\n    {\n        console.log( `Webhook listener is running - ${ wa.webhooks.is_started() }` );\n    }, 5000 );\n}\n\nwa.webhooks.start( webhook_callback_function )\ncheck_status();\n")),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("p",null,"boolean \u2014 the HTTP server running state."))}d.isMDXComponent=!0}}]);