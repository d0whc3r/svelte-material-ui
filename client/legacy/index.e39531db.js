import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, a as assign, a3 as getContext, C as onMount, a4 as onDestroy, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, O as attr_dev, l as add_location, m as insert_dev, P as append_dev, M as space, Y as svg_element, N as claim_space, k as set_attributes, E as listen_dev, q as get_spread_update, r as is_function, n as noop, F as binding_callbacks, b as current_component } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/typeof';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';

var css = "@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(.85)}to{transform:scale(.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#676778;background-color:var(--mdc-theme-secondary,#676778)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(103,103,120,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container:after,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker:after{background-color:#676778;background-color:var(--mdc-theme-secondary,#676778)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#676778;fill:var(--mdc-theme-secondary,#676778);stroke:#676778;stroke:var(--mdc-theme-secondary,#676778)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#676778;background-color:var(--mdc-theme-secondary,#676778)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:hsla(0,0%,60.4%,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container:after,.mdc-slider--disabled .mdc-slider__track-marker:after{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a;stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component,#fff)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container:after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker:after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker:first-child:after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(.571);stroke-width:3.5;transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform .26667s ease-out,opacity .26667s ease-out,background-color .26667s ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0);border-radius:50% 50% 50% 0;z-index:1;transition:transform .1s ease-out}.mdc-slider__pin-value-marker{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scaleX(1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize .26667s linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55,1.55,1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:.14s}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(.57143)}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px,-20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}";
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
var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete'
};
var strings = {
  ARIA_DISABLED: 'aria-disabled',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUENOW: 'aria-valuenow',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  STEP_DATA_ATTR: 'data-step',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  TRACK_SELECTOR: '.mdc-slider__track'
};
var numbers = {
  PAGE_FACTOR: 4
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
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};
var jsEventTypeMap = {
  animationend: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationEnd',
    standard: 'animationend'
  },
  animationiteration: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationIteration',
    standard: 'animationiteration'
  },
  animationstart: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationStart',
    standard: 'animationstart'
  },
  transitionend: {
    cssProperty: 'transition',
    prefixed: 'webkitTransitionEnd',
    standard: 'transitionend'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
  if (isWindow(windowObj) && eventType in jsEventTypeMap) {
    var el = windowObj.document.createElement('div');
    var _a = jsEventTypeMap[eventType],
        standard = _a.standard,
        prefixed = _a.prefixed,
        cssProperty = _a.cssProperty;
    var isStandard = cssProperty in el.style;
    return isStandard ? standard : prefixed;
  }

  return eventType;
}

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
var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
var MOVE_EVENT_MAP = {
  mousedown: 'mousemove',
  pointerdown: 'pointermove',
  touchstart: 'touchmove'
};
var KEY_IDS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  END: 'End',
  HOME: 'Home',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp'
};

