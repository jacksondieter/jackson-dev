/*! For license information please see component---src-pages-index-js-eee5171cfe7cc7f1e248.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new v(e,t)),1!==u.length||l||s(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8ujH":function(e,t,n){var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,s,c=t.prefix||"__jp",u=t.name||c+a++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){v(),n&&n(new Error("Timeout"))}),f));function v(){i.parentNode&&i.parentNode.removeChild(i),window[u]=o,s&&clearTimeout(s)}return window[u]=function(e){r("jsonp got",e),v(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(u)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,p.parentNode.insertBefore(i,p),function(){window[u]&&v()}};var a=0;function o(){}},G04T:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n("8ujH"))&&r.__esModule?r:{default:r},o=n("H/qo");var i=function(e){var t=e.url,n=e.timeout;return new Promise((function(e,r){return(0,a.default)(t,{param:"c",timeout:n},(function(t,n){t&&r(t),n&&e(n)}))}))},s=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r="group["===n.substring(0,6)?n:n.toUpperCase();t=t.concat("&".concat(r,"=").concat(e[n]))}return t},c=function(e,t,n){var r=(0,o.validate)(e),a=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var c="https://gmail.us1.list-manage.com/subscribe/post?u=2296221bc8734ba4a484573b4&amp;id=e2a6a1ed32",u=3500;arguments.length<3&&"string"==typeof t?c=t:"string"==typeof n&&(c=n),c=c.replace(/\/post/g,"/post-json");var l="&EMAIL=".concat(a).concat(s(t)),f="".concat(c).concat(l);return i({url:f,timeout:u})};t.default=c},GTTd:function(e,t,n){(function(r){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QXP7:function(e,t){var n=1e3,r=6e4,a=60*r,o=24*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var s,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*a;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(s=e,o,"day")||i(s,a,"hour")||i(s,r,"minute")||i(s,n,"second")||s+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("Bl7J"),s=n("vrFN"),c=n("o0o1"),u=n.n(c);n("ls82");function l(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,s,"next",e)}function s(e){l(o,r,a,i,s,"throw",e)}i(void 0)}))}}var d=n("G04T"),p=n.n(d);var v=function(e){var t=function(){var e={showSuccess:!1,showError:!1,successMsg:"",errorMsg:""},t=Object(r.useState)(e),n=t[0],a=t[1],o=Object(r.useState)(""),i=o[0],s=o[1],c=Object(r.useRef)(!0),l=function(){var e=f(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target.yourmail.value||null,console.log(n),n){e.next=5;break}return e.abrupt("return");case 5:s(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){function t(e){return n.apply(this,arguments)}function n(){return(n=f(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=f(u.a.mark((function n(){var r,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p()(i,{});case 3:r=n.sent,o=r.msg.split("<")[0],a({showSuccess:!0,successMsg:o,showError:!1,errorMsg:""}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a({showSuccess:!1,successMsg:"",showError:!0,errorMsg:n.t0});case 11:return n.prev=11,t(4e3).then((function(){return a(e)})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}c.current?c.current=!1:i&&function(){r.apply(this,arguments)}()}),[i]),{state:n,onSubmit:l}}(),n=t.state,o=t.onSubmit;return a.a.createElement("div",{className:"subscribe"},a.a.createElement("h5",{className:"info-text"},"Join to the newsletter list. We keep you posted."),a.a.createElement("div",{className:"row "},a.a.createElement("div",{className:"col"},a.a.createElement("form",{className:"form-inline justify-content-md-center",onSubmit:o},a.a.createElement("div",{className:"input-group"},a.a.createElement("label",{className:"sr-only",htmlFor:"inputEmail"},"Email address"),a.a.createElement("input",{type:"email",className:"form-control transparent",placeholder:"Your email here...","aria-label":"Your email here...",name:"yourmail"}),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("button",{className:"btn btn-secondary btn-fill",type:"submit"},"Notify Me!")))))),a.a.createElement("br",null),n.showSuccess?a.a.createElement("div",{className:"alert alert-success"},n.successMsg):null,n.showError?a.a.createElement("div",{className:"alert alert-danger"},n.errorMsg):null)};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var y=n("TSYQ"),g=n.n(y);n("E9XD"),n("QLaP");function b(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function E(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function x(e,t){return Object.keys(t).reduce((function(n,a){var o,i=n,s=i[b(a)],c=i[a],u=h(i,[b(a),a].map(E)),l=t[a],f=function(e,t,n){var a=Object(r.useRef)(void 0!==e),o=Object(r.useState)(t),i=o[0],s=o[1],c=void 0!==e,u=a.current;return a.current=c,!c&&u&&i!==t&&s(t),[c?e:i,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(c,s,e[l]),d=f[0],p=f[1];return m({},u,((o={})[a]=d,o[l]=p,o))}),e)}var w=n("dI71");n("94VI");var N=/-(.)/g;var C=a.a.createContext({});C.Consumer,C.Provider;function O(e,t){var n=Object(r.useContext)(C);return e||n[t]||t}var k=function(e){return e[0].toUpperCase()+(t=e,t.replace(N,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var j=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=h(e,["bsPrefix","className","as"]);n=O(n,"navbar-brand");var s=o||(i.href?"a":"span");return a.a.createElement(s,m({},i,{ref:t,className:g()(r,n)}))}));j.displayName="NavbarBrand";var S=j;function T(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var P=/([A-Z])/g;var L=/^ms-/;function R(e){return function(e){return e.replace(P,"-$1").toLowerCase()}(e).replace(L,"-ms-")}var A=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var M=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(R(t))||function(e,t){return T(e).getComputedStyle(e,t)}(e).getPropertyValue(R(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!A.test(e))}(a)?n+=R(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(R(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},_=!("undefined"==typeof window||!window.document||!window.document.createElement),I=!1,D=!1;try{var K={get passive(){return I=!0},get once(){return D=I=!0}};_&&(window.addEventListener("test",K,K),window.removeEventListener("test",K,!0))}catch(Ye){}var G=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!D){var a=r.once,o=r.capture,i=n;!D&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,I?r:o)}e.addEventListener(t,n,r)};var U=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var z=function(e,t,n,r){return G(e,t,n,r),function(){U(e,t,n,r)}};function F(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=z(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function B(e,t,n,r){var a,o;null==n&&(a=M(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=F(e,n,r),s=z(e,"transitionend",t);return function(){i(),s()}}var Z=n("i8i4"),q=n.n(Z),$=!1,H=a.a.createContext(null),J=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(w.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[q.a.findDOMNode(this),r],o=a[0],i=a[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||$?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:q.a.findDOMNode(this);t&&!$?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:q.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,h(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(H.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function X(){}J.contextType=H,J.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:X,onEntering:X,onEntered:X,onExit:X,onExiting:X,onExited:X},J.UNMOUNTED="unmounted",J.EXITED="exited",J.ENTERING="entering",J.ENTERED="entered",J.EXITING="exiting";var Y=J;var V,Q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var W={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ee(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=W[e];return n+parseInt(M(t,r[0]),10)+parseInt(M(t,r[1]),10)}var te=((V={}).exited="collapse",V.exiting="collapsing",V.entering="collapsing",V.entered="collapse show",V),ne={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:ee},re=a.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,i=e.onEntered,s=e.onExit,c=e.onExiting,u=e.className,l=e.children,f=e.dimension,d=void 0===f?"height":f,p=e.getDimensionValue,v=void 0===p?ee:p,y=h(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),b="function"==typeof d?d():d,E=Object(r.useMemo)((function(){return Q((function(e){e.style[b]="0"}),n)}),[b,n]),x=Object(r.useMemo)((function(){return Q((function(e){var t="scroll"+b[0].toUpperCase()+b.slice(1);e.style[b]=e[t]+"px"}),o)}),[b,o]),w=Object(r.useMemo)((function(){return Q((function(e){e.style[b]=null}),i)}),[b,i]),N=Object(r.useMemo)((function(){return Q((function(e){e.style[b]=v(b,e)+"px",e.offsetHeight}),s)}),[s,v,b]),C=Object(r.useMemo)((function(){return Q((function(e){e.style[b]=null}),c)}),[b,c]);return a.a.createElement(Y,m({ref:t,addEndListener:B},y,{"aria-expanded":y.role?y.in:null,onEnter:E,onEntering:x,onEntered:w,onExit:N,onExiting:C}),(function(e,t){return a.a.cloneElement(l,m({},t,{className:g()(u,l.props.className,te[e],"width"===b&&"width")}))}))}));re.defaultProps=ne;var ae=re,oe=a.a.createContext(null);oe.displayName="NavbarContext";var ie=oe,se=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=h(e,["children","bsPrefix"]);return r=O(r,"navbar-collapse"),a.a.createElement(ie.Consumer,null,(function(e){return a.a.createElement(ae,m({in:!(!e||!e.expanded)},o),a.a.createElement("div",{ref:t,className:r},n))}))}));se.displayName="NavbarCollapse";var ce=se;var ue=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function le(e){var t=ue(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var fe=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,s=e.label,c=e.as,u=void 0===c?"button":c,l=e.onClick,f=h(e,["bsPrefix","className","children","label","as","onClick"]);n=O(n,"navbar-toggler");var d=Object(r.useContext)(ie)||{},p=d.onToggle,v=d.expanded,y=le((function(e){l&&l(e),p&&p()}));return"button"===u&&(f.type="button"),a.a.createElement(u,m({},f,{ref:t,onClick:y,"aria-label":s,className:g()(o,n,!v&&"collapsed")}),i||a.a.createElement("span",{className:n+"-icon"}))}));fe.displayName="NavbarToggle",fe.defaultProps={label:"Toggle navigation"};var de,pe,ve,me,he,ye,ge,be,Ee=fe,xe=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},we=a.a.createContext(null),Ne=(de="navbar-text",me=(ve=void 0===(pe={Component:"span"})?{}:pe).displayName,he=void 0===me?k(de):me,ye=ve.Component,ge=ve.defaultProps,(be=a.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,o=e.as,i=void 0===o?ye||"div":o,s=h(e,["className","bsPrefix","as"]),c=O(r,de);return a.a.createElement(i,m({ref:t,className:g()(n,c)},s))}))).defaultProps=ge,be.displayName=he,be),Ce=a.a.forwardRef((function(e,t){var n=x(e,{expanded:"onToggle"}),o=n.bsPrefix,i=n.expand,s=n.variant,c=n.bg,u=n.fixed,l=n.sticky,f=n.className,d=n.children,p=n.as,v=void 0===p?"nav":p,y=n.expanded,b=n.onToggle,E=n.onSelect,w=n.collapseOnSelect,N=h(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=O(o,"navbar"),k=Object(r.useCallback)((function(){E&&E.apply(void 0,arguments),w&&y&&b&&b(!1)}),[E,w,y,b]);void 0===N.role&&"nav"!==v&&(N.role="navigation");var j=C+"-expand";"string"==typeof i&&(j=j+"-"+i);var S=Object(r.useMemo)((function(){return{onToggle:function(){return b&&b(!y)},bsPrefix:C,expanded:!!y}}),[C,y,b]);return a.a.createElement(ie.Provider,{value:S},a.a.createElement(we.Provider,{value:k},a.a.createElement(v,m({ref:t},N,{className:g()(f,C,i&&j,s&&C+"-"+s,c&&"bg-"+c,l&&"sticky-"+l,u&&"fixed-"+u)}),d)))}));Ce.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Ce.displayName="Navbar",Ce.Brand=S,Ce.Toggle=Ee,Ce.Collapse=ce,Ce.Text=Ne;var Oe=Ce,ke=(n("K9S6"),a.a.createContext(null));ke.displayName="CardContext";var je=ke,Se=Function.prototype.bind.call(Function.prototype.call,[].slice);var Te=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var Pe=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=Te(e),r=Te(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},Le=a.a.createContext(null);Le.displayName="NavContext";var Re=Le,Ae=a.a.createContext(null),Me=function(){},_e=a.a.forwardRef((function(e,t){var n,o,i=e.as,s=void 0===i?"ul":i,c=e.onSelect,u=e.activeKey,l=e.role,f=e.onKeyDown,d=h(e,["as","onSelect","activeKey","role","onKeyDown"]),p=Object(r.useReducer)((function(e){return!e}),!1)[1],v=Object(r.useRef)(!1),y=Object(r.useContext)(we),g=Object(r.useContext)(Ae);g&&(l=l||"tablist",u=g.activeKey,n=g.getControlledId,o=g.getControllerId);var b=Object(r.useRef)(null),E=function(e){var t=b.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",Se(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},x=function(e,t){null!=e&&(c&&c(e,t),y&&y(e,t))};Object(r.useEffect)((function(){if(b.current&&v.current){var e=b.current.querySelector("[data-rb-event-key].active");e&&e.focus()}v.current=!1}));var w=Pe(t,b);return a.a.createElement(we.Provider,{value:x},a.a.createElement(Re.Provider,{value:{role:l,activeKey:xe(u),getControlledId:n||Me,getControllerId:o||Me}},a.a.createElement(s,m({},d,{onKeyDown:function(e){var t;switch(f&&f(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),v.current=!0,p())},ref:w,role:l}))))})),Ie=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,i=e.as,s=void 0===i?"div":i,c=h(e,["bsPrefix","className","children","as"]);return n=O(n,"nav-item"),a.a.createElement(s,m({},c,{ref:t,className:g()(r,n)}),o)}));Ie.displayName="NavItem";var De=Ie;function Ke(e){return!e||"#"===e.trim()}var Ge=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,o=e.disabled,i=e.onKeyDown,s=h(e,["as","disabled","onKeyDown"]),c=function(e){var t=s.href,n=s.onClick;(o||Ke(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return Ke(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),o&&(s.tabIndex=-1,s["aria-disabled"]=!0),a.a.createElement(r,m({ref:t},s,{onClick:c,onKeyDown:Q((function(e){" "===e.key&&(e.preventDefault(),c(e))}),i)}))}));Ge.displayName="SafeAnchor";var Ue=Ge,ze=(n("2W6z"),a.a.forwardRef((function(e,t){var n=e.active,o=e.className,i=e.eventKey,s=e.onSelect,c=e.onClick,u=e.as,l=h(e,["active","className","eventKey","onSelect","onClick","as"]),f=xe(i,l.href),d=Object(r.useContext)(we),p=Object(r.useContext)(Re),v=n;if(p){l.role||"tablist"!==p.role||(l.role="tab");var y=p.getControllerId(f),b=p.getControlledId(f);l["data-rb-event-key"]=f,l.id=y||l.id,l["aria-controls"]=b||l["aria-controls"],v=null==n&&null!=f?p.activeKey===f:n}"tab"===l.role&&(l.disabled&&(l.tabIndex=-1,l["aria-disabled"]=!0),l["aria-selected"]=v);var E=le((function(e){c&&c(e),null!=f&&(s&&s(f,e),d&&d(f,e))}));return a.a.createElement(u,m({},l,{ref:t,onClick:E,className:g()(o,v&&"active")}))})));ze.defaultProps={disabled:!1};var Fe=ze,Be={disabled:!1,as:Ue},Ze=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,i=e.href,s=e.eventKey,c=e.onSelect,u=e.as,l=h(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=O(n,"nav-link"),a.a.createElement(Fe,m({},l,{href:i,ref:t,eventKey:s,as:u,disabled:r,onSelect:c,className:g()(o,n,r&&"disabled")}))}));Ze.displayName="NavLink",Ze.defaultProps=Be;var qe=Ze,$e=a.a.forwardRef((function(e,t){var n,o,i,s=x(e,{activeKey:"onSelect"}),c=s.as,u=void 0===c?"div":c,l=s.bsPrefix,f=s.variant,d=s.fill,p=s.justify,v=s.navbar,y=s.className,b=s.children,E=s.activeKey,w=h(s,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=O(l,"nav"),C=!1,k=Object(r.useContext)(ie),j=Object(r.useContext)(je);return k?(o=k.bsPrefix,C=null==v||v):j&&(i=j.cardHeaderBsPrefix),a.a.createElement(_e,m({as:u,ref:t,activeKey:E,className:g()(y,(n={},n[N]=!C,n[o+"-nav"]=C,n[i+"-"+f]=!!i,n[N+"-"+f]=!!f,n[N+"-fill"]=d,n[N+"-justified"]=p,n))},w),b)}));$e.displayName="Nav",$e.defaultProps={justify:!1,fill:!1},$e.Item=De,$e.Link=qe;var He=$e,Je=n("ma3e");function Xe(e){var t=e.siteTitle;return a.a.createElement(Oe,{expand:"md",className:"navbar-transparent"},a.a.createElement(Oe.Brand,{href:"#home"},t),a.a.createElement(Oe.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(Oe.Collapse,{id:"basic-navbar-nav"},a.a.createElement(He,{className:"ml-auto",as:"ul"},a.a.createElement(He.Item,{as:"li"},a.a.createElement("a",{className:"nav-link",href:"https://github.com/jacksondieter"},a.a.createElement(Je.a,null),"GitHub")),a.a.createElement(He.Item,{as:"li"},a.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/jacksondieter/"},a.a.createElement(Je.c,null),"Linkedin")))))}Xe.defaultProps={siteTitle:""};t.default=function(){var e,t=Object(o.useStaticQuery)("3649515864");return a.a.createElement(i.a,null,a.a.createElement(s.a,{title:"Jackson dev"}),a.a.createElement(Xe,{siteTitle:(null===(e=t.site.siteMetadata)||void 0===e?void 0:e.title)||"Title"}),a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"logo cursive"},"Code, eat, sleep, repeat"),a.a.createElement("div",{className:"content"},a.a.createElement("h4",{className:"motto"},"Really awesome apps coming soon."),a.a.createElement(v,null)))))}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},bRoh:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var a=t.formatters[r];if("function"==typeof a){var o=i[c];n=a.call(e,o),i.splice(c,1),c--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},ls82:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(k){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var l={};function f(){}function d(){}function p(){}var v={};v[a]=function(){return this};var m=Object.getPrototypeOf,h=m&&m(m(C([])));h&&h!==t&&n.call(h,a)&&(v=h);var y=p.prototype=f.prototype=Object.create(v);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=y.constructor=p,p.constructor=d,d.displayName=s(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),b.prototype[o]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),s(y,i,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(e,t,n){e.exports=n("ls82")},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var s=a||"<<anonymous>>",c=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,s,o,c].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-eee5171cfe7cc7f1e248.js.map