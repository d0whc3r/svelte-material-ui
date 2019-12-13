import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, b as current_component, a3 as getContext, C as onMount, a4 as onDestroy, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, P as append_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, F as binding_callbacks, G as globals, a2 as setContext, I as create_component, J as claim_component, K as mount_component, a1 as get_spread_object, L as destroy_component, O as attr_dev, M as space, N as claim_space, E as listen_dev, R as group_outros, T as check_outros, D as empty, U as update_keyed_each, V as outro_and_destroy_block, v as _inherits$1, w as _classCallCheck$1, x as _possibleConstructorReturn$1, y as _getPrototypeOf$1, z as _assertThisInitialized$1, ac as _toConsumableArray, W as text, X as claim_text, Z as set_style, $ as set_data_dev, aa as destroy_each, H as bind, Q as add_flush_callback, n as noop } from './index.0812fa32.js';
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
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';

var css = ".mdc-tab{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;height:48px;margin:0;padding:0 24px;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0,0,0,.6)}.mdc-tab .mdc-tab__icon{color:rgba(0,0,0,.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__icon,.mdc-tab__text-label{transition:color .15s linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--stacked{height:72px}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:space-between}.mdc-tab--stacked .mdc-tab__icon{padding-top:12px}.mdc-tab--stacked .mdc-tab__text-label{padding-bottom:16px}.mdc-tab--active .mdc-tab__icon,.mdc-tab--active .mdc-tab__text-label{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-tab--active .mdc-tab__icon{fill:currentColor}.mdc-tab--active .mdc-tab__icon,.mdc-tab--active .mdc-tab__text-label{transition-delay:.1s}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl],[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-tab__ripple{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple:after,.mdc-tab__ripple:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-tab__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-tab__ripple.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-tab__ripple.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-tab__ripple:after,.mdc-tab__ripple:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-tab__ripple:after,.mdc-tab__ripple:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-tab__ripple:after,.mdc-tab__ripple:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-tab__ripple:hover:before{opacity:.04}.mdc-tab__ripple.mdc-ripple-upgraded--background-focused:before,.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-tab__ripple:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#676778;color:var(--mdc-theme-secondary,#676778)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:transform .25s cubic-bezier(.4,0,.2,1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:opacity .15s linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:.1s}";
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
var cssClasses$1 = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  NO_TRANSITION: 'mdc-tab-indicator--no-transition'
};
var strings$1 = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};

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

var MDCTabIndicatorFoundation =
/** @class */
function (_super) {
  __extends(MDCTabIndicatorFoundation, _super);

  function MDCTabIndicatorFoundation(adapter) {
    return _super.call(this, _assign({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        computeContentClientRect: function computeContentClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        setContentStyleProperty: function setContentStyleProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
    return this.adapter_.computeContentClientRect();
  };

  return MDCTabIndicatorFoundation;
}(MDCFoundation);

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
/* istanbul ignore next: subclass is not a branch statement */

var MDCFadingTabIndicatorFoundation =
/** @class */
function (_super) {
  __extends(MDCFadingTabIndicatorFoundation, _super);

  function MDCFadingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFadingTabIndicatorFoundation.prototype.activate = function () {
    this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };

  MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };

  return MDCFadingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation);

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
/* istanbul ignore next: subclass is not a branch statement */

var MDCSlidingTabIndicatorFoundation =
/** @class */
function (_super) {
  __extends(MDCSlidingTabIndicatorFoundation, _super);

  function MDCSlidingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect) {
      this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      return;
    } // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/
    // Calculate the dimensions based on the dimensions of the previous indicator


    var currentClientRect = this.computeContentClientRect();
    var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
    this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")"); // Force repaint before updating classes and transform to ensure the transform properly takes effect

    this.computeContentClientRect();
    this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
    this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    this.adapter_.setContentStyleProperty('transform', '');
  };

  MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };

  return MDCSlidingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation);

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

var MDCTabIndicator =
/** @class */
function (_super) {
  __extends(MDCTabIndicator, _super);

  function MDCTabIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabIndicator.attachTo = function (root) {
    return new MDCTabIndicator(root);
  };

  MDCTabIndicator.prototype.initialize = function () {
    this.content_ = this.root_.querySelector(MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
  };

  MDCTabIndicator.prototype.computeContentClientRect = function () {
    return this.foundation_.computeContentClientRect();
  };

  MDCTabIndicator.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      computeContentClientRect: function computeContentClientRect() {
        return _this.content_.getBoundingClientRect();
      },
      setContentStyleProperty: function setContentStyleProperty(prop, value) {
        return _this.content_.style.setProperty(prop, value);
      }
    }; // tslint:enable:object-literal-sort-keys

    if (this.root_.classList.contains(MDCTabIndicatorFoundation.cssClasses.FADE)) {
      return new MDCFadingTabIndicatorFoundation(adapter);
    } // Default to the sliding indicator


    return new MDCSlidingTabIndicatorFoundation(adapter);
  };

  MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
    this.foundation_.activate(previousIndicatorClientRect);
  };

  MDCTabIndicator.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  return MDCTabIndicator;
}(MDCComponent);

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
var cssClasses$2 = {
  ACTIVE: 'mdc-tab--active'
};
var strings$2 = {
  ARIA_SELECTED: 'aria-selected',
  CONTENT_SELECTOR: '.mdc-tab__content',
  INTERACTED_EVENT: 'MDCTab:interacted',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  TABINDEX: 'tabIndex',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator'
};

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

var MDCTabFoundation =
/** @class */
function (_super) {
  __extends(MDCTabFoundation, _super);

  function MDCTabFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCTabFoundation.defaultAdapter, adapter)) || this;

    _this.focusOnActivate_ = true;
    return _this;
  }

  Object.defineProperty(MDCTabFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation, "strings", {
    get: function get() {
      return strings$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        activateIndicator: function activateIndicator() {
          return undefined;
        },
        deactivateIndicator: function deactivateIndicator() {
          return undefined;
        },
        notifyInteracted: function notifyInteracted() {
          return undefined;
        },
        getOffsetLeft: function getOffsetLeft() {
          return 0;
        },
        getOffsetWidth: function getOffsetWidth() {
          return 0;
        },
        getContentOffsetLeft: function getContentOffsetLeft() {
          return 0;
        },
        getContentOffsetWidth: function getContentOffsetWidth() {
          return 0;
        },
        focus: function focus() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabFoundation.prototype.handleClick = function () {
    // It's up to the parent component to keep track of the active Tab and
    // ensure we don't activate a Tab that's already active.
    this.adapter_.notifyInteracted();
  };

  MDCTabFoundation.prototype.isActive = function () {
    return this.adapter_.hasClass(cssClasses$2.ACTIVE);
  };
  /**
   * Sets whether the tab should focus itself when activated
   */


  MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
    this.focusOnActivate_ = focusOnActivate;
  };
  /**
   * Activates the Tab
   */


  MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
    this.adapter_.addClass(cssClasses$2.ACTIVE);
    this.adapter_.setAttr(strings$2.ARIA_SELECTED, 'true');
    this.adapter_.setAttr(strings$2.TABINDEX, '0');
    this.adapter_.activateIndicator(previousIndicatorClientRect);

    if (this.focusOnActivate_) {
      this.adapter_.focus();
    }
  };
  /**
   * Deactivates the Tab
   */


  MDCTabFoundation.prototype.deactivate = function () {
    // Early exit
    if (!this.isActive()) {
      return;
    }

    this.adapter_.removeClass(cssClasses$2.ACTIVE);
    this.adapter_.setAttr(strings$2.ARIA_SELECTED, 'false');
    this.adapter_.setAttr(strings$2.TABINDEX, '-1');
    this.adapter_.deactivateIndicator();
  };
  /**
   * Returns the dimensions of the Tab
   */


  MDCTabFoundation.prototype.computeDimensions = function () {
    var rootWidth = this.adapter_.getOffsetWidth();
    var rootLeft = this.adapter_.getOffsetLeft();
    var contentWidth = this.adapter_.getContentOffsetWidth();
    var contentLeft = this.adapter_.getContentOffsetLeft();
    return {
      contentLeft: rootLeft + contentLeft,
      contentRight: rootLeft + contentLeft + contentWidth,
      rootLeft: rootLeft,
      rootRight: rootLeft + rootWidth
    };
  };

  return MDCTabFoundation;
}(MDCFoundation);

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

var MDCTab =
/** @class */
function (_super) {
  __extends(MDCTab, _super);

  function MDCTab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTab.attachTo = function (root) {
    return new MDCTab(root);
  };

  MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }

    if (tabIndicatorFactory === void 0) {
      tabIndicatorFactory = function tabIndicatorFactory(el) {
        return new MDCTabIndicator(el);
      };
    }

    this.id = this.root_.id;
    var rippleSurface = this.root_.querySelector(MDCTabFoundation.strings.RIPPLE_SELECTOR);

    var rippleAdapter = _assign({}, MDCRipple.createAdapter(this), {
      addClass: function addClass(className) {
        return rippleSurface.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return rippleSurface.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return rippleSurface.style.setProperty(varName, value);
      }
    });

    var rippleFoundation = new MDCRippleFoundation(rippleAdapter);
    this.ripple_ = rippleFactory(this.root_, rippleFoundation);
    var tabIndicatorElement = this.root_.querySelector(MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
    this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
    this.content_ = this.root_.querySelector(MDCTabFoundation.strings.CONTENT_SELECTOR);
  };

  MDCTab.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleClick_ = function () {
      return _this.foundation_.handleClick();
    };

    this.listen('click', this.handleClick_);
  };

  MDCTab.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.ripple_.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCTab.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      activateIndicator: function activateIndicator(previousIndicatorClientRect) {
        return _this.tabIndicator_.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: function deactivateIndicator() {
        return _this.tabIndicator_.deactivate();
      },
      notifyInteracted: function notifyInteracted() {
        return _this.emit(MDCTabFoundation.strings.INTERACTED_EVENT, {
          tabId: _this.id
        }, true
        /* bubble */
        );
      },
      getOffsetLeft: function getOffsetLeft() {
        return _this.root_.offsetLeft;
      },
      getOffsetWidth: function getOffsetWidth() {
        return _this.root_.offsetWidth;
      },
      getContentOffsetLeft: function getContentOffsetLeft() {
        return _this.content_.offsetLeft;
      },
      getContentOffsetWidth: function getContentOffsetWidth() {
        return _this.content_.offsetWidth;
      },
      focus: function focus() {
        return _this.root_.focus();
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTabFoundation(adapter);
  };

  Object.defineProperty(MDCTab.prototype, "active", {
    /**
     * Getter for the active state of the tab
     */
    get: function get() {
      return this.foundation_.isActive();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
    set: function set(focusOnActivate) {
      this.foundation_.setFocusOnActivate(focusOnActivate);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Activates the tab
   */

  MDCTab.prototype.activate = function (computeIndicatorClientRect) {
    this.foundation_.activate(computeIndicatorClientRect);
  };
  /**
   * Deactivates the tab
   */


  MDCTab.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Returns the indicator's client rect
   */


  MDCTab.prototype.computeIndicatorClientRect = function () {
    return this.tabIndicator_.computeContentClientRect();
  };

  MDCTab.prototype.computeDimensions = function () {
    return this.foundation_.computeDimensions();
  };
  /**
   * Focuses the tab
   */


  MDCTab.prototype.focus = function () {
    this.root_.focus();
  };

  return MDCTab;
}(MDCComponent);

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
var _extendStatics$1 = function extendStatics(d, b) {
  _extendStatics$1 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics$1(d, b);
};

function __extends$1(d, b) {
  _extendStatics$1(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign$1 = function __assign() {
  _assign$1 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign$1.apply(this, arguments);
};
function __read$1(o, n) {
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
function __spread$1() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$1(arguments[i]));
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
var MDCFoundation$1 =
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

var MDCComponent$1 =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread$1(args)); // Note that we initialize foundation here and not within the constructor's default param so that
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
    return new MDCComponent(root, new MDCFoundation$1({}));
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
var cssClasses$3 = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  NO_TRANSITION: 'mdc-tab-indicator--no-transition'
};
var strings$3 = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};

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

var MDCTabIndicatorFoundation$1 =
/** @class */
function (_super) {
  __extends$1(MDCTabIndicatorFoundation, _super);

  function MDCTabIndicatorFoundation(adapter) {
    return _super.call(this, _assign$1({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
    get: function get() {
      return strings$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        computeContentClientRect: function computeContentClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        setContentStyleProperty: function setContentStyleProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
    return this.adapter_.computeContentClientRect();
  };

  return MDCTabIndicatorFoundation;
}(MDCFoundation$1);

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
/* istanbul ignore next: subclass is not a branch statement */

var MDCFadingTabIndicatorFoundation$1 =
/** @class */
function (_super) {
  __extends$1(MDCFadingTabIndicatorFoundation, _super);

  function MDCFadingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFadingTabIndicatorFoundation.prototype.activate = function () {
    this.adapter_.addClass(MDCTabIndicatorFoundation$1.cssClasses.ACTIVE);
  };

  MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(MDCTabIndicatorFoundation$1.cssClasses.ACTIVE);
  };

  return MDCFadingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation$1);

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
/* istanbul ignore next: subclass is not a branch statement */

var MDCSlidingTabIndicatorFoundation$1 =
/** @class */
function (_super) {
  __extends$1(MDCSlidingTabIndicatorFoundation, _super);

  function MDCSlidingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect) {
      this.adapter_.addClass(MDCTabIndicatorFoundation$1.cssClasses.ACTIVE);
      return;
    } // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/
    // Calculate the dimensions based on the dimensions of the previous indicator


    var currentClientRect = this.computeContentClientRect();
    var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    this.adapter_.addClass(MDCTabIndicatorFoundation$1.cssClasses.NO_TRANSITION);
    this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")"); // Force repaint before updating classes and transform to ensure the transform properly takes effect

    this.computeContentClientRect();
    this.adapter_.removeClass(MDCTabIndicatorFoundation$1.cssClasses.NO_TRANSITION);
    this.adapter_.addClass(MDCTabIndicatorFoundation$1.cssClasses.ACTIVE);
    this.adapter_.setContentStyleProperty('transform', '');
  };

  MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(MDCTabIndicatorFoundation$1.cssClasses.ACTIVE);
  };

  return MDCSlidingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation$1);

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

var MDCTabIndicator$1 =
/** @class */
function (_super) {
  __extends$1(MDCTabIndicator, _super);

  function MDCTabIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabIndicator.attachTo = function (root) {
    return new MDCTabIndicator(root);
  };

  MDCTabIndicator.prototype.initialize = function () {
    this.content_ = this.root_.querySelector(MDCTabIndicatorFoundation$1.strings.CONTENT_SELECTOR);
  };

  MDCTabIndicator.prototype.computeContentClientRect = function () {
    return this.foundation_.computeContentClientRect();
  };

  MDCTabIndicator.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      computeContentClientRect: function computeContentClientRect() {
        return _this.content_.getBoundingClientRect();
      },
      setContentStyleProperty: function setContentStyleProperty(prop, value) {
        return _this.content_.style.setProperty(prop, value);
      }
    }; // tslint:enable:object-literal-sort-keys

    if (this.root_.classList.contains(MDCTabIndicatorFoundation$1.cssClasses.FADE)) {
      return new MDCFadingTabIndicatorFoundation$1(adapter);
    } // Default to the sliding indicator


    return new MDCSlidingTabIndicatorFoundation$1(adapter);
  };

  MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
    this.foundation_.activate(previousIndicatorClientRect);
  };

  MDCTabIndicator.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  return MDCTabIndicator;
}(MDCComponent$1);

var file = "home/hperrin/repos/svelte-material-ui/packages/tab-indicator/TabIndicator.svelte";

