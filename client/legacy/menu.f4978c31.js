import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, M as space, f as element, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, l as add_location, Z as set_style, O as attr_dev, m as insert_dev, P as append_dev, K as mount_component, $ as set_data_dev, t as transition_in, u as transition_out, L as destroy_component, r as is_function, F as binding_callbacks, H as bind, Q as add_flush_callback, D as empty, R as group_outros, T as check_outros, aa as destroy_each, n as noop } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
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
import { B as Button } from './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Button.238fe4ea.js';
import './Label.cdd98476.js';
import './Icon.e7ebcf54.js';
import { L as List, S as Separator, T as Text, P as PrimaryText, d as SecondaryText } from './index.ec2d92bf.js';
import '@babel/runtime/regenerator';
import { I as Item } from './Item.02b48338.js';
import './prefixFilter.1941fe02.js';
import { A as Anchor } from './index.92dcb99f.js';
import './MenuSurface.8fe21eef.js';
import { M as Menu, S as SelectionGroup, a as SelectionGroupIcon } from './index.afdac089.js';
import './Menu.42a68110.js';

var file = "src/routes/demo/menu.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  return child_ctx;
} // (11:53) <Text>


function create_default_slot_52(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Cut");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Cut");
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
    source: "(11:53) <Text>",
    ctx: ctx
  });
  return block;
} // (11:8) <Item on:SMUI:action={() => clicked = 'Cut'}>


function create_default_slot_51(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_52]
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
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(11:8) <Item on:SMUI:action={() => clicked = 'Cut'}>",
    ctx: ctx
  });
  return block;
} // (12:54) <Text>


function create_default_slot_50(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy");
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
    id: create_default_slot_50.name,
    type: "slot",
    source: "(12:54) <Text>",
    ctx: ctx
  });
  return block;
} // (12:8) <Item on:SMUI:action={() => clicked = 'Copy'}>


function create_default_slot_49(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_50]
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
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(12:8) <Item on:SMUI:action={() => clicked = 'Copy'}>",
    ctx: ctx
  });
  return block;
} // (13:55) <Text>


function create_default_slot_48(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paste");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paste");
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
    source: "(13:55) <Text>",
    ctx: ctx
  });
  return block;
} // (13:8) <Item on:SMUI:action={() => clicked = 'Paste'}>


function create_default_slot_47(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_48]
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
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(13:8) <Item on:SMUI:action={() => clicked = 'Paste'}>",
    ctx: ctx
  });
  return block;
} // (15:56) <Text>


function create_default_slot_46(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
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
    id: create_default_slot_46.name,
    type: "slot",
    source: "(15:56) <Text>",
    ctx: ctx
  });
  return block;
} // (15:8) <Item on:SMUI:action={() => clicked = 'Delete'}>


function create_default_slot_45(ctx) {
  var current;
  var text_1 = new Text({
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
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_45.name,
    type: "slot",
    source: "(15:8) <Item on:SMUI:action={() => clicked = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (10:6) <List>


function create_default_slot_44(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler*/
  ctx[8]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_1*/
  ctx[9]);
  var item2 = new Item({
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
  item2.$on("SMUI:action",
  /*SMUI_action_handler_2*/
  ctx[10]);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action",
  /*SMUI_action_handler_3*/
  ctx[11]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(separator.$$.fragment);
      t3 = space();
      create_component(item3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(10:6) <List>",
    ctx: ctx
  });
  return block;
} // (9:4) <Menu static>


function create_default_slot_43(ctx) {
  var current;
  var list = new List({
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
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      16 | dirty[1] &
      /*$$scope*/
      32) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_43.name,
    type: "slot",
    source: "(9:4) <Menu static>",
    ctx: ctx
  });
  return block;
} // (24:6) <Button on:click={() => menu.setOpen(true)}>


function create_default_slot_42(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Menu");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Menu");
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
    source: "(24:6) <Button on:click={() => menu.setOpen(true)}>",
    ctx: ctx
  });
  return block;
} // (27:55) <Text>


function create_default_slot_41(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Cut");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Cut");
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
    id: create_default_slot_41.name,
    type: "slot",
    source: "(27:55) <Text>",
    ctx: ctx
  });
  return block;
} // (27:10) <Item on:SMUI:action={() => clicked = 'Cut'}>


function create_default_slot_40(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_41]
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
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(27:10) <Item on:SMUI:action={() => clicked = 'Cut'}>",
    ctx: ctx
  });
  return block;
} // (28:56) <Text>


