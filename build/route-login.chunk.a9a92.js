webpackJsonp([1],{"2LX0":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if((0,s.default)(e),t=(0,u.default)(t,h),t.require_display_name||t.allow_display_name){var r=e.match(p);if(r)e=r[1];else if(t.require_display_name)return!1}var o=e.split("@"),n=o.pop(),a=o.join("@"),i=n.toLowerCase();if("gmail.com"!==i&&"googlemail.com"!==i||(a=a.replace(/\./g,"").toLowerCase()),!(0,c.default)(a,{max:64})||!(0,c.default)(n,{max:254}))return!1;if(!(0,d.default)(n,{require_tld:t.require_tld}))return!1;if('"'===a[0])return a=a.slice(1,a.length-1),t.allow_utf8_local_part?_.test(a):b.test(a);for(var l=t.allow_utf8_local_part?g:w,f=a.split("."),y=0;y<f.length;y++)if(!l.test(f[y]))return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r("fcJk"),s=o(a),i=r("LLCR"),u=o(i),l=r("CFqi"),c=o(l),f=r("cddD"),d=o(f),h={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},p=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,w=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,b=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,g=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t.default},CFqi:function(e,t,r){"use strict";function o(e,t){(0,s.default)(e);var r=void 0,o=void 0;"object"===(void 0===t?"undefined":n(t))?(r=t.min||0,o=t.max):(r=arguments[1],o=arguments[2]);var a=encodeURI(e).split(/%..|./).length-1;return a>=r&&(void 0===o||a<=o)}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var a=r("fcJk"),s=function(e){return e&&e.__esModule?e:{default:e}}(a);e.exports=t.default},LLCR:function(e,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},TVzt:function(e,t,r){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=r("EBst"),w=r("o5xd"),b=r("y+SO"),g=r("2LX0"),_=r.n(g),y=r("HW6M"),v=r.n(y),m=(r("wI7h"),Object(p.h)("label",{class:"form-label"},"Email")),F=function(e){return Object(p.h)("div",null,m,Object(p.h)("input",{value:e.email,onChange:e.handleEmailChange,type:"email",class:"form-input",placeholder:"Your email"}))},E=Object(p.h)("label",{class:"form-label"},"Password"),x=Object(p.h)("i",{class:"form-icon"}),O=function(e){function t(){return o(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(e){return Object(p.h)("div",null,E,Object(p.h)("input",{value:e.password,onChange:e.handlePasswordChange,class:"form-input",type:e.showPassword?"text":"password",placeholder:"Your password"}),Object(p.h)("label",{class:"form-switch"},Object(p.h)("input",{type:"checkbox",onClick:e.toggleShowPassword}),x,"Show password"))},t}(p.Component),S=r("r33O"),j=Object(p.h)("h1",null,"Login"),C=function(e){function t(){return a(this,t),s(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(e){var t=v()("form-group",{"has-error":e.emailError||e.passwordError}),r=v()("btn","btn-primary",{loading:e.loginBtnLoading}),o=v()("btn","btn-link","float-right",{loading:e.recoverBtnLoading}),n=v()("form-input-hint",{"d-hide":!e.emailError}),a=v()("form-input-hint",{"d-hide":!e.passwordError});return Object(p.h)("div",{class:t},j,Object(p.h)(S.a,{error:!0,active:e.showServerError},e.serverError),Object(p.h)(F,{email:e.email,handleEmailChange:e.handleEmailChange}),Object(p.h)("p",{class:n},"Please enter a valid email address"),Object(p.h)(O,{password:e.password,handlePasswordChange:e.handlePasswordChange,toggleShowPassword:e.toggleShowPassword,showPassword:e.showPassword}),Object(p.h)("p",{class:a},"Gotta have a password to login..."),Object(p.h)("div",{class:"row"},Object(p.h)("button",{class:r,onClick:e.handleLogin},"Login"),Object(p.h)("button",{class:o,onClick:e.handleRecoverAccount},"Recover account")))},t}(p.Component),P=function(e){function t(r){u(this,t);var o=l(this,e.call(this,r));return o._handleLogin=function(){return _()(o.state.email)?(o.setState({emailError:!1}),o.state.password?(o.setState({passwordError:!1}),o.setState({loginBtnLoading:!0}),fetch("https://erikdgustafson.com/api/!loginUser?"+o.state.email+"&"+o.state.password).then(function(e){return e.json()}).then(function(e){e.error?o.setState({serverError:e.error,showServerError:!0,loginBtnLoading:!1}):e.token&&(o.setState({loginBtnLoading:!1,loginSuccess:!0}),o.props.handleLoginSuccess(e.user,e.token))}).then(function(){o.state.loginSuccess&&Object(b.c)("/profile",!0)}),void o.setState({password:""})):void o.setState({passwordError:!0})):void o.setState({emailError:!0})},o._handleRecoverAccount=function(){o.setState({recoverBtnLoading:!0}),fetch("https://erikdgustafson.com/api/!recoverUserAccount?"+o.state.email).then(function(e){return e.json()}).then(function(e){e.error?o.setState({serverError:e.error,showServerError:!0,recoverBtnLoading:!1}):e.email&&(o.setState({recoverBtnLoading:!1,recoverAccountSuccess:!0}),o.props.handleRecoverAccountSuccess(e.email))}).then(function(){o.state.recoverAccountSuccess&&Object(b.c)("/recover-account",!0)})},o._handleEmailChange=o._handleEmailChange.bind(o),o._handlePasswordChange=o._handlePasswordChange.bind(o),o._toggleShowPassword=o._toggleShowPassword.bind(o),o.state={email:"",emailError:!1,password:"",passwordError:!1,showPassword:!1,serverError:"",showServerError:!1,loginBtnLoading:!1,recoverBtnLoading:!1,loginSuccess:!1,recoverAccountSuccess:!1},o}return c(t,e),t.prototype._toggleShowPassword=function(){this.setState({showPassword:!this.state.showPassword})},t.prototype._handleEmailChange=function(e){this.setState({email:e.target.value})},t.prototype._handlePasswordChange=function(e){this.setState({password:e.target.value})},t.prototype.render=function(){return Object(p.h)(C,{serverError:this.state.serverError,showServerError:this.state.showServerError,email:this.state.email,emailError:this.state.emailError,handleEmailChange:this._handleEmailChange,password:this.state.password,passwordError:this.state.passwordError,handlePasswordChange:this._handlePasswordChange,toggleShowPassword:this._toggleShowPassword,showPassword:this.state.showPassword,handleLogin:this._handleLogin,loginBtnLoading:this.state.loginBtnLoading,recoverBtnLoading:this.state.recoverBtnLoading,handleRecoverAccount:this._handleRecoverAccount})},t}(p.Component),L=function(e){function t(){return f(this,t),d(this,e.apply(this,arguments))}return h(t,e),t.prototype.render=function(e){return Object(p.h)(w.a,{formRail:Object(p.h)(P,{handleLoginSuccess:function(t,r){return e.handleLoginSuccess(t,r)},handleRecoverAccountSuccess:function(t){return e.handleRecoverAccountSuccess(t)}})})},t}(p.Component);t.default=L},cddD:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){(0,s.default)(e),t=(0,u.default)(t,l),t.allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var r=e.split(".");if(t.require_tld){var o=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(o))return!1}for(var n,a=0;a<r.length;a++){if(n=r[a],t.allow_underscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r("fcJk"),s=o(a),i=r("LLCR"),u=o(i),l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default},fcJk:function(e,t){"use strict";function r(e){if(!("string"==typeof e||e instanceof String))throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default}});
//# sourceMappingURL=route-login.chunk.a9a92.js.map