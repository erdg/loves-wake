webpackJsonp([6],{ITPJ:function(e,t,a){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=a("EBst"),f=a("o5xd"),m=(a("y+SO"),a("HW6M")),j=a.n(m),O=a("AM5m"),v=function(e){return Object(p.h)("button",{class:"btn btn-primary float-right",onClick:e.onClick},"Next Step")},N=function(e){function t(){for(var t,a,r,s=arguments.length,o=Array(s),l=0;l<s;l++)o[l]=arguments[l];return t=a=n(this,e.call.apply(e,[this].concat(o))),a.state={firstNameError:!1,lastNameError:!1},a._handleNextStep=function(){a.setState(""!==a.props.firstName?{firstNameError:!1}:{firstNameError:!0}),a.setState(""!==a.props.lastName?{lastNameError:!1}:{lastNameError:!0}),a.state.firstNameError||a.state.lastNameError||a.props.handleNextStep()},r=t,n(a,r)}return r(t,e),t.prototype.render=function(e){var t=j()("form-group",{"has-error":this.state.firstNameError||this.state.lastNameError}),a=j()("form-input-hint",{"d-hide":!this.state.firstNameError}),n=j()("form-input-hint",{"d-hide":!this.state.lastNameError});return Object(p.h)("div",{class:t},Object(p.h)(O.f,{label:"First Name",firstName:e.firstName,onChange:e.handleFirstNameChange}),Object(p.h)("p",{class:a},"Please enter a first name"),Object(p.h)(O.f,{label:"Last Name",lastName:e.lastName,onChange:e.handleLastNameChange}),Object(p.h)("p",{class:n},"Please enter a last name"),Object(p.h)("div",{class:"row my-2"},Object(p.h)(v,{onClick:this._handleNextStep})))},t}(p.Component),y=function(e){return Object(p.h)("button",{class:"btn btn-link",onClick:e.onClick},"prev")},S=Object(p.h)(O.b,{class:"text-ellipsis",label:"Upload a Photo"}),P=function(e){return Object(p.h)("div",null,S,Object(p.h)("div",{class:"row my-2"},Object(p.h)(y,{onClick:e.handlePrevStep}),Object(p.h)(v,{onClick:e.handleNextStep})))},w=a("wI7h"),g=Object(p.h)("strong",null,"We'll use this answer to phrase our questions:"),C=Object(p.h)("p",null,"How did... "),x=Object(p.h)(O.c,null,"Gender & Pronoun"),_=Object(p.h)("div",{class:"row"},Object(p.h)(O.e,{label:"Female",value:"Female",name:"gender"}),Object(p.h)("span",{class:"text-gray"},"- She/Her")),E=Object(p.h)("div",{class:"row"},Object(p.h)(O.e,{label:"Male",value:"Male",name:"gender"}),Object(p.h)("span",{class:"text-gray"},"- He/Him")),k=Object(p.h)("div",{class:"row"},Object(p.h)(O.e,{label:"Other",name:"gender"})),D=function(e){return Object(p.h)("div",null,Object(p.h)(w.a,{active:"true"},Object(p.h)("div",{class:"card"},Object(p.h)("div",{class:"card-body"},g,Object(p.h)("div",null,Object(p.h)("p",null,"Think about ",e.firstName,"."),e.subjPronoun?Object(p.h)("p",null,"How did ",e.subjPronoun,"... What was ",e.posPronoun," favorite..."):C)))),x,Object(p.h)("div",{onChange:e.handleGenderChange,class:"col mx-2"},_,E,k))},F=Object(p.h)(O.a,{label:"Date of Birth"}),T=function(e){return Object(p.h)("div",null,Object(p.h)(w.a,{active:"true"},Object(p.h)("div",{class:"card"},Object(p.h)("div",{class:"card-body"},"When was ",e.firstName," born?"))),F)},G=Object(p.h)(w.a,{active:"false"}),I=Object(p.h)("div",{class:"row"},Object(p.h)(O.e,{label:"Still alive and well",name:"deceased",value:"false"})),L=Object(p.h)("div",{class:"row"},Object(p.h)(O.e,{label:"Will pass soon",name:"deceased",value:"false"})),A=Object(p.h)("div",{class:"row"},Object(p.h)(O.e,{label:"Passed away",name:"deceased",value:"true"})),W=function(e){return Object(p.h)("div",null,G,Object(p.h)(O.c,null,"Is ",e.firstName," still with us?"),Object(p.h)("div",{onChange:e.handleDeath,class:"col mx-2"},I,L,A))},H=Object(p.h)(O.a,{label:"Date of Death"}),M=function(e){var t=j()({"d-none":!e.deceased});return Object(p.h)("div",{class:t},Object(p.h)(w.a,{active:"true"},Object(p.h)("div",{class:"card"},Object(p.h)("div",{class:"card-body"},"We're sorry for your loss.  When did ",e.firstName," pass?"))),H)},R=function(e){return Object(p.h)("div",null,Object(p.h)(D,{firstName:e.firstName,subjPronoun:e.subjPronoun,objPronoun:e.objPronoun,posPronoun:e.posPronoun,handleGenderChange:e.handleGenderChange}),Object(p.h)(T,{firstName:e.firstName}),Object(p.h)(W,{firstName:e.firstName,handleDeath:e.handleDeath}),Object(p.h)(M,{deceased:e.deceased,firstName:e.firstName}),Object(p.h)("div",{class:"row my-2"},Object(p.h)(y,{onClick:e.handlePrevStep}),Object(p.h)(v,{onClick:e.handleNextStep})))},B=function(e){return Object(p.h)("div",null,Object(p.h)("div",{class:"row my-2"},Object(p.h)(y,{onClick:e.handlePrevStep}),Object(p.h)(v,{onClick:e.handleNextStep})))},J=function(e){return Object(p.h)("div",null,Object(p.h)("div",{class:"row my-2"},Object(p.h)(y,{onClick:e.handlePrevStep}),Object(p.h)(v,{onClick:e.handleNextStep})))},q=a("2LX0"),z=a.n(q),U=(Object(p.h)("a",{class:"btn btn-clear","aria-label":"Close",role:"button"}),Object(p.h)("label",{class:"form-label"},"Enter email addresses")),X=function(e){function t(){var a,n,r;s(this,t);for(var l=arguments.length,c=Array(l),i=0;i<l;i++)c[i]=arguments[i];return a=n=o(this,e.call.apply(e,[this].concat(c))),n.state={email:"",emails:[],emailError:!1},n._handleEmailChange=function(e){n.setState({email:e.target.value})},n._addEmail=function(){if(!z()(n.state.email))return void n.setState({emailError:!0});n.setState({emailError:!1}),n.setState({emails:[].concat(n.state.emails,[n.state.email]),email:""})},n._removeEmail=function(e){var t=n.state.emails.filter(function(t){return t!==e.target.name});n.setState({emails:t})},r=a,o(n,r)}return l(t,e),t.prototype.render=function(e){var t=this,a=j()("form-group",{"has-error":this.state.emailError}),n=j()("form-input-hint",{"d-hide":!this.state.emailError});return Object(p.h)("div",null,Object(p.h)("div",{class:a},U,Object(p.h)("div",{class:"input-group"},Object(p.h)("input",{type:"email",class:"form-input",value:this.state.email,onChange:this._handleEmailChange}),Object(p.h)("button",{class:"btn btn-primary input-group-btn",onClick:this._addEmail},"Add")),Object(p.h)("p",{class:n},"Please enter a valid email address")),Object(p.h)("div",{class:"mt-2"},this.state.emails.map(function(e){return Object(p.h)("span",{class:"chip"},e,Object(p.h)("a",{class:"btn btn-clear","aria-label":"Close",role:"button",onClick:t._removeEmail,name:e}))})),Object(p.h)("div",{class:"row my-2"},Object(p.h)(y,{onClick:e.handlePrevStep})))},t}(p.Component),K=function(e){function t(){return c(this,t),i(this,e.apply(this,arguments))}return h(t,e),t.prototype.render=function(e){switch(e.step){case 1:return Object(p.h)(N,{firstName:e.firstName,handleFirstNameChange:e.handleFirstNameChange,lastName:e.lastName,handleLastNameChange:e.handleLastNameChange,handleNextStep:e.handleNextStep});case 2:return Object(p.h)(P,{handleNextStep:e.handleNextStep,handlePrevStep:e.handlePrevStep});case 3:return Object(p.h)(R,{firstName:e.firstName,subjPronoun:e.subjPronoun,objPronoun:e.objPronoun,posPronoun:e.posPronoun,handleGenderChange:e.handleGenderChange,deceased:e.deceased,handleDeath:e.handleDeath,handleNextStep:e.handleNextStep,handlePrevStep:e.handlePrevStep});case 4:return Object(p.h)(B,{handleNextStep:e.handleNextStep,handlePrevStep:e.handlePrevStep});case 5:return Object(p.h)(J,{handleNextStep:e.handleNextStep,handlePrevStep:e.handlePrevStep});case 6:return Object(p.h)(X,{handleNextStep:e.handleNextStep,handlePrevStep:e.handlePrevStep})}},t}(p.Component),Q=function(e){return Object(p.h)("ul",{class:"menu "+e.class},e.children)},V=function(e){return Object(p.h)("li",{class:"menu-item "+e.class},e.children)},Y=function(e){return Object(p.h)("li",{class:"divider","data-content":e.children})},Z=function(e){return Object(p.h)("figure",{class:e.class?"avatar "+e.class:"avatar","data-initial":e.data})},$=Object(p.h)(Y,null,"Shrine Basics"),ee=Object(p.h)(Y,null,"Invite Others"),te=function(e){var t=e.firstName.charAt(0)+e.lastName.charAt(0);return Object(p.h)(Q,{class:"avatar-rail-menu"},e.step>1&&Object(p.h)(Z,{class:"avatar-xxl centered",data:t}),e.step>1&&Object(p.h)(V,null,Object(p.h)("h4",{class:"text-center m-2"},e.firstName)),$,Object(p.h)(V,{class:1===e.step&&"arrow-box"},"Name"),Object(p.h)(V,{class:2===e.step&&"arrow-box"},"Photo"),Object(p.h)(V,{class:3===e.step&&"arrow-box"},"Information"),ee,Object(p.h)(V,{class:4===e.step&&"arrow-box"},"Invitation Template"),Object(p.h)(V,{class:5===e.step&&"arrow-box"},"Customize Invitation"),Object(p.h)(V,{class:6===e.step&&"arrow-box"},"Invite Collaborators"))},ae=Object(p.h)("h2",{class:"text-center"}," Create a New Shrine"),ne=function(e){function t(){var a,n,r;u(this,t);for(var s=arguments.length,o=Array(s),l=0;l<s;l++)o[l]=arguments[l];return a=n=b(this,e.call.apply(e,[this].concat(o))),n.state={step:1,firstName:"",lastName:"",subjPronoun:"",objPronoun:"",posPronoun:"",deceased:!1},n._handleNextStep=function(){n.setState({step:n.state.step+1})},n._handlePrevStep=function(){n.setState({step:n.state.step-1})},n._handleFirstNameChange=function(e){n.setState({firstName:e.target.value})},n._handleLastNameChange=function(e){n.setState({lastName:e.target.value})},n._handleGenderChange=function(e){"Male"===e.target.value?n.setState({subjPronoun:"he",objPronoun:"him",posPronoun:"his"}):"Female"===e.target.value&&n.setState({subjPronoun:"she",objPronoun:"her",posPronoun:"her"})},n._handleDeath=function(e){"true"===e.target.value?n.setState({deceased:!0}):"false"===e.target.value&&n.setState({deceased:!1})},r=a,b(n,r)}return d(t,e),t.prototype.render=function(){var e=this.state.step,t=this.state.firstName,a=this.state.lastName;return Object(p.h)(f.a,{avatarRail:Object(p.h)("div",{class:"m-2"},Object(p.h)(te,{step:e,firstName:t,lastName:a})),formRail:Object(p.h)("div",{class:"m-2"},e>1&&t?Object(p.h)("h2",{class:"text-center"},t,"'s Shrine"):ae,Object(p.h)("p",{class:"text-center text-gray"},"Step ",e," of 6"),Object(p.h)(K,{step:e,handleNextStep:this._handleNextStep,handlePrevStep:this._handlePrevStep,firstName:t,lastName:a,handleFirstNameChange:this._handleFirstNameChange,handleLastNameChange:this._handleLastNameChange,subjPronoun:this.state.subjPronoun,objPronoun:this.state.objPronoun,posPronoun:this.state.posPronoun,handleGenderChange:this._handleGenderChange,deceased:this.state.deceased,handleDeath:this._handleDeath}))})},t}(p.Component);t.default=ne}});
//# sourceMappingURL=route-create-shrine.chunk.c09b9.js.map