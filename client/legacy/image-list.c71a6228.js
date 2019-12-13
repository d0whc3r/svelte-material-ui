import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, M as space, f as element, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, l as add_location, m as insert_dev, P as append_dev, K as mount_component, t as transition_in, u as transition_out, L as destroy_component, D as empty, n as noop, aa as destroy_each, R as group_outros, T as check_outros } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/toConsumableArray';
import './useActions.03a18d11.js';
import '@babel/runtime/helpers/esm/construct';
import { D as Div } from './Div.d97c12da.js';
import { L as Label } from './Label.cdd98476.js';
import { I as ImageList, a as Item, b as ImageAspectContainer, S as Supporting, c as Image } from './index.d369ab33.js';

var css = ".my-image-list-standard{max-width:680px}.my-image-list-standard .mdc-image-list__item{width:calc(20% - 4.2px);margin:2px}@media (max-width:599px){.my-image-list-standard .mdc-image-list__item{width:calc(33.33333% - 4.33333px);margin:2px}}.my-image-list-4x5{max-width:680px}.my-image-list-4x5 .mdc-image-list__item{width:calc(20% - 4.2px);margin:2px}.my-image-list-4x5 .mdc-image-list__image-aspect-container{padding-bottom:125%}@media (max-width:599px){.my-image-list-4x5 .mdc-image-list__item{width:calc(33.33333% - 4.33333px);margin:2px}}.my-image-list-masonry{column-count:5;column-gap:16px;max-width:680px}.my-image-list-masonry .mdc-image-list__item{margin-bottom:16px}.my-image-list-masonry .mdc-image-list__image{border-radius:10px}.my-image-list-masonry.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-radius:0 0 10px 10px}@media (max-width:599px){.my-image-list-masonry{column-count:3;column-gap:16px}.my-image-list-masonry .mdc-image-list__item{margin-bottom:16px}}.my-image-list-enforce-ratio{max-width:680px}.my-image-list-enforce-ratio .mdc-image-list__item{width:calc(20% - 4.2px);margin:2px}@media (max-width:599px){.my-image-list-enforce-ratio .mdc-image-list__item{width:calc(33.33333% - 4.33333px);margin:2px}}";
styleInject(css);

var file = "src/routes/demo/image-list.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
} // (12:10) <ImageAspectContainer>


