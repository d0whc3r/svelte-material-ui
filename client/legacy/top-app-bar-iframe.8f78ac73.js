import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, I as create_component, M as space, J as claim_component, N as claim_space, g as claim_element, h as children, j as detach_dev, l as add_location, K as mount_component, m as insert_dev, t as transition_in, u as transition_out, L as destroy_component, r as is_function, A as validate_store, B as component_subscribe, F as binding_callbacks, H as bind, Q as add_flush_callback, D as empty, R as group_outros, T as check_outros, W as text, X as claim_text, $ as set_data_dev } from './index.0812fa32.js';
import { a as stores$1 } from './app.27b549dc.js';
import './style-inject.es.8e8f85b0.js';
import { T as TopAppBar, R as Row, S as Section, F as FixedAdjust, b as ShortFixedAdjust, P as ProminentFixedAdjust, D as DenseFixedAdjust, a as Title } from './index.d88768fb.js';
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
import './index.d9e04e30.js';
import './H2.5497cc82.js';
import './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Button.238fe4ea.js';
import './Label.cdd98476.js';
import './Icon.e7ebcf54.js';
import { I as IconButton } from './index.15f8a983.js';
import './index.ec2d92bf.js';
import '@babel/runtime/regenerator';
import './Item.02b48338.js';
import { L as LoremIpsum } from './LoremIpsum.b3fca55b.js';

