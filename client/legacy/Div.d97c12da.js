import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, a2 as setContext, a as assign, e as exclude_internal_props, I as create_component, D as empty, J as claim_component, K as mount_component, m as insert_dev, q as get_spread_update, a1 as get_spread_object, R as group_outros, u as transition_out, L as destroy_component, T as check_outros, t as transition_in, j as detach_dev, b as current_component, c as create_slot, o as get_slot_context, p as get_slot_changes, f as element, g as claim_element, h as children, k as set_attributes, l as add_location, r as is_function } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';
import _construct from '@babel/runtime/helpers/esm/construct';

function create_default_slot(ctx) {
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[8].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[9], null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      512) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[9], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[9], dirty, null));
      }
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
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(1:0) <svelte:component   this={component}   use={[forwardEvents, ...use]}   class=\\\"{smuiClass} {className}\\\"   {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])} >",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [{
    use: [
    /*forwardEvents*/
    ctx[4]].concat(_toConsumableArray(
    /*use*/
    ctx[0]))
  }, {
    class: "" + (
    /*smuiClass*/
    ctx[3] + " " +
    /*className*/
    ctx[1])
  }, exclude(
  /*$$props*/
  ctx[5], ["use", "class", "component", "forwardEvents"])];
  var switch_value =
  /*component*/
  ctx[2];

  function switch_props(ctx) {
    var switch_instance_props = {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    };

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  var block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var switch_instance_changes = dirty[0] &
      /*forwardEvents, use, smuiClass, className, $$props*/
      59 ? get_spread_update(switch_instance_spread_levels, [dirty[0] &
      /*forwardEvents, use*/
      17 && {
        use: [
        /*forwardEvents*/
        ctx[4]].concat(_toConsumableArray(
        /*use*/
        ctx[0]))
      }, dirty[0] &
      /*smuiClass, className*/
      10 && {
        class: "" + (
        /*smuiClass*/
        ctx[3] + " " +
        /*className*/
        ctx[1])
      }, dirty[0] &
      /*$$props*/
      32 && get_spread_object(exclude(
      /*$$props*/
      ctx[5], ["use", "class", "component", "forwardEvents"]))]) : {};

      if (dirty[0] &
      /*$$scope*/
      512) {
        switch_instance_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (switch_value !== (switch_value =
      /*component*/
      ctx[2])) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
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

var internals = {
  component: null,
  smuiClass: null,
  contexts: {}
};

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$component = _$$props3.component,
      component = _$$props3$component === void 0 ? internals.component : _$$props3$component;
  var _$$props4 = $$props,
      _$$props4$forwardEven = _$$props4.forwardEvents,
      smuiForwardEvents = _$$props4$forwardEven === void 0 ? [] : _$$props4$forwardEven;
  var smuiClass = internals.class;
  var contexts = internals.contexts;
  var forwardEvents = forwardEventsBuilder(current_component, smuiForwardEvents);

  for (var context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }

  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
    if ("forwardEvents" in $$new_props) $$invalidate(6, smuiForwardEvents = $$new_props.forwardEvents);
    if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      component: component,
      smuiForwardEvents: smuiForwardEvents
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("component" in $$props) $$invalidate(2, component = $$new_props.component);
    if ("smuiForwardEvents" in $$props) $$invalidate(6, smuiForwardEvents = $$new_props.smuiForwardEvents);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, component, smuiClass, forwardEvents, $$props, smuiForwardEvents, contexts, $$slots, $$scope];
}

var ClassAdder =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ClassAdder, _SvelteComponentDev);

  function ClassAdder(options) {
    var _this;

    _classCallCheck(this, ClassAdder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassAdder).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      component: 2,
      forwardEvents: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ClassAdder",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(ClassAdder, [{
    key: "use",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "component",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "forwardEvents",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ClassAdder;
}(SvelteComponentDev);

function classAdderBuilder(props) {
  function Component() {
    Object.assign(internals, props);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(ClassAdder, args);
  }

  Component.prototype = ClassAdder; // SSR support

  if (ClassAdder.$$render) {
    Component.$$render = function () {
      return Object.assign(internals, props) && ClassAdder.$$render.apply(ClassAdder, arguments);
    };
  }

  if (ClassAdder.render) {
    Component.render = function () {
      return Object.assign(internals, props) && ClassAdder.render.apply(ClassAdder, arguments);
    };
  }

  return Component;
}

var file = "home/hperrin/repos/svelte-material-ui/packages/common/Div.svelte";

function create_fragment$1(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[4].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  var div_levels = [exclude(
  /*$$props*/
  ctx[2], ["use"])];
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
      div = claim_element(nodes, "DIV", {});
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
      ctx[1].call(null, div) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      8) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[3], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[3], dirty, null));
      }

      set_attributes(div, get_spread_update(div_levels, [dirty[0] &
      /*$$props*/
      4 && exclude(
      /*$$props*/
      ctx[2], ["use"])]));
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
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  };

  $$props = exclude_internal_props($$props);
  return [use, forwardEvents, $$props, $$scope, $$slots];
}

var Div =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Div, _SvelteComponentDev);

  function Div(options) {
    var _this;

    _classCallCheck(this, Div);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Div).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Div",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Div, [{
    key: "use",
    get: function get() {
      throw new Error("<Div>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Div;
}(SvelteComponentDev);

export { Div as D, classAdderBuilder as c };
