import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, a2 as setContext, C as onMount, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, E as listen_dev, m as insert_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, b as current_component, F as binding_callbacks, a4 as onDestroy, a7 as afterUpdate, D as empty, R as group_outros, U as update_keyed_each, T as check_outros, a8 as run_all, V as outro_and_destroy_block, Y as svg_element, O as attr_dev, P as append_dev, n as noop, v as _inherits$1, w as _classCallCheck$1, x as _possibleConstructorReturn$1, y as _getPrototypeOf$1, z as _assertThisInitialized$1, M as space, W as text, I as create_component, N as claim_space, X as claim_text, J as claim_component, K as mount_component, $ as set_data_dev, L as destroy_component, H as bind, Q as add_flush_callback } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/typeof';
import '@babel/runtime/helpers/esm/toConsumableArray';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';
import { B as Button } from './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Button.238fe4ea.js';
import { L as Label } from './Label.cdd98476.js';
import { I as Icon } from './Icon.e7ebcf54.js';

var css = ".mdc-chip__icon--leading,.mdc-chip__icon--trailing{color:rgba(0,0,0,.54)}.mdc-chip__icon--trailing:hover{color:rgba(0,0,0,.62)}.mdc-chip__icon--trailing:focus{color:rgba(0,0,0,.87)}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-right:-4px;margin-left:4px}.mdc-chip{border-radius:16px;background-color:#e0e0e0;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none;overflow:hidden}.mdc-chip,.mdc-chip:hover{color:rgba(0,0,0,.87)}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(.4,0,.2,1),width .15s cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms;stroke-width:2px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:rgba(255,62,0,.54)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#ff3e00;stroke:var(--mdc-theme-primary,#ff3e00)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width .15s cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-chip{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-chip:after,.mdc-chip:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-chip:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-chip.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-chip.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-chip:after,.mdc-chip:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-chip:after,.mdc-chip:before{background-color:rgba(0,0,0,.87)}.mdc-chip:hover:before{opacity:.04}.mdc-chip.mdc-ripple-upgraded--background-focused:before,.mdc-chip:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-chip:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-chip:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:before{opacity:.08}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:after,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:after,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover:before{opacity:.12}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}@keyframes mdc-chip-entry{0%{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}";
styleInject(css);

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

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

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
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

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

var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

/**
 * @license
 * Copyright 2019 Google Inc.
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

/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported_1 = false;

    try {
      globalObj.document.addEventListener('test', function () {
        return undefined;
      }, {
        get passive() {
          isSupported_1 = true;
          return isSupported_1;
        }

      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


    supportsPassive_ = isSupported_1;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}

/**
 * @license
 * Copyright 2018 Google Inc.
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
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

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
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug'; // Append to head instead of body because this script might be invoked in the
  // head, in which case the body doesn't exist yet. The probe works either way.

  document.head.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  return hasPseudoVarBug;
}

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}

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

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        browserSupportsCssVars: function browserSupportsCssVars() {
          return true;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function containsEventTarget() {
          return true;
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return true;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return true;
        },
        isUnbounded: function isUnbounded() {
          return true;
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        updateCssVariable: function updateCssVariable() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = _assign({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(MDCFoundation);

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

var MDCRipple =
/** @class */
function (_super) {
  __extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(MDCComponent);

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
var strings$1 = {
  ARIA_CHECKED: 'aria-checked',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  INTERACTION_EVENT: 'MDCChip:interaction',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  REMOVAL_EVENT: 'MDCChip:removal',
  SELECTION_EVENT: 'MDCChip:selection',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
};
var cssClasses$1 = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  SELECTED: 'mdc-chip--selected',
  TRAILING_ICON: 'mdc-chip__icon--trailing'
};

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
var emptyClientRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
};