function create_fragment(ctx) {
  var span1;
  var span0;
  var useActions_action;
  var useActions_action_1;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[17].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[16], null);
  var span0_levels = [{
    class: "\n      mdc-tab-indicator__content\n      " +
    /*content$class*/
    ctx[6] + "\n      " + (
    /*type*/
    ctx[3] === "underline" ? "mdc-tab-indicator__content--underline" : "") + "\n      " + (
    /*type*/
    ctx[3] === "icon" ? "mdc-tab-indicator__content--icon" : "") + "\n    "
  }, {
    "aria-hidden":
    /*type*/
    ctx[3] === "icon" ? "true" : "false"
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[9], "content$"), ["use", "class"])];
  var span0_data = {};

  for (var i = 0; i < span0_levels.length; i += 1) {
    span0_data = assign(span0_data, span0_levels[i]);
  }

  var span1_levels = [{
    class: "\n    mdc-tab-indicator\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*active*/
    ctx[2] ? "mdc-tab-indicator--active" : "") + "\n    " + (
    /*transition*/
    ctx[4] === "fade" ? "mdc-tab-indicator--fade" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[9], ["use", "class", "active", "type", "transition", "content$"])];
  var span1_data = {};

  for (var _i = 0; _i < span1_levels.length; _i += 1) {
    span1_data = assign(span1_data, span1_levels[_i]);
  }

  var block = {
    c: function create() {
      span1 = element("span");
      span0 = element("span");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      span1 = claim_element(nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      span0 = claim_element(span1_nodes, "SPAN", {
        class: true,
        "aria-hidden": true
      });
      var span0_nodes = children(span0);
      if (default_slot) default_slot.l(span0_nodes);
      span0_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(span0, span0_data);
      add_location(span0, file, 12, 2, 322);
      set_attributes(span1, span1_data);
      add_location(span1, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span1, anchor);
      append_dev(span1, span0);

      if (default_slot) {
        default_slot.m(span0, null);
      }

      useActions_action = useActions.call(null, span0,
      /*content$use*/
      ctx[5]) || {};
      /*span1_binding*/

      ctx[18](span1);
      useActions_action_1 = useActions.call(null, span1,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[8].call(null, span1) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      65536) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[16], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[16], dirty, null));
      }

      set_attributes(span0, get_spread_update(span0_levels, [dirty[0] &
      /*content$class, type*/
      72 && {
        class: "\n      mdc-tab-indicator__content\n      " +
        /*content$class*/
        ctx[6] + "\n      " + (
        /*type*/
        ctx[3] === "underline" ? "mdc-tab-indicator__content--underline" : "") + "\n      " + (
        /*type*/
        ctx[3] === "icon" ? "mdc-tab-indicator__content--icon" : "") + "\n    "
      }, dirty[0] &
      /*type*/
      8 && {
        "aria-hidden":
        /*type*/
        ctx[3] === "icon" ? "true" : "false"
      }, dirty[0] &
      /*$$props*/
      512 && exclude(prefixFilter(
      /*$$props*/
      ctx[9], "content$"), ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*content$use*/
      32) useActions_action.update.call(null,
      /*content$use*/
      ctx[5]);
      set_attributes(span1, get_spread_update(span1_levels, [dirty[0] &
      /*className, active, transition*/
      22 && {
        class: "\n    mdc-tab-indicator\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*active*/
        ctx[2] ? "mdc-tab-indicator--active" : "") + "\n    " + (
        /*transition*/
        ctx[4] === "fade" ? "mdc-tab-indicator--fade" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      512 && exclude(
      /*$$props*/
      ctx[9], ["use", "class", "active", "type", "transition", "content$"])]));
      if (is_function(useActions_action_1.update) && dirty[0] &
      /*use*/
      1) useActions_action_1.update.call(null,
      /*use*/
      ctx[0]);
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
      if (detaching) detach_dev(span1);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      /*span1_binding*/

      ctx[18](null);
      if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$active = _$$props3.active,
      active = _$$props3$active === void 0 ? false : _$$props3$active;
  var _$$props4 = $$props,
      _$$props4$type = _$$props4.type,
      type = _$$props4$type === void 0 ? "underline" : _$$props4$type;
  var _$$props5 = $$props,
      _$$props5$transition = _$$props5.transition,
      transition = _$$props5$transition === void 0 ? "slide" : _$$props5$transition;
  var _$$props6 = $$props,
      _$$props6$content$use = _$$props6.content$use,
      content$use = _$$props6$content$use === void 0 ? [] : _$$props6$content$use;
  var _$$props7 = $$props,
      _$$props7$content$cla = _$$props7.content$class,
      content$class = _$$props7$content$cla === void 0 ? "" : _$$props7$content$cla;
  var element;
  var tabIndicator;
  var instantiate = getContext("SMUI:tab-indicator:instantiate");
  var getInstance = getContext("SMUI:tab-indicator:getInstance");
  onMount(function _callee() {
    return _regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(instantiate !== false)) {
              _context.next = 4;
              break;
            }

            tabIndicator = new MDCTabIndicator$1(element);
            _context.next = 7;
            break;

          case 4:
            _context.next = 6;
            return _regeneratorRuntime.awrap(getInstance());

          case 6:
            tabIndicator = _context.sent;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  onDestroy(function () {
    tabIndicator && tabIndicator.destroy();
  });

  function activate() {
    var _tabIndicator;

    return (_tabIndicator = tabIndicator).activate.apply(_tabIndicator, arguments);
  }

  function deactivate() {
    var _tabIndicator2;

    return (_tabIndicator2 = tabIndicator).deactivate.apply(_tabIndicator2, arguments);
  }

  function computeContentClientRect() {
    var _tabIndicator3;

    return (_tabIndicator3 = tabIndicator).computeContentClientRect.apply(_tabIndicator3, arguments);
  }

  var _$$props8 = $$props,
      _$$props8$$$slots = _$$props8.$$slots,
      $$slots = _$$props8$$$slots === void 0 ? {} : _$$props8$$$slots,
      $$scope = _$$props8.$$scope;

  function span1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(7, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("active" in $$new_props) $$invalidate(2, active = $$new_props.active);
    if ("type" in $$new_props) $$invalidate(3, type = $$new_props.type);
    if ("transition" in $$new_props) $$invalidate(4, transition = $$new_props.transition);
    if ("content$use" in $$new_props) $$invalidate(5, content$use = $$new_props.content$use);
    if ("content$class" in $$new_props) $$invalidate(6, content$class = $$new_props.content$class);
    if ("$$scope" in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      active: active,
      type: type,
      transition: transition,
      content$use: content$use,
      content$class: content$class,
      element: element,
      tabIndicator: tabIndicator,
      instantiate: instantiate,
      getInstance: getInstance
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(9, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("active" in $$props) $$invalidate(2, active = $$new_props.active);
    if ("type" in $$props) $$invalidate(3, type = $$new_props.type);
    if ("transition" in $$props) $$invalidate(4, transition = $$new_props.transition);
    if ("content$use" in $$props) $$invalidate(5, content$use = $$new_props.content$use);
    if ("content$class" in $$props) $$invalidate(6, content$class = $$new_props.content$class);
    if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
    if ("tabIndicator" in $$props) tabIndicator = $$new_props.tabIndicator;
    if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
    if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
  };

  $$props = exclude_internal_props($$props);
  return [use, className, active, type, transition, content$use, content$class, element, forwardEvents, $$props, activate, deactivate, computeContentClientRect, tabIndicator, instantiate, getInstance, $$scope, $$slots, span1_binding];
}

var TabIndicator =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(TabIndicator, _SvelteComponentDev);

  function TabIndicator(options) {
    var _this;

    _classCallCheck(this, TabIndicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabIndicator).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      active: 2,
      type: 3,
      transition: 4,
      content$use: 5,
      content$class: 6,
      activate: 10,
      deactivate: 11,
      computeContentClientRect: 12
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TabIndicator",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(TabIndicator, [{
    key: "use",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "active",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "transition",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "content$use",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "content$class",
    get: function get() {
      throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activate",
    get: function get() {
      return this.$$.ctx[10];
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "deactivate",
    get: function get() {
      return this.$$.ctx[11];
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "computeContentClientRect",
    get: function get() {
      return this.$$.ctx[12];
    },
    set: function set(value) {
      throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TabIndicator;
}(SvelteComponentDev);

var Error_1 = globals.Error;
var file$1 = "home/hperrin/repos/svelte-material-ui/packages/tab/Tab.svelte";

var get_tab_indicator_slot_changes_1 = function get_tab_indicator_slot_changes_1(dirty) {
  return {};
};

var get_tab_indicator_slot_context_1 = function get_tab_indicator_slot_context_1(ctx) {
  return {};
};

var get_tab_indicator_slot_changes = function get_tab_indicator_slot_changes(dirty) {
  return {};
};

var get_tab_indicator_slot_context = function get_tab_indicator_slot_context(ctx) {
  return {};
}; // (24:4) {#if indicatorSpanOnlyContent}


function create_if_block_2(ctx) {
  var current;
  var tabindicator_spread_levels = [{
    active:
    /*active*/
    ctx[0]
  }, prefixFilter(
  /*$$props*/
  ctx[12], "tabIndicator$")];
  var tabindicator_props = {
    $$slots: {
      default: [create_default_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < tabindicator_spread_levels.length; i += 1) {
    tabindicator_props = assign(tabindicator_props, tabindicator_spread_levels[i]);
  }

  var tabindicator = new TabIndicator({
    props: tabindicator_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(tabindicator.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tabindicator.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tabindicator, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tabindicator_changes = dirty[0] &
      /*active, $$props*/
      4097 ? get_spread_update(tabindicator_spread_levels, [dirty[0] &
      /*active*/
      1 && {
        active:
        /*active*/
        ctx[0]
      }, dirty[0] &
      /*$$props*/
      4096 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[12], "tabIndicator$"))]) : {};

      if (dirty[0] &
      /*$$scope*/
      536870912) {
        tabindicator_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabindicator.$set(tabindicator_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tabindicator.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabindicator.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tabindicator, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(24:4) {#if indicatorSpanOnlyContent}",
    ctx: ctx
  });
  return block;
} // (25:6) <TabIndicator         {active}         {...prefixFilter($$props, 'tabIndicator$')}       >


function create_default_slot_1(ctx) {
  var current;
  var tab_indicator_slot_template =
  /*$$slots*/
  ctx[27]["tab-indicator"];
  var tab_indicator_slot = create_slot(tab_indicator_slot_template, ctx,
  /*$$scope*/
  ctx[29], get_tab_indicator_slot_context);
  var block = {
    c: function create() {
      if (tab_indicator_slot) tab_indicator_slot.c();
    },
    l: function claim(nodes) {
      if (tab_indicator_slot) tab_indicator_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (tab_indicator_slot) {
        tab_indicator_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (tab_indicator_slot && tab_indicator_slot.p && dirty[0] &
      /*$$scope*/
      536870912) {
        tab_indicator_slot.p(get_slot_context(tab_indicator_slot_template, ctx,
        /*$$scope*/
        ctx[29], get_tab_indicator_slot_context), get_slot_changes(tab_indicator_slot_template,
        /*$$scope*/
        ctx[29], dirty, get_tab_indicator_slot_changes));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab_indicator_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab_indicator_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (tab_indicator_slot) tab_indicator_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(25:6) <TabIndicator         {active}         {...prefixFilter($$props, 'tabIndicator$')}       >",
    ctx: ctx
  });
  return block;
} // (31:2) {#if !indicatorSpanOnlyContent}


function create_if_block_1(ctx) {
  var current;
  var tabindicator_spread_levels = [{
    active:
    /*active*/
    ctx[0]
  }, prefixFilter(
  /*$$props*/
  ctx[12], "tabIndicator$")];
  var tabindicator_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < tabindicator_spread_levels.length; i += 1) {
    tabindicator_props = assign(tabindicator_props, tabindicator_spread_levels[i]);
  }

  var tabindicator = new TabIndicator({
    props: tabindicator_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(tabindicator.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tabindicator.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tabindicator, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tabindicator_changes = dirty[0] &
      /*active, $$props*/
      4097 ? get_spread_update(tabindicator_spread_levels, [dirty[0] &
      /*active*/
      1 && {
        active:
        /*active*/
        ctx[0]
      }, dirty[0] &
      /*$$props*/
      4096 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[12], "tabIndicator$"))]) : {};

      if (dirty[0] &
      /*$$scope*/
      536870912) {
        tabindicator_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabindicator.$set(tabindicator_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tabindicator.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabindicator.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tabindicator, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(31:2) {#if !indicatorSpanOnlyContent}",
    ctx: ctx
  });
  return block;
} // (32:4) <TabIndicator       {active}       {...prefixFilter($$props, 'tabIndicator$')}     >


function create_default_slot(ctx) {
  var current;
  var tab_indicator_slot_template =
  /*$$slots*/
  ctx[27]["tab-indicator"];
  var tab_indicator_slot = create_slot(tab_indicator_slot_template, ctx,
  /*$$scope*/
  ctx[29], get_tab_indicator_slot_context_1);
  var block = {
    c: function create() {
      if (tab_indicator_slot) tab_indicator_slot.c();
    },
    l: function claim(nodes) {
      if (tab_indicator_slot) tab_indicator_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (tab_indicator_slot) {
        tab_indicator_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (tab_indicator_slot && tab_indicator_slot.p && dirty[0] &
      /*$$scope*/
      536870912) {
        tab_indicator_slot.p(get_slot_context(tab_indicator_slot_template, ctx,
        /*$$scope*/
        ctx[29], get_tab_indicator_slot_context_1), get_slot_changes(tab_indicator_slot_template,
        /*$$scope*/
        ctx[29], dirty, get_tab_indicator_slot_changes_1));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab_indicator_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab_indicator_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (tab_indicator_slot) tab_indicator_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(32:4) <TabIndicator       {active}       {...prefixFilter($$props, 'tabIndicator$')}     >",
    ctx: ctx
  });
  return block;
} // (37:2) {#if ripple}


function create_if_block(ctx) {
  var span;
  var block = {
    c: function create() {
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      children(span).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "mdc-tab__ripple");
      add_location(span, file$1, 37, 4, 1093);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(37:2) {#if ripple}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var button;
  var span;
  var t0;
  var useActions_action;
  var t1;
  var t2;
  var useActions_action_1;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[27].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[29], null);
  var if_block0 =
  /*indicatorSpanOnlyContent*/
  ctx[6] && create_if_block_2(ctx);
  var span_levels = [{
    class: "mdc-tab__content " +
    /*content$class*/
    ctx[8]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[12], "content$"), ["use", "class"])];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }

  var if_block1 = !
  /*indicatorSpanOnlyContent*/
  ctx[6] && create_if_block_1(ctx);
  var if_block2 =
  /*ripple*/
  ctx[3] && create_if_block(ctx);
  var button_levels = [{
    class: "\n    mdc-tab\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*active*/
    ctx[0] ? "mdc-tab--active" : "") + "\n    " + (
    /*stacked*/
    ctx[4] ? "mdc-tab--stacked" : "") + "\n    " + (
    /*minWidth*/
    ctx[5] ? "mdc-tab--min-width" : "") + "\n  "
  }, {
    role: "tab"
  }, {
    "aria-selected":
    /*active*/
    ctx[0]
  }, {
    tabindex:
    /*active*/
    ctx[0] ? "0" : "-1"
  }, exclude(
  /*$$props*/
  ctx[12], ["use", "class", "ripple", "active", "stacked", "minWidth", "indicatorSpanOnlyContent", "focusOnActivate", "content$", "tabIndicator$"])];
  var button_data = {};

  for (var _i = 0; _i < button_levels.length; _i += 1) {
    button_data = assign(button_data, button_levels[_i]);
  }

  var block = {
    c: function create() {
      button = element("button");
      span = element("span");
      if (default_slot) default_slot.c();
      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      t2 = space();
      if (if_block2) if_block2.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true,
        role: true,
        "aria-selected": true,
        tabindex: true
      });
      var button_nodes = children(button);
      span = claim_element(button_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      if (default_slot) default_slot.l(span_nodes);
      t0 = claim_space(span_nodes);
      if (if_block0) if_block0.l(span_nodes);
      span_nodes.forEach(detach_dev);
      t1 = claim_space(button_nodes);
      if (if_block1) if_block1.l(button_nodes);
      t2 = claim_space(button_nodes);
      if (if_block2) if_block2.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(span, span_data);
      add_location(span, file$1, 17, 2, 517);
      set_attributes(button, button_data);
      add_location(button, file$1, 0, 0, 0);
      dispose = listen_dev(button, "MDCTab:interacted",
      /*interactedHandler*/
      ctx[11], false, false, false);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, span);

      if (default_slot) {
        default_slot.m(span, null);
      }

      append_dev(span, t0);
      if (if_block0) if_block0.m(span, null);
      useActions_action = useActions.call(null, span,
      /*content$use*/
      ctx[7]) || {};
      append_dev(button, t1);
      if (if_block1) if_block1.m(button, null);
      append_dev(button, t2);
      if (if_block2) if_block2.m(button, null);
      /*button_binding*/

      ctx[28](button);
      useActions_action_1 = useActions.call(null, button,
      /*use*/
      ctx[1]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[10].call(null, button) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      536870912) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[29], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[29], dirty, null));
      }

      if (
      /*indicatorSpanOnlyContent*/
      ctx[6]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          transition_in(if_block0, 1);
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(span, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      set_attributes(span, get_spread_update(span_levels, [dirty[0] &
      /*content$class*/
      256 && {
        class: "mdc-tab__content " +
        /*content$class*/
        ctx[8]
      }, dirty[0] &
      /*$$props*/
      4096 && exclude(prefixFilter(
      /*$$props*/
      ctx[12], "content$"), ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*content$use*/
      128) useActions_action.update.call(null,
      /*content$use*/
      ctx[7]);

      if (!
      /*indicatorSpanOnlyContent*/
      ctx[6]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          transition_in(if_block1, 1);
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(button, t2);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (
      /*ripple*/
      ctx[3]) {
        if (!if_block2) {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          if_block2.m(button, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      set_attributes(button, get_spread_update(button_levels, [dirty[0] &
      /*className, active, stacked, minWidth*/
      53 && {
        class: "\n    mdc-tab\n    " +
        /*className*/
        ctx[2] + "\n    " + (
        /*active*/
        ctx[0] ? "mdc-tab--active" : "") + "\n    " + (
        /*stacked*/
        ctx[4] ? "mdc-tab--stacked" : "") + "\n    " + (
        /*minWidth*/
        ctx[5] ? "mdc-tab--min-width" : "") + "\n  "
      }, {
        role: "tab"
      }, dirty[0] &
      /*active*/
      1 && {
        "aria-selected":
        /*active*/
        ctx[0]
      }, dirty[0] &
      /*active*/
      1 && {
        tabindex:
        /*active*/
        ctx[0] ? "0" : "-1"
      }, dirty[0] &
      /*$$props*/
      4096 && exclude(
      /*$$props*/
      ctx[12], ["use", "class", "ripple", "active", "stacked", "minWidth", "indicatorSpanOnlyContent", "focusOnActivate", "content$", "tabIndicator$"])]));
      if (is_function(useActions_action_1.update) && dirty[0] &
      /*use*/
      2) useActions_action_1.update.call(null,
      /*use*/
      ctx[1]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      if (default_slot) default_slot.d(detaching);
      if (if_block0) if_block0.d();
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      /*button_binding*/

      ctx[28](null);
      if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      dispose();
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
  var forwardEvents = forwardEventsBuilder(current_component, ["MDCTab:interacted"]);
  var activeEntry = getContext("SMUI:tab:active");
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      tabEntry = _$$props3.tab;
  var _$$props4 = $$props,
      _$$props4$ripple = _$$props4.ripple,
      ripple = _$$props4$ripple === void 0 ? true : _$$props4$ripple;
  var _$$props5 = $$props,
      _$$props5$active = _$$props5.active,
      active = _$$props5$active === void 0 ? tabEntry === activeEntry : _$$props5$active;
  var _$$props6 = $$props,
      _$$props6$stacked = _$$props6.stacked,
      stacked = _$$props6$stacked === void 0 ? false : _$$props6$stacked;
  var _$$props7 = $$props,
      _$$props7$minWidth = _$$props7.minWidth,
      minWidth = _$$props7$minWidth === void 0 ? false : _$$props7$minWidth;
  var _$$props8 = $$props,
      _$$props8$indicatorSp = _$$props8.indicatorSpanOnlyContent,
      indicatorSpanOnlyContent = _$$props8$indicatorSp === void 0 ? false : _$$props8$indicatorSp;
  var _$$props9 = $$props,
      _$$props9$focusOnActi = _$$props9.focusOnActivate,
      focusOnActivate = _$$props9$focusOnActi === void 0 ? true : _$$props9$focusOnActi;
  var _$$props10 = $$props,
      _$$props10$content$us = _$$props10.content$use,
      content$use = _$$props10$content$us === void 0 ? [] : _$$props10$content$us;
  var _$$props11 = $$props,
      _$$props11$content$cl = _$$props11.content$class,
      content$class = _$$props11$content$cl === void 0 ? "" : _$$props11$content$cl;
  var element;
  var tab;
  var instantiate = getContext("SMUI:tab:instantiate");
  var getInstance = getContext("SMUI:tab:getInstance");
  var tabIndicatorPromiseResolve;
  var tabIndicatorPromise = new Promise(function (resolve) {
    return tabIndicatorPromiseResolve = resolve;
  });
  setContext("SMUI:tab-indicator:instantiate", false);
  setContext("SMUI:tab-indicator:getInstance", getTabIndicatorInstancePromise);
  setContext("SMUI:label:context", "tab");
  setContext("SMUI:icon:context", "tab");

  if (!tabEntry) {
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  }

  onMount(function _callee() {
    return _regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(instantiate !== false)) {
              _context.next = 4;
              break;
            }

            $$invalidate(20, tab = new MDCTab(element));
            _context.next = 9;
            break;

          case 4:
            _context.t0 = $$invalidate;
            _context.next = 7;
            return _regeneratorRuntime.awrap(getInstance(tabEntry));

          case 7:
            _context.t1 = tab = _context.sent;
            (0, _context.t0)(20, _context.t1);

          case 9:
            tabIndicatorPromiseResolve(tab.tabIndicator_);

            if (!ripple) {
              tab.ripple_ && tab.ripple_.destroy();
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  onDestroy(function () {
    tab && tab.destroy();
  });

  function getTabIndicatorInstancePromise() {
    return tabIndicatorPromise;
  }

  function interactedHandler() {
    $$invalidate(0, active = tab.active);
  }

  function activate() {
    var _tab;

    $$invalidate(0, active = true);
    return (_tab = tab).activate.apply(_tab, arguments);
  }

  function deactivate() {
    var _tab2;

    $$invalidate(0, active = false);
    return (_tab2 = tab).deactivate.apply(_tab2, arguments);
  }

  function focus() {
    var _tab3;

    return (_tab3 = tab).focus.apply(_tab3, arguments);
  }

  function computeIndicatorClientRect() {
    var _tab4;

    return (_tab4 = tab).computeIndicatorClientRect.apply(_tab4, arguments);
  }

  function computeDimensions() {
    var _tab5;

    return (_tab5 = tab).computeDimensions.apply(_tab5, arguments);
  }

  var _$$props12 = $$props,
      _$$props12$$$slots = _$$props12.$$slots,
      $$slots = _$$props12$$$slots === void 0 ? {} : _$$props12$$$slots,
      $$scope = _$$props12.$$scope;

  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(9, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(12, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("tab" in $$new_props) $$invalidate(13, tabEntry = $$new_props.tab);
    if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
    if ("active" in $$new_props) $$invalidate(0, active = $$new_props.active);
    if ("stacked" in $$new_props) $$invalidate(4, stacked = $$new_props.stacked);
    if ("minWidth" in $$new_props) $$invalidate(5, minWidth = $$new_props.minWidth);
    if ("indicatorSpanOnlyContent" in $$new_props) $$invalidate(6, indicatorSpanOnlyContent = $$new_props.indicatorSpanOnlyContent);
    if ("focusOnActivate" in $$new_props) $$invalidate(14, focusOnActivate = $$new_props.focusOnActivate);
    if ("content$use" in $$new_props) $$invalidate(7, content$use = $$new_props.content$use);
    if ("content$class" in $$new_props) $$invalidate(8, content$class = $$new_props.content$class);
    if ("$$scope" in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      activeEntry: activeEntry,
      use: use,
      className: className,
      tabEntry: tabEntry,
      ripple: ripple,
      active: active,
      stacked: stacked,
      minWidth: minWidth,
      indicatorSpanOnlyContent: indicatorSpanOnlyContent,
      focusOnActivate: focusOnActivate,
      content$use: content$use,
      content$class: content$class,
      element: element,
      tab: tab,
      instantiate: instantiate,
      getInstance: getInstance,
      tabIndicatorPromiseResolve: tabIndicatorPromiseResolve,
      tabIndicatorPromise: tabIndicatorPromise
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(12, $$props = assign(assign({}, $$props), $$new_props));
    if ("activeEntry" in $$props) activeEntry = $$new_props.activeEntry;
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("tabEntry" in $$props) $$invalidate(13, tabEntry = $$new_props.tabEntry);
    if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
    if ("active" in $$props) $$invalidate(0, active = $$new_props.active);
    if ("stacked" in $$props) $$invalidate(4, stacked = $$new_props.stacked);
    if ("minWidth" in $$props) $$invalidate(5, minWidth = $$new_props.minWidth);
    if ("indicatorSpanOnlyContent" in $$props) $$invalidate(6, indicatorSpanOnlyContent = $$new_props.indicatorSpanOnlyContent);
    if ("focusOnActivate" in $$props) $$invalidate(14, focusOnActivate = $$new_props.focusOnActivate);
    if ("content$use" in $$props) $$invalidate(7, content$use = $$new_props.content$use);
    if ("content$class" in $$props) $$invalidate(8, content$class = $$new_props.content$class);
    if ("element" in $$props) $$invalidate(9, element = $$new_props.element);
    if ("tab" in $$props) $$invalidate(20, tab = $$new_props.tab);
    if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
    if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
    if ("tabIndicatorPromiseResolve" in $$props) tabIndicatorPromiseResolve = $$new_props.tabIndicatorPromiseResolve;
    if ("tabIndicatorPromise" in $$props) tabIndicatorPromise = $$new_props.tabIndicatorPromise;
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*tab, focusOnActivate*/
    1064960) {
       if (tab) {
        $$invalidate(20, tab.focusOnActivate = focusOnActivate, tab);
      }
    }

    if ($$self.$$.dirty[0] &
    /*tab, active*/
    1048577) {
       if (tab && tab.active !== active) {
        $$invalidate(0, active = tab.active);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [active, use, className, ripple, stacked, minWidth, indicatorSpanOnlyContent, content$use, content$class, element, forwardEvents, interactedHandler, $$props, tabEntry, focusOnActivate, activate, deactivate, focus, computeIndicatorClientRect, computeDimensions, tab, tabIndicatorPromiseResolve, activeEntry, instantiate, getInstance, tabIndicatorPromise, getTabIndicatorInstancePromise, $$slots, button_binding, $$scope];
}

var Tab =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Tab, _SvelteComponentDev);

  function Tab(options) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 1,
      class: 2,
      tab: 13,
      ripple: 3,
      active: 0,
      stacked: 4,
      minWidth: 5,
      indicatorSpanOnlyContent: 6,
      focusOnActivate: 14,
      content$use: 7,
      content$class: 8,
      activate: 15,
      deactivate: 16,
      focus: 17,
      computeIndicatorClientRect: 18,
      computeDimensions: 19
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tab",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*tabEntry*/
    ctx[13] === undefined && !("tab" in props)) {
      console.warn("<Tab> was created without expected prop 'tab'");
    }

    return _this;
  }

  _createClass(Tab, [{
    key: "use",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tab",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "active",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "stacked",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "minWidth",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "indicatorSpanOnlyContent",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "focusOnActivate",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "content$use",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "content$class",
    get: function get() {
      throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activate",
    get: function get() {
      return this.$$.ctx[15];
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "deactivate",
    get: function get() {
      return this.$$.ctx[16];
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "focus",
    get: function get() {
      return this.$$.ctx[17];
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "computeIndicatorClientRect",
    get: function get() {
      return this.$$.ctx[18];
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "computeDimensions",
    get: function get() {
      return this.$$.ctx[19];
    },
    set: function set(value) {
      throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Tab;
}(SvelteComponentDev);

var css$1 = ".mdc-tab-bar{width:100%}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:transform .25s cubic-bezier(.4,0,.2,1)}";
styleInject(css$1);

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
var _extendStatics$2 = function extendStatics(d, b) {
  _extendStatics$2 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics$2(d, b);
};

function __extends$2(d, b) {
  _extendStatics$2(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign$2 = function __assign() {
  _assign$2 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign$2.apply(this, arguments);
};
function __read$2(o, n) {
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
function __spread$2() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$2(arguments[i]));
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
var MDCFoundation$2 =
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

var MDCComponent$2 =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread$2(args)); // Note that we initialize foundation here and not within the constructor's default param so that
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
    return new MDCComponent(root, new MDCFoundation$2({}));
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
var supportsPassive_$1;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive$1(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_$1 === undefined || forceRefresh) {
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


    supportsPassive_$1 = isSupported_1;
  }

  return supportsPassive_$1 ? {
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
function matches$1(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
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
var cssClasses$4 = {
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
  SCROLL_TEST: 'mdc-tab-scroller__test'
};
var strings$4 = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
};

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
var MDCTabScrollerRTL =
/** @class */
function () {
  function MDCTabScrollerRTL(adapter) {
    this.adapter_ = adapter;
  }

  return MDCTabScrollerRTL;
}();

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

var MDCTabScrollerRTLDefault =
/** @class */
function (_super) {
  __extends$2(MDCTabScrollerRTLDefault, _super);

  function MDCTabScrollerRTLDefault() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var right = this.calculateScrollEdges_().right; // Scroll values on most browsers are ints instead of floats so we round

    return Math.round(right - currentScrollLeft);
  };

  MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
    return scrollX;
  };

  MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };

  MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };

  return MDCTabScrollerRTLDefault;
}(MDCTabScrollerRTL);

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

var MDCTabScrollerRTLNegative =
/** @class */
function (_super) {
  __extends$2(MDCTabScrollerRTLNegative, _super);

  function MDCTabScrollerRTLNegative() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return Math.round(translateX - currentScrollLeft);
  };

  MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(-scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
    return scrollX - translateX;
  };

  MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: rootWidth - contentWidth,
      right: 0
    };
  };

  MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.max(Math.min(edges.right, scrollX), edges.left);
  };

  return MDCTabScrollerRTLNegative;
}(MDCTabScrollerRTL);

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

var MDCTabScrollerRTLReverse =
/** @class */
function (_super) {
  __extends$2(MDCTabScrollerRTLReverse, _super);

  function MDCTabScrollerRTLReverse() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // Scroll values on most browsers are ints instead of floats so we round

    return Math.round(currentScrollLeft - translateX);
  };

  MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };

  MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };

  MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
    return scrollX + translateX;
  };

  MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: contentWidth - rootWidth,
      right: 0
    };
  };

  MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.right, scrollX), edges.left);
  };

  return MDCTabScrollerRTLReverse;
}(MDCTabScrollerRTL);

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

var MDCTabScrollerFoundation =
/** @class */
function (_super) {
  __extends$2(MDCTabScrollerFoundation, _super);

  function MDCTabScrollerFoundation(adapter) {
    var _this = _super.call(this, _assign$2({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
    /**
     * Controls whether we should handle the transitionend and interaction events during the animation.
     */


    _this.isAnimating_ = false;
    return _this;
  }

  Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation, "strings", {
    get: function get() {
      return strings$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        eventTargetMatchesSelector: function eventTargetMatchesSelector() {
          return false;
        },
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        addScrollAreaClass: function addScrollAreaClass() {
          return undefined;
        },
        setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {
          return undefined;
        },
        setScrollContentStyleProperty: function setScrollContentStyleProperty() {
          return undefined;
        },
        getScrollContentStyleValue: function getScrollContentStyleValue() {
          return '';
        },
        setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {
          return undefined;
        },
        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
          return 0;
        },
        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
          return 0;
        },
        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
          return 0;
        },
        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        computeScrollContentClientRect: function computeScrollContentClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabScrollerFoundation.prototype.init = function () {
    // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
    // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
    var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
    this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
    this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
  };
  /**
   * Computes the current visual scroll position
   */


  MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
    if (this.isRTL_()) {
      return this.computeCurrentScrollPositionRTL_();
    }

    var currentTranslateX = this.calculateCurrentTranslateX_();
    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return scrollLeft - currentTranslateX;
  };
  /**
   * Handles interaction events that occur during transition
   */


  MDCTabScrollerFoundation.prototype.handleInteraction = function () {
    // Early exit if we aren't animating
    if (!this.isAnimating_) {
      return;
    } // Prevent other event listeners from handling this event


    this.stopScrollAnimation_();
  };
  /**
   * Handles the transitionend event
   */


  MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
    // Early exit if we aren't animating or the event was triggered by a different element.
    var evtTarget = evt.target;

    if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
      return;
    }

    this.isAnimating_ = false;
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
  };
  /**
   * Increment the scroll value by the scrollXIncrement
   * @param scrollXIncrement The value by which to increment the scroll position
   */


  MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
    // Early exit for non-operational increment values
    if (scrollXIncrement === 0) {
      return;
    }

    if (this.isRTL_()) {
      return this.incrementScrollRTL_(scrollXIncrement);
    }

    this.incrementScroll_(scrollXIncrement);
  };
  /**
   * Scrolls to the given scrollX value
   */


  MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
    if (this.isRTL_()) {
      return this.scrollToRTL_(scrollX);
    }

    this.scrollTo_(scrollX);
  };
  /**
   * @return Browser-specific {@link MDCTabScrollerRTL} instance.
   */


  MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
    if (!this.rtlScrollerInstance_) {
      this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
    }

    return this.rtlScrollerInstance_;
  };
  /**
   * @return translateX value from a CSS matrix transform function string.
   */


  MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
    var transformValue = this.adapter_.getScrollContentStyleValue('transform'); // Early exit if no transform is present

    if (transformValue === 'none') {
      return 0;
    } // The transform value comes back as a matrix transformation in the form
    // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
    // we're going to grab all the parenthesized values, strip out tx, and
    // parse it.


    var match = /\((.+?)\)/.exec(transformValue);

    if (!match) {
      return 0;
    }

    var matrixParams = match[1]; // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
    // @ts-ignore These unused variables should retain their semantic names for clarity.

    var _a = __read$2(matrixParams.split(','), 6),
        a = _a[0],
        b = _a[1],
        c = _a[2],
        d = _a[3],
        tx = _a[4],
        ty = _a[5];

    return parseFloat(tx); // tslint:disable-line:ban
  };
  /**
   * Calculates a safe scroll value that is > 0 and < the max scroll value
   * @param scrollX The distance to scroll
   */


  MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };

  MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
    var translateX = this.calculateCurrentTranslateX_();
    return this.getRTLScroller().getScrollPositionRTL(translateX);
  };

  MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };
  /**
   * Internal scroll method
   * @param scrollX The new scroll position
   */


  MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
    var currentScrollX = this.getScrollPosition();
    var safeScrollX = this.clampScrollValue_(scrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    this.animate_({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta
    });
  };
  /**
   * Internal RTL scroll method
   * @param scrollX The new scroll position
   */


  MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
    var animation = this.getRTLScroller().scrollToRTL(scrollX);
    this.animate_(animation);
  };
  /**
   * Internal increment scroll method
   * @param scrollX The new scroll position increment
   */


  MDCTabScrollerFoundation.prototype.incrementScroll_ = function (scrollX) {
    var currentScrollX = this.getScrollPosition();
    var targetScrollX = scrollX + currentScrollX;
    var safeScrollX = this.clampScrollValue_(targetScrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    this.animate_({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta
    });
  };
  /**
   * Internal increment scroll RTL method
   * @param scrollX The new scroll position RTL increment
   */


  MDCTabScrollerFoundation.prototype.incrementScrollRTL_ = function (scrollX) {
    var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
    this.animate_(animation);
  };
  /**
   * Animates the tab scrolling
   * @param animation The animation to apply
   */


  MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
    var _this = this; // Early exit if translateX is 0, which means there's no animation to perform


    if (animation.scrollDelta === 0) {
      return;
    }

    this.stopScrollAnimation_(); // This animation uses the FLIP approach.
    // Read more here: https://aerotwist.com/blog/flip-your-animations/

    this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
    this.adapter_.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)"); // Force repaint

    this.adapter_.computeScrollAreaClientRect();
    requestAnimationFrame(function () {
      _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);

      _this.adapter_.setScrollContentStyleProperty('transform', 'none');
    });
    this.isAnimating_ = true;
  };
  /**
   * Stops scroll animation
   */


  MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
    this.isAnimating_ = false;
    var currentScrollPosition = this.getAnimatingScrollPosition_();
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
    this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
  };
  /**
   * Gets the current scroll position during animation
   */


  MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
    var currentTranslateX = this.calculateCurrentTranslateX_();
    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();

    if (this.isRTL_()) {
      return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
    }

    return scrollLeft - currentTranslateX;
  };
  /**
   * Determines the RTL Scroller to use
   */


  MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
    // Browsers have three different implementations of scrollLeft in RTL mode,
    // dependent on the browser. The behavior is based off the max LTR
    // scrollLeft value and 0.
    //
    // * Default scrolling in RTL *
    //    - Left-most value: 0
    //    - Right-most value: Max LTR scrollLeft value
    //
    // * Negative scrolling in RTL *
    //    - Left-most value: Negated max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // * Reverse scrolling in RTL *
    //    - Left-most value: Max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // We use those principles below to determine which RTL scrollLeft
    // behavior is implemented in the current browser.
    var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
    var newScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // If the newScrollLeft value is negative,then we know that the browser has
    // implemented negative RTL scrolling, since all other implementations have
    // only positive values.

    if (newScrollLeft < 0) {
      // Undo the scrollLeft test check
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
      return new MDCTabScrollerRTLNegative(this.adapter_);
    }

    var rootClientRect = this.adapter_.computeScrollAreaClientRect();
    var contentClientRect = this.adapter_.computeScrollContentClientRect();
    var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right); // Undo the scrollLeft test check

    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft); // By calculating the clientRect of the root element and the clientRect of
    // the content element, we can determine how much the scroll value changed
    // when we performed the scrollLeft subtraction above.

    if (rightEdgeDelta === newScrollLeft) {
      return new MDCTabScrollerRTLReverse(this.adapter_);
    }

    return new MDCTabScrollerRTLDefault(this.adapter_);
  };

  MDCTabScrollerFoundation.prototype.isRTL_ = function () {
    return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
  };

  return MDCTabScrollerFoundation;
}(MDCFoundation$2);

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
/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */

var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */

function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
  if (shouldCacheResult === void 0) {
    shouldCacheResult = true;
  }

  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
    return horizontalScrollbarHeight_;
  }

  var el = documentObj.createElement('div');
  el.classList.add(cssClasses$4.SCROLL_TEST);
  documentObj.body.appendChild(el);
  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }

  return horizontalScrollbarHeight;
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

var MDCTabScroller =
/** @class */
function (_super) {
  __extends$2(MDCTabScroller, _super);

  function MDCTabScroller() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScroller.attachTo = function (root) {
    return new MDCTabScroller(root);
  };

  MDCTabScroller.prototype.initialize = function () {
    this.area_ = this.root_.querySelector(MDCTabScrollerFoundation.strings.AREA_SELECTOR);
    this.content_ = this.root_.querySelector(MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
  };

  MDCTabScroller.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleInteraction_ = function () {
      return _this.foundation_.handleInteraction();
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.area_.addEventListener('wheel', this.handleInteraction_, applyPassive$1());
    this.area_.addEventListener('touchstart', this.handleInteraction_, applyPassive$1());
    this.area_.addEventListener('pointerdown', this.handleInteraction_, applyPassive$1());
    this.area_.addEventListener('mousedown', this.handleInteraction_, applyPassive$1());
    this.area_.addEventListener('keydown', this.handleInteraction_, applyPassive$1());
    this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCTabScroller.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.area_.removeEventListener('wheel', this.handleInteraction_, applyPassive$1());
    this.area_.removeEventListener('touchstart', this.handleInteraction_, applyPassive$1());
    this.area_.removeEventListener('pointerdown', this.handleInteraction_, applyPassive$1());
    this.area_.removeEventListener('mousedown', this.handleInteraction_, applyPassive$1());
    this.area_.removeEventListener('keydown', this.handleInteraction_, applyPassive$1());
    this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCTabScroller.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
        return matches$1(evtTarget, selector);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      addScrollAreaClass: function addScrollAreaClass(className) {
        return _this.area_.classList.add(className);
      },
      setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
        return _this.area_.style.setProperty(prop, value);
      },
      setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
        return _this.content_.style.setProperty(prop, value);
      },
      getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
        return window.getComputedStyle(_this.content_).getPropertyValue(propName);
      },
      setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
        return _this.area_.scrollLeft = scrollX;
      },
      getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
        return _this.area_.scrollLeft;
      },
      getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
        return _this.content_.offsetWidth;
      },
      getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
        return _this.area_.offsetWidth;
      },
      computeScrollAreaClientRect: function computeScrollAreaClientRect() {
        return _this.area_.getBoundingClientRect();
      },
      computeScrollContentClientRect: function computeScrollContentClientRect() {
        return _this.content_.getBoundingClientRect();
      },
      computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight$1() {
        return computeHorizontalScrollbarHeight(document);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTabScrollerFoundation(adapter);
  };
  /**
   * Returns the current visual scroll position
   */


  MDCTabScroller.prototype.getScrollPosition = function () {
    return this.foundation_.getScrollPosition();
  };
  /**
   * Returns the width of the scroll content
   */


  MDCTabScroller.prototype.getScrollContentWidth = function () {
    return this.content_.offsetWidth;
  };
  /**
   * Increments the scroll value by the given amount
   * @param scrollXIncrement The pixel value by which to increment the scroll value
   */


  MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
    this.foundation_.incrementScroll(scrollXIncrement);
  };
  /**
   * Scrolls to the given pixel position
   * @param scrollX The pixel value to scroll to
   */


  MDCTabScroller.prototype.scrollTo = function (scrollX) {
    this.foundation_.scrollTo(scrollX);
  };

  return MDCTabScroller;
}(MDCComponent$2);

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
var cssClasses$5 = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings$5 = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers$1 = {
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
var supportsCssVariables_$1;

function detectEdgePseudoVarBug$1(windowObj) {
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

function supportsCssVariables$1(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_$1;

  if (typeof supportsCssVariables_$1 === 'boolean' && !forceRefresh) {
    return supportsCssVariables_$1;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug$1(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_$1 = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords$1(evt, pageOffset, clientRect) {
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

var ACTIVATION_EVENT_TYPES$1 = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES$1 = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets$1 = [];

var MDCRippleFoundation$1 =
/** @class */
function (_super) {
  __extends$2(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, _assign$2({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

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
      return cssClasses$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return strings$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return numbers$1;
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
      ACTIVATION_EVENT_TYPES$1.forEach(function (evtType) {
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
      POINTER_DEACTIVATION_EVENT_TYPES$1.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES$1.forEach(function (evtType) {
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
    POINTER_DEACTIVATION_EVENT_TYPES$1.forEach(function (evtType) {
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
    var hasActivatedChild = evt !== undefined && activatedTargets$1.length > 0 && activatedTargets$1.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets$1.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets$1 = [];

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
      startPoint = getNormalizedEventCoords$1(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
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
      }, numbers$1.FG_DEACTIVATION_MS);
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

    var state = _assign$2({}, activationState);

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
}(MDCFoundation$2);

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

var MDCRipple$1 =
/** @class */
function (_super) {
  __extends$2(MDCRipple, _super);

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
        return supportsCssVariables$1(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive$1());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, applyPassive$1());
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
        return matches$1(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive$1());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, applyPassive$1());
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
    return new MDCRippleFoundation$1(MDCRipple.createAdapter(this));
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
}(MDCComponent$2);

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
var cssClasses$6 = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  NO_TRANSITION: 'mdc-tab-indicator--no-transition'
};
var strings$6 = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};

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

var MDCTabIndicatorFoundation$2 =
/** @class */
function (_super) {
  __extends$2(MDCTabIndicatorFoundation, _super);

  function MDCTabIndicatorFoundation(adapter) {
    return _super.call(this, _assign$2({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
    get: function get() {
      return strings$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        computeContentClientRect: function computeContentClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        setContentStyleProperty: function setContentStyleProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
    return this.adapter_.computeContentClientRect();
  };

  return MDCTabIndicatorFoundation;
}(MDCFoundation$2);

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
/* istanbul ignore next: subclass is not a branch statement */

var MDCFadingTabIndicatorFoundation$2 =
/** @class */
function (_super) {
  __extends$2(MDCFadingTabIndicatorFoundation, _super);

  function MDCFadingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFadingTabIndicatorFoundation.prototype.activate = function () {
    this.adapter_.addClass(MDCTabIndicatorFoundation$2.cssClasses.ACTIVE);
  };

  MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(MDCTabIndicatorFoundation$2.cssClasses.ACTIVE);
  };

  return MDCFadingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation$2);

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
/* istanbul ignore next: subclass is not a branch statement */

var MDCSlidingTabIndicatorFoundation$2 =
/** @class */
function (_super) {
  __extends$2(MDCSlidingTabIndicatorFoundation, _super);

  function MDCSlidingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect) {
      this.adapter_.addClass(MDCTabIndicatorFoundation$2.cssClasses.ACTIVE);
      return;
    } // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/
    // Calculate the dimensions based on the dimensions of the previous indicator


    var currentClientRect = this.computeContentClientRect();
    var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    this.adapter_.addClass(MDCTabIndicatorFoundation$2.cssClasses.NO_TRANSITION);
    this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")"); // Force repaint before updating classes and transform to ensure the transform properly takes effect

    this.computeContentClientRect();
    this.adapter_.removeClass(MDCTabIndicatorFoundation$2.cssClasses.NO_TRANSITION);
    this.adapter_.addClass(MDCTabIndicatorFoundation$2.cssClasses.ACTIVE);
    this.adapter_.setContentStyleProperty('transform', '');
  };

  MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(MDCTabIndicatorFoundation$2.cssClasses.ACTIVE);
  };

  return MDCSlidingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation$2);

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

var MDCTabIndicator$2 =
/** @class */
function (_super) {
  __extends$2(MDCTabIndicator, _super);

  function MDCTabIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabIndicator.attachTo = function (root) {
    return new MDCTabIndicator(root);
  };

  MDCTabIndicator.prototype.initialize = function () {
    this.content_ = this.root_.querySelector(MDCTabIndicatorFoundation$2.strings.CONTENT_SELECTOR);
  };

  MDCTabIndicator.prototype.computeContentClientRect = function () {
    return this.foundation_.computeContentClientRect();
  };

  MDCTabIndicator.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      computeContentClientRect: function computeContentClientRect() {
        return _this.content_.getBoundingClientRect();
      },
      setContentStyleProperty: function setContentStyleProperty(prop, value) {
        return _this.content_.style.setProperty(prop, value);
      }
    }; // tslint:enable:object-literal-sort-keys

    if (this.root_.classList.contains(MDCTabIndicatorFoundation$2.cssClasses.FADE)) {
      return new MDCFadingTabIndicatorFoundation$2(adapter);
    } // Default to the sliding indicator


    return new MDCSlidingTabIndicatorFoundation$2(adapter);
  };

  MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
    this.foundation_.activate(previousIndicatorClientRect);
  };

  MDCTabIndicator.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  return MDCTabIndicator;
}(MDCComponent$2);

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
var cssClasses$7 = {
  ACTIVE: 'mdc-tab--active'
};
var strings$7 = {
  ARIA_SELECTED: 'aria-selected',
  CONTENT_SELECTOR: '.mdc-tab__content',
  INTERACTED_EVENT: 'MDCTab:interacted',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  TABINDEX: 'tabIndex',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator'
};

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

var MDCTabFoundation$1 =
/** @class */
function (_super) {
  __extends$2(MDCTabFoundation, _super);

  function MDCTabFoundation(adapter) {
    var _this = _super.call(this, _assign$2({}, MDCTabFoundation.defaultAdapter, adapter)) || this;

    _this.focusOnActivate_ = true;
    return _this;
  }

  Object.defineProperty(MDCTabFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$7;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation, "strings", {
    get: function get() {
      return strings$7;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        activateIndicator: function activateIndicator() {
          return undefined;
        },
        deactivateIndicator: function deactivateIndicator() {
          return undefined;
        },
        notifyInteracted: function notifyInteracted() {
          return undefined;
        },
        getOffsetLeft: function getOffsetLeft() {
          return 0;
        },
        getOffsetWidth: function getOffsetWidth() {
          return 0;
        },
        getContentOffsetLeft: function getContentOffsetLeft() {
          return 0;
        },
        getContentOffsetWidth: function getContentOffsetWidth() {
          return 0;
        },
        focus: function focus() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabFoundation.prototype.handleClick = function () {
    // It's up to the parent component to keep track of the active Tab and
    // ensure we don't activate a Tab that's already active.
    this.adapter_.notifyInteracted();
  };

  MDCTabFoundation.prototype.isActive = function () {
    return this.adapter_.hasClass(cssClasses$7.ACTIVE);
  };
  /**
   * Sets whether the tab should focus itself when activated
   */


  MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
    this.focusOnActivate_ = focusOnActivate;
  };
  /**
   * Activates the Tab
   */


  MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
    this.adapter_.addClass(cssClasses$7.ACTIVE);
    this.adapter_.setAttr(strings$7.ARIA_SELECTED, 'true');
    this.adapter_.setAttr(strings$7.TABINDEX, '0');
    this.adapter_.activateIndicator(previousIndicatorClientRect);

    if (this.focusOnActivate_) {
      this.adapter_.focus();
    }
  };
  /**
   * Deactivates the Tab
   */


  MDCTabFoundation.prototype.deactivate = function () {
    // Early exit
    if (!this.isActive()) {
      return;
    }

    this.adapter_.removeClass(cssClasses$7.ACTIVE);
    this.adapter_.setAttr(strings$7.ARIA_SELECTED, 'false');
    this.adapter_.setAttr(strings$7.TABINDEX, '-1');
    this.adapter_.deactivateIndicator();
  };
  /**
   * Returns the dimensions of the Tab
   */


  MDCTabFoundation.prototype.computeDimensions = function () {
    var rootWidth = this.adapter_.getOffsetWidth();
    var rootLeft = this.adapter_.getOffsetLeft();
    var contentWidth = this.adapter_.getContentOffsetWidth();
    var contentLeft = this.adapter_.getContentOffsetLeft();
    return {
      contentLeft: rootLeft + contentLeft,
      contentRight: rootLeft + contentLeft + contentWidth,
      rootLeft: rootLeft,
      rootRight: rootLeft + rootWidth
    };
  };

  return MDCTabFoundation;
}(MDCFoundation$2);

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

var MDCTab$1 =
/** @class */
function (_super) {
  __extends$2(MDCTab, _super);

  function MDCTab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTab.attachTo = function (root) {
    return new MDCTab(root);
  };

  MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new MDCRipple$1(el, foundation);
      };
    }

    if (tabIndicatorFactory === void 0) {
      tabIndicatorFactory = function tabIndicatorFactory(el) {
        return new MDCTabIndicator$2(el);
      };
    }

    this.id = this.root_.id;
    var rippleSurface = this.root_.querySelector(MDCTabFoundation$1.strings.RIPPLE_SELECTOR);

    var rippleAdapter = _assign$2({}, MDCRipple$1.createAdapter(this), {
      addClass: function addClass(className) {
        return rippleSurface.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return rippleSurface.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return rippleSurface.style.setProperty(varName, value);
      }
    });

    var rippleFoundation = new MDCRippleFoundation$1(rippleAdapter);
    this.ripple_ = rippleFactory(this.root_, rippleFoundation);
    var tabIndicatorElement = this.root_.querySelector(MDCTabFoundation$1.strings.TAB_INDICATOR_SELECTOR);
    this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
    this.content_ = this.root_.querySelector(MDCTabFoundation$1.strings.CONTENT_SELECTOR);
  };

  MDCTab.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleClick_ = function () {
      return _this.foundation_.handleClick();
    };

    this.listen('click', this.handleClick_);
  };

  MDCTab.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.ripple_.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCTab.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      activateIndicator: function activateIndicator(previousIndicatorClientRect) {
        return _this.tabIndicator_.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: function deactivateIndicator() {
        return _this.tabIndicator_.deactivate();
      },
      notifyInteracted: function notifyInteracted() {
        return _this.emit(MDCTabFoundation$1.strings.INTERACTED_EVENT, {
          tabId: _this.id
        }, true
        /* bubble */
        );
      },
      getOffsetLeft: function getOffsetLeft() {
        return _this.root_.offsetLeft;
      },
      getOffsetWidth: function getOffsetWidth() {
        return _this.root_.offsetWidth;
      },
      getContentOffsetLeft: function getContentOffsetLeft() {
        return _this.content_.offsetLeft;
      },
      getContentOffsetWidth: function getContentOffsetWidth() {
        return _this.content_.offsetWidth;
      },
      focus: function focus() {
        return _this.root_.focus();
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTabFoundation$1(adapter);
  };

  Object.defineProperty(MDCTab.prototype, "active", {
    /**
     * Getter for the active state of the tab
     */
    get: function get() {
      return this.foundation_.isActive();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
    set: function set(focusOnActivate) {
      this.foundation_.setFocusOnActivate(focusOnActivate);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Activates the tab
   */

  MDCTab.prototype.activate = function (computeIndicatorClientRect) {
    this.foundation_.activate(computeIndicatorClientRect);
  };
  /**
   * Deactivates the tab
   */


  MDCTab.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Returns the indicator's client rect
   */


  MDCTab.prototype.computeIndicatorClientRect = function () {
    return this.tabIndicator_.computeContentClientRect();
  };

  MDCTab.prototype.computeDimensions = function () {
    return this.foundation_.computeDimensions();
  };
  /**
   * Focuses the tab
   */


  MDCTab.prototype.focus = function () {
    this.root_.focus();
  };

  return MDCTab;
}(MDCComponent$2);

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
var strings$8 = {
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  END_KEY: 'End',
  ENTER_KEY: 'Enter',
  HOME_KEY: 'Home',
  SPACE_KEY: 'Space',
  TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
  TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
  TAB_SELECTOR: '.mdc-tab'
};
var numbers$2 = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
  EXTRA_SCROLL_AMOUNT: 20,
  HOME_KEYCODE: 36,
  SPACE_KEYCODE: 32
};

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
var ACCEPTABLE_KEYS = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

ACCEPTABLE_KEYS.add(strings$8.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(strings$8.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(strings$8.END_KEY);
ACCEPTABLE_KEYS.add(strings$8.HOME_KEY);
ACCEPTABLE_KEYS.add(strings$8.ENTER_KEY);
ACCEPTABLE_KEYS.add(strings$8.SPACE_KEY);
var KEYCODE_MAP = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this by hand

KEYCODE_MAP.set(numbers$2.ARROW_LEFT_KEYCODE, strings$8.ARROW_LEFT_KEY);
KEYCODE_MAP.set(numbers$2.ARROW_RIGHT_KEYCODE, strings$8.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(numbers$2.END_KEYCODE, strings$8.END_KEY);
KEYCODE_MAP.set(numbers$2.HOME_KEYCODE, strings$8.HOME_KEY);
KEYCODE_MAP.set(numbers$2.ENTER_KEYCODE, strings$8.ENTER_KEY);
KEYCODE_MAP.set(numbers$2.SPACE_KEYCODE, strings$8.SPACE_KEY);

var MDCTabBarFoundation =
/** @class */
function (_super) {
  __extends$2(MDCTabBarFoundation, _super);

  function MDCTabBarFoundation(adapter) {
    var _this = _super.call(this, _assign$2({}, MDCTabBarFoundation.defaultAdapter, adapter)) || this;

    _this.useAutomaticActivation_ = false;
    return _this;
  }

  Object.defineProperty(MDCTabBarFoundation, "strings", {
    get: function get() {
      return strings$8;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBarFoundation, "numbers", {
    get: function get() {
      return numbers$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        scrollTo: function scrollTo() {
          return undefined;
        },
        incrementScroll: function incrementScroll() {
          return undefined;
        },
        getScrollPosition: function getScrollPosition() {
          return 0;
        },
        getScrollContentWidth: function getScrollContentWidth() {
          return 0;
        },
        getOffsetWidth: function getOffsetWidth() {
          return 0;
        },
        isRTL: function isRTL() {
          return false;
        },
        setActiveTab: function setActiveTab() {
          return undefined;
        },
        activateTabAtIndex: function activateTabAtIndex() {
          return undefined;
        },
        deactivateTabAtIndex: function deactivateTabAtIndex() {
          return undefined;
        },
        focusTabAtIndex: function focusTabAtIndex() {
          return undefined;
        },
        getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {
          return {
            rootLeft: 0,
            rootRight: 0,
            contentLeft: 0,
            contentRight: 0
          };
        },
        getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
          return -1;
        },
        getFocusedTabIndex: function getFocusedTabIndex() {
          return -1;
        },
        getIndexOfTabById: function getIndexOfTabById() {
          return -1;
        },
        getTabListLength: function getTabListLength() {
          return 0;
        },
        notifyTabActivated: function notifyTabActivated() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Switches between automatic and manual activation modes.
   * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
   */

  MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
    this.useAutomaticActivation_ = useAutomaticActivation;
  };

  MDCTabBarFoundation.prototype.activateTab = function (index) {
    var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();

    if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
      return;
    }

    var previousClientRect;

    if (previousActiveIndex !== -1) {
      this.adapter_.deactivateTabAtIndex(previousActiveIndex);
      previousClientRect = this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex);
    }

    this.adapter_.activateTabAtIndex(index, previousClientRect);
    this.scrollIntoView(index);
    this.adapter_.notifyTabActivated(index);
  };

  MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
    // Get the key from the event
    var key = this.getKeyFromEvent_(evt); // Early exit if the event key isn't one of the keyboard navigation keys

    if (key === undefined) {
      return;
    } // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple


    if (!this.isActivationKey_(key)) {
      evt.preventDefault();
    }

    if (this.useAutomaticActivation_) {
      if (this.isActivationKey_(key)) {
        return;
      }

      var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
      this.adapter_.setActiveTab(index);
      this.scrollIntoView(index);
    } else {
      var focusedTabIndex = this.adapter_.getFocusedTabIndex();

      if (this.isActivationKey_(key)) {
        this.adapter_.setActiveTab(focusedTabIndex);
      } else {
        var index = this.determineTargetFromKey_(focusedTabIndex, key);
        this.adapter_.focusTabAtIndex(index);
        this.scrollIntoView(index);
      }
    }
  };
  /**
   * Handles the MDCTab:interacted event
   */


  MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
    this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
  };
  /**
   * Scrolls the tab at the given index into view
   * @param index The tab index to make visible
   */


  MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
    // Early exit if the index is out of range
    if (!this.indexIsInRange_(index)) {
      return;
    } // Always scroll to 0 if scrolling to the 0th index


    if (index === 0) {
      return this.adapter_.scrollTo(0);
    } // Always scroll to the max value if scrolling to the Nth index
    // MDCTabScroller.scrollTo() will never scroll past the max possible value


    if (index === this.adapter_.getTabListLength() - 1) {
      return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
    }

    if (this.isRTL_()) {
      return this.scrollIntoViewRTL_(index);
    }

    this.scrollIntoView_(index);
  };
  /**
   * Private method for determining the index of the destination tab based on what key was pressed
   * @param origin The original index from which to determine the destination
   * @param key The name of the key
   */


  MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
    var isRTL = this.isRTL_();
    var maxIndex = this.adapter_.getTabListLength() - 1;
    var shouldGoToEnd = key === strings$8.END_KEY;
    var shouldDecrement = key === strings$8.ARROW_LEFT_KEY && !isRTL || key === strings$8.ARROW_RIGHT_KEY && isRTL;
    var shouldIncrement = key === strings$8.ARROW_RIGHT_KEY && !isRTL || key === strings$8.ARROW_LEFT_KEY && isRTL;
    var index = origin;

    if (shouldGoToEnd) {
      index = maxIndex;
    } else if (shouldDecrement) {
      index -= 1;
    } else if (shouldIncrement) {
      index += 1;
    } else {
      index = 0;
    }

    if (index < 0) {
      index = maxIndex;
    } else if (index > maxIndex) {
      index = 0;
    }

    return index;
  };
  /**
   * Calculates the scroll increment that will make the tab at the given index visible
   * @param index The index of the tab
   * @param nextIndex The index of the next tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the Tab Bar
   */


  MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
    var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
    var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
    var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
    var leftIncrement = relativeContentRight - numbers$2.EXTRA_SCROLL_AMOUNT;
    var rightIncrement = relativeContentLeft + numbers$2.EXTRA_SCROLL_AMOUNT;

    if (nextIndex < index) {
      return Math.min(leftIncrement, 0);
    }

    return Math.max(rightIncrement, 0);
  };
  /**
   * Calculates the scroll increment that will make the tab at the given index visible in RTL
   * @param index The index of the tab
   * @param nextIndex The index of the next tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the Tab Bar
   * @param scrollContentWidth The width of the scroll content
   */


  MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
    var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
    var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
    var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
    var leftIncrement = relativeContentRight + numbers$2.EXTRA_SCROLL_AMOUNT;
    var rightIncrement = relativeContentLeft - numbers$2.EXTRA_SCROLL_AMOUNT;

    if (nextIndex > index) {
      return Math.max(leftIncrement, 0);
    }

    return Math.min(rightIncrement, 0);
  };
  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab Bar
   * @param index The index of the tab
   * @param tabDimensions The dimensions of the tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the tab bar
   */


  MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
    /**
     * Tabs are laid out in the Tab Scroller like this:
     *
     *    Scroll Position
     *    +---+
     *    |   |   Bar Width
     *    |   +-----------------------------------+
     *    |   |                                   |
     *    |   V                                   V
     *    |   +-----------------------------------+
     *    V   |             Tab Scroller          |
     *    +------------+--------------+-------------------+
     *    |    Tab     |      Tab     |        Tab        |
     *    +------------+--------------+-------------------+
     *        |                                   |
     *        +-----------------------------------+
     *
     * To determine the next adjacent index, we look at the Tab root left and
     * Tab root right, both relative to the scroll position. If the Tab root
     * left is less than 0, then we know it's out of view to the left. If the
     * Tab root right minus the bar width is greater than 0, we know the Tab is
     * out of view to the right. From there, we either increment or decrement
     * the index.
     */
    var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
    var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
    var relativeRootDelta = relativeRootLeft + relativeRootRight;
    var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
    var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

    if (leftEdgeIsCloser) {
      return index - 1;
    }

    if (rightEdgeIsCloser) {
      return index + 1;
    }

    return -1;
  };
  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
   * @param index The index of the tab
   * @param tabDimensions The dimensions of the tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the tab bar
   * @param scrollContentWidth The width of the scroller content
   */


  MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
    var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
    var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
    var rootDelta = rootLeft + rootRight;
    var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
    var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

    if (leftEdgeIsCloser) {
      return index + 1;
    }

    if (rightEdgeIsCloser) {
      return index - 1;
    }

    return -1;
  };
  /**
   * Returns the key associated with a keydown event
   * @param evt The keydown event
   */


  MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
    if (ACCEPTABLE_KEYS.has(evt.key)) {
      return evt.key;
    }

    return KEYCODE_MAP.get(evt.keyCode);
  };

  MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
    return key === strings$8.SPACE_KEY || key === strings$8.ENTER_KEY;
  };
  /**
   * Returns whether a given index is inclusively between the ends
   * @param index The index to test
   */


  MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
    return index >= 0 && index < this.adapter_.getTabListLength();
  };
  /**
   * Returns the view's RTL property
   */


  MDCTabBarFoundation.prototype.isRTL_ = function () {
    return this.adapter_.isRTL();
  };
  /**
   * Scrolls the tab at the given index into view for left-to-right user agents.
   * @param index The index of the tab to scroll into view
   */


  MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
    var scrollPosition = this.adapter_.getScrollPosition();
    var barWidth = this.adapter_.getOffsetWidth();
    var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
    var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

    if (!this.indexIsInRange_(nextIndex)) {
      return;
    }

    var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
    this.adapter_.incrementScroll(scrollIncrement);
  };
  /**
   * Scrolls the tab at the given index into view in RTL
   * @param index The tab index to make visible
   */


  MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
    var scrollPosition = this.adapter_.getScrollPosition();
    var barWidth = this.adapter_.getOffsetWidth();
    var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
    var scrollWidth = this.adapter_.getScrollContentWidth();
    var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);

    if (!this.indexIsInRange_(nextIndex)) {
      return;
    }

    var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
    this.adapter_.incrementScroll(scrollIncrement);
  };

  return MDCTabBarFoundation;
}(MDCFoundation$2);

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
var strings$9 = MDCTabBarFoundation.strings;
var tabIdCounter = 0;

