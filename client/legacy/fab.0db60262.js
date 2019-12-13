import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, M as space, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, l as add_location, O as attr_dev, m as insert_dev, K as mount_component, $ as set_data_dev, t as transition_in, u as transition_out, L as destroy_component, F as binding_callbacks, H as bind, Q as add_flush_callback } from './index.0812fa32.js';
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
import { L as Label } from './Label.cdd98476.js';
import { I as Icon } from './Icon.e7ebcf54.js';
import '@babel/runtime/regenerator';
import { C as Checkbox } from './index.4e1eb8c9.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.4b041a46.js';
import { F as Fab } from './Fab.4ad4bb51.js';

var css = ".mdc-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;transition:box-shadow .28s cubic-bezier(.4,0,.2,1),opacity 15ms linear 30ms,transform .27s cubic-bezier(0,0,.2,1) 0ms;background-color:#676778;color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:focus,.mdc-fab:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align:auto){.mdc-fab{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}.mdc-fab--extended .mdc-fab__icon[dir=rtl],.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,[dir=rtl] .mdc-fab--extended .mdc-fab__icon{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl],[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:-8px;margin-right:12px}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-fab__icon{transition:transform .18s cubic-bezier(0,0,.2,1) 90ms;fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear .15s,transform .18s cubic-bezier(.4,0,1,1) 0ms}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms cubic-bezier(.4,0,1,1) 0ms}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-fab{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-fab:after,.mdc-fab:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-fab.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-fab:after,.mdc-fab:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-fab:after,.mdc-fab:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-fab:after,.mdc-fab:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.mdc-fab:hover:before{opacity:.08}.mdc-fab.mdc-ripple-upgraded--background-focused:before,.mdc-fab:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-fab:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-fab--color-primary{background-color:#ff3e00;color:#fff;color:var(--mdc-theme-on-primary,#fff)}@supports not (-ms-ime-align:auto){.smui-fab--color-primary{background-color:var(--mdc-theme-primary,#ff3e00)}}.smui-fab--color-primary:after,.smui-fab--color-primary:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-fab--color-primary:after,.smui-fab--color-primary:before{background-color:var(--mdc-theme-on-primary,#fff)}}.smui-fab--color-primary:hover:before{opacity:.08}.smui-fab--color-primary.mdc-ripple-upgraded--background-focused:before,.smui-fab--color-primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-fab--color-primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-fab--color-primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-fab--color-primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}";
styleInject(css);

var file = "src/routes/demo/fab.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1be9eu5-style";
  style.textContent = ".flexy.svelte-1be9eu5{display:flex;align-items:center}.margins.svelte-1be9eu5{margin:0 .4em .4em 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmFiLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5GbG9hdGluZyBBY3Rpb24gQnV0dG9uIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkZsb2F0aW5nIEFjdGlvbiBCdXR0b248L2gyPlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4eVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gICAgICA8RmFiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48L0ZhYj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFyZ2luc1wiPlxuICAgICAgPEZhYiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBtaW5pPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48L0ZhYj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFyZ2luc1wiPlxuICAgICAgPEZhYiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBleHRlbmRlZD48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PExhYmVsPkV4dGVuZGVkPC9MYWJlbD48L0ZhYj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFyZ2luc1wiPlxuICAgICAgPEZhYiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBleHRlbmRlZCByaXBwbGU9e2ZhbHNlfT48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PExhYmVsPk5vIFJpcHBsZTwvTGFiZWw+PC9GYWI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgICAgIDxGYWIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZXh0ZW5kZWQ+PExhYmVsPkV4dGVuZGVkIFcvbyBJY29uPC9MYWJlbD48L0ZhYj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZsZXh5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgICAgIDxGYWIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30ge2V4aXRlZH0+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjwvRmFiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gICAgICA8Rm9ybUZpZWxkPlxuICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtleGl0ZWR9IC8+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkV4aXRlZDwvc3Bhbj5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICBQcmltYXJ5IGNvbG9yOiA8YnIgLz5cblxuICA8ZGl2IGNsYXNzPVwiZmxleHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWFyZ2luc1wiPlxuICAgICAgPEZhYiBjb2xvcj1cInByaW1hcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9GYWI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgICAgIDxGYWIgY29sb3I9XCJwcmltYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gbWluaT48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9GYWI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgICAgIDxGYWIgY29sb3I9XCJwcmltYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZXh0ZW5kZWQ+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjxMYWJlbD5FeHRlbmRlZDwvTGFiZWw+PC9GYWI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgICAgIDxGYWIgY29sb3I9XCJwcmltYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZXh0ZW5kZWQgcmlwcGxlPXtmYWxzZX0+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPjwvRmFiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGV4dGVuZGVkPjxMYWJlbD5FeHRlbmRlZCBXL28gSWNvbjwvTGFiZWw+PC9GYWI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4eVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGV4aXRlZD17ZXhpdGVkMn0+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjwvRmFiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gICAgICA8Rm9ybUZpZWxkPlxuICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtleGl0ZWQyfSAvPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5FeGl0ZWQ8L3NwYW4+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkfTwvcHJlPlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRmFiLCB7TGFiZWwsIEljb259IGZyb20gJ0BzbXVpL2ZhYic7XG4gIGltcG9ydCBGb3JtRmllbGQgZnJvbSAnQHNtdWkvZm9ybS1maWVsZCc7XG4gIGltcG9ydCBDaGVja2JveCBmcm9tICdAc211aS9jaGVja2JveCc7XG5cbiAgbGV0IGNsaWNrZWQgPSAwO1xuICBsZXQgZXhpdGVkID0gZmFsc2U7XG4gIGxldCBleGl0ZWQyID0gZmFsc2U7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuZmxleHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXJnaW5zIHtcbiAgICBtYXJnaW46IDAgLjRlbSAuNGVtIDA7XG4gIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GRSxNQUFNLGVBQUMsQ0FBQyxBQUNOLE9BQU8sQ0FBRSxJQUFJLENBQ2IsV0FBVyxDQUFFLE1BQU0sQUFDckIsQ0FBQyxBQUVELFFBQVEsZUFBQyxDQUFDLEFBQ1IsTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQUFDdkIsQ0FBQyJ9 */";
  append_dev(document.head, style);
} // (10:38) <Icon class="material-icons">


