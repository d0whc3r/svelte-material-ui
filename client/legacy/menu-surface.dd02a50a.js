import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, M as space, f as element, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, l as add_location, O as attr_dev, Z as set_style, m as insert_dev, P as append_dev, K as mount_component, $ as set_data_dev, t as transition_in, u as transition_out, L as destroy_component, r as is_function, F as binding_callbacks, H as bind, Q as add_flush_callback, D as empty, n as noop, aa as destroy_each } from './index.0812fa32.js';
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
import '@babel/runtime/helpers/esm/construct';
import './Div.d97c12da.js';
import './Span.f3477293.js';
import { B as Button } from './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Button.238fe4ea.js';
import './Label.cdd98476.js';
import './Icon.e7ebcf54.js';
import { L as List, S as Separator, T as Text } from './index.ec2d92bf.js';
import '@babel/runtime/regenerator';
import { I as Item } from './Item.02b48338.js';
import './prefixFilter.1941fe02.js';
import { M as MenuSurface, A as Anchor } from './index.92dcb99f.js';
import './MenuSurface.8fe21eef.js';
import { T as Textfield } from './index.fa97a865.js';
import './NotchedOutline.8f931fd5.js';
import { I as ImageList, a as Item$1, b as ImageAspectContainer, c as Image } from './index.d369ab33.js';

var css = ".menu-surface-image-list{width:200px}.menu-surface-image-list .mdc-image-list__item{width:calc(50% - 4.5px);margin:2px}";
styleInject(css);

var file = "src/routes/demo/menu-surface.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  child_ctx[21] = i;
  return child_ctx;
} // (9:4) <MenuSurface static style="max-width: 350px;">


function create_default_slot_18(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("This is a menu surface. It's similar to a menu. It is more versatile,\n        but requires more configuration. It can contain more than just a list,\n        like rich popover content, forms, images, etc.");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        style: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This is a menu surface. It's similar to a menu. It is more versatile,\n        but requires more configuration. It can contain more than just a list,\n        like rich popover content, forms, images, etc.");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_style(p, "margin", "1em");
      add_location(p, file, 9, 6, 167);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(9:4) <MenuSurface static style=\\\"max-width: 350px;\\\">",
    ctx: ctx
  });
  return block;
} // (21:53) <Text>


function create_default_slot_17(ctx) {
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(21:53) <Text>",
    ctx: ctx
  });
  return block;
} // (21:8) <Item on:SMUI:action={() => clicked = 'Cut'}>


function create_default_slot_16(ctx) {
  var current;
  var text_1 = new Text({
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

      if (dirty[0] &
      /*$$scope*/
      4194304) {
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(21:8) <Item on:SMUI:action={() => clicked = 'Cut'}>",
    ctx: ctx
  });
  return block;
} // (22:54) <Text>


function create_default_slot_15(ctx) {
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
    id: create_default_slot_15.name,
    type: "slot",
    source: "(22:54) <Text>",
    ctx: ctx
  });
  return block;
} // (22:8) <Item on:SMUI:action={() => clicked = 'Copy'}>


function create_default_slot_14(ctx) {
  var current;
  var text_1 = new Text({
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

      if (dirty[0] &
      /*$$scope*/
      4194304) {
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(22:8) <Item on:SMUI:action={() => clicked = 'Copy'}>",
    ctx: ctx
  });
  return block;
} // (23:55) <Text>


function create_default_slot_13(ctx) {
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
    id: create_default_slot_13.name,
    type: "slot",
    source: "(23:55) <Text>",
    ctx: ctx
  });
  return block;
} // (23:8) <Item on:SMUI:action={() => clicked = 'Paste'}>


function create_default_slot_12(ctx) {
  var current;
  var text_1 = new Text({
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

      if (dirty[0] &
      /*$$scope*/
      4194304) {
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(23:8) <Item on:SMUI:action={() => clicked = 'Paste'}>",
    ctx: ctx
  });
  return block;
} // (25:56) <Text>


function create_default_slot_11(ctx) {
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(25:56) <Text>",
    ctx: ctx
  });
  return block;
} // (25:8) <Item on:SMUI:action={() => clicked = 'Delete'}>