var MDCTabBar =
/** @class */
function (_super) {
  __extends$2(MDCTabBar, _super);

  function MDCTabBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabBar.attachTo = function (root) {
    return new MDCTabBar(root);
  };

  Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
    set: function set(focusOnActivate) {
      this.tabList_.forEach(function (tab) {
        return tab.focusOnActivate = focusOnActivate;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
    set: function set(useAutomaticActivation) {
      this.foundation_.setUseAutomaticActivation(useAutomaticActivation);
    },
    enumerable: true,
    configurable: true
  });

  MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
    if (tabFactory === void 0) {
      tabFactory = function tabFactory(el) {
        return new MDCTab$1(el);
      };
    }

    if (tabScrollerFactory === void 0) {
      tabScrollerFactory = function tabScrollerFactory(el) {
        return new MDCTabScroller(el);
      };
    }

    this.tabList_ = this.instantiateTabs_(tabFactory);
    this.tabScroller_ = this.instantiateTabScroller_(tabScrollerFactory);
  };

  MDCTabBar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleTabInteraction_ = function (evt) {
      return _this.foundation_.handleTabInteraction(evt);
    };

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.listen(MDCTabFoundation$1.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.listen('keydown', this.handleKeyDown_);

    for (var i = 0; i < this.tabList_.length; i++) {
      if (this.tabList_[i].active) {
        this.scrollIntoView(i);
        break;
      }
    }
  };

  MDCTabBar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.unlisten(MDCTabFoundation$1.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.unlisten('keydown', this.handleKeyDown_);
    this.tabList_.forEach(function (tab) {
      return tab.destroy();
    });

    if (this.tabScroller_) {
      this.tabScroller_.destroy();
    }
  };

  MDCTabBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      scrollTo: function scrollTo(scrollX) {
        return _this.tabScroller_.scrollTo(scrollX);
      },
      incrementScroll: function incrementScroll(scrollXIncrement) {
        return _this.tabScroller_.incrementScroll(scrollXIncrement);
      },
      getScrollPosition: function getScrollPosition() {
        return _this.tabScroller_.getScrollPosition();
      },
      getScrollContentWidth: function getScrollContentWidth() {
        return _this.tabScroller_.getScrollContentWidth();
      },
      getOffsetWidth: function getOffsetWidth() {
        return _this.root_.offsetWidth;
      },
      isRTL: function isRTL() {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setActiveTab: function setActiveTab(index) {
        return _this.foundation_.activateTab(index);
      },
      activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
        return _this.tabList_[index].activate(clientRect);
      },
      deactivateTabAtIndex: function deactivateTabAtIndex(index) {
        return _this.tabList_[index].deactivate();
      },
      focusTabAtIndex: function focusTabAtIndex(index) {
        return _this.tabList_[index].focus();
      },
      getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
        return _this.tabList_[index].computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
        return _this.tabList_[index].computeDimensions();
      },
      getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
        for (var i = 0; i < _this.tabList_.length; i++) {
          if (_this.tabList_[i].active) {
            return i;
          }
        }

        return -1;
      },
      getFocusedTabIndex: function getFocusedTabIndex() {
        var tabElements = _this.getTabElements_();

        var activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: function getIndexOfTabById(id) {
        for (var i = 0; i < _this.tabList_.length; i++) {
          if (_this.tabList_[i].id === id) {
            return i;
          }
        }

        return -1;
      },
      getTabListLength: function getTabListLength() {
        return _this.tabList_.length;
      },
      notifyTabActivated: function notifyTabActivated(index) {
        return _this.emit(strings$9.TAB_ACTIVATED_EVENT, {
          index: index
        }, true);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTabBarFoundation(adapter);
  };
  /**
   * Activates the tab at the given index
   * @param index The index of the tab
   */


  MDCTabBar.prototype.activateTab = function (index) {
    this.foundation_.activateTab(index);
  };
  /**
   * Scrolls the tab at the given index into view
   * @param index THe index of the tab
   */


  MDCTabBar.prototype.scrollIntoView = function (index) {
    this.foundation_.scrollIntoView(index);
  };
  /**
   * Returns all the tab elements in a nice clean array
   */


  MDCTabBar.prototype.getTabElements_ = function () {
    return [].slice.call(this.root_.querySelectorAll(strings$9.TAB_SELECTOR));
  };
  /**
   * Instantiates tab components on all child tab elements
   */


  MDCTabBar.prototype.instantiateTabs_ = function (tabFactory) {
    return this.getTabElements_().map(function (el) {
      el.id = el.id || "mdc-tab-" + ++tabIdCounter;
      return tabFactory(el);
    });
  };
  /**
   * Instantiates tab scroller component on the child tab scroller element
   */


  MDCTabBar.prototype.instantiateTabScroller_ = function (tabScrollerFactory) {
    var tabScrollerElement = this.root_.querySelector(strings$9.TAB_SCROLLER_SELECTOR);

    if (tabScrollerElement) {
      return tabScrollerFactory(tabScrollerElement);
    }

    return null;
  };

  return MDCTabBar;
}(MDCComponent$2);

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
var cssClasses$8 = {
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
  SCROLL_TEST: 'mdc-tab-scroller__test'
};
var strings$a = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
};

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
/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */

