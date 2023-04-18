"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[7499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(a),u=r,y=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return a?n.createElement(y,p(p({ref:t},c),{},{components:a})):n.createElement(y,p({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<o;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={id:"component_object",title:"ComponentObject"},p="Component Object",l={unversionedId:"api-reference/types/component_object",id:"api-reference/types/component_object",title:"ComponentObject",description:"The object containing the component to fill available message template parameter(s) with text, currency, date-time, document, image, video, or button. Each type has different requirements.",source:"@site/docs/api-reference/types/ComponentsObject.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/component_object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/component_object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/ComponentsObject.md",tags:[],version:"current",frontMatter:{id:"component_object",title:"ComponentObject"},sidebar:"mainSidebar",previous:{title:"ButtonParameterObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/button_parameter_object"},next:{title:"ContactObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/ContactObject"}},i={},m=[{value:"Currency",id:"currency",level:2},{value:"Example",id:"example",level:3},{value:"Properties",id:"properties",level:3},{value:"Button",id:"button",level:2},{value:"Example",id:"example-1",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Date-time",id:"date-time",level:2},{value:"Example",id:"example-2",level:3},{value:"Properties",id:"properties-2",level:3},{value:"Document",id:"document",level:2},{value:"Example",id:"example-3",level:3},{value:"Properties",id:"properties-3",level:3},{value:"Image",id:"image",level:2},{value:"Example",id:"example-4",level:3},{value:"Properties",id:"properties-4",level:3},{value:"Text",id:"text",level:2},{value:"Example",id:"example-5",level:3},{value:"Properties",id:"properties-5",level:3},{value:"Video",id:"video",level:2},{value:"Example",id:"example-6",level:3},{value:"Properties",id:"properties-6",level:3}],c={toc:m},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-object"},"Component Object"),(0,r.kt)("p",null,"The object containing the component to fill available message template parameter(s) with text, currency, date-time, document, image, video, or button. Each type has different requirements."),(0,r.kt)("h2",{id:"currency"},"Currency"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "body",\n    "parameters":\n    [ {\n        "type": "currency",\n        "currency":\n        {\n            "fallback_value": "VALUE",\n            "code": "USD",\n            "amount_1000": 1000\n        }\n    } ]\n}\n')),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "header", "body" \u2014 type of component, can be either ',(0,r.kt)("em",{parentName:"li"},"header")," or ",(0,r.kt)("em",{parentName:"li"},"body"),". Text-based templates only support the type=body and only text components."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"currency_object"},"CurrencyObject"),"[] \u2014 array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.")),(0,r.kt)("h2",{id:"button"},"Button"),(0,r.kt)("p",null,"The object containing the component to fill a message template parameter(s) with a button."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "button",\n    "sub_type": "quick_reply",\n    "index": "0",\n    "parameters": [\n        {\n        "type": "payload",\n        "payload": "PAYLOAD"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "button" \u2014 the type of component, can only be the value ',(0,r.kt)("em",{parentName:"li"},"button"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sub_type"),' : "quick_reply" or "url" \u2014 ',(0,r.kt)("em",{parentName:"li"},"quick_reply")," refers to a previously created quick reply button that allows for the customer to return a predefined message.\n",(0,r.kt)("em",{parentName:"li"},"url")," refers to a previously created button that allows the customer to visit the URL generated by appending the text parameter to the predefined prefix URL in the template."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"index")," : string (optional) \u2014 position index of the button. You can have up to 3 buttons using index values of 0 to 2."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"button_parameter_object"},"ButtonParameterObject"),"[] \u2014 array of button parameter objects. Can be either ",(0,r.kt)("em",{parentName:"li"},"Quick Reply Button Parameter Object")," or ",(0,r.kt)("em",{parentName:"li"},"URL Button Parameter Object")," that matches ",(0,r.kt)("em",{parentName:"li"},"sub_type"),".")),(0,r.kt)("h2",{id:"date-time"},"Date-time"),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "body",\n    "parameters":\n    [ {\n        "type": "date_time",\n        "date_time":\n        {\n            "fallback_value": "MONTH DAY, YEAR"\n        }\n    } ]\n}\n')),(0,r.kt)("h3",{id:"properties-2"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "header", "body" \u2014 type of component, can be either ',(0,r.kt)("em",{parentName:"li"},"header")," or ",(0,r.kt)("em",{parentName:"li"},"body"),". Text-based templates only support the type=body and only text components."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"date_time_object"},"DateTimeObject"),"[] \u2014 array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.")),(0,r.kt)("h2",{id:"document"},"Document"),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "type": "body",\n    "parameters":\n    [ {\n        "type": "document",\n        "image":\n        {\n            "link": new URL( "https://www.example.com/DOCUMENT.PDF" ).href\n        }\n    } ]\n}\n')),(0,r.kt)("h3",{id:"properties-3"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "header", "body" \u2014 type of component, can be either ',(0,r.kt)("em",{parentName:"li"},"header")," or ",(0,r.kt)("em",{parentName:"li"},"body"),". Text-based templates only support the type=body and only text components."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"DocumentMediaObject"},"DocumentMediaObject"),"[] \u2014 array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.")),(0,r.kt)("h2",{id:"image"},"Image"),(0,r.kt)("h3",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "type": "body",\n    "parameters":\n    [ {\n        "type": "image",\n        "image":\n        {\n            "link": new URL( "https://www.example.com/IMAGE.PNG" ).href\n        }\n    } ]\n}\n')),(0,r.kt)("h3",{id:"properties-4"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "header", "body" \u2014 type of component, can be either ',(0,r.kt)("em",{parentName:"li"},"header")," or ",(0,r.kt)("em",{parentName:"li"},"body"),". Text-based templates only support the type=body and only text components."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"ImageMediaObject"},"ImageMediaObject"),"[] \u2014 array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.")),(0,r.kt)("h2",{id:"text"},"Text"),(0,r.kt)("h3",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "body",\n    "parameters":\n    [ {\n        "type": "text",\n        "text": "TEXT_STRING"\n    } ]\n}\n')),(0,r.kt)("h3",{id:"properties-5"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "header", "body" \u2014 type of component, can be either ',(0,r.kt)("em",{parentName:"li"},"header")," or ",(0,r.kt)("em",{parentName:"li"},"body"),". Text-based templates only support the type=body."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"TextObject"},"TextObject"),"[] \u2014 array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.")),(0,r.kt)("h2",{id:"video"},"Video"),(0,r.kt)("h3",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "type": "body",\n    "parameters":\n    [ {\n        "type": "video",\n        "image":\n        {\n            "link": new URL( "https://www.example.com/VIDEO.MP4" ).href\n        }\n    } ]\n}\n')),(0,r.kt)("h3",{id:"properties-6"},"Properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),' : "header", "body" \u2014 type of component, can be either ',(0,r.kt)("em",{parentName:"li"},"header")," or ",(0,r.kt)("em",{parentName:"li"},"body"),". Text-based templates only support the type=body and only text components."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," : ",(0,r.kt)("a",{parentName:"li",href:"VideoMediaObject"},"VideoMediaObject"),"[] \u2014 array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.")))}d.isMDXComponent=!0}}]);