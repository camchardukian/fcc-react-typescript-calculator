(this["webpackJsonpfcc-react-typescript-calculator"]=this["webpackJsonpfcc-react-typescript-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),i=(n(19),n(20),n(8)),u=n(5),o=n(30),m={number:0,enteringNumber:0,storedNumber:0,decimalWillBeAdded:!1,numberHasDecimal:!1,isCalculating:!0,operatorType:"",setNumber:function(){},setEnteringNumber:function(){},setStoredNumber:function(){},setContext:function(){throw new Error("setContext function must be overridden.")},handleSetDisplayValue:function(){},handleClearValues:function(){},setOperatorType:function(){},setDecimalWillBeAdded:function(){},setNumberHasDecimal:function(){},setIsCalculating:function(){},handleChooseOperatorType:function(){},handleSetStoredValue:function(){},handleCalculations:function(){},handleAddDecimal:function(){},handleSetIsCalculating:function(){}},s=Object(a.createContext)(m),d=function(e){var t=e.children,n=Object(a.useState)(m),c=Object(u.a)(n,2),l=c[0],d=c[1],f=Object(a.useState)(0),b=Object(u.a)(f,2),p=b[0],E=b[1],h=Object(a.useState)(0),v=Object(u.a)(h,2),O=v[0],C=v[1],S=Object(a.useState)(0),g=Object(u.a)(S,2),y=g[0],N=g[1],j=Object(a.useState)(""),x=Object(u.a)(j,2),w=x[0],D=x[1],T=Object(a.useState)(!1),k=Object(u.a)(T,2),V=k[0],A=k[1],I=function(e){A(e)};return r.a.createElement(s.Provider,{value:Object(i.a)(Object(i.a)({},l),{},{setContext:d,number:p,setNumber:E,enteringNumber:y,setEnteringNumber:N,handleSetDisplayValue:function(e){String(p).length<15?p?0===e?(E("".concat(""+p+e)),N("".concat(""+p+e))):(E(""+p+e),N(""+p+e)):(E(e),N(String(e))):alert("maximum character limit exceeded")},storedNumber:O,setStoredNumber:C,operatorType:w,setOperatorType:D,handleClearValues:function(){E(0),C(0),N(0)},handleSetStoredValue:function(){C(p),E(0)},handleSetIsCalculating:I,handleCalculations:function(){if(y&&V){var e=Object(o.a)(String(y));e=e.evaluate(),e=Math.round(1e10*e)/1e10,C(e),N(e),E(e)}I(!1)},handleAddDecimal:function(){if(function(){var e=String(y);if(-1===e.indexOf("."))return!0;for(var t=0,n=0;n<e.length;n+=1)if(e[n].match(/[+-/*]/)&&(t+=1),"."===e[n]&&(t=0),t)return e+="",!0}()){var e=y+".";e===y||O?-1!==String(p).indexOf(".")||O?-1===String(p).indexOf(".")&&(E(p+"."),N(y+".")):(E("0."),N("0.")):(N(e),E(e))}}})},t)},f=(n(22),function(e){var t=e.number,n=e.id,c=Object(a.useContext)(s).handleSetDisplayValue;return r.a.createElement("button",{className:"number-btn",id:"".concat(n),onClick:function(){return c(t)}},t)}),b=(n(23),function(){var e=Object(a.useContext)(s).enteringNumber;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"display"},e))}),p=(n(24),function(){var e=Object(a.useContext)(s).handleClearValues;return r.a.createElement("button",{type:"button",id:"clear",onClick:function(){return e()}},r.a.createElement("span",{className:"clear-text"},"AC"))}),E=(n(25),function(e){var t=e.opType,n=e.id,c=Object(a.useContext)(s).handleSetDisplayValue;return r.a.createElement("button",{type:"button",className:"calculator-arithmetic-operator",id:n,onClick:function(){return c(t)}},r.a.createElement("span",null,t))}),h=(n(26),function(){var e=Object(a.useContext)(s).handleSetIsCalculating;return r.a.createElement("button",{type:"button",className:"calculator-arithmetic-operator",id:"equals",onClick:function(){return e(!0)}},r.a.createElement("span",null,"="))}),v=(n(27),function(){var e=Object(a.useContext)(s).handleAddDecimal;return r.a.createElement("button",{type:"button",id:"decimal",className:"calculator-arithmetic-operator",onClick:function(){return e()}},r.a.createElement("span",null,"."))}),O=function(){return r.a.createElement("div",{className:"calculator"},r.a.createElement(b,null),r.a.createElement(p,null),r.a.createElement("div",{className:"flex-row"},r.a.createElement(f,{number:1,id:"one"}),r.a.createElement(f,{number:2,id:"two"}),r.a.createElement(f,{number:3,id:"three"}),r.a.createElement(E,{opType:"/",id:"divide"})),r.a.createElement("div",{className:"flex-row"},r.a.createElement(f,{number:4,id:"four"}),r.a.createElement(f,{number:5,id:"five"}),r.a.createElement(f,{number:6,id:"six"}),r.a.createElement(E,{opType:"-",id:"subtract"})),r.a.createElement("div",{className:"flex-row"},r.a.createElement(f,{number:7,id:"seven"}),r.a.createElement(f,{number:8,id:"eight"}),r.a.createElement(f,{number:9,id:"nine"}),r.a.createElement(E,{opType:"*",id:"multiply"})),r.a.createElement("div",{className:"flex-row"},r.a.createElement(f,{number:0,id:"zero"}),r.a.createElement(E,{opType:"+",id:"add"}),r.a.createElement(h,null),r.a.createElement(v,null)))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.e00f19ca.chunk.js.map