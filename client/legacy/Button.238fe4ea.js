import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, a3 as getContext, a2 as setContext, a as assign, e as exclude_internal_props, D as empty, m as insert_dev, R as group_outros, u as transition_out, T as check_outros, t as transition_in, j as detach_dev, c as create_slot, b as current_component, f as element, g as claim_element, h as children, k as set_attributes, l as add_location, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';
import { f as forwardEventsBuilder, e as exclude, u as useActions } from './useActions.03a18d11.js';
import { R as Ripple } from './bare.3f24c973.js';

var file = "home/hperrin/repos/svelte-material-ui/packages/button/Button.svelte"; // (26:0) {:else}

function create_else_block(ctx) {
  var button;
  var useActions_action;
  var forwardEvents_action;
  var Ripple_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[17].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[16], null);
  var button_levels = [{
    class: "\n      mdc-button\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*variant*/
    ctx[4] === "raised" ? "mdc-button--raised" : "") + "\n      " + (
    /*variant*/
    ctx[4] === "unelevated" ? "mdc-button--unelevated" : "") + "\n      " + (
    /*variant*/
    ctx[4] === "outlined" ? "mdc-button--outlined" : "") + "\n      " + (
    /*dense*/
    ctx[5] ? "mdc-button--dense" : "") + "\n      " + (
    /*color*/
    ctx[3] === "secondary" ? "smui-button--color-secondary" : "") + "\n      " + (
    /*context*/
    ctx[11] === "card:action" ? "mdc-card__action" : "") + "\n      " + (
    /*context*/
    ctx[11] === "card:action" ? "mdc-card__action--button" : "") + "\n      " + (
    /*context*/
    ctx[11] === "dialog:action" ? "mdc-dialog__button" : "") + "\n      " + (
    /*context*/
    ctx[11] === "top-app-bar:navigation" ? "mdc-top-app-bar__navigation-icon" : "") + "\n      " + (
    /*context*/
    ctx[11] === "top-app-bar:action" ? "mdc-top-app-bar__action-item" : "") + "\n      " + (
    /*context*/
    ctx[11] === "snackbar" ? "mdc-snackbar__action" : "") + "\n    "
  },
  /*actionProp*/
  ctx[8],
  /*defaultProp*/
  ctx[9],
  /*props*/
  ctx[7]];
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
      add_location(button, file, 26, 2, 971);
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
      ctx[10].call(null, button) || {};
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
      65536) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[16], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[16], dirty, null));
      }

      set_attributes(button, get_spread_update(button_levels, [dirty[0] &
      /*className, variant, dense, color, context*/
      2106 && {
        class: "\n      mdc-button\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*variant*/
        ctx[4] === "raised" ? "mdc-button--raised" : "") + "\n      " + (
        /*variant*/
        ctx[4] === "unelevated" ? "mdc-button--unelevated" : "") + "\n      " + (
        /*variant*/
        ctx[4] === "outlined" ? "mdc-button--outlined" : "") + "\n      " + (
        /*dense*/
        ctx[5] ? "mdc-button--dense" : "") + "\n      " + (
        /*color*/
        ctx[3] === "secondary" ? "smui-button--color-secondary" : "") + "\n      " + (
        /*context*/
        ctx[11] === "card:action" ? "mdc-card__action" : "") + "\n      " + (
        /*context*/
        ctx[11] === "card:action" ? "mdc-card__action--button" : "") + "\n      " + (
        /*context*/
        ctx[11] === "dialog:action" ? "mdc-dialog__button" : "") + "\n      " + (
        /*context*/
        ctx[11] === "top-app-bar:navigation" ? "mdc-top-app-bar__navigation-icon" : "") + "\n      " + (
        /*context*/
        ctx[11] === "top-app-bar:action" ? "mdc-top-app-bar__action-item" : "") + "\n      " + (
        /*context*/
        ctx[11] === "snackbar" ? "mdc-snackbar__action" : "") + "\n    "
      }, dirty[0] &
      /*actionProp*/
      256 &&
      /*actionProp*/
      ctx[8], dirty[0] &
      /*defaultProp*/
      512 &&
      /*defaultProp*/
      ctx[9], dirty[0] &
      /*props*/
      128 &&
      /*props*/
      ctx[7]]));
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
    id: create_else_block.name,
    type: "else",
    source: "(26:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if href}