var MDCChipFoundation =
/** @class */
function (_super) {
  __extends(MDCChipFoundation, _super);

  function MDCChipFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     */


    _this.shouldRemoveOnTrailingIconClick_ = true;
    return _this;
  }

  Object.defineProperty(MDCChipFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        addClassToLeadingIcon: function addClassToLeadingIcon() {
          return undefined;
        },
        eventTargetHasClass: function eventTargetHasClass() {
          return false;
        },
        getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
          return emptyClientRect;
        },
        getComputedStyleValue: function getComputedStyleValue() {
          return '';
        },
        getRootBoundingClientRect: function getRootBoundingClientRect() {
          return emptyClientRect;
        },
        hasClass: function hasClass() {
          return false;
        },
        hasLeadingIcon: function hasLeadingIcon() {
          return false;
        },
        notifyInteraction: function notifyInteraction() {
          return undefined;
        },
        notifyRemoval: function notifyRemoval() {
          return undefined;
        },
        notifySelection: function notifySelection() {
          return undefined;
        },
        notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {
          return undefined;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        setStyleProperty: function setStyleProperty() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCChipFoundation.prototype.isSelected = function () {
    return this.adapter_.hasClass(cssClasses$1.SELECTED);
  };

  MDCChipFoundation.prototype.setSelected = function (selected) {
    if (selected) {
      this.adapter_.addClass(cssClasses$1.SELECTED);
      this.adapter_.setAttr(strings$1.ARIA_CHECKED, 'true');
    } else {
      this.adapter_.removeClass(cssClasses$1.SELECTED);
      this.adapter_.setAttr(strings$1.ARIA_CHECKED, 'false');
    }

    this.adapter_.notifySelection(selected);
  };

  MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
    return this.shouldRemoveOnTrailingIconClick_;
  };

  MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
  };

  MDCChipFoundation.prototype.getDimensions = function () {
    var _this = this;

    var getRootRect = function getRootRect() {
      return _this.adapter_.getRootBoundingClientRect();
    };

    var getCheckmarkRect = function getCheckmarkRect() {
      return _this.adapter_.getCheckmarkBoundingClientRect();
    }; // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
    // size of the checkmark.


    if (!this.adapter_.hasLeadingIcon()) {
      var checkmarkRect = getCheckmarkRect();

      if (checkmarkRect) {
        var rootRect = getRootRect(); // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
        // However, the checkbox is initially hidden by setting the width to 0.
        // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
        // when adding it to the root client rect's width.

        return {
          bottom: rootRect.bottom,
          height: rootRect.height,
          left: rootRect.left,
          right: rootRect.right,
          top: rootRect.top,
          width: rootRect.width + checkmarkRect.height
        };
      }
    }

    return getRootRect();
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChipFoundation.prototype.beginExit = function () {
    this.adapter_.addClass(cssClasses$1.CHIP_EXIT);
  };
  /**
   * Handles an interaction event on the root element.
   */


  MDCChipFoundation.prototype.handleInteraction = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnter) {
      this.adapter_.notifyInteraction();
    }
  };
  /**
   * Handles a transition end event on the root element.
   */


  MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
    var _this = this; // Handle transition end event on the chip when it is about to be removed.


    if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.CHIP_EXIT)) {
      if (evt.propertyName === 'width') {
        this.adapter_.notifyRemoval();
      } else if (evt.propertyName === 'opacity') {
        // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
        var chipWidth_1 = this.adapter_.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
        // to its current pixel width, so we aren't transitioning out of 'auto'.

        requestAnimationFrame(function () {
          _this.adapter_.setStyleProperty('width', chipWidth_1); // To mitigate jitter, start transitioning padding and margin before width.


          _this.adapter_.setStyleProperty('padding', '0');

          _this.adapter_.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


          requestAnimationFrame(function () {
            _this.adapter_.setStyleProperty('width', '0');
          });
        });
      }

      return;
    } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


    if (evt.propertyName !== 'opacity') {
      return;
    }

    if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.LEADING_ICON) && this.adapter_.hasClass(cssClasses$1.SELECTED)) {
      this.adapter_.addClassToLeadingIcon(cssClasses$1.HIDDEN_LEADING_ICON);
    } else if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$1.CHECKMARK) && !this.adapter_.hasClass(cssClasses$1.SELECTED)) {
      this.adapter_.removeClassFromLeadingIcon(cssClasses$1.HIDDEN_LEADING_ICON);
    }
  };
  /**
   * Handles an interaction event on the trailing icon element. This is used to
   * prevent the ripple from activating on interaction with the trailing icon.
   */


  MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
    evt.stopPropagation();

    if (evt.type === 'click' || isEnter) {
      this.adapter_.notifyTrailingIconInteraction();

      if (this.shouldRemoveOnTrailingIconClick_) {
        this.beginExit();
      }
    }
  };

  return MDCChipFoundation;
}(MDCFoundation);

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
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCChip =
/** @class */
function (_super) {
  __extends(MDCChip, _super);

  function MDCChip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCChip.prototype, "selected", {
    /**
     * @return Whether the chip is selected.
     */
    get: function get() {
      return this.foundation_.isSelected();
    },

    /**
     * Sets selected state on the chip.
     */
    set: function set(selected) {
      this.foundation_.setSelected(selected);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
    /**
     * @return Whether a trailing icon click should trigger exit/removal of the chip.
     */
    get: function get() {
      return this.foundation_.getShouldRemoveOnTrailingIconClick();
    },

    /**
     * Sets whether a trailing icon click should trigger exit/removal of the chip.
     */
    set: function set(shouldRemove) {
      this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChip.prototype, "id", {
    get: function get() {
      return this.root_.id;
    },
    enumerable: true,
    configurable: true
  });

  MDCChip.attachTo = function (root) {
    return new MDCChip(root);
  };

  MDCChip.prototype.initialize = function (rippleFactory) {
    var _this = this;

    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }

    this.leadingIcon_ = this.root_.querySelector(strings$1.LEADING_ICON_SELECTOR);
    this.trailingIcon_ = this.root_.querySelector(strings$1.TRAILING_ICON_SELECTOR);
    this.checkmark_ = this.root_.querySelector(strings$1.CHECKMARK_SELECTOR); // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.

    var rippleAdapter = _assign({}, MDCRipple.createAdapter(this), {
      computeBoundingRect: function computeBoundingRect() {
        return _this.foundation_.getDimensions();
      }
    });

    this.ripple_ = rippleFactory(this.root_, new MDCRippleFoundation(rippleAdapter));
  };

  MDCChip.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleInteraction_ = function (evt) {
      return _this.foundation_.handleInteraction(evt);
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.handleTrailingIconInteraction_ = function (evt) {
      return _this.foundation_.handleTrailingIconInteraction(evt);
    };

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.listen(evtType, _this.handleInteraction_);
    });
    this.listen('transitionend', this.handleTransitionEnd_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
      });
    }
  };

  MDCChip.prototype.destroy = function () {
    var _this = this;

    this.ripple_.destroy();
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.unlisten(evtType, _this.handleInteraction_);
    });
    this.unlisten('transitionend', this.handleTransitionEnd_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
      });
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChip.prototype.beginExit = function () {
    this.foundation_.beginExit();
  };

  MDCChip.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      addClassToLeadingIcon: function addClassToLeadingIcon(className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.add(className);
        }
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target ? target.classList.contains(className) : false;
      },
      getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
        return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
      },
      getComputedStyleValue: function getComputedStyleValue(propertyName) {
        return window.getComputedStyle(_this.root_).getPropertyValue(propertyName);
      },
      getRootBoundingClientRect: function getRootBoundingClientRect() {
        return _this.root_.getBoundingClientRect();
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasLeadingIcon: function hasLeadingIcon() {
        return !!_this.leadingIcon_;
      },
      notifyInteraction: function notifyInteraction() {
        return _this.emit(strings$1.INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      notifyRemoval: function notifyRemoval() {
        return _this.emit(strings$1.REMOVAL_EVENT, {
          chipId: _this.id,
          root: _this.root_
        }, true
        /* shouldBubble */
        );
      },
      notifySelection: function notifySelection(selected) {
        return _this.emit(strings$1.SELECTION_EVENT, {
          chipId: _this.id,
          selected: selected
        }, true
        /* shouldBubble */
        );
      },
      notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
        return _this.emit(strings$1.TRAILING_ICON_INTERACTION_EVENT, {
          chipId: _this.id
        }, true
        /* shouldBubble */
        );
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
        if (_this.leadingIcon_) {
          _this.leadingIcon_.classList.remove(className);
        }
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      setStyleProperty: function setStyleProperty(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      }
    };
    return new MDCChipFoundation(adapter);
  };

  return MDCChip;
}(MDCComponent);

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
var strings$2 = {
  CHIP_SELECTOR: '.mdc-chip'
};
var cssClasses$2 = {
  CHOICE: 'mdc-chip-set--choice',
  FILTER: 'mdc-chip-set--filter'
};

