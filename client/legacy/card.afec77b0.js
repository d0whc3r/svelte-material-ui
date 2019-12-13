import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, b as current_component, a2 as setContext, v as _inherits$1, w as _classCallCheck$1, x as _possibleConstructorReturn$1, y as _getPrototypeOf$1, z as _assertThisInitialized$1, P as append_dev, M as space, W as text, I as create_component, N as claim_space, X as claim_text, J as claim_component, O as attr_dev, Z as set_style, K as mount_component, $ as set_data_dev, L as destroy_component, ac as _toConsumableArray, D as empty, R as group_outros, T as check_outros, aa as destroy_each, n as noop } from './index.0812fa32.js';
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
import '@babel/runtime/helpers/esm/construct';
import { c as classAdderBuilder, D as Div } from './Div.d97c12da.js';
import './Span.f3477293.js';
import { B as Button } from './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import { R as Ripple } from './bare.3f24c973.js';
import './Button.238fe4ea.js';
import { L as Label } from './Label.cdd98476.js';
import { I as Icon } from './Icon.e7ebcf54.js';
import { I as IconButton } from './index.15f8a983.js';
import { L as List, T as Text } from './index.ec2d92bf.js';
import '@babel/runtime/regenerator';
import { I as Item } from './Item.02b48338.js';

var css = ".mdc-card{border-radius:4px;background-color:#fff;background-color:var(--mdc-theme-surface,#fff);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);border:1px solid #e0e0e0}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:50%;background-size:cover}.mdc-card__media:before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square:before{margin-top:100%}.mdc-card__media--16-9:before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0,0,0,.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl],[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}.mdc-card__action--button[dir=rtl],[dir=rtl] .mdc-card__action--button{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl],[dir=rtl] .mdc-card__action--button:last-child{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl],[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0,0,0,.6)}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-card__primary-action{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-card__primary-action:after,.mdc-card__primary-action:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-card__primary-action:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-card__primary-action.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-card__primary-action:after,.mdc-card__primary-action:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-card__primary-action:after,.mdc-card__primary-action:before{background-color:#000}.mdc-card__primary-action:hover:before{opacity:.04}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused:before,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-card__primary-action:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-button--dense{height:32px;font-size:.8125rem}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:after,.mdc-button:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button--color-secondary:not(:disabled){color:#676778;color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#676778;border-color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button--on .mdc-icon-button__icon,.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button:after,.mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button:after,.mdc-icon-button:before{top:0;left:0;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded:after,.mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button:after,.mdc-icon-button:before{background-color:#000}.mdc-icon-button:hover:before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-card--padded,.smui-card__content,.smui-card__primary-action--padded{padding:16px}";
styleInject(css);

var file = "home/hperrin/repos/svelte-material-ui/packages/card/Card.svelte";

function create_fragment(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[7].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
  var div_levels = [{
    class: "\n    mdc-card\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*variant*/
    ctx[2] === "outlined" ? "mdc-card--outlined" : "") + "\n    " + (
    /*padded*/
    ctx[3] ? "smui-card--padded" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[5], ["use", "class", "variant", "padded"])];
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
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      64) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[6], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[6], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, variant, padded*/
      14 && {
        class: "\n    mdc-card\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*variant*/
        ctx[2] === "outlined" ? "mdc-card--outlined" : "") + "\n    " + (
        /*padded*/
        ctx[3] ? "smui-card--padded" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      32 && exclude(
      /*$$props*/
      ctx[5], ["use", "class", "variant", "padded"])]));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
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
      _$$props3$variant = _$$props3.variant,
      variant = _$$props3$variant === void 0 ? "raised" : _$$props3$variant;
  var _$$props4 = $$props,
      _$$props4$padded = _$$props4.padded,
      padded = _$$props4$padded === void 0 ? false : _$$props4$padded;
  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    if ("padded" in $$new_props) $$invalidate(3, padded = $$new_props.padded);
    if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      variant: variant,
      padded: padded
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
    if ("padded" in $$props) $$invalidate(3, padded = $$new_props.padded);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, variant, padded, forwardEvents, $$props, $$scope, $$slots];
}

var Card =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Card, _SvelteComponentDev);

  function Card(options) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      variant: 2,
      padded: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Card",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Card, [{
    key: "use",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "padded",
    get: function get() {
      throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Card;
}(SvelteComponentDev);

var Content = classAdderBuilder({
  class: 'smui-card__content',
  component: Div,
  contexts: {}
});

var file$1 = "home/hperrin/repos/svelte-material-ui/packages/card/PrimaryAction.svelte";

function create_fragment$1(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var Ripple_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[9].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[8], null);
  var div_levels = [{
    class: "\n    mdc-card__primary-action\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*padded*/
    ctx[4] ? "smui-card__primary-action--padded" : "") + "\n  "
  }, {
    tabindex:
    /*tabindex*/
    ctx[5]
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "ripple", "color", "padded", "tabindex"])];
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
        class: true,
        tabindex: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[6].call(null, div) || {};
      Ripple_action = Ripple.call(null, div, [
      /*ripple*/
      ctx[2], {
        unbounded: false,
        color:
        /*color*/
        ctx[3]
      }]) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      256) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[8], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[8], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, padded*/
      18 && {
        class: "\n    mdc-card__primary-action\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*padded*/
        ctx[4] ? "smui-card__primary-action--padded" : "") + "\n  "
      }, dirty[0] &
      /*tabindex*/
      32 && {
        tabindex:
        /*tabindex*/
        ctx[5]
      }, dirty[0] &
      /*$$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "ripple", "color", "padded", "tabindex"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
      if (is_function(Ripple_action.update) && dirty[0] &
      /*ripple, color*/
      12) Ripple_action.update.call(null, [
      /*ripple*/
      ctx[2], {
        unbounded: false,
        color:
        /*color*/
        ctx[3]
      }]);
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
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
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
      _$$props3$ripple = _$$props3.ripple,
      ripple = _$$props3$ripple === void 0 ? true : _$$props3$ripple;
  var _$$props4 = $$props,
      _$$props4$color = _$$props4.color,
      color = _$$props4$color === void 0 ? null : _$$props4$color;
  var _$$props5 = $$props,
      _$$props5$padded = _$$props5.padded,
      padded = _$$props5$padded === void 0 ? false : _$$props5$padded;
  var _$$props6 = $$props,
      _$$props6$tabindex = _$$props6.tabindex,
      tabindex = _$$props6$tabindex === void 0 ? "0" : _$$props6$tabindex;
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("padded" in $$new_props) $$invalidate(4, padded = $$new_props.padded);
    if ("tabindex" in $$new_props) $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      padded: padded,
      tabindex: tabindex
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("padded" in $$props) $$invalidate(4, padded = $$new_props.padded);
    if ("tabindex" in $$props) $$invalidate(5, tabindex = $$new_props.tabindex);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, ripple, color, padded, tabindex, forwardEvents, $$props, $$scope, $$slots];
}

var PrimaryAction =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(PrimaryAction, _SvelteComponentDev);

  function PrimaryAction(options) {
    var _this;

    _classCallCheck(this, PrimaryAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrimaryAction).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0,
      class: 1,
      ripple: 2,
      color: 3,
      padded: 4,
      tabindex: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PrimaryAction",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(PrimaryAction, [{
    key: "use",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "padded",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PrimaryAction;
}(SvelteComponentDev);

var file$2 = "home/hperrin/repos/svelte-material-ui/packages/card/Media.svelte";

function create_fragment$2(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var div_levels = [{
    class: "\n    mdc-card__media\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*aspectRatio*/
    ctx[2] === "square" ? "mdc-card__media--square" : "") + "\n    " + (
    /*aspectRatio*/
    ctx[2] === "16x9" ? "mdc-card__media--16-9" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[4], ["use", "class", "aspectRatio"])];
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
      add_location(div, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[3].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      32) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[5], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[5], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, aspectRatio*/
      6 && {
        class: "\n    mdc-card__media\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*aspectRatio*/
        ctx[2] === "square" ? "mdc-card__media--square" : "") + "\n    " + (
        /*aspectRatio*/
        ctx[2] === "16x9" ? "mdc-card__media--16-9" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "class", "aspectRatio"])]));
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
      if (detaching) detach_dev(div);
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
  var _$$props3 = $$props,
      _$$props3$aspectRatio = _$$props3.aspectRatio,
      aspectRatio = _$$props3$aspectRatio === void 0 ? null : _$$props3$aspectRatio;
  var _$$props4 = $$props,
      _$$props4$$$slots = _$$props4.$$slots,
      $$slots = _$$props4$$$slots === void 0 ? {} : _$$props4$$$slots,
      $$scope = _$$props4.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("aspectRatio" in $$new_props) $$invalidate(2, aspectRatio = $$new_props.aspectRatio);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      aspectRatio: aspectRatio
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("aspectRatio" in $$props) $$invalidate(2, aspectRatio = $$new_props.aspectRatio);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, aspectRatio, forwardEvents, $$props, $$scope, $$slots];
}