var horizontalScrollbarHeight_$1;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */

function computeHorizontalScrollbarHeight$1(documentObj, shouldCacheResult) {
  if (shouldCacheResult === void 0) {
    shouldCacheResult = true;
  }

  if (shouldCacheResult && typeof horizontalScrollbarHeight_$1 !== 'undefined') {
    return horizontalScrollbarHeight_$1;
  }

  var el = documentObj.createElement('div');
  el.classList.add(cssClasses$8.SCROLL_TEST);
  documentObj.body.appendChild(el);
  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_$1 = horizontalScrollbarHeight;
  }

  return horizontalScrollbarHeight;
}

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
var _extendStatics$3 = function extendStatics(d, b) {
  _extendStatics$3 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics$3(d, b);
};

function __extends$3(d, b) {
  _extendStatics$3(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign$3 = function __assign() {
  _assign$3 = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign$3.apply(this, arguments);
};
function __read$3(o, n) {
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
function __spread$3() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read$3(arguments[i]));
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
var MDCFoundation$3 =
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

var MDCComponent$3 =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread$3(args)); // Note that we initialize foundation here and not within the constructor's default param so that
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
    return new MDCComponent(root, new MDCFoundation$3({}));
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
var supportsPassive_$2;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive$2(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_$2 === undefined || forceRefresh) {
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


    supportsPassive_$2 = isSupported_1;
  }

  return supportsPassive_$2 ? {
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
function matches$2(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
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
var MDCTabScrollerRTL$1 =
/** @class */
function () {
  function MDCTabScrollerRTL(adapter) {
    this.adapter_ = adapter;
  }

  return MDCTabScrollerRTL;
}();

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

var MDCTabScrollerRTLDefault$1 =
/** @class */
function (_super) {
  __extends$3(MDCTabScrollerRTLDefault, _super);

  function MDCTabScrollerRTLDefault() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var right = this.calculateScrollEdges_().right; // Scroll values on most browsers are ints instead of floats so we round

    return Math.round(right - currentScrollLeft);
  };

  MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
    return scrollX;
  };

  MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };

  MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };

  return MDCTabScrollerRTLDefault;
}(MDCTabScrollerRTL$1);

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

