import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, M as space, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, O as attr_dev, l as add_location, m as insert_dev, K as mount_component, $ as set_data_dev, t as transition_in, u as transition_out, L as destroy_component } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/typeof';
import '@babel/runtime/helpers/esm/toConsumableArray';
import './useActions.03a18d11.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import { B as Button } from './Button.238fe4ea.js';
import { L as Label } from './Label.cdd98476.js';
import { I as Icon } from './Icon.e7ebcf54.js';
import { F as Fab } from './Fab.4ad4bb51.js';

var css = ".demo-special-theme{min-height:100%;min-width:100%;background-color:#000;color:#fff;--mdc-theme-primary:#c8e6c9;--mdc-theme-secondary:#b2ebf2;--mdc-theme-background:#000;--mdc-theme-surface:#000;--mdc-theme-error:#ffe0b2;--mdc-theme-on-primary:#000;--mdc-theme-on-secondary:#000;--mdc-theme-on-surface:#fff;--mdc-theme-on-error:#000;--mdc-theme-text-primary-on-background:#fff;--mdc-theme-text-secondary-on-background:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-background:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-background:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-background:hsla(0,0%,100%,0.5);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.demo-special-theme .mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.demo-special-theme .mdc-button::-moz-focus-inner{padding:0;border:0}.demo-special-theme .mdc-button:active{outline:none}.demo-special-theme .mdc-button:hover{cursor:pointer}.demo-special-theme .mdc-button:disabled{background-color:transparent;color:hsla(0,0%,100%,.37);cursor:default;pointer-events:none}.demo-special-theme .mdc-button.mdc-button--dense{border-radius:4px}.demo-special-theme .mdc-button:not(:disabled){background-color:transparent}.demo-special-theme .mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.demo-special-theme .mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .demo-special-theme .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.demo-special-theme .mdc-button:not(:disabled){color:#c8e6c9;color:var(--mdc-theme-primary,#c8e6c9)}.demo-special-theme .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.demo-special-theme .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .demo-special-theme .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}.demo-special-theme svg.mdc-button__icon{fill:currentColor}.demo-special-theme .mdc-button--outlined .mdc-button__icon,.demo-special-theme .mdc-button--raised .mdc-button__icon,.demo-special-theme .mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.demo-special-theme .mdc-button--outlined .mdc-button__icon[dir=rtl],.demo-special-theme .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.demo-special-theme .mdc-button--raised .mdc-button__icon[dir=rtl],.demo-special-theme .mdc-button--raised .mdc-button__label+.mdc-button__icon,.demo-special-theme .mdc-button--unelevated .mdc-button__icon[dir=rtl],.demo-special-theme .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .demo-special-theme .mdc-button--outlined .mdc-button__icon,[dir=rtl] .demo-special-theme .mdc-button--raised .mdc-button__icon,[dir=rtl] .demo-special-theme .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.demo-special-theme .mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.demo-special-theme .mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.demo-special-theme .mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .demo-special-theme .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .demo-special-theme .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .demo-special-theme .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.demo-special-theme .mdc-button--raised,.demo-special-theme .mdc-button--unelevated{padding:0 16px}.demo-special-theme .mdc-button--raised:disabled,.demo-special-theme .mdc-button--unelevated:disabled{background-color:hsla(0,0%,100%,.12);color:hsla(0,0%,100%,.37)}.demo-special-theme .mdc-button--raised:not(:disabled),.demo-special-theme .mdc-button--unelevated:not(:disabled){background-color:#c8e6c9}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-button--raised:not(:disabled),.demo-special-theme .mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#c8e6c9)}}.demo-special-theme .mdc-button--raised:not(:disabled),.demo-special-theme .mdc-button--unelevated:not(:disabled){color:#000;color:var(--mdc-theme-on-primary,#000)}.demo-special-theme .mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.demo-special-theme .mdc-button--raised:focus,.demo-special-theme .mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.demo-special-theme .mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.demo-special-theme .mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.demo-special-theme .mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.demo-special-theme .mdc-button--outlined:disabled{border-color:hsla(0,0%,100%,.37)}.demo-special-theme .mdc-button--outlined:not(:disabled){border-color:#c8e6c9;border-color:var(--mdc-theme-primary,#c8e6c9)}.demo-special-theme .mdc-button--dense{height:32px;font-size:.8125rem}.demo-special-theme .mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.demo-special-theme .mdc-button:after,.demo-special-theme .mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.demo-special-theme .mdc-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.demo-special-theme .mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.demo-special-theme .mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.demo-special-theme .mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.demo-special-theme .mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.demo-special-theme .mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.demo-special-theme .mdc-button:after,.demo-special-theme .mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.demo-special-theme .mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.demo-special-theme .mdc-button:after,.demo-special-theme .mdc-button:before{background-color:#c8e6c9}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-button:after,.demo-special-theme .mdc-button:before{background-color:var(--mdc-theme-primary,#c8e6c9)}}.demo-special-theme .mdc-button:hover:before{opacity:.08}.demo-special-theme .mdc-button.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.demo-special-theme .mdc-button--raised:after,.demo-special-theme .mdc-button--raised:before,.demo-special-theme .mdc-button--unelevated:after,.demo-special-theme .mdc-button--unelevated:before{background-color:#000}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-button--raised:after,.demo-special-theme .mdc-button--raised:before,.demo-special-theme .mdc-button--unelevated:after,.demo-special-theme .mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#000)}}.demo-special-theme .mdc-button--raised:hover:before,.demo-special-theme .mdc-button--unelevated:hover:before{opacity:.04}.demo-special-theme .mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.demo-special-theme .mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.demo-special-theme .mdc-button--raised:not(.mdc-ripple-upgraded):after,.demo-special-theme .mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.demo-special-theme .mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.demo-special-theme .mdc-button--raised.mdc-ripple-upgraded,.demo-special-theme .mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.demo-special-theme .smui-button--color-secondary:not(:disabled){color:#b2ebf2;color:var(--mdc-theme-secondary,#b2ebf2)}.demo-special-theme .smui-button--color-secondary.mdc-button--raised:not(:disabled),.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#b2ebf2}@supports not (-ms-ime-align:auto){.demo-special-theme .smui-button--color-secondary.mdc-button--raised:not(:disabled),.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#b2ebf2)}}.demo-special-theme .smui-button--color-secondary.mdc-button--raised:not(:disabled),.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#000;color:var(--mdc-theme-on-secondary,#000)}.demo-special-theme .smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#b2ebf2;border-color:var(--mdc-theme-secondary,#b2ebf2)}.demo-special-theme .smui-button--color-secondary:after,.demo-special-theme .smui-button--color-secondary:before{background-color:#b2ebf2}@supports not (-ms-ime-align:auto){.demo-special-theme .smui-button--color-secondary:after,.demo-special-theme .smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#b2ebf2)}}.demo-special-theme .smui-button--color-secondary:hover:before{opacity:.08}.demo-special-theme .smui-button--color-secondary.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.demo-special-theme .smui-button--color-secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.demo-special-theme .smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.demo-special-theme .smui-button--color-secondary.mdc-button--raised:after,.demo-special-theme .smui-button--color-secondary.mdc-button--raised:before,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:after,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:before{background-color:#000}@supports not (-ms-ime-align:auto){.demo-special-theme .smui-button--color-secondary.mdc-button--raised:after,.demo-special-theme .smui-button--color-secondary.mdc-button--raised:before,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:after,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#000)}}.demo-special-theme .smui-button--color-secondary.mdc-button--raised:hover:before,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.04}.demo-special-theme .smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.demo-special-theme .smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.demo-special-theme .smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.demo-special-theme .smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.demo-special-theme .smui-button__group{display:inline-flex}.demo-special-theme .smui-button__group>.mdc-button:not(:last-child),.demo-special-theme .smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button{border-top-right-radius:0;border-bottom-right-radius:0}.demo-special-theme .smui-button__group>.mdc-button:not(:first-child),.demo-special-theme .smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button{border-top-left-radius:0;border-bottom-left-radius:0}.demo-special-theme .smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.demo-special-theme .smui-button__group>.mdc-button--raised,.demo-special-theme .smui-button__group>.mdc-button--raised:active,.demo-special-theme .smui-button__group>.mdc-button--raised:disabled,.demo-special-theme .smui-button__group>.mdc-button--raised:focus,.demo-special-theme .smui-button__group>.mdc-button--raised:hover,.demo-special-theme .smui-button__group>.smui-button__group-item>.mdc-button--raised,.demo-special-theme .smui-button__group>.smui-button__group-item>.mdc-button--raised:active,.demo-special-theme .smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled,.demo-special-theme .smui-button__group>.smui-button__group-item>.mdc-button--raised:focus,.demo-special-theme .smui-button__group>.smui-button__group-item>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.demo-special-theme .smui-button__group>.mdc-button--outlined:not(:last-child),.demo-special-theme .smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.demo-special-theme .mdc-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;transition:box-shadow .28s cubic-bezier(.4,0,.2,1),opacity 15ms linear 30ms,transform .27s cubic-bezier(0,0,.2,1) 0ms;background-color:#b2ebf2;color:#000;color:var(--mdc-theme-on-secondary,#000)}.demo-special-theme .mdc-fab:not(.mdc-fab--extended){border-radius:50%}.demo-special-theme .mdc-fab::-moz-focus-inner{padding:0;border:0}.demo-special-theme .mdc-fab:focus,.demo-special-theme .mdc-fab:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.demo-special-theme .mdc-fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.demo-special-theme .mdc-fab:active,.demo-special-theme .mdc-fab:focus{outline:none}.demo-special-theme .mdc-fab:hover{cursor:pointer}.demo-special-theme .mdc-fab>svg{width:100%}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-fab{background-color:var(--mdc-theme-secondary,#b2ebf2)}}.demo-special-theme .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.demo-special-theme .mdc-fab--mini{width:40px;height:40px}.demo-special-theme .mdc-fab--extended{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px}.demo-special-theme .mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}.demo-special-theme .mdc-fab--extended .mdc-fab__icon[dir=rtl],.demo-special-theme .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,[dir=rtl] .demo-special-theme .mdc-fab--extended .mdc-fab__icon{margin-left:12px;margin-right:-8px}.demo-special-theme .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl],[dir=rtl] .demo-special-theme .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:-8px;margin-right:12px}.demo-special-theme .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.demo-special-theme .mdc-fab__icon{transition:transform .18s cubic-bezier(0,0,.2,1) 90ms;fill:currentColor;will-change:transform}.demo-special-theme .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.demo-special-theme .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear .15s,transform .18s cubic-bezier(.4,0,1,1) 0ms}.demo-special-theme .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms cubic-bezier(.4,0,1,1) 0ms}.demo-special-theme .mdc-fab{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.demo-special-theme .mdc-fab:after,.demo-special-theme .mdc-fab:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.demo-special-theme .mdc-fab:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.demo-special-theme .mdc-fab.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.demo-special-theme .mdc-fab.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.demo-special-theme .mdc-fab.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.demo-special-theme .mdc-fab.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.demo-special-theme .mdc-fab.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.demo-special-theme .mdc-fab:after,.demo-special-theme .mdc-fab:before{top:-50%;left:-50%;width:200%;height:200%}.demo-special-theme .mdc-fab.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.demo-special-theme .mdc-fab:after,.demo-special-theme .mdc-fab:before{background-color:#000}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-fab:after,.demo-special-theme .mdc-fab:before{background-color:var(--mdc-theme-on-secondary,#000)}}.demo-special-theme .mdc-fab:hover:before{opacity:.04}.demo-special-theme .mdc-fab.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-fab:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.demo-special-theme .mdc-fab:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .mdc-fab:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.demo-special-theme .mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.demo-special-theme .mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.demo-special-theme .mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.demo-special-theme .mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.demo-special-theme .mdc-ripple-surface:after,.demo-special-theme .mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.demo-special-theme .mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.demo-special-theme .mdc-ripple-surface:after,.demo-special-theme .mdc-ripple-surface:before{background-color:#fff}.demo-special-theme .mdc-ripple-surface:hover:before{opacity:.08}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.demo-special-theme .mdc-ripple-surface:after,.demo-special-theme .mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.demo-special-theme .mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.demo-special-theme .mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.demo-special-theme .mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.demo-special-theme .mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.demo-special-theme .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.demo-special-theme .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.demo-special-theme .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.demo-special-theme .mdc-ripple-surface--primary:after,.demo-special-theme .mdc-ripple-surface--primary:before{background-color:#c8e6c9}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-ripple-surface--primary:after,.demo-special-theme .mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#c8e6c9)}}.demo-special-theme .mdc-ripple-surface--primary:hover:before{opacity:.08}.demo-special-theme .mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.demo-special-theme .mdc-ripple-surface--accent:after,.demo-special-theme .mdc-ripple-surface--accent:before{background-color:#b2ebf2}@supports not (-ms-ime-align:auto){.demo-special-theme .mdc-ripple-surface--accent:after,.demo-special-theme .mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#b2ebf2)}}.demo-special-theme .mdc-ripple-surface--accent:hover:before{opacity:.08}.demo-special-theme .mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.demo-special-theme .mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.demo-special-theme .smui-fab--color-primary{background-color:#c8e6c9;color:#000;color:var(--mdc-theme-on-primary,#000)}@supports not (-ms-ime-align:auto){.demo-special-theme .smui-fab--color-primary{background-color:var(--mdc-theme-primary,#c8e6c9)}}.demo-special-theme .smui-fab--color-primary:after,.demo-special-theme .smui-fab--color-primary:before{background-color:#000}@supports not (-ms-ime-align:auto){.demo-special-theme .smui-fab--color-primary:after,.demo-special-theme .smui-fab--color-primary:before{background-color:var(--mdc-theme-on-primary,#000)}}.demo-special-theme .smui-fab--color-primary:hover:before{opacity:.04}.demo-special-theme .smui-fab--color-primary.mdc-ripple-upgraded--background-focused:before,.demo-special-theme .smui-fab--color-primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.demo-special-theme .smui-fab--color-primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.demo-special-theme .smui-fab--color-primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.demo-special-theme .smui-fab--color-primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}";
styleInject(css);

