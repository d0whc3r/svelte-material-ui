import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, M as space, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, l as add_location, O as attr_dev, Z as set_style, m as insert_dev, K as mount_component, t as transition_in, u as transition_out, L as destroy_component, F as binding_callbacks, H as bind, Q as add_flush_callback } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import { T as TopAppBar, R as Row, S as Section, a as Title } from './index.d88768fb.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/typeof';
import '@babel/runtime/helpers/esm/toConsumableArray';
import './useActions.03a18d11.js';
import '@babel/runtime/helpers/esm/construct';
import './Div.d97c12da.js';
import './Span.f3477293.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Icon.e7ebcf54.js';
import { I as IconButton } from './index.15f8a983.js';
import '@babel/runtime/regenerator';
import { L as LoremIpsum } from './LoremIpsum.b3fca55b.js';
import { C as Checkbox } from './index.4e1eb8c9.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.4b041a46.js';

var file = "src/routes/demo/top-app-bar.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-co7g2h-style";
  style.textContent = ".top-app-bar-container.svelte-co7g2h,.top-app-bar-iframe.svelte-co7g2h{max-width:480px;min-width:480px;height:320px;border:1px solid rgba(0,0,0,.1);margin:0 18px 18px 0}.top-app-bar-container.svelte-co7g2h{overflow:auto;display:inline-block}.flexy.svelte-co7g2h{display:flex;flex-wrap:wrap}.flexor.svelte-co7g2h{display:inline-flex;flex-direction:column}.flexor-content.svelte-co7g2h{flex-basis:0;height:0;flex-grow:1;overflow:auto}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWFwcC1iYXIuc3ZlbHRlIiwic291cmNlcyI6WyJ0b3AtYXBwLWJhci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+VG9wIEFwcCBCYXIgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+VG9wIEFwcCBCYXI8L2gyPlxuXG4gIDxkaXY+XG4gICAgPEZvcm1GaWVsZD5cbiAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3Byb21pbmVudH0gLz5cbiAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlByb21pbmVudDwvc3Bhbj5cbiAgICA8L0Zvcm1GaWVsZD5cbiAgICA8Rm9ybUZpZWxkPlxuICAgICAgPENoZWNrYm94IGJpbmQ6Y2hlY2tlZD17ZGVuc2V9IC8+XG4gICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5EZW5zZTwvc3Bhbj5cbiAgICA8L0Zvcm1GaWVsZD5cbiAgICA8Rm9ybUZpZWxkPlxuICAgICAgPENoZWNrYm94IGJpbmQ6Y2hlY2tlZD17c2Vjb25kYXJ5Q29sb3J9IC8+XG4gICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5TZWNvbmRhcnk8L3NwYW4+XG4gICAgPC9Gb3JtRmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4eVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3AtYXBwLWJhci1jb250YWluZXJcIj5cbiAgICAgIDxUb3BBcHBCYXIgdmFyaWFudD1cInN0YXRpY1wiIHtwcm9taW5lbnR9IHtkZW5zZX0gY29sb3I9e3NlY29uZGFyeUNvbG9yID8gJ3NlY29uZGFyeScgOiAncHJpbWFyeSd9PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8VGl0bGU+U3RhdGljPC9UaXRsZT5cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgPFNlY3Rpb24gYWxpZ249XCJlbmRcIiB0b29sYmFyPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtbGFiZWw9XCJEb3dubG9hZFwiPmZpbGVfZG93bmxvYWQ8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1sYWJlbD1cIlByaW50IHRoaXMgcGFnZVwiPnByaW50PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtbGFiZWw9XCJCb29rbWFyayB0aGlzIHBhZ2VcIj5ib29rbWFyazwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Ub3BBcHBCYXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TG9yZW1JcHN1bSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidG9wLWFwcC1iYXItY29udGFpbmVyIGZsZXhvclwiPlxuICAgICAgPFRvcEFwcEJhciB2YXJpYW50PVwic3RhdGljXCIge3Byb21pbmVudH0ge2RlbnNlfSBjb2xvcj17c2Vjb25kYXJ5Q29sb3IgPyAnc2Vjb25kYXJ5JyA6ICdwcmltYXJ5J30+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxUaXRsZT5GbGV4IFN0YXRpYzwvVGl0bGU+XG4gICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgIDxTZWN0aW9uIGFsaWduPVwiZW5kXCIgdG9vbGJhcj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBhcmlhLWxhYmVsPVwiRG93bmxvYWRcIj5maWxlX2Rvd25sb2FkPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtbGFiZWw9XCJQcmludCB0aGlzIHBhZ2VcIj5wcmludDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBhcmlhLWxhYmVsPVwiQm9va21hcmsgdGhpcyBwYWdlXCI+Ym9va21hcms8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvVG9wQXBwQmFyPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhvci1jb250ZW50XCI+XG4gICAgICAgIDxMb3JlbUlwc3VtIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGlmcmFtZSBjbGFzcz1cInRvcC1hcHAtYmFyLWlmcmFtZVwiIHNyYz1cIi9kZW1vL3RvcC1hcHAtYmFyLWlmcmFtZVwiIHRpdGxlPVwic3RhbmRhcmRcIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPjwvaWZyYW1lPlxuICA8YSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgaHJlZj1cIi9kZW1vL3RvcC1hcHAtYmFyLWlmcmFtZVwiPmhlbHBlciBuZWVkZWQgZm9yIHNhcHBlciBleHBvcnQ8L2E+XG5cbiAgPGlmcmFtZSBjbGFzcz1cInRvcC1hcHAtYmFyLWlmcmFtZVwiIHNyYz1cIi9kZW1vL3RvcC1hcHAtYmFyLWlmcmFtZT9zdHlsZT1maXhlZFwiIHRpdGxlPVwiZml4ZWRcIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPjwvaWZyYW1lPlxuXG4gIDxpZnJhbWUgY2xhc3M9XCJ0b3AtYXBwLWJhci1pZnJhbWVcIiBzcmM9XCIvZGVtby90b3AtYXBwLWJhci1pZnJhbWU/c3R5bGU9ZGVuc2VcIiB0aXRsZT1cImRlbnNlXCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj48L2lmcmFtZT5cblxuICA8aWZyYW1lIGNsYXNzPVwidG9wLWFwcC1iYXItaWZyYW1lXCIgc3JjPVwiL2RlbW8vdG9wLWFwcC1iYXItaWZyYW1lP3N0eWxlPXByb21pbmVudFwiIHRpdGxlPVwicHJvbWluZW50XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj48L2lmcmFtZT5cblxuICA8aWZyYW1lIGNsYXNzPVwidG9wLWFwcC1iYXItaWZyYW1lXCIgc3JjPVwiL2RlbW8vdG9wLWFwcC1iYXItaWZyYW1lP3N0eWxlPXNob3J0XCIgdGl0bGU9XCJzaG9ydFwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+PC9pZnJhbWU+XG5cbiAgPGlmcmFtZSBjbGFzcz1cInRvcC1hcHAtYmFyLWlmcmFtZVwiIHNyYz1cIi9kZW1vL3RvcC1hcHAtYmFyLWlmcmFtZT9zdHlsZT1zaG9ydC1jbG9zZWRcIiB0aXRsZT1cInNob3J0IGNsb3NlZFwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+PC9pZnJhbWU+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUb3BBcHBCYXIsIHtSb3csIFNlY3Rpb24sIFRpdGxlfSBmcm9tICdAc211aS90b3AtYXBwLWJhcic7XG4gIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BzbXVpL2ljb24tYnV0dG9uJztcbiAgaW1wb3J0IENoZWNrYm94IGZyb20gJ0BzbXVpL2NoZWNrYm94JztcbiAgaW1wb3J0IEZvcm1GaWVsZCBmcm9tICdAc211aS9mb3JtLWZpZWxkJztcbiAgaW1wb3J0IExvcmVtSXBzdW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb3JlbUlwc3VtLnN2ZWx0ZSc7XG5cbiAgbGV0IHByb21pbmVudCA9IGZhbHNlO1xuICBsZXQgZGVuc2UgPSBmYWxzZTtcbiAgbGV0IHNlY29uZGFyeUNvbG9yID0gZmFsc2U7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAudG9wLWFwcC1iYXItY29udGFpbmVyLCAudG9wLWFwcC1iYXItaWZyYW1lIHtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgIG1pbi13aWR0aDogNDgwcHg7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbiAgICBtYXJnaW46IDAgMThweCAxOHB4IDA7XG4gIH1cblxuICAudG9wLWFwcC1iYXItY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuZmxleHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmZsZXhvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5mbGV4b3ItY29udGVudCB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RkUsb0NBQXNCLENBQUUsbUJBQW1CLGNBQUMsQ0FBQyxBQUMzQyxTQUFTLENBQUUsS0FBSyxDQUNoQixTQUFTLENBQUUsS0FBSyxDQUNoQixNQUFNLENBQUUsS0FBSyxDQUNiLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2hDLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEFBQ3ZCLENBQUMsQUFFRCxzQkFBc0IsY0FBQyxDQUFDLEFBQ3RCLFFBQVEsQ0FBRSxJQUFJLENBQ2QsT0FBTyxDQUFFLFlBQVksQUFDdkIsQ0FBQyxBQUVELE1BQU0sY0FBQyxDQUFDLEFBQ04sT0FBTyxDQUFFLElBQUksQ0FDYixTQUFTLENBQUUsSUFBSSxBQUNqQixDQUFDLEFBRUQsT0FBTyxjQUFDLENBQUMsQUFDUCxPQUFPLENBQUUsV0FBVyxDQUNwQixjQUFjLENBQUUsTUFBTSxBQUN4QixDQUFDLEFBRUQsZUFBZSxjQUFDLENBQUMsQUFDZixVQUFVLENBQUUsQ0FBQyxDQUNiLE1BQU0sQ0FBRSxDQUFDLENBQ1QsU0FBUyxDQUFFLENBQUMsQ0FDWixRQUFRLENBQUUsSUFBSSxBQUNoQixDQUFDIn0= */";
  append_dev(document.head, style);
} // (11:6) <span slot="label">