var MDCTabScrollerRTLNegative$1 =
/** @class */
function (_super) {
  __extends$3(MDCTabScrollerRTLNegative, _super);

  function MDCTabScrollerRTLNegative() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return Math.round(translateX - currentScrollLeft);
  };

  MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(-scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
    return scrollX - translateX;
  };

  MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: rootWidth - contentWidth,
      right: 0
    };
  };

  MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.max(Math.min(edges.right, scrollX), edges.left);
  };

  return MDCTabScrollerRTLNegative;
}(MDCTabScrollerRTL$1);

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

var MDCTabScrollerRTLReverse$1 =
/** @class */
function (_super) {
  __extends$3(MDCTabScrollerRTLReverse, _super);

  function MDCTabScrollerRTLReverse() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // Scroll values on most browsers are ints instead of floats so we round

    return Math.round(currentScrollLeft - translateX);
  };

  MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };

  MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };

  MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
    return scrollX + translateX;
  };

  MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: contentWidth - rootWidth,
      right: 0
    };
  };

  MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.right, scrollX), edges.left);
  };

  return MDCTabScrollerRTLReverse;
}(MDCTabScrollerRTL$1);

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

var MDCTabScrollerFoundation$1 =
/** @class */
function (_super) {
  __extends$3(MDCTabScrollerFoundation, _super);

  function MDCTabScrollerFoundation(adapter) {
    var _this = _super.call(this, _assign$3({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
    /**
     * Controls whether we should handle the transitionend and interaction events during the animation.
     */


    _this.isAnimating_ = false;
    return _this;
  }

  Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$8;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation, "strings", {
    get: function get() {
      return strings$a;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        eventTargetMatchesSelector: function eventTargetMatchesSelector() {
          return false;
        },
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        addScrollAreaClass: function addScrollAreaClass() {
          return undefined;
        },
        setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {
          return undefined;
        },
        setScrollContentStyleProperty: function setScrollContentStyleProperty() {
          return undefined;
        },
        getScrollContentStyleValue: function getScrollContentStyleValue() {
          return '';
        },
        setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {
          return undefined;
        },
        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
          return 0;
        },
        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
          return 0;
        },
        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
          return 0;
        },
        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        computeScrollContentClientRect: function computeScrollContentClientRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabScrollerFoundation.prototype.init = function () {
    // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
    // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
    var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
    this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
    this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
  };
  /**
   * Computes the current visual scroll position
   */


  MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
    if (this.isRTL_()) {
      return this.computeCurrentScrollPositionRTL_();
    }

    var currentTranslateX = this.calculateCurrentTranslateX_();
    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return scrollLeft - currentTranslateX;
  };
  /**
   * Handles interaction events that occur during transition
   */


  MDCTabScrollerFoundation.prototype.handleInteraction = function () {
    // Early exit if we aren't animating
    if (!this.isAnimating_) {
      return;
    } // Prevent other event listeners from handling this event


    this.stopScrollAnimation_();
  };
  /**
   * Handles the transitionend event
   */


  MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
    // Early exit if we aren't animating or the event was triggered by a different element.
    var evtTarget = evt.target;

    if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
      return;
    }

    this.isAnimating_ = false;
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
  };
  /**
   * Increment the scroll value by the scrollXIncrement
   * @param scrollXIncrement The value by which to increment the scroll position
   */


  MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
    // Early exit for non-operational increment values
    if (scrollXIncrement === 0) {
      return;
    }

    if (this.isRTL_()) {
      return this.incrementScrollRTL_(scrollXIncrement);
    }

    this.incrementScroll_(scrollXIncrement);
  };
  /**
   * Scrolls to the given scrollX value
   */


  MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
    if (this.isRTL_()) {
      return this.scrollToRTL_(scrollX);
    }

    this.scrollTo_(scrollX);
  };
  /**
   * @return Browser-specific {@link MDCTabScrollerRTL} instance.
   */


  MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
    if (!this.rtlScrollerInstance_) {
      this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
    }

    return this.rtlScrollerInstance_;
  };
  /**
   * @return translateX value from a CSS matrix transform function string.
   */


  MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
    var transformValue = this.adapter_.getScrollContentStyleValue('transform'); // Early exit if no transform is present

    if (transformValue === 'none') {
      return 0;
    } // The transform value comes back as a matrix transformation in the form
    // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
    // we're going to grab all the parenthesized values, strip out tx, and
    // parse it.


    var match = /\((.+?)\)/.exec(transformValue);

    if (!match) {
      return 0;
    }

    var matrixParams = match[1]; // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
    // @ts-ignore These unused variables should retain their semantic names for clarity.

    var _a = __read$3(matrixParams.split(','), 6),
        a = _a[0],
        b = _a[1],
        c = _a[2],
        d = _a[3],
        tx = _a[4],
        ty = _a[5];

    return parseFloat(tx); // tslint:disable-line:ban
  };
  /**
   * Calculates a safe scroll value that is > 0 and < the max scroll value
   * @param scrollX The distance to scroll
   */


  MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };

  MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
    var translateX = this.calculateCurrentTranslateX_();
    return this.getRTLScroller().getScrollPositionRTL(translateX);
  };

  MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };
  /**
   * Internal scroll method
   * @param scrollX The new scroll position
   */


  MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
    var currentScrollX = this.getScrollPosition();
    var safeScrollX = this.clampScrollValue_(scrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    this.animate_({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta
    });
  };
  /**
   * Internal RTL scroll method
   * @param scrollX The new scroll position
   */


  MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
    var animation = this.getRTLScroller().scrollToRTL(scrollX);
    this.animate_(animation);
  };
  /**
   * Internal increment scroll method
   * @param scrollX The new scroll position increment
   */


  MDCTabScrollerFoundation.prototype.incrementScroll_ = function (scrollX) {
    var currentScrollX = this.getScrollPosition();
    var targetScrollX = scrollX + currentScrollX;
    var safeScrollX = this.clampScrollValue_(targetScrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    this.animate_({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta
    });
  };
  /**
   * Internal increment scroll RTL method
   * @param scrollX The new scroll position RTL increment
   */


  MDCTabScrollerFoundation.prototype.incrementScrollRTL_ = function (scrollX) {
    var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
    this.animate_(animation);
  };
  /**
   * Animates the tab scrolling
   * @param animation The animation to apply
   */


  MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
    var _this = this; // Early exit if translateX is 0, which means there's no animation to perform


    if (animation.scrollDelta === 0) {
      return;
    }

    this.stopScrollAnimation_(); // This animation uses the FLIP approach.
    // Read more here: https://aerotwist.com/blog/flip-your-animations/

    this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
    this.adapter_.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)"); // Force repaint

    this.adapter_.computeScrollAreaClientRect();
    requestAnimationFrame(function () {
      _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);

      _this.adapter_.setScrollContentStyleProperty('transform', 'none');
    });
    this.isAnimating_ = true;
  };
  /**
   * Stops scroll animation
   */


  MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
    this.isAnimating_ = false;
    var currentScrollPosition = this.getAnimatingScrollPosition_();
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
    this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
  };
  /**
   * Gets the current scroll position during animation
   */


  MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
    var currentTranslateX = this.calculateCurrentTranslateX_();
    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();

    if (this.isRTL_()) {
      return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
    }

    return scrollLeft - currentTranslateX;
  };
  /**
   * Determines the RTL Scroller to use
   */


  MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
    // Browsers have three different implementations of scrollLeft in RTL mode,
    // dependent on the browser. The behavior is based off the max LTR
    // scrollLeft value and 0.
    //
    // * Default scrolling in RTL *
    //    - Left-most value: 0
    //    - Right-most value: Max LTR scrollLeft value
    //
    // * Negative scrolling in RTL *
    //    - Left-most value: Negated max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // * Reverse scrolling in RTL *
    //    - Left-most value: Max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // We use those principles below to determine which RTL scrollLeft
    // behavior is implemented in the current browser.
    var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
    var newScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // If the newScrollLeft value is negative,then we know that the browser has
    // implemented negative RTL scrolling, since all other implementations have
    // only positive values.

    if (newScrollLeft < 0) {
      // Undo the scrollLeft test check
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
      return new MDCTabScrollerRTLNegative$1(this.adapter_);
    }

    var rootClientRect = this.adapter_.computeScrollAreaClientRect();
    var contentClientRect = this.adapter_.computeScrollContentClientRect();
    var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right); // Undo the scrollLeft test check

    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft); // By calculating the clientRect of the root element and the clientRect of
    // the content element, we can determine how much the scroll value changed
    // when we performed the scrollLeft subtraction above.

    if (rightEdgeDelta === newScrollLeft) {
      return new MDCTabScrollerRTLReverse$1(this.adapter_);
    }

    return new MDCTabScrollerRTLDefault$1(this.adapter_);
  };

  MDCTabScrollerFoundation.prototype.isRTL_ = function () {
    return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
  };

  return MDCTabScrollerFoundation;
}(MDCFoundation$3);

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