var file = "src/routes/demo/theme.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-op0b4v-style";
  style.textContent = ".svelte-op0b4v .mdc-button, .mdc-fab{margin-bottom:.4em}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc3ZlbHRlIiwic291cmNlcyI6WyJ0aGVtZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+VGhlbWUgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uIGNsYXNzPVwiZGVtby1zcGVjaWFsLXRoZW1lXCI+XG4gIDxoMj5UaGVtZTwvaDI+XG5cbiAgPHA+XG4gICAgU01VSSB0aGVtZXMgYXJlIHVzdWFsbHkgcHJvdmlkZWQgYnkgYSA8Y29kZT5fc211aS10aGVtZS5zY3NzPC9jb2RlPiBmaWxlIGluXG4gICAgYSBkaXJlY3RvcnkgdGhhdCBpcyBpbmNsdWRlZCBpbiB0aGUgPGNvZGU+aW5jbHVkZVBhdGhzPC9jb2RlPiBvZiB5b3VyIFNhc3NcbiAgICBjb25maWcuIFRoYXQgZmlsZSBpcyBtYW5kYXRvcnksIGJ1dCBpdCBjYW4gY29udGFpbiBub3RoaW5nLCBpZiB5b3Ugd2FudCB0aGVcbiAgICBkZWZhdWx0IHRoZW1lLiBUaGlzIGRlbW8gc2hvd3MgaG93IHRvIHRoZW1lIGEgcG9ydGlvbiBvZiB0aGUgYXBwXG4gICAgZGlmZmVyZW50bHkuXG4gIDwvcD5cblxuICA8ZGl2PlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY29sb3I9XCJzZWNvbmRhcnlcIj48TGFiZWw+U2Vjb25kYXJ5PC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGRpc2FibGVkPjxMYWJlbD5EaXNhYmxlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+PExhYmVsPlJhaXNlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPjxMYWJlbD5VbmVsZXZhdGVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPjxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkZW5zZT48TGFiZWw+RGVuc2U8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjxMYWJlbD5JY29uPC9MYWJlbD48L0J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8RmFiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48L0ZhYj5cbiAgICA8RmFiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGNvbG9yPVwicHJpbWFyeVwiPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48L0ZhYj5cbiAgICA8RmFiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IG1pbmk+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjwvRmFiPlxuICAgIDxGYWIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZXh0ZW5kZWQ+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjxMYWJlbD5FeHRlbmRlZDwvTGFiZWw+PC9GYWI+XG4gIDwvZGl2PlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0ICcuL3RoZW1lLnNjc3MnO1xuICBpbXBvcnQgQnV0dG9uIGZyb20gJ0BzbXVpL2J1dHRvbi9CdXR0b24uc3ZlbHRlJztcbiAgaW1wb3J0IEZhYiBmcm9tICdAc211aS9mYWIvRmFiLnN2ZWx0ZSc7XG4gIGltcG9ydCB7TGFiZWwsIEljb259IGZyb20gJ0BzbXVpL2NvbW1vbic7XG5cbiAgbGV0IGNsaWNrZWQgPSAwO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5tZGMtYnV0dG9uLCAubWRjLWZhYikge1xuICAgIG1hcmdpbi1ib3R0b206IC40ZW07XG4gIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDRSxjQUFDLENBQUMsQUFBUSxxQkFBcUIsQUFBRSxDQUFDLEFBQ2hDLGFBQWEsQ0FBRSxJQUFJLEFBQ3JCLENBQUMifQ== */";
  append_dev(document.head, style);
} // (17:39) <Label>


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    source: "(17:39) <Label>",
    ctx: ctx
  });
  return block;
} // (17:4) <Button on:click={() => clicked++}>


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
    id: create_default_slot_24.name,
    type: "slot",
    source: "(17:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (18:57) <Label>


