import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, a3 as getContext, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, b as current_component } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';

var file = "home/hperrin/repos/svelte-material-ui/packages/common/Icon.svelte";

function create_fragment(ctx) {
  var i;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[10].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[9], null);
  var i_levels = [{
    class: "\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*context*/
    ctx[7] === "button" ? "mdc-button__icon" : "") + "\n    " + (
    /*context*/
    ctx[7] === "fab" ? "mdc-fab__icon" : "") + "\n    " + (
    /*context*/
    ctx[7] === "icon-button" ? "mdc-icon-button__icon" : "") + "\n    " + (
    /*context*/
    ctx[7] === "icon-button" &&
    /*on*/
    ctx[2] ? "mdc-icon-button__icon--on" : "") + "\n    " + (
    /*context*/
    ctx[7] === "chip" ? "mdc-chip__icon" : "") + "\n    " + (
    /*context*/
    ctx[7] === "chip" &&
    /*leading*/
    ctx[3] ? "mdc-chip__icon--leading" : "") + "\n    " + (
    /*context*/
    ctx[7] === "chip" &&
    /*leadingHidden*/
    ctx[4] ? "mdc-chip__icon--leading-hidden" : "") + "\n    " + (
    /*context*/
    ctx[7] === "chip" &&
    /*trailing*/
    ctx[5] ? "mdc-chip__icon--trailing" : "") + "\n    " + (
    /*context*/
    ctx[7] === "tab" ? "mdc-tab__icon" : "") + "\n  "
  }, {
    "aria-hidden": "true"
  }, exclude(
  /*$$props*/
  ctx[8], ["use", "class", "on", "leading", "leadingHidden", "trailing"])];
  var i_data = {};

  for (var _i = 0; _i < i_levels.length; _i += 1) {
    i_data = assign(i_data, i_levels[_i]);
  }

  var block = {
    c: function create() {
      i = element("i");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true,
        "aria-hidden": true
      });
      var i_nodes = children(i);
      if (default_slot) default_slot.l(i_nodes);
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(i, i_data);
      add_location(i, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);

      if (default_slot) {
        default_slot.m(i, null);
      }

      useActions_action = useActions.call(null, i,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[6].call(null, i) || {};
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

      set_attributes(i, get_spread_update(i_levels, [dirty[0] &
      /*className, context, on, leading, leadingHidden, trailing*/
      190 && {
        class: "\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*context*/
        ctx[7] === "button" ? "mdc-button__icon" : "") + "\n    " + (
        /*context*/
        ctx[7] === "fab" ? "mdc-fab__icon" : "") + "\n    " + (
        /*context*/
        ctx[7] === "icon-button" ? "mdc-icon-button__icon" : "") + "\n    " + (
        /*context*/
        ctx[7] === "icon-button" &&
        /*on*/
        ctx[2] ? "mdc-icon-button__icon--on" : "") + "\n    " + (
        /*context*/
        ctx[7] === "chip" ? "mdc-chip__icon" : "") + "\n    " + (
        /*context*/
        ctx[7] === "chip" &&
        /*leading*/
        ctx[3] ? "mdc-chip__icon--leading" : "") + "\n    " + (
        /*context*/
        ctx[7] === "chip" &&
        /*leadingHidden*/
        ctx[4] ? "mdc-chip__icon--leading-hidden" : "") + "\n    " + (
        /*context*/
        ctx[7] === "chip" &&
        /*trailing*/
        ctx[5] ? "mdc-chip__icon--trailing" : "") + "\n    " + (
        /*context*/
        ctx[7] === "tab" ? "mdc-tab__icon" : "") + "\n  "
      }, {
        "aria-hidden": "true"
      }, dirty[0] &
      /*$$props*/
      256 && exclude(
      /*$$props*/
      ctx[8], ["use", "class", "on", "leading", "leadingHidden", "trailing"])]));
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
      if (detaching) detach_dev(i);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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
      _$$props3$on = _$$props3.on,
      on = _$$props3$on === void 0 ? false : _$$props3$on;
  var _$$props4 = $$props,
      _$$props4$leading = _$$props4.leading,
      leading = _$$props4$leading === void 0 ? false : _$$props4$leading;
  var _$$props5 = $$props,
      _$$props5$leadingHidd = _$$props5.leadingHidden,
      leadingHidden = _$$props5$leadingHidd === void 0 ? false : _$$props5$leadingHidd;
  var _$$props6 = $$props,
      _$$props6$trailing = _$$props6.trailing,
      trailing = _$$props6$trailing === void 0 ? false : _$$props6$trailing;
  var context = getContext("SMUI:icon:context");
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("on" in $$new_props) $$invalidate(2, on = $$new_props.on);
    if ("leading" in $$new_props) $$invalidate(3, leading = $$new_props.leading);
    if ("leadingHidden" in $$new_props) $$invalidate(4, leadingHidden = $$new_props.leadingHidden);
    if ("trailing" in $$new_props) $$invalidate(5, trailing = $$new_props.trailing);
    if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      on: on,
      leading: leading,
      leadingHidden: leadingHidden,
      trailing: trailing
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("on" in $$props) $$invalidate(2, on = $$new_props.on);
    if ("leading" in $$props) $$invalidate(3, leading = $$new_props.leading);
    if ("leadingHidden" in $$props) $$invalidate(4, leadingHidden = $$new_props.leadingHidden);
    if ("trailing" in $$props) $$invalidate(5, trailing = $$new_props.trailing);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, on, leading, leadingHidden, trailing, forwardEvents, context, $$props, $$scope, $$slots];
}

var Icon =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      on: 2,
      leading: 3,
      leadingHidden: 4,
      trailing: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Icon, [{
    key: "use",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "on",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leading",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leadingHidden",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "trailing",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

export { Icon as I };
