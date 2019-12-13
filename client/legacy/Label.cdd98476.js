import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, a3 as getContext, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, b as current_component } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';

var file = "home/hperrin/repos/svelte-material-ui/packages/common/Label.svelte";

function create_fragment(ctx) {
  var span;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var span_levels = [{
    class: "\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*context*/
    ctx[3] === "button" ? "mdc-button__label" : "") + "\n    " + (
    /*context*/
    ctx[3] === "fab" ? "mdc-fab__label" : "") + "\n    " + (
    /*context*/
    ctx[3] === "chip" ? "mdc-chip__text" : "") + "\n    " + (
    /*context*/
    ctx[3] === "tab" ? "mdc-tab__text-label" : "") + "\n    " + (
    /*context*/
    ctx[3] === "image-list" ? "mdc-image-list__label" : "") + "\n    " + (
    /*context*/
    ctx[3] === "snackbar" ? "mdc-snackbar__label" : "") + "\n  "
  },
  /*context*/
  ctx[3] === "snackbar" ? {
    role: "status",
    "aria-live": "polite"
  } : {}, exclude(
  /*$$props*/
  ctx[4], ["use", "class"])];
  var span_data = {};

  for (var i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }

  var block = {
    c: function create() {
      span = element("span");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      if (default_slot) default_slot.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(span, span_data);
      add_location(span, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);

      if (default_slot) {
        default_slot.m(span, null);
      }

      useActions_action = useActions.call(null, span,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[2].call(null, span) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      32) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[5], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[5], dirty, null));
      }

      set_attributes(span, get_spread_update(span_levels, [dirty[0] &
      /*className, context*/
      10 && {
        class: "\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*context*/
        ctx[3] === "button" ? "mdc-button__label" : "") + "\n    " + (
        /*context*/
        ctx[3] === "fab" ? "mdc-fab__label" : "") + "\n    " + (
        /*context*/
        ctx[3] === "chip" ? "mdc-chip__text" : "") + "\n    " + (
        /*context*/
        ctx[3] === "tab" ? "mdc-tab__text-label" : "") + "\n    " + (
        /*context*/
        ctx[3] === "image-list" ? "mdc-image-list__label" : "") + "\n    " + (
        /*context*/
        ctx[3] === "snackbar" ? "mdc-snackbar__label" : "") + "\n  "
      }, dirty[0] &
      /*context*/
      8 && (
      /*context*/
      ctx[3] === "snackbar" ? {
        role: "status",
        "aria-live": "polite"
      } : {}), dirty[0] &
      /*$$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "class"])]));
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
      if (detaching) detach_dev(span);
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
  var context = getContext("SMUI:label:context");
  var _$$props3 = $$props,
      _$$props3$$$slots = _$$props3.$$slots,
      $$slots = _$$props3$$$slots === void 0 ? {} : _$$props3$$$slots,
      $$scope = _$$props3.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  };

  $$props = exclude_internal_props($$props);
  return [use, className, forwardEvents, context, $$props, $$scope, $$slots];
}

var Label =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Label, _SvelteComponentDev);

  function Label(options) {
    var _this;

    _classCallCheck(this, Label);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Label).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Label",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Label, [{
    key: "use",
    get: function get() {
      throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Label;
}(SvelteComponentDev);

export { Label as L };