function create_default_slot_18(ctx) {
  var current;
  var image = new Image({
    props: {
      src: "https://via.placeholder.com/190x190.png?text=square",
      alt: "Image " + (
      /*i*/
      ctx[2] + 1)
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(image.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(image.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(image, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(image, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(12:10) <ImageAspectContainer>",
    ctx: ctx
  });
  return block;
} // (16:12) <Label>


function create_default_slot_17(ctx) {
  var t0;
  var t1_value =
  /*i*/
  ctx[2] + 1 + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text("Image ");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Image ");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(16:12) <Label>",
    ctx: ctx
  });
  return block;
} // (15:10) <Supporting>


function create_default_slot_16(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(15:10) <Supporting>",
    ctx: ctx
  });
  return block;
} // (11:8) <Item>


function create_default_slot_15(ctx) {
  var t0;
  var t1;
  var current;
  var imageaspectcontainer = new ImageAspectContainer({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var supporting = new Supporting({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(imageaspectcontainer.$$.fragment);
      t0 = space();
      create_component(supporting.$$.fragment);
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(imageaspectcontainer.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(supporting.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(imageaspectcontainer, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(supporting, target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imageaspectcontainer_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imageaspectcontainer_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imageaspectcontainer.$set(imageaspectcontainer_changes);
      var supporting_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        supporting_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      supporting.$set(supporting_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imageaspectcontainer.$$.fragment, local);
      transition_in(supporting.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imageaspectcontainer.$$.fragment, local);
      transition_out(supporting.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(imageaspectcontainer, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(supporting, detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(11:8) <Item>",
    ctx: ctx
  });
  return block;
} // (10:6) {#each Array(15) as _unused, i}


function create_each_block_3(ctx) {
  var current;
  var item = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_3.name,
    type: "each",
    source: "(10:6) {#each Array(15) as _unused, i}",
    ctx: ctx
  });
  return block;
} // (9:4) <ImageList class="my-image-list-standard">


function create_default_slot_14(ctx) {
  var each_1_anchor;
  var current;
  var each_value_3 = Array(15);
  var each_blocks = [];

  for (var i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value_3.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(9:4) <ImageList class=\\\"my-image-list-standard\\\">",
    ctx: ctx
  });
  return block;
} // (29:10) <ImageAspectContainer>


function create_default_slot_13(ctx) {
  var current;
  var image = new Image({
    props: {
      src: "https://via.placeholder.com/190x238.png?text=4x5",
      alt: "Image " + (
      /*i*/
      ctx[2] + 1)
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(image.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(image.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(image, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(image, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(29:10) <ImageAspectContainer>",
    ctx: ctx
  });
  return block;
} // (33:12) <Label>


function create_default_slot_12(ctx) {
  var t0;
  var t1_value =
  /*i*/
  ctx[2] + 1 + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text("Image ");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Image ");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(33:12) <Label>",
    ctx: ctx
  });
  return block;
} // (32:10) <Supporting>


function create_default_slot_11(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(32:10) <Supporting>",
    ctx: ctx
  });
  return block;
} // (28:8) <Item>


function create_default_slot_10(ctx) {
  var t0;
  var t1;
  var current;
  var imageaspectcontainer = new ImageAspectContainer({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var supporting = new Supporting({
    props: {
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(imageaspectcontainer.$$.fragment);
      t0 = space();
      create_component(supporting.$$.fragment);
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(imageaspectcontainer.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(supporting.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(imageaspectcontainer, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(supporting, target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imageaspectcontainer_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imageaspectcontainer_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imageaspectcontainer.$set(imageaspectcontainer_changes);
      var supporting_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        supporting_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      supporting.$set(supporting_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imageaspectcontainer.$$.fragment, local);
      transition_in(supporting.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imageaspectcontainer.$$.fragment, local);
      transition_out(supporting.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(imageaspectcontainer, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(supporting, detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(28:8) <Item>",
    ctx: ctx
  });
  return block;
} // (27:6) {#each Array(15) as _unused, i}


function create_each_block_2(ctx) {
  var current;
  var item = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(27:6) {#each Array(15) as _unused, i}",
    ctx: ctx
  });
  return block;
} // (26:4) <ImageList class="my-image-list-4x5" withTextProtection>


function create_default_slot_9(ctx) {
  var each_1_anchor;
  var current;
  var each_value_2 = Array(15);
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  var block = {
    c: function create() {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;

      for (var _i9 = 0; _i9 < each_value_2.length; _i9 += 1) {
        transition_in(each_blocks[_i9]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        transition_out(each_blocks[_i10]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(26:4) <ImageList class=\\\"my-image-list-4x5\\\" withTextProtection>",
    ctx: ctx
  });
  return block;
} // (48:12) <Label>


function create_default_slot_8(ctx) {
  var t0;
  var t1_value =
  /*i*/
  ctx[2] + 1 + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text("Image ");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Image ");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(48:12) <Label>",
    ctx: ctx
  });
  return block;
} // (47:10) <Supporting>


function create_default_slot_7(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(47:10) <Supporting>",
    ctx: ctx
  });
  return block;
} // (45:8) <Item>


function create_default_slot_6(ctx) {
  var t0;
  var t1;
  var current;
  var image = new Image({
    props: {
      src: "https://via.placeholder.com/190x" + getUnevenImageSize(
      /*i*/
      ctx[2], 107, 200, Math.abs) + ".png?text=190x" + getUnevenImageSize(
      /*i*/
      ctx[2], 107, 200, Math.abs),
      alt: "Image " + (
      /*i*/
      ctx[2] + 1)
    },
    $$inline: true
  });
  var supporting = new Supporting({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(image.$$.fragment);
      t0 = space();
      create_component(supporting.$$.fragment);
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(image.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(supporting.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(image, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(supporting, target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var supporting_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        supporting_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      supporting.$set(supporting_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(image.$$.fragment, local);
      transition_in(supporting.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(image.$$.fragment, local);
      transition_out(supporting.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(image, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(supporting, detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(45:8) <Item>",
    ctx: ctx
  });
  return block;
} // (44:6) {#each Array(15) as _unused, i}


function create_each_block_1(ctx) {
  var current;
  var item = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(44:6) {#each Array(15) as _unused, i}",
    ctx: ctx
  });
  return block;
} // (43:4) <ImageList class="my-image-list-masonry" masonry>


function create_default_slot_5(ctx) {
  var each_1_anchor;
  var current;
  var each_value_1 = Array(15);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
        each_blocks[_i11].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        each_blocks[_i12].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i13 = 0; _i13 < each_blocks.length; _i13 += 1) {
        each_blocks[_i13].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*getUnevenImageSize, Math*/
      0) {
        each_value_1 = Array(15);

        var _i14;

        for (_i14 = 0; _i14 < each_value_1.length; _i14 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i14);

          if (each_blocks[_i14]) {
            each_blocks[_i14].p(child_ctx, dirty);

            transition_in(each_blocks[_i14], 1);
          } else {
            each_blocks[_i14] = create_each_block_1(child_ctx);

            each_blocks[_i14].c();

            transition_in(each_blocks[_i14], 1);

            each_blocks[_i14].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i14 = each_value_1.length; _i14 < each_blocks.length; _i14 += 1) {
          out(_i14);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i15 = 0; _i15 < each_value_1.length; _i15 += 1) {
        transition_in(each_blocks[_i15]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i16 = 0; _i16 < each_blocks.length; _i16 += 1) {
        transition_out(each_blocks[_i16]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(43:4) <ImageList class=\\\"my-image-list-masonry\\\" masonry>",
    ctx: ctx
  });
  return block;
} // (61:10) <ImageAspectContainer>


function create_default_slot_4(ctx) {
  var current;
  var image = new Image({
    props: {
      component: Div,
      style: "background-image: url(https://via.placeholder.com/190x" + getUnevenImageSize(
      /*i*/
      ctx[2], 190, 10) + ".png?text=190x" + getUnevenImageSize(
      /*i*/
      ctx[2], 190, 10) + ");"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(image.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(image.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(image, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(image, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(61:10) <ImageAspectContainer>",
    ctx: ctx
  });
  return block;
} // (65:12) <Label>


function create_default_slot_3(ctx) {
  var t0;
  var t1_value =
  /*i*/
  ctx[2] + 1 + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text("Image ");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Image ");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(65:12) <Label>",
    ctx: ctx
  });
  return block;
} // (64:10) <Supporting>


function create_default_slot_2(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(64:10) <Supporting>",
    ctx: ctx
  });
  return block;
} // (60:8) <Item>


function create_default_slot_1(ctx) {
  var t0;
  var t1;
  var current;
  var imageaspectcontainer = new ImageAspectContainer({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var supporting = new Supporting({
    props: {
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(imageaspectcontainer.$$.fragment);
      t0 = space();
      create_component(supporting.$$.fragment);
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(imageaspectcontainer.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(supporting.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(imageaspectcontainer, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(supporting, target, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imageaspectcontainer_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imageaspectcontainer_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imageaspectcontainer.$set(imageaspectcontainer_changes);
      var supporting_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        supporting_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      supporting.$set(supporting_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imageaspectcontainer.$$.fragment, local);
      transition_in(supporting.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imageaspectcontainer.$$.fragment, local);
      transition_out(supporting.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(imageaspectcontainer, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(supporting, detaching);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(60:8) <Item>",
    ctx: ctx
  });
  return block;
} // (59:6) {#each Array(15) as _unused, i}


function create_each_block(ctx) {
  var current;
  var item = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(59:6) {#each Array(15) as _unused, i}",
    ctx: ctx
  });
  return block;
} // (58:4) <ImageList class="my-image-list-enforce-ratio">


function create_default_slot(ctx) {
  var each_1_anchor;
  var current;
  var each_value = Array(15);
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
      for (var _i17 = 0; _i17 < each_blocks.length; _i17 += 1) {
        each_blocks[_i17].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i18 = 0; _i18 < each_blocks.length; _i18 += 1) {
        each_blocks[_i18].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i19 = 0; _i19 < each_blocks.length; _i19 += 1) {
        each_blocks[_i19].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*Div, getUnevenImageSize*/
      0) {
        each_value = Array(15);

        var _i20;

        for (_i20 = 0; _i20 < each_value.length; _i20 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i20);

          if (each_blocks[_i20]) {
            each_blocks[_i20].p(child_ctx, dirty);

            transition_in(each_blocks[_i20], 1);
          } else {
            each_blocks[_i20] = create_each_block(child_ctx);

            each_blocks[_i20].c();

            transition_in(each_blocks[_i20], 1);

            each_blocks[_i20].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i20 = each_value.length; _i20 < each_blocks.length; _i20 += 1) {
          out(_i20);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i21 = 0; _i21 < each_value.length; _i21 += 1) {
        transition_in(each_blocks[_i21]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i22 = 0; _i22 < each_blocks.length; _i22 += 1) {
        transition_out(each_blocks[_i22]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(58:4) <ImageList class=\\\"my-image-list-enforce-ratio\\\">",
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
  var div1;
  var t4;
  var t5;
  var div2;
  var t6;
  var t7;
  var div3;
  var t8;
  var code0;
  var t9;
  var t10;
  var code1;
  var t11;
  var t12;
  var current;
  var imagelist0 = new ImageList({
    props: {
      class: "my-image-list-standard",
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var imagelist1 = new ImageList({
    props: {
      class: "my-image-list-4x5",
      withTextProtection: true,
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var imagelist2 = new ImageList({
    props: {
      class: "my-image-list-masonry",
      masonry: true,
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var imagelist3 = new ImageList({
    props: {
      class: "my-image-list-enforce-ratio",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Image Lists");
      t2 = space();
      div0 = element("div");
      create_component(imagelist0.$$.fragment);
      t3 = space();
      div1 = element("div");
      t4 = text("4x5 aspect ratio, with text protection:\n\n    ");
      create_component(imagelist1.$$.fragment);
      t5 = space();
      div2 = element("div");
      t6 = text("Masonry, with rounded shapes:\n\n    ");
      create_component(imagelist2.$$.fragment);
      t7 = space();
      div3 = element("div");
      t8 = text("Using a ");
      code0 = element("code");
      t9 = text("div");
      t10 = text(" instead of an ");
      code1 = element("code");
      t11 = text("img");
      t12 = text(" to enforce aspect ratio:\n\n    ");
      create_component(imagelist3.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Image Lists");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(imagelist0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "4x5 aspect ratio, with text protection:\n\n    ");
      claim_component(imagelist1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "Masonry, with rounded shapes:\n\n    ");
      claim_component(imagelist2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t8 = claim_text(div3_nodes, "Using a ");
      code0 = claim_element(div3_nodes, "CODE", {});
      var code0_nodes = children(code0);
      t9 = claim_text(code0_nodes, "div");
      code0_nodes.forEach(detach_dev);
      t10 = claim_text(div3_nodes, " instead of an ");
      code1 = claim_element(div3_nodes, "CODE", {});
      var code1_nodes = children(code1);
      t11 = claim_text(code1_nodes, "img");
      code1_nodes.forEach(detach_dev);
      t12 = claim_text(div3_nodes, " to enforce aspect ratio:\n\n    ");
      claim_component(imagelist3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Image Lists - SMUI";
      add_location(h2, file, 5, 2, 78);
      add_location(div0, file, 7, 2, 102);
      add_location(div1, file, 22, 2, 522);
      add_location(div2, file, 39, 2, 998);
      add_location(code0, file, 55, 12, 1490);
      add_location(code1, file, 55, 43, 1521);
      add_location(div3, file, 54, 2, 1472);
      add_location(section, file, 4, 0, 66);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(imagelist0, div0, null);
      append_dev(section, t3);
      append_dev(section, div1);
      append_dev(div1, t4);
      mount_component(imagelist1, div1, null);
      append_dev(section, t5);
      append_dev(section, div2);
      append_dev(div2, t6);
      mount_component(imagelist2, div2, null);
      append_dev(section, t7);
      append_dev(section, div3);
      append_dev(div3, t8);
      append_dev(div3, code0);
      append_dev(code0, t9);
      append_dev(div3, t10);
      append_dev(div3, code1);
      append_dev(code1, t11);
      append_dev(div3, t12);
      mount_component(imagelist3, div3, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var imagelist0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imagelist0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imagelist0.$set(imagelist0_changes);
      var imagelist1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imagelist1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imagelist1.$set(imagelist1_changes);
      var imagelist2_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imagelist2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imagelist2.$set(imagelist2_changes);
      var imagelist3_changes = {};

      if (dirty[0] &
      /*$$scope*/
      64) {
        imagelist3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      imagelist3.$set(imagelist3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(imagelist0.$$.fragment, local);
      transition_in(imagelist1.$$.fragment, local);
      transition_in(imagelist2.$$.fragment, local);
      transition_in(imagelist3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imagelist0.$$.fragment, local);
      transition_out(imagelist1.$$.fragment, local);
      transition_out(imagelist2.$$.fragment, local);
      transition_out(imagelist3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(imagelist0);
      destroy_component(imagelist1);
      destroy_component(imagelist2);
      destroy_component(imagelist3);
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

function getUnevenImageSize(counter, base, variance) {
  var preAdd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (num) {
    return num;
  };
  var mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
  return base + Math.floor(preAdd(mid));
}

var Image_list =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Image_list, _SvelteComponentDev);

  function Image_list(options) {
    var _this;

    _classCallCheck(this, Image_list);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Image_list).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Image_list",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Image_list;
}(SvelteComponentDev);

export default Image_list;
