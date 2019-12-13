import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, M as space, f as element, W as text, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, P as append_dev, n as noop } from './index.0812fa32.js';

var file = "src/routes/demo/typography.svelte";

function create_fragment(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var t3;
  var t4;
  var div1;
  var t5;
  var t6;
  var div2;
  var t7;
  var t8;
  var div3;
  var t9;
  var t10;
  var div4;
  var t11;
  var t12;
  var div5;
  var t13;
  var t14;
  var div6;
  var t15;
  var t16;
  var div7;
  var t17;
  var t18;
  var div8;
  var t19;
  var t20;
  var div9;
  var t21;
  var t22;
  var div10;
  var t23;
  var t24;
  var div11;
  var t25;
  var t26;
  var div12;
  var t27;
  var t28;
  var div13;
  var small;
  var t29;
  var t30;
  var big;
  var t31;
  var t32;
  var sup;
  var t33;
  var t34;
  var sub;
  var t35;
  var t36;
  var strong;
  var t37;
  var t38;
  var em;
  var t39;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Typography");
      t2 = space();
      div0 = element("div");
      t3 = text("Headline 1");
      t4 = space();
      div1 = element("div");
      t5 = text("Headline 2");
      t6 = space();
      div2 = element("div");
      t7 = text("Headline 3");
      t8 = space();
      div3 = element("div");
      t9 = text("Headline 4");
      t10 = space();
      div4 = element("div");
      t11 = text("Headline 5");
      t12 = space();
      div5 = element("div");
      t13 = text("Headline 6");
      t14 = space();
      div6 = element("div");
      t15 = text("Subtitle 1");
      t16 = space();
      div7 = element("div");
      t17 = text("Subtitle 2");
      t18 = space();
      div8 = element("div");
      t19 = text("Body 1");
      t20 = space();
      div9 = element("div");
      t21 = text("Body 2");
      t22 = space();
      div10 = element("div");
      t23 = text("Caption");
      t24 = space();
      div11 = element("div");
      t25 = text("Button");
      t26 = space();
      div12 = element("div");
      t27 = text("Overline");
      t28 = space();
      div13 = element("div");
      small = element("small");
      t29 = text("small");
      t30 = space();
      big = element("big");
      t31 = text("big");
      t32 = space();
      sup = element("sup");
      t33 = text("sup");
      t34 = space();
      sub = element("sub");
      t35 = text("sub");
      t36 = space();
      strong = element("strong");
      t37 = text("strong");
      t38 = space();
      em = element("em");
      t39 = text("em");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Typography");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "Headline 1");
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t5 = claim_text(div1_nodes, "Headline 2");
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t7 = claim_text(div2_nodes, "Headline 3");
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t9 = claim_text(div3_nodes, "Headline 4");
      div3_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t11 = claim_text(div4_nodes, "Headline 5");
      div4_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t13 = claim_text(div5_nodes, "Headline 6");
      div5_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t15 = claim_text(div6_nodes, "Subtitle 1");
      div6_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      div7 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      t17 = claim_text(div7_nodes, "Subtitle 2");
      div7_nodes.forEach(detach_dev);
      t18 = claim_space(section_nodes);
      div8 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      t19 = claim_text(div8_nodes, "Body 1");
      div8_nodes.forEach(detach_dev);
      t20 = claim_space(section_nodes);
      div9 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      t21 = claim_text(div9_nodes, "Body 2");
      div9_nodes.forEach(detach_dev);
      t22 = claim_space(section_nodes);
      div10 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      t23 = claim_text(div10_nodes, "Caption");
      div10_nodes.forEach(detach_dev);
      t24 = claim_space(section_nodes);
      div11 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      t25 = claim_text(div11_nodes, "Button");
      div11_nodes.forEach(detach_dev);
      t26 = claim_space(section_nodes);
      div12 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      t27 = claim_text(div12_nodes, "Overline");
      div12_nodes.forEach(detach_dev);
      t28 = claim_space(section_nodes);
      div13 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      small = claim_element(div13_nodes, "SMALL", {});
      var small_nodes = children(small);
      t29 = claim_text(small_nodes, "small");
      small_nodes.forEach(detach_dev);
      t30 = claim_space(div13_nodes);
      big = claim_element(div13_nodes, "BIG", {});
      var big_nodes = children(big);
      t31 = claim_text(big_nodes, "big");
      big_nodes.forEach(detach_dev);
      t32 = claim_space(div13_nodes);
      sup = claim_element(div13_nodes, "SUP", {});
      var sup_nodes = children(sup);
      t33 = claim_text(sup_nodes, "sup");
      sup_nodes.forEach(detach_dev);
      t34 = claim_space(div13_nodes);
      sub = claim_element(div13_nodes, "SUB", {});
      var sub_nodes = children(sub);
      t35 = claim_text(sub_nodes, "sub");
      sub_nodes.forEach(detach_dev);
      t36 = claim_space(div13_nodes);
      strong = claim_element(div13_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t37 = claim_text(strong_nodes, "strong");
      strong_nodes.forEach(detach_dev);
      t38 = claim_space(div13_nodes);
      em = claim_element(div13_nodes, "EM", {});
      var em_nodes = children(em);
      t39 = claim_text(em_nodes, "em");
      em_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Typography - SMUI";
      add_location(h2, file, 5, 2, 77);
      attr_dev(div0, "class", "mdc-typography--headline1");
      add_location(div0, file, 12, 2, 244);
      attr_dev(div1, "class", "mdc-typography--headline2");
      add_location(div1, file, 14, 2, 303);
      attr_dev(div2, "class", "mdc-typography--headline3");
      add_location(div2, file, 16, 2, 362);
      attr_dev(div3, "class", "mdc-typography--headline4");
      add_location(div3, file, 18, 2, 421);
      attr_dev(div4, "class", "mdc-typography--headline5");
      add_location(div4, file, 20, 2, 480);
      attr_dev(div5, "class", "mdc-typography--headline6");
      add_location(div5, file, 22, 2, 539);
      attr_dev(div6, "class", "mdc-typography--subtitle1");
      add_location(div6, file, 24, 2, 598);
      attr_dev(div7, "class", "mdc-typography--subtitle2");
      add_location(div7, file, 26, 2, 657);
      attr_dev(div8, "class", "mdc-typography--body1");
      add_location(div8, file, 28, 2, 716);
      attr_dev(div9, "class", "mdc-typography--body2");
      add_location(div9, file, 30, 2, 767);
      attr_dev(div10, "class", "mdc-typography--caption");
      add_location(div10, file, 32, 2, 818);
      attr_dev(div11, "class", "mdc-typography--button");
      add_location(div11, file, 34, 2, 872);
      attr_dev(div12, "class", "mdc-typography--overline");
      add_location(div12, file, 36, 2, 924);
      add_location(small, file, 39, 4, 1020);
      add_location(big, file, 40, 4, 1045);
      add_location(sup, file, 41, 4, 1064);
      add_location(sub, file, 42, 4, 1083);
      add_location(strong, file, 43, 4, 1102);
      add_location(em, file, 44, 4, 1130);
      attr_dev(div13, "class", "mdc-typography--body1");
      add_location(div13, file, 38, 2, 980);
      add_location(section, file, 4, 0, 65);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      append_dev(div0, t3);
      append_dev(section, t4);
      append_dev(section, div1);
      append_dev(div1, t5);
      append_dev(section, t6);
      append_dev(section, div2);
      append_dev(div2, t7);
      append_dev(section, t8);
      append_dev(section, div3);
      append_dev(div3, t9);
      append_dev(section, t10);
      append_dev(section, div4);
      append_dev(div4, t11);
      append_dev(section, t12);
      append_dev(section, div5);
      append_dev(div5, t13);
      append_dev(section, t14);
      append_dev(section, div6);
      append_dev(div6, t15);
      append_dev(section, t16);
      append_dev(section, div7);
      append_dev(div7, t17);
      append_dev(section, t18);
      append_dev(section, div8);
      append_dev(div8, t19);
      append_dev(section, t20);
      append_dev(section, div9);
      append_dev(div9, t21);
      append_dev(section, t22);
      append_dev(section, div10);
      append_dev(div10, t23);
      append_dev(section, t24);
      append_dev(section, div11);
      append_dev(div11, t25);
      append_dev(section, t26);
      append_dev(section, div12);
      append_dev(div12, t27);
      append_dev(section, t28);
      append_dev(section, div13);
      append_dev(div13, small);
      append_dev(small, t29);
      append_dev(div13, t30);
      append_dev(div13, big);
      append_dev(big, t31);
      append_dev(div13, t32);
      append_dev(div13, sup);
      append_dev(sup, t33);
      append_dev(div13, t34);
      append_dev(div13, sub);
      append_dev(sub, t35);
      append_dev(div13, t36);
      append_dev(div13, strong);
      append_dev(strong, t37);
      append_dev(div13, t38);
      append_dev(div13, em);
      append_dev(em, t39);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
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

var Typography =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Typography, _SvelteComponentDev);

  function Typography(options) {
    var _this;

    _classCallCheck(this, Typography);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Typography).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Typography",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Typography;
}(SvelteComponentDev);

export default Typography;