function create_default_slot_23(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_23.name,
    type: "slot",
    source: "(18:57) <Label>",
    ctx: ctx
  });
  return block;
} // (18:4) <Button on:click={() => clicked++} color="secondary">


function create_default_slot_22(ctx) {
  var current;
  var label = new Label({
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
    id: create_default_slot_22.name,
    type: "slot",
    source: "(18:4) <Button on:click={() => clicked++} color=\\\"secondary\\\">",
    ctx: ctx
  });
  return block;
} // (19:48) <Label>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    source: "(19:48) <Label>",
    ctx: ctx
  });
  return block;
} // (19:4) <Button on:click={() => clicked++} disabled>


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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(19:4) <Button on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (20:56) <Label>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    source: "(20:56) <Label>",
    ctx: ctx
  });
  return block;
} // (20:4) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_18(ctx) {
  var current;
  var label = new Label({
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
    id: create_default_slot_18.name,
    type: "slot",
    source: "(20:4) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (21:60) <Label>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    source: "(21:60) <Label>",
    ctx: ctx
  });
  return block;
} // (21:4) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_16(ctx) {
  var current;
  var label = new Label({
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(21:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (22:58) <Label>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_15.name,
    type: "slot",
    source: "(22:58) <Label>",
    ctx: ctx
  });
  return block;
} // (22:4) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_14(ctx) {
  var current;
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(22:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (23:45) <Label>


function create_default_slot_13(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Dense");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Dense");
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
    id: create_default_slot_13.name,
    type: "slot",
    source: "(23:45) <Label>",
    ctx: ctx
  });
  return block;
} // (23:4) <Button on:click={() => clicked++} dense>


