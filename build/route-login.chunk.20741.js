webpackJsonp([0],{TVzt:function(e,t,o){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=o("EBst"),w=o("o5xd"),b=o("y+SO"),g=o("HW6M"),y=o.n(g),O=(o("wI7h"),Object(d.h)("label",{class:"form-label"},"Email")),m=function(e){return Object(d.h)("div",null,O,Object(d.h)("input",{value:e.email,onChange:e.handleEmailChange,type:"email",class:"form-input",placeholder:"Your email"}))},j=Object(d.h)("label",{class:"form-label"},"Password"),v=Object(d.h)("i",{class:"form-icon"}),P=function(e){function t(){return n(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){return Object(d.h)("div",null,j,Object(d.h)("input",{value:e.password,onChange:e.handlePasswordChange,class:"form-input",type:e.showPassword?"text":"password",placeholder:"Your password"}),Object(d.h)("label",{class:"form-switch"},Object(d.h)("input",{type:"checkbox",onClick:e.toggleShowPassword}),v,"Show password"))},t}(d.Component),E=o("r33O"),S=Object(d.h)("h1",null,"Login"),_=Object(d.h)("button",{class:"btn btn-link float-right"},"Recover account"),C=function(e){function t(){return s(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(e){var t=y()("btn","btn-primary",{loading:e.loading});return Object(d.h)("div",{class:"form-group m-2"},S,Object(d.h)(E.a,{error:!0,active:e.showServerError},e.serverError),Object(d.h)(m,{email:e.email,handleEmailChange:e.handleEmailChange}),Object(d.h)(P,{password:e.password,handlePasswordChange:e.handlePasswordChange,toggleShowPassword:e.toggleShowPassword,showPassword:e.showPassword}),Object(d.h)("div",{class:"row"},Object(d.h)("button",{class:t,onClick:e.handleLogin},"Login"),_))},t}(d.Component),L=function(e){function t(o){c(this,t);var n=l(this,e.call(this,o));return n._handleLogin=function(){n.setState({loading:!0}),fetch("https://erikdgustafson.com/api/!loginUser?"+n.state.email+"&"+n.state.password).then(function(e){return e.json()}).then(function(e){e.error?n.setState({serverError:e.error,showServerError:!0,loading:!1}):e.token&&(n.setState({loading:!1,loginSuccess:!0}),n.props.handleLoginSuccess(e.user,e.token))}).then(function(){n.state.loginSuccess&&Object(b.c)("/profile",!0)}),n.setState({password:""})},n._handleEmailChange=n._handleEmailChange.bind(n),n._handlePasswordChange=n._handlePasswordChange.bind(n),n._toggleShowPassword=n._toggleShowPassword.bind(n),n.state={email:"",password:"",showPassword:!1,serverError:"",showServerError:!1,loading:!1,loginSuccess:!1},n}return h(t,e),t.prototype._toggleShowPassword=function(){this.setState({showPassword:!this.state.showPassword})},t.prototype._handleEmailChange=function(e){this.setState({email:e.target.value})},t.prototype._handlePasswordChange=function(e){this.setState({password:e.target.value})},t.prototype.render=function(){return Object(d.h)(C,{serverError:this.state.serverError,showServerError:this.state.showServerError,email:this.state.email,handleEmailChange:this._handleEmailChange,password:this.state.password,handlePasswordChange:this._handlePasswordChange,toggleShowPassword:this._toggleShowPassword,showPassword:this.state.showPassword,handleLogin:this._handleLogin,loading:this.state.loading})},t}(d.Component),k=function(e){function t(){return u(this,t),p(this,e.apply(this,arguments))}return f(t,e),t.prototype.render=function(e){return Object(d.h)(w.a,{formRail:Object(d.h)(L,{handleLoginSuccess:function(t,o){return e.handleLoginSuccess(t,o)}})})},t}(d.Component);t.default=k},r33O:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o("EBst"),r=(o.n(n),o("HW6M")),s=o.n(r),a=function(e){var t=s()("toast",{"toast-primary":e.primary,"toast-success":e.success,"toast-warning":e.warning,"toast-error":e.error,"d-none":!e.active});return Object(n.h)("div",{class:t},e.children)}},wI7h:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o("EBst"),r=(o.n(n),o("HW6M")),s=o.n(r),a=function(e){var t=s()("btn","btn-action","btn-sm","btn-primary","circle","text-bold","float-right","m-1"),o=s()("dialog",{"d-none":!e.active});return Object(n.h)("div",{class:"relative mt-1"},Object(n.h)("div",{class:o},e.children),Object(n.h)("button",{class:t},"i"))}}});
//# sourceMappingURL=route-login.chunk.20741.js.map