function create_default_slot_39(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy");
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
    id: create_default_slot_39.name,
    type: "slot",
    source: "(28:56) <Text>",
    ctx: ctx
  });
  return block;
} // (28:10) <Item on:SMUI:action={() => clicked = 'Copy'}>


function create_default_slot_38(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_39]
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
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(28:10) <Item on:SMUI:action={() => clicked = 'Copy'}>",
    ctx: ctx
  });
  return block;
} // (29:57) <Text>


function create_default_slot_37(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paste");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paste");
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
    id: create_default_slot_37.name,
    type: "slot",
    source: "(29:57) <Text>",
    ctx: ctx
  });
  return block;
} // (29:10) <Item on:SMUI:action={() => clicked = 'Paste'}>


function create_default_slot_36(ctx) {
  var current;
  var text_1 = new Text({
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
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(29:10) <Item on:SMUI:action={() => clicked = 'Paste'}>",
    ctx: ctx
  });
  return block;
} // (31:58) <Text>


function create_default_slot_35(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
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
    source: "(31:58) <Text>",
    ctx: ctx
  });
  return block;
} // (31:10) <Item on:SMUI:action={() => clicked = 'Delete'}>


function create_default_slot_34(ctx) {
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
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(31:10) <Item on:SMUI:action={() => clicked = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (26:8) <List>


function create_default_slot_33(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler_4*/
  ctx[13]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_5*/
  ctx[14]);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_36]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_6*/
  ctx[15]);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
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
  item3.$on("SMUI:action",
  /*SMUI_action_handler_7*/
  ctx[16]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(separator.$$.fragment);
      t3 = space();
      create_component(item3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(26:8) <List>",
    ctx: ctx
  });
  return block;
} // (25:6) <Menu bind:this={menu}>


function create_default_slot_32(ctx) {
  var current;
  var list = new List({
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
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      16 | dirty[1] &
      /*$$scope*/
      32) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(25:6) <Menu bind:this={menu}>",
    ctx: ctx
  });
  return block;
} // (41:6) <Button on:click={() => menu2.setOpen(true)}>


function create_default_slot_31(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Menu");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Menu");
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
    id: create_default_slot_31.name,
    type: "slot",
    source: "(41:6) <Button on:click={() => menu2.setOpen(true)}>",
    ctx: ctx
  });
  return block;
} // (46:14) <PrimaryText>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Cut");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Cut");
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
    source: "(46:14) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (47:14) <SecondaryText>