function create_default_slot_12(ctx) {
  var current;
  var label = new Label({
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(23:4) <Button on:click={() => clicked++} dense>",
    ctx: ctx
  });
  return block;
} // (24:39) <Icon class="material-icons">


function create_default_slot_11(ctx) {
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(24:39) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (24:83) <Label>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    source: "(24:83) <Label>",
    ctx: ctx
  });
  return block;
} // (24:4) <Button on:click={() => clicked++}>


function create_default_slot_9(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_11]
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
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
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
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(24:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (28:36) <Icon class="material-icons">


function create_default_slot_8(ctx) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(28:36) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (28:4) <Fab on:click={() => clicked++}>


function create_default_slot_7(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(28:4) <Fab on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (29:52) <Icon class="material-icons">


function create_default_slot_6(ctx) {
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(29:52) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (29:4) <Fab on:click={() => clicked++} color="primary">


function create_default_slot_5(ctx) {
  var current;
  var icon = new Icon({
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
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
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
    id: create_default_slot_5.name,
    type: "slot",
    source: "(29:4) <Fab on:click={() => clicked++} color=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (30:41) <Icon class="material-icons">


function create_default_slot_4(ctx) {
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(30:41) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (30:4) <Fab on:click={() => clicked++} mini>


function create_default_slot_3(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(30:4) <Fab on:click={() => clicked++} mini>",
    ctx: ctx
  });
  return block;
} // (31:45) <Icon class="material-icons">


function create_default_slot_2(ctx) {
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
    id: create_default_slot_2.name,
    type: "slot",
    source: "(31:45) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (31:89) <Label>


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Extended");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Extended");
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
    source: "(31:89) <Label>",
    ctx: ctx
  });
  return block;
} // (31:4) <Fab on:click={() => clicked++} extended>


function create_default_slot(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_2]
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
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
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
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(31:4) <Fab on:click={() => clicked++} extended>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var p;
  var t3;
  var code0;
  var t4;
  var t5;
  var code1;
  var t6;
  var t7;
  var t8;
  var div0;
  var t9;
  var t10;
  var t11;
  var t12;
  var t13;
  var t14;
  var t15;
  var t16;
  var div1;
  var t17;
  var t18;
  var t19;
  var t20;
  var pre;
  var t21;
  var t22;
  var current;
  var button0 = new Button({
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
  button0.$on("click",
  /*click_handler*/
  ctx[1]);
  var button1 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[2]);
  var button2 = new Button({
    props: {
      disabled: true,
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_2*/
  ctx[3]);
  var button3 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click",
  /*click_handler_3*/
  ctx[4]);
  var button4 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click",
  /*click_handler_4*/
  ctx[5]);
  var button5 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click",
  /*click_handler_5*/
  ctx[6]);
  var button6 = new Button({
    props: {
      dense: true,
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button6.$on("click",
  /*click_handler_6*/
  ctx[7]);
  var button7 = new Button({
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
  button7.$on("click",
  /*click_handler_7*/
  ctx[8]);
  var fab0 = new Fab({
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
  fab0.$on("click",
  /*click_handler_8*/
  ctx[9]);
  var fab1 = new Fab({
    props: {
      color: "primary",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab1.$on("click",
  /*click_handler_9*/
  ctx[10]);
  var fab2 = new Fab({
    props: {
      mini: true,
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab2.$on("click",
  /*click_handler_10*/
  ctx[11]);
  var fab3 = new Fab({
    props: {
      extended: true,
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab3.$on("click",
  /*click_handler_11*/
  ctx[12]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Theme");
      t2 = space();
      p = element("p");
      t3 = text("SMUI themes are usually provided by a ");
      code0 = element("code");
      t4 = text("_smui-theme.scss");
      t5 = text(" file in\n    a directory that is included in the ");
      code1 = element("code");
      t6 = text("includePaths");
      t7 = text(" of your Sass\n    config. That file is mandatory, but it can contain nothing, if you want the\n    default theme. This demo shows how to theme a portion of the app\n    differently.");
      t8 = space();
      div0 = element("div");
      create_component(button0.$$.fragment);
      t9 = space();
      create_component(button1.$$.fragment);
      t10 = space();
      create_component(button2.$$.fragment);
      t11 = space();
      create_component(button3.$$.fragment);
      t12 = space();
      create_component(button4.$$.fragment);
      t13 = space();
      create_component(button5.$$.fragment);
      t14 = space();
      create_component(button6.$$.fragment);
      t15 = space();
      create_component(button7.$$.fragment);
      t16 = space();
      div1 = element("div");
      create_component(fab0.$$.fragment);
      t17 = space();
      create_component(fab1.$$.fragment);
      t18 = space();
      create_component(fab2.$$.fragment);
      t19 = space();
      create_component(fab3.$$.fragment);
      t20 = space();
      pre = element("pre");
      t21 = text("Clicked: ");
      t22 = text(
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
      t1 = claim_text(h2_nodes, "Theme");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      p = claim_element(section_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "SMUI themes are usually provided by a ");
      code0 = claim_element(p_nodes, "CODE", {
        class: true
      });
      var code0_nodes = children(code0);
      t4 = claim_text(code0_nodes, "_smui-theme.scss");
      code0_nodes.forEach(detach_dev);
      t5 = claim_text(p_nodes, " file in\n    a directory that is included in the ");
      code1 = claim_element(p_nodes, "CODE", {
        class: true
      });
      var code1_nodes = children(code1);
      t6 = claim_text(code1_nodes, "includePaths");
      code1_nodes.forEach(detach_dev);
      t7 = claim_text(p_nodes, " of your Sass\n    config. That file is mandatory, but it can contain nothing, if you want the\n    default theme. This demo shows how to theme a portion of the app\n    differently.");
      p_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(button0.$$.fragment, div0_nodes);
      t9 = claim_space(div0_nodes);
      claim_component(button1.$$.fragment, div0_nodes);
      t10 = claim_space(div0_nodes);
      claim_component(button2.$$.fragment, div0_nodes);
      t11 = claim_space(div0_nodes);
      claim_component(button3.$$.fragment, div0_nodes);
      t12 = claim_space(div0_nodes);
      claim_component(button4.$$.fragment, div0_nodes);
      t13 = claim_space(div0_nodes);
      claim_component(button5.$$.fragment, div0_nodes);
      t14 = claim_space(div0_nodes);
      claim_component(button6.$$.fragment, div0_nodes);
      t15 = claim_space(div0_nodes);
      claim_component(button7.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(fab0.$$.fragment, div1_nodes);
      t17 = claim_space(div1_nodes);
      claim_component(fab1.$$.fragment, div1_nodes);
      t18 = claim_space(div1_nodes);
      claim_component(fab2.$$.fragment, div1_nodes);
      t19 = claim_space(div1_nodes);
      claim_component(fab3.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t20 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t21 = claim_text(pre_nodes, "Clicked: ");
      t22 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Theme - SMUI";
      attr_dev(h2, "class", "svelte-op0b4v");
      add_location(h2, file, 5, 2, 99);
      attr_dev(code0, "class", "svelte-op0b4v");
      add_location(code0, file, 8, 42, 163);
      attr_dev(code1, "class", "svelte-op0b4v");
      add_location(code1, file, 9, 40, 241);
      attr_dev(p, "class", "svelte-op0b4v");
      add_location(p, file, 7, 2, 117);
      attr_dev(div0, "class", "svelte-op0b4v");
      add_location(div0, file, 15, 2, 456);
      attr_dev(div1, "class", "svelte-op0b4v");
      add_location(div1, file, 26, 2, 1177);
      attr_dev(pre, "class", "status svelte-op0b4v");
      add_location(pre, file, 33, 2, 1596);
      attr_dev(section, "class", "demo-special-theme svelte-op0b4v");
      add_location(section, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, p);
      append_dev(p, t3);
      append_dev(p, code0);
      append_dev(code0, t4);
      append_dev(p, t5);
      append_dev(p, code1);
      append_dev(code1, t6);
      append_dev(p, t7);
      append_dev(section, t8);
      append_dev(section, div0);
      mount_component(button0, div0, null);
      append_dev(div0, t9);
      mount_component(button1, div0, null);
      append_dev(div0, t10);
      mount_component(button2, div0, null);
      append_dev(div0, t11);
      mount_component(button3, div0, null);
      append_dev(div0, t12);
      mount_component(button4, div0, null);
      append_dev(div0, t13);
      mount_component(button5, div0, null);
      append_dev(div0, t14);
      mount_component(button6, div0, null);
      append_dev(div0, t15);
      mount_component(button7, div0, null);
      append_dev(section, t16);
      append_dev(section, div1);
      mount_component(fab0, div1, null);
      append_dev(div1, t17);
      mount_component(fab1, div1, null);
      append_dev(div1, t18);
      mount_component(fab2, div1, null);
      append_dev(div1, t19);
      mount_component(fab3, div1, null);
      append_dev(section, t20);
      append_dev(section, pre);
      append_dev(pre, t21);
      append_dev(pre, t22);
      current = true;
    },
    p: function update(ctx, dirty) {
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
      var button6_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button6.$set(button6_changes);
      var button7_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button7.$set(button7_changes);
      var fab0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        fab0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab0.$set(fab0_changes);
      var fab1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        fab1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab1.$set(fab1_changes);
      var fab2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        fab2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab2.$set(fab2_changes);
      var fab3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        fab3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab3.$set(fab3_changes);
      if (!current || dirty[0] &
      /*clicked*/
      1) set_data_dev(t22,
      /*clicked*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      transition_in(button6.$$.fragment, local);
      transition_in(button7.$$.fragment, local);
      transition_in(fab0.$$.fragment, local);
      transition_in(fab1.$$.fragment, local);
      transition_in(fab2.$$.fragment, local);
      transition_in(fab3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      transition_out(button6.$$.fragment, local);
      transition_out(button7.$$.fragment, local);
      transition_out(fab0.$$.fragment, local);
      transition_out(fab1.$$.fragment, local);
      transition_out(fab2.$$.fragment, local);
      transition_out(fab3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
      destroy_component(button5);
      destroy_component(button6);
      destroy_component(button7);
      destroy_component(fab0);
      destroy_component(fab1);
      destroy_component(fab2);
      destroy_component(fab3);
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

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
  };

  return [clicked, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, click_handler_6, click_handler_7, click_handler_8, click_handler_9, click_handler_10, click_handler_11];
}

var Theme =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Theme, _SvelteComponentDev);

  function Theme(options) {
    var _this;

    _classCallCheck(this, Theme);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Theme).call(this, options));
    if (!document.getElementById("svelte-op0b4v-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Theme",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Theme;
}(SvelteComponentDev);

export default Theme;
