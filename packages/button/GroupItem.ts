export default function GroupItem(node: HTMLElement) {
  node.classList.add('smui-button__group-item');

  return {
    destroy() {
      node.classList.remove('smui-button__group-item');
    }
  }
}