function create_label_slot_2(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Prominent");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Prominent");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 10, 6, 174);
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
    id: create_label_slot_2.name,
    type: "slot",
    source: "(11:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField>


function create_default_slot_20(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding(value) {
    /*checkbox_checked_binding*/
    ctx[3].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*prominent*/
  ctx[0] !== void 0) {
    checkbox_props.checked =
    /*prominent*/
    ctx[0];
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
      /*prominent*/
      1) {
        updating_checked = true;
        checkbox_changes.checked =
        /*prominent*/
        ctx[0];
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(9:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (15:6) <span slot="label">


function create_label_slot_1(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Dense");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Dense");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 14, 6, 289);
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
    source: "(15:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (13:4) <FormField>


function create_default_slot_19(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_1(value) {
    /*checkbox_checked_binding_1*/
    ctx[4].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*dense*/
  ctx[1] !== void 0) {
    checkbox_props.checked =
    /*dense*/
    ctx[1];
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
      /*dense*/
      2) {
        updating_checked = true;
        checkbox_changes.checked =
        /*dense*/
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(13:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (19:6) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Secondary");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Secondary");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 18, 6, 409);
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
    source: "(19:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (17:4) <FormField>


function create_default_slot_18(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_2(value) {
    /*checkbox_checked_binding_2*/
    ctx[5].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*secondaryColor*/
  ctx[2] !== void 0) {
    checkbox_props.checked =
    /*secondaryColor*/
    ctx[2];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding_2);
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
      /*secondaryColor*/
      4) {
        updating_checked = true;
        checkbox_changes.checked =
        /*secondaryColor*/
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
    id: create_default_slot_18.name,
    type: "slot",
    source: "(17:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (28:12) <IconButton class="material-icons">


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("menu");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "menu");
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
    source: "(28:12) <IconButton class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (29:12) <Title>


function create_default_slot_16(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Static");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Static");
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
    source: "(29:12) <Title>",
    ctx: ctx
  });
  return block;
} // (27:10) <Section>