function create_default_slot_10(ctx) {
  var current;
  var text_1 = new Text({
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

      if (dirty[0] &
      /*$$scope*/
      4194304) {
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(25:8) <Item on:SMUI:action={() => clicked = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (20:6) <List>


function create_default_slot_9(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
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
  item0.$on("SMUI:action",
  /*SMUI_action_handler*/
  ctx[6]);
  var item1 = new Item({
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
  item1.$on("SMUI:action",
  /*SMUI_action_handler_1*/
  ctx[7]);
  var item2 = new Item({
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
  item2.$on("SMUI:action",
  /*SMUI_action_handler_2*/
  ctx[8]);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
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
  item3.$on("SMUI:action",
  /*SMUI_action_handler_3*/
  ctx[9]);
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

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(20:6) <List>",
    ctx: ctx
  });
  return block;
} // (19:4) <MenuSurface static>


function create_default_slot_8(ctx) {
  var current;
  var list = new List({
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
      /*$$scope, clicked*/
      4194336) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(19:4) <MenuSurface static>",
    ctx: ctx
  });
  return block;
} // (36:6) <Button on:click={() => formSurface.setOpen(true)}>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Menu Surface");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Menu Surface");
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
    source: "(36:6) <Button on:click={() => formSurface.setOpen(true)}>",
    ctx: ctx
  });
  return block;
} // (41:10) <Button style="margin-top: 1em;" on:click={() => formSurface.setOpen(false)}>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Submit");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Submit");
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
    source: "(41:10) <Button style=\\\"margin-top: 1em;\\\" on:click={() => formSurface.setOpen(false)}>",
    ctx: ctx
  });
  return block;
} // (37:6) <MenuSurface bind:this={formSurface} anchorCorner="BOTTOM_LEFT">