var Media =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Media, _SvelteComponentDev);

  function Media(options) {
    var _this;

    _classCallCheck(this, Media);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Media).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      class: 1,
      aspectRatio: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Media",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Media, [{
    key: "use",
    get: function get() {
      throw new Error("<Media>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Media>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "aspectRatio",
    get: function get() {
      throw new Error("<Media>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Media;
}(SvelteComponentDev);

var MediaContent = classAdderBuilder({
  class: 'mdc-card__media-content',
  component: Div,
  contexts: {}
});

var file$3 = "home/hperrin/repos/svelte-material-ui/packages/card/Actions.svelte";

function create_fragment$3(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var div_levels = [{
    class: "\n    mdc-card__actions\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*fullBleed*/
    ctx[2] ? "mdc-card__actions--full-bleed" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[4], ["use", "class", "fullBleed"])];
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
      add_location(div, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[3].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      32) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[5], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[5], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*className, fullBleed*/
      6 && {
        class: "\n    mdc-card__actions\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*fullBleed*/
        ctx[2] ? "mdc-card__actions--full-bleed" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "class", "fullBleed"])]));
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
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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
  var _$$props3 = $$props,
      _$$props3$fullBleed = _$$props3.fullBleed,
      fullBleed = _$$props3$fullBleed === void 0 ? false : _$$props3$fullBleed;
  setContext("SMUI:button:context", "card:action");
  setContext("SMUI:icon-button:context", "card:action");
  var _$$props4 = $$props,
      _$$props4$$$slots = _$$props4.$$slots,
      $$slots = _$$props4$$$slots === void 0 ? {} : _$$props4$$$slots,
      $$scope = _$$props4.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("fullBleed" in $$new_props) $$invalidate(2, fullBleed = $$new_props.fullBleed);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      fullBleed: fullBleed
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("fullBleed" in $$props) $$invalidate(2, fullBleed = $$new_props.fullBleed);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, fullBleed, forwardEvents, $$props, $$scope, $$slots];
}