/**
 * @license
 * Copyright 2017 Google Inc.
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

var MDCChipSetFoundation =
/** @class */
function (_super) {
  __extends(MDCChipSetFoundation, _super);

  function MDCChipSetFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     */


    _this.selectedChipIds_ = [];
    return _this;
  }

  Object.defineProperty(MDCChipSetFoundation, "strings", {
    get: function get() {
      return strings$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
    get: function get() {
      return {
        hasClass: function hasClass() {
          return false;
        },
        removeChip: function removeChip() {
          return undefined;
        },
        setSelected: function setSelected() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns an array of the IDs of all selected chips.
   */

  MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
    return this.selectedChipIds_.slice();
  };
  /**
   * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
   */


  MDCChipSetFoundation.prototype.select = function (chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      return;
    }

    if (this.adapter_.hasClass(cssClasses$2.CHOICE) && this.selectedChipIds_.length > 0) {
      var previouslySelectedChip = this.selectedChipIds_[0];
      this.selectedChipIds_.length = 0;
      this.adapter_.setSelected(previouslySelectedChip, false);
    }

    this.selectedChipIds_.push(chipId);
    this.adapter_.setSelected(chipId, true);
  };
  /**
   * Handles a chip interaction event
   */


  MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
    if (this.adapter_.hasClass(cssClasses$2.CHOICE) || this.adapter_.hasClass(cssClasses$2.FILTER)) {
      this.toggleSelect_(chipId);
    }
  };
  /**
   * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
   */


  MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected) {
    var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

    if (selected && !chipIsSelected) {
      this.select(chipId);
    } else if (!selected && chipIsSelected) {
      this.deselect_(chipId);
    }
  };
  /**
   * Handles the event when a chip is removed.
   */


  MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
    this.deselect_(chipId);
    this.adapter_.removeChip(chipId);
  };
  /**
   * Deselects the chip with the given id.
   */


  MDCChipSetFoundation.prototype.deselect_ = function (chipId) {
    var index = this.selectedChipIds_.indexOf(chipId);

    if (index >= 0) {
      this.selectedChipIds_.splice(index, 1);
      this.adapter_.setSelected(chipId, false);
    }
  };
  /**
   * Toggles selection of the chip with the given id.
   */


  MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      this.deselect_(chipId);
    } else {
      this.select(chipId);
    }
  };

  return MDCChipSetFoundation;
}(MDCFoundation);

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
var _a = MDCChipFoundation.strings,
    INTERACTION_EVENT = _a.INTERACTION_EVENT,
    SELECTION_EVENT = _a.SELECTION_EVENT,
    REMOVAL_EVENT = _a.REMOVAL_EVENT;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;

var MDCChipSet =
/** @class */
function (_super) {
  __extends(MDCChipSet, _super);

  function MDCChipSet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCChipSet.attachTo = function (root) {
    return new MDCChipSet(root);
  };

  Object.defineProperty(MDCChipSet.prototype, "chips", {
    get: function get() {
      return this.chips_.slice();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
    /**
     * @return An array of the IDs of all selected chips.
     */
    get: function get() {
      return this.foundation_.getSelectedChipIds();
    },
    enumerable: true,
    configurable: true
  });
  /**
   * @param chipFactory A function which creates a new MDCChip.
   */

  MDCChipSet.prototype.initialize = function (chipFactory) {
    if (chipFactory === void 0) {
      chipFactory = function chipFactory(el) {
        return new MDCChip(el);
      };
    }

    this.chipFactory_ = chipFactory;
    this.chips_ = this.instantiateChips_(this.chipFactory_);
  };

  MDCChipSet.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.chips_.forEach(function (chip) {
      if (chip.id && chip.selected) {
        _this.foundation_.select(chip.id);
      }
    });

    this.handleChipInteraction_ = function (evt) {
      return _this.foundation_.handleChipInteraction(evt.detail.chipId);
    };

    this.handleChipSelection_ = function (evt) {
      return _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected);
    };

    this.handleChipRemoval_ = function (evt) {
      return _this.foundation_.handleChipRemoval(evt.detail.chipId);
    };

    this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
    this.listen(SELECTION_EVENT, this.handleChipSelection_);
    this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
  };

  MDCChipSet.prototype.destroy = function () {
    this.chips_.forEach(function (chip) {
      chip.destroy();
    });
    this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
    this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
    this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);

    _super.prototype.destroy.call(this);
  };
  /**
   * Adds a new chip object to the chip set from the given chip element.
   */


  MDCChipSet.prototype.addChip = function (chipEl) {
    chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
    this.chips_.push(this.chipFactory_(chipEl));
  };

  MDCChipSet.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      removeChip: function removeChip(chipId) {
        var index = _this.findChipIndex_(chipId);

        if (index >= 0) {
          _this.chips_[index].destroy();

          _this.chips_.splice(index, 1);
        }
      },
      setSelected: function setSelected(chipId, selected) {
        var index = _this.findChipIndex_(chipId);

        if (index >= 0) {
          _this.chips_[index].selected = selected;
        }
      }
    };
    return new MDCChipSetFoundation(adapter);
  };
  /**
   * Instantiates chip components on all of the chip set's child chip elements.
   */


  MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
    var chipElements = [].slice.call(this.root_.querySelectorAll(CHIP_SELECTOR));
    return chipElements.map(function (el) {
      el.id = el.id || "mdc-chip-" + ++idCounter;
      return chipFactory(el);
    });
  };
  /**
   * Returns the index of the chip with the given id, or -1 if the chip does not exist.
   */


  MDCChipSet.prototype.findChipIndex_ = function (chipId) {
    for (var i = 0; i < this.chips_.length; i++) {
      if (this.chips_[i].id === chipId) {
        return i;
      }
    }

    return -1;
  };

  return MDCChipSet;
}(MDCComponent);

var file = "home/hperrin/repos/svelte-material-ui/packages/chips/Chip.svelte";