var MDCSliderFoundation =
/** @class */
function (_super) {
  __extends(MDCSliderFoundation, _super);

  function MDCSliderFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSliderFoundation.defaultAdapter, adapter)) || this;
    /**
     * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
     * because those could be valid tabindices set by the client code.
     */


    _this.savedTabIndex_ = NaN;
    _this.active_ = false;
    _this.inTransit_ = false;
    _this.isDiscrete_ = false;
    _this.hasTrackMarker_ = false;
    _this.handlingThumbTargetEvt_ = false;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.value_ = 0;
    _this.disabled_ = false;
    _this.preventFocusState_ = false;

    _this.thumbContainerPointerHandler_ = function () {
      return _this.handlingThumbTargetEvt_ = true;
    };

    _this.interactionStartHandler_ = function (evt) {
      return _this.handleDown_(evt);
    };

    _this.keydownHandler_ = function (evt) {
      return _this.handleKeydown_(evt);
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus_();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur_();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCSliderFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        hasClass: function hasClass() {
          return false;
        },
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getAttribute: function getAttribute() {
          return null;
        },
        setAttribute: function setAttribute() {
          return undefined;
        },
        removeAttribute: function removeAttribute() {
          return undefined;
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
        getTabIndex: function getTabIndex() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() {
          return undefined;
        },
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() {
          return undefined;
        },
        registerBodyInteractionHandler: function registerBodyInteractionHandler() {
          return undefined;
        },
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        notifyInput: function notifyInput() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty() {
          return undefined;
        },
        setTrackStyleProperty: function setTrackStyleProperty() {
          return undefined;
        },
        setMarkerValue: function setMarkerValue() {
          return undefined;
        },
        appendTrackMarkers: function appendTrackMarkers() {
          return undefined;
        },
        removeTrackMarkers: function removeTrackMarkers() {
          return undefined;
        },
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() {
          return undefined;
        },
        isRTL: function isRTL() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSliderFoundation.prototype.init = function () {
    var _this = this;

    this.isDiscrete_ = this.adapter_.hasClass(cssClasses.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses.HAS_TRACK_MARKER);
    DOWN_EVENTS.forEach(function (evtName) {
      _this.adapter_.registerInteractionHandler(evtName, _this.interactionStartHandler_);

      _this.adapter_.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout(); // At last step, provide a reasonable default value to discrete slider

    if (this.isDiscrete_ && this.getStep() === 0) {
      this.step_ = 1;
    }
  };

  MDCSliderFoundation.prototype.destroy = function () {
    var _this = this;

    DOWN_EVENTS.forEach(function (evtName) {
      _this.adapter_.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);

      _this.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  MDCSliderFoundation.prototype.setupTrackMarker = function () {
    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
      var min = this.getMin();
      var max = this.getMax();
      var step = this.getStep();
      var numMarkers = (max - min) / step; // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value

      var indivisible = Math.ceil(numMarkers) !== numMarkers;

      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        var lastStepRatio = (max - numMarkers * step) / step + 1;
        this.adapter_.setLastTrackMarkersStyleProperty('flex-grow', String(lastStepRatio));
      }
    }
  };

  MDCSliderFoundation.prototype.layout = function () {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  };

  MDCSliderFoundation.prototype.getValue = function () {
    return this.value_;
  };

  MDCSliderFoundation.prototype.setValue = function (value) {
    this.setValue_(value, false);
  };

  MDCSliderFoundation.prototype.getMax = function () {
    return this.max_;
  };

  MDCSliderFoundation.prototype.setMax = function (max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }

    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getMin = function () {
    return this.min_;
  };

  MDCSliderFoundation.prototype.setMin = function (min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }

    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getStep = function () {
    return this.step_;
  };

  MDCSliderFoundation.prototype.setStep = function (step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }

    if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
      step = 1;
    }

    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.isDisabled = function () {
    return this.disabled_;
  };

  MDCSliderFoundation.prototype.setDisabled = function (disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(cssClasses.DISABLED, this.disabled_);

    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(strings.ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(strings.ARIA_DISABLED);

      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  };
  /**
   * Called when the user starts interacting with the slider
   */


  MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
    var _this = this;

    if (this.disabled_) {
      return;
    }

    this.preventFocusState_ = true;
    this.setInTransit_(!this.handlingThumbTargetEvt_);
    this.handlingThumbTargetEvt_ = false;
    this.setActive_(true);

    var moveHandler = function moveHandler(moveEvent) {
      _this.handleMove_(moveEvent);
    };

    var moveEventType = MOVE_EVENT_MAP[downEvent.type]; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)

    var upHandler = function upHandler() {
      _this.handleUp_();

      _this.adapter_.deregisterBodyInteractionHandler(moveEventType, moveHandler);

      UP_EVENTS.forEach(function (evtName) {
        return _this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
      });
    };

    this.adapter_.registerBodyInteractionHandler(moveEventType, moveHandler);
    UP_EVENTS.forEach(function (evtName) {
      return _this.adapter_.registerBodyInteractionHandler(evtName, upHandler);
    });
    this.setValueFromEvt_(downEvent);
  };
  /**
   * Called when the user moves the slider
   */


  MDCSliderFoundation.prototype.handleMove_ = function (evt) {
    evt.preventDefault();
    this.setValueFromEvt_(evt);
  };
  /**
   * Called when the user's interaction with the slider ends
   */


  MDCSliderFoundation.prototype.handleUp_ = function () {
    this.setActive_(false);
    this.adapter_.notifyChange();
  };
  /**
   * Returns the pageX of the event
   */


  MDCSliderFoundation.prototype.getPageX_ = function (evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX;
    }

    return evt.pageX;
  };
  /**
   * Sets the slider value from an event
   */


  MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
    var pageX = this.getPageX_(evt);
    var value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  };
  /**
   * Computes the new value from the pageX position
   */


  MDCSliderFoundation.prototype.computeValueFromPageX_ = function (pageX) {
    var _a = this,
        max = _a.max_,
        min = _a.min_;

    var xPos = pageX - this.rect_.left;
    var pctComplete = xPos / this.rect_.width;

    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    } // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].


    return min + pctComplete * (max - min);
  };
  /**
   * Handles keydown events
   */


  MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
    var keyId = this.getKeyId_(evt);
    var value = this.getValueForKeyId_(keyId);

    if (isNaN(value)) {
      return;
    } // Prevent page from scrolling due to key presses that would normally scroll the page


    evt.preventDefault();
    this.adapter_.addClass(cssClasses.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  };
  /**
   * Returns the computed name of the event
   */


  MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN;
    }

    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME;
    }

    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END;
    }

    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP;
    }

    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN;
    }

    return '';
  };
  /**
   * Computes the value given a keyboard key ID
   */


  MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
    var _a = this,
        max = _a.max_,
        min = _a.min_,
        step = _a.step_;

    var delta = step || (max - min) / 100;
    var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);

    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
      case KEY_IDS.ARROW_LEFT:
      case KEY_IDS.ARROW_DOWN:
        return this.value_ - delta;

      case KEY_IDS.ARROW_RIGHT:
      case KEY_IDS.ARROW_UP:
        return this.value_ + delta;

      case KEY_IDS.HOME:
        return this.min_;

      case KEY_IDS.END:
        return this.max_;

      case KEY_IDS.PAGE_UP:
        return this.value_ + delta * numbers.PAGE_FACTOR;

      case KEY_IDS.PAGE_DOWN:
        return this.value_ - delta * numbers.PAGE_FACTOR;

      default:
        return NaN;
    }
  };

  MDCSliderFoundation.prototype.handleFocus_ = function () {
    if (this.preventFocusState_) {
      return;
    }

    this.adapter_.addClass(cssClasses.FOCUS);
  };

  MDCSliderFoundation.prototype.handleBlur_ = function () {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(cssClasses.FOCUS);
  };
  /**
   * Sets the value of the slider
   */


  MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
    if (force === void 0) {
      force = false;
    }

    if (value === this.value_ && !force) {
      return;
    }

    var _a = this,
        min = _a.min_,
        max = _a.max_;

    var valueSetToBoundary = value === min || value === max;

    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }

    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }

    this.value_ = value;
    this.adapter_.setAttribute(strings.ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();

      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  };
  /**
   * Calculates the quantized value
   */


  MDCSliderFoundation.prototype.quantize_ = function (value) {
    var numSteps = Math.round(value / this.step_);
    return numSteps * this.step_;
  };

  MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
    var _this = this;

    var _a = this,
        max = _a.max_,
        min = _a.min_,
        value = _a.value_;

    var pctComplete = (value - min) / (max - min);
    var translatePx = pctComplete * this.rect_.width;

    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    var transformProp = getCorrectPropertyName(window, 'transform');
    var transitionendEvtName = getCorrectEventName(window, 'transitionend');

    if (this.inTransit_) {
      var onTransitionEnd_1 = function onTransitionEnd_1() {
        _this.setInTransit_(false);

        _this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
      };

      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
    }

    requestAnimationFrame(function () {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      _this.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");

      _this.adapter_.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
    });
  };
  /**
   * Toggles the active state of the slider
   */


  MDCSliderFoundation.prototype.setActive_ = function (active) {
    this.active_ = active;
    this.toggleClass_(cssClasses.ACTIVE, this.active_);
  };
  /**
   * Toggles the inTransit state of the slider
   */


  MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_);
  };
  /**
   * Conditionally adds or removes a class based on shouldBePresent
   */


  MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  };

  return MDCSliderFoundation;
}(MDCFoundation);

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