var file = "src/routes/demo/top-app-bar-iframe.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-12ga6rk-style";
  style.textContent = "app, body, html{display:block !important;height:auto !important;width:auto !important;position:static !important}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWFwcC1iYXItaWZyYW1lLnN2ZWx0ZSIsInNvdXJjZXMiOlsidG9wLWFwcC1iYXItaWZyYW1lLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8VG9wQXBwQmFyIHtkZW5zZX0ge3Byb21pbmVudH0ge3ZhcmlhbnR9IGJpbmQ6Y29sbGFwc2VkPlxuICA8Um93PlxuICAgIDxTZWN0aW9uPlxuICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L0ljb25CdXR0b24+XG4gICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgPC9TZWN0aW9uPlxuICAgIDxTZWN0aW9uIGFsaWduPVwiZW5kXCIgdG9vbGJhcj5cbiAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBhcmlhLWxhYmVsPVwiRG93bmxvYWRcIj5maWxlX2Rvd25sb2FkPC9JY29uQnV0dG9uPlxuICAgICAgeyNpZiB2YXJpYW50ICE9PSAnc2hvcnQnfVxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1sYWJlbD1cIlByaW50IHRoaXMgcGFnZVwiPnByaW50PC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1sYWJlbD1cIkJvb2ttYXJrIHRoaXMgcGFnZVwiPmJvb2ttYXJrPC9JY29uQnV0dG9uPlxuICAgICAgey9pZn1cbiAgICA8L1NlY3Rpb24+XG4gIDwvUm93PlxuPC9Ub3BBcHBCYXI+XG48ZGl2IHVzZTpBZGp1c3Q+XG4gIDxMb3JlbUlwc3VtIC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtzdG9yZXN9IGZyb20gJ0BzYXBwZXIvYXBwJztcbiAgaW1wb3J0IFRvcEFwcEJhciwge1JvdywgU2VjdGlvbiwgVGl0bGUsIEZpeGVkQWRqdXN0LCBEZW5zZUZpeGVkQWRqdXN0LCBQcm9taW5lbnRGaXhlZEFkanVzdCwgU2hvcnRGaXhlZEFkanVzdH0gZnJvbSAnQHNtdWkvdG9wLWFwcC1iYXInO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAc211aS9pY29uLWJ1dHRvbic7XG4gIGltcG9ydCBMb3JlbUlwc3VtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9yZW1JcHN1bS5zdmVsdGUnO1xuXG4gIGNvbnN0IHtwYWdlfSA9IHN0b3JlcygpO1xuXG4gIGxldCBkZW5zZSA9IGZhbHNlO1xuICBsZXQgcHJvbWluZW50ID0gZmFsc2U7XG4gIGxldCB2YXJpYW50ID0gJ3N0YW5kYXJkJztcbiAgbGV0IGNvbGxhcHNlZCA9IGZhbHNlO1xuICBsZXQgdGl0bGUgPSAnU3RhbmRhcmQnO1xuICBsZXQgQWRqdXN0ID0gRml4ZWRBZGp1c3Q7XG5cbiAgc3dpdGNoICgkcGFnZS5xdWVyeS5zdHlsZSkge1xuICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgIHZhcmlhbnQgPSAnZml4ZWQnO1xuICAgICAgdGl0bGUgPSAnRml4ZWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGVuc2UnOlxuICAgICAgZGVuc2UgPSB0cnVlO1xuICAgICAgdGl0bGUgPSAnRGVuc2UnO1xuICAgICAgQWRqdXN0ID0gRGVuc2VGaXhlZEFkanVzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb21pbmVudCc6XG4gICAgICBwcm9taW5lbnQgPSB0cnVlO1xuICAgICAgdGl0bGUgPSAnUHJvbWluZW50JztcbiAgICAgIEFkanVzdCA9IFByb21pbmVudEZpeGVkQWRqdXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2hvcnQnOlxuICAgICAgdmFyaWFudCA9ICdzaG9ydCc7XG4gICAgICB0aXRsZSA9ICdTaG9ydCc7XG4gICAgICBBZGp1c3QgPSBTaG9ydEZpeGVkQWRqdXN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2hvcnQtY2xvc2VkJzpcbiAgICAgIHZhcmlhbnQgPSAnc2hvcnQnO1xuICAgICAgY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgIHRpdGxlID0gJ1Nob3J0JztcbiAgICAgIEFkanVzdCA9IFNob3J0Rml4ZWRBZGp1c3Q7XG4gICAgICBicmVhaztcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgOmdsb2JhbChhcHAsIGJvZHksIGh0bWwpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRVUsZUFBZSxBQUFFLENBQUMsQUFDeEIsT0FBTyxDQUFFLEtBQUssQ0FBQyxVQUFVLENBQ3pCLE1BQU0sQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUN2QixLQUFLLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FDdEIsUUFBUSxDQUFFLE1BQU0sQ0FBQyxVQUFVLEFBQzdCLENBQUMifQ== */";
  append_dev(document.head, style);
} // (4:6) <IconButton class="material-icons">


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
    source: "(4:6) <IconButton class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (5:6) <Title>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text(
      /*title*/
      ctx[4]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*title*/
      ctx[4]);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*title*/
      16) set_data_dev(t,
      /*title*/
      ctx[4]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(5:6) <Title>",
    ctx: ctx
  });
  return block;
} // (3:4) <Section>


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
  var title_1 = new Title({
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
      create_component(title_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(title_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(title_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = {};

      if (dirty[0] &
      /*$$scope*/
      512) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
      var title_1_changes = {};

      if (dirty[0] &
      /*$$scope, title*/
      528) {
        title_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title_1.$set(title_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(title_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(title_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
      if (detaching) detach_dev(t);
      destroy_component(title_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(3:4) <Section>",
    ctx: ctx
  });
  return block;
} // (8:6) <IconButton class="material-icons" aria-label="Download">


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
    source: "(8:6) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Download\\\">",
    ctx: ctx
  });
  return block;
} // (9:6) {#if variant !== 'short'}


function create_if_block(ctx) {
  var t;
  var current;
  var iconbutton0 = new IconButton({
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
  var iconbutton1 = new IconButton({
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
      t = space();
      create_component(iconbutton1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(iconbutton1, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(iconbutton1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(9:6) {#if variant !== 'short'}",
    ctx: ctx
  });
  return block;
} // (10:8) <IconButton class="material-icons" aria-label="Print this page">


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
    source: "(10:8) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Print this page\\\">",
    ctx: ctx
  });
  return block;
} // (11:8) <IconButton class="material-icons" aria-label="Bookmark this page">


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
    source: "(11:8) <IconButton class=\\\"material-icons\\\" aria-label=\\\"Bookmark this page\\\">",
    ctx: ctx
  });
  return block;
} // (7:4) <Section align="end" toolbar>


function create_default_slot_2(ctx) {
  var t;
  var if_block_anchor;
  var current;
  var iconbutton = new IconButton({
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
  var if_block =
  /*variant*/
  ctx[2] !== "short" && create_if_block(ctx);
  var block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      insert_dev(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = {};

      if (dirty[0] &
      /*$$scope*/
      512) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);

      if (
      /*variant*/
      ctx[2] !== "short") {
        if (!if_block) {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          transition_in(if_block, 1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
      if (detaching) detach_dev(t);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(7:4) <Section align=\\\"end\\\" toolbar>",
    ctx: ctx
  });
  return block;
} // (2:2) <Row>


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
      /*$$scope, title*/
      528) {
        section0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section0.$set(section0_changes);
      var section1_changes = {};

      if (dirty[0] &
      /*$$scope, variant*/
      516) {
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
    source: "(2:2) <Row>",
    ctx: ctx
  });
  return block;
} // (1:0) <TopAppBar {dense} {prominent} {variant} bind:collapsed>


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
      /*$$scope, variant, title*/
      532) {
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
    source: "(1:0) <TopAppBar {dense} {prominent} {variant} bind:collapsed>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var updating_collapsed;
  var t;
  var div;
  var Adjust_action;
  var current;

  function topappbar_collapsed_binding(value) {
    /*topappbar_collapsed_binding*/
    ctx[8].call(null, value);
  }

  var topappbar_props = {
    dense:
    /*dense*/
    ctx[0],
    prominent:
    /*prominent*/
    ctx[1],
    variant:
    /*variant*/
    ctx[2],
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*collapsed*/
  ctx[3] !== void 0) {
    topappbar_props.collapsed =
    /*collapsed*/
    ctx[3];
  }

  var topappbar = new TopAppBar({
    props: topappbar_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(topappbar, "collapsed", topappbar_collapsed_binding);
  });
  var loremipsum = new LoremIpsum({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(topappbar.$$.fragment);
      t = space();
      div = element("div");
      create_component(loremipsum.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(topappbar.$$.fragment, nodes);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      claim_component(loremipsum.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div, file, 15, 0, 575);
    },
    m: function mount(target, anchor) {
      mount_component(topappbar, target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, div, anchor);
      mount_component(loremipsum, div, null);
      Adjust_action =
      /*Adjust*/
      ctx[5].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      var topappbar_changes = {};
      if (dirty[0] &
      /*dense*/
      1) topappbar_changes.dense =
      /*dense*/
      ctx[0];
      if (dirty[0] &
      /*prominent*/
      2) topappbar_changes.prominent =
      /*prominent*/
      ctx[1];
      if (dirty[0] &
      /*variant*/
      4) topappbar_changes.variant =
      /*variant*/
      ctx[2];

      if (dirty[0] &
      /*$$scope, variant, title*/
      532) {
        topappbar_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_collapsed && dirty[0] &
      /*collapsed*/
      8) {
        updating_collapsed = true;
        topappbar_changes.collapsed =
        /*collapsed*/
        ctx[3];
        add_flush_callback(function () {
          return updating_collapsed = false;
        });
      }

      topappbar.$set(topappbar_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(topappbar.$$.fragment, local);
      transition_in(loremipsum.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(topappbar.$$.fragment, local);
      transition_out(loremipsum.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(topappbar, detaching);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div);
      destroy_component(loremipsum);
      if (Adjust_action && is_function(Adjust_action.destroy)) Adjust_action.destroy();
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
  var $page;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(7, $page = value);
  });
  var dense = false;
  var prominent = false;
  var variant = "standard";
  var collapsed = false;
  var title = "Standard";
  var Adjust = FixedAdjust;

  switch ($page.query.style) {
    case "fixed":
      variant = "fixed";
      title = "Fixed";
      break;

    case "dense":
      dense = true;
      title = "Dense";
      Adjust = DenseFixedAdjust;
      break;

    case "prominent":
      prominent = true;
      title = "Prominent";
      Adjust = ProminentFixedAdjust;
      break;

    case "short":
      variant = "short";
      title = "Short";
      Adjust = ShortFixedAdjust;
      break;

    case "short-closed":
      variant = "short";
      collapsed = true;
      title = "Short";
      Adjust = ShortFixedAdjust;
      break;
  }

  function topappbar_collapsed_binding(value) {
    collapsed = value;
    $$invalidate(3, collapsed);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("dense" in $$props) $$invalidate(0, dense = $$props.dense);
    if ("prominent" in $$props) $$invalidate(1, prominent = $$props.prominent);
    if ("variant" in $$props) $$invalidate(2, variant = $$props.variant);
    if ("collapsed" in $$props) $$invalidate(3, collapsed = $$props.collapsed);
    if ("title" in $$props) $$invalidate(4, title = $$props.title);
    if ("Adjust" in $$props) $$invalidate(5, Adjust = $$props.Adjust);
    if ("$page" in $$props) page.set($page = $$props.$page);
  };

  return [dense, prominent, variant, collapsed, title, Adjust, page, $page, topappbar_collapsed_binding];
}

var Top_app_bar_iframe =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Top_app_bar_iframe, _SvelteComponentDev);

  function Top_app_bar_iframe(options) {
    var _this;

    _classCallCheck(this, Top_app_bar_iframe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Top_app_bar_iframe).call(this, options));
    if (!document.getElementById("svelte-12ga6rk-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Top_app_bar_iframe",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Top_app_bar_iframe;
}(SvelteComponentDev);

export default Top_app_bar_iframe;