function create_fragment(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var div_levels = [{
    class: "\n    mdc-chip\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*selected*/
    ctx[0] ? "mdc-chip--selected" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[6], ["use", "class", "ripple", "selected", "shouldRemoveOnTrailingIconClick"])];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file, 0, 0, 0);
      dispose = listen_dev(div, "MDCChip:selection",
      /*handleSelection*/
      ctx[5], false, false, false);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }
      /*div_binding*/


      ctx[14](div);
      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[1]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      4096) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[12], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[12], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, selected*/
      5 && {
        class: "\n    mdc-chip\n    " +
        /*className*/
        ctx[2] + "\n    " + (
        /*selected*/
        ctx[0] ? "mdc-chip--selected" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      64 && exclude(
      /*$$props*/
      ctx[6], ["use", "class", "ripple", "selected", "shouldRemoveOnTrailingIconClick"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      /*div_binding*/

      ctx[14](null);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component, ["MDCChip:interaction", "MDCChip:selection", "MDCChip:removal", "MDCChip:trailingIconInteraction"]);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$ripple = _$$props3.ripple,
      ripple = _$$props3$ripple === void 0 ? true : _$$props3$ripple;
  var _$$props4 = $$props,
      _$$props4$selected = _$$props4.selected,
      selected = _$$props4$selected === void 0 ? false : _$$props4$selected;
  var _$$props5 = $$props,
      _$$props5$shouldRemov = _$$props5.shouldRemoveOnTrailingIconClick,
      shouldRemoveOnTrailingIconClick = _$$props5$shouldRemov === void 0 ? true : _$$props5$shouldRemov;
  setContext("SMUI:label:context", "chip");
  setContext("SMUI:icon:context", "chip");
  var element;
  var chip;
  var previousSelected = selected;
  onMount(function () {
    $$invalidate(3, element.setChip = setChip, element);
  });

  function setChip(component) {
    $$invalidate(9, chip = component);

    if (!ripple) {
      chip.ripple && chip.ripple.destroy();
    }
  }

  function handleSelection(e) {
    $$invalidate(0, selected = e.detail.selected);
  }

  var _$$props6 = $$props,
      _$$props6$$$slots = _$$props6.$$slots,
      $$slots = _$$props6$$$slots === void 0 ? {} : _$$props6$$$slots,
      $$scope = _$$props6.$$scope;

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(3, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(7, ripple = $$new_props.ripple);
    if ("selected" in $$new_props) $$invalidate(0, selected = $$new_props.selected);
    if ("shouldRemoveOnTrailingIconClick" in $$new_props) $$invalidate(8, shouldRemoveOnTrailingIconClick = $$new_props.shouldRemoveOnTrailingIconClick);
    if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      selected: selected,
      shouldRemoveOnTrailingIconClick: shouldRemoveOnTrailingIconClick,
      element: element,
      chip: chip,
      previousSelected: previousSelected
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(7, ripple = $$new_props.ripple);
    if ("selected" in $$props) $$invalidate(0, selected = $$new_props.selected);
    if ("shouldRemoveOnTrailingIconClick" in $$props) $$invalidate(8, shouldRemoveOnTrailingIconClick = $$new_props.shouldRemoveOnTrailingIconClick);
    if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
    if ("chip" in $$props) $$invalidate(9, chip = $$new_props.chip);
    if ("previousSelected" in $$props) $$invalidate(10, previousSelected = $$new_props.previousSelected);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*chip, previousSelected, selected*/
    1537) {
       if (chip && previousSelected !== selected) {
        if (selected !== chip.selected) {
          $$invalidate(9, chip.selected = selected, chip);
        }

        $$invalidate(10, previousSelected = selected);
      }
    }

    if ($$self.$$.dirty[0] &
    /*chip, shouldRemoveOnTrailingIconClick*/
    768) {
       if (chip && chip.shouldRemoveOnTrailingIconClick !== shouldRemoveOnTrailingIconClick) {
        $$invalidate(9, chip.shouldRemoveOnTrailingIconClick = shouldRemoveOnTrailingIconClick, chip);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [selected, use, className, element, forwardEvents, handleSelection, $$props, ripple, shouldRemoveOnTrailingIconClick, chip, previousSelected, setChip, $$scope, $$slots, div_binding];
}

var Chip =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Chip, _SvelteComponentDev);

  function Chip(options) {
    var _this;

    _classCallCheck(this, Chip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chip).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 1,
      class: 2,
      ripple: 7,
      selected: 0,
      shouldRemoveOnTrailingIconClick: 8
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Chip",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Chip, [{
    key: "use",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selected",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "shouldRemoveOnTrailingIconClick",
    get: function get() {
      throw new Error("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Chip;
}(SvelteComponentDev);

var file$1 = "home/hperrin/repos/svelte-material-ui/packages/chips/Set.svelte";

var get_default_slot_changes = function get_default_slot_changes(dirty) {
  return {
    chip: dirty[0] &
    /*chips*/
    1
  };
};

var get_default_slot_context = function get_default_slot_context(ctx) {
  return {
    chip:
    /*chip*/
    ctx[20]
  };
};

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  child_ctx[22] = i;
  return child_ctx;
} // (16:2) {#each chips as chip, i (key(chip))}


function create_each_block(key_2, ctx) {
  var first;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[18].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[17], get_default_slot_context);
  var block = {
    key: key_2,
    first: null,
    c: function create() {
      first = empty();
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      if (default_slot) default_slot.l(nodes);
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);

      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope, chips*/
      131073) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[17], get_default_slot_context), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[17], dirty, get_default_slot_changes));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(16:2) {#each chips as chip, i (key(chip))}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var each_value =
  /*chips*/
  ctx[0];

  var get_key = function get_key(ctx) {
    return (
      /*key*/
      ctx[3](
      /*chip*/
      ctx[20])
    );
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var div_levels = [{
    class: "\n    mdc-chip-set\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*choice*/
    ctx[4] ? "mdc-chip-set--choice" : "") + "\n    " + (
    /*filter*/
    ctx[5] ? "mdc-chip-set--filter" : "") + "\n    " + (
    /*input*/
    ctx[6] ? "mdc-chip-set--input" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[11], ["use", "class", "chips", "key", "selected", "choice", "filter", "input"])];
  var div_data = {};

  for (var _i = 0; _i < div_levels.length; _i += 1) {
    div_data = assign(div_data, div_levels[_i]);
  }

  var block = {
    c: function create() {
      div = element("div");

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$1, 0, 0, 0);
      dispose = [listen_dev(div, "MDCChip:removal",
      /*handleRemoval*/
      ctx[10], false, false, false), listen_dev(div, "MDCChip:selection",
      /*handleSelection*/
      ctx[9], false, false, false)];
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].m(div, null);
      }
      /*div_binding*/


      ctx[19](div);
      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[1]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[8].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      var each_value =
      /*chips*/
      ctx[0];
      group_outros();
      each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
      check_outros();
      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, choice, filter, input*/
      116 && {
        class: "\n    mdc-chip-set\n    " +
        /*className*/
        ctx[2] + "\n    " + (
        /*choice*/
        ctx[4] ? "mdc-chip-set--choice" : "") + "\n    " + (
        /*filter*/
        ctx[5] ? "mdc-chip-set--filter" : "") + "\n    " + (
        /*input*/
        ctx[6] ? "mdc-chip-set--input" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      2048 && exclude(
      /*$$props*/
      ctx[11], ["use", "class", "chips", "key", "selected", "choice", "filter", "input"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].d();
      }
      /*div_binding*/


      ctx[19](null);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$chips = _$$props3.chips,
      chips = _$$props3$chips === void 0 ? [] : _$$props3$chips;
  var _$$props4 = $$props,
      _$$props4$key = _$$props4.key,
      key = _$$props4$key === void 0 ? function (chip) {
    return chip;
  } : _$$props4$key;
  var _$$props5 = $$props,
      _$$props5$selected = _$$props5.selected,
      selected = _$$props5$selected === void 0 ? null : _$$props5$selected;
  var _$$props6 = $$props,
      _$$props6$choice = _$$props6.choice,
      choice = _$$props6$choice === void 0 ? false : _$$props6$choice;
  var _$$props7 = $$props,
      _$$props7$filter = _$$props7.filter,
      filter = _$$props7$filter === void 0 ? false : _$$props7$filter;
  var _$$props8 = $$props,
      _$$props8$input = _$$props8.input,
      input = _$$props8$input === void 0 ? false : _$$props8$input;
  var element;
  var chipSet;
  onMount(function () {
    $$invalidate(13, chipSet = new MDCChipSet(element));

    for (var i = 0; i < element.children.length; i++) {
      element.children[i].setChip(chipSet.chips[i]);
    }
  });
  onDestroy(function () {
    chipSet && chipSet.destroy();
  });
  var previousChipsLength = chips.length;
  afterUpdate(function () {
    if (previousChipsLength !== chips.length) {
      while (previousChipsLength < chips.length) {
        chipSet.addChip(element.children[previousChipsLength]);
        element.children[previousChipsLength].setChip(chipSet.chips[previousChipsLength]);
        previousChipsLength++;
      }

      previousChipsLength = chips.length;
    }
  });
  var selectedRaf;

  function handleSelection(e) {
    if (selectedRaf) {
      window.cancelAnimationFrame(selectedRaf);
    }

    selectedRaf = window.requestAnimationFrame(updateSelected);
  }

  function updateSelected() {
    if (!chipSet) {
      return;
    }

    if (choice) {
      if (!chipSet.selectedChipIds.length) {
        $$invalidate(12, selected = null);
        return;
      }

      for (var i = 0; i < chipSet.chips.length; i++) {
        if (chipSet.chips[i].id === chipSet.selectedChipIds[0]) {
          $$invalidate(12, selected = chips[i]);
          return;
        }
      }

      $$invalidate(12, selected = null);
    } else {
      if (!Array.isArray(selected)) {
        $$invalidate(12, selected = []);
      }

      selected.splice(0, selected.length);

      for (var _i8 = 0; _i8 < chipSet.chips.length; _i8++) {
        if (chipSet.selectedChipIds.indexOf(chipSet.chips[_i8].id) !== -1) {
          selected.push(chips[_i8]);
        }
      }

      $$invalidate(12, selected);
    }
  }

  function handleRemoval(e) {
    var i = 0;
    var el = e.detail.root;

    while (el.previousSibling) {
      el = el.previousSibling;

      if (el.nodeType === 1) {
        i++;
      }
    }

    chips.splice(i, 1);
    $$invalidate(0, chips);
  }

  var _$$props9 = $$props,
      _$$props9$$$slots = _$$props9.$$slots,
      $$slots = _$$props9$$$slots === void 0 ? {} : _$$props9$$$slots,
      $$scope = _$$props9.$$scope;

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(7, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("chips" in $$new_props) $$invalidate(0, chips = $$new_props.chips);
    if ("key" in $$new_props) $$invalidate(3, key = $$new_props.key);
    if ("selected" in $$new_props) $$invalidate(12, selected = $$new_props.selected);
    if ("choice" in $$new_props) $$invalidate(4, choice = $$new_props.choice);
    if ("filter" in $$new_props) $$invalidate(5, filter = $$new_props.filter);
    if ("input" in $$new_props) $$invalidate(6, input = $$new_props.input);
    if ("$$scope" in $$new_props) $$invalidate(17, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      chips: chips,
      key: key,
      selected: selected,
      choice: choice,
      filter: filter,
      input: input,
      element: element,
      chipSet: chipSet,
      previousChipsLength: previousChipsLength,
      selectedRaf: selectedRaf
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("chips" in $$props) $$invalidate(0, chips = $$new_props.chips);
    if ("key" in $$props) $$invalidate(3, key = $$new_props.key);
    if ("selected" in $$props) $$invalidate(12, selected = $$new_props.selected);
    if ("choice" in $$props) $$invalidate(4, choice = $$new_props.choice);
    if ("filter" in $$props) $$invalidate(5, filter = $$new_props.filter);
    if ("input" in $$props) $$invalidate(6, input = $$new_props.input);
    if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
    if ("chipSet" in $$props) $$invalidate(13, chipSet = $$new_props.chipSet);
    if ("previousChipsLength" in $$props) previousChipsLength = $$new_props.previousChipsLength;
    if ("selectedRaf" in $$props) selectedRaf = $$new_props.selectedRaf;
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*chipSet, choice, selected, chips*/
    12305) {
       if (chipSet) {
        if (choice) {
          if (selected !== null) {
            var i;

            for (i = 0; i < chips.length; i++) {
              if (selected === chips[i]) {
                break;
              }
            }

            for (var j = 0; j < chipSet.chips.length; j++) {
              if (chipSet.chips[j].selected !== (j === i)) {
                $$invalidate(13, chipSet.chips[j].selected = j === i, chipSet);
              }
            }
          } else {
            for (var _i9 = 0; _i9 < chipSet.chips.length; _i9++) {
              if (chipSet.chips[_i9].selected) {
                $$invalidate(13, chipSet.chips[_i9].selected = false, chipSet);
              }
            }
          }
        } else if (Array.isArray(selected)) {
          for (var _i10 = 0; _i10 < chipSet.chips.length; _i10++) {
            var sel = selected.indexOf(chips[_i10]) !== -1;

            if (chipSet.chips[_i10].selected !== sel) {
              $$invalidate(13, chipSet.chips[_i10].selected = sel, chipSet);
            }
          }
        }
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [chips, use, className, key, choice, filter, input, element, forwardEvents, handleSelection, handleRemoval, $$props, selected, chipSet, previousChipsLength, selectedRaf, updateSelected, $$scope, $$slots, div_binding];
}

var Set =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Set, _SvelteComponentDev);

  function Set(options) {
    var _this;

    _classCallCheck(this, Set);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Set).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 1,
      class: 2,
      chips: 0,
      key: 3,
      selected: 12,
      choice: 4,
      filter: 5,
      input: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Set",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Set, [{
    key: "use",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "chips",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "key",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selected",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "choice",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "filter",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "input",
    get: function get() {
      throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Set;
}(SvelteComponentDev);

var file$2 = "home/hperrin/repos/svelte-material-ui/packages/chips/Checkmark.svelte";

function create_fragment$2(ctx) {
  var div;
  var svg;
  var path;
  var useActions_action;
  var div_levels = [{
    class: "mdc-chip__checkmark " +
    /*className*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[2], ["use", "class"])];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      svg = claim_element(div_nodes, "svg", {
        class: true,
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        class: true,
        fill: true,
        stroke: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "class", "mdc-chip__checkmark-path");
      attr_dev(path, "fill", "none");
      attr_dev(path, "stroke", "black");
      attr_dev(path, "d", "M1.73,12.91 8.1,19.28 22.79,4.59");
      add_location(path, file$2, 6, 4, 180);
      attr_dev(svg, "class", "mdc-chip__checkmark-svg");
      attr_dev(svg, "viewBox", "-2 -3 30 30");
      add_location(svg, file$2, 5, 2, 116);
      set_attributes(div, div_data);
      add_location(div, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, svg);
      append_dev(svg, path);
      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
    },
    p: function update(ctx, dirty) {
      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className*/
      2 && {
        class: "mdc-chip__checkmark " +
        /*className*/
        ctx[1]
      }, dirty[0] &
      /*$$props*/
      4 && exclude(
      /*$$props*/
      ctx[2], ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;

  $$self.$set = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, $$props];
}

var Checkmark =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Checkmark, _SvelteComponentDev);

  function Checkmark(options) {
    var _this;

    _classCallCheck(this, Checkmark);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkmark).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Checkmark",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Checkmark, [{
    key: "use",
    get: function get() {
      throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Checkmark;
}(SvelteComponentDev);

var file$3 = "src/routes/demo/chips.svelte"; // (11:8) {#if chip === 'four'}

function create_if_block_1(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      leading: true,
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(11:8) {#if chip === 'four'}",
    ctx: ctx
  });
  return block;
} // (12:10) <Icon class="material-icons" leading>


function create_default_slot_29(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("book");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "book");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(12:10) <Icon class=\\\"material-icons\\\" leading>",
    ctx: ctx
  });
  return block;
} // (14:8) <Text>


function create_default_slot_28(ctx) {
  var t_value =
  /*chip*/
  ctx[12] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*chip*/
      4096 && t_value !== (t_value =
      /*chip*/
      ctx[12] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(14:8) <Text>",
    ctx: ctx
  });
  return block;
} // (15:8) {#if chip === 'five'}


function create_if_block(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      trailing: true,
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(15:8) {#if chip === 'five'}",
    ctx: ctx
  });
  return block;
} // (16:10) <Icon class="material-icons" trailing>