var MDCTabScroller$1 =
/** @class */
function (_super) {
  __extends$3(MDCTabScroller, _super);

  function MDCTabScroller() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScroller.attachTo = function (root) {
    return new MDCTabScroller(root);
  };

  MDCTabScroller.prototype.initialize = function () {
    this.area_ = this.root_.querySelector(MDCTabScrollerFoundation$1.strings.AREA_SELECTOR);
    this.content_ = this.root_.querySelector(MDCTabScrollerFoundation$1.strings.CONTENT_SELECTOR);
  };

  MDCTabScroller.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleInteraction_ = function () {
      return _this.foundation_.handleInteraction();
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.area_.addEventListener('wheel', this.handleInteraction_, applyPassive$2());
    this.area_.addEventListener('touchstart', this.handleInteraction_, applyPassive$2());
    this.area_.addEventListener('pointerdown', this.handleInteraction_, applyPassive$2());
    this.area_.addEventListener('mousedown', this.handleInteraction_, applyPassive$2());
    this.area_.addEventListener('keydown', this.handleInteraction_, applyPassive$2());
    this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCTabScroller.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.area_.removeEventListener('wheel', this.handleInteraction_, applyPassive$2());
    this.area_.removeEventListener('touchstart', this.handleInteraction_, applyPassive$2());
    this.area_.removeEventListener('pointerdown', this.handleInteraction_, applyPassive$2());
    this.area_.removeEventListener('mousedown', this.handleInteraction_, applyPassive$2());
    this.area_.removeEventListener('keydown', this.handleInteraction_, applyPassive$2());
    this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCTabScroller.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
        return matches$2(evtTarget, selector);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      addScrollAreaClass: function addScrollAreaClass(className) {
        return _this.area_.classList.add(className);
      },
      setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
        return _this.area_.style.setProperty(prop, value);
      },
      setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
        return _this.content_.style.setProperty(prop, value);
      },
      getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
        return window.getComputedStyle(_this.content_).getPropertyValue(propName);
      },
      setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
        return _this.area_.scrollLeft = scrollX;
      },
      getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
        return _this.area_.scrollLeft;
      },
      getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
        return _this.content_.offsetWidth;
      },
      getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
        return _this.area_.offsetWidth;
      },
      computeScrollAreaClientRect: function computeScrollAreaClientRect() {
        return _this.area_.getBoundingClientRect();
      },
      computeScrollContentClientRect: function computeScrollContentClientRect() {
        return _this.content_.getBoundingClientRect();
      },
      computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
        return computeHorizontalScrollbarHeight$1(document);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCTabScrollerFoundation$1(adapter);
  };
  /**
   * Returns the current visual scroll position
   */


  MDCTabScroller.prototype.getScrollPosition = function () {
    return this.foundation_.getScrollPosition();
  };
  /**
   * Returns the width of the scroll content
   */


  MDCTabScroller.prototype.getScrollContentWidth = function () {
    return this.content_.offsetWidth;
  };
  /**
   * Increments the scroll value by the given amount
   * @param scrollXIncrement The pixel value by which to increment the scroll value
   */


  MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
    this.foundation_.incrementScroll(scrollXIncrement);
  };
  /**
   * Scrolls to the given pixel position
   * @param scrollX The pixel value to scroll to
   */


  MDCTabScroller.prototype.scrollTo = function (scrollX) {
    this.foundation_.scrollTo(scrollX);
  };

  return MDCTabScroller;
}(MDCComponent$3);

var file$2 = "home/hperrin/repos/svelte-material-ui/packages/tab-scroller/TabScroller.svelte";

