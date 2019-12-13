import{S as t,i as e,s as n,c as r,a as i,e as o,E as l,b as a,d as c,F as s,f as u,g as f,h as d,H as p,j as m,k as g,l as h,m as b,t as y,o as v,U as _,w as E,W as I,p as O,y as w,q as j}from"./index.4dabf106.js";import{s as $}from"./style-inject.es.29d15445.js";import{e as x,u as L,f as P}from"./useActions.599db06f.js";import{p as S}from"./prefixFilter.73eb3417.js";$(".mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field .mdc-switch+label{margin-left:10px;margin-right:0}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label,.mdc-form-field .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field .mdc-switch+label{margin-left:0;margin-right:10px}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field.mdc-form-field--align-end .mdc-switch+label{margin-left:10px;margin-right:0}");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var k=function(t,e){return(k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function C(t,e){function n(){this.constructor=t}k(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var H=function(){return(H=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function R(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),l=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return l}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var A=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),F=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(R(arguments[e]));return t}(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new A({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"==typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}(),D={ROOT:"mdc-form-field"},M={LABEL_SELECTOR:".mdc-form-field > label"},T=function(t){function e(n){var r=t.call(this,H({},e.defaultAdapter,n))||this;return r.clickHandler_=function(){return r.handleClick_()},r}return C(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return D},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return M},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},e}(A),z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return C(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label_",{get:function(){var t=T.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new T({activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()},deregisterInteractionHandler:function(e,n){t.label_&&t.label_.removeEventListener(e,n)},registerInteractionHandler:function(e,n){t.label_&&t.label_.addEventListener(e,n)}})},e}(F);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const U=t=>({}),q=t=>({});function B(t){let e,n,_,E,I,O,w;const j=t[10].default,$=r(j,t,t[9],null),P=t[10].label,k=r(P,t,t[9],q);let C=[{for:t[3]},x(S(t[7],"label$"),["use"])],H={};for(let t=0;t<C.length;t+=1)H=i(H,C[t]);let R=[{class:"\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "},x(t[7],["use","class","alignEnd","inputId","label$"])],A={};for(let t=0;t<R.length;t+=1)A=i(A,R[t]);return{c(){e=o("div"),$&&$.c(),n=l(),_=o("label"),k&&k.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var r=c(e);$&&$.l(r),n=s(r),_=a(r,"LABEL",{for:!0});var i=c(_);k&&k.l(i),i.forEach(u),r.forEach(u),this.h()},h(){f(_,H),f(e,A)},m(r,i){d(r,e,i),$&&$.m(e,null),p(e,n),p(e,_),k&&k.m(_,null),E=L.call(null,_,t[4])||{},t[11](e),I=L.call(null,e,t[0])||{},O=t[6].call(null,e)||{},w=!0},p(t,n){$&&$.p&&512&n[0]&&$.p(m(j,t,t[9],null),g(j,t[9],n,null)),k&&k.p&&512&n[0]&&k.p(m(P,t,t[9],q),g(P,t[9],n,U)),f(_,h(C,[8&n[0]&&{for:t[3]},128&n[0]&&x(S(t[7],"label$"),["use"])])),b(E.update)&&16&n[0]&&E.update.call(null,t[4]),f(e,h(R,[6&n[0]&&{class:"\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "},128&n[0]&&x(t[7],["use","class","alignEnd","inputId","label$"])])),b(I.update)&&1&n[0]&&I.update.call(null,t[0])},i(t){w||(y($,t),y(k,t),w=!0)},o(t){v($,t),v(k,t),w=!1},d(n){n&&u(e),$&&$.d(n),k&&k.d(n),E&&b(E.destroy)&&E.destroy(),t[11](null),I&&b(I.destroy)&&I.destroy(),O&&b(O.destroy)&&O.destroy()}}}let W=0;function V(t,e,n){const r=P(j);let o,l,{use:a=[]}=e,{class:c=""}=e,{align:s="start"}=e,{inputId:u="SMUI-form-field-"+W++}=e,{label$use:f=[]}=e;_("SMUI:form-field",()=>l),_("SMUI:generic:input:props",{id:u}),E(()=>{l=new z(o)}),I(()=>{l&&l.destroy()});let{$$slots:d={},$$scope:p}=e;return t.$set=t=>{n(7,e=i(i({},e),O(t))),"use"in t&&n(0,a=t.use),"class"in t&&n(1,c=t.class),"align"in t&&n(2,s=t.align),"inputId"in t&&n(3,u=t.inputId),"label$use"in t&&n(4,f=t.label$use),"$$scope"in t&&n(9,p=t.$$scope)},e=O(e),[a,c,s,u,f,o,r,e,l,p,d,function(t){w[t?"unshift":"push"](()=>{n(5,o=t)})}]}class G extends t{constructor(t){super(),e(this,t,V,B,n,{use:0,class:1,align:2,inputId:3,label$use:4})}}export{G as F};