function create_default_slot_27(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("commute");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "commute");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(16:10) <Icon class=\\\"material-icons\\\" trailing>",
    ctx: ctx
  });
  return block;
} // (10:6) <Chip shouldRemoveOnTrailingIconClick={false}>


function create_default_slot_26(ctx) {
  var t0;
  var t1;
  var if_block1_anchor;
  var current;
  var if_block0 =
  /*chip*/
  ctx[12] === "four" && create_if_block_1(ctx);
  var text_1 = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var if_block1 =
  /*chip*/
  ctx[12] === "five" && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(text_1.$$.fragment);
      t1 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t0 = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(text_1, target, anchor);
      insert_dev(target, t1, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*chip*/
      ctx[12] === "four") {
        if (!if_block0) {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        } else {
          transition_in(if_block0, 1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      var text_1_changes = {};

      if (dirty[0] &
      /*$$scope, chip*/
      12288) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);

      if (
      /*chip*/
      ctx[12] === "five") {
        if (!if_block1) {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        } else {
          transition_in(if_block1, 1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(text_1.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(text_1.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t0);
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t1);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(10:6) <Chip shouldRemoveOnTrailingIconClick={false}>",
    ctx: ctx
  });
  return block;
} // (9:4) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>


function create_default_slot_25(ctx) {
  var current;
  var chip = new Chip({
    props: {
      shouldRemoveOnTrailingIconClick: false,
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty[0] &
      /*$$scope, chip*/
      12288) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_25.name,
    type: "slot",
    source: "(9:4) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>",
    ctx: ctx
  });
  return block;
} // (25:6) <Chip tabindex="0">


function create_default_slot_24(ctx) {
  var t_value =
  /*chip*/
  ctx[12] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*chip*/
      4096 && t_value !== (t_value =
      /*chip*/
      ctx[12] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(25:6) <Chip tabindex=\\\"0\\\">",
    ctx: ctx
  });
  return block;
} // (24:4) <Set chips={['Morning', 'Afternoon', 'Evening', 'Night']} let:chip choice bind:selected={choice}>


function create_default_slot_23(ctx) {
  var current;
  var chip = new Chip({
    props: {
      tabindex: "0",
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty[0] &
      /*$$scope, chip*/
      12288) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(24:4) <Set chips={['Morning', 'Afternoon', 'Evening', 'Night']} let:chip choice bind:selected={choice}>",
    ctx: ctx
  });
  return block;
} // (31:48) <Label>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Morning");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Morning");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(31:48) <Label>",
    ctx: ctx
  });
  return block;
} // (31:4) <Button on:click={() => choice = 'Morning'}>