function create_fragment$2(ctx) {
  var div2;
  var div1;
  var div0;
  var useActions_action;
  var useActions_action_1;
  var useActions_action_2;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[17].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[16], null);
  var div0_levels = [{
    class: "mdc-tab-scroller__scroll-content " +
    /*scrollContent$class*/
    ctx[5]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[8], "scrollContent$"), ["use", "class"])];
  var div0_data = {};

  for (var i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }

  var div1_levels = [{
    class: "mdc-tab-scroller__scroll-area " +
    /*scrollArea$class*/
    ctx[3]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[8], "scrollArea$"), ["use", "class"])];
  var div1_data = {};

  for (var _i = 0; _i < div1_levels.length; _i += 1) {
    div1_data = assign(div1_data, div1_levels[_i]);
  }

  var div2_levels = [{
    class: "mdc-tab-scroller " +
    /*className*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[8], ["use", "class", "scrollArea$", "scrollContent$"])];
  var div2_data = {};

  for (var _i2 = 0; _i2 < div2_levels.length; _i2 += 1) {
    div2_data = assign(div2_data, div2_levels[_i2]);
  }

  var block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div0, div0_data);
      add_location(div0, file$2, 12, 4, 371);
      set_attributes(div1, div1_data);
      add_location(div1, file$2, 7, 2, 188);
      set_attributes(div2, div2_data);
      add_location(div2, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }

      useActions_action = useActions.call(null, div0,
      /*scrollContent$use*/
      ctx[4]) || {};
      useActions_action_1 = useActions.call(null, div1,
      /*scrollArea$use*/
      ctx[2]) || {};
      /*div2_binding*/

      ctx[18](div2);
      useActions_action_2 = useActions.call(null, div2,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, div2) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      65536) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[16], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[16], dirty, null));
      }

      set_attributes(div0, get_spread_update(div0_levels, [dirty[0] &
      /*scrollContent$class*/
      32 && {
        class: "mdc-tab-scroller__scroll-content " +
        /*scrollContent$class*/
        ctx[5]
      }, dirty[0] &
      /*$$props*/
      256 && exclude(prefixFilter(
      /*$$props*/
      ctx[8], "scrollContent$"), ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*scrollContent$use*/
      16) useActions_action.update.call(null,
      /*scrollContent$use*/
      ctx[4]);
      set_attributes(div1, get_spread_update(div1_levels, [dirty[0] &
      /*scrollArea$class*/
      8 && {
        class: "mdc-tab-scroller__scroll-area " +
        /*scrollArea$class*/
        ctx[3]
      }, dirty[0] &
      /*$$props*/
      256 && exclude(prefixFilter(
      /*$$props*/
      ctx[8], "scrollArea$"), ["use", "class"])]));
      if (is_function(useActions_action_1.update) && dirty[0] &
      /*scrollArea$use*/
      4) useActions_action_1.update.call(null,
      /*scrollArea$use*/
      ctx[2]);
      set_attributes(div2, get_spread_update(div2_levels, [dirty[0] &
      /*className*/
      2 && {
        class: "mdc-tab-scroller " +
        /*className*/
        ctx[1]
      }, dirty[0] &
      /*$$props*/
      256 && exclude(
      /*$$props*/
      ctx[8], ["use", "class", "scrollArea$", "scrollContent$"])]));
      if (is_function(useActions_action_2.update) && dirty[0] &
      /*use*/
      1) useActions_action_2.update.call(null,
      /*use*/
      ctx[0]);
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
      if (detaching) detach_dev(div2);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
      /*div2_binding*/

      ctx[18](null);
      if (useActions_action_2 && is_function(useActions_action_2.destroy)) useActions_action_2.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$scrollArea$ = _$$props3.scrollArea$use,
      scrollArea$use = _$$props3$scrollArea$ === void 0 ? [] : _$$props3$scrollArea$;
  var _$$props4 = $$props,
      _$$props4$scrollArea$ = _$$props4.scrollArea$class,
      scrollArea$class = _$$props4$scrollArea$ === void 0 ? "" : _$$props4$scrollArea$;
  var _$$props5 = $$props,
      _$$props5$scrollConte = _$$props5.scrollContent$use,
      scrollContent$use = _$$props5$scrollConte === void 0 ? [] : _$$props5$scrollConte;
  var _$$props6 = $$props,
      _$$props6$scrollConte = _$$props6.scrollContent$class,
      scrollContent$class = _$$props6$scrollConte === void 0 ? "" : _$$props6$scrollConte;
  var element;
  var tabScroller;
  var instantiate = getContext("SMUI:tab-scroller:instantiate");
  var getInstance = getContext("SMUI:tab-scroller:getInstance");
  onMount(function _callee() {
    return _regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(instantiate !== false)) {
              _context.next = 4;
              break;
            }

            tabScroller = new MDCTabScroller$1(element);
            _context.next = 7;
            break;

          case 4:
            _context.next = 6;
            return _regeneratorRuntime.awrap(getInstance());

          case 6:
            tabScroller = _context.sent;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  onDestroy(function () {
    tabScroller && tabScroller.destroy();
  });

  function scrollTo() {
    var _tabScroller;

    return (_tabScroller = tabScroller).scrollTo.apply(_tabScroller, arguments);
  }

  function incrementScroll() {
    var _tabScroller2;

    return (_tabScroller2 = tabScroller).incrementScroll.apply(_tabScroller2, arguments);
  }

  function getScrollPosition() {
    var _tabScroller3;

    return (_tabScroller3 = tabScroller).getScrollPosition.apply(_tabScroller3, arguments);
  }

  function getScrollContentWidth() {
    var _tabScroller4;

    return (_tabScroller4 = tabScroller).getScrollContentWidth.apply(_tabScroller4, arguments);
  }

  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(6, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("scrollArea$use" in $$new_props) $$invalidate(2, scrollArea$use = $$new_props.scrollArea$use);
    if ("scrollArea$class" in $$new_props) $$invalidate(3, scrollArea$class = $$new_props.scrollArea$class);
    if ("scrollContent$use" in $$new_props) $$invalidate(4, scrollContent$use = $$new_props.scrollContent$use);
    if ("scrollContent$class" in $$new_props) $$invalidate(5, scrollContent$class = $$new_props.scrollContent$class);
    if ("$$scope" in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      scrollArea$use: scrollArea$use,
      scrollArea$class: scrollArea$class,
      scrollContent$use: scrollContent$use,
      scrollContent$class: scrollContent$class,
      element: element,
      tabScroller: tabScroller,
      instantiate: instantiate,
      getInstance: getInstance
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("scrollArea$use" in $$props) $$invalidate(2, scrollArea$use = $$new_props.scrollArea$use);
    if ("scrollArea$class" in $$props) $$invalidate(3, scrollArea$class = $$new_props.scrollArea$class);
    if ("scrollContent$use" in $$props) $$invalidate(4, scrollContent$use = $$new_props.scrollContent$use);
    if ("scrollContent$class" in $$props) $$invalidate(5, scrollContent$class = $$new_props.scrollContent$class);
    if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
    if ("tabScroller" in $$props) tabScroller = $$new_props.tabScroller;
    if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
    if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
  };

  $$props = exclude_internal_props($$props);
  return [use, className, scrollArea$use, scrollArea$class, scrollContent$use, scrollContent$class, element, forwardEvents, $$props, scrollTo, incrementScroll, getScrollPosition, getScrollContentWidth, tabScroller, instantiate, getInstance, $$scope, $$slots, div2_binding];
}

var TabScroller =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(TabScroller, _SvelteComponentDev);

  function TabScroller(options) {
    var _this;

    _classCallCheck(this, TabScroller);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabScroller).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1,
      scrollArea$use: 2,
      scrollArea$class: 3,
      scrollContent$use: 4,
      scrollContent$class: 5,
      scrollTo: 9,
      incrementScroll: 10,
      getScrollPosition: 11,
      getScrollContentWidth: 12
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TabScroller",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(TabScroller, [{
    key: "use",
    get: function get() {
      throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrollArea$use",
    get: function get() {
      throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrollArea$class",
    get: function get() {
      throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrollContent$use",
    get: function get() {
      throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrollContent$class",
    get: function get() {
      throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrollTo",
    get: function get() {
      return this.$$.ctx[9];
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "incrementScroll",
    get: function get() {
      return this.$$.ctx[10];
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getScrollPosition",
    get: function get() {
      return this.$$.ctx[11];
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getScrollContentWidth",
    get: function get() {
      return this.$$.ctx[12];
    },
    set: function set(value) {
      throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TabScroller;
}(SvelteComponentDev);

var file$3 = "home/hperrin/repos/svelte-material-ui/packages/tab-bar/TabBar.svelte";

var get_default_slot_changes = function get_default_slot_changes(dirty) {
  return {
    tab: dirty[0] &
    /*tabs*/
    4
  };
};

var get_default_slot_context = function get_default_slot_context(ctx) {
  return {
    tab:
    /*tab*/
    ctx[28]
  };
};

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[28] = list[i];
  child_ctx[30] = i;
  return child_ctx;
} // (13:4) {#each tabs as tab, i (key(tab))}


function create_each_block(key_2, ctx) {
  var first;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[25].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[27], get_default_slot_context);
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
      /*$$scope, tabs*/
      134217732) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[27], get_default_slot_context), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[27], dirty, get_default_slot_changes));
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
    source: "(13:4) {#each tabs as tab, i (key(tab))}",
    ctx: ctx
  });
  return block;
} // (10:2) <TabScroller     {...prefixFilter($$props, 'tabScroller$')}   >


function create_default_slot$1(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var current;
  var each_value =
  /*tabs*/
  ctx[2];

  var get_key = function get_key(ctx) {
    return (
      /*key*/
      ctx[3](
      /*tab*/
      ctx[28])
    );
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var each_value =
      /*tabs*/
      ctx[2];
      group_outros();
      each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
      check_outros();
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].d(detaching);
      }

      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(10:2) <TabScroller     {...prefixFilter($$props, 'tabScroller$')}   >",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var tabscroller_spread_levels = [prefixFilter(
  /*$$props*/
  ctx[7], "tabScroller$")];
  var tabscroller_props = {
    $$slots: {
      default: [create_default_slot$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < tabscroller_spread_levels.length; i += 1) {
    tabscroller_props = assign(tabscroller_props, tabscroller_spread_levels[i]);
  }

  var tabscroller = new TabScroller({
    props: tabscroller_props,
    $$inline: true
  });
  var div_levels = [{
    class: "mdc-tab-bar " +
    /*className*/
    ctx[1]
  }, {
    role: "tablist"
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "tabs", "key", "focusOnActivate", "useAutomaticActivation", "activeIndex", "tabScroller$"])];
  var div_data = {};

  for (var _i7 = 0; _i7 < div_levels.length; _i7 += 1) {
    div_data = assign(div_data, div_levels[_i7]);
  }

  var block = {
    c: function create() {
      div = element("div");
      create_component(tabscroller.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        role: true
      });
      var div_nodes = children(div);
      claim_component(tabscroller.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$3, 0, 0, 0);
      dispose = listen_dev(div, "MDCTabBar:activated",
      /*activatedHandler*/
      ctx[6], false, false, false);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(tabscroller, div, null);
      /*div_binding*/

      ctx[26](div);
      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[5].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      var tabscroller_changes = dirty[0] &
      /*$$props*/
      128 ? get_spread_update(tabscroller_spread_levels, [get_spread_object(prefixFilter(
      /*$$props*/
      ctx[7], "tabScroller$"))]) : {};

      if (dirty[0] &
      /*$$scope, tabs*/
      134217732) {
        tabscroller_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabscroller.$set(tabscroller_changes);
      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className*/
      2 && {
        class: "mdc-tab-bar " +
        /*className*/
        ctx[1]
      }, {
        role: "tablist"
      }, dirty[0] &
      /*$$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "tabs", "key", "focusOnActivate", "useAutomaticActivation", "activeIndex", "tabScroller$"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tabscroller.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabscroller.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(tabscroller);
      /*div_binding*/

      ctx[26](null);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      dispose();
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

function instance$3($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component, ["MDCTabBar:activated"]);

  var uninitializedValue = function uninitializedValue() {};

  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$tabs = _$$props3.tabs,
      tabs = _$$props3$tabs === void 0 ? [] : _$$props3$tabs;
  var _$$props4 = $$props,
      _$$props4$key = _$$props4.key,
      key = _$$props4$key === void 0 ? function (tab) {
    return tab;
  } : _$$props4$key;
  var _$$props5 = $$props,
      _$$props5$focusOnActi = _$$props5.focusOnActivate,
      focusOnActivate = _$$props5$focusOnActi === void 0 ? true : _$$props5$focusOnActi;
  var _$$props6 = $$props,
      _$$props6$useAutomati = _$$props6.useAutomaticActivation,
      useAutomaticActivation = _$$props6$useAutomati === void 0 ? true : _$$props6$useAutomati;
  var _$$props7 = $$props,
      _$$props7$activeIndex = _$$props7.activeIndex,
      activeIndex = _$$props7$activeIndex === void 0 ? uninitializedValue : _$$props7$activeIndex;
  var _$$props8 = $$props,
      _$$props8$active = _$$props8.active,
      active = _$$props8$active === void 0 ? uninitializedValue : _$$props8$active;

  if (activeIndex === uninitializedValue && active === uninitializedValue) {
    activeIndex = 0;
    active = tabs[0];
  } else if (activeIndex === uninitializedValue) {
    activeIndex = tabs.indexOf(active);
  } else if (active === uninitializedValue) {
    active = tabs[activeIndex];
  }

  var element;
  var tabBar;
  var tabScrollerPromiseResolve;
  var tabScrollerPromise = new Promise(function (resolve) {
    return tabScrollerPromiseResolve = resolve;
  });
  var tabPromiseResolve = [];
  var tabPromise = tabs.map(function (tab, i) {
    return new Promise(function (resolve) {
      return tabPromiseResolve[i] = resolve;
    });
  });
  setContext("SMUI:tab-scroller:instantiate", false);
  setContext("SMUI:tab-scroller:getInstance", getTabScrollerInstancePromise);
  setContext("SMUI:tab:instantiate", false);
  setContext("SMUI:tab:getInstance", getTabInstancePromise);
  setContext("SMUI:tab:active", active);
  var previousActiveIndex = activeIndex;
  var previousActive = active;
  onMount(function () {
    $$invalidate(14, tabBar = new MDCTabBar(element));
    tabScrollerPromiseResolve(tabBar.tabScroller_);

    for (var i = 0; i < tabs.length; i++) {
      tabPromiseResolve[i](tabBar.tabList_[i]);
    }
  });
  onDestroy(function () {
    tabBar && tabBar.destroy();
  });

  function getTabScrollerInstancePromise() {
    return tabScrollerPromise;
  }

  function getTabInstancePromise(tabEntry) {
    return tabPromise[tabs.indexOf(tabEntry)];
  }

  function updateIndexAfterActivate(index) {
    $$invalidate(8, activeIndex = index);
    $$invalidate(17, previousActiveIndex = index);
    $$invalidate(9, active = tabs[index]);
    $$invalidate(18, previousActive = tabs[index]);
  }

  function activatedHandler(e) {
    updateIndexAfterActivate(e.detail.index);
  }

  function activateTab(index) {
    var _tabBar;

    updateIndexAfterActivate(index);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_tabBar = tabBar).activateTab.apply(_tabBar, [index].concat(args));
  }

  function scrollIntoView() {
    var _tabBar2;

    return (_tabBar2 = tabBar).scrollIntoView.apply(_tabBar2, arguments);
  }

  var _$$props9 = $$props,
      _$$props9$$$slots = _$$props9.$$slots,
      $$slots = _$$props9$$$slots === void 0 ? {} : _$$props9$$$slots,
      $$scope = _$$props9.$$scope;

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("tabs" in $$new_props) $$invalidate(2, tabs = $$new_props.tabs);
    if ("key" in $$new_props) $$invalidate(3, key = $$new_props.key);
    if ("focusOnActivate" in $$new_props) $$invalidate(10, focusOnActivate = $$new_props.focusOnActivate);
    if ("useAutomaticActivation" in $$new_props) $$invalidate(11, useAutomaticActivation = $$new_props.useAutomaticActivation);
    if ("activeIndex" in $$new_props) $$invalidate(8, activeIndex = $$new_props.activeIndex);
    if ("active" in $$new_props) $$invalidate(9, active = $$new_props.active);
    if ("$$scope" in $$new_props) $$invalidate(27, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      uninitializedValue: uninitializedValue,
      use: use,
      className: className,
      tabs: tabs,
      key: key,
      focusOnActivate: focusOnActivate,
      useAutomaticActivation: useAutomaticActivation,
      activeIndex: activeIndex,
      active: active,
      element: element,
      tabBar: tabBar,
      tabScrollerPromiseResolve: tabScrollerPromiseResolve,
      tabScrollerPromise: tabScrollerPromise,
      tabPromiseResolve: tabPromiseResolve,
      tabPromise: tabPromise,
      previousActiveIndex: previousActiveIndex,
      previousActive: previousActive
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("uninitializedValue" in $$props) uninitializedValue = $$new_props.uninitializedValue;
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("tabs" in $$props) $$invalidate(2, tabs = $$new_props.tabs);
    if ("key" in $$props) $$invalidate(3, key = $$new_props.key);
    if ("focusOnActivate" in $$props) $$invalidate(10, focusOnActivate = $$new_props.focusOnActivate);
    if ("useAutomaticActivation" in $$props) $$invalidate(11, useAutomaticActivation = $$new_props.useAutomaticActivation);
    if ("activeIndex" in $$props) $$invalidate(8, activeIndex = $$new_props.activeIndex);
    if ("active" in $$props) $$invalidate(9, active = $$new_props.active);
    if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
    if ("tabBar" in $$props) $$invalidate(14, tabBar = $$new_props.tabBar);
    if ("tabScrollerPromiseResolve" in $$props) tabScrollerPromiseResolve = $$new_props.tabScrollerPromiseResolve;
    if ("tabScrollerPromise" in $$props) tabScrollerPromise = $$new_props.tabScrollerPromise;
    if ("tabPromiseResolve" in $$props) tabPromiseResolve = $$new_props.tabPromiseResolve;
    if ("tabPromise" in $$props) tabPromise = $$new_props.tabPromise;
    if ("previousActiveIndex" in $$props) $$invalidate(17, previousActiveIndex = $$new_props.previousActiveIndex);
    if ("previousActive" in $$props) $$invalidate(18, previousActive = $$new_props.previousActive);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*tabBar, focusOnActivate*/
    17408) {
       if (tabBar) {
        $$invalidate(14, tabBar.focusOnActivate = focusOnActivate, tabBar);
      }
    }

    if ($$self.$$.dirty[0] &
    /*tabBar, useAutomaticActivation*/
    18432) {
       if (tabBar) {
        $$invalidate(14, tabBar.useAutomaticActivation = useAutomaticActivation, tabBar);
      }
    }

    if ($$self.$$.dirty[0] &
    /*tabBar, tabs, activeIndex*/
    16644) {
       if (tabBar) {
        $$invalidate(9, active = tabs[activeIndex]);
      }
    }

    if ($$self.$$.dirty[0] &
    /*tabBar, previousActiveIndex, activeIndex*/
    147712) {
       if (tabBar && previousActiveIndex !== activeIndex) {
        activateTab(activeIndex);
      }
    }

    if ($$self.$$.dirty[0] &
    /*tabBar, previousActive, active, tabs*/
    279044) {
       if (tabBar && previousActive !== active) {
        activateTab(tabs.indexOf(active));
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [use, className, tabs, key, element, forwardEvents, activatedHandler, $$props, activeIndex, active, focusOnActivate, useAutomaticActivation, activateTab, scrollIntoView, tabBar, tabScrollerPromiseResolve, tabPromiseResolve, previousActiveIndex, previousActive, uninitializedValue, tabScrollerPromise, tabPromise, getTabScrollerInstancePromise, getTabInstancePromise, updateIndexAfterActivate, $$slots, div_binding, $$scope];
}

var TabBar =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(TabBar, _SvelteComponentDev);

  function TabBar(options) {
    var _this;

    _classCallCheck(this, TabBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabBar).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1,
      tabs: 2,
      key: 3,
      focusOnActivate: 10,
      useAutomaticActivation: 11,
      activeIndex: 8,
      active: 9,
      activateTab: 12,
      scrollIntoView: 13
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TabBar",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(TabBar, [{
    key: "use",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabs",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "key",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "focusOnActivate",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "useAutomaticActivation",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activeIndex",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "active",
    get: function get() {
      throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activateTab",
    get: function get() {
      return this.$$.ctx[12];
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrollIntoView",
    get: function get() {
      return this.$$.ctx[13];
    },
    set: function set(value) {
      throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TabBar;
}(SvelteComponentDev);

var file$4 = "src/routes/demo/tabs.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1yo9hd3-style";
  style.textContent = "section.svelte-1yo9hd3>div.svelte-1yo9hd3{margin-bottom:40px}.icon-indicators.svelte-1yo9hd3 .mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:.2}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5zdmVsdGUiLCJzb3VyY2VzIjpbInRhYnMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlRhYnMgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+VGFiczwvaDI+XG5cbiAgPGRpdj5cbiAgICA8VGFiQmFyIHRhYnM9e1snSG9tZScsICdNZXJjaGFuZGlzZScsICdBYm91dCBVcyddfSBsZXQ6dGFiIGJpbmQ6YWN0aXZlPlxuICAgICAgPCEtLSBOb3RpY2UgdGhhdCB0aGUgYHRhYmAgcHJvcGVydHkgaXMgcmVxdWlyZWQhIC0tPlxuICAgICAgPFRhYiB7dGFifT5cbiAgICAgICAgPExhYmVsPnt0YWJ9PC9MYWJlbD5cbiAgICAgIDwvVGFiPlxuICAgIDwvVGFiQmFyPlxuXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDE1cHg7XCI+XG4gICAgICBQcm9ncmFtbWF0aWNhbGx5IHNlbGVjdDpcbiAgICAgIHsjZWFjaCBbJ0hvbWUnLCAnTWVyY2hhbmRpc2UnLCAnQWJvdXQgVXMnXSBhcyB0YWJ9XG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGFjdGl2ZSA9IHRhYn0+PExhYmVsPnt0YWJ9PC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge2FjdGl2ZX08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBUYWJzIHdpdGggaWNvbnMgbmV4dCB0byBsYWJlbHM6XG4gICAgPFRhYkJhciB0YWJzPXtpY29uVGFic30gbGV0OnRhYj5cbiAgICAgIDxUYWIge3RhYn0+XG4gICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57dGFiLmljb259PC9JY29uPlxuICAgICAgICA8TGFiZWw+e3RhYi5sYWJlbH08L0xhYmVsPlxuICAgICAgPC9UYWI+XG4gICAgPC9UYWJCYXI+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgS2V5ZWQgdGFicyB3aXRoIGljb25zIGFib3ZlIGxhYmVscywgcHJlc2VsZWN0ZWQgdGFiLCBpbmRpY2F0b3JzIHJlc3RyaWN0ZWQgdG8gY29udGVudCwgYW5kIGZhZGUgdHJhbnNpdGlvbjpcbiAgICA8VGFiQmFyIHRhYnM9e2tleWVkVGFic30gbGV0OnRhYiBrZXk9e3RhYiA9PiB0YWIua30gYmluZDphY3RpdmU9e2tleWVkVGFic0FjdGl2ZX0+XG4gICAgICA8VGFiIHt0YWJ9IHN0YWNrZWQ9e3RydWV9IGluZGljYXRvclNwYW5Pbmx5Q29udGVudD17dHJ1ZX0gdGFiSW5kaWNhdG9yJHRyYW5zaXRpb249XCJmYWRlXCI+XG4gICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57dGFiLmljb259PC9JY29uPlxuICAgICAgICA8TGFiZWw+e3RhYi5sYWJlbH08L0xhYmVsPlxuICAgICAgPC9UYWI+XG4gICAgPC9UYWJCYXI+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHtrZXllZFRhYnNBY3RpdmUua308L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBTY3JvbGxpbmcgdGFiczpcbiAgICA8VGFiQmFyIHRhYnM9e1suLi5BcnJheSgyMCldLm1hcCgodiwgaSkgPT4gaSArIDEpfSBsZXQ6dGFiPlxuICAgICAgPFRhYiB7dGFifT5cbiAgICAgICAgPExhYmVsPlRhYiB7dGFifTwvTGFiZWw+XG4gICAgICA8L1RhYj5cbiAgICA8L1RhYkJhcj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBNaW4gd2lkdGggdGFiczpcbiAgICA8VGFiQmFyIHRhYnM9e1snSG9tZScsICdNZXJjaGFuZGlzZScsICdBYm91dCBVcyddfSBsZXQ6dGFiPlxuICAgICAgPFRhYiB7dGFifSBtaW5XaWR0aD5cbiAgICAgICAgPExhYmVsPnt0YWJ9PC9MYWJlbD5cbiAgICAgIDwvVGFiPlxuICAgIDwvVGFiQmFyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiaWNvbi1pbmRpY2F0b3JzXCI+XG4gICAgSWNvbiBpbmRpY2F0b3JzOlxuICAgIDxUYWJCYXIgdGFicz17WydIb21lJywgJ01lcmNoYW5kaXNlJywgJ0Fib3V0IFVzJ119IGxldDp0YWI+XG4gICAgICA8VGFiIHt0YWJ9IHRhYkluZGljYXRvciR0eXBlPVwiaWNvblwiIHRhYkluZGljYXRvciRjb250ZW50JGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgPExhYmVsPnt0YWJ9PC9MYWJlbD5cbiAgICAgICAgPHNwYW4gc2xvdD1cInRhYi1pbmRpY2F0b3JcIj5zdGFyPC9zcGFuPlxuICAgICAgPC9UYWI+XG4gICAgPC9UYWJCYXI+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGFiLCB7SWNvbiwgTGFiZWx9IGZyb20gJ0BzbXVpL3RhYic7XG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnQHNtdWkvdGFiLWJhcic7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcblxuICBsZXQgYWN0aXZlID0gJ0hvbWUnO1xuICBsZXQgaWNvblRhYnMgPSBbXG4gICAge1xuICAgICAgaWNvbjogJ2FjY2Vzc190aW1lJyxcbiAgICAgIGxhYmVsOiAnUmVjZW50cydcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICduZWFyX21lJyxcbiAgICAgIGxhYmVsOiAnTmVhcmJ5J1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2Zhdm9yaXRlJyxcbiAgICAgIGxhYmVsOiAnRmF2b3JpdGVzJ1xuICAgIH1cbiAgXTtcbiAgbGV0IGtleWVkVGFicyA9IFtcbiAgICB7XG4gICAgICBrOiAxLFxuICAgICAgaWNvbjogJ2NvZGUnLFxuICAgICAgbGFiZWw6ICdDb2RlJ1xuICAgIH0sXG4gICAge1xuICAgICAgazogMixcbiAgICAgIGljb246ICdjb2RlJyxcbiAgICAgIGxhYmVsOiAnQ29kZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGs6IDMsXG4gICAgICBpY29uOiAnY29kZScsXG4gICAgICBsYWJlbDogJ0NvZGUnXG4gICAgfSxcbiAgICB7XG4gICAgICBrOiA0LFxuICAgICAgaWNvbjogJ2NvZGUnLFxuICAgICAgbGFiZWw6ICdDb2RlJ1xuICAgIH1cbiAgXTtcbiAgbGV0IGtleWVkVGFic0FjdGl2ZSA9IGtleWVkVGFic1syXTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIHNlY3Rpb24gPiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAuaWNvbi1pbmRpY2F0b3JzIDpnbG9iYWwoLm1kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50KSB7XG4gICAgb3BhY2l0eTogLjI7XG4gIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIRSxzQkFBTyxDQUFHLEdBQUcsZUFBQyxDQUFDLEFBQ2IsYUFBYSxDQUFFLElBQUksQUFDckIsQ0FBQyxBQUVELCtCQUFnQixDQUFDLEFBQVEsc0RBQXNELEFBQUUsQ0FBQyxBQUNoRixPQUFPLENBQUUsRUFBRSxBQUNiLENBQUMifQ== */";
  append_dev(document.head, style);
}

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (12:8) <Label>


function create_default_slot_21(ctx) {
  var t_value =
  /*tab*/
  ctx[7] + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(12:8) <Label>",
    ctx: ctx
  });
  return block;
} // (11:6) <Tab {tab}>


function create_default_slot_20(ctx) {
  var current;
  var label = new Label({
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
      /*$$scope, tab*/
      1152) {
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(11:6) <Tab {tab}>",
    ctx: ctx
  });
  return block;
} // (9:4) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>


function create_default_slot_19(ctx) {
  var current;
  var tab = new Tab({
    props: {
      tab:
      /*tab*/
      ctx[7],
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
      create_component(tab.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tab.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tab_changes = {};
      if (dirty[0] &
      /*tab*/
      128) tab_changes.tab =
      /*tab*/
      ctx[7];

      if (dirty[0] &
      /*$$scope*/
      1024) {
        tab_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(9:4) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>",
    ctx: ctx
  });
  return block;
} // (19:46) <Label>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text(
      /*tab*/
      ctx[7]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*tab*/
      ctx[7]);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(19:46) <Label>",
    ctx: ctx
  });
  return block;
} // (19:8) <Button on:click={() => active = tab}>


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
      1024) {
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
    source: "(19:8) <Button on:click={() => active = tab}>",
    ctx: ctx
  });
  return block;
} // (18:6) {#each ['Home', 'Merchandise', 'About Us'] as tab}


function create_each_block$1(ctx) {
  var current;

  function click_handler() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler*/
      (_ctx = ctx)[5].apply(_ctx, [
      /*tab*/
      ctx[7]].concat(args))
    );
  }

  var button = new Button({
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
  button.$on("click", click_handler);
  var block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var button_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1024) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(18:6) {#each ['Home', 'Merchandise', 'About Us'] as tab}",
    ctx: ctx
  });
  return block;
} // (30:8) <Icon class="material-icons">