function create_default_slot_15(ctx) {
  var t;
  var current;
  var iconbutton = new IconButton({
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
  var title = new Title({
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
      create_component(iconbutton.$$.fragment);
      t = space();
      create_component(title.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(title.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(title, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
      var title_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(title.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(title.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
      if (detaching) detach_dev(t);
      destroy_component(title, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(27:10) <Section>",
    ctx: ctx
  });
  return block;
} // (32:12) <IconButton class="material-icons" aria-label="Download">


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("file_download");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "file_download");
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
    source: "(32:12) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Download\\\">",
    ctx: ctx
  });
  return block;
} // (33:12) <IconButton class="material-icons" aria-label="Print this page">


function create_default_slot_13(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("print");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "print");
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
    source: "(33:12) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Print this page\\\">",
    ctx: ctx
  });
  return block;
} // (34:12) <IconButton class="material-icons" aria-label="Bookmark this page">


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("bookmark");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "bookmark");
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
    source: "(34:12) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Bookmark this page\\\">",
    ctx: ctx
  });
  return block;
} // (31:10) <Section align="end" toolbar>


function create_default_slot_11(ctx) {
  var t0;
  var t1;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      class: "material-icons",
      "aria-label": "Download",
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      "aria-label": "Print this page",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      "aria-label": "Bookmark this page",
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
      64) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(31:10) <Section align=\\\"end\\\" toolbar>",
    ctx: ctx
  });
  return block;
} // (26:8) <Row>


