import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, b as current_component, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, P as append_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';
import { c as classAdderBuilder } from './Div.d97c12da.js';
import { G as Graphic } from './index.ec2d92bf.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';
import { M as Menu } from './Menu.42a68110.js';

var css = "@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-menu{min-width:112px}.mdc-menu .mdc-list,.mdc-menu .mdc-list-item__graphic,.mdc-menu .mdc-list-item__meta{color:rgba(0,0,0,.87)}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}@media screen and (-ms-high-contrast:active){.mdc-menu .mdc-list-item--disabled{opacity:.38}}.mdc-menu a.mdc-list-item .mdc-list-item__graphic,.mdc-menu a.mdc-list-item .mdc-list-item__text{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}.mdc-menu__selection-group .mdc-list-item[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-list-item{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:auto;display:none;position:absolute;top:50%;transform:translateY(-50%)}.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon{left:auto;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;transform:scale(1);opacity:1}";
styleInject(css);

var file = "home/hperrin/repos/svelte-material-ui/packages/menu/SelectionGroup.svelte";

function create_fragment(ctx) {
  var li;
  var ul;
  var useActions_action;
  var useActions_action_1;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var ul_levels = [{
    class: "mdc-menu__selection-group " +
    /*list$class*/
    ctx[2]
  }, exclude(prefixFilter(
  /*$$props*/
  ctx[4], "list$"), ["use", "class"])];
  var ul_data = {};

  for (var i = 0; i < ul_levels.length; i += 1) {
    ul_data = assign(ul_data, ul_levels[i]);
  }

  var li_levels = [exclude(
  /*$$props*/
  ctx[4], ["use", "list$"])];
  var li_data = {};

  for (var _i = 0; _i < li_levels.length; _i += 1) {
    li_data = assign(li_data, li_levels[_i]);
  }

  var block = {
    c: function create() {
      li = element("li");
      ul = element("ul");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      ul = claim_element(li_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      if (default_slot) default_slot.l(ul_nodes);
      ul_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(ul, ul_data);
      add_location(ul, file, 5, 2, 93);
      set_attributes(li, li_data);
      add_location(li, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, ul);

      if (default_slot) {
        default_slot.m(ul, null);
      }

      useActions_action = useActions.call(null, ul,
      /*list$use*/
      ctx[1]) || {};
      useActions_action_1 = useActions.call(null, li,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[3].call(null, li) || {};
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

      set_attributes(ul, get_spread_update(ul_levels, [dirty[0] &
      /*list$class*/
      4 && {
        class: "mdc-menu__selection-group " +
        /*list$class*/
        ctx[2]
      }, dirty[0] &
      /*$$props*/
      16 && exclude(prefixFilter(
      /*$$props*/
      ctx[4], "list$"), ["use", "class"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*list$use*/
      2) useActions_action.update.call(null,
      /*list$use*/
      ctx[1]);
      set_attributes(li, get_spread_update(li_levels, [dirty[0] &
      /*$$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "list$"])]));
      if (is_function(useActions_action_1.update) && dirty[0] &
      /*use*/
      1) useActions_action_1.update.call(null,
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
      if (detaching) detach_dev(li);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
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
      _$$props2$list$use = _$$props2.list$use,
      list$use = _$$props2$list$use === void 0 ? [] : _$$props2$list$use;
  var _$$props3 = $$props,
      _$$props3$list$class = _$$props3.list$class,
      list$class = _$$props3$list$class === void 0 ? "" : _$$props3$list$class;
  var _$$props4 = $$props,
      _$$props4$$$slots = _$$props4.$$slots,
      $$slots = _$$props4$$$slots === void 0 ? {} : _$$props4$$$slots,
      $$scope = _$$props4.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("list$use" in $$new_props) $$invalidate(1, list$use = $$new_props.list$use);
    if ("list$class" in $$new_props) $$invalidate(2, list$class = $$new_props.list$class);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      list$use: list$use,
      list$class: list$class
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("list$use" in $$props) $$invalidate(1, list$use = $$new_props.list$use);
    if ("list$class" in $$props) $$invalidate(2, list$class = $$new_props.list$class);
  };

  $$props = exclude_internal_props($$props);
  return [use, list$use, list$class, forwardEvents, $$props, $$scope, $$slots];
}

var SelectionGroup =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(SelectionGroup, _SvelteComponentDev);

  function SelectionGroup(options) {
    var _this;

    _classCallCheck(this, SelectionGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectionGroup).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      list$use: 1,
      list$class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SelectionGroup",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(SelectionGroup, [{
    key: "use",
    get: function get() {
      throw new Error("<SelectionGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SelectionGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "list$use",
    get: function get() {
      throw new Error("<SelectionGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SelectionGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "list$class",
    get: function get() {
      throw new Error("<SelectionGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SelectionGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return SelectionGroup;
}(SvelteComponentDev);

var SelectionGroupIcon = classAdderBuilder({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
  contexts: {}
});

export { Menu as M, SelectionGroup as S, SelectionGroupIcon as a };