function create_default_slot_29(ctx) {
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
    id: create_default_slot_29.name,
    type: "slot",
    source: "(10:38) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (10:6) <Fab on:click={() => clicked++}>


function create_default_slot_28(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(10:6) <Fab on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (13:43) <Icon class="material-icons">


function create_default_slot_27(ctx) {
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
    id: create_default_slot_27.name,
    type: "slot",
    source: "(13:43) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (13:6) <Fab on:click={() => clicked++} mini>


function create_default_slot_26(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(13:6) <Fab on:click={() => clicked++} mini>",
    ctx: ctx
  });
  return block;
} // (16:47) <Icon class="material-icons">


function create_default_slot_25(ctx) {
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(16:47) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (16:91) <Label>


function create_default_slot_24(ctx) {
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
    id: create_default_slot_24.name,
    type: "slot",
    source: "(16:91) <Label>",
    ctx: ctx
  });
  return block;
} // (16:6) <Fab on:click={() => clicked++} extended>


function create_default_slot_23(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_25]
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
      131072) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
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
    id: create_default_slot_23.name,
    type: "slot",
    source: "(16:6) <Fab on:click={() => clicked++} extended>",
    ctx: ctx
  });
  return block;
} // (19:62) <Icon class="material-icons">


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
    source: "(19:62) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (19:106) <Label>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    source: "(19:106) <Label>",
    ctx: ctx
  });
  return block;
} // (19:6) <Fab on:click={() => clicked++} extended ripple={false}>


function create_default_slot_20(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_22]
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
      131072) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(19:6) <Fab on:click={() => clicked++} extended ripple={false}>",
    ctx: ctx
  });
  return block;
} // (22:47) <Label>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Extended W/o Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Extended W/o Icon");
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
    source: "(22:47) <Label>",
    ctx: ctx
  });
  return block;
} // (22:6) <Fab on:click={() => clicked++} extended>


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
      131072) {
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
    source: "(22:6) <Fab on:click={() => clicked++} extended>",
    ctx: ctx
  });
  return block;
} // (28:47) <Icon class="material-icons">


function create_default_slot_17(ctx) {
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(28:47) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (28:6) <Fab on:click={() => clicked++} {exited}>


function create_default_slot_16(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      131072) {
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(28:6) <Fab on:click={() => clicked++} {exited}>",
    ctx: ctx
  });
  return block;
} // (33:8) <span slot="label">


