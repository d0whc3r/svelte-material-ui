import {classAdderBuilder} from '@d0whc3r/common/classAdderBuilder.js';
import Footer from '@d0whc3r/common/Footer.svelte';

export default classAdderBuilder({
  class: 'mdc-dialog__actions',
  component: Footer,
  contexts: {
    'SMUI:button:context': 'dialog:action'
  }
});