function create_default_slot_5(ctx) {
  var div;
  var updating_value;
  var t0;
  var updating_value_1;
  var t1;
  var current;

  function textfield0_value_binding(value) {
    /*textfield0_value_binding*/
    ctx[11].call(null, value);
  }

  var textfield0_props = {
    label: "Name"
  };

  if (
  /*name*/
  ctx[1] !== void 0) {
    textfield0_props.value =
    /*name*/
    ctx[1];
  }

  var textfield0 = new Textfield({
    props: textfield0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield0, "value", textfield0_value_binding);
  });

  function textfield1_value_binding(value_1) {
    /*textfield1_value_binding*/
    ctx[12].call(null, value_1);
  }

  var textfield1_props = {
    label: "Email",
    type: "email"
  };

  if (
  /*email*/
  ctx[2] !== void 0) {
    textfield1_props.value =
    /*email*/
    ctx[2];
  }

  var textfield1 = new Textfield({
    props: textfield1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield1, "value", textfield1_value_binding);
  });
  var button = new Button({
    props: {
      style: "margin-top: 1em;",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click",
  /*click_handler_1*/
  ctx[13]);
  var block = {
    c: function create() {
      div = element("div");
      create_component(textfield0.$$.fragment);
      t0 = space();
      create_component(textfield1.$$.fragment);
      t1 = space();
      create_component(button.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        style: true
      });
      var div_nodes = children(div);
      claim_component(textfield0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(textfield1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(button.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_style(div, "margin", "1em");
      set_style(div, "display", "flex");
      set_style(div, "flex-direction", "column");
      set_style(div, "align-items", "flex-end");
      add_location(div, file, 37, 8, 1186);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(textfield0, div, null);
      append_dev(div, t0);
      mount_component(textfield1, div, null);
      append_dev(div, t1);
      mount_component(button, div, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var textfield0_changes = {};

      if (!updating_value && dirty[0] &
      /*name*/
      2) {
        updating_value = true;
        textfield0_changes.value =
        /*name*/
        ctx[1];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      textfield0.$set(textfield0_changes);
      var textfield1_changes = {};

      if (!updating_value_1 && dirty[0] &
      /*email*/
      4) {
        updating_value_1 = true;
        textfield1_changes.value =
        /*email*/
        ctx[2];
        add_flush_callback(function () {
          return updating_value_1 = false;
        });
      }

      textfield1.$set(textfield1_changes);
      var button_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(textfield0.$$.fragment, local);
      transition_in(textfield1.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(textfield0.$$.fragment, local);
      transition_out(textfield1.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(textfield0);
      destroy_component(textfield1);
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(37:6) <MenuSurface bind:this={formSurface} anchorCorner=\\\"BOTTOM_LEFT\\\">",
    ctx: ctx
  });
  return block;
} // (51:6) <Button on:click={() => imageListSurface.setOpen(true)}>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Menu Surface");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Menu Surface");
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
    source: "(51:6) <Button on:click={() => imageListSurface.setOpen(true)}>",
    ctx: ctx
  });
  return block;
} // (56:14) <ImageAspectContainer>


function create_default_slot_3(ctx) {
  var current;
  var image = new Image({
    props: {
      src: "https://via.placeholder.com/100x100.png?text=Image%20" + (
      /*i*/
      ctx[21] + 1),
      alt: "Image " + (
      /*i*/
      ctx[21] + 1)
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(image.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(image.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(image, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(image, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(56:14) <ImageAspectContainer>",
    ctx: ctx
  });
  return block;
} // (55:12) <ImageListItem>


function create_default_slot_2(ctx) {
  var t;
  var current;
  var imageaspectcontainer = new ImageAspectContainer({
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
      create_component(imageaspectcontainer.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(imageaspectcontainer.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(imageaspectcontainer, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imageaspectcontainer_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        imageaspectcontainer_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imageaspectcontainer.$set(imageaspectcontainer_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imageaspectcontainer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imageaspectcontainer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(imageaspectcontainer, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(55:12) <ImageListItem>",
    ctx: ctx
  });
  return block;
} // (54:10) {#each Array(4) as _unused, i}


function create_each_block(ctx) {
  var current;
  var imagelistitem = new Item$1({
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
      create_component(imagelistitem.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(imagelistitem.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(imagelistitem, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imagelistitem_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        imagelistitem_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imagelistitem.$set(imagelistitem_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imagelistitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imagelistitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(imagelistitem, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(54:10) {#each Array(4) as _unused, i}",
    ctx: ctx
  });
  return block;
} // (53:8) <ImageList class="menu-surface-image-list">


function create_default_slot_1(ctx) {
  var each_1_anchor;
  var current;
  var each_value = Array(4);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
    p: noop,
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(53:8) <ImageList class=\\\"menu-surface-image-list\\\">",
    ctx: ctx
  });
  return block;
} // (52:6) <MenuSurface bind:this={imageListSurface} anchor={false} bind:anchorElement={imageListAnchor}>


function create_default_slot(ctx) {
  var current;
  var imagelist = new ImageList({
    props: {
      class: "menu-surface-image-list",
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
      create_component(imagelist.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(imagelist.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(imagelist, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imagelist_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        imagelist_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imagelist.$set(imagelist_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imagelist.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imagelist.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(imagelist, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(52:6) <MenuSurface bind:this={imageListSurface} anchor={false} bind:anchorElement={imageListAnchor}>",
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
  var div1;
  var t4;
  var pre;
  var t5;
  var t6;
  var t7;
  var div3;
  var t8;
  var div2;
  var t9;
  var t10;
  var div5;
  var t11;
  var div4;
  var t12;
  var updating_anchorElement;
  var Anchor_action;
  var t13;
  var div6;
  var t14;
  var current;
  var menusurface0 = new MenuSurface({
    props: {
      static: true,
      style: "max-width: 350px;",
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var menusurface1 = new MenuSurface({
    props: {
      static: true,
      $$slots: {
        default: [create_default_slot_8]
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
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[10]);
  var menusurface2_props = {
    anchorCorner: "BOTTOM_LEFT",
    $$slots: {
      default: [create_default_slot_5]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menusurface2 = new MenuSurface({
    props: menusurface2_props,
    $$inline: true
  });
  /*menusurface2_binding*/

  ctx[14](menusurface2);
  var button1 = new Button({
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
  button1.$on("click",
  /*click_handler_2*/
  ctx[15]);

  function menusurface3_anchorElement_binding(value) {
    /*menusurface3_anchorElement_binding*/
    ctx[17].call(null, value);
  }

  var menusurface3_props = {
    anchor: false,
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*imageListAnchor*/
  ctx[4] !== void 0) {
    menusurface3_props.anchorElement =
    /*imageListAnchor*/
    ctx[4];
  }

  var menusurface3 = new MenuSurface({
    props: menusurface3_props,
    $$inline: true
  });
  /*menusurface3_binding*/

  ctx[16](menusurface3);
  binding_callbacks.push(function () {
    return bind(menusurface3, "anchorElement", menusurface3_anchorElement_binding);
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Menu Surface");
      t2 = space();
      div0 = element("div");
      create_component(menusurface0.$$.fragment);
      t3 = space();
      div1 = element("div");
      create_component(menusurface1.$$.fragment);
      t4 = space();
      pre = element("pre");
      t5 = text("Clicked: ");
      t6 = text(
      /*clicked*/
      ctx[5]);
      t7 = space();
      div3 = element("div");
      t8 = text("Anchored automatically, corner set to bottom-left:\n\n    ");
      div2 = element("div");
      create_component(button0.$$.fragment);
      t9 = space();
      create_component(menusurface2.$$.fragment);
      t10 = space();
      div5 = element("div");
      t11 = text("Anchored manually:\n\n    ");
      div4 = element("div");
      create_component(button1.$$.fragment);
      t12 = space();
      create_component(menusurface3.$$.fragment);
      t13 = space();
      div6 = element("div");
      t14 = text("Long div for scrolling...");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Menu Surface");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(menusurface0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(menusurface1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t5 = claim_text(pre_nodes, "Clicked: ");
      t6 = claim_text(pre_nodes,
      /*clicked*/
      ctx[5]);
      pre_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t8 = claim_text(div3_nodes, "Anchored automatically, corner set to bottom-left:\n\n    ");
      div2 = claim_element(div3_nodes, "DIV", {
        style: true
      });
      var div2_nodes = children(div2);
      claim_component(button0.$$.fragment, div2_nodes);
      t9 = claim_space(div2_nodes);
      claim_component(menusurface2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {});
      var div5_nodes = children(div5);
      t11 = claim_text(div5_nodes, "Anchored manually:\n\n    ");
      div4 = claim_element(div5_nodes, "DIV", {});
      var div4_nodes = children(div4);
      claim_component(button1.$$.fragment, div4_nodes);
      t12 = claim_space(div4_nodes);
      claim_component(menusurface3.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div6_nodes = children(div6);
      t14 = claim_text(div6_nodes, "Long div for scrolling...");
      div6_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Menu Surface - SMUI";
      add_location(h2, file, 5, 2, 79);
      add_location(div0, file, 7, 2, 104);
      add_location(div1, file, 17, 2, 446);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 29, 2, 877);
      set_style(div2, "min-width", "100px");
      add_location(div2, file, 34, 4, 991);
      add_location(div3, file, 31, 2, 925);
      add_location(div4, file, 49, 4, 1596);
      add_location(div5, file, 46, 2, 1562);
      set_style(div6, "padding-top", "200px");
      add_location(div6, file, 65, 2, 2252);
      add_location(section, file, 4, 0, 67);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(menusurface0, div0, null);
      append_dev(section, t3);
      append_dev(section, div1);
      mount_component(menusurface1, div1, null);
      append_dev(section, t4);
      append_dev(section, pre);
      append_dev(pre, t5);
      append_dev(pre, t6);
      append_dev(section, t7);
      append_dev(section, div3);
      append_dev(div3, t8);
      append_dev(div3, div2);
      mount_component(button0, div2, null);
      append_dev(div2, t9);
      mount_component(menusurface2, div2, null);
      append_dev(section, t10);
      append_dev(section, div5);
      append_dev(div5, t11);
      append_dev(div5, div4);
      mount_component(button1, div4, null);
      append_dev(div4, t12);
      mount_component(menusurface3, div4, null);
      /*div4_binding*/

      ctx[18](div4);
      Anchor_action = Anchor.call(null, div4) || {};
      append_dev(section, t13);
      append_dev(section, div6);
      append_dev(div6, t14);
      current = true;
    },
    p: function update(ctx, dirty) {
      var menusurface0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        menusurface0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menusurface0.$set(menusurface0_changes);
      var menusurface1_changes = {};

      if (dirty[0] &
      /*$$scope, clicked*/
      4194336) {
        menusurface1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menusurface1.$set(menusurface1_changes);
      if (!current || dirty[0] &
      /*clicked*/
      32) set_data_dev(t6,
      /*clicked*/
      ctx[5]);
      var button0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var menusurface2_changes = {};

      if (dirty[0] &
      /*$$scope, formSurface, email, name*/
      4194311) {
        menusurface2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menusurface2.$set(menusurface2_changes);
      var button1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var menusurface3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      4194304) {
        menusurface3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_anchorElement && dirty[0] &
      /*imageListAnchor*/
      16) {
        updating_anchorElement = true;
        menusurface3_changes.anchorElement =
        /*imageListAnchor*/
        ctx[4];
        add_flush_callback(function () {
          return updating_anchorElement = false;
        });
      }

      menusurface3.$set(menusurface3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(menusurface0.$$.fragment, local);
      transition_in(menusurface1.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(menusurface2.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menusurface3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menusurface0.$$.fragment, local);
      transition_out(menusurface1.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(menusurface2.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menusurface3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(menusurface0);
      destroy_component(menusurface1);
      destroy_component(button0);
      /*menusurface2_binding*/

      ctx[14](null);
      destroy_component(menusurface2);
      destroy_component(button1);
      /*menusurface3_binding*/

      ctx[16](null);
      destroy_component(menusurface3);
      /*div4_binding*/

      ctx[18](null);
      if (Anchor_action && is_function(Anchor_action.destroy)) Anchor_action.destroy();
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
  var formSurface;
  var name = "";
  var email = "";
  var imageListSurface;
  var imageListAnchor;
  var clicked = "nothing yet";

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate(5, clicked = "Cut");
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate(5, clicked = "Copy");
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate(5, clicked = "Paste");
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate(5, clicked = "Delete");
  };

  var click_handler = function click_handler() {
    return formSurface.setOpen(true);
  };

  function textfield0_value_binding(value) {
    name = value;
    $$invalidate(1, name);
  }

  function textfield1_value_binding(value_1) {
    email = value_1;
    $$invalidate(2, email);
  }

  var click_handler_1 = function click_handler_1() {
    return formSurface.setOpen(false);
  };

  function menusurface2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(0, formSurface = $$value);
    });
  }

  var click_handler_2 = function click_handler_2() {
    return imageListSurface.setOpen(true);
  };

  function menusurface3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(3, imageListSurface = $$value);
    });
  }

  function menusurface3_anchorElement_binding(value) {
    imageListAnchor = value;
    $$invalidate(4, imageListAnchor);
  }

  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, imageListAnchor = $$value);
    });
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("formSurface" in $$props) $$invalidate(0, formSurface = $$props.formSurface);
    if ("name" in $$props) $$invalidate(1, name = $$props.name);
    if ("email" in $$props) $$invalidate(2, email = $$props.email);
    if ("imageListSurface" in $$props) $$invalidate(3, imageListSurface = $$props.imageListSurface);
    if ("imageListAnchor" in $$props) $$invalidate(4, imageListAnchor = $$props.imageListAnchor);
    if ("clicked" in $$props) $$invalidate(5, clicked = $$props.clicked);
  };

  return [formSurface, name, email, imageListSurface, imageListAnchor, clicked, SMUI_action_handler, SMUI_action_handler_1, SMUI_action_handler_2, SMUI_action_handler_3, click_handler, textfield0_value_binding, textfield1_value_binding, click_handler_1, menusurface2_binding, click_handler_2, menusurface3_binding, menusurface3_anchorElement_binding, div4_binding];
}

var Menu_surface =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Menu_surface, _SvelteComponentDev);

  function Menu_surface(options) {
    var _this;

    _classCallCheck(this, Menu_surface);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu_surface).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Menu_surface",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Menu_surface;
}(SvelteComponentDev);

export default Menu_surface;
