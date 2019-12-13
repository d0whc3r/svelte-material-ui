import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, M as space, f as element, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, l as add_location, Z as set_style, O as attr_dev, m as insert_dev, P as append_dev, K as mount_component, $ as set_data_dev, t as transition_in, u as transition_out, L as destroy_component, F as binding_callbacks, H as bind, Q as add_flush_callback } from './index.0812fa32.js';
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
import { B as Button } from './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Button.238fe4ea.js';
import { L as Label } from './Label.cdd98476.js';
import { I as Icon } from './Icon.e7ebcf54.js';
import { I as IconButton } from './index.15f8a983.js';

var file = "src/routes/demo/icon-button.svelte"; // (9:4) <IconButton class="material-icons" on:click={() => clicked++}>

function create_default_slot_13(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("build");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "build");
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
    source: "(9:4) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (12:4) <IconButton class="material-icons" on:click={() => clicked++} disabled>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("search");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "search");
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
    source: "(12:4) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (15:4) <IconButton class="material-icons" on:click={() => clicked++} ripple={false}>


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("add_shopping_cart");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "add_shopping_cart");
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
    source: "(15:4) <IconButton class=\\\"material-icons\\\" on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (21:6) <Icon class="material-icons" on>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("star");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "star");
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
    source: "(21:6) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (22:6) <Icon class="material-icons">


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("star_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "star_border");
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
    source: "(22:6) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (20:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>


function create_default_slot_8(ctx) {
  var t;
  var current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_10]
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
      16384) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(20:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>",
    ctx: ctx
  });
  return block;
} // (27:6) <Icon class="material-icons" on>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("alarm_on");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "alarm_on");
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
    source: "(27:6) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (28:6) <Icon class="material-icons">


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("alarm_off");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "alarm_off");
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
    source: "(28:6) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (26:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>


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
      16384) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
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
    source: "(26:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>",
    ctx: ctx
  });
  return block;
} // (30:52) <Label>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Toggle Programmatically");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Toggle Programmatically");
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
    source: "(30:52) <Label>",
    ctx: ctx
  });
  return block;
} // (30:4) <Button on:click={() => initialOn = !initialOn}>


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
      16384) {
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
    source: "(30:4) <Button on:click={() => initialOn = !initialOn}>",
    ctx: ctx
  });
  return block;
} // (34:6) <Icon class="material-icons" on>