function create_default_slot_10(ctx) {
  var t;
  var current;
  var section0 = new Section({
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
  var section1 = new Section({
    props: {
      align: "end",
      toolbar: true,
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
      create_component(section0.$$.fragment);
      t = space();
      create_component(section1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(section0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(section0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(section1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var section0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        section0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section0.$set(section0_changes);
      var section1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        section1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section1.$set(section1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(section0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(section1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(26:8) <Row>",
    ctx: ctx
  });
  return block;
} // (25:6) <TopAppBar variant="static" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}>


function create_default_slot_9(ctx) {
  var current;
  var row = new Row({
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
      64) {
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(25:6) <TopAppBar variant=\\\"static\\\" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}>",
    ctx: ctx
  });
  return block;
} // (47:12) <IconButton class="material-icons">


function create_default_slot_8(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("menu");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "menu");
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
    source: "(47:12) <IconButton class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (48:12) <Title>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Flex Static");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Flex Static");
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
    source: "(48:12) <Title>",
    ctx: ctx
  });
  return block;
} // (46:10) <Section>


function create_default_slot_6(ctx) {
  var t;
  var current;
  var iconbutton = new IconButton({
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
  var title = new Title({
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
      create_component(iconbutton.$$.fragment);
      t = space();
      create_component(title.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(title.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(title, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
      var title_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(title.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(title.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
      if (detaching) detach_dev(t);
      destroy_component(title, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(46:10) <Section>",
    ctx: ctx
  });
  return block;
} // (51:12) <IconButton class="material-icons" aria-label="Download">


function create_default_slot_5(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("file_download");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "file_download");
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
    id: create_default_slot_5.name,
    type: "slot",
    source: "(51:12) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Download\\\">",
    ctx: ctx
  });
  return block;
} // (52:12) <IconButton class="material-icons" aria-label="Print this page">


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("print");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "print");
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
    source: "(52:12) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Print this page\\\">",
    ctx: ctx
  });
  return block;
} // (53:12) <IconButton class="material-icons" aria-label="Bookmark this page">


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("bookmark");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "bookmark");
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
    source: "(53:12) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Bookmark this page\\\">",
    ctx: ctx
  });
  return block;
} // (50:10) <Section align="end" toolbar>


function create_default_slot_2(ctx) {
  var t0;
  var t1;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      class: "material-icons",
      "aria-label": "Download",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      "aria-label": "Print this page",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      "aria-label": "Bookmark this page",
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
      64) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
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
    source: "(50:10) <Section align=\\\"end\\\" toolbar>",
    ctx: ctx
  });
  return block;
} // (45:8) <Row>