function create_default_slot_21(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(31:4) <Button on:click={() => choice = 'Morning'}>",
    ctx: ctx
  });
  return block;
} // (32:50) <Label>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Afternoon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Afternoon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(32:50) <Label>",
    ctx: ctx
  });
  return block;
} // (32:4) <Button on:click={() => choice = 'Afternoon'}>


function create_default_slot_19(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(32:4) <Button on:click={() => choice = 'Afternoon'}>",
    ctx: ctx
  });
  return block;
} // (33:48) <Label>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Evening");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Evening");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(33:48) <Label>",
    ctx: ctx
  });
  return block;
} // (33:4) <Button on:click={() => choice = 'Evening'}>


function create_default_slot_17(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(33:4) <Button on:click={() => choice = 'Evening'}>",
    ctx: ctx
  });
  return block;
} // (34:46) <Label>


function create_default_slot_16(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Night");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Night");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(34:46) <Label>",
    ctx: ctx
  });
  return block;
} // (34:4) <Button on:click={() => choice = 'Night'}>


function create_default_slot_15(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(34:4) <Button on:click={() => choice = 'Night'}>",
    ctx: ctx
  });
  return block;
} // (42:38) <Text>


function create_default_slot_14(ctx) {
  var t_value =
  /*chip*/
  ctx[12] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*chip*/
      4096 && t_value !== (t_value =
      /*chip*/
      ctx[12] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(42:38) <Text>",
    ctx: ctx
  });
  return block;
} // (42:6) <Chip tabindex="0">


function create_default_slot_13(ctx) {
  var current;
  var checkmark = new Checkmark({
    $$inline: true
  });
  var text_1 = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(checkmark.$$.fragment);
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkmark.$$.fragment, nodes);
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkmark, target, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[0] &
      /*$$scope, chip*/
      12288) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkmark.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkmark.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkmark, detaching);
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(42:6) <Chip tabindex=\\\"0\\\">",
    ctx: ctx
  });
  return block;
} // (41:4) <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats']} let:chip filter bind:selected={filter}>


function create_default_slot_12(ctx) {
  var current;
  var chip = new Chip({
    props: {
      tabindex: "0",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(41:4) <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats']} let:chip filter bind:selected={filter}>",
    ctx: ctx
  });
  return block;
} // (51:12) <Text>


function create_default_slot_11(ctx) {
  var t_value =
  /*chip*/
  ctx[12] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*chip*/
      4096 && t_value !== (t_value =
      /*chip*/
      ctx[12] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(51:12) <Text>",
    ctx: ctx
  });
  return block;
} // (51:31) <Icon class="material-icons" trailing tabindex="0">


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("cancel");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "cancel");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(51:31) <Icon class=\\\"material-icons\\\" trailing tabindex=\\\"0\\\">",
    ctx: ctx
  });
  return block;
} // (51:6) <Chip>


function create_default_slot_9(ctx) {
  var current;
  var text_1 = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
      trailing: true,
      tabindex: "0",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[0] &
      /*$$scope, chip*/
      12288) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(51:6) <Chip>",
    ctx: ctx
  });
  return block;
} // (50:4) <Set chips={input} let:chip input>


