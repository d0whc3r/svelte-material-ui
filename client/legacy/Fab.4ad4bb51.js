import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, a2 as setContext, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, b as current_component } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';
import { R as Ripple } from './bare.3f24c973.js';

var file = "home/hperrin/repos/svelte-material-ui/packages/fab/Fab.svelte";

function create_fragment(ctx) {
  var button;
  var useActions_action;
  var forwardEvents_action;
  var Ripple_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[10].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[9], null);
  var button_levels = [{
    class: "\n    mdc-fab\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*mini*/
    ctx[4] ? "mdc-fab--mini" : "") + "\n    " + (
    /*exited*/
    ctx[5] ? "mdc-fab--exited" : "") + "\n    " + (
    /*extended*/
    ctx[6] ? "mdc-fab--extended" : "") + "\n    " + (
    /*color*/
    ctx[3] === "primary" ? "smui-fab--color-primary" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[8], ["use", "class", "ripple", "color", "mini", "exited", "extended"])];
  var button_data = {};

  for (var i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }

  var block = {
    c: function create() {
      button = element("button");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(button, button_data);
      add_location(button, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);

      if (default_slot) {
        default_slot.m(button, null);
      }

      useActions_action = useActions.call(null, button,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, button) || {};
      Ripple_action = Ripple.call(null, button, [
      /*ripple*/
      ctx[2], {
        unbounded: false
      }]) || {};
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

      set_attributes(button, get_spread_update(button_levels, [dirty[0] &
      /*className, mini, exited, extended, color*/
      122 && {
        class: "\n    mdc-fab\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*mini*/
        ctx[4] ? "mdc-fab--mini" : "") + "\n    " + (
        /*exited*/
        ctx[5] ? "mdc-fab--exited" : "") + "\n    " + (
        /*extended*/
        ctx[6] ? "mdc-fab--extended" : "") + "\n    " + (
        /*color*/
        ctx[3] === "primary" ? "smui-fab--color-primary" : "") + "\n  "
      }, dirty[0] &
      /*$$props*/
      256 && exclude(
      /*$$props*/
      ctx[8], ["use", "class", "ripple", "color", "mini", "exited", "extended"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
      if (is_function(Ripple_action.update) && dirty[0] &
      /*ripple*/
      4) Ripple_action.update.call(null, [
      /*ripple*/
      ctx[2], {
        unbounded: false
      }]);
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
      if (detaching) detach_dev(button);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$ripple = _$$props3.ripple,
      ripple = _$$props3$ripple === void 0 ? true : _$$props3$ripple;
  var _$$props4 = $$props,
      _$$props4$color = _$$props4.color,
      color = _$$props4$color === void 0 ? "secondary" : _$$props4$color;
  var _$$props5 = $$props,
      _$$props5$mini = _$$props5.mini,
      mini = _$$props5$mini === void 0 ? false : _$$props5$mini;
  var _$$props6 = $$props,
      _$$props6$exited = _$$props6.exited,
      exited = _$$props6$exited === void 0 ? false : _$$props6$exited;
  var _$$props7 = $$props,
      _$$props7$extended = _$$props7.extended,
      extended = _$$props7$extended === void 0 ? false : _$$props7$extended;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
  var _$$props8 = $$props,
      _$$props8$$$slots = _$$props8.$$slots,
      $$slots = _$$props8$$$slots === void 0 ? {} : _$$props8$$$slots,
      $$scope = _$$props8.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("mini" in $$new_props) $$invalidate(4, mini = $$new_props.mini);
    if ("exited" in $$new_props) $$invalidate(5, exited = $$new_props.exited);
    if ("extended" in $$new_props) $$invalidate(6, extended = $$new_props.extended);
    if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      mini: mini,
      exited: exited,
      extended: extended
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("mini" in $$props) $$invalidate(4, mini = $$new_props.mini);
    if ("exited" in $$props) $$invalidate(5, exited = $$new_props.exited);
    if ("extended" in $$props) $$invalidate(6, extended = $$new_props.extended);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, ripple, color, mini, exited, extended, forwardEvents, $$props, $$scope, $$slots];
}

var Fab =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Fab, _SvelteComponentDev);

  function Fab(options) {
    var _this;

    _classCallCheck(this, Fab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fab).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      ripple: 2,
      color: 3,
      mini: 4,
      exited: 5,
      extended: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Fab",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Fab, [{
    key: "use",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "mini",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "exited",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "extended",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Fab;
}(SvelteComponentDev);

export { Fab as F };
