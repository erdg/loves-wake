webpackJsonp([2],{"6iB0":function(e,t,r){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var h=r("EBst"),f=r("o5xd"),p=r("y+SO"),b=r("HW6M"),d=r.n(b),m=r("AM5m"),v=r("r33O"),y=Object(h.h)("h1",{class:"text-center"},"Confirm Account"),w=Object(h.h)("i",{class:"icon icon-3x icon-mail",style:"width: 100%;margin: 0 auto;"}),O=Object(h.h)("p",{class:"text-center"},"We sent you an email. Please enter the six-digit number below to confirm your account."),j=Object(h.h)("p",{class:"form-input-hint"},"Please enter a six-digit number"),g=function(e){function t(){return o(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(e){var t=d()("form-group",{"has-error":e.hasError}),r=d()("btn","btn-primary","centered","mt-2",{loading:e.loading});return Object(h.h)("div",{class:t},y,w,O,Object(h.h)(v.a,{error:!0,active:e.showServerError},e.serverError),Object(h.h)(m.f,{value:e.recoverAccountNumber,onChange:e.handleRecoverAccountNumberChange}),j,Object(h.h)("button",{class:r,onClick:e.handleRecoverAccount},"Confirm Account"))},t}(h.Component),A=function(e){function t(r){c(this,t);var o=s(this,e.call(this,r));return o._handleRecoverAccountNumberChange=function(e){o.setState({recoverAccountNumber:e.target.value})},o._handleRecoverAccount=function(){o.setState({loading:!0}),fetch("https://erikdgustafson.com/api/!confirmRecoverAccountNumber?"+o.props.email+"&+"+o.state.recoverAccountNumber,{method:"POST"}).then(function(e){return e.json()}).then(function(e){e.error?o.setState({serverError:e.error,showServerError:!0,loading:!1}):e.canResetPassword&&o.setState({loading:!1,canResetPassword:e.canResetPassword})}).then(function(){o.state.canResetPassword&&Object(p.c)("/reset-password",!0)})},o.state={recoverAccountNumber:"",serverError:"",showServerError:!1,canResetPassword:!1,loading:!1},o}return a(t,e),t.prototype.render=function(){return Object(h.h)(g,{recoverAccountNumber:this.state.recoverAccountNumber,handleRecoverAccountNumberChange:this._handleRecoverAccountNumberChange,hasError:!(!this.state.recoverAccountNumber||!isNaN(this.state.recoverAccountNumber)&&6===this.state.recoverAccountNumber.length),serverError:this.state.serverError,showServerError:this.state.showServerError,loading:this.state.loading,handleRecoverAccount:this._handleRecoverAccount})},t}(h.Component),E=function(e){function t(){return i(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(e){return Object(h.h)(f.a,{formRail:Object(h.h)(A,{email:e.email,handleRecoverAccountSuccess:e.handleRecoverAccountSuccess})})},t}(h.Component);t.default=E}});
//# sourceMappingURL=route-recover-account.chunk.75f12.js.map