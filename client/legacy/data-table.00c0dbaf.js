import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, G as globals, c as create_slot, a as assign, a3 as getContext, a2 as setContext, C as onMount, a4 as onDestroy, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, E as listen_dev, m as insert_dev, P as append_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, a8 as run_all, F as binding_callbacks, b as current_component, D as empty, v as _inherits$1, w as _classCallCheck$1, x as _possibleConstructorReturn$1, y as _getPrototypeOf$1, z as _assertThisInitialized$1, M as space, W as text, I as create_component, N as claim_space, X as claim_text, J as claim_component, O as attr_dev, K as mount_component, $ as set_data_dev, L as destroy_component, R as group_outros, U as update_keyed_each, T as check_outros, V as outro_and_destroy_block, H as bind, Q as add_flush_callback, n as noop } from './index.0812fa32.js';
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
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { C as Checkbox } from './index.4e1eb8c9.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';

var css = ".mdc-data-table__content{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);border-radius:4px;border:1px solid rgba(0,0,0,.12);display:inline-flex;flex-direction:column;box-sizing:border-box;overflow-x:auto}.mdc-data-table__header-row,.mdc-data-table__row{background-color:inherit}.mdc-data-table__row--selected{background-color:rgba(255,62,0,.04)}.mdc-data-table__row{border-top-color:rgba(0,0,0,.12);border-top-width:1px;border-top-style:solid}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0,0,0,.04)}.mdc-data-table__cell,.mdc-data-table__header-cell{color:rgba(0,0,0,.87)}.mdc-data-table__header-row{height:56px}.mdc-data-table__row{height:52px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding-right:16px;padding-left:16px}.mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox{padding-left:16px;padding-right:0}.mdc-data-table__cell--checkbox[dir=rtl],.mdc-data-table__header-cell--checkbox[dir=rtl],[dir=rtl] .mdc-data-table__cell--checkbox,[dir=rtl] .mdc-data-table__header-cell--checkbox{padding-left:0;padding-right:16px}.mdc-data-table__table{width:100%;border:0;white-space:nowrap;border-collapse:collapse}.mdc-data-table__cell{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit}.mdc-data-table__cell--numeric{text-align:right}.mdc-data-table__cell--numeric[dir=rtl],[dir=rtl] .mdc-data-table__cell--numeric{text-align:left}.mdc-data-table__header-cell{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.00714em;text-decoration:inherit;text-transform:inherit;text-align:left}.mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell[dir=rtl],[dir=rtl] .mdc-data-table__header-cell{text-align:right}.mdc-data-table__header-cell--numeric[dir=rtl],[dir=rtl] .mdc-data-table__header-cell--numeric{text-align:left}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:after,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:after,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover:before{opacity:.04}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:after,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:after,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00);background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}@keyframes mdc-checkbox-fade-in-background-u68451b06{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00);background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}}@keyframes mdc-checkbox-fade-out-background-u68451b06{0%,80%{border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00);background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}to{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-u68451b06}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-u68451b06}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.78334}50%{animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}to{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.78334}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{animation-timing-function:cubic-bezier(.14,0,0,1);transform:rotate(45deg);opacity:0}to{transform:rotate(1turn);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{animation-timing-function:cubic-bezier(.14,0,0,1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,to{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-checkbox.mdc-checkbox--selected:after,.mdc-checkbox.mdc-checkbox--selected:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-checkbox.mdc-checkbox--selected:after,.mdc-checkbox.mdc-checkbox--selected:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-checkbox.mdc-checkbox--selected:hover:before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused:before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:after,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:after,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#676778;border-color:var(--mdc-theme-secondary,#676778);background-color:#676778;background-color:var(--mdc-theme-secondary,#676778)}@keyframes mdc-checkbox-fade-in-background-u9a60eb57{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#676778;border-color:var(--mdc-theme-secondary,#676778);background-color:#676778;background-color:var(--mdc-theme-secondary,#676778)}}@keyframes mdc-checkbox-fade-out-background-u9a60eb57{0%,80%{border-color:#676778;border-color:var(--mdc-theme-secondary,#676778);background-color:#676778;background-color:var(--mdc-theme-secondary,#676778)}to{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-u9a60eb57}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-u9a60eb57}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}@media screen and (-ms-high-contrast:active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__background .mdc-checkbox__background:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox__background .mdc-checkbox__background:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none!important}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background{animation-duration:.18s;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path .18s linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark .5s linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark .5s linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark .3s linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background:before{position:absolute;transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity,transform;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:focus~.mdc-checkbox__background:before{transform:scale(1);opacity:.12;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms;opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);padding:11px}.mdc-checkbox:after,.mdc-checkbox:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-checkbox.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-checkbox:after,.mdc-checkbox:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox:after,.mdc-checkbox:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-checkbox:hover:before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused:before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox:after,.mdc-checkbox:before{top:0;left:0;width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded:after,.mdc-checkbox.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-checkbox.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-checkbox .mdc-checkbox__background{left:11px;right:auto;top:11px}.mdc-checkbox[dir=rtl] .mdc-checkbox .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox .mdc-checkbox__background{left:auto;right:11px}.mdc-checkbox .mdc-checkbox__background:before{top:-13px;left:-13px;width:40px;height:40px}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background:before{content:none}";
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
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
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

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
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
var cssClasses$1 = {
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  BACKGROUND: 'mdc-checkbox__background',
  CHECKED: 'mdc-checkbox--checked',
  CHECKMARK: 'mdc-checkbox__checkmark',
  CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
  DISABLED: 'mdc-checkbox--disabled',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  MIXEDMARK: 'mdc-checkbox__mixedmark',
  NATIVE_CONTROL: 'mdc-checkbox__native-control',
  ROOT: 'mdc-checkbox',
  SELECTED: 'mdc-checkbox--selected',
  UPGRADED: 'mdc-checkbox--upgraded'
};
var strings$1 = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
  NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_UNCHECKED: 'unchecked'
};
var numbers$1 = {
  ANIM_END_LATCH_MS: 250
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

var MDCCheckboxFoundation =
/** @class */
function (_super) {
  __extends(MDCCheckboxFoundation, _super);

  function MDCCheckboxFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;

    _this.currentCheckState_ = strings$1.TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.enableAnimationEndHandler_ = false;
    return _this;
  }

  Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "numbers", {
    get: function get() {
      return numbers$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        forceLayout: function forceLayout() {
          return undefined;
        },
        hasNativeControl: function hasNativeControl() {
          return false;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return false;
        },
        isChecked: function isChecked() {
          return false;
        },
        isIndeterminate: function isIndeterminate() {
          return false;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        removeNativeControlAttr: function removeNativeControlAttr() {
          return undefined;
        },
        setNativeControlAttr: function setNativeControlAttr() {
          return undefined;
        },
        setNativeControlDisabled: function setNativeControlDisabled() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckboxFoundation.prototype.init = function () {
    this.currentCheckState_ = this.determineCheckState_();
    this.updateAriaChecked_();
    this.adapter_.addClass(cssClasses$1.UPGRADED);
  };

  MDCCheckboxFoundation.prototype.destroy = function () {
    clearTimeout(this.animEndLatchTimer_);
  };

  MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(cssClasses$1.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses$1.DISABLED);
    }
  };
  /**
   * Handles the animationend event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
    var _this = this;

    if (!this.enableAnimationEndHandler_) {
      return;
    }

    clearTimeout(this.animEndLatchTimer_);
    this.animEndLatchTimer_ = setTimeout(function () {
      _this.adapter_.removeClass(_this.currentAnimationClass_);

      _this.enableAnimationEndHandler_ = false;
    }, numbers$1.ANIM_END_LATCH_MS);
  };
  /**
   * Handles the change event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleChange = function () {
    this.transitionCheckState_();
  };

  MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
    if (!this.adapter_.hasNativeControl()) {
      return;
    }

    var oldState = this.currentCheckState_;
    var newState = this.determineCheckState_();

    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_();
    var TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;
    var SELECTED = cssClasses$1.SELECTED;

    if (newState === TRANSITION_STATE_UNCHECKED) {
      this.adapter_.removeClass(SELECTED);
    } else {
      this.adapter_.addClass(SELECTED);
    } // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.


    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.

    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = true;
    }
  };

  MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
    var TRANSITION_STATE_INDETERMINATE = strings$1.TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;

    if (this.adapter_.isIndeterminate()) {
      return TRANSITION_STATE_INDETERMINATE;
    }

    return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
    var TRANSITION_STATE_INIT = strings$1.TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;
    var _a = MDCCheckboxFoundation.cssClasses,
        ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED,
        ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE,
        ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED,
        ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE,
        ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED,
        ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;

    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }

        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;

      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;

      default:
        // TRANSITION_STATE_INDETERMINATE
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };

  MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.adapter_.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(strings$1.ARIA_CHECKED_ATTR, strings$1.ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      // The on/off state does not need to keep track of aria-checked, since
      // the screenreader uses the checked property on the checkbox element.
      this.adapter_.removeNativeControlAttr(strings$1.ARIA_CHECKED_ATTR);
    }
  };

  return MDCCheckboxFoundation;
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
var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckbox =
/** @class */
function (_super) {
  __extends(MDCCheckbox, _super);

  function MDCCheckbox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCCheckbox.attachTo = function (root) {
    return new MDCCheckbox(root);
  };

  Object.defineProperty(MDCCheckbox.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.nativeControl_.checked = checked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
    get: function get() {
      return this.nativeControl_.indeterminate;
    },
    set: function set(indeterminate) {
      this.nativeControl_.indeterminate = indeterminate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "value", {
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.nativeControl_.value = value;
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckbox.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange();
    };

    this.handleAnimationEnd_ = function () {
      return _this.foundation_.handleAnimationEnd();
    };

    this.nativeControl_.addEventListener('change', this.handleChange_);
    this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.installPropertyChangeHooks_();
  };

  MDCCheckbox.prototype.destroy = function () {
    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.handleChange_);
    this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.uninstallPropertyChangeHooks_();

    _super.prototype.destroy.call(this);
  };

  MDCCheckbox.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      forceLayout: function forceLayout() {
        return _this.root_.offsetWidth;
      },
      hasNativeControl: function hasNativeControl() {
        return !!_this.nativeControl_;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return Boolean(_this.root_.parentNode);
      },
      isChecked: function isChecked() {
        return _this.checked;
      },
      isIndeterminate: function isIndeterminate() {
        return _this.indeterminate;
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        return _this.nativeControl_.removeAttribute(attr);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        return _this.nativeControl_.setAttribute(attr, value);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new MDCCheckboxFoundation(adapter);
  };

  MDCCheckbox.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = _assign({}, MDCRipple.createAdapter(this), {
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.nativeControl_.removeEventListener(evtType, handler, applyPassive());
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(_this.nativeControl_, ':active');
      },
      isUnbounded: function isUnbounded() {
        return true;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.nativeControl_.addEventListener(evtType, handler, applyPassive());
      }
    });

    return new MDCRipple(this.root_, new MDCRippleFoundation(adapter));
  };

  MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
    var _this = this;

    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739

      if (!validDescriptor(desc)) {
        return;
      } // Type cast is needed for compatibility with Closure Compiler.


      var nativeGetter = desc.get;
      var nativeCbDesc = {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        get: nativeGetter,
        set: function set(state) {
          desc.set.call(nativeCb, state);

          _this.foundation_.handleChange();
        }
      };
      Object.defineProperty(nativeCb, controlState, nativeCbDesc);
    });
  };

  MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);

      if (!validDescriptor(desc)) {
        return;
      }

      Object.defineProperty(nativeCb, controlState, desc);
    });
  };

  Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);

      if (!el) {
        throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }

      return el;
    },
    enumerable: true,
    configurable: true
  });
  return MDCCheckbox;
}(MDCComponent);

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

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
var cssClasses$2 = {
  CELL: 'mdc-data-table__cell',
  CELL_NUMERIC: 'mdc-data-table__cell--numeric',
  CONTENT: 'mdc-data-table__content',
  HEADER_ROW: 'mdc-data-table__header-row',
  HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
  ROOT: 'mdc-data-table',
  ROW: 'mdc-data-table__row',
  ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
  ROW_SELECTED: 'mdc-data-table__row--selected'
};
var strings$2 = {
  ARIA_SELECTED: 'aria-selected',
  DATA_ROW_ID_ATTR: 'data-row-id',
  HEADER_ROW_CHECKBOX_SELECTOR: "." + cssClasses$2.HEADER_ROW_CHECKBOX,
  ROW_CHECKBOX_SELECTOR: "." + cssClasses$2.ROW_CHECKBOX,
  ROW_SELECTED_SELECTOR: "." + cssClasses$2.ROW_SELECTED,
  ROW_SELECTOR: "." + cssClasses$2.ROW
};
var events = {
  ROW_SELECTION_CHANGED: 'MDCDataTable:rowSelectionChanged',
  SELECTED_ALL: 'MDCDataTable:selectedAll',
  UNSELECTED_ALL: 'MDCDataTable:unselectedAll'
};

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