var MDCSlider =
/** @class */
function (_super) {
  __extends(MDCSlider, _super);

  function MDCSlider() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlider.attachTo = function (root) {
    return new MDCSlider(root);
  };

  Object.defineProperty(MDCSlider.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "min", {
    get: function get() {
      return this.foundation_.getMin();
    },
    set: function set(min) {
      this.foundation_.setMin(min);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "max", {
    get: function get() {
      return this.foundation_.getMax();
    },
    set: function set(max) {
      this.foundation_.setMax(max);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "step", {
    get: function get() {
      return this.foundation_.getStep();
    },
    set: function set(step) {
      this.foundation_.setStep(step);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSlider.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });

  MDCSlider.prototype.initialize = function () {
    this.thumbContainer_ = this.root_.querySelector(strings.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(strings.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(strings.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(strings.TRACK_MARKER_CONTAINER_SELECTOR);
  };

  MDCSlider.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getAttribute: function getAttribute(name) {
        return _this.root_.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return _this.root_.setAttribute(name, value);
      },
      removeAttribute: function removeAttribute(name) {
        return _this.root_.removeAttribute(name);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.root_.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return _this.root_.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(evtType, handler) {
        _this.thumbContainer_.addEventListener(evtType, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(evtType, handler) {
        _this.thumbContainer_.removeEventListener(evtType, handler, applyPassive());
      },
      registerBodyInteractionHandler: function registerBodyInteractionHandler(evtType, handler) {
        return document.body.addEventListener(evtType, handler);
      },
      deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(evtType, handler) {
        return document.body.removeEventListener(evtType, handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      notifyInput: function notifyInput() {
        return _this.emit(strings.INPUT_EVENT, _this);
      },
      notifyChange: function notifyChange() {
        return _this.emit(strings.CHANGE_EVENT, _this);
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        _this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        return _this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: function setMarkerValue(value) {
        return _this.pinValueMarker_.innerText = value.toLocaleString();
      },
      appendTrackMarkers: function appendTrackMarkers(numMarkers) {
        var frag = document.createDocumentFragment();

        for (var i = 0; i < numMarkers; i++) {
          var marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }

        _this.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: function removeTrackMarkers() {
        while (_this.trackMarkerContainer_.firstChild) {
          _this.trackMarkerContainer_.removeChild(_this.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        var lastTrackMarker = _this.root_.querySelector(strings.LAST_TRACK_MARKER_SELECTOR);

        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: function isRTL() {
        return getComputedStyle(_this.root_).direction === 'rtl';
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCSliderFoundation(adapter);
  };

  MDCSlider.prototype.initialSyncWithDOM = function () {
    var origValueNow = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUENOW), this.value);
    var min = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUEMIN), this.min);
    var max = this.parseFloat_(this.root_.getAttribute(strings.ARIA_VALUEMAX), this.max); // min and max need to be set in the right order to avoid throwing an error
    // when the new min is greater than the default max.

    if (min >= this.max) {
      this.max = max;
      this.min = min;
    } else {
      this.min = min;
      this.max = max;
    }

    this.step = this.parseFloat_(this.root_.getAttribute(strings.STEP_DATA_ATTR), this.step);
    this.value = origValueNow;
    this.disabled = this.root_.hasAttribute(strings.ARIA_DISABLED) && this.root_.getAttribute(strings.ARIA_DISABLED) !== 'false';
    this.foundation_.setupTrackMarker();
  };

  MDCSlider.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSlider.prototype.stepUp = function (amount) {
    if (amount === void 0) {
      amount = this.step || 1;
    }

    this.value += amount;
  };

  MDCSlider.prototype.stepDown = function (amount) {
    if (amount === void 0) {
      amount = this.step || 1;
    }

    this.value -= amount;
  };

  MDCSlider.prototype.parseFloat_ = function (str, defaultValue) {
    var num = parseFloat(str); // tslint:disable-line:ban

    var isNumeric = typeof num === 'number' && isFinite(num);
    return isNumeric ? num : defaultValue;
  };

  return MDCSlider;
}(MDCComponent);

var file = "home/hperrin/repos/svelte-material-ui/packages/slider/Slider.svelte"; // (24:4) {#if discrete && displayMarkers}

function create_if_block_1(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mdc-slider__track-marker-container");
      add_location(div, file, 24, 6, 734);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(24:4) {#if discrete && displayMarkers}",
    ctx: ctx
  });
  return block;
} // (29:4) {#if discrete}


function create_if_block(ctx) {
  var div;
  var span;
  var block = {
    c: function create() {
      div = element("div");
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      children(span).forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "mdc-slider__pin-value-marker");
      add_location(span, file, 30, 8, 915);
      attr_dev(div, "class", "mdc-slider__pin");
      add_location(div, file, 29, 6, 877);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, span);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(29:4) {#if discrete}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div4;
  var div1;
  var div0;
  var t0;
  var t1;
  var div3;
  var t2;
  var svg;
  var circle;
  var t3;
  var div2;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var if_block0 =
  /*discrete*/
  ctx[4] &&
  /*displayMarkers*/
  ctx[5] && create_if_block_1(ctx);
  var if_block1 =
  /*discrete*/
  ctx[4] && create_if_block(ctx);
  var div4_levels = [{
    class: "\n    mdc-slider\n    " +
    /*className*/
    ctx[2] + "\n    " + (
    /*discrete*/
    ctx[4] ? "mdc-slider--discrete" : "") + "\n    " + (
    /*discrete*/
    ctx[4] &&
    /*displayMarkers*/
    ctx[5] ? "mdc-slider--display-markers" : "") + "\n  "
  }, {
    role: "slider"
  }, {
    "aria-disabled":
    /*disabled*/
    ctx[3] ? "true" : "false"
  }, {
    "aria-valuemin":
    /*min*/
    ctx[6]
  }, {
    "aria-valuemax":
    /*max*/
    ctx[7]
  }, {
    "aria-valuenow":
    /*value*/
    ctx[0]
  },
  /*step*/
  ctx[8] === 0 ? {} : {
    "data-step":
    /*step*/
    ctx[8]
  }, {
    tabindex:
    /*tabindex*/
    ctx[9]
  },
  /*inputProps*/
  ctx[12], exclude(
  /*$$props*/
  ctx[14], ["use", "class", "disabled", "discrete", "displayMarkers", "min", "max", "step", "value", "tabindex"])];
  var div4_data = {};

  for (var i = 0; i < div4_levels.length; i += 1) {
    div4_data = assign(div4_data, div4_levels[i]);
  }

  var block = {
    c: function create() {
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      div3 = element("div");
      if (if_block1) if_block1.c();
      t2 = space();
      svg = svg_element("svg");
      circle = svg_element("circle");
      t3 = space();
      div2 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        role: true,
        "aria-disabled": true,
        "aria-valuemin": true,
        "aria-valuemax": true,
        "aria-valuenow": true,
        tabindex: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div1_nodes);
      if (if_block0) if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      if (if_block1) if_block1.l(div3_nodes);
      t2 = claim_space(div3_nodes);
      svg = claim_element(div3_nodes, "svg", {
        class: true,
        width: true,
        height: true
      }, 1);
      var svg_nodes = children(svg);
      circle = claim_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true
      }, 1);
      children(circle).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      children(div2).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mdc-slider__track");
      add_location(div0, file, 22, 4, 653);
      attr_dev(div1, "class", "mdc-slider__track-container");
      add_location(div1, file, 21, 2, 607);
      attr_dev(circle, "cx", "10.5");
      attr_dev(circle, "cy", "10.5");
      attr_dev(circle, "r", "7.875");
      add_location(circle, file, 34, 6, 1054);
      attr_dev(svg, "class", "mdc-slider__thumb");
      attr_dev(svg, "width", "21");
      attr_dev(svg, "height", "21");
      add_location(svg, file, 33, 4, 993);
      attr_dev(div2, "class", "mdc-slider__focus-ring");
      add_location(div2, file, 36, 4, 1117);
      attr_dev(div3, "class", "mdc-slider__thumb-container");
      add_location(div3, file, 27, 2, 810);
      set_attributes(div4, div4_data);
      add_location(div4, file, 0, 0, 0);
      dispose = listen_dev(div4, "MDCSlider:input",
      /*handleChange*/
      ctx[13], false, false, false);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div1);
      append_dev(div1, div0);
      append_dev(div1, t0);
      if (if_block0) if_block0.m(div1, null);
      append_dev(div4, t1);
      append_dev(div4, div3);
      if (if_block1) if_block1.m(div3, null);
      append_dev(div3, t2);
      append_dev(div3, svg);
      append_dev(svg, circle);
      append_dev(div3, t3);
      append_dev(div3, div2);
      /*div4_binding*/

      ctx[23](div4);
      useActions_action = useActions.call(null, div4,
      /*use*/
      ctx[1]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[11].call(null, div4) || {};
    },
    p: function update(ctx, dirty) {
      if (
      /*discrete*/
      ctx[4] &&
      /*displayMarkers*/
      ctx[5]) {
        if (!if_block0) {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(div1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*discrete*/
      ctx[4]) {
        if (!if_block1) {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div3, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      set_attributes(div4, get_spread_update(div4_levels, [dirty[0] &
      /*className, discrete, displayMarkers*/
      52 && {
        class: "\n    mdc-slider\n    " +
        /*className*/
        ctx[2] + "\n    " + (
        /*discrete*/
        ctx[4] ? "mdc-slider--discrete" : "") + "\n    " + (
        /*discrete*/
        ctx[4] &&
        /*displayMarkers*/
        ctx[5] ? "mdc-slider--display-markers" : "") + "\n  "
      }, {
        role: "slider"
      }, dirty[0] &
      /*disabled*/
      8 && {
        "aria-disabled":
        /*disabled*/
        ctx[3] ? "true" : "false"
      }, dirty[0] &
      /*min*/
      64 && {
        "aria-valuemin":
        /*min*/
        ctx[6]
      }, dirty[0] &
      /*max*/
      128 && {
        "aria-valuemax":
        /*max*/
        ctx[7]
      }, dirty[0] &
      /*value*/
      1 && {
        "aria-valuenow":
        /*value*/
        ctx[0]
      }, dirty[0] &
      /*step*/
      256 && (
      /*step*/
      ctx[8] === 0 ? {} : {
        "data-step":
        /*step*/
        ctx[8]
      }), dirty[0] &
      /*tabindex*/
      512 && {
        tabindex:
        /*tabindex*/
        ctx[9]
      }, dirty[0] &
      /*inputProps*/
      4096 &&
      /*inputProps*/
      ctx[12], dirty[0] &
      /*$$props*/
      16384 && exclude(
      /*$$props*/
      ctx[14], ["use", "class", "disabled", "discrete", "displayMarkers", "min", "max", "step", "value", "tabindex"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      2) useActions_action.update.call(null,
      /*use*/
      ctx[1]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      /*div4_binding*/

      ctx[23](null);
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
  var forwardEvents = forwardEventsBuilder(current_component, ["MDCSlider:input", "MDCSlider:change"]);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$disabled = _$$props3.disabled,
      disabled = _$$props3$disabled === void 0 ? false : _$$props3$disabled;
  var _$$props4 = $$props,
      _$$props4$discrete = _$$props4.discrete,
      discrete = _$$props4$discrete === void 0 ? false : _$$props4$discrete;
  var _$$props5 = $$props,
      _$$props5$displayMark = _$$props5.displayMarkers,
      displayMarkers = _$$props5$displayMark === void 0 ? false : _$$props5$displayMark;
  var _$$props6 = $$props,
      _$$props6$min = _$$props6.min,
      min = _$$props6$min === void 0 ? 0 : _$$props6$min;
  var _$$props7 = $$props,
      _$$props7$max = _$$props7.max,
      max = _$$props7$max === void 0 ? 100 : _$$props7$max;
  var _$$props8 = $$props,
      _$$props8$step = _$$props8.step,
      step = _$$props8$step === void 0 ? 0 : _$$props8$step;
  var _$$props9 = $$props,
      _$$props9$value = _$$props9.value,
      value = _$$props9$value === void 0 ? null : _$$props9$value;
  var _$$props10 = $$props,
      _$$props10$tabindex = _$$props10.tabindex,
      tabindex = _$$props10$tabindex === void 0 ? "0" : _$$props10$tabindex;
  var element;
  var slider;
  var formField = getContext("SMUI:form-field");
  var inputProps = getContext("SMUI:generic:input:props") || {};
  var addLayoutListener = getContext("SMUI:addLayoutListener");
  var removeLayoutListener;

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(function () {
    $$invalidate(19, slider = new MDCSlider(element));

    if (formField && formField()) {
      formField().input = slider;
    }
  });
  onDestroy(function () {
    slider && slider.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function handleChange() {
    $$invalidate(0, value = slider.value);
  }

  function layout() {
    var _slider;

    return (_slider = slider).layout.apply(_slider, arguments);
  }

  function stepUp() {
    var _slider2;

    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_slider2 = slider).stepUp.apply(_slider2, [amount].concat(args));
  }

  function stepDown() {
    var _slider3;

    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return (_slider3 = slider).stepDown.apply(_slider3, [amount].concat(args));
  }

  function getId() {
    return inputProps && inputProps.id;
  }

  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(10, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
    if ("disabled" in $$new_props) $$invalidate(3, disabled = $$new_props.disabled);
    if ("discrete" in $$new_props) $$invalidate(4, discrete = $$new_props.discrete);
    if ("displayMarkers" in $$new_props) $$invalidate(5, displayMarkers = $$new_props.displayMarkers);
    if ("min" in $$new_props) $$invalidate(6, min = $$new_props.min);
    if ("max" in $$new_props) $$invalidate(7, max = $$new_props.max);
    if ("step" in $$new_props) $$invalidate(8, step = $$new_props.step);
    if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
    if ("tabindex" in $$new_props) $$invalidate(9, tabindex = $$new_props.tabindex);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      disabled: disabled,
      discrete: discrete,
      displayMarkers: displayMarkers,
      min: min,
      max: max,
      step: step,
      value: value,
      tabindex: tabindex,
      element: element,
      slider: slider,
      formField: formField,
      inputProps: inputProps,
      addLayoutListener: addLayoutListener,
      removeLayoutListener: removeLayoutListener
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(14, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
    if ("disabled" in $$props) $$invalidate(3, disabled = $$new_props.disabled);
    if ("discrete" in $$props) $$invalidate(4, discrete = $$new_props.discrete);
    if ("displayMarkers" in $$props) $$invalidate(5, displayMarkers = $$new_props.displayMarkers);
    if ("min" in $$props) $$invalidate(6, min = $$new_props.min);
    if ("max" in $$props) $$invalidate(7, max = $$new_props.max);
    if ("step" in $$props) $$invalidate(8, step = $$new_props.step);
    if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
    if ("tabindex" in $$props) $$invalidate(9, tabindex = $$new_props.tabindex);
    if ("element" in $$props) $$invalidate(10, element = $$new_props.element);
    if ("slider" in $$props) $$invalidate(19, slider = $$new_props.slider);
    if ("formField" in $$props) formField = $$new_props.formField;
    if ("inputProps" in $$props) $$invalidate(12, inputProps = $$new_props.inputProps);
    if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
    if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*slider, disabled*/
    524296) {
       if (slider && slider.disabled !== disabled) {
        $$invalidate(19, slider.disabled = disabled, slider);
      }
    }

    if ($$self.$$.dirty[0] &
    /*slider, min*/
    524352) {
       if (slider && slider.min !== min) {
        $$invalidate(19, slider.min = min, slider);
      }
    }

    if ($$self.$$.dirty[0] &
    /*slider, max*/
    524416) {
       if (slider && slider.max !== max) {
        $$invalidate(19, slider.max = max, slider);
      }
    }

    if ($$self.$$.dirty[0] &
    /*slider, step*/
    524544) {
       if (slider && slider.step !== step) {
        $$invalidate(19, slider.step = step, slider);
      }
    }

    if ($$self.$$.dirty[0] &
    /*slider, value*/
    524289) {
       if (slider && slider.value !== value) {
        $$invalidate(19, slider.value = value, slider);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [value, use, className, disabled, discrete, displayMarkers, min, max, step, tabindex, element, forwardEvents, inputProps, handleChange, $$props, layout, stepUp, stepDown, getId, slider, removeLayoutListener, formField, addLayoutListener, div4_binding];
}

var Slider =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Slider, _SvelteComponentDev);

  function Slider(options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 1,
      class: 2,
      disabled: 3,
      discrete: 4,
      displayMarkers: 5,
      min: 6,
      max: 7,
      step: 8,
      value: 0,
      tabindex: 9,
      layout: 15,
      stepUp: 16,
      stepDown: 17,
      getId: 18
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Slider",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Slider, [{
    key: "use",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "discrete",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "displayMarkers",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "min",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "max",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "step",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "layout",
    get: function get() {
      return this.$$.ctx[15];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "stepUp",
    get: function get() {
      return this.$$.ctx[16];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "stepDown",
    get: function get() {
      return this.$$.ctx[17];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getId",
    get: function get() {
      return this.$$.ctx[18];
    },
    set: function set(value) {
      throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Slider;
}(SvelteComponentDev);

export { Slider as S };