function create_default_slot_8(ctx) {
  var current;
  var chip = new Chip({
    props: {
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(50:4) <Set chips={input} let:chip input>",
    ctx: ctx
  });
  return block;
} // (53:36) <Label>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Add");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Add");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(53:36) <Label>",
    ctx: ctx
  });
  return block;
} // (53:4) <Button on:click={addInputChip}>


function create_default_slot_6(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(53:4) <Button on:click={addInputChip}>",
    ctx: ctx
  });
  return block;
} // (59:12) <Text>


function create_default_slot_5(ctx) {
  var t_value =
  /*chip*/
  ctx[12].v + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*chip*/
      4096 && t_value !== (t_value =
      /*chip*/
      ctx[12].v + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(59:12) <Text>",
    ctx: ctx
  });
  return block;
} // (59:33) <Icon class="material-icons" trailing tabindex="0">


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("cancel");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "cancel");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(59:33) <Icon class=\\\"material-icons\\\" trailing tabindex=\\\"0\\\">",
    ctx: ctx
  });
  return block;
} // (59:6) <Chip>


function create_default_slot_3(ctx) {
  var current;
  var text_1 = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
      trailing: true,
      tabindex: "0",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[0] &
      /*$$scope, chip*/
      12288) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(59:6) <Chip>",
    ctx: ctx
  });
  return block;
} // (58:4) <Set chips={keyed} let:chip key={chip => chip.k} input>


function create_default_slot_2(ctx) {
  var current;
  var chip = new Chip({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(chip.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chip.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chip, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var chip_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        chip_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      chip.$set(chip_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chip.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chip.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chip, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(58:4) <Set chips={keyed} let:chip key={chip => chip.k} input>",
    ctx: ctx
  });
  return block;
} // (61:36) <Label>


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Add");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Add");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(61:36) <Label>",
    ctx: ctx
  });
  return block;
} // (61:4) <Button on:click={addKeyedChip}>