var MDCDataTableFoundation =
/** @class */
function (_super) {
  __extends(MDCDataTableFoundation, _super);

  function MDCDataTableFoundation(adapter) {
    return _super.call(this, _assign({}, MDCDataTableFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClassAtRowIndex: function addClassAtRowIndex() {
          return undefined;
        },
        getRowCount: function getRowCount() {
          return 0;
        },
        getRowElements: function getRowElements() {
          return [];
        },
        getRowIdAtIndex: function getRowIdAtIndex() {
          return '';
        },
        getRowIndexByChildElement: function getRowIndexByChildElement() {
          return 0;
        },
        getSelectedRowCount: function getSelectedRowCount() {
          return 0;
        },
        isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked() {
          return false;
        },
        isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
          return false;
        },
        isRowsSelectable: function isRowsSelectable() {
          return false;
        },
        notifyRowSelectionChanged: function notifyRowSelectionChanged() {
          return undefined;
        },
        notifySelectedAll: function notifySelectedAll() {
          return undefined;
        },
        notifyUnselectedAll: function notifyUnselectedAll() {
          return undefined;
        },
        registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
          return undefined;
        },
        registerRowCheckboxes: function registerRowCheckboxes() {
          return undefined;
        },
        removeClassAtRowIndex: function removeClassAtRowIndex() {
          return undefined;
        },
        setAttributeAtRowIndex: function setAttributeAtRowIndex() {
          return undefined;
        },
        setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked() {
          return undefined;
        },
        setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate() {
          return undefined;
        },
        setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   * Use this if registering checkbox is synchronous.
   */

  MDCDataTableFoundation.prototype.layout = function () {
    if (this.adapter_.isRowsSelectable()) {
      this.adapter_.registerHeaderRowCheckbox();
      this.adapter_.registerRowCheckboxes();
      this.setHeaderRowCheckboxState_();
    }
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   * Use this if registering checkbox is asynchronous.
   */


  MDCDataTableFoundation.prototype.layoutAsync = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.adapter_.isRowsSelectable()) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , this.adapter_.registerHeaderRowCheckbox()];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , this.adapter_.registerRowCheckboxes()];

          case 2:
            _a.sent();

            this.setHeaderRowCheckboxState_();
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTableFoundation.prototype.getRows = function () {
    return this.adapter_.getRowElements();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
      var isSelected = false;

      if (rowId && rowIds.indexOf(rowId) >= 0) {
        isSelected = true;
      }

      this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
      this.selectRowAtIndex_(rowIndex, isSelected);
    }

    this.setHeaderRowCheckboxState_();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
    var selectedRowIds = [];

    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      if (this.adapter_.isCheckboxAtRowIndexChecked(rowIndex)) {
        selectedRowIds.push(this.adapter_.getRowIdAtIndex(rowIndex));
      }
    }

    return selectedRowIds;
  };
  /**
   * Handles header row checkbox change event.
   */


  MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
    var isHeaderChecked = this.adapter_.isHeaderRowCheckboxChecked();

    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
      this.selectRowAtIndex_(rowIndex, isHeaderChecked);
    }

    if (isHeaderChecked) {
      this.adapter_.notifySelectedAll();
    } else {
      this.adapter_.notifyUnselectedAll();
    }
  };
  /**
   * Handles change event originated from row checkboxes.
   */


  MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
    var rowIndex = this.adapter_.getRowIndexByChildElement(event.target);

    if (rowIndex === -1) {
      return;
    }

    var selected = this.adapter_.isCheckboxAtRowIndexChecked(rowIndex);
    this.selectRowAtIndex_(rowIndex, selected);
    this.setHeaderRowCheckboxState_();
    var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
    this.adapter_.notifyRowSelectionChanged({
      rowId: rowId,
      rowIndex: rowIndex,
      selected: selected
    });
  };
  /**
   * Updates header row checkbox state based on number of rows selected.
   */


  MDCDataTableFoundation.prototype.setHeaderRowCheckboxState_ = function () {
    if (this.adapter_.getSelectedRowCount() === this.adapter_.getRowCount()) {
      this.adapter_.setHeaderRowCheckboxChecked(true);
      this.adapter_.setHeaderRowCheckboxIndeterminate(false);
    } else if (this.adapter_.getSelectedRowCount() === 0) {
      this.adapter_.setHeaderRowCheckboxIndeterminate(false);
      this.adapter_.setHeaderRowCheckboxChecked(false);
    } else {
      this.adapter_.setHeaderRowCheckboxIndeterminate(true);
      this.adapter_.setHeaderRowCheckboxChecked(false);
    }
  };
  /**
   * Sets the attributes of row element based on selection state.
   */


  MDCDataTableFoundation.prototype.selectRowAtIndex_ = function (rowIndex, selected) {
    if (selected) {
      this.adapter_.addClassAtRowIndex(rowIndex, cssClasses$2.ROW_SELECTED);
      this.adapter_.setAttributeAtRowIndex(rowIndex, strings$2.ARIA_SELECTED, 'true');
    } else {
      this.adapter_.removeClassAtRowIndex(rowIndex, cssClasses$2.ROW_SELECTED);
      this.adapter_.setAttributeAtRowIndex(rowIndex, strings$2.ARIA_SELECTED, 'false');
    }
  };

  return MDCDataTableFoundation;
}(MDCFoundation);

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

