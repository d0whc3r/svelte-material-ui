import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, I as create_component, J as claim_component, K as mount_component, t as transition_in, u as transition_out, L as destroy_component, M as space, f as element, W as text, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, P as append_dev, T as check_outros, $ as set_data_dev, aa as destroy_each, F as binding_callbacks, H as bind, R as group_outros, n as noop, Q as add_flush_callback } from './index.0812fa32.js';
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
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.4b041a46.js';
import { R as Radio } from './index.b1c451b9.js';

var file = "src/routes/demo/radio.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (12:8) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t0_value =
  /*option*/
  ctx[3].name + "";
  var t0;
  var t1_value = (
  /*option*/
  ctx[3].disabled ? " (disabled)" : "") + "";
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
      add_location(span, file, 11, 8, 239);
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
    id: create_label_slot.name,
    type: "slot",
    source: "(12:8) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (10:6) <FormField>


function create_default_slot(ctx) {
  var updating_group;
  var t0;
  var t1;
  var current;

  function radio_group_binding(value) {
    /*radio_group_binding*/
    ctx[2].call(null, value);
  }

  var radio_props = {
    value:
    /*option*/
    ctx[3].name,
    disabled:
    /*option*/
    ctx[3].disabled
  };

  if (
  /*selected*/
  ctx[0] !== void 0) {
    radio_props.group =
    /*selected*/
    ctx[0];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
      t0 = space();
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty[0] &
      /*selected*/
      1) {
        updating_group = true;
        radio_changes.group =
        /*selected*/
        ctx[0];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:6) <FormField>",
    ctx: ctx
  });
  return block;
} // (9:4) {#each options as option}


function create_each_block(ctx) {
  var current;
  var formfield = new FormField({
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
      65) {
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
    source: "(9:4) {#each options as option}",
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
  var div;
  var t3;
  var pre;
  var t4;
  var t5;
  var current;
  var each_value =
  /*options*/
  ctx[1];
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
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Radio");
      t2 = space();
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      pre = element("pre");
      t4 = text("Selected: ");
      t5 = text(
      /*selected*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Radio");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", {});
      var div_nodes = children(div);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t4 = claim_text(pre_nodes, "Selected: ");
      t5 = claim_text(pre_nodes,
      /*selected*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Radio - SMUI";
      add_location(h2, file, 5, 2, 72);
      add_location(div, file, 7, 2, 90);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 16, 2, 360);
      add_location(section, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      append_dev(section, t3);
      append_dev(section, pre);
      append_dev(pre, t4);
      append_dev(pre, t5);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*options, selected*/
      3) {
        each_value =
        /*options*/
        ctx[1];

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

            each_blocks[_i4].m(div, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if (!current || dirty[0] &
      /*selected*/
      1) set_data_dev(t5,
      /*selected*/
      ctx[0]);
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_each(each_blocks, detaching);
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
  var selected = "Grumpy";

  function radio_group_binding(value) {
    selected = value;
    $$invalidate(0, selected);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("options" in $$props) $$invalidate(1, options = $$props.options);
    if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
  };

  return [selected, options, radio_group_binding];
}

var Radio_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Radio_1, _SvelteComponentDev);

  function Radio_1(options) {
    var _this;

    _classCallCheck(this, Radio_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio_1).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Radio_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Radio_1;
}(SvelteComponentDev);

export default Radio_1;