function create_if_block(ctx) {
  var a;
  var useActions_action;
  var forwardEvents_action;
  var Ripple_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[17].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[16], null);
  var a_levels = [{
    class: "\n      mdc-button\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*variant*/
    ctx[4] === "raised" ? "mdc-button--raised" : "") + "\n      " + (
    /*variant*/
    ctx[4] === "unelevated" ? "mdc-button--unelevated" : "") + "\n      " + (
    /*variant*/
    ctx[4] === "outlined" ? "mdc-button--outlined" : "") + "\n      " + (
    /*dense*/
    ctx[5] ? "mdc-button--dense" : "") + "\n      " + (
    /*color*/
    ctx[3] === "secondary" ? "smui-button--color-secondary" : "") + "\n      " + (
    /*context*/
    ctx[11] === "card:action" ? "mdc-card__action" : "") + "\n      " + (
    /*context*/
    ctx[11] === "card:action" ? "mdc-card__action--button" : "") + "\n      " + (
    /*context*/
    ctx[11] === "dialog:action" ? "mdc-dialog__button" : "") + "\n      " + (
    /*context*/
    ctx[11] === "top-app-bar:navigation" ? "mdc-top-app-bar__navigation-icon" : "") + "\n      " + (
    /*context*/
    ctx[11] === "top-app-bar:action" ? "mdc-top-app-bar__action-item" : "") + "\n      " + (
    /*context*/
    ctx[11] === "snackbar" ? "mdc-snackbar__action" : "") + "\n    "
  }, {
    href:
    /*href*/
    ctx[6]
  },
  /*actionProp*/
  ctx[8],
  /*defaultProp*/
  ctx[9],
  /*props*/
  ctx[7]];
  var a_data = {};

  for (var i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }

  var block = {
    c: function create() {
      a = element("a");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      if (default_slot) default_slot.l(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(a, a_data);
      add_location(a, file, 1, 2, 13);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);

      if (default_slot) {
        default_slot.m(a, null);
      }

      useActions_action = useActions.call(null, a,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[10].call(null, a) || {};
      Ripple_action = Ripple.call(null, a, [
      /*ripple*/
      ctx[2], {
        unbounded: false
      }]) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      65536) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[16], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[16], dirty, null));
      }

      set_attributes(a, get_spread_update(a_levels, [dirty[0] &
      /*className, variant, dense, color, context*/
      2106 && {
        class: "\n      mdc-button\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*variant*/
        ctx[4] === "raised" ? "mdc-button--raised" : "") + "\n      " + (
        /*variant*/
        ctx[4] === "unelevated" ? "mdc-button--unelevated" : "") + "\n      " + (
        /*variant*/
        ctx[4] === "outlined" ? "mdc-button--outlined" : "") + "\n      " + (
        /*dense*/
        ctx[5] ? "mdc-button--dense" : "") + "\n      " + (
        /*color*/
        ctx[3] === "secondary" ? "smui-button--color-secondary" : "") + "\n      " + (
        /*context*/
        ctx[11] === "card:action" ? "mdc-card__action" : "") + "\n      " + (
        /*context*/
        ctx[11] === "card:action" ? "mdc-card__action--button" : "") + "\n      " + (
        /*context*/
        ctx[11] === "dialog:action" ? "mdc-dialog__button" : "") + "\n      " + (
        /*context*/
        ctx[11] === "top-app-bar:navigation" ? "mdc-top-app-bar__navigation-icon" : "") + "\n      " + (
        /*context*/
        ctx[11] === "top-app-bar:action" ? "mdc-top-app-bar__action-item" : "") + "\n      " + (
        /*context*/
        ctx[11] === "snackbar" ? "mdc-snackbar__action" : "") + "\n    "
      }, dirty[0] &
      /*href*/
      64 && {
        href:
        /*href*/
        ctx[6]
      }, dirty[0] &
      /*actionProp*/
      256 &&
      /*actionProp*/
      ctx[8], dirty[0] &
      /*defaultProp*/
      512 &&
      /*defaultProp*/
      ctx[9], dirty[0] &
      /*props*/
      128 &&
      /*props*/
      ctx[7]]));
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
      if (detaching) detach_dev(a);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
      if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if href}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*href*/
    ctx[6]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
      color = _$$props4$color === void 0 ? "primary" : _$$props4$color;
  var _$$props5 = $$props,
      _$$props5$variant = _$$props5.variant,
      variant = _$$props5$variant === void 0 ? "text" : _$$props5$variant;
  var _$$props6 = $$props,
      _$$props6$dense = _$$props6.dense,
      dense = _$$props6$dense === void 0 ? false : _$$props6$dense;
  var _$$props7 = $$props,
      _$$props7$href = _$$props7.href,
      href = _$$props7$href === void 0 ? null : _$$props7$href;
  var _$$props8 = $$props,
      _$$props8$action = _$$props8.action,
      action = _$$props8$action === void 0 ? "close" : _$$props8$action;
  var _$$props9 = $$props,
      _$$props9$default = _$$props9.default,
      defaultAction = _$$props9$default === void 0 ? false : _$$props9$default;
  var context = getContext("SMUI:button:context");
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  var _$$props10 = $$props,
      _$$props10$$$slots = _$$props10.$$slots,
      $$slots = _$$props10$$$slots === void 0 ? {} : _$$props10$$$slots,
      $$scope = _$$props10.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(15, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("variant" in $$new_props) $$invalidate(4, variant = $$new_props.variant);
    if ("dense" in $$new_props) $$invalidate(5, dense = $$new_props.dense);
    if ("href" in $$new_props) $$invalidate(6, href = $$new_props.href);
    if ("action" in $$new_props) $$invalidate(12, action = $$new_props.action);
    if ("default" in $$new_props) $$invalidate(13, defaultAction = $$new_props.default);
    if ("$$scope" in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      variant: variant,
      dense: dense,
      href: href,
      action: action,
      defaultAction: defaultAction,
      context: context,
      dialogExcludes: dialogExcludes,
      props: props,
      actionProp: actionProp,
      defaultProp: defaultProp
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(15, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("variant" in $$props) $$invalidate(4, variant = $$new_props.variant);
    if ("dense" in $$props) $$invalidate(5, dense = $$new_props.dense);
    if ("href" in $$props) $$invalidate(6, href = $$new_props.href);
    if ("action" in $$props) $$invalidate(12, action = $$new_props.action);
    if ("defaultAction" in $$props) $$invalidate(13, defaultAction = $$new_props.defaultAction);
    if ("context" in $$props) $$invalidate(11, context = $$new_props.context);
    if ("dialogExcludes" in $$props) $$invalidate(14, dialogExcludes = $$new_props.dialogExcludes);
    if ("props" in $$props) $$invalidate(7, props = $$new_props.props);
    if ("actionProp" in $$props) $$invalidate(8, actionProp = $$new_props.actionProp);
    if ("defaultProp" in $$props) $$invalidate(9, defaultProp = $$new_props.defaultProp);
  };

  var dialogExcludes;
  var props;
  var actionProp;
  var defaultProp;

  $$self.$$.update = function () {
     $$invalidate(7, props = exclude($$props, ["use", "class", "ripple", "color", "variant", "dense", "href"].concat(_toConsumableArray(dialogExcludes))));

    if ($$self.$$.dirty[0] &
    /*action*/
    4096) {
       $$invalidate(8, actionProp = context === "dialog:action" && action !== null ? {
        "data-mdc-dialog-action": action
      } : {});
    }

    if ($$self.$$.dirty[0] &
    /*defaultAction*/
    8192) {
       $$invalidate(9, defaultProp = context === "dialog:action" && defaultAction ? {
        "data-mdc-dialog-button-default": ""
      } : {});
    }
  };

   $$invalidate(14, dialogExcludes = context === "dialog:action" ? ["action", "default"] : []);

  $$props = exclude_internal_props($$props);
  return [use, className, ripple, color, variant, dense, href, props, actionProp, defaultProp, forwardEvents, context, action, defaultAction, dialogExcludes, $$props, $$scope, $$slots];
}

var Button =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      ripple: 2,
      color: 3,
      variant: 4,
      dense: 5,
      href: 6,
      action: 12,
      default: 13
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Button, [{
    key: "use",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dense",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "href",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "action",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "default",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Button;
}(SvelteComponentDev);

export { Button as B };
