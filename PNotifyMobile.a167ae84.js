parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ad6a":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof t&&t.amd?t(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).PNotifyMobile={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?f(t):e}(this,n)}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(){}function l(t){return t()}function p(){return Object.create(null)}function y(t){t.forEach(l)}function d(t){return"function"==typeof t}function m(t,e){return t!=t?e==e:t!==e||t&&"object"===n(t)||"function"==typeof t}function h(t){t.parentNode.removeChild(t)}var v;function g(t){v=t}function b(){if(!v)throw new Error("Function called outside component initialization");return v}var _=[],$=[],w=[],P=[],x=Promise.resolve(),O=!1;function j(t){w.push(t)}var k=!1,S=new Set;function E(){if(!k){k=!0;do{for(var t=0;t<_.length;t+=1){var e=_[t];g(e),D(e.$$)}for(g(null),_.length=0;$.length;)$.pop()();for(var n=0;n<w.length;n+=1){var r=w[n];S.has(r)||(S.add(r),r())}w.length=0}while(_.length);for(;P.length;)P.pop()();O=!1,k=!1,S.clear()}}function D(t){if(null!==t.fragment){t.update(),y(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}var A=new Set;var T="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:e;function C(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,s=r.on_destroy,f=r.after_update;o&&o.m(e,n),j(function(){var e=i.map(l).filter(d);s?s.push.apply(s,function(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e)):y(e),t.$$.on_mount=[]}),f.forEach(j)}var M=function(){function t(){r(this,t)}var e,n;return e=t,(n=[{key:"$destroy",value:function(){var t;null!==(t=this.$$).fragment&&(y(t.on_destroy),t.fragment&&t.fragment.d(1),t.on_destroy=t.fragment=null,t.ctx=[]),this.$destroy=a}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&o(e.prototype,n),t}(),R=T.window;function W(t){var e,n;return{c:a,m:function(r,o){var i,s,f,c;e||(i=R,s="resize",f=t[3],i.addEventListener(s,f,c),n=function(){return i.removeEventListener(s,f,c)},e=!0)},p:a,i:a,o:a,d:function(t){e=!1,n()}}}var q={swipeDismiss:!0};function I(t,e,n){var r,o=e.self,i=void 0===o?null:o,s=e.swipeDismiss,f=void 0===s?q.swipeDismiss:s,c=null,u=null,a=null,l=null,p="left",y="X",d="Width",m=window.innerWidth,h=[];return r=function(){h=[i.on("touchstart",function(t){if(f){var e=i.stack;if(e)switch(e.dir1){case"up":case"down":p="left",y="X",d="Width";break;case"left":case"right":p="top",y="Y",d="Height"}c=t.touches[0]["screen".concat(y)],a=i.refs.elem["scroll".concat(d)],l=window.getComputedStyle(i.refs.elem).opacity,n(1,i.refs.container.style[p]=0,i)}}),i.on("touchmove",function(t){if(c&&f){var e=t.touches[0]["screen".concat(y)];u=e-c;var r=(1-Math.abs(u)/a)*l;n(1,i.refs.elem.style.opacity=r,i),n(1,i.refs.container.style[p]="".concat(u,"px"),i)}}),i.on("touchend",function(){if(c&&f){if(i.refs.container.classList.add("pnotify-mobile-animate-left"),Math.abs(u)>40){var t=u<0?-2*a:2*a;n(1,i.refs.elem.style.opacity=0,i),n(1,i.refs.container.style[p]="".concat(t,"px"),i),i.close()}else i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty(p);c=null,u=null,a=null,l=null}}),i.on("touchcancel",function(){c&&f&&(i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty(p),c=null,u=null,a=null,l=null)}),i.on("pnotify:afterClose",function(){f&&(i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty("left"),i.refs.container.style.removeProperty("top"))})]},b().$$.on_mount.push(r),b().$$.on_destroy.push(function(){h.forEach(function(t){return t()})}),t.$$set=function(t){"self"in t&&n(1,i=t.self),"swipeDismiss"in t&&n(2,f=t.swipeDismiss)},t.$$.update=function(){if(3&t.$$.dirty){var e=i.stack;e&&(m<=480?"_m_spacing1"in e||(e._m_spacing1=e.spacing1,e._m_firstpos1=e.firstpos1,e._m_spacing2=e.spacing2,e._m_firstpos2=e.firstpos2,e.spacing1=0,e.firstpos1=0,e.spacing2=0,e.firstpos2=0,e.queuePosition()):"_m_spacing1"in e&&(e.spacing1=e._m_spacing1,delete e._m_spacing1,e.firstpos1=e._m_firstpos1,delete e._m_firstpos1,e.spacing2=e._m_spacing2,delete e._m_spacing2,e.firstpos2=e._m_firstpos2,delete e._m_firstpos2,e.queuePosition()))}},[m,i,f,function(){return n(0,m=window.innerWidth)}]}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,M);var e=c(n);function n(t){var o;return r(this,n),function(t,e,n,r,o,i){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],f=v;g(t);var c=e.props||{},u=t.$$={fragment:null,ctx:null,props:{self:1,swipeDismiss:2},update:a,not_equal:o,bound:p(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:p(),dirty:s,skip_bound:!1},l=!1;if(u.ctx=n?n(t,c,function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return u.ctx&&o(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),l&&function(t,e){-1===t.$$.dirty[0]&&(_.push(t),O||(O=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],u.update(),l=!0,y(u.before_update),u.fragment=!!r&&r(u.ctx),e.target){if(e.hydrate){var d=function(t){return Array.from(t.childNodes)}(e.target);u.fragment&&u.fragment.l(d),d.forEach(h)}else u.fragment&&u.fragment.c();e.intro&&function(t,e){t&&t.i&&(A.delete(t),t.i(e))}(t.$$.fragment),C(t,e.target,e.anchor),E()}g(f)}(f(o=e.call(this)),t,I,W,m,{self:1,swipeDismiss:2}),o}return n}();t.default=L,t.defaults=q,t.position="PrependContainer",Object.defineProperty(t,"__esModule",{value:!0})});
},{}]},{},["ad6a"], null)
//# sourceMappingURL=/goit-js-hw-12-countries/PNotifyMobile.a167ae84.js.map