var MDCDataTable =
/** @class */
function (_super) {
  __extends(MDCDataTable, _super);

  function MDCDataTable() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDataTable.attachTo = function (root) {
    return new MDCDataTable(root);
  };

  MDCDataTable.prototype.initialize = function (checkboxFactory) {
    if (checkboxFactory === void 0) {
      checkboxFactory = function checkboxFactory(el) {
        return new MDCCheckbox(el);
      };
    }

    this.checkboxFactory_ = checkboxFactory;
  };

  MDCDataTable.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.headerRow_ = this.root_.querySelector("." + cssClasses$2.HEADER_ROW);

    this.handleHeaderRowCheckboxChange_ = function () {
      return _this.foundation_.handleHeaderRowCheckboxChange();
    };

    this.headerRow_.addEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_ = this.root_.querySelector("." + cssClasses$2.CONTENT);

    this.handleRowCheckboxChange_ = function (event) {
      return _this.foundation_.handleRowCheckboxChange(event);
    };

    this.content_.addEventListener('change', this.handleRowCheckboxChange_);
    this.layout();
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   */


  MDCDataTable.prototype.layout = function () {
    this.foundation_.layout();
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTable.prototype.getRows = function () {
    return this.foundation_.getRows();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTable.prototype.getSelectedRowIds = function () {
    return this.foundation_.getSelectedRowIds();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTable.prototype.setSelectedRowIds = function (rowIds) {
    this.foundation_.setSelectedRowIds(rowIds);
  };

  MDCDataTable.prototype.destroy = function () {
    this.headerRow_.removeEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_.removeEventListener('change', this.handleRowCheckboxChange_);
    this.headerRowCheckbox_.destroy();
    this.rowCheckboxList_.forEach(function (checkbox) {
      return checkbox.destroy();
    });
  };

  MDCDataTable.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassAtRowIndex: function addClassAtRowIndex(rowIndex, className) {
        return _this.getRows()[rowIndex].classList.add(className);
      },
      getRowCount: function getRowCount() {
        return _this.getRows().length;
      },
      getRowElements: function getRowElements() {
        return [].slice.call(_this.root_.querySelectorAll(strings$2.ROW_SELECTOR));
      },
      getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
        return _this.getRows()[rowIndex].getAttribute(strings$2.DATA_ROW_ID_ATTR);
      },
      getRowIndexByChildElement: function getRowIndexByChildElement(el) {
        return _this.getRows().indexOf(closest(el, strings$2.ROW_SELECTOR));
      },
      getSelectedRowCount: function getSelectedRowCount() {
        return _this.root_.querySelectorAll(strings$2.ROW_SELECTED_SELECTOR).length;
      },
      isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
        return _this.rowCheckboxList_[rowIndex].checked;
      },
      isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
        return _this.headerRowCheckbox_.checked;
      },
      isRowsSelectable: function isRowsSelectable() {
        return !!_this.root_.querySelector(strings$2.ROW_CHECKBOX_SELECTOR);
      },
      notifyRowSelectionChanged: function notifyRowSelectionChanged(data) {
        _this.emit(events.ROW_SELECTION_CHANGED, {
          row: _this.getRowByIndex_(data.rowIndex),
          rowId: _this.getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        },
        /** shouldBubble */
        true);
      },
      notifySelectedAll: function notifySelectedAll() {
        return _this.emit(events.SELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      notifyUnselectedAll: function notifyUnselectedAll() {
        return _this.emit(events.UNSELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
        if (_this.headerRowCheckbox_) {
          _this.headerRowCheckbox_.destroy();
        }

        var checkboxEl = _this.root_.querySelector(strings$2.HEADER_ROW_CHECKBOX_SELECTOR);

        _this.headerRowCheckbox_ = _this.checkboxFactory_(checkboxEl);
      },
      registerRowCheckboxes: function registerRowCheckboxes() {
        if (_this.rowCheckboxList_) {
          _this.rowCheckboxList_.forEach(function (checkbox) {
            return checkbox.destroy();
          });
        }

        _this.rowCheckboxList_ = [];

        _this.getRows().forEach(function (rowEl) {
          var checkbox = _this.checkboxFactory_(rowEl.querySelector(strings$2.ROW_CHECKBOX_SELECTOR));

          _this.rowCheckboxList_.push(checkbox);
        });
      },
      removeClassAtRowIndex: function removeClassAtRowIndex(rowIndex, className) {
        _this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: function setAttributeAtRowIndex(rowIndex, attr, value) {
        _this.getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked(checked) {
        _this.headerRowCheckbox_.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate(indeterminate) {
        _this.headerRowCheckbox_.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex(rowIndex, checked) {
        _this.rowCheckboxList_[rowIndex].checked = checked;
      }
    };
    return new MDCDataTableFoundation(adapter);
  };

  MDCDataTable.prototype.getRowByIndex_ = function (index) {
    return this.getRows()[index];
  };

  MDCDataTable.prototype.getRowIdByIndex_ = function (index) {
    return this.getRowByIndex_(index).getAttribute(strings$2.DATA_ROW_ID_ATTR);
  };

  return MDCDataTable;
}(MDCComponent);

var Error_1 = globals.Error;
var file = "home/hperrin/repos/svelte-material-ui/packages/data-table/DataTable.svelte";

function create_fragment(ctx) {
  var div;
  var table;
  var useActions_action;
  var useActions_action_1;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[23].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[22], null);
  var table_levels = [{
    class: "mdc-data-table__table " +
    /*table$class*/
    ctx[3]
  }, prefixFilter(
  /*$$props*/
  ctx[7], "table$")];
  var table_data = {};

  for (var i = 0; i < table_levels.length; i += 1) {
    table_data = assign(table_data, table_levels[i]);
  }

  var div_levels = [{
    class: "mdc-data-table " +
    /*className*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "table$"])];
  var div_data = {};

  for (var _i = 0; _i < div_levels.length; _i += 1) {
    div_data = assign(div_data, div_levels[_i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      table = element("table");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      table = claim_element(div_nodes, "TABLE", {
        class: true
      });
      var table_nodes = children(table);
      if (default_slot) default_slot.l(table_nodes);
      table_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(table, table_data);
      add_location(table, file, 10, 2, 308);
      set_attributes(div, div_data);
      add_location(div, file, 0, 0, 0);
      dispose = [listen_dev(div, "MDCDataTable:rowSelectionChanged",
      /*handleChange*/
      ctx[6], false, false, false), listen_dev(div, "MDCDataTable:selectedAll",
      /*handleChange*/
      ctx[6], false, false, false), listen_dev(div, "MDCDataTable:unselectedAll",
      /*handleChange*/
      ctx[6], false, false, false)];
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, table);

      if (default_slot) {
        default_slot.m(table, null);
      }

      useActions_action = useActions.call(null, table,
      /*table$use*/
      ctx[2]) || {};
      /*div_binding*/

      ctx[24](div);
      useActions_action_1 = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[5].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      4194304) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[22], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[22], dirty, null));
      }

      set_attributes(table, get_spread_update(table_levels, [dirty[0] &
      /*table$class*/
      8 && {
        class: "mdc-data-table__table " +
        /*table$class*/
        ctx[3]
      }, dirty[0] &
      /*$$props*/
      128 && prefixFilter(
      /*$$props*/
      ctx[7], "table$")]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*table$use*/
      4) useActions_action.update.call(null,
      /*table$use*/
      ctx[2]);
      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className*/
      2 && {
        class: "mdc-data-table " +
        /*className*/
        ctx[1]
      }, dirty[0] &
      /*$$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "table$"])]));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      /*div_binding*/

      ctx[24](null);
      if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      run_all(dispose);
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

  var forwardEvents = forwardEventsBuilder(current_component, ["MDCDataTable:rowSelectionChanged", "MDCDataTable:selectedAll", "MDCDataTable:unselectedAll"]);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$table$use = _$$props3.table$use,
      table$use = _$$props3$table$use === void 0 ? [] : _$$props3$table$use;
  var _$$props4 = $$props,
      _$$props4$table$class = _$$props4.table$class,
      table$class = _$$props4$table$class === void 0 ? "" : _$$props4$table$class;
  var element;
  var dataTable;
  var changeHandlers = [];
  var checkBoxHeaderPromiseResolve;
  var checkBoxHeaderPromise = new Promise(function (resolve) {
    return checkBoxHeaderPromiseResolve = resolve;
  });
  var checkBoxListPromiseResolve;
  var checkBoxListPromise = new Promise(function (resolve) {
    return checkBoxListPromiseResolve = resolve;
  });
  var addLayoutListener = getContext("SMUI:addLayoutListener");
  var removeLayoutListener;
  setContext("SMUI:generic:input:addChangeHandler", addChangeHandler);
  setContext("SMUI:checkbox:context", "data-table");
  setContext("SMUI:checkbox:instantiate", false);
  setContext("SMUI:checkbox:getInstance", getCheckboxInstancePromise);

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(function _callee() {
    return _regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataTable = new MDCDataTable(element);
            checkBoxHeaderPromiseResolve(dataTable.headerRowCheckbox_);
            checkBoxListPromiseResolve(dataTable.rowCheckboxList_);

            if (!dataTable.headerRowCheckbox_) {
              dataTable.headerRowCheckbox_ = {
                destroy: function destroy() {}
              };
            }

            if (!dataTable.rowCheckboxList_) {
              dataTable.rowCheckboxList_ = [];
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  onDestroy(function () {
    dataTable && dataTable.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function getCheckboxInstancePromise(header) {
    return header ? checkBoxHeaderPromise : checkBoxListPromise;
  }

  function handleChange() {
    for (var i = 0; i < changeHandlers.length; i++) {
      changeHandlers[i]();
    }
  }

  function addChangeHandler(handler) {
    changeHandlers.push(handler);
  }

  function layout() {
    var _dataTable;

    return (_dataTable = dataTable).layout.apply(_dataTable, arguments);
  }

  function getRows() {
    var _dataTable2;

    return (_dataTable2 = dataTable).getRows.apply(_dataTable2, arguments);
  }

  function getSelectedRowIds() {
    var _dataTable3;

    return (_dataTable3 = dataTable).getSelectedRowIds.apply(_dataTable3, arguments);
  }

  function setSelectedRowIds() {
    var _dataTable4;

    return (_dataTable4 = dataTable).setSelectedRowIds.apply(_dataTable4, arguments);
  }

  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("table$use" in $$new_props) $$invalidate(2, table$use = $$new_props.table$use);
    if ("table$class" in $$new_props) $$invalidate(3, table$class = $$new_props.table$class);
    if ("$$scope" in $$new_props) $$invalidate(22, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      table$use: table$use,
      table$class: table$class,
      element: element,
      dataTable: dataTable,
      changeHandlers: changeHandlers,
      checkBoxHeaderPromiseResolve: checkBoxHeaderPromiseResolve,
      checkBoxHeaderPromise: checkBoxHeaderPromise,
      checkBoxListPromiseResolve: checkBoxListPromiseResolve,
      checkBoxListPromise: checkBoxListPromise,
      addLayoutListener: addLayoutListener,
      removeLayoutListener: removeLayoutListener
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("table$use" in $$props) $$invalidate(2, table$use = $$new_props.table$use);
    if ("table$class" in $$props) $$invalidate(3, table$class = $$new_props.table$class);
    if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
    if ("dataTable" in $$props) dataTable = $$new_props.dataTable;
    if ("changeHandlers" in $$props) changeHandlers = $$new_props.changeHandlers;
    if ("checkBoxHeaderPromiseResolve" in $$props) checkBoxHeaderPromiseResolve = $$new_props.checkBoxHeaderPromiseResolve;
    if ("checkBoxHeaderPromise" in $$props) checkBoxHeaderPromise = $$new_props.checkBoxHeaderPromise;
    if ("checkBoxListPromiseResolve" in $$props) checkBoxListPromiseResolve = $$new_props.checkBoxListPromiseResolve;
    if ("checkBoxListPromise" in $$props) checkBoxListPromise = $$new_props.checkBoxListPromise;
    if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
    if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
  };

  $$props = exclude_internal_props($$props);
  return [use, className, table$use, table$class, element, forwardEvents, handleChange, $$props, layout, getRows, getSelectedRowIds, setSelectedRowIds, dataTable, checkBoxHeaderPromiseResolve, checkBoxListPromiseResolve, removeLayoutListener, changeHandlers, checkBoxHeaderPromise, checkBoxListPromise, addLayoutListener, getCheckboxInstancePromise, addChangeHandler, $$scope, $$slots, div_binding];
}

var DataTable =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(DataTable, _SvelteComponentDev);

  function DataTable(options) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      table$use: 2,
      table$class: 3,
      layout: 8,
      getRows: 9,
      getSelectedRowIds: 10,
      setSelectedRowIds: 11
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "DataTable",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(DataTable, [{
    key: "use",
    get: function get() {
      throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "table$use",
    get: function get() {
      throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "table$class",
    get: function get() {
      throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "layout",
    get: function get() {
      return this.$$.ctx[8];
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getRows",
    get: function get() {
      return this.$$.ctx[9];
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getSelectedRowIds",
    get: function get() {
      return this.$$.ctx[10];
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "setSelectedRowIds",
    get: function get() {
      return this.$$.ctx[11];
    },
    set: function set(value) {
      throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return DataTable;
}(SvelteComponentDev);

var file$1 = "home/hperrin/repos/svelte-material-ui/packages/data-table/Head.svelte";

function create_fragment$1(ctx) {
  var thead;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[4].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  var thead_levels = [exclude(
  /*$$props*/
  ctx[2], ["use"])];
  var thead_data = {};

  for (var i = 0; i < thead_levels.length; i += 1) {
    thead_data = assign(thead_data, thead_levels[i]);
  }

  var block = {
    c: function create() {
      thead = element("thead");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      thead = claim_element(nodes, "THEAD", {});
      var thead_nodes = children(thead);
      if (default_slot) default_slot.l(thead_nodes);
      thead_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(thead, thead_data);
      add_location(thead, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, thead, anchor);

      if (default_slot) {
        default_slot.m(thead, null);
      }

      useActions_action = useActions.call(null, thead,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[1].call(null, thead) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      8) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[3], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[3], dirty, null));
      }

      set_attributes(thead, get_spread_update(thead_levels, [dirty[0] &
      /*$$props*/
      4 && exclude(
      /*$$props*/
      ctx[2], ["use"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
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
      if (detaching) detach_dev(thead);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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
  setContext("SMUI:data-table:row:header", true);
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  };

  $$props = exclude_internal_props($$props);
  return [use, forwardEvents, $$props, $$scope, $$slots];
}

var Head =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Head, _SvelteComponentDev);

  function Head(options) {
    var _this;

    _classCallCheck(this, Head);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Head).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Head",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Head, [{
    key: "use",
    get: function get() {
      throw new Error("<Head>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Head>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Head;
}(SvelteComponentDev);

var file$2 = "home/hperrin/repos/svelte-material-ui/packages/data-table/Body.svelte";

function create_fragment$2(ctx) {
  var tbody;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[5].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[4], null);
  var tbody_levels = [{
    class: "mdc-data-table__content " +
    /*className*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[3], ["use", "class"])];
  var tbody_data = {};

  for (var i = 0; i < tbody_levels.length; i += 1) {
    tbody_data = assign(tbody_data, tbody_levels[i]);
  }

  var block = {
    c: function create() {
      tbody = element("tbody");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      tbody = claim_element(nodes, "TBODY", {
        class: true
      });
      var tbody_nodes = children(tbody);
      if (default_slot) default_slot.l(tbody_nodes);
      tbody_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(tbody, tbody_data);
      add_location(tbody, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tbody, anchor);

      if (default_slot) {
        default_slot.m(tbody, null);
      }

      useActions_action = useActions.call(null, tbody,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[2].call(null, tbody) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      16) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[4], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[4], dirty, null));
      }

      set_attributes(tbody, get_spread_update(tbody_levels, [dirty[0] &
      /*className*/
      2 && {
        class: "mdc-data-table__content " +
        /*className*/
        ctx[1]
      }, dirty[0] &
      /*$$props*/
      8 && exclude(
      /*$$props*/
      ctx[3], ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
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
      if (detaching) detach_dev(tbody);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
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
  setContext("SMUI:data-table:row:header", false);
  var _$$props3 = $$props,
      _$$props3$$$slots = _$$props3.$$slots,
      $$slots = _$$props3$$$slots === void 0 ? {} : _$$props3$$$slots,
      $$scope = _$$props3.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("$$scope" in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, forwardEvents, $$props, $$scope, $$slots];
}

var Body =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Body, _SvelteComponentDev);

  function Body(options) {
    var _this;

    _classCallCheck(this, Body);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Body",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Body, [{
    key: "use",
    get: function get() {
      throw new Error("<Body>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Body>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Body>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Body>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Body;
}(SvelteComponentDev);

var file$3 = "home/hperrin/repos/svelte-material-ui/packages/data-table/Row.svelte";

function create_fragment$3(ctx) {
  var tr;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[10].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[9], null);
  var tr_levels = [{
    class: "\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*header*/
    ctx[5] ? "mdc-data-table__header-row" : "") + "\n    " + (!
    /*header*/
    ctx[5] ? "mdc-data-table__row" : "") + "\n    " + (!
    /*header*/
    ctx[5] &&
    /*selected*/
    ctx[3] ? "mdc-data-table__row--selected" : "") + "\n  "
  },
  /*selected*/
  ctx[3] !== undefined ? {
    "aria-selected":
    /*selected*/
    ctx[3] ? "true" : "false"
  } : {}, exclude(
  /*$$props*/
  ctx[6], ["use", "class"])];
  var tr_data = {};

  for (var i = 0; i < tr_levels.length; i += 1) {
    tr_data = assign(tr_data, tr_levels[i]);
  }

  var block = {
    c: function create() {
      tr = element("tr");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      tr = claim_element(nodes, "TR", {
        class: true
      });
      var tr_nodes = children(tr);
      if (default_slot) default_slot.l(tr_nodes);
      tr_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(tr, tr_data);
      add_location(tr, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tr, anchor);

      if (default_slot) {
        default_slot.m(tr, null);
      }
      /*tr_binding*/


      ctx[11](tr);
      useActions_action = useActions.call(null, tr,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, tr) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      512) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[9], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[9], dirty, null));
      }

      set_attributes(tr, get_spread_update(tr_levels, [dirty[0] &
      /*className, header, selected*/
      42 && {
        class: "\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*header*/
        ctx[5] ? "mdc-data-table__header-row" : "") + "\n    " + (!
        /*header*/
        ctx[5] ? "mdc-data-table__row" : "") + "\n    " + (!
        /*header*/
        ctx[5] &&
        /*selected*/
        ctx[3] ? "mdc-data-table__row--selected" : "") + "\n  "
      }, dirty[0] &
      /*selected*/
      8 && (
      /*selected*/
      ctx[3] !== undefined ? {
        "aria-selected":
        /*selected*/
        ctx[3] ? "true" : "false"
      } : {}), dirty[0] &
      /*$$props*/
      64 && exclude(
      /*$$props*/
      ctx[6], ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
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
      if (detaching) detach_dev(tr);
      if (default_slot) default_slot.d(detaching);
      /*tr_binding*/

      ctx[11](null);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var element;
  var header = getContext("SMUI:data-table:row:header");
  var selected = undefined;
  setContext("SMUI:data-table:row:getIndex", getIndex);
  setContext("SMUI:generic:input:setChecked", setChecked);

  function setChecked(checked) {
    $$invalidate(3, selected = checked);
  }

  function getIndex() {
    var i = 0;

    if (element) {
      var el = element;

      while (el.previousSibling) {
        el = el.previousSibling;

        if (el.nodeType === 1) {
          i++;
        }
      }
    }

    return i;
  }

  var _$$props3 = $$props,
      _$$props3$$$slots = _$$props3.$$slots,
      $$slots = _$$props3$$$slots === void 0 ? {} : _$$props3$$$slots,
      $$scope = _$$props3.$$scope;

  function tr_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(2, element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      element: element,
      header: header,
      selected: selected
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
    if ("header" in $$props) $$invalidate(5, header = $$new_props.header);
    if ("selected" in $$props) $$invalidate(3, selected = $$new_props.selected);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, element, selected, forwardEvents, header, $$props, setChecked, getIndex, $$scope, $$slots, tr_binding];
}

var Row =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Row, _SvelteComponentDev);

  function Row(options) {
    var _this;

    _classCallCheck(this, Row);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Row).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Row",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Row, [{
    key: "use",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Row;
}(SvelteComponentDev);

var file$4 = "home/hperrin/repos/svelte-material-ui/packages/data-table/Cell.svelte"; // (14:0) {:else}

function create_else_block(ctx) {
  var td;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var td_levels = [{
    class: "\n      mdc-data-table__cell\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*numeric*/
    ctx[2] ? "mdc-data-table__cell--numeric" : "") + "\n      " + (
    /*checkbox*/
    ctx[3] ? "mdc-data-table__cell--checkbox" : "") + "\n    "
  },
  /*roleProp*/
  ctx[5],
  /*scopeProp*/
  ctx[6],
  /*props*/
  ctx[4]];
  var td_data = {};

  for (var i = 0; i < td_levels.length; i += 1) {
    td_data = assign(td_data, td_levels[i]);
  }

  var block = {
    c: function create() {
      td = element("td");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      td = claim_element(nodes, "TD", {
        class: true
      });
      var td_nodes = children(td);
      if (default_slot) default_slot.l(td_nodes);
      td_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(td, td_data);
      add_location(td, file$4, 14, 2, 284);
    },
    m: function mount(target, anchor) {
      insert_dev(target, td, anchor);

      if (default_slot) {
        default_slot.m(td, null);
      }

      useActions_action = useActions.call(null, td,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, td) || {};
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

      set_attributes(td, get_spread_update(td_levels, [dirty[0] &
      /*className, numeric, checkbox*/
      14 && {
        class: "\n      mdc-data-table__cell\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*numeric*/
        ctx[2] ? "mdc-data-table__cell--numeric" : "") + "\n      " + (
        /*checkbox*/
        ctx[3] ? "mdc-data-table__cell--checkbox" : "") + "\n    "
      }, dirty[0] &
      /*roleProp*/
      32 &&
      /*roleProp*/
      ctx[5], dirty[0] &
      /*scopeProp*/
      64 &&
      /*scopeProp*/
      ctx[6], dirty[0] &
      /*props*/
      16 &&
      /*props*/
      ctx[4]]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
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
      if (detaching) detach_dev(td);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(14:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if header}


function create_if_block(ctx) {
  var th;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var th_levels = [{
    class: "\n      mdc-data-table__header-cell\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*checkbox*/
    ctx[3] ? "mdc-data-table__header-cell--checkbox" : "") + "\n    "
  },
  /*roleProp*/
  ctx[5],
  /*scopeProp*/
  ctx[6],
  /*props*/
  ctx[4]];
  var th_data = {};

  for (var i = 0; i < th_levels.length; i += 1) {
    th_data = assign(th_data, th_levels[i]);
  }

  var block = {
    c: function create() {
      th = element("th");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      th = claim_element(nodes, "TH", {
        class: true
      });
      var th_nodes = children(th);
      if (default_slot) default_slot.l(th_nodes);
      th_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(th, th_data);
      add_location(th, file$4, 1, 2, 15);
    },
    m: function mount(target, anchor) {
      insert_dev(target, th, anchor);

      if (default_slot) {
        default_slot.m(th, null);
      }

      useActions_action = useActions.call(null, th,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, th) || {};
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

      set_attributes(th, get_spread_update(th_levels, [dirty[0] &
      /*className, checkbox*/
      10 && {
        class: "\n      mdc-data-table__header-cell\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*checkbox*/
        ctx[3] ? "mdc-data-table__header-cell--checkbox" : "") + "\n    "
      }, dirty[0] &
      /*roleProp*/
      32 &&
      /*roleProp*/
      ctx[5], dirty[0] &
      /*scopeProp*/
      64 &&
      /*scopeProp*/
      ctx[6], dirty[0] &
      /*props*/
      16 &&
      /*props*/
      ctx[4]]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
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
      if (detaching) detach_dev(th);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if header}",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*header*/
    ctx[8]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if_block.p(ctx, dirty);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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

function instance$4($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var header = getContext("SMUI:data-table:row:header");
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$role = _$$props3.role,
      role = _$$props3$role === void 0 ? header ? "columnheader" : undefined : _$$props3$role;
  var _$$props4 = $$props,
      _$$props4$scope = _$$props4.scope,
      scope = _$$props4$scope === void 0 ? header ? "col" : undefined : _$$props4$scope;
  var _$$props5 = $$props,
      _$$props5$numeric = _$$props5.numeric,
      numeric = _$$props5$numeric === void 0 ? false : _$$props5$numeric;
  var _$$props6 = $$props,
      _$$props6$checkbox = _$$props6.checkbox,
      checkbox = _$$props6$checkbox === void 0 ? false : _$$props6$checkbox;
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("role" in $$new_props) $$invalidate(9, role = $$new_props.role);
    if ("scope" in $$new_props) $$invalidate(10, scope = $$new_props.scope);
    if ("numeric" in $$new_props) $$invalidate(2, numeric = $$new_props.numeric);
    if ("checkbox" in $$new_props) $$invalidate(3, checkbox = $$new_props.checkbox);
    if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      header: header,
      use: use,
      className: className,
      role: role,
      scope: scope,
      numeric: numeric,
      checkbox: checkbox,
      props: props,
      roleProp: roleProp,
      scopeProp: scopeProp
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(11, $$props = assign(assign({}, $$props), $$new_props));
    if ("header" in $$props) $$invalidate(8, header = $$new_props.header);
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("role" in $$props) $$invalidate(9, role = $$new_props.role);
    if ("scope" in $$props) $$invalidate(10, scope = $$new_props.scope);
    if ("numeric" in $$props) $$invalidate(2, numeric = $$new_props.numeric);
    if ("checkbox" in $$props) $$invalidate(3, checkbox = $$new_props.checkbox);
    if ("props" in $$props) $$invalidate(4, props = $$new_props.props);
    if ("roleProp" in $$props) $$invalidate(5, roleProp = $$new_props.roleProp);
    if ("scopeProp" in $$props) $$invalidate(6, scopeProp = $$new_props.scopeProp);
  };

  var props;
  var roleProp;
  var scopeProp;

  $$self.$$.update = function () {
     $$invalidate(4, props = exclude($$props, ["use", "class", "numeric", "checkbox"]));

    if ($$self.$$.dirty[0] &
    /*role*/
    512) {
       $$invalidate(5, roleProp = role ? {
        role: role
      } : {});
    }

    if ($$self.$$.dirty[0] &
    /*scope*/
    1024) {
       $$invalidate(6, scopeProp = scope ? {
        scope: scope
      } : {});
    }
  };

  $$props = exclude_internal_props($$props);
  return [use, className, numeric, checkbox, props, roleProp, scopeProp, forwardEvents, header, role, scope, $$props, $$scope, $$slots];
}

var Cell =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Cell, _SvelteComponentDev);

  function Cell(options) {
    var _this;

    _classCallCheck(this, Cell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cell).call(this, options));
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      use: 0,
      class: 1,
      role: 9,
      scope: 10,
      numeric: 2,
      checkbox: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Cell",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  _createClass(Cell, [{
    key: "use",
    get: function get() {
      throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "role",
    get: function get() {
      throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scope",
    get: function get() {
      throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "numeric",
    get: function get() {
      throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "checkbox",
    get: function get() {
      throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Cell;
}(SvelteComponentDev);

var file$5 = "src/routes/demo/data-table.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
} // (12:10) <Cell>


function create_default_slot_35(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Name");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Name");
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
    id: create_default_slot_35.name,
    type: "slot",
    source: "(12:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (13:10) <Cell>


function create_default_slot_34(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Favorite Color");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Favorite Color");
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
    id: create_default_slot_34.name,
    type: "slot",
    source: "(13:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (14:10) <Cell>


function create_default_slot_33(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Favorite Number");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Favorite Number");
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
    id: create_default_slot_33.name,
    type: "slot",
    source: "(14:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (11:8) <Row>


function create_default_slot_32(ctx) {
  var t0;
  var t1;
  var current;
  var cell0 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell1 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell2 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(11:8) <Row>",
    ctx: ctx
  });
  return block;
} // (10:6) <Head>


function create_default_slot_31(ctx) {
  var current;
  var row = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(row.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(row.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var row_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        row_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row.$set(row_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(row, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(10:6) <Head>",
    ctx: ctx
  });
  return block;
} // (19:10) <Cell>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Steve");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Steve");
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
    id: create_default_slot_30.name,
    type: "slot",
    source: "(19:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (20:10) <Cell>


function create_default_slot_29(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Red");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Red");
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
    source: "(20:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (21:10) <Cell numeric>


function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("45");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "45");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(21:10) <Cell numeric>",
    ctx: ctx
  });
  return block;
} // (18:8) <Row>


function create_default_slot_27(ctx) {
  var t0;
  var t1;
  var current;
  var cell0 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell1 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell2 = new Cell({
    props: {
      numeric: true,
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(18:8) <Row>",
    ctx: ctx
  });
  return block;
} // (24:10) <Cell>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Sharon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Sharon");
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(24:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (25:10) <Cell>


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Purple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Purple");
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(25:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (26:10) <Cell numeric>


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("5");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "5");
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
    id: create_default_slot_24.name,
    type: "slot",
    source: "(26:10) <Cell numeric>",
    ctx: ctx
  });
  return block;
} // (23:8) <Row>


function create_default_slot_23(ctx) {
  var t0;
  var t1;
  var current;
  var cell0 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell1 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell2 = new Cell({
    props: {
      numeric: true,
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
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(23:8) <Row>",
    ctx: ctx
  });
  return block;
} // (29:10) <Cell>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Rodney");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Rodney");
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
    source: "(29:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (30:10) <Cell>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Orange");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Orange");
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
    id: create_default_slot_21.name,
    type: "slot",
    source: "(30:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (31:10) <Cell numeric>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("32");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "32");
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
    source: "(31:10) <Cell numeric>",
    ctx: ctx
  });
  return block;
} // (28:8) <Row>


function create_default_slot_19(ctx) {
  var t0;
  var t1;
  var current;
  var cell0 = new Cell({
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
  var cell1 = new Cell({
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
  var cell2 = new Cell({
    props: {
      numeric: true,
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
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(28:8) <Row>",
    ctx: ctx
  });
  return block;
} // (34:10) <Cell>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Mack");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Mack");
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
    source: "(34:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (35:10) <Cell>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Blue");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Blue");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(35:10) <Cell>",
    ctx: ctx
  });
  return block;
} // (36:10) <Cell numeric>


function create_default_slot_16(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("12");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "12");
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
    source: "(36:10) <Cell numeric>",
    ctx: ctx
  });
  return block;
} // (33:8) <Row>


function create_default_slot_15(ctx) {
  var t0;
  var t1;
  var current;
  var cell0 = new Cell({
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
  var cell1 = new Cell({
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
  var cell2 = new Cell({
    props: {
      numeric: true,
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
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(33:8) <Row>",
    ctx: ctx
  });
  return block;
} // (17:6) <Body>


function create_default_slot_14(ctx) {
  var t0;
  var t1;
  var t2;
  var current;
  var row0 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var row1 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var row2 = new Row({
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
  var row3 = new Row({
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
      create_component(row0.$$.fragment);
      t0 = space();
      create_component(row1.$$.fragment);
      t1 = space();
      create_component(row2.$$.fragment);
      t2 = space();
      create_component(row3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(row0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(row1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(row2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(row3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(row0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(row1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(row2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(row3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var row0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        row0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row0.$set(row0_changes);
      var row1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        row1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row1.$set(row1_changes);
      var row2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        row2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row2.$set(row2_changes);
      var row3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        row3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row3.$set(row3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(row0.$$.fragment, local);
      transition_in(row1.$$.fragment, local);
      transition_in(row2.$$.fragment, local);
      transition_in(row3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(row0.$$.fragment, local);
      transition_out(row1.$$.fragment, local);
      transition_out(row2.$$.fragment, local);
      transition_out(row3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(row0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(row1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(row2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(row3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(17:6) <Body>",
    ctx: ctx
  });
  return block;
} // (9:4) <DataTable table$aria-label="People list">


function create_default_slot_13(ctx) {
  var t;
  var current;
  var head = new Head({
    props: {
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var body = new Body({
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
      create_component(head.$$.fragment);
      t = space();
      create_component(body.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(head.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(body.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(head, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(body, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var head_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        head_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      head.$set(head_changes);
      var body_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        body_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      body.$set(body_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(head.$$.fragment, local);
      transition_in(body.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(head.$$.fragment, local);
      transition_out(body.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(head, detaching);
      if (detaching) detach_dev(t);
      destroy_component(body, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(9:4) <DataTable table$aria-label=\\\"People list\\\">",
    ctx: ctx
  });
  return block;
} // (49:12) <Cell checkbox>


function create_default_slot_12(ctx) {
  var current;
  var checkbox = new Checkbox({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(49:12) <Cell checkbox>",
    ctx: ctx
  });
  return block;
} // (52:12) <Cell>


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Name");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Name");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(52:12) <Cell>",
    ctx: ctx
  });
  return block;
} // (53:12) <Cell>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Description");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Description");
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
    source: "(53:12) <Cell>",
    ctx: ctx
  });
  return block;
} // (54:12) <Cell>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Price");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Price");
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(54:12) <Cell>",
    ctx: ctx
  });
  return block;
} // (48:10) <Row>


function create_default_slot_8(ctx) {
  var t0;
  var t1;
  var t2;
  var current;
  var cell0 = new Cell({
    props: {
      checkbox: true,
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell1 = new Cell({
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
  var cell2 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell3 = new Cell({
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
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
      t2 = space();
      create_component(cell3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(cell3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(cell3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
      var cell3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell3.$set(cell3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      transition_in(cell3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      transition_out(cell3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(cell3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(48:10) <Row>",
    ctx: ctx
  });
  return block;
} // (47:8) <Head>


function create_default_slot_7(ctx) {
  var current;
  var row = new Row({
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
      create_component(row.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(row.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var row_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        row_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row.$set(row_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(row, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(47:8) <Head>",
    ctx: ctx
  });
  return block;
} // (60:14) <Cell checkbox>


function create_default_slot_6(ctx) {
  var updating_group;
  var current;

  function checkbox_group_binding(value) {
    /*checkbox_group_binding*/
    ctx[3].call(null, value);
  }

  var checkbox_props = {
    value:
    /*option*/
    ctx[4],
    valueKey:
    /*option*/
    ctx[4].name
  };

  if (
  /*selected*/
  ctx[0] !== void 0) {
    checkbox_props.group =
    /*selected*/
    ctx[0];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selected*/
      1) {
        updating_group = true;
        checkbox_changes.group =
        /*selected*/
        ctx[0];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(60:14) <Cell checkbox>",
    ctx: ctx
  });
  return block;
} // (63:14) <Cell>


function create_default_slot_5(ctx) {
  var t_value =
  /*option*/
  ctx[4].name + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(63:14) <Cell>",
    ctx: ctx
  });
  return block;
} // (64:14) <Cell>


function create_default_slot_4(ctx) {
  var t_value =
  /*option*/
  ctx[4].description + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(64:14) <Cell>",
    ctx: ctx
  });
  return block;
} // (65:14) <Cell numeric>


function create_default_slot_3(ctx) {
  var t_value =
  /*option*/
  ctx[4].price + "";
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(65:14) <Cell numeric>",
    ctx: ctx
  });
  return block;
} // (59:12) <Row>


function create_default_slot_2(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var cell0 = new Cell({
    props: {
      checkbox: true,
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell1 = new Cell({
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
  var cell2 = new Cell({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var cell3 = new Cell({
    props: {
      numeric: true,
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
      create_component(cell0.$$.fragment);
      t0 = space();
      create_component(cell1.$$.fragment);
      t1 = space();
      create_component(cell2.$$.fragment);
      t2 = space();
      create_component(cell3.$$.fragment);
      t3 = space();
    },
    l: function claim(nodes) {
      claim_component(cell0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(cell1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(cell2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(cell3.$$.fragment, nodes);
      t3 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(cell0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(cell1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(cell2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(cell3, target, anchor);
      insert_dev(target, t3, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var cell0_changes = {};

      if (dirty[0] &
      /*$$scope, selected*/
      129) {
        cell0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell0.$set(cell0_changes);
      var cell1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell1.$set(cell1_changes);
      var cell2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell2.$set(cell2_changes);
      var cell3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        cell3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      cell3.$set(cell3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(cell0.$$.fragment, local);
      transition_in(cell1.$$.fragment, local);
      transition_in(cell2.$$.fragment, local);
      transition_in(cell3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cell0.$$.fragment, local);
      transition_out(cell1.$$.fragment, local);
      transition_out(cell2.$$.fragment, local);
      transition_out(cell3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cell0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(cell1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(cell2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(cell3, detaching);
      if (detaching) detach_dev(t3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(59:12) <Row>",
    ctx: ctx
  });
  return block;
} // (58:10) {#each options as option (option.name)}


function create_each_block(key_1, ctx) {
  var first;
  var current;
  var row = new Row({
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
    key: key_1,
    first: null,
    c: function create() {
      first = empty();
      create_component(row.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      claim_component(row.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      mount_component(row, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var row_changes = {};

      if (dirty[0] &
      /*$$scope, selected*/
      129) {
        row_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row.$set(row_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      destroy_component(row, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(58:10) {#each options as option (option.name)}",
    ctx: ctx
  });
  return block;
} // (57:8) <Body>


function create_default_slot_1(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var current;
  var each_value =
  /*options*/
  ctx[2];

  var get_key = function get_key(ctx) {
    return (
      /*option*/
      ctx[4].name
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
      /*options*/
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(57:8) <Body>",
    ctx: ctx
  });
  return block;
} // (46:6) <DataTable>


function create_default_slot(ctx) {
  var t;
  var current;
  var head = new Head({
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
  var body = new Body({
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
      create_component(head.$$.fragment);
      t = space();
      create_component(body.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(head.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(body.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(head, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(body, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var head_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        head_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      head.$set(head_changes);
      var body_changes = {};

      if (dirty[0] &
      /*$$scope, selected*/
      129) {
        body_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      body.$set(body_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(head.$$.fragment, local);
      transition_in(body.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(head.$$.fragment, local);
      transition_out(body.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(head, detaching);
      if (detaching) detach_dev(t);
      destroy_component(body, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(46:6) <DataTable>",
    ctx: ctx
  });
  return block;
}

function create_fragment$5(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var t3;
  var div2;
  var t4;
  var div1;
  var t5;
  var pre0;
  var t6;
  var t7_value =
  /*selected*/
  ctx[0].map(func).join(", ") + "";
  var t7;
  var t8;
  var pre1;
  var t9;
  var t10;
  var current;
  var datatable0 = new DataTable({
    props: {
      "table$aria-label": "People list",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var datatable1 = new DataTable({
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
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Data Table");
      t2 = space();
      div0 = element("div");
      create_component(datatable0.$$.fragment);
      t3 = space();
      div2 = element("div");
      t4 = text("With Row Selection:\n\n    ");
      div1 = element("div");
      create_component(datatable1.$$.fragment);
      t5 = space();
      pre0 = element("pre");
      t6 = text("Selected: ");
      t7 = text(t7_value);
      t8 = space();
      pre1 = element("pre");
      t9 = text("Total: ");
      t10 = text(
      /*selectedPrice*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Data Table");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(datatable0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, "With Row Selection:\n\n    ");
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(datatable1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t6 = claim_text(pre0_nodes, "Selected: ");
      t7 = claim_text(pre0_nodes, t7_value);
      pre0_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t9 = claim_text(pre1_nodes, "Total: ");
      t10 = claim_text(pre1_nodes,
      /*selectedPrice*/
      ctx[1]);
      pre1_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Data Table - SMUI";
      add_location(h2, file$5, 5, 2, 77);
      add_location(div0, file$5, 7, 2, 100);
      add_location(div1, file$5, 44, 4, 888);
      add_location(div2, file$5, 41, 2, 853);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$5, 72, 2, 1607);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$5, 73, 2, 1694);
      add_location(section, file$5, 4, 0, 65);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(datatable0, div0, null);
      append_dev(section, t3);
      append_dev(section, div2);
      append_dev(div2, t4);
      append_dev(div2, div1);
      mount_component(datatable1, div1, null);
      append_dev(section, t5);
      append_dev(section, pre0);
      append_dev(pre0, t6);
      append_dev(pre0, t7);
      append_dev(section, t8);
      append_dev(section, pre1);
      append_dev(pre1, t9);
      append_dev(pre1, t10);
      current = true;
    },
    p: function update(ctx, dirty) {
      var datatable0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      128) {
        datatable0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      datatable0.$set(datatable0_changes);
      var datatable1_changes = {};

      if (dirty[0] &
      /*$$scope, selected*/
      129) {
        datatable1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      datatable1.$set(datatable1_changes);
      if ((!current || dirty[0] &
      /*selected*/
      1) && t7_value !== (t7_value =
      /*selected*/
      ctx[0].map(func).join(", ") + "")) set_data_dev(t7, t7_value);
      if (!current || dirty[0] &
      /*selectedPrice*/
      2) set_data_dev(t10,
      /*selectedPrice*/
      ctx[1]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(datatable0.$$.fragment, local);
      transition_in(datatable1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(datatable0.$$.fragment, local);
      transition_out(datatable1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(datatable0);
      destroy_component(datatable1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var func = function func(option) {
  return option.name;
};

function instance$5($$self, $$props, $$invalidate) {
  var options = [{
    name: "Broom",
    description: "A wooden handled broom.",
    price: 15
  }, {
    name: "Dust Pan",
    description: "A plastic dust pan.",
    price: 8
  }, {
    name: "Mop",
    description: "A strong, durable mop.",
    price: 18
  }, {
    name: "Bucket",
    description: "A metal bucket.",
    price: 13
  }];
  var selected = [options[2]];

  function checkbox_group_binding(value) {
    selected = value;
    $$invalidate(0, selected);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("options" in $$props) $$invalidate(2, options = $$props.options);
    if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
    if ("selectedPrice" in $$props) $$invalidate(1, selectedPrice = $$props.selectedPrice);
  };

  var selectedPrice;

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*selected*/
    1) {
       $$invalidate(1, selectedPrice = selected.reduce(function (total, option) {
        return option.price + total;
      }, 0));
    }
  };

  return [selected, selectedPrice, options, checkbox_group_binding];
}

var Data_table =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Data_table, _SvelteComponentDev);

  function Data_table(options) {
    var _this;

    _classCallCheck$1(this, Data_table);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Data_table).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Data_table",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  return Data_table;
}(SvelteComponentDev);

export default Data_table;