function create_default_slot(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(61:4) <Button on:click={addKeyedChip}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var t3;
  var div1;
  var t4;
  var updating_selected;
  var t5;
  var div2;
  var t6;
  var t7;
  var t8;
  var t9;
  var t10;
  var pre0;
  var t11;
  var t12;
  var t13;
  var div3;
  var t14;
  var updating_selected_1;
  var t15;
  var pre1;
  var t16;
  var t17_value =
  /*filter*/
  ctx[1].join(", ") + "";
  var t17;
  var t18;
  var div4;
  var t19;
  var t20;
  var t21;
  var div5;
  var t22;
  var t23;
  var current;
  var set0 = new Set({
    props: {
      chips: ["one", "two", "three", "four", "five"],
      $$slots: {
        default: [create_default_slot_25, function (_ref) {
          var chip = _ref.chip;
          return {
            12: chip
          };
        }, function (_ref2) {
          var chip = _ref2.chip;
          return [chip ? 4096 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function set1_selected_binding(value) {
    /*set1_selected_binding*/
    ctx[6].call(null, value);
  }

  var set1_props = {
    chips: ["Morning", "Afternoon", "Evening", "Night"],
    choice: true,
    $$slots: {
      default: [create_default_slot_23, function (_ref3) {
        var chip = _ref3.chip;
        return {
          12: chip
        };
      }, function (_ref4) {
        var chip = _ref4.chip;
        return [chip ? 4096 : 0];
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*choice*/
  ctx[0] !== void 0) {
    set1_props.selected =
    /*choice*/
    ctx[0];
  }

  var set1 = new Set({
    props: set1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(set1, "selected", set1_selected_binding);
  });
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[7]);
  var button1 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[8]);
  var button2 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_2*/
  ctx[9]);
  var button3 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click",
  /*click_handler_3*/
  ctx[10]);

  function set2_selected_binding(value_1) {
    /*set2_selected_binding*/
    ctx[11].call(null, value_1);
  }

  var set2_props = {
    chips: ["Shoes", "Pants", "Shirts", "Hats"],
    filter: true,
    $$slots: {
      default: [create_default_slot_12, function (_ref5) {
        var chip = _ref5.chip;
        return {
          12: chip
        };
      }, function (_ref6) {
        var chip = _ref6.chip;
        return [chip ? 4096 : 0];
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*filter*/
  ctx[1] !== void 0) {
    set2_props.selected =
    /*filter*/
    ctx[1];
  }

  var set2 = new Set({
    props: set2_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(set2, "selected", set2_selected_binding);
  });
  var set3 = new Set({
    props: {
      chips:
      /*input*/
      ctx[2],
      input: true,
      $$slots: {
        default: [create_default_slot_8, function (_ref7) {
          var chip = _ref7.chip;
          return {
            12: chip
          };
        }, function (_ref8) {
          var chip = _ref8.chip;
          return [chip ? 4096 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var button4 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click",
  /*addInputChip*/
  ctx[4]);
  var set4 = new Set({
    props: {
      chips:
      /*keyed*/
      ctx[3],
      key: func,
      input: true,
      $$slots: {
        default: [create_default_slot_2, function (_ref9) {
          var chip = _ref9.chip;
          return {
            12: chip
          };
        }, function (_ref10) {
          var chip = _ref10.chip;
          return [chip ? 4096 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var button5 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click",
  /*addKeyedChip*/
  ctx[5]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Chips");
      t2 = space();
      div0 = element("div");
      create_component(set0.$$.fragment);
      t3 = space();
      div1 = element("div");
      t4 = text("Choice Chips\n    ");
      create_component(set1.$$.fragment);
      t5 = space();
      div2 = element("div");
      t6 = text("Programmatically select:\n    ");
      create_component(button0.$$.fragment);
      t7 = space();
      create_component(button1.$$.fragment);
      t8 = space();
      create_component(button2.$$.fragment);
      t9 = space();
      create_component(button3.$$.fragment);
      t10 = space();
      pre0 = element("pre");
      t11 = text("Selected: ");
      t12 = text(
      /*choice*/
      ctx[0]);
      t13 = space();
      div3 = element("div");
      t14 = text("Filter Chips\n    ");
      create_component(set2.$$.fragment);
      t15 = space();
      pre1 = element("pre");
      t16 = text("Selected: ");
      t17 = text(t17_value);
      t18 = space();
      div4 = element("div");
      t19 = text("Input Chips\n    ");
      create_component(set3.$$.fragment);
      t20 = space();
      create_component(button4.$$.fragment);
      t21 = space();
      div5 = element("div");
      t22 = text("Keyed Chips\n    ");
      create_component(set4.$$.fragment);
      t23 = space();
      create_component(button5.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Chips");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(set0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "Choice Chips\n    ");
      claim_component(set1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "Programmatically select:\n    ");
      claim_component(button0.$$.fragment, div2_nodes);
      t7 = claim_space(div2_nodes);
      claim_component(button1.$$.fragment, div2_nodes);
      t8 = claim_space(div2_nodes);
      claim_component(button2.$$.fragment, div2_nodes);
      t9 = claim_space(div2_nodes);
      claim_component(button3.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t11 = claim_text(pre0_nodes, "Selected: ");
      t12 = claim_text(pre0_nodes,
      /*choice*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t14 = claim_text(div3_nodes, "Filter Chips\n    ");
      claim_component(set2.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t16 = claim_text(pre1_nodes, "Selected: ");
      t17 = claim_text(pre1_nodes, t17_value);
      pre1_nodes.forEach(detach_dev);
      t18 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t19 = claim_text(div4_nodes, "Input Chips\n    ");
      claim_component(set3.$$.fragment, div4_nodes);
      t20 = claim_space(div4_nodes);
      claim_component(button4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t21 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {});
      var div5_nodes = children(div5);
      t22 = claim_text(div5_nodes, "Keyed Chips\n    ");
      claim_component(set4.$$.fragment, div5_nodes);
      t23 = claim_space(div5_nodes);
      claim_component(button5.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Chips - SMUI";
      add_location(h2, file$3, 5, 2, 72);
      add_location(div0, file$3, 7, 2, 90);
      add_location(div1, file$3, 21, 2, 491);
      add_location(div2, file$3, 28, 2, 678);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$3, 36, 2, 1045);
      add_location(div3, file$3, 38, 2, 1093);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$3, 45, 2, 1298);
      add_location(div4, file$3, 47, 2, 1357);
      add_location(div5, file$3, 55, 2, 1608);
      add_location(section, file$3, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(set0, div0, null);
      append_dev(section, t3);
      append_dev(section, div1);
      append_dev(div1, t4);
      mount_component(set1, div1, null);
      append_dev(section, t5);
      append_dev(section, div2);
      append_dev(div2, t6);
      mount_component(button0, div2, null);
      append_dev(div2, t7);
      mount_component(button1, div2, null);
      append_dev(div2, t8);
      mount_component(button2, div2, null);
      append_dev(div2, t9);
      mount_component(button3, div2, null);
      append_dev(section, t10);
      append_dev(section, pre0);
      append_dev(pre0, t11);
      append_dev(pre0, t12);
      append_dev(section, t13);
      append_dev(section, div3);
      append_dev(div3, t14);
      mount_component(set2, div3, null);
      append_dev(section, t15);
      append_dev(section, pre1);
      append_dev(pre1, t16);
      append_dev(pre1, t17);
      append_dev(section, t18);
      append_dev(section, div4);
      append_dev(div4, t19);
      mount_component(set3, div4, null);
      append_dev(div4, t20);
      mount_component(button4, div4, null);
      append_dev(section, t21);
      append_dev(section, div5);
      append_dev(div5, t22);
      mount_component(set4, div5, null);
      append_dev(div5, t23);
      mount_component(button5, div5, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var set0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        set0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      set0.$set(set0_changes);
      var set1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        set1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_selected && dirty[0] &
      /*choice*/
      1) {
        updating_selected = true;
        set1_changes.selected =
        /*choice*/
        ctx[0];
        add_flush_callback(function () {
          return updating_selected = false;
        });
      }

      set1.$set(set1_changes);
      var button0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
      var button3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button3.$set(button3_changes);
      if (!current || dirty[0] &
      /*choice*/
      1) set_data_dev(t12,
      /*choice*/
      ctx[0]);
      var set2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        set2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_selected_1 && dirty[0] &
      /*filter*/
      2) {
        updating_selected_1 = true;
        set2_changes.selected =
        /*filter*/
        ctx[1];
        add_flush_callback(function () {
          return updating_selected_1 = false;
        });
      }

      set2.$set(set2_changes);
      if ((!current || dirty[0] &
      /*filter*/
      2) && t17_value !== (t17_value =
      /*filter*/
      ctx[1].join(", ") + "")) set_data_dev(t17, t17_value);
      var set3_changes = {};
      if (dirty[0] &
      /*input*/
      4) set3_changes.chips =
      /*input*/
      ctx[2];

      if (dirty[0] &
      /*$$scope*/
      8192) {
        set3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      set3.$set(set3_changes);
      var button4_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button4.$set(button4_changes);
      var set4_changes = {};
      if (dirty[0] &
      /*keyed*/
      8) set4_changes.chips =
      /*keyed*/
      ctx[3];

      if (dirty[0] &
      /*$$scope*/
      8192) {
        set4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      set4.$set(set4_changes);
      var button5_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button5.$set(button5_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(set0.$$.fragment, local);
      transition_in(set1.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(set2.$$.fragment, local);
      transition_in(set3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(set4.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(set0.$$.fragment, local);
      transition_out(set1.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(set2.$$.fragment, local);
      transition_out(set3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(set4.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(set0);
      destroy_component(set1);
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(set2);
      destroy_component(set3);
      destroy_component(button4);
      destroy_component(set4);
      destroy_component(button5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var func = function func(chip) {
  return chip.k;
};

function instance$3($$self, $$props, $$invalidate) {
  var choice = "Morning";
  var filter = ["Shoes", "Shirts"];
  var input = [1, 2, 3, 4];
  var keyed = [{
    k: 1,
    v: "Apple"
  }, {
    k: 2,
    v: "Apple"
  }, {
    k: 3,
    v: "Apple"
  }, {
    k: 4,
    v: "Apple"
  }];

  function addInputChip() {
    if (input.length) {
      input.push(input[input.length - 1] + 1);
      $$invalidate(2, input);
    } else {
      input.push(1);
      $$invalidate(2, input);
    }
  }

  function addKeyedChip() {
    if (keyed.length) {
      keyed.push({
        k: keyed[keyed.length - 1].k + 1,
        v: "Apple"
      });
      $$invalidate(3, keyed);
    } else {
      keyed.push({
        k: 1,
        v: "Apple"
      });
      $$invalidate(3, keyed);
    }
  }

  function set1_selected_binding(value) {
    choice = value;
    $$invalidate(0, choice);
  }

  var click_handler = function click_handler() {
    return $$invalidate(0, choice = "Morning");
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, choice = "Afternoon");
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, choice = "Evening");
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, choice = "Night");
  };

  function set2_selected_binding(value_1) {
    filter = value_1;
    $$invalidate(1, filter);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("choice" in $$props) $$invalidate(0, choice = $$props.choice);
    if ("filter" in $$props) $$invalidate(1, filter = $$props.filter);
    if ("input" in $$props) $$invalidate(2, input = $$props.input);
    if ("keyed" in $$props) $$invalidate(3, keyed = $$props.keyed);
  };

  return [choice, filter, input, keyed, addInputChip, addKeyedChip, set1_selected_binding, click_handler, click_handler_1, click_handler_2, click_handler_3, set2_selected_binding];
}

var Chips =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Chips, _SvelteComponentDev);

  function Chips(options) {
    var _this;

    _classCallCheck$1(this, Chips);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Chips).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Chips",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return Chips;
}(SvelteComponentDev);

export default Chips;