function create_label_slot_1(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Exited");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Exited");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 32, 8, 1118);
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
    id: create_label_slot_1.name,
    type: "slot",
    source: "(33:8) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (31:6) <FormField>


function create_default_slot_15(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding(value) {
    /*checkbox_checked_binding*/
    ctx[9].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*exited*/
  ctx[1] !== void 0) {
    checkbox_props.checked =
    /*exited*/
    ctx[1];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty[0] &
      /*exited*/
      2) {
        updating_checked = true;
        checkbox_changes.checked =
        /*exited*/
        ctx[1];
        add_flush_callback(function () {
          return updating_checked = false;
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
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(31:6) <FormField>",
    ctx: ctx
  });
  return block;
} // (42:54) <Icon class="material-icons">


function create_default_slot_14(ctx) {
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(42:54) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (42:6) <Fab color="primary" on:click={() => clicked++}>


function create_default_slot_13(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      131072) {
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
    id: create_default_slot_13.name,
    type: "slot",
    source: "(42:6) <Fab color=\\\"primary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (45:59) <Icon class="material-icons">


function create_default_slot_12(ctx) {
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(45:59) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (45:6) <Fab color="primary" on:click={() => clicked++} mini>


function create_default_slot_11(ctx) {
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
      131072) {
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(45:6) <Fab color=\\\"primary\\\" on:click={() => clicked++} mini>",
    ctx: ctx
  });
  return block;
} // (48:63) <Icon class="material-icons">


function create_default_slot_10(ctx) {
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(48:63) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (48:107) <Label>


function create_default_slot_9(ctx) {
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(48:107) <Label>",
    ctx: ctx
  });
  return block;
} // (48:6) <Fab color="primary" on:click={() => clicked++} extended>


function create_default_slot_8(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_10]
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
      131072) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(48:6) <Fab color=\\\"primary\\\" on:click={() => clicked++} extended>",
    ctx: ctx
  });
  return block;
} // (51:78) <Icon class="material-icons">


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
    source: "(51:78) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (51:122) <Label>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    source: "(51:122) <Label>",
    ctx: ctx
  });
  return block;
} // (51:6) <Fab color="primary" on:click={() => clicked++} extended ripple={false}>


function create_default_slot_5(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_7]
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
      131072) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
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
    id: create_default_slot_5.name,
    type: "slot",
    source: "(51:6) <Fab color=\\\"primary\\\" on:click={() => clicked++} extended ripple={false}>",
    ctx: ctx
  });
  return block;
} // (54:63) <Label>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Extended W/o Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Extended W/o Icon");
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
    source: "(54:63) <Label>",
    ctx: ctx
  });
  return block;
} // (54:6) <Fab color="primary" on:click={() => clicked++} extended>


function create_default_slot_3(ctx) {
  var current;
  var label = new Label({
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
      131072) {
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(54:6) <Fab color=\\\"primary\\\" on:click={() => clicked++} extended>",
    ctx: ctx
  });
  return block;
} // (60:71) <Icon class="material-icons">


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
    source: "(60:71) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (60:6) <Fab color="primary" on:click={() => clicked++} exited={exited2}>


function create_default_slot_1(ctx) {
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
      131072) {
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(60:6) <Fab color=\\\"primary\\\" on:click={() => clicked++} exited={exited2}>",
    ctx: ctx
  });
  return block;
} // (65:8) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Exited");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Exited");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 64, 8, 2317);
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
    id: create_label_slot.name,
    type: "slot",
    source: "(65:8) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (63:6) <FormField>