function create_default_slot_2(ctx) {
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
    id: create_default_slot_2.name,
    type: "slot",
    source: "(34:6) <Icon class=\\\"material-icons\\\" on>",
    ctx: ctx
  });
  return block;
} // (35:6) <Icon class="material-icons">


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("bookmark_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "bookmark_border");
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
    source: "(35:6) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (33:4) <IconButton on:click={() => clicked++} on:click={() => usingEvents = !usingEvents} pressed={usingEvents}>


function create_default_slot(ctx) {
  var t;
  var current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_2]
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
      16384) {
        icon0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon0.$set(icon0_changes);
      var icon1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
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
    id: create_default_slot.name,
    type: "slot",
    source: "(33:4) <IconButton on:click={() => clicked++} on:click={() => usingEvents = !usingEvents} pressed={usingEvents}>",
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
  var t5;
  var div2;
  var t6;
  var t7;
  var div3;
  var updating_pressed;
  var t8;
  var div4;
  var updating_pressed_1;
  var t9;
  var t10;
  var div5;
  var t11;
  var code;
  var t12;
  var t13;
  var t14;
  var pre;
  var t15;
  var t16;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton0.$on("click",
  /*click_handler*/
  ctx[4]);
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      disabled: true,
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton1.$on("click",
  /*click_handler_1*/
  ctx[5]);
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      ripple: false,
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton2.$on("click",
  /*click_handler_2*/
  ctx[6]);

  function iconbutton3_pressed_binding(value) {
    /*iconbutton3_pressed_binding*/
    ctx[7].call(null, value);
  }

  var iconbutton3_props = {
    toggle: true,
    $$slots: {
      default: [create_default_slot_8]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*initialOff*/
  ctx[1] !== void 0) {
    iconbutton3_props.pressed =
    /*initialOff*/
    ctx[1];
  }

  var iconbutton3 = new IconButton({
    props: iconbutton3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(iconbutton3, "pressed", iconbutton3_pressed_binding);
  });
  iconbutton3.$on("click",
  /*click_handler_3*/
  ctx[8]);

  function iconbutton4_pressed_binding(value_1) {
    /*iconbutton4_pressed_binding*/
    ctx[9].call(null, value_1);
  }

  var iconbutton4_props = {
    toggle: true,
    $$slots: {
      default: [create_default_slot_5]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*initialOn*/
  ctx[2] !== void 0) {
    iconbutton4_props.pressed =
    /*initialOn*/
    ctx[2];
  }

  var iconbutton4 = new IconButton({
    props: iconbutton4_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(iconbutton4, "pressed", iconbutton4_pressed_binding);
  });
  iconbutton4.$on("click",
  /*click_handler_4*/
  ctx[10]);
  var button = new Button({
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
  button.$on("click",
  /*click_handler_5*/
  ctx[11]);
  var iconbutton5 = new IconButton({
    props: {
      pressed:
      /*usingEvents*/
      ctx[3],
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton5.$on("click",
  /*click_handler_6*/
  ctx[12]);
  iconbutton5.$on("click",
  /*click_handler_7*/
  ctx[13]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Icon Button");
      t2 = space();
      div0 = element("div");
      create_component(iconbutton0.$$.fragment);
      t3 = space();
      div1 = element("div");
      create_component(iconbutton1.$$.fragment);
      t4 = text(" (disabled)");
      t5 = space();
      div2 = element("div");
      create_component(iconbutton2.$$.fragment);
      t6 = text(" (no ripple)");
      t7 = text("\n\n  Toggle buttons:\n  ");
      div3 = element("div");
      create_component(iconbutton3.$$.fragment);
      t8 = space();
      div4 = element("div");
      create_component(iconbutton4.$$.fragment);
      t9 = space();
      create_component(button.$$.fragment);
      t10 = space();
      div5 = element("div");
      create_component(iconbutton5.$$.fragment);
      t11 = text("\n    (Using events instead of bound variables. Note: don't use ");
      code = element("code");
      t12 = text("toggle");
      t13 = text(" prop in this case.)");
      t14 = space();
      pre = element("pre");
      t15 = text("Clicked: ");
      t16 = text(
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
      t1 = claim_text(h2_nodes, "Icon Button");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div0_nodes = children(div0);
      claim_component(iconbutton0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div1_nodes = children(div1);
      claim_component(iconbutton1.$$.fragment, div1_nodes);
      t4 = claim_text(div1_nodes, " (disabled)");
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div2_nodes = children(div2);
      claim_component(iconbutton2.$$.fragment, div2_nodes);
      t6 = claim_text(div2_nodes, " (no ripple)");
      div2_nodes.forEach(detach_dev);
      t7 = claim_text(section_nodes, "\n\n  Toggle buttons:\n  ");
      div3 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div3_nodes = children(div3);
      claim_component(iconbutton3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div4_nodes = children(div4);
      claim_component(iconbutton4.$$.fragment, div4_nodes);
      t9 = claim_space(div4_nodes);
      claim_component(button.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        style: true
      });
      var div5_nodes = children(div5);
      claim_component(iconbutton5.$$.fragment, div5_nodes);
      t11 = claim_text(div5_nodes, "\n    (Using events instead of bound variables. Note: don't use ");
      code = claim_element(div5_nodes, "CODE", {});
      var code_nodes = children(code);
      t12 = claim_text(code_nodes, "toggle");
      code_nodes.forEach(detach_dev);
      t13 = claim_text(div5_nodes, " prop in this case.)");
      div5_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t15 = claim_text(pre_nodes, "Clicked: ");
      t16 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Icon Button - SMUI";
      add_location(h2, file, 5, 2, 78);
      set_style(div0, "display", "flex");
      set_style(div0, "align-items", "center");
      add_location(div0, file, 7, 2, 102);
      set_style(div1, "display", "flex");
      set_style(div1, "align-items", "center");
      add_location(div1, file, 10, 2, 248);
      set_style(div2, "display", "flex");
      set_style(div2, "align-items", "center");
      add_location(div2, file, 13, 2, 415);
      set_style(div3, "display", "flex");
      set_style(div3, "align-items", "center");
      add_location(div3, file, 18, 2, 619);
      set_style(div4, "display", "flex");
      set_style(div4, "align-items", "center");
      add_location(div4, file, 24, 2, 879);
      add_location(code, file, 36, 67, 1597);
      set_style(div5, "display", "flex");
      set_style(div5, "align-items", "center");
      add_location(div5, file, 31, 2, 1240);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 39, 2, 1654);
      add_location(section, file, 4, 0, 66);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(iconbutton0, div0, null);
      append_dev(section, t3);
      append_dev(section, div1);
      mount_component(iconbutton1, div1, null);
      append_dev(div1, t4);
      append_dev(section, t5);
      append_dev(section, div2);
      mount_component(iconbutton2, div2, null);
      append_dev(div2, t6);
      append_dev(section, t7);
      append_dev(section, div3);
      mount_component(iconbutton3, div3, null);
      append_dev(section, t8);
      append_dev(section, div4);
      mount_component(iconbutton4, div4, null);
      append_dev(div4, t9);
      mount_component(button, div4, null);
      append_dev(section, t10);
      append_dev(section, div5);
      mount_component(iconbutton5, div5, null);
      append_dev(div5, t11);
      append_dev(div5, code);
      append_dev(code, t12);
      append_dev(div5, t13);
      append_dev(section, t14);
      append_dev(section, pre);
      append_dev(pre, t15);
      append_dev(pre, t16);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
        iconbutton2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton2.$set(iconbutton2_changes);
      var iconbutton3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
        iconbutton3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_pressed && dirty[0] &
      /*initialOff*/
      2) {
        updating_pressed = true;
        iconbutton3_changes.pressed =
        /*initialOff*/
        ctx[1];
        add_flush_callback(function () {
          return updating_pressed = false;
        });
      }

      iconbutton3.$set(iconbutton3_changes);
      var iconbutton4_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
        iconbutton4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_pressed_1 && dirty[0] &
      /*initialOn*/
      4) {
        updating_pressed_1 = true;
        iconbutton4_changes.pressed =
        /*initialOn*/
        ctx[2];
        add_flush_callback(function () {
          return updating_pressed_1 = false;
        });
      }

      iconbutton4.$set(iconbutton4_changes);
      var button_changes = {};

      if (dirty[0] &
      /*$$scope*/
      16384) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
      var iconbutton5_changes = {};
      if (dirty[0] &
      /*usingEvents*/
      8) iconbutton5_changes.pressed =
      /*usingEvents*/
      ctx[3];

      if (dirty[0] &
      /*$$scope*/
      16384) {
        iconbutton5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton5.$set(iconbutton5_changes);
      if (!current || dirty[0] &
      /*clicked*/
      1) set_data_dev(t16,
      /*clicked*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      transition_in(iconbutton3.$$.fragment, local);
      transition_in(iconbutton4.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(iconbutton5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      transition_out(iconbutton3.$$.fragment, local);
      transition_out(iconbutton4.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(iconbutton5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(iconbutton0);
      destroy_component(iconbutton1);
      destroy_component(iconbutton2);
      destroy_component(iconbutton3);
      destroy_component(iconbutton4);
      destroy_component(button);
      destroy_component(iconbutton5);
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
  var initialOff = false;
  var initialOn = true;
  var usingEvents = false;

  var click_handler = function click_handler() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, clicked++, clicked);
  };

  function iconbutton3_pressed_binding(value) {
    initialOff = value;
    $$invalidate(1, initialOff);
  }

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, clicked++, clicked);
  };

  function iconbutton4_pressed_binding(value_1) {
    initialOn = value_1;
    $$invalidate(2, initialOn);
  }

  var click_handler_4 = function click_handler_4() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate(2, initialOn = !initialOn);
  };

  var click_handler_6 = function click_handler_6() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_7 = function click_handler_7() {
    return $$invalidate(3, usingEvents = !usingEvents);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
    if ("initialOff" in $$props) $$invalidate(1, initialOff = $$props.initialOff);
    if ("initialOn" in $$props) $$invalidate(2, initialOn = $$props.initialOn);
    if ("usingEvents" in $$props) $$invalidate(3, usingEvents = $$props.usingEvents);
  };

  return [clicked, initialOff, initialOn, usingEvents, click_handler, click_handler_1, click_handler_2, iconbutton3_pressed_binding, click_handler_3, iconbutton4_pressed_binding, click_handler_4, click_handler_5, click_handler_6, click_handler_7];
}

var Icon_button =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Icon_button, _SvelteComponentDev);

  function Icon_button(options) {
    var _this;

    _classCallCheck(this, Icon_button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon_button).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon_button",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Icon_button;
}(SvelteComponentDev);

export default Icon_button;
