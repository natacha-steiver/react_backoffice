(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{715:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return o})),r.d(t,"getColor",(function(){return s})),r.d(t,"getStyle",(function(){return i})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return d})),r.d(t,"makeUid",(function(){return u})),r.d(t,"omitByKeys",(function(){return b})),r.d(t,"pickByKeys",(function(){return f})),r.d(t,"rgbToHex",(function(){return g}));var o=function e(t,r){for(var o=0,n=Object.keys(r);o<n.length;o++){var a=n[o];r[a]instanceof Object&&Object.assign(r[a],e(t[a],r[a]))}return Object.assign(t||{},r),t},n=function(){for(var e={},t=document.styleSheets,r="",o=t.length-1;o>-1;o--){for(var n=t[o].cssRules,a=n.length-1;a>-1;a--)if(".ie-custom-properties"===n[a].selectorText){r=n[a].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],o=t.split(": ")[1];r&&o&&(e["--".concat(r.trim())]=o.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},c=function(e){return e.match(/^--.*/i)},i=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(c(e)&&a()){var o=n();t=o[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),o=i(r,t);return o||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,o;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(o,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,o,n,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),o=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(o,", ").concat(n,", ").concat(t/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,t){for(var r={},o=Object.keys(e),n=0;n<o.length;n++)!t.includes(o[n])&&(r[o[n]]=e[o[n]]);return r},f=function(e,t){for(var r={},o=0;o<t.length;o++)r[t[o]]=e[t[o]];return r},g=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),o="0".concat(parseInt(t[2],10).toString(16)),n="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(o.slice(-2)).concat(n.slice(-2))},h={deepObjectsMerge:o,getColor:s,getStyle:i,hexToRgb:l,hexToRgba:d,makeUid:u,omitByKeys:b,pickByKeys:f,rgbToHex:g};t.default=h}]))},722:function(e,t,r){"use strict";var o=r(24),n=r(107),a=(r(2),r(715)),c=r(725),i=r(23),s=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],l=function(e){var t=e.borderColor,r=e.backgroundColor,l=e.pointHoverBackgroundColor,d=e.dataPoints,u=e.label,b=e.pointed,f=Object(n.a)(e,s),g=l||("transparent"!==r?r:t),h=[{data:d,borderColor:Object(a.getColor)(t),backgroundColor:Object(a.getColor)(r),pointBackgroundColor:Object(a.getColor)(g),pointHoverBackgroundColor:Object(a.getColor)(g),label:u}],j={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},p={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},m=function(){var e=b?j:p;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),x=Object(a.deepObjectsMerge)(h,f.datasets||{}),O=Object(a.deepObjectsMerge)(m,f.options||{});return Object(i.jsx)(c.c,Object(o.a)(Object(o.a)({},f),{},{datasets:x,options:O,labels:u}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},761:function(e,t,r){"use strict";r.r(t);r(2);var o=r(711),n=r(714),a=r(722),c=r(23);t.default=function(e){return e.withCharts?Object(c.jsxs)(o.wb,{children:[Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsxs)(o.Tb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds",children:[Object(c.jsx)(n.a,{name:"cib-facebook",height:"52",className:"my-4"}),Object(c.jsx)(a.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[65,59,84,84,51,55,40],label:"Friends",labels:"months"})]})}),Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsxs)(o.Tb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets",children:[Object(c.jsx)(n.a,{name:"cib-twitter",height:"52",className:"my-4"}),Object(c.jsx)(a.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[1,13,9,17,34,41,38],label:"Followers",labels:"months"})]})}),Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsxs)(o.Tb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds",children:[Object(c.jsx)(n.a,{name:"cib-linkedin",height:"52",className:"my-4"}),Object(c.jsx)(a.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[78,81,80,45,34,12,40],label:"Contracts",labels:"months"})]})}),Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsxs)(o.Tb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning",children:[Object(c.jsx)(n.a,{name:"cil-calendar",height:"52",className:"my-4"}),Object(c.jsx)(a.a,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[35,23,56,22,97,23,64],label:"Followers",labels:"months"})]})})]}):Object(c.jsxs)(o.wb,{children:[Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsx)(o.Tb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds",children:Object(c.jsx)(n.a,{name:"cib-facebook",height:"56",className:"my-4"})})}),Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsx)(o.Tb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets",children:Object(c.jsx)(n.a,{name:"cib-twitter",height:"56",className:"my-4"})})}),Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsx)(o.Tb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds",children:Object(c.jsx)(n.a,{name:"cib-linkedin",height:"56",className:"my-4"})})}),Object(c.jsx)(o.u,{sm:"6",lg:"3",children:Object(c.jsx)(o.Tb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning",children:Object(c.jsx)(n.a,{name:"cil-calendar",height:"56",className:"my-4"})})})]})}}}]);
//# sourceMappingURL=30.379339ad.chunk.js.map