function create_default_slot(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_1(value) {
    /*checkbox_checked_binding_1*/
    ctx[16].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*exited2*/
  ctx[2] !== void 0) {
    checkbox_props.checked =
    /*exited2*/
    ctx[2];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding_1);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty[0] &
      /*exited2*/
      4) {
        updating_checked = true;
        checkbox_changes.checked =
        /*exited2*/
        ctx[2];
        add_flush_callback(function () {
          return updating_checked = false;
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
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(63:6) <FormField>",
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
  var div5;
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
  var div8;
  var div6;
  var t8;
  var div7;
  var t9;
  var br;
  var t10;
  var div14;
  var div9;
  var t11;
  var div10;
  var t12;
  var div11;
  var t13;
  var div12;
  var t14;
  var div13;
  var t15;
  var div17;
  var div15;
  var t16;
  var div16;
  var t17;
  var pre;
  var t18;
  var t19;
  var current;
  var fab0 = new Fab({
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
  fab0.$on("click",
  /*click_handler*/
  ctx[3]);
  var fab1 = new Fab({
    props: {
      mini: true,
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab1.$on("click",
  /*click_handler_1*/
  ctx[4]);
  var fab2 = new Fab({
    props: {
      extended: true,
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab2.$on("click",
  /*click_handler_2*/
  ctx[5]);
  var fab3 = new Fab({
    props: {
      extended: true,
      ripple: false,
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab3.$on("click",
  /*click_handler_3*/
  ctx[6]);
  var fab4 = new Fab({
    props: {
      extended: true,
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab4.$on("click",
  /*click_handler_4*/
  ctx[7]);
  var fab5 = new Fab({
    props: {
      exited:
      /*exited*/
      ctx[1],
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab5.$on("click",
  /*click_handler_5*/
  ctx[8]);
  var formfield0 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_15],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var fab6 = new Fab({
    props: {
      color: "primary",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab6.$on("click",
  /*click_handler_6*/
  ctx[10]);
  var fab7 = new Fab({
    props: {
      color: "primary",
      mini: true,
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab7.$on("click",
  /*click_handler_7*/
  ctx[11]);
  var fab8 = new Fab({
    props: {
      color: "primary",
      extended: true,
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab8.$on("click",
  /*click_handler_8*/
  ctx[12]);
  var fab9 = new Fab({
    props: {
      color: "primary",
      extended: true,
      ripple: false,
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab9.$on("click",
  /*click_handler_9*/
  ctx[13]);
  var fab10 = new Fab({
    props: {
      color: "primary",
      extended: true,
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab10.$on("click",
  /*click_handler_10*/
  ctx[14]);
  var fab11 = new Fab({
    props: {
      color: "primary",
      exited:
      /*exited2*/
      ctx[2],
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  fab11.$on("click",
  /*click_handler_11*/
  ctx[15]);
  var formfield1 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot],
        label: [create_label_slot]
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
      t1 = text("Floating Action Button");
      t2 = space();
      div5 = element("div");
      div0 = element("div");
      create_component(fab0.$$.fragment);
      t3 = space();
      div1 = element("div");
      create_component(fab1.$$.fragment);
      t4 = space();
      div2 = element("div");
      create_component(fab2.$$.fragment);
      t5 = space();
      div3 = element("div");
      create_component(fab3.$$.fragment);
      t6 = space();
      div4 = element("div");
      create_component(fab4.$$.fragment);
      t7 = space();
      div8 = element("div");
      div6 = element("div");
      create_component(fab5.$$.fragment);
      t8 = space();
      div7 = element("div");
      create_component(formfield0.$$.fragment);
      t9 = text("\n\n  Primary color: ");
      br = element("br");
      t10 = space();
      div14 = element("div");
      div9 = element("div");
      create_component(fab6.$$.fragment);
      t11 = space();
      div10 = element("div");
      create_component(fab7.$$.fragment);
      t12 = space();
      div11 = element("div");
      create_component(fab8.$$.fragment);
      t13 = space();
      div12 = element("div");
      create_component(fab9.$$.fragment);
      t14 = space();
      div13 = element("div");
      create_component(fab10.$$.fragment);
      t15 = space();
      div17 = element("div");
      div15 = element("div");
      create_component(fab11.$$.fragment);
      t16 = space();
      div16 = element("div");
      create_component(formfield1.$$.fragment);
      t17 = space();
      pre = element("pre");
      t18 = text("Clicked: ");
      t19 = text(
      /*clicked*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Floating Action Button");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(fab0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(fab1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(fab2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(fab3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(fab4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div8 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div6 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      claim_component(fab5.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t8 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      claim_component(formfield0.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t9 = claim_text(section_nodes, "\n\n  Primary color: ");
      br = claim_element(section_nodes, "BR", {});
      t10 = claim_space(section_nodes);
      div14 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      div9 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      claim_component(fab6.$$.fragment, div9_nodes);
      div9_nodes.forEach(detach_dev);
      t11 = claim_space(div14_nodes);
      div10 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      claim_component(fab7.$$.fragment, div10_nodes);
      div10_nodes.forEach(detach_dev);
      t12 = claim_space(div14_nodes);
      div11 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      claim_component(fab8.$$.fragment, div11_nodes);
      div11_nodes.forEach(detach_dev);
      t13 = claim_space(div14_nodes);
      div12 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      claim_component(fab9.$$.fragment, div12_nodes);
      div12_nodes.forEach(detach_dev);
      t14 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      claim_component(fab10.$$.fragment, div13_nodes);
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      div17 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      div15 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      claim_component(fab11.$$.fragment, div15_nodes);
      div15_nodes.forEach(detach_dev);
      t16 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      claim_component(formfield1.$$.fragment, div16_nodes);
      div16_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      t17 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t18 = claim_text(pre_nodes, "Clicked: ");
      t19 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Floating Action Button - SMUI";
      add_location(h2, file, 5, 2, 89);
      attr_dev(div0, "class", "margins svelte-1be9eu5");
      add_location(div0, file, 8, 4, 148);
      attr_dev(div1, "class", "margins svelte-1be9eu5");
      add_location(div1, file, 11, 4, 274);
      attr_dev(div2, "class", "margins svelte-1be9eu5");
      add_location(div2, file, 14, 4, 405);
      attr_dev(div3, "class", "margins svelte-1be9eu5");
      add_location(div3, file, 17, 4, 563);
      attr_dev(div4, "class", "margins svelte-1be9eu5");
      add_location(div4, file, 20, 4, 737);
      attr_dev(div5, "class", "flexy svelte-1be9eu5");
      add_location(div5, file, 7, 2, 124);
      attr_dev(div6, "class", "margins svelte-1be9eu5");
      add_location(div6, file, 26, 4, 892);
      attr_dev(div7, "class", "margins svelte-1be9eu5");
      add_location(div7, file, 29, 4, 1027);
      attr_dev(div8, "class", "flexy svelte-1be9eu5");
      add_location(div8, file, 25, 2, 868);
      add_location(br, file, 37, 17, 1208);
      attr_dev(div9, "class", "margins svelte-1be9eu5");
      add_location(div9, file, 40, 4, 1242);
      attr_dev(div10, "class", "margins svelte-1be9eu5");
      add_location(div10, file, 43, 4, 1384);
      attr_dev(div11, "class", "margins svelte-1be9eu5");
      add_location(div11, file, 46, 4, 1531);
      attr_dev(div12, "class", "margins svelte-1be9eu5");
      add_location(div12, file, 49, 4, 1705);
      attr_dev(div13, "class", "margins svelte-1be9eu5");
      add_location(div13, file, 52, 4, 1895);
      attr_dev(div14, "class", "flexy svelte-1be9eu5");
      add_location(div14, file, 39, 2, 1218);
      attr_dev(div15, "class", "margins svelte-1be9eu5");
      add_location(div15, file, 58, 4, 2066);
      attr_dev(div16, "class", "margins svelte-1be9eu5");
      add_location(div16, file, 61, 4, 2225);
      attr_dev(div17, "class", "flexy svelte-1be9eu5");
      add_location(div17, file, 57, 2, 2042);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 69, 2, 2392);
      add_location(section, file, 4, 0, 77);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div5);
      append_dev(div5, div0);
      mount_component(fab0, div0, null);
      append_dev(div5, t3);
      append_dev(div5, div1);
      mount_component(fab1, div1, null);
      append_dev(div5, t4);
      append_dev(div5, div2);
      mount_component(fab2, div2, null);
      append_dev(div5, t5);
      append_dev(div5, div3);
      mount_component(fab3, div3, null);
      append_dev(div5, t6);
      append_dev(div5, div4);
      mount_component(fab4, div4, null);
      append_dev(section, t7);
      append_dev(section, div8);
      append_dev(div8, div6);
      mount_component(fab5, div6, null);
      append_dev(div8, t8);
      append_dev(div8, div7);
      mount_component(formfield0, div7, null);
      append_dev(section, t9);
      append_dev(section, br);
      append_dev(section, t10);
      append_dev(section, div14);
      append_dev(div14, div9);
      mount_component(fab6, div9, null);
      append_dev(div14, t11);
      append_dev(div14, div10);
      mount_component(fab7, div10, null);
      append_dev(div14, t12);
      append_dev(div14, div11);
      mount_component(fab8, div11, null);
      append_dev(div14, t13);
      append_dev(div14, div12);
      mount_component(fab9, div12, null);
      append_dev(div14, t14);
      append_dev(div14, div13);
      mount_component(fab10, div13, null);
      append_dev(section, t15);
      append_dev(section, div17);
      append_dev(div17, div15);
      mount_component(fab11, div15, null);
      append_dev(div17, t16);
      append_dev(div17, div16);
      mount_component(formfield1, div16, null);
      append_dev(section, t17);
      append_dev(section, pre);
      append_dev(pre, t18);
      append_dev(pre, t19);
      current = true;
    },
    p: function update(ctx, dirty) {
      var fab0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab0.$set(fab0_changes);
      var fab1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab1.$set(fab1_changes);
      var fab2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab2.$set(fab2_changes);
      var fab3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab3.$set(fab3_changes);
      var fab4_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab4.$set(fab4_changes);
      var fab5_changes = {};
      if (dirty[0] &
      /*exited*/
      2) fab5_changes.exited =
      /*exited*/
      ctx[1];

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab5.$set(fab5_changes);
      var formfield0_changes = {};

      if (dirty[0] &
      /*$$scope, exited*/
      131074) {
        formfield0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield0.$set(formfield0_changes);
      var fab6_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab6.$set(fab6_changes);
      var fab7_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab7.$set(fab7_changes);
      var fab8_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab8.$set(fab8_changes);
      var fab9_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab9.$set(fab9_changes);
      var fab10_changes = {};

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab10.$set(fab10_changes);
      var fab11_changes = {};
      if (dirty[0] &
      /*exited2*/
      4) fab11_changes.exited =
      /*exited2*/
      ctx[2];

      if (dirty[0] &
      /*$$scope*/
      131072) {
        fab11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      fab11.$set(fab11_changes);
      var formfield1_changes = {};

      if (dirty[0] &
      /*$$scope, exited2*/
      131076) {
        formfield1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield1.$set(formfield1_changes);
      if (!current || dirty[0] &
      /*clicked*/
      1) set_data_dev(t19,
      /*clicked*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(fab0.$$.fragment, local);
      transition_in(fab1.$$.fragment, local);
      transition_in(fab2.$$.fragment, local);
      transition_in(fab3.$$.fragment, local);
      transition_in(fab4.$$.fragment, local);
      transition_in(fab5.$$.fragment, local);
      transition_in(formfield0.$$.fragment, local);
      transition_in(fab6.$$.fragment, local);
      transition_in(fab7.$$.fragment, local);
      transition_in(fab8.$$.fragment, local);
      transition_in(fab9.$$.fragment, local);
      transition_in(fab10.$$.fragment, local);
      transition_in(fab11.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(fab0.$$.fragment, local);
      transition_out(fab1.$$.fragment, local);
      transition_out(fab2.$$.fragment, local);
      transition_out(fab3.$$.fragment, local);
      transition_out(fab4.$$.fragment, local);
      transition_out(fab5.$$.fragment, local);
      transition_out(formfield0.$$.fragment, local);
      transition_out(fab6.$$.fragment, local);
      transition_out(fab7.$$.fragment, local);
      transition_out(fab8.$$.fragment, local);
      transition_out(fab9.$$.fragment, local);
      transition_out(fab10.$$.fragment, local);
      transition_out(fab11.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(fab0);
      destroy_component(fab1);
      destroy_component(fab2);
      destroy_component(fab3);
      destroy_component(fab4);
      destroy_component(fab5);
      destroy_component(formfield0);
      destroy_component(fab6);
      destroy_component(fab7);
      destroy_component(fab8);
      destroy_component(fab9);
      destroy_component(fab10);
      destroy_component(fab11);
      destroy_component(formfield1);
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
  var exited = false;
  var exited2 = false;

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

  function checkbox_checked_binding(value) {
    exited = value;
    $$invalidate(1, exited);
  }

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

  function checkbox_checked_binding_1(value) {
    exited2 = value;
    $$invalidate(2, exited2);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
    if ("exited" in $$props) $$invalidate(1, exited = $$props.exited);
    if ("exited2" in $$props) $$invalidate(2, exited2 = $$props.exited2);
  };

  return [clicked, exited, exited2, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, checkbox_checked_binding, click_handler_6, click_handler_7, click_handler_8, click_handler_9, click_handler_10, click_handler_11, checkbox_checked_binding_1];
}

var Fab_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Fab_1, _SvelteComponentDev);

  function Fab_1(options) {
    var _this;

    _classCallCheck(this, Fab_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fab_1).call(this, options));
    if (!document.getElementById("svelte-1be9eu5-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Fab_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Fab_1;
}(SvelteComponentDev);

export default Fab_1;