var Actions =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Actions, _SvelteComponentDev);

  function Actions(options) {
    var _this;

    _classCallCheck(this, Actions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Actions).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1,
      fullBleed: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Actions",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Actions, [{
    key: "use",
    get: function get() {
      throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "fullBleed",
    get: function get() {
      throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Actions;
}(SvelteComponentDev);

var ActionButtons = classAdderBuilder({
  class: 'mdc-card__action-buttons',
  component: Div,
  contexts: {}
});

var ActionIcons = classAdderBuilder({
  class: 'mdc-card__action-icons',
  component: Div,
  contexts: {}
});

var file$4 = "src/routes/demo/card.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-6pehas-style";
  style.textContent = ".card-container.svelte-6pehas{display:inline-flex;justify-content:center;align-items:center;min-height:500px;min-width:380px;background-color:#f8f8f8;margin-right:20px;margin-bottom:20px}.card-container.short.svelte-6pehas{min-height:200px}.svelte-6pehas .card-media-16x9{background-image:url(https://via.placeholder.com/320x180.png?text=16x9)}.svelte-6pehas .card-media-square{background-image:url(https://via.placeholder.com/320x320.png?text=square)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zdmVsdGUiLCJzb3VyY2VzIjpbImNhcmQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkNhcmRzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkNhcmRzPC9oMj5cblxuICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lciBzaG9ydFwiPlxuICAgICAgPENhcmQgc3R5bGU9XCJ3aWR0aDogMjUwcHg7XCIgcGFkZGVkPkEgc2ltcGxlIHBhZGRlZCBjYXJkLjwvQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lciBzaG9ydFwiPlxuICAgICAgPENhcmQgc3R5bGU9XCJ3aWR0aDogMjUwcHg7XCI+PENvbnRlbnQ+WW91IGNhbiBhbHNvIHVzZSA8Y29kZT5Db250ZW50PC9jb2RlPi48L0NvbnRlbnQ+PC9DYXJkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyIHNob3J0XCI+XG4gICAgICA8Q2FyZCBzdHlsZT1cIndpZHRoOiAyNTBweDtcIiB2YXJpYW50PVwib3V0bGluZWRcIiBwYWRkZWQ+QW4gb3V0bGluZWQsIHBhZGRlZCBjYXJkLjwvQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lciBzaG9ydFwiPlxuICAgICAgPENhcmQgc3R5bGU9XCJ3aWR0aDogMjUwcHg7XCI+XG4gICAgICAgIDxQcmltYXJ5QWN0aW9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHBhZGRlZD5QcmltYXJ5IEFjdGlvbjwvUHJpbWFyeUFjdGlvbj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lciBzaG9ydFwiPlxuICAgICAgPENhcmQgc3R5bGU9XCJ3aWR0aDogMzIwcHg7XCI+XG4gICAgICAgIDxDb250ZW50PkEgY2FyZCB3aXRoIGFjdGlvbnMuPC9Db250ZW50PlxuICAgICAgICA8QWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgPExhYmVsPkFjdGlvbjwvTGFiZWw+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICAgIDxMYWJlbD5Bbm90aGVyPC9MYWJlbD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9BY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyIHNob3J0XCI+XG4gICAgICA8Q2FyZCBzdHlsZT1cIndpZHRoOiAzMjBweDtcIj5cbiAgICAgICAgPENvbnRlbnQ+QSBjYXJkIHdpdGggYSBmdWxsLWJsZWVkIGFjdGlvbi48L0NvbnRlbnQ+XG4gICAgICAgIDxBY3Rpb25zIGZ1bGxCbGVlZD5cbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgPExhYmVsPkFjdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+YXJyb3dfZm9yd2FyZDwvaT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9BY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyIHNob3J0XCI+XG4gICAgICA8Q2FyZCBzdHlsZT1cIndpZHRoOiAzMjBweDtcIj5cbiAgICAgICAgPENvbnRlbnQ+QSBjYXJkIHdpdGggYWN0aW9uIGljb25zLjwvQ29udGVudD5cbiAgICAgICAgPEFjdGlvbnM+XG4gICAgICAgICAgPEljb25CdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdG9nZ2xlIGFyaWEtbGFiZWw9XCJBZGQgdG8gZmF2b3JpdGVzXCIgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb24+ZmF2b3JpdGU8L0ljb24+XG4gICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGVfYm9yZGVyPC9JY29uPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdGl0bGU9XCJTaGFyZVwiPnNoYXJlPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB0aXRsZT1cIk1vcmUgb3B0aW9uc1wiPm1vcmVfdmVydDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9BY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyIHNob3J0XCI+XG4gICAgICA8Q2FyZCBzdHlsZT1cIndpZHRoOiAzNjBweDtcIj5cbiAgICAgICAgPENvbnRlbnQ+QSBjYXJkIHdpdGggQm90aC48L0NvbnRlbnQ+XG4gICAgICAgIDxBY3Rpb25zPlxuICAgICAgICAgIDxBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICAgICAgPExhYmVsPkFjdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgICAgICAgIDxMYWJlbD5Bbm90aGVyPC9MYWJlbD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICA8QWN0aW9uSWNvbnM+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB0b2dnbGUgYXJpYS1sYWJlbD1cIkFkZCB0byBmYXZvcml0ZXNcIiB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIG9uPmZhdm9yaXRlPC9JY29uPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGVfYm9yZGVyPC9JY29uPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHRpdGxlPVwiU2hhcmVcIj5zaGFyZTwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB0aXRsZT1cIk1vcmUgb3B0aW9uc1wiPm1vcmVfdmVydDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvbkljb25zPlxuICAgICAgICA8L0FjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxDYXJkIHN0eWxlPVwid2lkdGg6IDMyMHB4O1wiPlxuICAgICAgICA8TWVkaWEgY2xhc3M9XCJjYXJkLW1lZGlhLTE2eDlcIiBhc3BlY3RSYXRpbz1cIjE2eDlcIj5cbiAgICAgICAgICA8TWVkaWFDb250ZW50PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwiY29sb3I6ICNmZmY7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNnB4OyBsZWZ0OiAxNnB4OyBtYXJnaW46IDA7XCI+QSBjYXJkIHdpdGggMTZ4OSBtZWRpYS48L2gyPlxuICAgICAgICAgIDwvTWVkaWFDb250ZW50PlxuICAgICAgICA8L01lZGlhPlxuICAgICAgICA8Q29udGVudCBzdHlsZT1cImNvbG9yOiAjODg4O1wiPlxuICAgICAgICAgIEhlcmUncyBzb21lIGdyYXkgdGV4dCBkb3duIGhlcmUuXG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgICAgPENhcmQgc3R5bGU9XCJ3aWR0aDogMzIwcHg7XCI+XG4gICAgICAgIDxNZWRpYSBjbGFzcz1cImNhcmQtbWVkaWEtc3F1YXJlXCIgYXNwZWN0UmF0aW89XCJzcXVhcmVcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6ICNmZmY7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNnB4OyBsZWZ0OiAxNnB4O1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPkEgY2FyZCB3aXRoIHNxdWFyZSBtZWRpYS48L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLXN1YnRpdGxlMlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPkFuZCBhIHN1YnRpdGxlLjwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWVkaWE+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxDYXJkIHN0eWxlPVwid2lkdGg6IDMyMHB4O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMXJlbTtcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0taGVhZGxpbmU2XCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+QSBjYXJkIHdpdGggbWVkaWEuPC9oMj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0tc3VidGl0bGUyXCIgc3R5bGU9XCJtYXJnaW46IDA7IGNvbG9yOiAjODg4O1wiPkFuZCBhIHN1YnRpdGxlLjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UHJpbWFyeUFjdGlvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICA8TWVkaWEgY2xhc3M9XCJjYXJkLW1lZGlhLTE2eDlcIiBhc3BlY3RSYXRpbz1cIjE2eDlcIj48L01lZGlhPlxuICAgICAgICAgIDxDb250ZW50IGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWJvZHkyXCI+XG4gICAgICAgICAgICBBbmQgc29tZSBpbmZvIHRleHQuIEFuZCBpdCdzIGEgcHJpbWFyeSBhY3Rpb24gZm9yIHRoZSBjYXJkLlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9QcmltYXJ5QWN0aW9uPlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDMyMHB4O1wiPlxuICAgICAgICAgIEEgY2FyZCB3aXRoIGEgbGlzdCBhcyBjb250ZW50OlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmQgc3R5bGU9XCJ3aWR0aDogMzIwcHg7XCI+XG4gICAgICAgICAgPENvbnRlbnQgY29tcG9uZW50PXtMaXN0fT5cbiAgICAgICAgICAgIHsjZWFjaCBbLi4uQXJyYXkoNildLm1hcCgodiwgaSkgPT4gaSArIDEpIGFzIGl0ZW19XG4gICAgICAgICAgICAgIDxJdGVtIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgICAgIDxUZXh0Pkl0ZW0gI3tpdGVtfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxDYXJkIHN0eWxlPVwid2lkdGg6IDM2MHB4O1wiPlxuICAgICAgICA8UHJpbWFyeUFjdGlvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICA8TWVkaWEgY2xhc3M9XCJjYXJkLW1lZGlhLTE2eDlcIiBhc3BlY3RSYXRpbz1cIjE2eDlcIj5cbiAgICAgICAgICAgIDxNZWRpYUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogI2ZmZjsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE2cHg7IGxlZnQ6IDE2cHg7XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPkEgY2FyZCB3aXRoIG1lZGlhLjwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLXN1YnRpdGxlMlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPkFuZCBhIHN1YnRpdGxlLjwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9NZWRpYUNvbnRlbnQ+XG4gICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICA8Q29udGVudCBjbGFzcz1cIm1kYy10eXBvZ3JhcGh5LS1ib2R5MlwiPlxuICAgICAgICAgICAgSXQncyBhbGwgaW4gdGhpcyBjYXJkLiBJdCdzIGEgdmVyaXRhYmxlIHNtb3JnYXNib3JkIG9mIGNhcmQgZmVhdHVyZXMuXG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L1ByaW1hcnlBY3Rpb24+XG4gICAgICAgIDxBY3Rpb25zPlxuICAgICAgICAgIDxBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICAgICAgPExhYmVsPkFjdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgICAgICAgIDxMYWJlbD5Bbm90aGVyPC9MYWJlbD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICA8QWN0aW9uSWNvbnM+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB0b2dnbGUgYXJpYS1sYWJlbD1cIkFkZCB0byBmYXZvcml0ZXNcIiB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIG9uPmZhdm9yaXRlPC9JY29uPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGVfYm9yZGVyPC9JY29uPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHRpdGxlPVwiU2hhcmVcIj5zaGFyZTwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB0aXRsZT1cIk1vcmUgb3B0aW9uc1wiPm1vcmVfdmVydDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvbkljb25zPlxuICAgICAgICA8L0FjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxDYXJkIHN0eWxlPVwid2lkdGg6IDM2MHB4O1wiPlxuICAgICAgICA8UHJpbWFyeUFjdGlvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICA8TWVkaWEgY2xhc3M9XCJjYXJkLW1lZGlhLTE2eDlcIiBhc3BlY3RSYXRpbz1cIjE2eDlcIj48L01lZGlhPlxuICAgICAgICAgIDxDb250ZW50IGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWJvZHkyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0taGVhZGxpbmU2XCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+QSBjYXJkIHdpdGggbWVkaWEuPC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1kYy10eXBvZ3JhcGh5LS1zdWJ0aXRsZTJcIiBzdHlsZT1cIm1hcmdpbjogMCAwIDEwcHg7IGNvbG9yOiAjODg4O1wiPkFuZCBhIHN1YnRpdGxlLjwvaDM+XG4gICAgICAgICAgICBJdCdzIGFsbCBpbiB0aGlzIGNhcmQuIEl0J3MgYSB2ZXJpdGFibGUgc21vcmdhc2JvcmQgb2YgY2FyZCBmZWF0dXJlcy5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvUHJpbWFyeUFjdGlvbj5cbiAgICAgICAgPEFjdGlvbnM+XG4gICAgICAgICAgPEFjdGlvbkJ1dHRvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgICA8TGFiZWw+QWN0aW9uPC9MYWJlbD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICAgICAgPExhYmVsPkFub3RoZXI8L0xhYmVsPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9BY3Rpb25CdXR0b25zPlxuICAgICAgICAgIDxBY3Rpb25JY29ucz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHRvZ2dsZSBhcmlhLWxhYmVsPVwiQWRkIHRvIGZhdm9yaXRlc1wiIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb24+ZmF2b3JpdGU8L0ljb24+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZV9ib3JkZXI8L0ljb24+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdGl0bGU9XCJTaGFyZVwiPnNoYXJlPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHRpdGxlPVwiTW9yZSBvcHRpb25zXCI+bW9yZV92ZXJ0PC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvQWN0aW9uSWNvbnM+XG4gICAgICAgIDwvQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkfTwvcHJlPlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2FyZCwge0NvbnRlbnQsIFByaW1hcnlBY3Rpb24sIE1lZGlhLCBNZWRpYUNvbnRlbnQsIEFjdGlvbnMsIEFjdGlvbkJ1dHRvbnMsIEFjdGlvbkljb25zfSBmcm9tICdAc211aS9jYXJkJztcbiAgaW1wb3J0IEJ1dHRvbiwge0xhYmVsfSBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiwge0ljb259IGZyb20gJ0BzbXVpL2ljb24tYnV0dG9uJztcbiAgaW1wb3J0IExpc3QsIHtJdGVtLCBUZXh0fSBmcm9tICdAc211aS9saXN0JztcblxuICBsZXQgY2xpY2tlZCA9IDA7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWluLXdpZHRoOiAzODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5jYXJkLWNvbnRhaW5lci5zaG9ydCB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gIH1cblxuICAqIDpnbG9iYWwoLmNhcmQtbWVkaWEtMTZ4OSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzIweDE4MC5wbmc/dGV4dD0xNng5KTtcbiAgfVxuXG4gICogOmdsb2JhbCguY2FyZC1tZWRpYS1zcXVhcmUpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMyMHgzMjAucG5nP3RleHQ9c3F1YXJlKTtcbiAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbU9FLGVBQWUsY0FBQyxDQUFDLEFBQ2YsT0FBTyxDQUFFLFdBQVcsQ0FDcEIsZUFBZSxDQUFFLE1BQU0sQ0FDdkIsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsVUFBVSxDQUFFLEtBQUssQ0FDakIsU0FBUyxDQUFFLEtBQUssQ0FDaEIsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixZQUFZLENBQUUsSUFBSSxDQUNsQixhQUFhLENBQUUsSUFBSSxBQUNyQixDQUFDLEFBQ0QsZUFBZSxNQUFNLGNBQUMsQ0FBQyxBQUNyQixVQUFVLENBQUUsS0FBSyxBQUNuQixDQUFDLEFBRUQsY0FBQyxDQUFDLEFBQVEsZ0JBQWdCLEFBQUUsQ0FBQyxBQUMzQixnQkFBZ0IsQ0FBRSxJQUFJLGlEQUFpRCxDQUFDLEFBQzFFLENBQUMsQUFFRCxjQUFDLENBQUMsQUFBUSxrQkFBa0IsQUFBRSxDQUFDLEFBQzdCLGdCQUFnQixDQUFFLElBQUksbURBQW1ELENBQUMsQUFDNUUsQ0FBQyJ9 */";
  append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  return child_ctx;
} // (10:6) <Card style="width: 250px;" padded>


function create_default_slot_84(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A simple padded card.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A simple padded card.");
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
    id: create_default_slot_84.name,
    type: "slot",
    source: "(10:6) <Card style=\\\"width: 250px;\\\" padded>",
    ctx: ctx
  });
  return block;
} // (14:34) <Content>


function create_default_slot_83(ctx) {
  var t0;
  var code;
  var t1;
  var t2;
  var block = {
    c: function create() {
      t0 = text("You can also use ");
      code = element("code");
      t1 = text("Content");
      t2 = text(".");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "You can also use ");
      code = claim_element(nodes, "CODE", {
        class: true
      });
      var code_nodes = children(code);
      t1 = claim_text(code_nodes, "Content");
      code_nodes.forEach(detach_dev);
      t2 = claim_text(nodes, ".");
      this.h();
    },
    h: function hydrate() {
      attr_dev(code, "class", "svelte-6pehas");
      add_location(code, file$4, 13, 60, 356);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, code, anchor);
      append_dev(code, t1);
      insert_dev(target, t2, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(code);
      if (detaching) detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(14:34) <Content>",
    ctx: ctx
  });
  return block;
} // (14:6) <Card style="width: 250px;">