function create_default_slot_16(ctx) {
  var t_value =
  /*tab*/
  ctx[7].icon + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7].icon + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(30:8) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (31:8) <Label>


function create_default_slot_15(ctx) {
  var t_value =
  /*tab*/
  ctx[7].label + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7].label + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(31:8) <Label>",
    ctx: ctx
  });
  return block;
} // (29:6) <Tab {tab}>


function create_default_slot_14(ctx) {
  var t;
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
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
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(29:6) <Tab {tab}>",
    ctx: ctx
  });
  return block;
} // (28:4) <TabBar tabs={iconTabs} let:tab>


function create_default_slot_13(ctx) {
  var current;
  var tab = new Tab({
    props: {
      tab:
      /*tab*/
      ctx[7],
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
      create_component(tab.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tab.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tab_changes = {};
      if (dirty[0] &
      /*tab*/
      128) tab_changes.tab =
      /*tab*/
      ctx[7];

      if (dirty[0] &
      /*$$scope*/
      1024) {
        tab_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(28:4) <TabBar tabs={iconTabs} let:tab>",
    ctx: ctx
  });
  return block;
} // (40:8) <Icon class="material-icons">


function create_default_slot_12(ctx) {
  var t_value =
  /*tab*/
  ctx[7].icon + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7].icon + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(40:8) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (41:8) <Label>


function create_default_slot_11(ctx) {
  var t_value =
  /*tab*/
  ctx[7].label + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7].label + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(41:8) <Label>",
    ctx: ctx
  });
  return block;
} // (39:6) <Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">


function create_default_slot_10(ctx) {
  var t;
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
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
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(39:6) <Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition=\\\"fade\\\">",
    ctx: ctx
  });
  return block;
} // (38:4) <TabBar tabs={keyedTabs} let:tab key={tab => tab.k} bind:active={keyedTabsActive}>


function create_default_slot_9(ctx) {
  var current;
  var tab = new Tab({
    props: {
      tab:
      /*tab*/
      ctx[7],
      stacked: true,
      indicatorSpanOnlyContent: true,
      tabIndicator$transition: "fade",
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
      create_component(tab.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tab.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tab_changes = {};
      if (dirty[0] &
      /*tab*/
      128) tab_changes.tab =
      /*tab*/
      ctx[7];

      if (dirty[0] &
      /*$$scope*/
      1024) {
        tab_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(38:4) <TabBar tabs={keyedTabs} let:tab key={tab => tab.k} bind:active={keyedTabsActive}>",
    ctx: ctx
  });
  return block;
} // (52:8) <Label>


function create_default_slot_8(ctx) {
  var t0;
  var t1_value =
  /*tab*/
  ctx[7] + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text("Tab ");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Tab ");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*tab*/
      128 && t1_value !== (t1_value =
      /*tab*/
      ctx[7] + "")) set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(52:8) <Label>",
    ctx: ctx
  });
  return block;
} // (51:6) <Tab {tab}>


function create_default_slot_7(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_8]
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
      /*$$scope, tab*/
      1152) {
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(51:6) <Tab {tab}>",
    ctx: ctx
  });
  return block;
} // (50:4) <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>


function create_default_slot_6(ctx) {
  var current;
  var tab = new Tab({
    props: {
      tab:
      /*tab*/
      ctx[7],
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
      create_component(tab.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tab.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tab_changes = {};
      if (dirty[0] &
      /*tab*/
      128) tab_changes.tab =
      /*tab*/
      ctx[7];

      if (dirty[0] &
      /*$$scope*/
      1024) {
        tab_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(50:4) <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>",
    ctx: ctx
  });
  return block;
} // (61:8) <Label>


function create_default_slot_5(ctx) {
  var t_value =
  /*tab*/
  ctx[7] + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(61:8) <Label>",
    ctx: ctx
  });
  return block;
} // (60:6) <Tab {tab} minWidth>


function create_default_slot_4(ctx) {
  var current;
  var label = new Label({
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
      /*$$scope, tab*/
      1152) {
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(60:6) <Tab {tab} minWidth>",
    ctx: ctx
  });
  return block;
} // (59:4) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>


function create_default_slot_3(ctx) {
  var current;
  var tab = new Tab({
    props: {
      tab:
      /*tab*/
      ctx[7],
      minWidth: true,
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
      create_component(tab.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tab.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tab_changes = {};
      if (dirty[0] &
      /*tab*/
      128) tab_changes.tab =
      /*tab*/
      ctx[7];

      if (dirty[0] &
      /*$$scope*/
      1024) {
        tab_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(59:4) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>",
    ctx: ctx
  });
  return block;
} // (70:8) <Label>


function create_default_slot_2(ctx) {
  var t_value =
  /*tab*/
  ctx[7] + "";
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
      /*tab*/
      128 && t_value !== (t_value =
      /*tab*/
      ctx[7] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(70:8) <Label>",
    ctx: ctx
  });
  return block;
} // (71:8) <span slot="tab-indicator">


function create_tab_indicator_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("star");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "star");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "tab-indicator");
      add_location(span, file$4, 70, 8, 1912);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_tab_indicator_slot.name,
    type: "slot",
    source: "(71:8) <span slot=\\\"tab-indicator\\\">",
    ctx: ctx
  });
  return block;
} // (69:6) <Tab {tab} tabIndicator$type="icon" tabIndicator$content$class="material-icons">


function create_default_slot_1$1(ctx) {
  var t;
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_2]
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
      t = space();
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
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
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: "(69:6) <Tab {tab} tabIndicator$type=\\\"icon\\\" tabIndicator$content$class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (68:4) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>


function create_default_slot$2(ctx) {
  var current;
  var tab = new Tab({
    props: {
      tab:
      /*tab*/
      ctx[7],
      tabIndicator$type: "icon",
      tabIndicator$content$class: "material-icons",
      $$slots: {
        default: [create_default_slot_1$1],
        "tab-indicator": [create_tab_indicator_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(tab.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tab.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tab_changes = {};
      if (dirty[0] &
      /*tab*/
      128) tab_changes.tab =
      /*tab*/
      ctx[7];

      if (dirty[0] &
      /*$$scope*/
      1024) {
        tab_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(68:4) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div1;
  var updating_active;
  var t3;
  var div0;
  var t4;
  var t5;
  var pre0;
  var t6;
  var t7;
  var t8;
  var div2;
  var t9;
  var t10;
  var div3;
  var t11;
  var updating_active_1;
  var t12;
  var pre1;
  var t13;
  var t14_value =
  /*keyedTabsActive*/
  ctx[1].k + "";
  var t14;
  var t15;
  var div4;
  var t16;
  var t17;
  var div5;
  var t18;
  var t19;
  var div6;
  var t20;
  var current;

  function tabbar0_active_binding(value) {
    /*tabbar0_active_binding*/
    ctx[4].call(null, value);
  }

  var tabbar0_props = {
    tabs: ["Home", "Merchandise", "About Us"],
    $$slots: {
      default: [create_default_slot_19, function (_ref) {
        var tab = _ref.tab;
        return {
          7: tab
        };
      }, function (_ref2) {
        var tab = _ref2.tab;
        return [tab ? 128 : 0];
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*active*/
  ctx[0] !== void 0) {
    tabbar0_props.active =
    /*active*/
    ctx[0];
  }

  var tabbar0 = new TabBar({
    props: tabbar0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(tabbar0, "active", tabbar0_active_binding);
  });
  var each_value = ["Home", "Merchandise", "About Us"];
  var each_blocks = [];

  for (var i = 0; i < 3; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var tabbar1 = new TabBar({
    props: {
      tabs:
      /*iconTabs*/
      ctx[2],
      $$slots: {
        default: [create_default_slot_13, function (_ref3) {
          var tab = _ref3.tab;
          return {
            7: tab
          };
        }, function (_ref4) {
          var tab = _ref4.tab;
          return [tab ? 128 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function tabbar2_active_binding(value_1) {
    /*tabbar2_active_binding*/
    ctx[6].call(null, value_1);
  }

  var tabbar2_props = {
    tabs:
    /*keyedTabs*/
    ctx[3],
    key: func,
    $$slots: {
      default: [create_default_slot_9, function (_ref5) {
        var tab = _ref5.tab;
        return {
          7: tab
        };
      }, function (_ref6) {
        var tab = _ref6.tab;
        return [tab ? 128 : 0];
      }]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*keyedTabsActive*/
  ctx[1] !== void 0) {
    tabbar2_props.active =
    /*keyedTabsActive*/
    ctx[1];
  }

  var tabbar2 = new TabBar({
    props: tabbar2_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(tabbar2, "active", tabbar2_active_binding);
  });
  var tabbar3 = new TabBar({
    props: {
      tabs: _toConsumableArray(Array(20)).map(func_1),
      $$slots: {
        default: [create_default_slot_6, function (_ref7) {
          var tab = _ref7.tab;
          return {
            7: tab
          };
        }, function (_ref8) {
          var tab = _ref8.tab;
          return [tab ? 128 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var tabbar4 = new TabBar({
    props: {
      tabs: ["Home", "Merchandise", "About Us"],
      $$slots: {
        default: [create_default_slot_3, function (_ref9) {
          var tab = _ref9.tab;
          return {
            7: tab
          };
        }, function (_ref10) {
          var tab = _ref10.tab;
          return [tab ? 128 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var tabbar5 = new TabBar({
    props: {
      tabs: ["Home", "Merchandise", "About Us"],
      $$slots: {
        default: [create_default_slot$2, function (_ref11) {
          var tab = _ref11.tab;
          return {
            7: tab
          };
        }, function (_ref12) {
          var tab = _ref12.tab;
          return [tab ? 128 : 0];
        }]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Tabs");
      t2 = space();
      div1 = element("div");
      create_component(tabbar0.$$.fragment);
      t3 = space();
      div0 = element("div");
      t4 = text("Programmatically select:\n      ");

      for (var _i = 0; _i < 3; _i += 1) {
        each_blocks[_i].c();
      }

      t5 = space();
      pre0 = element("pre");
      t6 = text("Selected: ");
      t7 = text(
      /*active*/
      ctx[0]);
      t8 = space();
      div2 = element("div");
      t9 = text("Tabs with icons next to labels:\n    ");
      create_component(tabbar1.$$.fragment);
      t10 = space();
      div3 = element("div");
      t11 = text("Keyed tabs with icons above labels, preselected tab, indicators restricted to content, and fade transition:\n    ");
      create_component(tabbar2.$$.fragment);
      t12 = space();
      pre1 = element("pre");
      t13 = text("Selected: ");
      t14 = text(t14_value);
      t15 = space();
      div4 = element("div");
      t16 = text("Scrolling tabs:\n    ");
      create_component(tabbar3.$$.fragment);
      t17 = space();
      div5 = element("div");
      t18 = text("Min width tabs:\n    ");
      create_component(tabbar4.$$.fragment);
      t19 = space();
      div6 = element("div");
      t20 = text("Icon indicators:\n    ");
      create_component(tabbar5.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Tabs");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(tabbar0.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        style: true
      });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, "Programmatically select:\n      ");

      for (var _i2 = 0; _i2 < 3; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      pre0 = claim_element(div1_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t6 = claim_text(pre0_nodes, "Selected: ");
      t7 = claim_text(pre0_nodes,
      /*active*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t9 = claim_text(div2_nodes, "Tabs with icons next to labels:\n    ");
      claim_component(tabbar1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t11 = claim_text(div3_nodes, "Keyed tabs with icons above labels, preselected tab, indicators restricted to content, and fade transition:\n    ");
      claim_component(tabbar2.$$.fragment, div3_nodes);
      t12 = claim_space(div3_nodes);
      pre1 = claim_element(div3_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t13 = claim_text(pre1_nodes, "Selected: ");
      t14 = claim_text(pre1_nodes, t14_value);
      pre1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t16 = claim_text(div4_nodes, "Scrolling tabs:\n    ");
      claim_component(tabbar3.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t17 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t18 = claim_text(div5_nodes, "Min width tabs:\n    ");
      claim_component(tabbar4.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t20 = claim_text(div6_nodes, "Icon indicators:\n    ");
      claim_component(tabbar5.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Tabs - SMUI";
      add_location(h2, file$4, 5, 2, 71);
      set_style(div0, "margin-top", "15px");
      add_location(div0, file$4, 15, 4, 308);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$4, 22, 4, 534);
      attr_dev(div1, "class", "svelte-1yo9hd3");
      add_location(div1, file$4, 7, 2, 88);
      attr_dev(div2, "class", "svelte-1yo9hd3");
      add_location(div2, file$4, 25, 2, 591);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$4, 44, 4, 1240);
      attr_dev(div3, "class", "svelte-1yo9hd3");
      add_location(div3, file$4, 35, 2, 817);
      attr_dev(div4, "class", "svelte-1yo9hd3");
      add_location(div4, file$4, 47, 2, 1308);
      attr_dev(div5, "class", "svelte-1yo9hd3");
      add_location(div5, file$4, 56, 2, 1488);
      attr_dev(div6, "class", "icon-indicators svelte-1yo9hd3");
      add_location(div6, file$4, 65, 2, 1673);
      attr_dev(section, "class", "svelte-1yo9hd3");
      add_location(section, file$4, 4, 0, 59);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div1);
      mount_component(tabbar0, div1, null);
      append_dev(div1, t3);
      append_dev(div1, div0);
      append_dev(div0, t4);

      for (var _i3 = 0; _i3 < 3; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }

      append_dev(div1, t5);
      append_dev(div1, pre0);
      append_dev(pre0, t6);
      append_dev(pre0, t7);
      append_dev(section, t8);
      append_dev(section, div2);
      append_dev(div2, t9);
      mount_component(tabbar1, div2, null);
      append_dev(section, t10);
      append_dev(section, div3);
      append_dev(div3, t11);
      mount_component(tabbar2, div3, null);
      append_dev(div3, t12);
      append_dev(div3, pre1);
      append_dev(pre1, t13);
      append_dev(pre1, t14);
      append_dev(section, t15);
      append_dev(section, div4);
      append_dev(div4, t16);
      mount_component(tabbar3, div4, null);
      append_dev(section, t17);
      append_dev(section, div5);
      append_dev(div5, t18);
      mount_component(tabbar4, div5, null);
      append_dev(section, t19);
      append_dev(section, div6);
      append_dev(div6, t20);
      mount_component(tabbar5, div6, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var tabbar0_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        tabbar0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_active && dirty[0] &
      /*active*/
      1) {
        updating_active = true;
        tabbar0_changes.active =
        /*active*/
        ctx[0];
        add_flush_callback(function () {
          return updating_active = false;
        });
      }

      tabbar0.$set(tabbar0_changes);

      if (dirty[0] &
      /*active*/
      1) {
        each_value = ["Home", "Merchandise", "About Us"];

        var _i4;

        for (_i4 = 0; _i4 < 3; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div0, null);
          }
        }

        group_outros();

        for (_i4 = 3; _i4 < 3; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if (!current || dirty[0] &
      /*active*/
      1) set_data_dev(t7,
      /*active*/
      ctx[0]);
      var tabbar1_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        tabbar1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabbar1.$set(tabbar1_changes);
      var tabbar2_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        tabbar2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_active_1 && dirty[0] &
      /*keyedTabsActive*/
      2) {
        updating_active_1 = true;
        tabbar2_changes.active =
        /*keyedTabsActive*/
        ctx[1];
        add_flush_callback(function () {
          return updating_active_1 = false;
        });
      }

      tabbar2.$set(tabbar2_changes);
      if ((!current || dirty[0] &
      /*keyedTabsActive*/
      2) && t14_value !== (t14_value =
      /*keyedTabsActive*/
      ctx[1].k + "")) set_data_dev(t14, t14_value);
      var tabbar3_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        tabbar3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabbar3.$set(tabbar3_changes);
      var tabbar4_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        tabbar4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabbar4.$set(tabbar4_changes);
      var tabbar5_changes = {};

      if (dirty[0] &
      /*$$scope, tab*/
      1152) {
        tabbar5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabbar5.$set(tabbar5_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tabbar0.$$.fragment, local);

      for (var _i5 = 0; _i5 < 3; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      transition_in(tabbar1.$$.fragment, local);
      transition_in(tabbar2.$$.fragment, local);
      transition_in(tabbar3.$$.fragment, local);
      transition_in(tabbar4.$$.fragment, local);
      transition_in(tabbar5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabbar0.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < 3; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      transition_out(tabbar1.$$.fragment, local);
      transition_out(tabbar2.$$.fragment, local);
      transition_out(tabbar3.$$.fragment, local);
      transition_out(tabbar4.$$.fragment, local);
      transition_out(tabbar5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(tabbar0);
      destroy_each(each_blocks, detaching);
      destroy_component(tabbar1);
      destroy_component(tabbar2);
      destroy_component(tabbar3);
      destroy_component(tabbar4);
      destroy_component(tabbar5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var func = function func(tab) {
  return tab.k;
};

var func_1 = function func_1(v, i) {
  return i + 1;
};

function instance$4($$self, $$props, $$invalidate) {
  var active = "Home";
  var iconTabs = [{
    icon: "access_time",
    label: "Recents"
  }, {
    icon: "near_me",
    label: "Nearby"
  }, {
    icon: "favorite",
    label: "Favorites"
  }];
  var keyedTabs = [{
    k: 1,
    icon: "code",
    label: "Code"
  }, {
    k: 2,
    icon: "code",
    label: "Code"
  }, {
    k: 3,
    icon: "code",
    label: "Code"
  }, {
    k: 4,
    icon: "code",
    label: "Code"
  }];
  var keyedTabsActive = keyedTabs[2];

  function tabbar0_active_binding(value) {
    active = value;
    $$invalidate(0, active);
  }

  var click_handler = function click_handler(tab) {
    return $$invalidate(0, active = tab);
  };

  function tabbar2_active_binding(value_1) {
    keyedTabsActive = value_1;
    $$invalidate(1, keyedTabsActive);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("active" in $$props) $$invalidate(0, active = $$props.active);
    if ("iconTabs" in $$props) $$invalidate(2, iconTabs = $$props.iconTabs);
    if ("keyedTabs" in $$props) $$invalidate(3, keyedTabs = $$props.keyedTabs);
    if ("keyedTabsActive" in $$props) $$invalidate(1, keyedTabsActive = $$props.keyedTabsActive);
  };

  return [active, keyedTabsActive, iconTabs, keyedTabs, tabbar0_active_binding, click_handler, tabbar2_active_binding];
}

var Tabs =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Tabs, _SvelteComponentDev);

  function Tabs(options) {
    var _this;

    _classCallCheck$1(this, Tabs);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Tabs).call(this, options));
    if (!document.getElementById("svelte-1yo9hd3-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Tabs",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return Tabs;
}(SvelteComponentDev);

export default Tabs;