function create_default_slot_1(ctx) {
  var t;
  var current;
  var section0 = new Section({
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
  var section1 = new Section({
    props: {
      align: "end",
      toolbar: true,
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
      create_component(section0.$$.fragment);
      t = space();
      create_component(section1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(section0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(section0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(section1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var section0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        section0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section0.$set(section0_changes);
      var section1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        section1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section1.$set(section1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(section0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(section1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(45:8) <Row>",
    ctx: ctx
  });
  return block;
} // (44:6) <TopAppBar variant="static" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}>


function create_default_slot(ctx) {
  var current;
  var row = new Row({
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
      64) {
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
    id: create_default_slot.name,
    type: "slot",
    source: "(44:6) <TopAppBar variant=\\\"static\\\" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}>",
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
  var div0;
  var t3;
  var t4;
  var t5;
  var div5;
  var div2;
  var t6;
  var div1;
  var t7;
  var div4;
  var t8;
  var div3;
  var t9;
  var iframe0;
  var iframe0_src_value;
  var t10;
  var a;
  var t11;
  var t12;
  var iframe1;
  var iframe1_src_value;
  var t13;
  var iframe2;
  var iframe2_src_value;
  var t14;
  var iframe3;
  var iframe3_src_value;
  var t15;
  var iframe4;
  var iframe4_src_value;
  var t16;
  var iframe5;
  var iframe5_src_value;
  var current;
  var formfield0 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_20],
        label: [create_label_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield1 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_19],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield2 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_18],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var topappbar0 = new TopAppBar({
    props: {
      variant: "static",
      prominent:
      /*prominent*/
      ctx[0],
      dense:
      /*dense*/
      ctx[1],
      color:
      /*secondaryColor*/
      ctx[2] ? "secondary" : "primary",
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var loremipsum0 = new LoremIpsum({
    $$inline: true
  });
  var topappbar1 = new TopAppBar({
    props: {
      variant: "static",
      prominent:
      /*prominent*/
      ctx[0],
      dense:
      /*dense*/
      ctx[1],
      color:
      /*secondaryColor*/
      ctx[2] ? "secondary" : "primary",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var loremipsum1 = new LoremIpsum({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Top App Bar");
      t2 = space();
      div0 = element("div");
      create_component(formfield0.$$.fragment);
      t3 = space();
      create_component(formfield1.$$.fragment);
      t4 = space();
      create_component(formfield2.$$.fragment);
      t5 = space();
      div5 = element("div");
      div2 = element("div");
      create_component(topappbar0.$$.fragment);
      t6 = space();
      div1 = element("div");
      create_component(loremipsum0.$$.fragment);
      t7 = space();
      div4 = element("div");
      create_component(topappbar1.$$.fragment);
      t8 = space();
      div3 = element("div");
      create_component(loremipsum1.$$.fragment);
      t9 = space();
      iframe0 = element("iframe");
      t10 = space();
      a = element("a");
      t11 = text("helper needed for sapper export");
      t12 = space();
      iframe1 = element("iframe");
      t13 = space();
      iframe2 = element("iframe");
      t14 = space();
      iframe3 = element("iframe");
      t15 = space();
      iframe4 = element("iframe");
      t16 = space();
      iframe5 = element("iframe");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Top App Bar");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(formfield0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(formfield1.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      claim_component(formfield2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(topappbar0.$$.fragment, div2_nodes);
      t6 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(loremipsum0.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(topappbar1.$$.fragment, div4_nodes);
      t8 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(loremipsum1.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      iframe0 = claim_element(section_nodes, "IFRAME", {
        class: true,
        src: true,
        title: true,
        width: true,
        height: true
      });
      children(iframe0).forEach(detach_dev);
      t10 = claim_space(section_nodes);
      a = claim_element(section_nodes, "A", {
        style: true,
        href: true
      });
      var a_nodes = children(a);
      t11 = claim_text(a_nodes, "helper needed for sapper export");
      a_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      iframe1 = claim_element(section_nodes, "IFRAME", {
        class: true,
        src: true,
        title: true,
        width: true,
        height: true
      });
      children(iframe1).forEach(detach_dev);
      t13 = claim_space(section_nodes);
      iframe2 = claim_element(section_nodes, "IFRAME", {
        class: true,
        src: true,
        title: true,
        width: true,
        height: true
      });
      children(iframe2).forEach(detach_dev);
      t14 = claim_space(section_nodes);
      iframe3 = claim_element(section_nodes, "IFRAME", {
        class: true,
        src: true,
        title: true,
        width: true,
        height: true
      });
      children(iframe3).forEach(detach_dev);
      t15 = claim_space(section_nodes);
      iframe4 = claim_element(section_nodes, "IFRAME", {
        class: true,
        src: true,
        title: true,
        width: true,
        height: true
      });
      children(iframe4).forEach(detach_dev);
      t16 = claim_space(section_nodes);
      iframe5 = claim_element(section_nodes, "IFRAME", {
        class: true,
        src: true,
        title: true,
        width: true,
        height: true
      });
      children(iframe5).forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Top App Bar - SMUI";
      add_location(h2, file, 5, 2, 78);
      add_location(div0, file, 7, 2, 102);
      add_location(div1, file, 37, 6, 1185);
      attr_dev(div2, "class", "top-app-bar-container svelte-co7g2h");
      add_location(div2, file, 23, 4, 498);
      attr_dev(div3, "class", "flexor-content svelte-co7g2h");
      add_location(div3, file, 56, 6, 1942);
      attr_dev(div4, "class", "top-app-bar-container flexor svelte-co7g2h");
      add_location(div4, file, 42, 4, 1243);
      attr_dev(div5, "class", "flexy svelte-co7g2h");
      add_location(div5, file, 22, 2, 474);
      attr_dev(iframe0, "class", "top-app-bar-iframe svelte-co7g2h");
      if (iframe0.src !== (iframe0_src_value = "/demo/top-app-bar-iframe")) attr_dev(iframe0, "src", iframe0_src_value);
      attr_dev(iframe0, "title", "standard");
      attr_dev(iframe0, "width", "480");
      attr_dev(iframe0, "height", "320");
      add_location(iframe0, file, 62, 2, 2030);
      set_style(a, "display", "none");
      attr_dev(a, "href", "/demo/top-app-bar-iframe");
      add_location(a, file, 63, 2, 2150);
      attr_dev(iframe1, "class", "top-app-bar-iframe svelte-co7g2h");
      if (iframe1.src !== (iframe1_src_value = "/demo/top-app-bar-iframe?style=fixed")) attr_dev(iframe1, "src", iframe1_src_value);
      attr_dev(iframe1, "title", "fixed");
      attr_dev(iframe1, "width", "480");
      attr_dev(iframe1, "height", "320");
      add_location(iframe1, file, 65, 2, 2247);
      attr_dev(iframe2, "class", "top-app-bar-iframe svelte-co7g2h");
      if (iframe2.src !== (iframe2_src_value = "/demo/top-app-bar-iframe?style=dense")) attr_dev(iframe2, "src", iframe2_src_value);
      attr_dev(iframe2, "title", "dense");
      attr_dev(iframe2, "width", "480");
      attr_dev(iframe2, "height", "320");
      add_location(iframe2, file, 67, 2, 2377);
      attr_dev(iframe3, "class", "top-app-bar-iframe svelte-co7g2h");
      if (iframe3.src !== (iframe3_src_value = "/demo/top-app-bar-iframe?style=prominent")) attr_dev(iframe3, "src", iframe3_src_value);
      attr_dev(iframe3, "title", "prominent");
      attr_dev(iframe3, "width", "480");
      attr_dev(iframe3, "height", "320");
      add_location(iframe3, file, 69, 2, 2507);
      attr_dev(iframe4, "class", "top-app-bar-iframe svelte-co7g2h");
      if (iframe4.src !== (iframe4_src_value = "/demo/top-app-bar-iframe?style=short")) attr_dev(iframe4, "src", iframe4_src_value);
      attr_dev(iframe4, "title", "short");
      attr_dev(iframe4, "width", "480");
      attr_dev(iframe4, "height", "320");
      add_location(iframe4, file, 71, 2, 2645);
      attr_dev(iframe5, "class", "top-app-bar-iframe svelte-co7g2h");
      if (iframe5.src !== (iframe5_src_value = "/demo/top-app-bar-iframe?style=short-closed")) attr_dev(iframe5, "src", iframe5_src_value);
      attr_dev(iframe5, "title", "short closed");
      attr_dev(iframe5, "width", "480");
      attr_dev(iframe5, "height", "320");
      add_location(iframe5, file, 73, 2, 2775);
      add_location(section, file, 4, 0, 66);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield0, div0, null);
      append_dev(div0, t3);
      mount_component(formfield1, div0, null);
      append_dev(div0, t4);
      mount_component(formfield2, div0, null);
      append_dev(section, t5);
      append_dev(section, div5);
      append_dev(div5, div2);
      mount_component(topappbar0, div2, null);
      append_dev(div2, t6);
      append_dev(div2, div1);
      mount_component(loremipsum0, div1, null);
      append_dev(div5, t7);
      append_dev(div5, div4);
      mount_component(topappbar1, div4, null);
      append_dev(div4, t8);
      append_dev(div4, div3);
      mount_component(loremipsum1, div3, null);
      append_dev(section, t9);
      append_dev(section, iframe0);
      append_dev(section, t10);
      append_dev(section, a);
      append_dev(a, t11);
      append_dev(section, t12);
      append_dev(section, iframe1);
      append_dev(section, t13);
      append_dev(section, iframe2);
      append_dev(section, t14);
      append_dev(section, iframe3);
      append_dev(section, t15);
      append_dev(section, iframe4);
      append_dev(section, t16);
      append_dev(section, iframe5);
      current = true;
    },
    p: function update(ctx, dirty) {
      var formfield0_changes = {};

      if (dirty[0] &
      /*$$scope, prominent*/
      65) {
        formfield0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield0.$set(formfield0_changes);
      var formfield1_changes = {};

      if (dirty[0] &
      /*$$scope, dense*/
      66) {
        formfield1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield1.$set(formfield1_changes);
      var formfield2_changes = {};

      if (dirty[0] &
      /*$$scope, secondaryColor*/
      68) {
        formfield2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield2.$set(formfield2_changes);
      var topappbar0_changes = {};
      if (dirty[0] &
      /*prominent*/
      1) topappbar0_changes.prominent =
      /*prominent*/
      ctx[0];
      if (dirty[0] &
      /*dense*/
      2) topappbar0_changes.dense =
      /*dense*/
      ctx[1];
      if (dirty[0] &
      /*secondaryColor*/
      4) topappbar0_changes.color =
      /*secondaryColor*/
      ctx[2] ? "secondary" : "primary";

      if (dirty[0] &
      /*$$scope*/
      64) {
        topappbar0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      topappbar0.$set(topappbar0_changes);
      var topappbar1_changes = {};
      if (dirty[0] &
      /*prominent*/
      1) topappbar1_changes.prominent =
      /*prominent*/
      ctx[0];
      if (dirty[0] &
      /*dense*/
      2) topappbar1_changes.dense =
      /*dense*/
      ctx[1];
      if (dirty[0] &
      /*secondaryColor*/
      4) topappbar1_changes.color =
      /*secondaryColor*/
      ctx[2] ? "secondary" : "primary";

      if (dirty[0] &
      /*$$scope*/
      64) {
        topappbar1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      topappbar1.$set(topappbar1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield0.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);
      transition_in(formfield2.$$.fragment, local);
      transition_in(topappbar0.$$.fragment, local);
      transition_in(loremipsum0.$$.fragment, local);
      transition_in(topappbar1.$$.fragment, local);
      transition_in(loremipsum1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield0.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      transition_out(formfield2.$$.fragment, local);
      transition_out(topappbar0.$$.fragment, local);
      transition_out(loremipsum0.$$.fragment, local);
      transition_out(topappbar1.$$.fragment, local);
      transition_out(loremipsum1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(formfield0);
      destroy_component(formfield1);
      destroy_component(formfield2);
      destroy_component(topappbar0);
      destroy_component(loremipsum0);
      destroy_component(topappbar1);
      destroy_component(loremipsum1);
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
  var prominent = false;
  var dense = false;
  var secondaryColor = false;

  function checkbox_checked_binding(value) {
    prominent = value;
    $$invalidate(0, prominent);
  }

  function checkbox_checked_binding_1(value) {
    dense = value;
    $$invalidate(1, dense);
  }

  function checkbox_checked_binding_2(value) {
    secondaryColor = value;
    $$invalidate(2, secondaryColor);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("prominent" in $$props) $$invalidate(0, prominent = $$props.prominent);
    if ("dense" in $$props) $$invalidate(1, dense = $$props.dense);
    if ("secondaryColor" in $$props) $$invalidate(2, secondaryColor = $$props.secondaryColor);
  };

  return [prominent, dense, secondaryColor, checkbox_checked_binding, checkbox_checked_binding_1, checkbox_checked_binding_2];
}

var Top_app_bar =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Top_app_bar, _SvelteComponentDev);

  function Top_app_bar(options) {
    var _this;

    _classCallCheck(this, Top_app_bar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Top_app_bar).call(this, options));
    if (!document.getElementById("svelte-co7g2h-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Top_app_bar",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Top_app_bar;
}(SvelteComponentDev);

export default Top_app_bar;
