import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, I as create_component, J as claim_component, K as mount_component, t as transition_in, u as transition_out, L as destroy_component, M as space, f as element, W as text, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, P as append_dev, $ as set_data_dev, T as check_outros, aa as destroy_each, F as binding_callbacks, H as bind, Q as add_flush_callback, R as group_outros, n as noop } from './index.0812fa32.js';
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
import './Label.cdd98476.js';
import './Icon.e7ebcf54.js';
import '@babel/runtime/regenerator';
import { C as Checkbox } from './index.4e1eb8c9.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.4b041a46.js';

var file = "src/routes/demo/checkbox.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
} // (11:6) <span slot="label">


function create_label_slot_3(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 10, 6, 173);
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
    id: create_label_slot_3.name,
    type: "slot",
    source: "(11:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField>


function create_default_slot_4(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding(value) {
    /*checkbox_checked_binding*/
    ctx[5].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*simpleSelected*/
  ctx[0] !== void 0) {
    checkbox_props.checked =
    /*simpleSelected*/
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
      /*simpleSelected*/
      1) {
        updating_checked = true;
        checkbox_changes.checked =
        /*simpleSelected*/
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(9:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (20:6) <span slot="label">


function create_label_slot_2(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 19, 6, 386);
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
    source: "(20:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (18:4) <FormField align="end">


function create_default_slot_3(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_1(value) {
    /*checkbox_checked_binding_1*/
    ctx[6].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*simpleSelected2*/
  ctx[1] !== void 0) {
    checkbox_props.checked =
    /*simpleSelected2*/
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
      /*simpleSelected2*/
      2) {
        updating_checked = true;
        checkbox_changes.checked =
        /*simpleSelected2*/
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(18:4) <FormField align=\\\"end\\\">",
    ctx: ctx
  });
  return block;
} // (31:8) <span slot="label">


function create_label_slot_1(ctx) {
  var span;
  var t0_value =
  /*option*/
  ctx[10].name + "";
  var t0;
  var t1_value = (
  /*option*/
  ctx[10].disabled ? " (disabled)" : "") + "";
  var t1;
  var block = {
    c: function create() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 30, 8, 688);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      append_dev(span, t1);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_1.name,
    type: "slot",
    source: "(31:8) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (29:6) <FormField>


function create_default_slot_2(ctx) {
  var updating_group;
  var t0;
  var t1;
  var current;

  function checkbox_group_binding(value) {
    /*checkbox_group_binding*/
    ctx[7].call(null, value);
  }

  var checkbox_props = {
    value:
    /*option*/
    ctx[10].name,
    disabled:
    /*option*/
    ctx[10].disabled
  };

  if (
  /*selected*/
  ctx[2] !== void 0) {
    checkbox_props.group =
    /*selected*/
    ctx[2];
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
      t0 = space();
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selected*/
      4) {
        updating_group = true;
        checkbox_changes.group =
        /*selected*/
        ctx[2];
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(29:6) <FormField>",
    ctx: ctx
  });
  return block;
} // (28:4) {#each options as option}


function create_each_block(ctx) {
  var current;
  var formfield = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_2],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(formfield.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(formfield.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(formfield, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var formfield_changes = {};

      if (dirty[0] &
      /*$$scope, selected*/
      8196) {
        formfield_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(formfield, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(28:4) {#each options as option}",
    ctx: ctx
  });
  return block;
} // (42:6) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("I agree to the terms.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "I agree to the terms.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 41, 6, 1039);
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
    source: "(42:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (40:4) <FormField>


function create_default_slot_1(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding_2(value) {
    /*checkbox_checked_binding_2*/
    ctx[8].call(null, value);
  }

  var checkbox_props = {
    indeterminate:
    /*indeterminateChecked*/
    ctx[3] === null,
    input$required: true
  };

  if (
  /*indeterminateChecked*/
  ctx[3] !== void 0) {
    checkbox_props.checked =
    /*indeterminateChecked*/
    ctx[3];
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
      if (dirty[0] &
      /*indeterminateChecked*/
      8) checkbox_changes.indeterminate =
      /*indeterminateChecked*/
      ctx[3] === null;

      if (!updating_checked && dirty[0] &
      /*indeterminateChecked*/
      8) {
        updating_checked = true;
        checkbox_changes.checked =
        /*indeterminateChecked*/
        ctx[3];
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(40:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (47:2) <Button on:click={() => indeterminateChecked = null }>


function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("reset");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "reset");
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
    id: create_default_slot.name,
    type: "slot",
    source: "(47:2) <Button on:click={() => indeterminateChecked = null }>",
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
  var pre0;
  var t4;
  var t5;
  var t6;
  var div1;
  var t7;
  var pre1;
  var t8;
  var t9;
  var t10;
  var div2;
  var t11;
  var br0;
  var t12;
  var t13;
  var pre2;
  var t14;
  var t15_value =
  /*selected*/
  ctx[2].join(", ") + "";
  var t15;
  var t16;
  var div3;
  var t17;
  var br1;
  var t18;
  var t19;
  var pre3;
  var t20;
  var t21;
  var t22;
  var current;
  var formfield0 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_4],
        label: [create_label_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield1 = new FormField({
    props: {
      align: "end",
      $$slots: {
        default: [create_default_slot_3],
        label: [create_label_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var each_value =
  /*options*/
  ctx[4];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var formfield2 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_1],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var button = new Button({
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
  button.$on("click",
  /*click_handler*/
  ctx[9]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Checkbox");
      t2 = space();
      div0 = element("div");
      create_component(formfield0.$$.fragment);
      t3 = space();
      pre0 = element("pre");
      t4 = text("Checked: ");
      t5 = text(
      /*simpleSelected*/
      ctx[0]);
      t6 = space();
      div1 = element("div");
      create_component(formfield1.$$.fragment);
      t7 = space();
      pre1 = element("pre");
      t8 = text("Checked: ");
      t9 = text(
      /*simpleSelected2*/
      ctx[1]);
      t10 = space();
      div2 = element("div");
      t11 = text("Group checkbox:");
      br0 = element("br");
      t12 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t13 = space();
      pre2 = element("pre");
      t14 = text("Selected: ");
      t15 = text(t15_value);
      t16 = space();
      div3 = element("div");
      t17 = text("Indeterminate:");
      br1 = element("br");
      t18 = space();
      create_component(formfield2.$$.fragment);
      t19 = space();
      pre3 = element("pre");
      t20 = text("Checked: ");
      t21 = text(
      /*indeterminateChecked*/
      ctx[3]);
      t22 = space();
      create_component(button.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Checkbox");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(formfield0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Checked: ");
      t5 = claim_text(pre0_nodes,
      /*simpleSelected*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(formfield1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t8 = claim_text(pre1_nodes, "Checked: ");
      t9 = claim_text(pre1_nodes,
      /*simpleSelected2*/
      ctx[1]);
      pre1_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t11 = claim_text(div2_nodes, "Group checkbox:");
      br0 = claim_element(div2_nodes, "BR", {});
      t12 = claim_space(div2_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div2_nodes);
      }

      div2_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t14 = claim_text(pre2_nodes, "Selected: ");
      t15 = claim_text(pre2_nodes, t15_value);
      pre2_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t17 = claim_text(div3_nodes, "Indeterminate:");
      br1 = claim_element(div3_nodes, "BR", {});
      t18 = claim_space(div3_nodes);
      claim_component(formfield2.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre3_nodes = children(pre3);
      t20 = claim_text(pre3_nodes, "Checked: ");
      t21 = claim_text(pre3_nodes,
      /*indeterminateChecked*/
      ctx[3]);
      pre3_nodes.forEach(detach_dev);
      t22 = claim_space(section_nodes);
      claim_component(button.$$.fragment, section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Checkbox - SMUI";
      add_location(h2, file, 5, 2, 75);
      add_location(div0, file, 7, 2, 96);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file, 14, 2, 241);
      add_location(div1, file, 16, 2, 296);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file, 23, 2, 454);
      add_location(br0, file, 26, 19, 535);
      add_location(div2, file, 25, 2, 510);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file, 35, 2, 809);
      add_location(br1, file, 38, 18, 894);
      add_location(div3, file, 37, 2, 870);
      attr_dev(pre3, "class", "status");
      add_location(pre3, file, 45, 2, 1116);
      add_location(section, file, 4, 0, 63);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield0, div0, null);
      append_dev(section, t3);
      append_dev(section, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      mount_component(formfield1, div1, null);
      append_dev(section, t7);
      append_dev(section, pre1);
      append_dev(pre1, t8);
      append_dev(pre1, t9);
      append_dev(section, t10);
      append_dev(section, div2);
      append_dev(div2, t11);
      append_dev(div2, br0);
      append_dev(div2, t12);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div2, null);
      }

      append_dev(section, t13);
      append_dev(section, pre2);
      append_dev(pre2, t14);
      append_dev(pre2, t15);
      append_dev(section, t16);
      append_dev(section, div3);
      append_dev(div3, t17);
      append_dev(div3, br1);
      append_dev(div3, t18);
      mount_component(formfield2, div3, null);
      append_dev(section, t19);
      append_dev(section, pre3);
      append_dev(pre3, t20);
      append_dev(pre3, t21);
      append_dev(section, t22);
      mount_component(button, section, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var formfield0_changes = {};

      if (dirty[0] &
      /*$$scope, simpleSelected*/
      8193) {
        formfield0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield0.$set(formfield0_changes);
      if (!current || dirty[0] &
      /*simpleSelected*/
      1) set_data_dev(t5,
      /*simpleSelected*/
      ctx[0]);
      var formfield1_changes = {};

      if (dirty[0] &
      /*$$scope, simpleSelected2*/
      8194) {
        formfield1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield1.$set(formfield1_changes);
      if (!current || dirty[0] &
      /*simpleSelected2*/
      2) set_data_dev(t9,
      /*simpleSelected2*/
      ctx[1]);

      if (dirty[0] &
      /*options, selected*/
      20) {
        each_value =
        /*options*/
        ctx[4];

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

            each_blocks[_i4].m(div2, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if ((!current || dirty[0] &
      /*selected*/
      4) && t15_value !== (t15_value =
      /*selected*/
      ctx[2].join(", ") + "")) set_data_dev(t15, t15_value);
      var formfield2_changes = {};

      if (dirty[0] &
      /*$$scope, indeterminateChecked*/
      8200) {
        formfield2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield2.$set(formfield2_changes);
      if (!current || dirty[0] &
      /*indeterminateChecked*/
      8) set_data_dev(t21,
      /*indeterminateChecked*/
      ctx[3]);
      var button_changes = {};

      if (dirty[0] &
      /*$$scope*/
      8192) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield0.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      transition_in(formfield2.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield0.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      transition_out(formfield2.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(formfield0);
      destroy_component(formfield1);
      destroy_each(each_blocks, detaching);
      destroy_component(formfield2);
      destroy_component(button);
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
  var simpleSelected = false;
  var simpleSelected2 = false;
  var options = [{
    name: "Bashful",
    disabled: false
  }, {
    name: "Doc",
    disabled: true
  }, {
    name: "Dopey",
    disabled: false
  }, {
    name: "Happy",
    disabled: false
  }, {
    name: "Sleepy",
    disabled: false
  }, {
    name: "Sneezy",
    disabled: false
  }, {
    name: "Grumpy",
    disabled: false
  }];
  var selected = ["Happy", "Grumpy"];
  var indeterminateChecked = null;

  function checkbox_checked_binding(value) {
    simpleSelected = value;
    $$invalidate(0, simpleSelected);
  }

  function checkbox_checked_binding_1(value) {
    simpleSelected2 = value;
    $$invalidate(1, simpleSelected2);
  }

  function checkbox_group_binding(value) {
    selected = value;
    $$invalidate(2, selected);
  }

  function checkbox_checked_binding_2(value) {
    indeterminateChecked = value;
    $$invalidate(3, indeterminateChecked);
  }

  var click_handler = function click_handler() {
    return $$invalidate(3, indeterminateChecked = null);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("simpleSelected" in $$props) $$invalidate(0, simpleSelected = $$props.simpleSelected);
    if ("simpleSelected2" in $$props) $$invalidate(1, simpleSelected2 = $$props.simpleSelected2);
    if ("options" in $$props) $$invalidate(4, options = $$props.options);
    if ("selected" in $$props) $$invalidate(2, selected = $$props.selected);
    if ("indeterminateChecked" in $$props) $$invalidate(3, indeterminateChecked = $$props.indeterminateChecked);
  };

  return [simpleSelected, simpleSelected2, selected, indeterminateChecked, options, checkbox_checked_binding, checkbox_checked_binding_1, checkbox_group_binding, checkbox_checked_binding_2, click_handler];
}

var Checkbox_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Checkbox_1, _SvelteComponentDev);

  function Checkbox_1(options) {
    var _this;

    _classCallCheck(this, Checkbox_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox_1).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Checkbox_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Checkbox_1;
}(SvelteComponentDev);

export default Checkbox_1;
