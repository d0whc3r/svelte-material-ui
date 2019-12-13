import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, M as space, W as text, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, n as noop, r as is_function } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import '@babel/runtime/helpers/esm/typeof';
import '@babel/runtime/helpers/esm/slicedToArray';
import { R as Ripple } from './bare.3f24c973.js';

var css = "@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}";
styleInject(css);

var file = "src/routes/demo/ripple.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1jzedyu-style";
  style.textContent = "p.svelte-1jzedyu{padding:10px;border-radius:5px}.unbounded.svelte-1jzedyu{display:inline-flex;width:50px;height:50px;justify-content:center;align-items:center;border-radius:50%;font-size:20px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnN2ZWx0ZSIsInNvdXJjZXMiOlsicmlwcGxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5SaXBwbGUgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+UmlwcGxlPC9oMj5cblxuICA8cCB1c2U6UmlwcGxlPXtbdHJ1ZSwge2NvbG9yOiAnc3VyZmFjZSd9XX0gdGFiaW5kZXg9XCIwXCI+XG4gICAgU01VSSByaXBwbGVzIGNhbiBiZSBhZGRlZCB0byBhcmJpdHJhcnkgZWxlbWVudHMsIGxpa2UgdGhpcyA8Y29kZT5wPC9jb2RlPlxuICAgIGVsZW1lbnQuIFRyeSBjbGlja2luZyBpdCB0byBzZWUgdGhlIHJpcHBsZS5cbiAgPC9wPlxuXG4gIDxwPlxuICAgIFVuYm91bmRlZDpcbiAgICA8c3BhbiB1c2U6UmlwcGxlPXtbdHJ1ZSwge3VuYm91bmRlZDogdHJ1ZSwgY29sb3I6ICdzdXJmYWNlJ31dfSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInVuYm91bmRlZFwiPlxuICAgICAgJmNvcHk7XG4gICAgPC9zcGFuPlxuICA8L3A+XG5cbiAgPHAgdXNlOlJpcHBsZT17W3RydWUsIHtjb2xvcjogJ3ByaW1hcnknfV19IHRhYmluZGV4PVwiMFwiPlxuICAgIFByaW1hcnkgY29sb3IuXG4gIDwvcD5cblxuICA8cCB1c2U6UmlwcGxlPXtbdHJ1ZSwge2NvbG9yOiAnc2Vjb25kYXJ5J31dfSB0YWJpbmRleD1cIjBcIj5cbiAgICBTZWNvbmRhcnkgY29sb3IuXG4gIDwvcD5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAudW5ib3VuZGVkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ0UsQ0FBQyxlQUFDLENBQUMsQUFDRCxPQUFPLENBQUUsSUFBSSxDQUNiLGFBQWEsQ0FBRSxHQUFHLEFBQ3BCLENBQUMsQUFFRCxVQUFVLGVBQUMsQ0FBQyxBQUNWLE9BQU8sQ0FBRSxXQUFXLENBQ3BCLEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLElBQUksQ0FDWixlQUFlLENBQUUsTUFBTSxDQUN2QixXQUFXLENBQUUsTUFBTSxDQUNuQixhQUFhLENBQUUsR0FBRyxDQUNsQixTQUFTLENBQUUsSUFBSSxBQUNqQixDQUFDIn0= */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var p0;
  var t3;
  var code;
  var t4;
  var t5;
  var Ripple_action;
  var t6;
  var p1;
  var t7;
  var span;
  var t8;
  var Ripple_action_1;
  var t9;
  var p2;
  var t10;
  var Ripple_action_2;
  var t11;
  var p3;
  var t12;
  var Ripple_action_3;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Ripple");
      t2 = space();
      p0 = element("p");
      t3 = text("SMUI ripples can be added to arbitrary elements, like this ");
      code = element("code");
      t4 = text("p");
      t5 = text("\n    element. Try clicking it to see the ripple.");
      t6 = space();
      p1 = element("p");
      t7 = text("Unbounded:\n    ");
      span = element("span");
      t8 = text("©");
      t9 = space();
      p2 = element("p");
      t10 = text("Primary color.");
      t11 = space();
      p3 = element("p");
      t12 = text("Secondary color.");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Ripple");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      p0 = claim_element(section_nodes, "P", {
        tabindex: true,
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "SMUI ripples can be added to arbitrary elements, like this ");
      code = claim_element(p0_nodes, "CODE", {});
      var code_nodes = children(code);
      t4 = claim_text(code_nodes, "p");
      code_nodes.forEach(detach_dev);
      t5 = claim_text(p0_nodes, "\n    element. Try clicking it to see the ripple.");
      p0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      p1 = claim_element(section_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "Unbounded:\n    ");
      span = claim_element(p1_nodes, "SPAN", {
        tabindex: true,
        class: true
      });
      var span_nodes = children(span);
      t8 = claim_text(span_nodes, "©");
      span_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      p2 = claim_element(section_nodes, "P", {
        tabindex: true,
        class: true
      });
      var p2_nodes = children(p2);
      t10 = claim_text(p2_nodes, "Primary color.");
      p2_nodes.forEach(detach_dev);
      t11 = claim_space(section_nodes);
      p3 = claim_element(section_nodes, "P", {
        tabindex: true,
        class: true
      });
      var p3_nodes = children(p3);
      t12 = claim_text(p3_nodes, "Secondary color.");
      p3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Ripple - SMUI";
      add_location(h2, file, 5, 2, 73);
      add_location(code, file, 8, 63, 212);
      attr_dev(p0, "tabindex", "0");
      attr_dev(p0, "class", "svelte-1jzedyu");
      add_location(p0, file, 7, 2, 92);
      attr_dev(span, "tabindex", "0");
      attr_dev(span, "class", "unbounded svelte-1jzedyu");
      add_location(span, file, 14, 4, 308);
      attr_dev(p1, "class", "svelte-1jzedyu");
      add_location(p1, file, 12, 2, 285);
      attr_dev(p2, "tabindex", "0");
      attr_dev(p2, "class", "svelte-1jzedyu");
      add_location(p2, file, 19, 2, 438);
      attr_dev(p3, "tabindex", "0");
      attr_dev(p3, "class", "svelte-1jzedyu");
      add_location(p3, file, 23, 2, 524);
      add_location(section, file, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, p0);
      append_dev(p0, t3);
      append_dev(p0, code);
      append_dev(code, t4);
      append_dev(p0, t5);
      Ripple_action = Ripple.call(null, p0, [true, {
        color: "surface"
      }]) || {};
      append_dev(section, t6);
      append_dev(section, p1);
      append_dev(p1, t7);
      append_dev(p1, span);
      append_dev(span, t8);
      Ripple_action_1 = Ripple.call(null, span, [true, {
        unbounded: true,
        color: "surface"
      }]) || {};
      append_dev(section, t9);
      append_dev(section, p2);
      append_dev(p2, t10);
      Ripple_action_2 = Ripple.call(null, p2, [true, {
        color: "primary"
      }]) || {};
      append_dev(section, t11);
      append_dev(section, p3);
      append_dev(p3, t12);
      Ripple_action_3 = Ripple.call(null, p3, [true, {
        color: "secondary"
      }]) || {};
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
      if (Ripple_action_1 && is_function(Ripple_action_1.destroy)) Ripple_action_1.destroy();
      if (Ripple_action_2 && is_function(Ripple_action_2.destroy)) Ripple_action_2.destroy();
      if (Ripple_action_3 && is_function(Ripple_action_3.destroy)) Ripple_action_3.destroy();
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

var Ripple_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Ripple_1, _SvelteComponentDev);

  function Ripple_1(options) {
    var _this;

    _classCallCheck(this, Ripple_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ripple_1).call(this, options));
    if (!document.getElementById("svelte-1jzedyu-style")) add_css();
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Ripple_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Ripple_1;
}(SvelteComponentDev);

export default Ripple_1;