function create_default_slot_82(ctx) {
  var current;
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_82.name,
    type: "slot",
    source: "(14:6) <Card style=\\\"width: 250px;\\\">",
    ctx: ctx
  });
  return block;
} // (18:6) <Card style="width: 250px;" variant="outlined" padded>


function create_default_slot_81(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("An outlined, padded card.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "An outlined, padded card.");
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
    id: create_default_slot_81.name,
    type: "slot",
    source: "(18:6) <Card style=\\\"width: 250px;\\\" variant=\\\"outlined\\\" padded>",
    ctx: ctx
  });
  return block;
} // (23:8) <PrimaryAction on:click={() => clicked++} padded>


function create_default_slot_80(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Primary Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Primary Action");
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
    id: create_default_slot_80.name,
    type: "slot",
    source: "(23:8) <PrimaryAction on:click={() => clicked++} padded>",
    ctx: ctx
  });
  return block;
} // (22:6) <Card style="width: 250px;">


function create_default_slot_79(ctx) {
  var current;
  var primaryaction = new PrimaryAction({
    props: {
      padded: true,
      $$slots: {
        default: [create_default_slot_80]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  primaryaction.$on("click",
  /*click_handler*/
  ctx[1]);
  var block = {
    c: function create() {
      create_component(primaryaction.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primaryaction.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primaryaction, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primaryaction_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        primaryaction_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primaryaction.$set(primaryaction_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primaryaction.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primaryaction.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primaryaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_79.name,
    type: "slot",
    source: "(22:6) <Card style=\\\"width: 250px;\\\">",
    ctx: ctx
  });
  return block;
} // (29:8) <Content>


function create_default_slot_78(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A card with actions.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A card with actions.");
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
    id: create_default_slot_78.name,
    type: "slot",
    source: "(29:8) <Content>",
    ctx: ctx
  });
  return block;
} // (32:12) <Label>


function create_default_slot_77(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    id: create_default_slot_77.name,
    type: "slot",
    source: "(32:12) <Label>",
    ctx: ctx
  });
  return block;
} // (31:10) <Button on:click={() => clicked++}>


function create_default_slot_76(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_77]
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
      1073741824) {
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
    id: create_default_slot_76.name,
    type: "slot",
    source: "(31:10) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (35:12) <Label>


function create_default_slot_75(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Another");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Another");
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
    id: create_default_slot_75.name,
    type: "slot",
    source: "(35:12) <Label>",
    ctx: ctx
  });
  return block;
} // (34:10) <Button on:click={() => clicked++}>


function create_default_slot_74(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_75]
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
      1073741824) {
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
    id: create_default_slot_74.name,
    type: "slot",
    source: "(34:10) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (30:8) <Actions>


function create_default_slot_73(ctx) {
  var t;
  var current;
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_76]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_1*/
  ctx[2]);
  var button1 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_74]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_2*/
  ctx[3]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(button1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_73.name,
    type: "slot",
    source: "(30:8) <Actions>",
    ctx: ctx
  });
  return block;
} // (28:6) <Card style="width: 320px;">


function create_default_slot_72(ctx) {
  var t;
  var current;
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_78]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_73]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
      var actions_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_72.name,
    type: "slot",
    source: "(28:6) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (43:8) <Content>


function create_default_slot_71(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A card with a full-bleed action.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A card with a full-bleed action.");
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
    id: create_default_slot_71.name,
    type: "slot",
    source: "(43:8) <Content>",
    ctx: ctx
  });
  return block;
} // (46:12) <Label>


function create_default_slot_70(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    id: create_default_slot_70.name,
    type: "slot",
    source: "(46:12) <Label>",
    ctx: ctx
  });
  return block;
} // (45:10) <Button on:click={() => clicked++}>


function create_default_slot_69(ctx) {
  var t0;
  var i;
  var t1;
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_70]
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
      t0 = space();
      i = element("i");
      t1 = text("arrow_forward");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t0 = claim_space(nodes);
      i = claim_element(nodes, "I", {
        class: true,
        "aria-hidden": true
      });
      var i_nodes = children(i);
      t1 = claim_text(i_nodes, "arrow_forward");
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "material-icons svelte-6pehas");
      attr_dev(i, "aria-hidden", "true");
      add_location(i, file$4, 46, 12, 1379);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, i, anchor);
      append_dev(i, t1);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(i);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_69.name,
    type: "slot",
    source: "(45:10) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (44:8) <Actions fullBleed>


function create_default_slot_68(ctx) {
  var current;
  var button = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click",
  /*click_handler_3*/
  ctx[4]);
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
    p: function update(ctx, dirty) {
      var button_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
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
    id: create_default_slot_68.name,
    type: "slot",
    source: "(44:8) <Actions fullBleed>",
    ctx: ctx
  });
  return block;
} // (42:6) <Card style="width: 320px;">


function create_default_slot_67(ctx) {
  var t;
  var current;
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_71]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      fullBleed: true,
      $$slots: {
        default: [create_default_slot_68]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
      var actions_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_67.name,
    type: "slot",
    source: "(42:6) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (55:8) <Content>


function create_default_slot_66(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A card with action icons.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A card with action icons.");
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
    id: create_default_slot_66.name,
    type: "slot",
    source: "(55:8) <Content>",
    ctx: ctx
  });
  return block;
} // (58:12) <Icon class="material-icons" on>


function create_default_slot_65(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_65.name,
    type: "slot",
    source: "(58:12) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (59:12) <Icon class="material-icons">


function create_default_slot_64(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite_border");
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
    id: create_default_slot_64.name,
    type: "slot",
    source: "(59:12) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (57:10) <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">


function create_default_slot_63(ctx) {
  var t;
  var current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_64]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon0.$$.fragment);
      t = space();
      create_component(icon1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(icon1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_63.name,
    type: "slot",
    source: "(57:10) <IconButton on:click={() => clicked++} toggle aria-label=\\\"Add to favorites\\\" title=\\\"Add to favorites\\\">",
    ctx: ctx
  });
  return block;
} // (61:10) <IconButton class="material-icons" on:click={() => clicked++} title="Share">


function create_default_slot_62(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("share");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "share");
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
    id: create_default_slot_62.name,
    type: "slot",
    source: "(61:10) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"Share\\\">",
    ctx: ctx
  });
  return block;
} // (62:10) <IconButton class="material-icons" on:click={() => clicked++} title="More options">


function create_default_slot_61(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("more_vert");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "more_vert");
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
    id: create_default_slot_61.name,
    type: "slot",
    source: "(62:10) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"More options\\\">",
    ctx: ctx
  });
  return block;
} // (56:8) <Actions>


function create_default_slot_60(ctx) {
  var t0;
  var t1;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      toggle: true,
      "aria-label": "Add to favorites",
      title: "Add to favorites",
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton0.$on("click",
  /*click_handler_4*/
  ctx[5]);
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      title: "Share",
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton1.$on("click",
  /*click_handler_5*/
  ctx[6]);
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      title: "More options",
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton2.$on("click",
  /*click_handler_6*/
  ctx[7]);
  var block = {
    c: function create() {
      create_component(iconbutton0.$$.fragment);
      t0 = space();
      create_component(iconbutton1.$$.fragment);
      t1 = space();
      create_component(iconbutton2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(iconbutton2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(iconbutton1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(iconbutton2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton2.$set(iconbutton2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(iconbutton1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(iconbutton2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_60.name,
    type: "slot",
    source: "(56:8) <Actions>",
    ctx: ctx
  });
  return block;
} // (54:6) <Card style="width: 320px;">


function create_default_slot_59(ctx) {
  var t;
  var current;
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_66]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
      var actions_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_59.name,
    type: "slot",
    source: "(54:6) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (69:8) <Content>


function create_default_slot_58(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A card with Both.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A card with Both.");
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
    id: create_default_slot_58.name,
    type: "slot",
    source: "(69:8) <Content>",
    ctx: ctx
  });
  return block;
} // (73:14) <Label>


function create_default_slot_57(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    id: create_default_slot_57.name,
    type: "slot",
    source: "(73:14) <Label>",
    ctx: ctx
  });
  return block;
} // (72:12) <Button on:click={() => clicked++}>


function create_default_slot_56(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_57]
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
      1073741824) {
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
    id: create_default_slot_56.name,
    type: "slot",
    source: "(72:12) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (76:14) <Label>


function create_default_slot_55(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Another");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Another");
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
    id: create_default_slot_55.name,
    type: "slot",
    source: "(76:14) <Label>",
    ctx: ctx
  });
  return block;
} // (75:12) <Button on:click={() => clicked++}>


function create_default_slot_54(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_55]
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
      1073741824) {
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
    id: create_default_slot_54.name,
    type: "slot",
    source: "(75:12) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (71:10) <ActionButtons>


function create_default_slot_53(ctx) {
  var t;
  var current;
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_7*/
  ctx[8]);
  var button1 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_8*/
  ctx[9]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(button1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_53.name,
    type: "slot",
    source: "(71:10) <ActionButtons>",
    ctx: ctx
  });
  return block;
} // (81:14) <Icon class="material-icons" on>