function create_default_slot_29(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy to clipboard and remove.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy to clipboard and remove.");
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
    source: "(47:14) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (45:12) <Text>


function create_default_slot_28(ctx) {
  var t;
  var current;
  var primarytext = new PrimaryText({
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
  var secondarytext = new SecondaryText({
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
  var block = {
    c: function create() {
      create_component(primarytext.$$.fragment);
      t = space();
      create_component(secondarytext.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(secondarytext.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(secondarytext, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        secondarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext.$set(secondarytext_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t);
      destroy_component(secondarytext, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(45:12) <Text>",
    ctx: ctx
  });
  return block;
} // (44:10) <Item on:SMUI:action={() => clicked = 'Cut'}>


function create_default_slot_27(ctx) {
  var current;
  var text_1 = new Text({
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
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(44:10) <Item on:SMUI:action={() => clicked = 'Cut'}>",
    ctx: ctx
  });
  return block;
} // (52:14) <PrimaryText>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy");
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
    source: "(52:14) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (53:14) <SecondaryText>


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy to clipboard.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy to clipboard.");
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
    source: "(53:14) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (51:12) <Text>


function create_default_slot_24(ctx) {
  var t;
  var current;
  var primarytext = new PrimaryText({
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
  var secondarytext = new SecondaryText({
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
      create_component(primarytext.$$.fragment);
      t = space();
      create_component(secondarytext.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(secondarytext.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(secondarytext, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        secondarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext.$set(secondarytext_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t);
      destroy_component(secondarytext, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(51:12) <Text>",
    ctx: ctx
  });
  return block;
} // (50:10) <Item on:SMUI:action={() => clicked = 'Copy'}>


function create_default_slot_23(ctx) {
  var current;
  var text_1 = new Text({
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
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(50:10) <Item on:SMUI:action={() => clicked = 'Copy'}>",
    ctx: ctx
  });
  return block;
} // (58:14) <PrimaryText>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paste");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paste");
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
    source: "(58:14) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (59:14) <SecondaryText>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paste from clipboard.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paste from clipboard.");
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
    source: "(59:14) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (57:12) <Text>


function create_default_slot_20(ctx) {
  var t;
  var current;
  var primarytext = new PrimaryText({
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
  var secondarytext = new SecondaryText({
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
      create_component(primarytext.$$.fragment);
      t = space();
      create_component(secondarytext.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(secondarytext.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(secondarytext, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        secondarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext.$set(secondarytext_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t);
      destroy_component(secondarytext, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(57:12) <Text>",
    ctx: ctx
  });
  return block;
} // (56:10) <Item on:SMUI:action={() => clicked = 'Paste'}>


function create_default_slot_19(ctx) {
  var current;
  var text_1 = new Text({
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
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(56:10) <Item on:SMUI:action={() => clicked = 'Paste'}>",
    ctx: ctx
  });
  return block;
} // (65:14) <PrimaryText>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
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
    source: "(65:14) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (66:14) <SecondaryText>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Remove item.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Remove item.");
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
    source: "(66:14) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (64:12) <Text>


function create_default_slot_16(ctx) {
  var t;
  var current;
  var primarytext = new PrimaryText({
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
  var secondarytext = new SecondaryText({
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
      create_component(primarytext.$$.fragment);
      t = space();
      create_component(secondarytext.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(secondarytext.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(secondarytext, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        secondarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext.$set(secondarytext_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t);
      destroy_component(secondarytext, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(64:12) <Text>",
    ctx: ctx
  });
  return block;
} // (63:10) <Item on:SMUI:action={() => clicked = 'Delete'}>


function create_default_slot_15(ctx) {
  var current;
  var text_1 = new Text({
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
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(63:10) <Item on:SMUI:action={() => clicked = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (43:8) <List twoLine>


function create_default_slot_14(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
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
  item0.$on("SMUI:action",
  /*SMUI_action_handler_8*/
  ctx[19]);
  var item1 = new Item({
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
  item1.$on("SMUI:action",
  /*SMUI_action_handler_9*/
  ctx[20]);
  var item2 = new Item({
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
  item2.$on("SMUI:action",
  /*SMUI_action_handler_10*/
  ctx[21]);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
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
  item3.$on("SMUI:action",
  /*SMUI_action_handler_11*/
  ctx[22]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(separator.$$.fragment);
      t3 = space();
      create_component(item3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(43:8) <List twoLine>",
    ctx: ctx
  });
  return block;
} // (42:6) <Menu bind:this={menu2} anchor={false} bind:anchorElement={anchor2} anchorCorner="BOTTOM_LEFT">


function create_default_slot_13(ctx) {
  var current;
  var list = new List({
    props: {
      twoLine: true,
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
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      16 | dirty[1] &
      /*$$scope*/
      32) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(42:6) <Menu bind:this={menu2} anchor={false} bind:anchorElement={anchor2} anchorCorner=\\\"BOTTOM_LEFT\\\">",
    ctx: ctx
  });
  return block;
} // (80:6) <Button on:click={() => menu3.setOpen(true)}>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Menu");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Menu");
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
    source: "(80:6) <Button on:click={() => menu3.setOpen(true)}>",
    ctx: ctx
  });
  return block;
} // (86:16) <SelectionGroupIcon>


function create_default_slot_11(ctx) {
  var i;
  var t;
  var block = {
    c: function create() {
      i = element("i");
      t = text("check");
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true
      });
      var i_nodes = children(i);
      t = claim_text(i_nodes, "check");
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "material-icons");
      add_location(i, file, 86, 18, 2838);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);
      append_dev(i, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(i);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(86:16) <SelectionGroupIcon>",
    ctx: ctx
  });
  return block;
} // (89:16) <Text>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text(
      /*item*/
      ctx[31]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*item*/
      ctx[31]);
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(89:16) <Text>",
    ctx: ctx
  });
  return block;
} // (85:14) <Item on:SMUI:action={() => selected1 = item} selected={selected1 === item}>


function create_default_slot_9(ctx) {
  var t0;
  var t1;
  var current;
  var selectiongroupicon = new SelectionGroupIcon({
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
  var text_1 = new Text({
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
      create_component(selectiongroupicon.$$.fragment);
      t0 = space();
      create_component(text_1.$$.fragment);
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(selectiongroupicon.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(selectiongroupicon, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(text_1, target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var selectiongroupicon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        selectiongroupicon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      selectiongroupicon.$set(selectiongroupicon_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(selectiongroupicon.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(selectiongroupicon.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(selectiongroupicon, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(85:14) <Item on:SMUI:action={() => selected1 = item} selected={selected1 === item}>",
    ctx: ctx
  });
  return block;
} // (84:12) {#each ['Red', 'Green', 'Blue'] as item}


function create_each_block_1(ctx) {
  var current;

  function SMUI_action_handler_12() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*SMUI_action_handler_12*/
      (_ctx = ctx)[27].apply(_ctx, [
      /*item*/
      ctx[31]].concat(args))
    );
  }

  var item = new Item({
    props: {
      selected:
      /*selected1*/
      ctx[6] ===
      /*item*/
      ctx[31],
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item.$on("SMUI:action", SMUI_action_handler_12);
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
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var item_changes = {};
      if (dirty[0] &
      /*selected1*/
      64) item_changes.selected =
      /*selected1*/
      ctx[6] ===
      /*item*/
      ctx[31];

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    id: create_each_block_1.name,
    type: "each",
    source: "(84:12) {#each ['Red', 'Green', 'Blue'] as item}",
    ctx: ctx
  });
  return block;
} // (83:10) <SelectionGroup>


function create_default_slot_8(ctx) {
  var each_1_anchor;
  var current;
  var each_value_1 = ["Red", "Green", "Blue"];
  var each_blocks = [];

  for (var i = 0; i < 3; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      for (var _i = 0; _i < 3; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < 3; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < 3; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*selected1*/
      64) {
        each_value_1 = ["Red", "Green", "Blue"];

        var _i4;

        for (_i4 = 0; _i4 < 3; _i4 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block_1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = 3; _i4 < 3; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < 3; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < 3; _i6 += 1) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(83:10) <SelectionGroup>",
    ctx: ctx
  });
  return block;
} // (97:16) <SelectionGroupIcon>


function create_default_slot_7(ctx) {
  var i;
  var t;
  var block = {
    c: function create() {
      i = element("i");
      t = text("check");
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true
      });
      var i_nodes = children(i);
      t = claim_text(i_nodes, "check");
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "material-icons");
      add_location(i, file, 97, 18, 3272);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);
      append_dev(i, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(i);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(97:16) <SelectionGroupIcon>",
    ctx: ctx
  });
  return block;
} // (100:16) <Text>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text(
      /*item*/
      ctx[31]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes,
      /*item*/
      ctx[31]);
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(100:16) <Text>",
    ctx: ctx
  });
  return block;
} // (96:14) <Item on:SMUI:action={() => selected2 = item} selected={selected2 === item}>


function create_default_slot_5(ctx) {
  var t0;
  var t1;
  var current;
  var selectiongroupicon = new SelectionGroupIcon({
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
  var text_1 = new Text({
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
      create_component(selectiongroupicon.$$.fragment);
      t0 = space();
      create_component(text_1.$$.fragment);
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(selectiongroupicon.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(selectiongroupicon, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(text_1, target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var selectiongroupicon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        selectiongroupicon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      selectiongroupicon.$set(selectiongroupicon_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(selectiongroupicon.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(selectiongroupicon.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(selectiongroupicon, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(96:14) <Item on:SMUI:action={() => selected2 = item} selected={selected2 === item}>",
    ctx: ctx
  });
  return block;
} // (95:12) {#each ['Small', 'Medium', 'Large'] as item}


function create_each_block(ctx) {
  var current;

  function SMUI_action_handler_13() {
    var _ctx2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (
      /*SMUI_action_handler_13*/
      (_ctx2 = ctx)[28].apply(_ctx2, [
      /*item*/
      ctx[31]].concat(args))
    );
  }

  var item = new Item({
    props: {
      selected:
      /*selected2*/
      ctx[7] ===
      /*item*/
      ctx[31],
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item.$on("SMUI:action", SMUI_action_handler_13);
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
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var item_changes = {};
      if (dirty[0] &
      /*selected2*/
      128) item_changes.selected =
      /*selected2*/
      ctx[7] ===
      /*item*/
      ctx[31];

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    source: "(95:12) {#each ['Small', 'Medium', 'Large'] as item}",
    ctx: ctx
  });
  return block;
} // (94:10) <SelectionGroup>


function create_default_slot_4(ctx) {
  var each_1_anchor;
  var current;
  var each_value = ["Small", "Medium", "Large"];
  var each_blocks = [];

  for (var i = 0; i < 3; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      for (var _i7 = 0; _i7 < 3; _i7 += 1) {
        each_blocks[_i7].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i8 = 0; _i8 < 3; _i8 += 1) {
        each_blocks[_i8].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i9 = 0; _i9 < 3; _i9 += 1) {
        each_blocks[_i9].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*selected2*/
      128) {
        each_value = ["Small", "Medium", "Large"];

        var _i10;

        for (_i10 = 0; _i10 < 3; _i10 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i10);

          if (each_blocks[_i10]) {
            each_blocks[_i10].p(child_ctx, dirty);

            transition_in(each_blocks[_i10], 1);
          } else {
            each_blocks[_i10] = create_each_block(child_ctx);

            each_blocks[_i10].c();

            transition_in(each_blocks[_i10], 1);

            each_blocks[_i10].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i10 = 3; _i10 < 3; _i10 += 1) {
          out(_i10);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i11 = 0; _i11 < 3; _i11 += 1) {
        transition_in(each_blocks[_i11]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i12 = 0; _i12 < 3; _i12 += 1) {
        transition_out(each_blocks[_i12]);
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(94:10) <SelectionGroup>",
    ctx: ctx
  });
  return block;
} // (106:12) <Text>


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Save for Later");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Save for Later");
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
    source: "(106:12) <Text>",
    ctx: ctx
  });
  return block;
} // (105:10) <Item on:SMUI:action={() => clicked2 = 'Save for Later'}>


function create_default_slot_2(ctx) {
  var current;
  var text_1 = new Text({
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
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(105:10) <Item on:SMUI:action={() => clicked2 = 'Save for Later'}>",
    ctx: ctx
  });
  return block;
} // (82:8) <List>


function create_default_slot_1(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var selectiongroup0 = new SelectionGroup({
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
  var separator0 = new Separator({
    $$inline: true
  });
  var selectiongroup1 = new SelectionGroup({
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
  var separator1 = new Separator({
    $$inline: true
  });
  var item = new Item({
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
  item.$on("SMUI:action",
  /*SMUI_action_handler_14*/
  ctx[29]);
  var block = {
    c: function create() {
      create_component(selectiongroup0.$$.fragment);
      t0 = space();
      create_component(separator0.$$.fragment);
      t1 = space();
      create_component(selectiongroup1.$$.fragment);
      t2 = space();
      create_component(separator1.$$.fragment);
      t3 = space();
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(selectiongroup0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(separator0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(selectiongroup1.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(separator1.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(selectiongroup0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(separator0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(selectiongroup1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator1, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var selectiongroup0_changes = {};

      if (dirty[0] &
      /*selected1*/
      64 | dirty[1] &
      /*$$scope*/
      32) {
        selectiongroup0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      selectiongroup0.$set(selectiongroup0_changes);
      var selectiongroup1_changes = {};

      if (dirty[0] &
      /*selected2*/
      128 | dirty[1] &
      /*$$scope*/
      32) {
        selectiongroup1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      selectiongroup1.$set(selectiongroup1_changes);
      var item_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(selectiongroup0.$$.fragment, local);
      transition_in(separator0.$$.fragment, local);
      transition_in(selectiongroup1.$$.fragment, local);
      transition_in(separator1.$$.fragment, local);
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(selectiongroup0.$$.fragment, local);
      transition_out(separator0.$$.fragment, local);
      transition_out(selectiongroup1.$$.fragment, local);
      transition_out(separator1.$$.fragment, local);
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(selectiongroup0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(separator0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(selectiongroup1, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(separator1, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(82:8) <List>",
    ctx: ctx
  });
  return block;
} // (81:6) <Menu bind:this={menu3}>


function create_default_slot(ctx) {
  var current;
  var list = new List({
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
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked2, selected2, selected1*/
      224 | dirty[1] &
      /*$$scope*/
      32) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(81:6) <Menu bind:this={menu3}>",
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
  var div2;
  var t4;
  var div1;
  var t5;
  var t6;
  var div4;
  var t7;
  var div3;
  var t8;
  var updating_anchorElement;
  var Anchor_action;
  var t9;
  var pre0;
  var t10;
  var t11;
  var t12;
  var div6;
  var t13;
  var div5;
  var t14;
  var t15;
  var pre1;
  var t16;
  var t17;
  var t18;
  var pre2;
  var t19;
  var t20;
  var t21;
  var pre3;
  var t22;
  var t23;
  var t24;
  var div7;
  var t25;
  var current;
  var menu0 = new Menu({
    props: {
      static: true,
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[12]);
  var menu1_props = {
    $$slots: {
      default: [create_default_slot_32]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menu1 = new Menu({
    props: menu1_props,
    $$inline: true
  });
  /*menu1_binding*/

  ctx[17](menu1);
  var button1 = new Button({
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
  button1.$on("click",
  /*click_handler_1*/
  ctx[18]);

  function menu2_1_anchorElement_binding(value) {
    /*menu2_1_anchorElement_binding*/
    ctx[24].call(null, value);
  }

  var menu2_1_props = {
    anchor: false,
    anchorCorner: "BOTTOM_LEFT",
    $$slots: {
      default: [create_default_slot_13]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*anchor2*/
  ctx[3] !== void 0) {
    menu2_1_props.anchorElement =
    /*anchor2*/
    ctx[3];
  }

  var menu2_1 = new Menu({
    props: menu2_1_props,
    $$inline: true
  });
  /*menu2_1_binding*/

  ctx[23](menu2_1);
  binding_callbacks.push(function () {
    return bind(menu2_1, "anchorElement", menu2_1_anchorElement_binding);
  });
  var button2 = new Button({
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
  button2.$on("click",
  /*click_handler_2*/
  ctx[26]);
  var menu3_1_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menu3_1 = new Menu({
    props: menu3_1_props,
    $$inline: true
  });
  /*menu3_1_binding*/

  ctx[30](menu3_1);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Menu");
      t2 = space();
      div0 = element("div");
      create_component(menu0.$$.fragment);
      t3 = space();
      div2 = element("div");
      t4 = text("Anchored automatically:\n\n    ");
      div1 = element("div");
      create_component(button0.$$.fragment);
      t5 = space();
      create_component(menu1.$$.fragment);
      t6 = space();
      div4 = element("div");
      t7 = text("Two line, anchored manually, corner set to bottom-left:\n\n    ");
      div3 = element("div");
      create_component(button1.$$.fragment);
      t8 = space();
      create_component(menu2_1.$$.fragment);
      t9 = space();
      pre0 = element("pre");
      t10 = text("Clicked: ");
      t11 = text(
      /*clicked*/
      ctx[4]);
      t12 = space();
      div6 = element("div");
      t13 = text("Selection groups:\n\n    ");
      div5 = element("div");
      create_component(button2.$$.fragment);
      t14 = space();
      create_component(menu3_1.$$.fragment);
      t15 = space();
      pre1 = element("pre");
      t16 = text("Selection 1: ");
      t17 = text(
      /*selected1*/
      ctx[6]);
      t18 = space();
      pre2 = element("pre");
      t19 = text("Selection 2: ");
      t20 = text(
      /*selected2*/
      ctx[7]);
      t21 = space();
      pre3 = element("pre");
      t22 = text("Clicked: ");
      t23 = text(
      /*clicked2*/
      ctx[5]);
      t24 = space();
      div7 = element("div");
      t25 = text("Long div for scrolling...");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Menu");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(menu0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, "Anchored automatically:\n\n    ");
      div1 = claim_element(div2_nodes, "DIV", {
        style: true
      });
      var div1_nodes = children(div1);
      claim_component(button0.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(menu1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t7 = claim_text(div4_nodes, "Two line, anchored manually, corner set to bottom-left:\n\n    ");
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      claim_component(button1.$$.fragment, div3_nodes);
      t8 = claim_space(div3_nodes);
      claim_component(menu2_1.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t10 = claim_text(pre0_nodes, "Clicked: ");
      t11 = claim_text(pre0_nodes,
      /*clicked*/
      ctx[4]);
      pre0_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {});
      var div6_nodes = children(div6);
      t13 = claim_text(div6_nodes, "Selection groups:\n\n    ");
      div5 = claim_element(div6_nodes, "DIV", {
        style: true
      });
      var div5_nodes = children(div5);
      claim_component(button2.$$.fragment, div5_nodes);
      t14 = claim_space(div5_nodes);
      claim_component(menu3_1.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t16 = claim_text(pre1_nodes, "Selection 1: ");
      t17 = claim_text(pre1_nodes,
      /*selected1*/
      ctx[6]);
      pre1_nodes.forEach(detach_dev);
      t18 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t19 = claim_text(pre2_nodes, "Selection 2: ");
      t20 = claim_text(pre2_nodes,
      /*selected2*/
      ctx[7]);
      pre2_nodes.forEach(detach_dev);
      t21 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre3_nodes = children(pre3);
      t22 = claim_text(pre3_nodes, "Clicked: ");
      t23 = claim_text(pre3_nodes,
      /*clicked2*/
      ctx[5]);
      pre3_nodes.forEach(detach_dev);
      t24 = claim_space(section_nodes);
      div7 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div7_nodes = children(div7);
      t25 = claim_text(div7_nodes, "Long div for scrolling...");
      div7_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Menu - SMUI";
      add_location(h2, file, 5, 2, 71);
      add_location(div0, file, 7, 2, 88);
      set_style(div1, "min-width", "100px");
      add_location(div1, file, 22, 4, 544);
      add_location(div2, file, 19, 2, 505);
      add_location(div3, file, 39, 4, 1166);
      add_location(div4, file, 36, 2, 1095);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file, 73, 2, 2383);
      set_style(div5, "min-width", "100px");
      add_location(div5, file, 78, 4, 2464);
      add_location(div6, file, 75, 2, 2431);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file, 112, 2, 3655);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file, 113, 2, 3708);
      attr_dev(pre3, "class", "status");
      add_location(pre3, file, 114, 2, 3761);
      set_style(div7, "padding-top", "200px");
      add_location(div7, file, 116, 2, 3810);
      add_location(section, file, 4, 0, 59);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(menu0, div0, null);
      append_dev(section, t3);
      append_dev(section, div2);
      append_dev(div2, t4);
      append_dev(div2, div1);
      mount_component(button0, div1, null);
      append_dev(div1, t5);
      mount_component(menu1, div1, null);
      append_dev(section, t6);
      append_dev(section, div4);
      append_dev(div4, t7);
      append_dev(div4, div3);
      mount_component(button1, div3, null);
      append_dev(div3, t8);
      mount_component(menu2_1, div3, null);
      /*div3_binding*/

      ctx[25](div3);
      Anchor_action = Anchor.call(null, div3) || {};
      append_dev(section, t9);
      append_dev(section, pre0);
      append_dev(pre0, t10);
      append_dev(pre0, t11);
      append_dev(section, t12);
      append_dev(section, div6);
      append_dev(div6, t13);
      append_dev(div6, div5);
      mount_component(button2, div5, null);
      append_dev(div5, t14);
      mount_component(menu3_1, div5, null);
      append_dev(section, t15);
      append_dev(section, pre1);
      append_dev(pre1, t16);
      append_dev(pre1, t17);
      append_dev(section, t18);
      append_dev(section, pre2);
      append_dev(pre2, t19);
      append_dev(pre2, t20);
      append_dev(section, t21);
      append_dev(section, pre3);
      append_dev(pre3, t22);
      append_dev(pre3, t23);
      append_dev(section, t24);
      append_dev(section, div7);
      append_dev(div7, t25);
      current = true;
    },
    p: function update(ctx, dirty) {
      var menu0_changes = {};

      if (dirty[0] &
      /*clicked*/
      16 | dirty[1] &
      /*$$scope*/
      32) {
        menu0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu0.$set(menu0_changes);
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var menu1_changes = {};

      if (dirty[0] &
      /*clicked*/
      16 | dirty[1] &
      /*$$scope*/
      32) {
        menu1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu1.$set(menu1_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var menu2_1_changes = {};

      if (dirty[0] &
      /*clicked*/
      16 | dirty[1] &
      /*$$scope*/
      32) {
        menu2_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_anchorElement && dirty[0] &
      /*anchor2*/
      8) {
        updating_anchorElement = true;
        menu2_1_changes.anchorElement =
        /*anchor2*/
        ctx[3];
        add_flush_callback(function () {
          return updating_anchorElement = false;
        });
      }

      menu2_1.$set(menu2_1_changes);
      if (!current || dirty[0] &
      /*clicked*/
      16) set_data_dev(t11,
      /*clicked*/
      ctx[4]);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      32) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
      var menu3_1_changes = {};

      if (dirty[0] &
      /*clicked2, selected2, selected1*/
      224 | dirty[1] &
      /*$$scope*/
      32) {
        menu3_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu3_1.$set(menu3_1_changes);
      if (!current || dirty[0] &
      /*selected1*/
      64) set_data_dev(t17,
      /*selected1*/
      ctx[6]);
      if (!current || dirty[0] &
      /*selected2*/
      128) set_data_dev(t20,
      /*selected2*/
      ctx[7]);
      if (!current || dirty[0] &
      /*clicked2*/
      32) set_data_dev(t23,
      /*clicked2*/
      ctx[5]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(menu0.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(menu1.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu2_1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(menu3_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu0.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(menu1.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu2_1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(menu3_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(menu0);
      destroy_component(button0);
      /*menu1_binding*/

      ctx[17](null);
      destroy_component(menu1);
      destroy_component(button1);
      /*menu2_1_binding*/

      ctx[23](null);
      destroy_component(menu2_1);
      /*div3_binding*/

      ctx[25](null);
      if (Anchor_action && is_function(Anchor_action.destroy)) Anchor_action.destroy();
      destroy_component(button2);
      /*menu3_1_binding*/

      ctx[30](null);
      destroy_component(menu3_1);
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
  var menu;
  var menu2;
  var menu3;
  var anchor2;
  var clicked = "nothing yet";
  var clicked2 = "nothing yet";
  var selected1 = "Red";
  var selected2 = "Small";

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate(4, clicked = "Cut");
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate(4, clicked = "Copy");
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate(4, clicked = "Paste");
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate(4, clicked = "Delete");
  };

  var click_handler = function click_handler() {
    return menu.setOpen(true);
  };

  var SMUI_action_handler_4 = function SMUI_action_handler_4() {
    return $$invalidate(4, clicked = "Cut");
  };

  var SMUI_action_handler_5 = function SMUI_action_handler_5() {
    return $$invalidate(4, clicked = "Copy");
  };

  var SMUI_action_handler_6 = function SMUI_action_handler_6() {
    return $$invalidate(4, clicked = "Paste");
  };

  var SMUI_action_handler_7 = function SMUI_action_handler_7() {
    return $$invalidate(4, clicked = "Delete");
  };

  function menu1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(0, menu = $$value);
    });
  }

  var click_handler_1 = function click_handler_1() {
    return menu2.setOpen(true);
  };

  var SMUI_action_handler_8 = function SMUI_action_handler_8() {
    return $$invalidate(4, clicked = "Cut");
  };

  var SMUI_action_handler_9 = function SMUI_action_handler_9() {
    return $$invalidate(4, clicked = "Copy");
  };

  var SMUI_action_handler_10 = function SMUI_action_handler_10() {
    return $$invalidate(4, clicked = "Paste");
  };

  var SMUI_action_handler_11 = function SMUI_action_handler_11() {
    return $$invalidate(4, clicked = "Delete");
  };

  function menu2_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(1, menu2 = $$value);
    });
  }

  function menu2_1_anchorElement_binding(value) {
    anchor2 = value;
    $$invalidate(3, anchor2);
  }

  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(3, anchor2 = $$value);
    });
  }

  var click_handler_2 = function click_handler_2() {
    return menu3.setOpen(true);
  };

  var SMUI_action_handler_12 = function SMUI_action_handler_12(item) {
    return $$invalidate(6, selected1 = item);
  };

  var SMUI_action_handler_13 = function SMUI_action_handler_13(item) {
    return $$invalidate(7, selected2 = item);
  };

  var SMUI_action_handler_14 = function SMUI_action_handler_14() {
    return $$invalidate(5, clicked2 = "Save for Later");
  };

  function menu3_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(2, menu3 = $$value);
    });
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("menu" in $$props) $$invalidate(0, menu = $$props.menu);
    if ("menu2" in $$props) $$invalidate(1, menu2 = $$props.menu2);
    if ("menu3" in $$props) $$invalidate(2, menu3 = $$props.menu3);
    if ("anchor2" in $$props) $$invalidate(3, anchor2 = $$props.anchor2);
    if ("clicked" in $$props) $$invalidate(4, clicked = $$props.clicked);
    if ("clicked2" in $$props) $$invalidate(5, clicked2 = $$props.clicked2);
    if ("selected1" in $$props) $$invalidate(6, selected1 = $$props.selected1);
    if ("selected2" in $$props) $$invalidate(7, selected2 = $$props.selected2);
  };

  return [menu, menu2, menu3, anchor2, clicked, clicked2, selected1, selected2, SMUI_action_handler, SMUI_action_handler_1, SMUI_action_handler_2, SMUI_action_handler_3, click_handler, SMUI_action_handler_4, SMUI_action_handler_5, SMUI_action_handler_6, SMUI_action_handler_7, menu1_binding, click_handler_1, SMUI_action_handler_8, SMUI_action_handler_9, SMUI_action_handler_10, SMUI_action_handler_11, menu2_1_binding, menu2_1_anchorElement_binding, div3_binding, click_handler_2, SMUI_action_handler_12, SMUI_action_handler_13, SMUI_action_handler_14, menu3_1_binding];
}

var Menu_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Menu_1, _SvelteComponentDev);

  function Menu_1(options) {
    var _this;

    _classCallCheck(this, Menu_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu_1).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Menu_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Menu_1;
}(SvelteComponentDev);

export default Menu_1;