function create_default_slot_52(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_52.name,
    type: "slot",
    source: "(81:14) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (82:14) <Icon class="material-icons">


function create_default_slot_51(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite_border");
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
    id: create_default_slot_51.name,
    type: "slot",
    source: "(82:14) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (80:12) <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">


function create_default_slot_50(ctx) {
  var t;
  var current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon0.$$.fragment);
      t = space();
      create_component(icon1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(icon1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(80:12) <IconButton on:click={() => clicked++} toggle aria-label=\\\"Add to favorites\\\" title=\\\"Add to favorites\\\">",
    ctx: ctx
  });
  return block;
} // (84:12) <IconButton class="material-icons" on:click={() => clicked++} title="Share">


function create_default_slot_49(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("share");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "share");
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
    id: create_default_slot_49.name,
    type: "slot",
    source: "(84:12) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"Share\\\">",
    ctx: ctx
  });
  return block;
} // (85:12) <IconButton class="material-icons" on:click={() => clicked++} title="More options">


function create_default_slot_48(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("more_vert");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "more_vert");
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
    id: create_default_slot_48.name,
    type: "slot",
    source: "(85:12) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"More options\\\">",
    ctx: ctx
  });
  return block;
} // (79:10) <ActionIcons>


function create_default_slot_47(ctx) {
  var t0;
  var t1;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      toggle: true,
      "aria-label": "Add to favorites",
      title: "Add to favorites",
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton0.$on("click",
  /*click_handler_9*/
  ctx[10]);
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      title: "Share",
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton1.$on("click",
  /*click_handler_10*/
  ctx[11]);
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      title: "More options",
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton2.$on("click",
  /*click_handler_11*/
  ctx[12]);
  var block = {
    c: function create() {
      create_component(iconbutton0.$$.fragment);
      t0 = space();
      create_component(iconbutton1.$$.fragment);
      t1 = space();
      create_component(iconbutton2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(iconbutton2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(iconbutton1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(iconbutton2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton2.$set(iconbutton2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(iconbutton1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(iconbutton2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(79:10) <ActionIcons>",
    ctx: ctx
  });
  return block;
} // (70:8) <Actions>


function create_default_slot_46(ctx) {
  var t;
  var current;
  var actionbuttons = new ActionButtons({
    props: {
      $$slots: {
        default: [create_default_slot_53]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actionicons = new ActionIcons({
    props: {
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(actionbuttons.$$.fragment);
      t = space();
      create_component(actionicons.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(actionbuttons.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actionicons.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actionbuttons, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actionicons, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var actionbuttons_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actionbuttons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionbuttons.$set(actionbuttons_changes);
      var actionicons_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actionicons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionicons.$set(actionicons_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actionbuttons.$$.fragment, local);
      transition_in(actionicons.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actionbuttons.$$.fragment, local);
      transition_out(actionicons.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actionbuttons, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actionicons, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(70:8) <Actions>",
    ctx: ctx
  });
  return block;
} // (68:6) <Card style="width: 360px;">


function create_default_slot_45(ctx) {
  var t;
  var current;
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_46]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
      var actions_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_45.name,
    type: "slot",
    source: "(68:6) <Card style=\\\"width: 360px;\\\">",
    ctx: ctx
  });
  return block;
} // (94:10) <MediaContent>


function create_default_slot_44(ctx) {
  var h2;
  var t;
  var block = {
    c: function create() {
      h2 = element("h2");
      t = text("A card with 16x9 media.");
      this.h();
    },
    l: function claim(nodes) {
      h2 = claim_element(nodes, "H2", {
        class: true,
        style: true
      });
      var h2_nodes = children(h2);
      t = claim_text(h2_nodes, "A card with 16x9 media.");
      h2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "mdc-typography--headline6 svelte-6pehas");
      set_style(h2, "color", "#fff");
      set_style(h2, "position", "absolute");
      set_style(h2, "bottom", "16px");
      set_style(h2, "left", "16px");
      set_style(h2, "margin", "0");
      add_location(h2, file$4, 94, 12, 3332);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);
      append_dev(h2, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(h2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(94:10) <MediaContent>",
    ctx: ctx
  });
  return block;
} // (93:8) <Media class="card-media-16x9" aspectRatio="16x9">


function create_default_slot_43(ctx) {
  var current;
  var mediacontent = new MediaContent({
    props: {
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(mediacontent.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(mediacontent.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(mediacontent, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var mediacontent_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        mediacontent_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      mediacontent.$set(mediacontent_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(mediacontent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(mediacontent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(mediacontent, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_43.name,
    type: "slot",
    source: "(93:8) <Media class=\\\"card-media-16x9\\\" aspectRatio=\\\"16x9\\\">",
    ctx: ctx
  });
  return block;
} // (98:8) <Content style="color: #888;">


function create_default_slot_42(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Here's some gray text down here.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Here's some gray text down here.");
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
    id: create_default_slot_42.name,
    type: "slot",
    source: "(98:8) <Content style=\\\"color: #888;\\\">",
    ctx: ctx
  });
  return block;
} // (92:6) <Card style="width: 320px;">


function create_default_slot_41(ctx) {
  var t;
  var current;
  var media = new Media({
    props: {
      class: "card-media-16x9",
      aspectRatio: "16x9",
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      style: "color: #888;",
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(media.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(media.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(media, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var media_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        media_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      media.$set(media_changes);
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(media.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(media.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(media, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_41.name,
    type: "slot",
    source: "(92:6) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (106:8) <Media class="card-media-square" aspectRatio="square">


function create_default_slot_40(ctx) {
  var div;
  var h2;
  var t0;
  var t1;
  var h3;
  var t2;
  var block = {
    c: function create() {
      div = element("div");
      h2 = element("h2");
      t0 = text("A card with square media.");
      t1 = space();
      h3 = element("h3");
      t2 = text("And a subtitle.");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        style: true,
        class: true
      });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {
        class: true,
        style: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "A card with square media.");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      h3 = claim_element(div_nodes, "H3", {
        class: true,
        style: true
      });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, "And a subtitle.");
      h3_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "mdc-typography--headline6 svelte-6pehas");
      set_style(h2, "margin", "0");
      add_location(h2, file$4, 107, 12, 3873);
      attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-6pehas");
      set_style(h3, "margin", "0");
      add_location(h3, file$4, 108, 12, 3973);
      set_style(div, "color", "#fff");
      set_style(div, "position", "absolute");
      set_style(div, "bottom", "16px");
      set_style(div, "left", "16px");
      attr_dev(div, "class", "svelte-6pehas");
      add_location(div, file$4, 106, 10, 3788);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h2);
      append_dev(h2, t0);
      append_dev(div, t1);
      append_dev(div, h3);
      append_dev(h3, t2);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(106:8) <Media class=\\\"card-media-square\\\" aspectRatio=\\\"square\\\">",
    ctx: ctx
  });
  return block;
} // (105:6) <Card style="width: 320px;">


function create_default_slot_39(ctx) {
  var current;
  var media = new Media({
    props: {
      class: "card-media-square",
      aspectRatio: "square",
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(media.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(media.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(media, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var media_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        media_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      media.$set(media_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(media.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(media.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(media, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_39.name,
    type: "slot",
    source: "(105:6) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (123:10) <Content class="mdc-typography--body2">


function create_default_slot_38(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("And some info text. And it's a primary action for the card.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "And some info text. And it's a primary action for the card.");
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
    id: create_default_slot_38.name,
    type: "slot",
    source: "(123:10) <Content class=\\\"mdc-typography--body2\\\">",
    ctx: ctx
  });
  return block;
} // (121:8) <PrimaryAction on:click={() => clicked++}>


function create_default_slot_37(ctx) {
  var t;
  var current;
  var media = new Media({
    props: {
      class: "card-media-16x9",
      aspectRatio: "16x9"
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      class: "mdc-typography--body2",
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(media.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(media.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(media, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(media.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(media.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(media, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(121:8) <PrimaryAction on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (116:6) <Card style="width: 320px;">


function create_default_slot_36(ctx) {
  var div;
  var h2;
  var t0;
  var t1;
  var h3;
  var t2;
  var t3;
  var current;
  var primaryaction = new PrimaryAction({
    props: {
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  primaryaction.$on("click",
  /*click_handler_12*/
  ctx[13]);
  var block = {
    c: function create() {
      div = element("div");
      h2 = element("h2");
      t0 = text("A card with media.");
      t1 = space();
      h3 = element("h3");
      t2 = text("And a subtitle.");
      t3 = space();
      create_component(primaryaction.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        style: true,
        class: true
      });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {
        class: true,
        style: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "A card with media.");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      h3 = claim_element(div_nodes, "H3", {
        class: true,
        style: true
      });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, "And a subtitle.");
      h3_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      claim_component(primaryaction.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "mdc-typography--headline6 svelte-6pehas");
      set_style(h2, "margin", "0");
      add_location(h2, file$4, 117, 10, 4226);
      attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-6pehas");
      set_style(h3, "margin", "0");
      set_style(h3, "color", "#888");
      add_location(h3, file$4, 118, 10, 4317);
      set_style(div, "padding", "1rem");
      attr_dev(div, "class", "svelte-6pehas");
      add_location(div, file$4, 116, 8, 4187);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h2);
      append_dev(h2, t0);
      append_dev(div, t1);
      append_dev(div, h3);
      append_dev(h3, t2);
      insert_dev(target, t3, anchor);
      mount_component(primaryaction, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primaryaction_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        primaryaction_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primaryaction.$set(primaryaction_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primaryaction.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primaryaction.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (detaching) detach_dev(t3);
      destroy_component(primaryaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(116:6) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (139:16) <Text>


function create_default_slot_35(ctx) {
  var t0;
  var t1_value =
  /*item*/
  ctx[27] + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text("Item #");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Item #");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(139:16) <Text>",
    ctx: ctx
  });
  return block;
} // (138:14) <Item on:click={() => clicked++}>


function create_default_slot_34(ctx) {
  var t;
  var current;
  var text_1 = new Text({
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
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(138:14) <Item on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (137:12) {#each [...Array(6)].map((v, i) => i + 1) as item}


function create_each_block(ctx) {
  var current;
  var item = new Item({
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
  item.$on("click",
  /*click_handler_13*/
  ctx[14]);
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(137:12) {#each [...Array(6)].map((v, i) => i + 1) as item}",
    ctx: ctx
  });
  return block;
} // (136:10) <Content component={List}>


function create_default_slot_33(ctx) {
  var each_1_anchor;
  var current;

  var each_value = _toConsumableArray(Array(6)).map(func);

  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

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
      if (dirty[0] &
      /*clicked*/
      1) {
        each_value = _toConsumableArray(Array(6)).map(func);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(136:10) <Content component={List}>",
    ctx: ctx
  });
  return block;
} // (135:8) <Card style="width: 320px;">


function create_default_slot_32(ctx) {
  var current;
  var content = new Content({
    props: {
      component: List,
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
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(135:8) <Card style=\\\"width: 320px;\\\">",
    ctx: ctx
  });
  return block;
} // (151:12) <MediaContent>


function create_default_slot_31(ctx) {
  var div;
  var h2;
  var t0;
  var t1;
  var h3;
  var t2;
  var block = {
    c: function create() {
      div = element("div");
      h2 = element("h2");
      t0 = text("A card with media.");
      t1 = space();
      h3 = element("h3");
      t2 = text("And a subtitle.");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        style: true,
        class: true
      });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {
        class: true,
        style: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "A card with media.");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      h3 = claim_element(div_nodes, "H3", {
        class: true,
        style: true
      });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, "And a subtitle.");
      h3_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "mdc-typography--headline6 svelte-6pehas");
      set_style(h2, "margin", "0");
      add_location(h2, file$4, 152, 16, 5515);
      attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-6pehas");
      set_style(h3, "margin", "0");
      add_location(h3, file$4, 153, 16, 5612);
      set_style(div, "color", "#fff");
      set_style(div, "position", "absolute");
      set_style(div, "bottom", "16px");
      set_style(div, "left", "16px");
      attr_dev(div, "class", "svelte-6pehas");
      add_location(div, file$4, 151, 14, 5426);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h2);
      append_dev(h2, t0);
      append_dev(div, t1);
      append_dev(div, h3);
      append_dev(h3, t2);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(151:12) <MediaContent>",
    ctx: ctx
  });
  return block;
} // (150:10) <Media class="card-media-16x9" aspectRatio="16x9">


function create_default_slot_30(ctx) {
  var current;
  var mediacontent = new MediaContent({
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
  var block = {
    c: function create() {
      create_component(mediacontent.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(mediacontent.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(mediacontent, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var mediacontent_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        mediacontent_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      mediacontent.$set(mediacontent_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(mediacontent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(mediacontent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(mediacontent, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(150:10) <Media class=\\\"card-media-16x9\\\" aspectRatio=\\\"16x9\\\">",
    ctx: ctx
  });
  return block;
} // (158:10) <Content class="mdc-typography--body2">


function create_default_slot_29(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("It's all in this card. It's a veritable smorgasbord of card features.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "It's all in this card. It's a veritable smorgasbord of card features.");
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
    source: "(158:10) <Content class=\\\"mdc-typography--body2\\\">",
    ctx: ctx
  });
  return block;
} // (149:8) <PrimaryAction on:click={() => clicked++}>


function create_default_slot_28(ctx) {
  var t;
  var current;
  var media = new Media({
    props: {
      class: "card-media-16x9",
      aspectRatio: "16x9",
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      class: "mdc-typography--body2",
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
      create_component(media.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(media.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(media, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var media_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        media_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      media.$set(media_changes);
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(media.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(media.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(media, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(149:8) <PrimaryAction on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (165:14) <Label>


function create_default_slot_27(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    source: "(165:14) <Label>",
    ctx: ctx
  });
  return block;
} // (164:12) <Button on:click={() => clicked++}>


function create_default_slot_26(ctx) {
  var current;
  var label = new Label({
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
      1073741824) {
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(164:12) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (168:14) <Label>


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Another");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Another");
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
    source: "(168:14) <Label>",
    ctx: ctx
  });
  return block;
} // (167:12) <Button on:click={() => clicked++}>


function create_default_slot_24(ctx) {
  var current;
  var label = new Label({
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
      1073741824) {
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
    id: create_default_slot_24.name,
    type: "slot",
    source: "(167:12) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (163:10) <ActionButtons>


function create_default_slot_23(ctx) {
  var t;
  var current;
  var button0 = new Button({
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
  button0.$on("click",
  /*click_handler_15*/
  ctx[16]);
  var button1 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_16*/
  ctx[17]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(button1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(163:10) <ActionButtons>",
    ctx: ctx
  });
  return block;
} // (173:14) <Icon class="material-icons" on>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    source: "(173:14) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (174:14) <Icon class="material-icons">


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite_border");
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
    source: "(174:14) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (172:12) <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">


function create_default_slot_20(ctx) {
  var t;
  var current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      class: "material-icons",
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
      create_component(icon0.$$.fragment);
      t = space();
      create_component(icon1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(icon1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(172:12) <IconButton on:click={() => clicked++} toggle aria-label=\\\"Add to favorites\\\" title=\\\"Add to favorites\\\">",
    ctx: ctx
  });
  return block;
} // (176:12) <IconButton class="material-icons" on:click={() => clicked++} title="Share">


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("share");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "share");
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(176:12) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"Share\\\">",
    ctx: ctx
  });
  return block;
} // (177:12) <IconButton class="material-icons" on:click={() => clicked++} title="More options">


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("more_vert");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "more_vert");
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
    source: "(177:12) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"More options\\\">",
    ctx: ctx
  });
  return block;
} // (171:10) <ActionIcons>


function create_default_slot_17(ctx) {
  var t0;
  var t1;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      toggle: true,
      "aria-label": "Add to favorites",
      title: "Add to favorites",
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton0.$on("click",
  /*click_handler_17*/
  ctx[18]);
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      title: "Share",
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton1.$on("click",
  /*click_handler_18*/
  ctx[19]);
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      title: "More options",
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton2.$on("click",
  /*click_handler_19*/
  ctx[20]);
  var block = {
    c: function create() {
      create_component(iconbutton0.$$.fragment);
      t0 = space();
      create_component(iconbutton1.$$.fragment);
      t1 = space();
      create_component(iconbutton2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(iconbutton2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(iconbutton1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(iconbutton2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton2.$set(iconbutton2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(iconbutton1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(iconbutton2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(171:10) <ActionIcons>",
    ctx: ctx
  });
  return block;
} // (162:8) <Actions>


function create_default_slot_16(ctx) {
  var t;
  var current;
  var actionbuttons = new ActionButtons({
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
  var actionicons = new ActionIcons({
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
  var block = {
    c: function create() {
      create_component(actionbuttons.$$.fragment);
      t = space();
      create_component(actionicons.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(actionbuttons.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actionicons.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actionbuttons, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actionicons, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var actionbuttons_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actionbuttons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionbuttons.$set(actionbuttons_changes);
      var actionicons_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actionicons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionicons.$set(actionicons_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actionbuttons.$$.fragment, local);
      transition_in(actionicons.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actionbuttons.$$.fragment, local);
      transition_out(actionicons.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actionbuttons, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actionicons, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(162:8) <Actions>",
    ctx: ctx
  });
  return block;
} // (148:6) <Card style="width: 360px;">


function create_default_slot_15(ctx) {
  var t;
  var current;
  var primaryaction = new PrimaryAction({
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
  primaryaction.$on("click",
  /*click_handler_14*/
  ctx[15]);
  var actions = new Actions({
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
      create_component(primaryaction.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primaryaction.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primaryaction, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primaryaction_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        primaryaction_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primaryaction.$set(primaryaction_changes);
      var actions_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primaryaction.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primaryaction.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primaryaction, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(148:6) <Card style=\\\"width: 360px;\\\">",
    ctx: ctx
  });
  return block;
} // (187:10) <Content class="mdc-typography--body2">


function create_default_slot_14(ctx) {
  var h2;
  var t0;
  var t1;
  var h3;
  var t2;
  var t3;
  var block = {
    c: function create() {
      h2 = element("h2");
      t0 = text("A card with media.");
      t1 = space();
      h3 = element("h3");
      t2 = text("And a subtitle.");
      t3 = text("\n            It's all in this card. It's a veritable smorgasbord of card features.");
      this.h();
    },
    l: function claim(nodes) {
      h2 = claim_element(nodes, "H2", {
        class: true,
        style: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "A card with media.");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      h3 = claim_element(nodes, "H3", {
        class: true,
        style: true
      });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, "And a subtitle.");
      h3_nodes.forEach(detach_dev);
      t3 = claim_text(nodes, "\n            It's all in this card. It's a veritable smorgasbord of card features.");
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "mdc-typography--headline6 svelte-6pehas");
      set_style(h2, "margin", "0");
      add_location(h2, file$4, 187, 12, 7057);
      attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-6pehas");
      set_style(h3, "margin", "0 0 10px");
      set_style(h3, "color", "#888");
      add_location(h3, file$4, 188, 12, 7150);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);
      append_dev(h2, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, h3, anchor);
      append_dev(h3, t2);
      insert_dev(target, t3, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(h2);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(h3);
      if (detaching) detach_dev(t3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(187:10) <Content class=\\\"mdc-typography--body2\\\">",
    ctx: ctx
  });
  return block;
} // (185:8) <PrimaryAction on:click={() => clicked++}>


function create_default_slot_13(ctx) {
  var t;
  var current;
  var media = new Media({
    props: {
      class: "card-media-16x9",
      aspectRatio: "16x9"
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      class: "mdc-typography--body2",
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
      create_component(media.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(media.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(media, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(media.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(media.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(media, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(185:8) <PrimaryAction on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (196:14) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(196:14) <Label>",
    ctx: ctx
  });
  return block;
} // (195:12) <Button on:click={() => clicked++}>


function create_default_slot_11(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
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
      1073741824) {
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(195:12) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (199:14) <Label>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Another");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Another");
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
    source: "(199:14) <Label>",
    ctx: ctx
  });
  return block;
} // (198:12) <Button on:click={() => clicked++}>


function create_default_slot_9(ctx) {
  var current;
  var label = new Label({
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
      1073741824) {
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(198:12) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (194:10) <ActionButtons>


function create_default_slot_8(ctx) {
  var t;
  var current;
  var button0 = new Button({
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
  button0.$on("click",
  /*click_handler_21*/
  ctx[22]);
  var button1 = new Button({
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
  button1.$on("click",
  /*click_handler_22*/
  ctx[23]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(button1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(194:10) <ActionButtons>",
    ctx: ctx
  });
  return block;
} // (204:14) <Icon class="material-icons" on>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    source: "(204:14) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (205:14) <Icon class="material-icons">


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite_border");
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(205:14) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (203:12) <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">


function create_default_slot_5(ctx) {
  var t;
  var current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon0.$$.fragment);
      t = space();
      create_component(icon1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        icon1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(icon1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(203:12) <IconButton on:click={() => clicked++} toggle aria-label=\\\"Add to favorites\\\" title=\\\"Add to favorites\\\">",
    ctx: ctx
  });
  return block;
} // (207:12) <IconButton class="material-icons" on:click={() => clicked++} title="Share">


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("share");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "share");
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
    source: "(207:12) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"Share\\\">",
    ctx: ctx
  });
  return block;
} // (208:12) <IconButton class="material-icons" on:click={() => clicked++} title="More options">


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("more_vert");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "more_vert");
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(208:12) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} title=\\\"More options\\\">",
    ctx: ctx
  });
  return block;
} // (202:10) <ActionIcons>


function create_default_slot_2(ctx) {
  var t0;
  var t1;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      toggle: true,
      "aria-label": "Add to favorites",
      title: "Add to favorites",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton0.$on("click",
  /*click_handler_23*/
  ctx[24]);
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      title: "Share",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton1.$on("click",
  /*click_handler_24*/
  ctx[25]);
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      title: "More options",
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton2.$on("click",
  /*click_handler_25*/
  ctx[26]);
  var block = {
    c: function create() {
      create_component(iconbutton0.$$.fragment);
      t0 = space();
      create_component(iconbutton1.$$.fragment);
      t1 = space();
      create_component(iconbutton2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(iconbutton2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(iconbutton1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(iconbutton2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        iconbutton2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton2.$set(iconbutton2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(iconbutton1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(iconbutton2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(202:10) <ActionIcons>",
    ctx: ctx
  });
  return block;
} // (193:8) <Actions>


function create_default_slot_1(ctx) {
  var t;
  var current;
  var actionbuttons = new ActionButtons({
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
  var actionicons = new ActionIcons({
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
      create_component(actionbuttons.$$.fragment);
      t = space();
      create_component(actionicons.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(actionbuttons.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actionicons.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actionbuttons, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actionicons, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var actionbuttons_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actionbuttons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionbuttons.$set(actionbuttons_changes);
      var actionicons_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actionicons_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actionicons.$set(actionicons_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actionbuttons.$$.fragment, local);
      transition_in(actionicons.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actionbuttons.$$.fragment, local);
      transition_out(actionicons.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actionbuttons, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actionicons, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(193:8) <Actions>",
    ctx: ctx
  });
  return block;
} // (184:6) <Card style="width: 360px;">


function create_default_slot(ctx) {
  var t;
  var current;
  var primaryaction = new PrimaryAction({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  primaryaction.$on("click",
  /*click_handler_20*/
  ctx[21]);
  var actions = new Actions({
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
      create_component(primaryaction.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primaryaction.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primaryaction, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primaryaction_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        primaryaction_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primaryaction.$set(primaryaction_changes);
      var actions_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primaryaction.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primaryaction.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primaryaction, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(184:6) <Card style=\\\"width: 360px;\\\">",
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
  var div16;
  var div0;
  var t3;
  var div1;
  var t4;
  var div2;
  var t5;
  var div3;
  var t6;
  var div4;
  var t7;
  var div5;
  var t8;
  var div6;
  var t9;
  var div7;
  var t10;
  var div8;
  var t11;
  var div9;
  var t12;
  var div10;
  var t13;
  var div13;
  var div12;
  var div11;
  var t14;
  var t15;
  var t16;
  var div14;
  var t17;
  var div15;
  var t18;
  var pre;
  var t19;
  var t20;
  var current;
  var card0 = new Card({
    props: {
      style: "width: 250px;",
      padded: true,
      $$slots: {
        default: [create_default_slot_84]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card1 = new Card({
    props: {
      style: "width: 250px;",
      $$slots: {
        default: [create_default_slot_82]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card2 = new Card({
    props: {
      style: "width: 250px;",
      variant: "outlined",
      padded: true,
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card3 = new Card({
    props: {
      style: "width: 250px;",
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card4 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_72]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card5 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card6 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card7 = new Card({
    props: {
      style: "width: 360px;",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card8 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card9 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card10 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_36]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card11 = new Card({
    props: {
      style: "width: 320px;",
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card12 = new Card({
    props: {
      style: "width: 360px;",
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var card13 = new Card({
    props: {
      style: "width: 360px;",
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
      t1 = text("Cards");
      t2 = space();
      div16 = element("div");
      div0 = element("div");
      create_component(card0.$$.fragment);
      t3 = space();
      div1 = element("div");
      create_component(card1.$$.fragment);
      t4 = space();
      div2 = element("div");
      create_component(card2.$$.fragment);
      t5 = space();
      div3 = element("div");
      create_component(card3.$$.fragment);
      t6 = space();
      div4 = element("div");
      create_component(card4.$$.fragment);
      t7 = space();
      div5 = element("div");
      create_component(card5.$$.fragment);
      t8 = space();
      div6 = element("div");
      create_component(card6.$$.fragment);
      t9 = space();
      div7 = element("div");
      create_component(card7.$$.fragment);
      t10 = space();
      div8 = element("div");
      create_component(card8.$$.fragment);
      t11 = space();
      div9 = element("div");
      create_component(card9.$$.fragment);
      t12 = space();
      div10 = element("div");
      create_component(card10.$$.fragment);
      t13 = space();
      div13 = element("div");
      div12 = element("div");
      div11 = element("div");
      t14 = text("A card with a list as content:");
      t15 = space();
      create_component(card11.$$.fragment);
      t16 = space();
      div14 = element("div");
      create_component(card12.$$.fragment);
      t17 = space();
      div15 = element("div");
      create_component(card13.$$.fragment);
      t18 = space();
      pre = element("pre");
      t19 = text("Clicked: ");
      t20 = text(
      /*clicked*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Cards");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div16 = claim_element(section_nodes, "DIV", {
        style: true,
        class: true
      });
      var div16_nodes = children(div16);
      div0 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div16_nodes);
      div1 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(card1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div16_nodes);
      div2 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(card2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div16_nodes);
      div3 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(card3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div16_nodes);
      div4 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(card4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t7 = claim_space(div16_nodes);
      div5 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      claim_component(card5.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t8 = claim_space(div16_nodes);
      div6 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      claim_component(card6.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t9 = claim_space(div16_nodes);
      div7 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      claim_component(card7.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      t10 = claim_space(div16_nodes);
      div8 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      claim_component(card8.$$.fragment, div8_nodes);
      div8_nodes.forEach(detach_dev);
      t11 = claim_space(div16_nodes);
      div9 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      claim_component(card9.$$.fragment, div9_nodes);
      div9_nodes.forEach(detach_dev);
      t12 = claim_space(div16_nodes);
      div10 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      claim_component(card10.$$.fragment, div10_nodes);
      div10_nodes.forEach(detach_dev);
      t13 = claim_space(div16_nodes);
      div13 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", {
        style: true,
        class: true
      });
      var div11_nodes = children(div11);
      t14 = claim_text(div11_nodes, "A card with a list as content:");
      div11_nodes.forEach(detach_dev);
      t15 = claim_space(div12_nodes);
      claim_component(card11.$$.fragment, div12_nodes);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      t16 = claim_space(div16_nodes);
      div14 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      claim_component(card12.$$.fragment, div14_nodes);
      div14_nodes.forEach(detach_dev);
      t17 = claim_space(div16_nodes);
      div15 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      claim_component(card13.$$.fragment, div15_nodes);
      div15_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      t18 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t19 = claim_text(pre_nodes, "Clicked: ");
      t20 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Cards - SMUI";
      attr_dev(h2, "class", "svelte-6pehas");
      add_location(h2, file$4, 5, 2, 72);
      attr_dev(div0, "class", "card-container short svelte-6pehas");
      add_location(div0, file$4, 8, 4, 140);
      attr_dev(div1, "class", "card-container short svelte-6pehas");
      add_location(div1, file$4, 12, 4, 261);
      attr_dev(div2, "class", "card-container short svelte-6pehas");
      add_location(div2, file$4, 16, 4, 411);
      attr_dev(div3, "class", "card-container short svelte-6pehas");
      add_location(div3, file$4, 20, 4, 555);
      attr_dev(div4, "class", "card-container short svelte-6pehas");
      add_location(div4, file$4, 26, 4, 743);
      attr_dev(div5, "class", "card-container short svelte-6pehas");
      add_location(div5, file$4, 40, 4, 1129);
      attr_dev(div6, "class", "card-container short svelte-6pehas");
      add_location(div6, file$4, 52, 4, 1511);
      attr_dev(div7, "class", "card-container short svelte-6pehas");
      add_location(div7, file$4, 66, 4, 2182);
      attr_dev(div8, "class", "card-container svelte-6pehas");
      add_location(div8, file$4, 90, 4, 3172);
      attr_dev(div9, "class", "card-container svelte-6pehas");
      add_location(div9, file$4, 103, 4, 3651);
      attr_dev(div10, "class", "card-container svelte-6pehas");
      add_location(div10, file$4, 114, 4, 4115);
      set_style(div11, "width", "320px");
      attr_dev(div11, "class", "svelte-6pehas");
      add_location(div11, file$4, 131, 8, 4790);
      attr_dev(div12, "class", "svelte-6pehas");
      add_location(div12, file$4, 130, 6, 4776);
      attr_dev(div13, "class", "card-container svelte-6pehas");
      add_location(div13, file$4, 129, 4, 4741);
      attr_dev(div14, "class", "card-container svelte-6pehas");
      add_location(div14, file$4, 146, 4, 5209);
      attr_dev(div15, "class", "card-container svelte-6pehas");
      add_location(div15, file$4, 182, 4, 6811);
      set_style(div16, "display", "flex");
      set_style(div16, "flex-wrap", "wrap");
      attr_dev(div16, "class", "svelte-6pehas");
      add_location(div16, file$4, 7, 2, 90);
      attr_dev(pre, "class", "status svelte-6pehas");
      add_location(pre, file$4, 214, 2, 8258);
      attr_dev(section, "class", "svelte-6pehas");
      add_location(section, file$4, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div16);
      append_dev(div16, div0);
      mount_component(card0, div0, null);
      append_dev(div16, t3);
      append_dev(div16, div1);
      mount_component(card1, div1, null);
      append_dev(div16, t4);
      append_dev(div16, div2);
      mount_component(card2, div2, null);
      append_dev(div16, t5);
      append_dev(div16, div3);
      mount_component(card3, div3, null);
      append_dev(div16, t6);
      append_dev(div16, div4);
      mount_component(card4, div4, null);
      append_dev(div16, t7);
      append_dev(div16, div5);
      mount_component(card5, div5, null);
      append_dev(div16, t8);
      append_dev(div16, div6);
      mount_component(card6, div6, null);
      append_dev(div16, t9);
      append_dev(div16, div7);
      mount_component(card7, div7, null);
      append_dev(div16, t10);
      append_dev(div16, div8);
      mount_component(card8, div8, null);
      append_dev(div16, t11);
      append_dev(div16, div9);
      mount_component(card9, div9, null);
      append_dev(div16, t12);
      append_dev(div16, div10);
      mount_component(card10, div10, null);
      append_dev(div16, t13);
      append_dev(div16, div13);
      append_dev(div13, div12);
      append_dev(div12, div11);
      append_dev(div11, t14);
      append_dev(div12, t15);
      mount_component(card11, div12, null);
      append_dev(div16, t16);
      append_dev(div16, div14);
      mount_component(card12, div14, null);
      append_dev(div16, t17);
      append_dev(div16, div15);
      mount_component(card13, div15, null);
      append_dev(section, t18);
      append_dev(section, pre);
      append_dev(pre, t19);
      append_dev(pre, t20);
      current = true;
    },
    p: function update(ctx, dirty) {
      var card0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        card0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card0.$set(card0_changes);
      var card1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        card1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card1.$set(card1_changes);
      var card2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        card2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card2.$set(card2_changes);
      var card3_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card3.$set(card3_changes);
      var card4_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card4.$set(card4_changes);
      var card5_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card5.$set(card5_changes);
      var card6_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card6.$set(card6_changes);
      var card7_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card7.$set(card7_changes);
      var card8_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        card8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card8.$set(card8_changes);
      var card9_changes = {};

      if (dirty[0] &
      /*$$scope*/
      1073741824) {
        card9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card9.$set(card9_changes);
      var card10_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card10.$set(card10_changes);
      var card11_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card11.$set(card11_changes);
      var card12_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card12.$set(card12_changes);
      var card13_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      1073741825) {
        card13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      card13.$set(card13_changes);
      if (!current || dirty[0] &
      /*clicked*/
      1) set_data_dev(t20,
      /*clicked*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(card3.$$.fragment, local);
      transition_in(card4.$$.fragment, local);
      transition_in(card5.$$.fragment, local);
      transition_in(card6.$$.fragment, local);
      transition_in(card7.$$.fragment, local);
      transition_in(card8.$$.fragment, local);
      transition_in(card9.$$.fragment, local);
      transition_in(card10.$$.fragment, local);
      transition_in(card11.$$.fragment, local);
      transition_in(card12.$$.fragment, local);
      transition_in(card13.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(card3.$$.fragment, local);
      transition_out(card4.$$.fragment, local);
      transition_out(card5.$$.fragment, local);
      transition_out(card6.$$.fragment, local);
      transition_out(card7.$$.fragment, local);
      transition_out(card8.$$.fragment, local);
      transition_out(card9.$$.fragment, local);
      transition_out(card10.$$.fragment, local);
      transition_out(card11.$$.fragment, local);
      transition_out(card12.$$.fragment, local);
      transition_out(card13.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      destroy_component(card3);
      destroy_component(card4);
      destroy_component(card5);
      destroy_component(card6);
      destroy_component(card7);
      destroy_component(card8);
      destroy_component(card9);
      destroy_component(card10);
      destroy_component(card11);
      destroy_component(card12);
      destroy_component(card13);
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

var func = function func(v, i) {
  return i + 1;
};

function instance$4($$self, $$props, $$invalidate) {
  var clicked = 0;

  var click_handler = function click_handler() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_6 = function click_handler_6() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_7 = function click_handler_7() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_8 = function click_handler_8() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_9 = function click_handler_9() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_10 = function click_handler_10() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_11 = function click_handler_11() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_12 = function click_handler_12() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_13 = function click_handler_13() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_14 = function click_handler_14() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_15 = function click_handler_15() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_16 = function click_handler_16() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_17 = function click_handler_17() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_18 = function click_handler_18() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_19 = function click_handler_19() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_20 = function click_handler_20() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_21 = function click_handler_21() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_22 = function click_handler_22() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_23 = function click_handler_23() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_24 = function click_handler_24() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_25 = function click_handler_25() {
    return $$invalidate(0, clicked++, clicked);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
  };

  return [clicked, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, click_handler_6, click_handler_7, click_handler_8, click_handler_9, click_handler_10, click_handler_11, click_handler_12, click_handler_13, click_handler_14, click_handler_15, click_handler_16, click_handler_17, click_handler_18, click_handler_19, click_handler_20, click_handler_21, click_handler_22, click_handler_23, click_handler_24, click_handler_25];
}

var Card_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Card_1, _SvelteComponentDev);

  function Card_1(options) {
    var _this;

    _classCallCheck$1(this, Card_1);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Card_1).call(this, options));
    if (!document.getElementById("svelte-6pehas-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Card_1",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return Card_1;
}(SvelteComponentDev);

export default Card_1;
