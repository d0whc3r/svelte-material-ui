import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, M as space, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, O as attr_dev, l as add_location, m as insert_dev, K as mount_component, $ as set_data_dev, t as transition_in, u as transition_out, L as destroy_component, F as binding_callbacks, H as bind, Q as add_flush_callback, D as empty, R as group_outros, T as check_outros, aa as destroy_each, n as noop } from './index.0812fa32.js';
import './style-inject.es.8e8f85b0.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/typeof';
import '@babel/runtime/helpers/esm/toConsumableArray';
import './useActions.03a18d11.js';
import '@babel/runtime/helpers/esm/construct';
import './Div.d97c12da.js';
import './Span.f3477293.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import { L as List, b as Group, S as Separator, a as Subheader, T as Text, G as Graphic, c as Label, M as Meta, P as PrimaryText, d as SecondaryText } from './index.ec2d92bf.js';
import '@babel/runtime/regenerator';
import { I as Item } from './Item.02b48338.js';
import { C as Checkbox } from './index.4e1eb8c9.js';
import './prefixFilter.1941fe02.js';
import { R as Radio } from './index.b1c451b9.js';

var file = "src/routes/demo/list.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-pr1nc6-style";
  style.textContent = ".svelte-pr1nc6 .demo-list{max-width:600px;border:1px solid rgba(0,0,0,.1)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zdmVsdGUiLCJzb3VyY2VzIjpbImxpc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkxpc3RzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkxpc3RzPC9oMj5cblxuICA8ZGl2PlxuICAgIEEgc2ltcGxlIGxpc3Q6XG4gICAgPExpc3QgY2xhc3M9XCJkZW1vLWxpc3RcIj5cbiAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkU2ltcGxlID0gJ0N1dCd9PjxUZXh0PkN1dDwvVGV4dD48L0l0ZW0+XG4gICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZFNpbXBsZSA9ICdDb3B5J30+PFRleHQ+Q29weTwvVGV4dD48L0l0ZW0+XG4gICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZFNpbXBsZSA9ICdQYXN0ZSd9PjxUZXh0PlBhc3RlPC9UZXh0PjwvSXRlbT5cbiAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkU2ltcGxlID0gJ0RlbGV0ZSd9PjxUZXh0PkRlbGV0ZTwvVGV4dD48L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xpY2tlZDoge2NsaWNrZWRTaW1wbGV9PC9wcmU+XG5cbiAgPGRpdj5cbiAgICBBIGRlbnNlIGxpc3Qgd2l0aCBncmFwaGljczpcbiAgICA8TGlzdCBjbGFzcz1cImRlbW8tbGlzdFwiIGRlbnNlPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdFZGl0J30+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5FZGl0PC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdTZW5kJ30+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zZW5kPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5TZW5kPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdBcmNoaXZlJ30+XG4gICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5hcmNoaXZlPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5BcmNoaXZlPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWREZW5zZSA9ICdEZWxldGUnfT5cbiAgICAgICAgPEdyYXBoaWMgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5EZWxldGU8L1RleHQ+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xpY2tlZDoge2NsaWNrZWREZW5zZX08L3ByZT5cblxuICA8ZGl2PlxuICAgIEEgbm9uLWludGVyYWN0aXZlIGxpc3Qgd2l0aCBhY3RpdmF0ZWQgaXRlbTpcbiAgICA8TGlzdCBjbGFzcz1cImRlbW8tbGlzdFwiIG5vbkludGVyYWN0aXZlPlxuICAgICAgPEl0ZW0gcmlwcGxlPXtmYWxzZX0+PFRleHQ+VGhpbmcgMTwvVGV4dD48L0l0ZW0+XG4gICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICA8SXRlbSByaXBwbGU9e2ZhbHNlfSBhY3RpdmF0ZWQ+PFRleHQ+VGhpbmcgMjwvVGV4dD48L0l0ZW0+XG4gICAgICA8SXRlbSByaXBwbGU9e2ZhbHNlfT48VGV4dD5UaGluZyAzPC9UZXh0PjwvSXRlbT5cbiAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgIDxJdGVtIHJpcHBsZT17ZmFsc2V9PjxUZXh0PlRoaW5nIDQ8L1RleHQ+PC9JdGVtPlxuICAgIDwvTGlzdD5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBBIHR3by1saW5lIHNpbmdsZSBzZWxlY3Rpb24gbGlzdCB3aXRoIGF2YXRhcnMsIGRpc2FibGVkIGl0ZW0sIGFuZCBtZXRhOlxuICAgIDxMaXN0IGNsYXNzPVwiZGVtby1saXN0XCIgdHdvTGluZSBhdmF0YXJMaXN0IHNpbmdsZVNlbGVjdGlvbiBiaW5kOnNlbGVjdGVkSW5kZXg9e3NlbGVjdGlvbkluZGV4fT5cbiAgICAgIHsjZWFjaCBvcHRpb25zVHdvTGluZSBhcyBpdGVtfVxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gc2VsZWN0aW9uVHdvTGluZSA9IGl0ZW0ubmFtZX0gZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9IHNlbGVjdGVkPXtzZWxlY3Rpb25Ud29MaW5lID09PSBpdGVtLm5hbWV9PlxuICAgICAgICAgIDxHcmFwaGljIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MHg0MC5wbmc/dGV4dD17aXRlbS5uYW1lLnNwbGl0KCcgJykubWFwKHZhbCA9PiB2YWwuc3Vic3RyaW5nKDAsIDEpKS5qb2luKCcnKX0pO1wiIC8+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8UHJpbWFyeVRleHQ+e2l0ZW0ubmFtZX08L1ByaW1hcnlUZXh0PlxuICAgICAgICAgICAgPFNlY29uZGFyeVRleHQ+e2l0ZW0uZGVzY3JpcHRpb259PC9TZWNvbmRhcnlUZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8TWV0YSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+aW5mbzwvTWV0YT5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgey9lYWNofVxuICAgIDwvTGlzdD5cbiAgPC9kaXY+XG5cbiAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7c2VsZWN0aW9uVHdvTGluZX0sIHZhbHVlIG9mIHNlbGVjdGVkSW5kZXg6IHtzZWxlY3Rpb25JbmRleH08L3ByZT5cblxuICA8ZGl2PlxuICAgIEEgdGhyZWUtbGluZSBsaXN0OlxuICAgIDxMaXN0IGNsYXNzPVwiZGVtby1saXN0XCIgdGhyZWVMaW5lIG5vbkludGVyYWN0aXZlPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxQcmltYXJ5VGV4dD5GcnVpdFBob25lIDExPC9QcmltYXJ5VGV4dD5cbiAgICAgICAgICA8U2Vjb25kYXJ5VGV4dD4kMSwxMDA8L1NlY29uZGFyeVRleHQ+XG4gICAgICAgICAgPFNlY29uZGFyeVRleHQ+QSBiZWF1dGlmdWwgcGhvbmUgd2l0aCBnb29kIHNwZWNzLjwvU2Vjb25kYXJ5VGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxQcmltYXJ5VGV4dD5BZGRpdGlvbiBQaG9uZTwvUHJpbWFyeVRleHQ+XG4gICAgICAgICAgPFNlY29uZGFyeVRleHQ+JDcwMDwvU2Vjb25kYXJ5VGV4dD5cbiAgICAgICAgICA8U2Vjb25kYXJ5VGV4dD5QcmV0dHkgbXVjaCB0aGUgc2FtZSBwaG9uZSwgYnV0IGEgZGlmZmVyZW50IGJyYW5kIG5hbWUgYW5kIE9TLjwvU2Vjb25kYXJ5VGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgIDwvTGlzdD5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBBIGxpc3QgZ3JvdXA6XG4gICAgPEdyb3VwPlxuICAgICAgPFN1YmhlYWRlcj5BY3RvcnM8L1N1YmhlYWRlcj5cbiAgICAgIDxMaXN0IGNsYXNzPVwiZGVtby1saXN0XCI+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnQnJ1Y2UgV2lsbGlzJ30+XG4gICAgICAgICAgPFRleHQ+QnJ1Y2UgV2lsbGlzPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnVG9tIEhhbmtzJ30+XG4gICAgICAgICAgPFRleHQ+VG9tIEhhbmtzPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnSmFjayBOaWNob2xzb24nfT5cbiAgICAgICAgICA8VGV4dD5KYWNrIE5pY2hvbHNvbjwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZEdyb3VwID0gJ0xlb25hcmRvIERpQ2FwcmlvJ30+XG4gICAgICAgICAgPFRleHQ+TGVvbmFyZG8gRGlDYXByaW88L1RleHQ+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdNYXR0IERhbW9uJ30+XG4gICAgICAgICAgPFRleHQ+TWF0dCBEYW1vbjwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuICAgICAgPFN1YmhlYWRlcj5Cb29rczwvU3ViaGVhZGVyPlxuICAgICAgPExpc3QgY2xhc3M9XCJkZW1vLWxpc3RcIj5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdUbyBLaWxsIGEgTW9ja2luZ2JpcmQnfT5cbiAgICAgICAgICA8VGV4dD5UbyBLaWxsIGEgTW9ja2luZ2JpcmQ8L1RleHQ+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWRHcm91cCA9ICdUaGUgR3JlYXQgR2F0c2J5J30+XG4gICAgICAgICAgPFRleHQ+VGhlIEdyZWF0IEdhdHNieTwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZEdyb3VwID0gJzE5ODQnfT5cbiAgICAgICAgICA8VGV4dD4xOTg0PC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkR3JvdXAgPSAnQ2F0Y2gtMjInfT5cbiAgICAgICAgICA8VGV4dD5DYXRjaC0yMjwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZEdyb3VwID0gJ0FsaWNlXFwncyBBZHZlbnR1cmVzIGluIFdvbmRlcmxhbmQnfT5cbiAgICAgICAgICA8VGV4dD5BbGljZSdzIEFkdmVudHVyZXMgaW4gV29uZGVybGFuZDwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuICAgIDwvR3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZEdyb3VwfTwvcHJlPlxuXG4gIDxkaXY+XG4gICAgQSByYWRpbyBsaXN0OlxuICAgIDxMaXN0IGNsYXNzPVwiZGVtby1saXN0XCIgcmFkaW9saXN0PlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxHcmFwaGljPlxuICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3RlZFJhZGlvfSB2YWx1ZT1cIkJydWNlIFdpbGxpc1wiIC8+XG4gICAgICAgIDwvR3JhcGhpYz5cbiAgICAgICAgPExhYmVsPkJydWNlIFdpbGxpczwvTGFiZWw+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPEdyYXBoaWM+XG4gICAgICAgICAgPFJhZGlvIGJpbmQ6Z3JvdXA9e3NlbGVjdGVkUmFkaW99IHZhbHVlPVwiVG9tIEhhbmtzXCIgLz5cbiAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICA8TGFiZWw+VG9tIEhhbmtzPC9MYWJlbD5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17c2VsZWN0ZWRSYWRpb30gdmFsdWU9XCJKYWNrIE5pY2hvbHNvblwiIC8+XG4gICAgICAgIDwvR3JhcGhpYz5cbiAgICAgICAgPExhYmVsPkphY2sgTmljaG9sc29uPC9MYWJlbD5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17c2VsZWN0ZWRSYWRpb30gdmFsdWU9XCJMZW9uYXJkbyBEaUNhcHJpb1wiIC8+XG4gICAgICAgIDwvR3JhcGhpYz5cbiAgICAgICAgPExhYmVsPkxlb25hcmRvIERpQ2FwcmlvPC9MYWJlbD5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17c2VsZWN0ZWRSYWRpb30gdmFsdWU9XCJNYXR0IERhbW9uXCIgLz5cbiAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICA8TGFiZWw+TWF0dCBEYW1vbjwvTGFiZWw+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L2Rpdj5cblxuICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHtzZWxlY3RlZFJhZGlvfTwvcHJlPlxuXG4gIDxkaXY+XG4gICAgQSBjaGVjayBsaXN0IHdpdGggdHJhaWxpbmcgY2hlY2tib3hlczpcbiAgICA8TGlzdCBjbGFzcz1cImRlbW8tbGlzdFwiIGNoZWNrbGlzdD5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8TGFiZWw+QnJ1Y2UgV2lsbGlzPC9MYWJlbD5cbiAgICAgICAgPE1ldGE+XG4gICAgICAgICAgPENoZWNrYm94IGJpbmQ6Z3JvdXA9e3NlbGVjdGVkQ2hlY2tib3h9IHZhbHVlPVwiQnJ1Y2UgV2lsbGlzXCIgLz5cbiAgICAgICAgPC9NZXRhPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxMYWJlbD5Ub20gSGFua3M8L0xhYmVsPlxuICAgICAgICA8TWV0YT5cbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpncm91cD17c2VsZWN0ZWRDaGVja2JveH0gdmFsdWU9XCJUb20gSGFua3NcIiAvPlxuICAgICAgICA8L01ldGE+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPExhYmVsPkphY2sgTmljaG9sc29uPC9MYWJlbD5cbiAgICAgICAgPE1ldGE+XG4gICAgICAgICAgPENoZWNrYm94IGJpbmQ6Z3JvdXA9e3NlbGVjdGVkQ2hlY2tib3h9IHZhbHVlPVwiSmFjayBOaWNob2xzb25cIiAvPlxuICAgICAgICA8L01ldGE+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPExhYmVsPkxlb25hcmRvIERpQ2FwcmlvPC9MYWJlbD5cbiAgICAgICAgPE1ldGE+XG4gICAgICAgICAgPENoZWNrYm94IGJpbmQ6Z3JvdXA9e3NlbGVjdGVkQ2hlY2tib3h9IHZhbHVlPVwiTGVvbmFyZG8gRGlDYXByaW9cIiAvPlxuICAgICAgICA8L01ldGE+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPExhYmVsPk1hdHQgRGFtb248L0xhYmVsPlxuICAgICAgICA8TWV0YT5cbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpncm91cD17c2VsZWN0ZWRDaGVja2JveH0gdmFsdWU9XCJNYXR0IERhbW9uXCIgLz5cbiAgICAgICAgPC9NZXRhPlxuICAgICAgPC9JdGVtPlxuICAgIDwvTGlzdD5cbiAgPC9kaXY+XG5cbiAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7c2VsZWN0ZWRDaGVja2JveC5qb2luKCcsICcpfTwvcHJlPlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgTGlzdCwge0dyb3VwLCBJdGVtLCBHcmFwaGljLCBNZXRhLCBMYWJlbCwgU2VwYXJhdG9yLCBTdWJoZWFkZXIsIFRleHQsIFByaW1hcnlUZXh0LCBTZWNvbmRhcnlUZXh0fSBmcm9tICdAc211aS9saXN0JztcbiAgaW1wb3J0IFJhZGlvIGZyb20gJ0BzbXVpL3JhZGlvJztcbiAgaW1wb3J0IENoZWNrYm94IGZyb20gJ0BzbXVpL2NoZWNrYm94JztcblxuICBsZXQgY2xpY2tlZFNpbXBsZSA9ICdub3RoaW5nIHlldCc7XG4gIGxldCBjbGlja2VkRGVuc2UgPSAnbm90aGluZyB5ZXQnO1xuICBsZXQgb3B0aW9uc1R3b0xpbmUgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0JydWNlIFdpbGxpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FjdG9yJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0F1c3RpbiBQb3dlcnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWN0aW9uYWwgQ2hhcmFjdGVyJyxcbiAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVGhvbWFzIEVkaXNvbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ludmVudG9yJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1N0ZXBoZW4gSGF3a2luZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NjaWVudGlzdCcsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9XG4gIF07XG4gIGxldCBzZWxlY3Rpb25Ud29MaW5lID0gJ1N0ZXBoZW4gSGF3a2luZyc7XG4gIC8vIFRoaXMgdmFsdWUgaXMgdXBkYXRlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQsIGJhc2VkIG9uIHRoZVxuICAvLyBzZWxlY3RlZCBJdGVtJ3MgYHNlbGVjdGVkYCBwcm9wLlxuICBsZXQgc2VsZWN0aW9uSW5kZXggPSBudWxsO1xuICBsZXQgY2xpY2tlZEdyb3VwID0gJ25vdGhpbmcgeWV0JztcbiAgbGV0IHNlbGVjdGVkUmFkaW8gPSAnVG9tIEhhbmtzJztcbiAgbGV0IHNlbGVjdGVkQ2hlY2tib3ggPSBbJ1RvbSBIYW5rcyddO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5kZW1vLWxpc3QpIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErUEUsY0FBQyxDQUFDLEFBQVEsVUFBVSxBQUFFLENBQUMsQUFDckIsU0FBUyxDQUFFLEtBQUssQ0FDaEIsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQUFDbEMsQ0FBQyJ9 */";
  append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[38] = list[i];
  return child_ctx;
} // (11:57) <Text>


function create_default_slot_104(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Cut");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Cut");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_104.name,
    type: "slot",
    source: "(11:57) <Text>",
    ctx: ctx
  });
  return block;
} // (11:6) <Item on:SMUI:action={() => clickedSimple = 'Cut'}>


function create_default_slot_103(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_104]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_103.name,
    type: "slot",
    source: "(11:6) <Item on:SMUI:action={() => clickedSimple = 'Cut'}>",
    ctx: ctx
  });
  return block;
} // (12:58) <Text>


function create_default_slot_102(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Copy");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Copy");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_102.name,
    type: "slot",
    source: "(12:58) <Text>",
    ctx: ctx
  });
  return block;
} // (12:6) <Item on:SMUI:action={() => clickedSimple = 'Copy'}>


function create_default_slot_101(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_102]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_101.name,
    type: "slot",
    source: "(12:6) <Item on:SMUI:action={() => clickedSimple = 'Copy'}>",
    ctx: ctx
  });
  return block;
} // (13:59) <Text>


function create_default_slot_100(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paste");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paste");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_100.name,
    type: "slot",
    source: "(13:59) <Text>",
    ctx: ctx
  });
  return block;
} // (13:6) <Item on:SMUI:action={() => clickedSimple = 'Paste'}>


function create_default_slot_99(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_100]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_99.name,
    type: "slot",
    source: "(13:6) <Item on:SMUI:action={() => clickedSimple = 'Paste'}>",
    ctx: ctx
  });
  return block;
} // (15:60) <Text>


function create_default_slot_98(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_98.name,
    type: "slot",
    source: "(15:60) <Text>",
    ctx: ctx
  });
  return block;
} // (15:6) <Item on:SMUI:action={() => clickedSimple = 'Delete'}>


function create_default_slot_97(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_98]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_97.name,
    type: "slot",
    source: "(15:6) <Item on:SMUI:action={() => clickedSimple = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (10:4) <List class="demo-list">


function create_default_slot_96(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_103]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler*/
  ctx[8]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_101]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_1*/
  ctx[9]);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_99]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_2*/
  ctx[10]);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_97]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action",
  /*SMUI_action_handler_3*/
  ctx[11]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(separator.$$.fragment);
      t3 = space();
      create_component(item3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_96.name,
    type: "slot",
    source: "(10:4) <List class=\\\"demo-list\\\">",
    ctx: ctx
  });
  return block;
} // (25:8) <Graphic class="material-icons">


function create_default_slot_95(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("edit");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "edit");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_95.name,
    type: "slot",
    source: "(25:8) <Graphic class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (26:8) <Text>


function create_default_slot_94(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Edit");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Edit");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_94.name,
    type: "slot",
    source: "(26:8) <Text>",
    ctx: ctx
  });
  return block;
} // (24:6) <Item on:SMUI:action={() => clickedDense = 'Edit'}>


function create_default_slot_93(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_95]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_94]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_93.name,
    type: "slot",
    source: "(24:6) <Item on:SMUI:action={() => clickedDense = 'Edit'}>",
    ctx: ctx
  });
  return block;
} // (29:8) <Graphic class="material-icons">


function create_default_slot_92(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("send");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "send");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_92.name,
    type: "slot",
    source: "(29:8) <Graphic class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (30:8) <Text>


function create_default_slot_91(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Send");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Send");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_91.name,
    type: "slot",
    source: "(30:8) <Text>",
    ctx: ctx
  });
  return block;
} // (28:6) <Item on:SMUI:action={() => clickedDense = 'Send'}>


function create_default_slot_90(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_92]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_91]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_90.name,
    type: "slot",
    source: "(28:6) <Item on:SMUI:action={() => clickedDense = 'Send'}>",
    ctx: ctx
  });
  return block;
} // (33:8) <Graphic class="material-icons">


function create_default_slot_89(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("archive");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "archive");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_89.name,
    type: "slot",
    source: "(33:8) <Graphic class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (34:8) <Text>


function create_default_slot_88(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Archive");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Archive");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_88.name,
    type: "slot",
    source: "(34:8) <Text>",
    ctx: ctx
  });
  return block;
} // (32:6) <Item on:SMUI:action={() => clickedDense = 'Archive'}>


function create_default_slot_87(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_89]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_88]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_87.name,
    type: "slot",
    source: "(32:6) <Item on:SMUI:action={() => clickedDense = 'Archive'}>",
    ctx: ctx
  });
  return block;
} // (38:8) <Graphic class="material-icons">


function create_default_slot_86(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("clear");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "clear");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_86.name,
    type: "slot",
    source: "(38:8) <Graphic class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (39:8) <Text>


function create_default_slot_85(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Delete");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Delete");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_85.name,
    type: "slot",
    source: "(39:8) <Text>",
    ctx: ctx
  });
  return block;
} // (37:6) <Item on:SMUI:action={() => clickedDense = 'Delete'}>


function create_default_slot_84(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_86]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_85]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_84.name,
    type: "slot",
    source: "(37:6) <Item on:SMUI:action={() => clickedDense = 'Delete'}>",
    ctx: ctx
  });
  return block;
} // (23:4) <List class="demo-list" dense>


function create_default_slot_83(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_93]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler_4*/
  ctx[12]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_90]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_5*/
  ctx[13]);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_87]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_6*/
  ctx[14]);
  var separator = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_84]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action",
  /*SMUI_action_handler_7*/
  ctx[15]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(separator.$$.fragment);
      t3 = space();
      create_component(item3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(23:4) <List class=\\\"demo-list\\\" dense>",
    ctx: ctx
  });
  return block;
} // (49:27) <Text>


function create_default_slot_82(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_82.name,
    type: "slot",
    source: "(49:27) <Text>",
    ctx: ctx
  });
  return block;
} // (49:6) <Item ripple={false}>


function create_default_slot_81(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_82]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_81.name,
    type: "slot",
    source: "(49:6) <Item ripple={false}>",
    ctx: ctx
  });
  return block;
} // (51:37) <Text>


function create_default_slot_80(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_80.name,
    type: "slot",
    source: "(51:37) <Text>",
    ctx: ctx
  });
  return block;
} // (51:6) <Item ripple={false} activated>


function create_default_slot_79(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_80]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_79.name,
    type: "slot",
    source: "(51:6) <Item ripple={false} activated>",
    ctx: ctx
  });
  return block;
} // (52:27) <Text>


function create_default_slot_78(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_78.name,
    type: "slot",
    source: "(52:27) <Text>",
    ctx: ctx
  });
  return block;
} // (52:6) <Item ripple={false}>


function create_default_slot_77(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_78]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_77.name,
    type: "slot",
    source: "(52:6) <Item ripple={false}>",
    ctx: ctx
  });
  return block;
} // (54:27) <Text>


function create_default_slot_76(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 4");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 4");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_76.name,
    type: "slot",
    source: "(54:27) <Text>",
    ctx: ctx
  });
  return block;
} // (54:6) <Item ripple={false}>


function create_default_slot_75(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_76]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_75.name,
    type: "slot",
    source: "(54:6) <Item ripple={false}>",
    ctx: ctx
  });
  return block;
} // (48:4) <List class="demo-list" nonInteractive>


function create_default_slot_74(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var t4;
  var current;
  var item0 = new Item({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var separator0 = new Separator({
    $$inline: true
  });
  var item1 = new Item({
    props: {
      ripple: false,
      activated: true,
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item2 = new Item({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_77]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var separator1 = new Separator({
    $$inline: true
  });
  var item3 = new Item({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_75]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(separator0.$$.fragment);
      t1 = space();
      create_component(item1.$$.fragment);
      t2 = space();
      create_component(item2.$$.fragment);
      t3 = space();
      create_component(separator1.$$.fragment);
      t4 = space();
      create_component(item3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(separator0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(separator1.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(separator0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(separator1, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(item3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(separator0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(separator1.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(separator0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(separator1.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(separator0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(separator1, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(item3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_74.name,
    type: "slot",
    source: "(48:4) <List class=\\\"demo-list\\\" nonInteractive>",
    ctx: ctx
  });
  return block;
} // (65:12) <PrimaryText>


function create_default_slot_73(ctx) {
  var t_value =
  /*item*/
  ctx[38].name + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_73.name,
    type: "slot",
    source: "(65:12) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (66:12) <SecondaryText>


function create_default_slot_72(ctx) {
  var t_value =
  /*item*/
  ctx[38].description + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_72.name,
    type: "slot",
    source: "(66:12) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (64:10) <Text>


function create_default_slot_71(ctx) {
  var t;
  var current;
  var primarytext = new PrimaryText({
    props: {
      $$slots: {
        default: [create_default_slot_73]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var secondarytext = new SecondaryText({
    props: {
      $$slots: {
        default: [create_default_slot_72]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(primarytext.$$.fragment);
      t = space();
      create_component(secondarytext.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(secondarytext.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(secondarytext, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        secondarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext.$set(secondarytext_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t);
      destroy_component(secondarytext, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_71.name,
    type: "slot",
    source: "(64:10) <Text>",
    ctx: ctx
  });
  return block;
} // (68:10) <Meta class="material-icons">


function create_default_slot_70(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("info");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "info");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_70.name,
    type: "slot",
    source: "(68:10) <Meta class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (62:8) <Item on:SMUI:action={() => selectionTwoLine = item.name} disabled={item.disabled} selected={selectionTwoLine === item.name}>


function create_default_slot_69(ctx) {
  var t0;
  var t1;
  var t2;
  var current;
  var graphic = new Graphic({
    props: {
      style: "background-image: url(https://via.placeholder.com/40x40.png?text=" +
      /*item*/
      ctx[38].name.split(" ").map(func).join("") + ");"
    },
    $$inline: true
  });
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_71]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_70]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t0 = space();
      create_component(text_1.$$.fragment);
      t1 = space();
      create_component(meta.$$.fragment);
      t2 = space();
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(text_1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(meta.$$.fragment, nodes);
      t2 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(text_1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(meta, target, anchor);
      insert_dev(target, t2, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
      var meta_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        meta_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(text_1.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(text_1.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(meta, detaching);
      if (detaching) detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_69.name,
    type: "slot",
    source: "(62:8) <Item on:SMUI:action={() => selectionTwoLine = item.name} disabled={item.disabled} selected={selectionTwoLine === item.name}>",
    ctx: ctx
  });
  return block;
} // (61:6) {#each optionsTwoLine as item}


function create_each_block(ctx) {
  var current;

  function SMUI_action_handler_8() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*SMUI_action_handler_8*/
      (_ctx = ctx)[16].apply(_ctx, [
      /*item*/
      ctx[38]].concat(args))
    );
  }

  var item = new Item({
    props: {
      disabled:
      /*item*/
      ctx[38].disabled,
      selected:
      /*selectionTwoLine*/
      ctx[2] ===
      /*item*/
      ctx[38].name,
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item.$on("SMUI:action", SMUI_action_handler_8);
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
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var item_changes = {};
      if (dirty[0] &
      /*selectionTwoLine*/
      4) item_changes.selected =
      /*selectionTwoLine*/
      ctx[2] ===
      /*item*/
      ctx[38].name;

      if (dirty[1] &
      /*$$scope*/
      1024) {
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
    source: "(61:6) {#each optionsTwoLine as item}",
    ctx: ctx
  });
  return block;
} // (60:4) <List class="demo-list" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>


function create_default_slot_68(ctx) {
  var each_1_anchor;
  var current;
  var each_value =
  /*optionsTwoLine*/
  ctx[7];
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
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*optionsTwoLine, selectionTwoLine*/
      132) {
        each_value =
        /*optionsTwoLine*/
        ctx[7];

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
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
    id: create_default_slot_68.name,
    type: "slot",
    source: "(60:4) <List class=\\\"demo-list\\\" twoLine avatarList singleSelection bind:selectedIndex={selectionIndex}>",
    ctx: ctx
  });
  return block;
} // (81:10) <PrimaryText>


function create_default_slot_67(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("FruitPhone 11");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "FruitPhone 11");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_67.name,
    type: "slot",
    source: "(81:10) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (82:10) <SecondaryText>


function create_default_slot_66(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("$1,100");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "$1,100");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_66.name,
    type: "slot",
    source: "(82:10) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (83:10) <SecondaryText>


function create_default_slot_65(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A beautiful phone with good specs.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A beautiful phone with good specs.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_65.name,
    type: "slot",
    source: "(83:10) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (80:8) <Text>


function create_default_slot_64(ctx) {
  var t0;
  var t1;
  var current;
  var primarytext = new PrimaryText({
    props: {
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var secondarytext0 = new SecondaryText({
    props: {
      $$slots: {
        default: [create_default_slot_66]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var secondarytext1 = new SecondaryText({
    props: {
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(primarytext.$$.fragment);
      t0 = space();
      create_component(secondarytext0.$$.fragment);
      t1 = space();
      create_component(secondarytext1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(secondarytext0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(secondarytext1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(secondarytext0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(secondarytext1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        secondarytext0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext0.$set(secondarytext0_changes);
      var secondarytext1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        secondarytext1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext1.$set(secondarytext1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext0.$$.fragment, local);
      transition_in(secondarytext1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext0.$$.fragment, local);
      transition_out(secondarytext1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(secondarytext0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(secondarytext1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_64.name,
    type: "slot",
    source: "(80:8) <Text>",
    ctx: ctx
  });
  return block;
} // (79:6) <Item>


function create_default_slot_63(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_64]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_63.name,
    type: "slot",
    source: "(79:6) <Item>",
    ctx: ctx
  });
  return block;
} // (88:10) <PrimaryText>


function create_default_slot_62(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Addition Phone");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Addition Phone");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_62.name,
    type: "slot",
    source: "(88:10) <PrimaryText>",
    ctx: ctx
  });
  return block;
} // (89:10) <SecondaryText>


function create_default_slot_61(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("$700");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "$700");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_61.name,
    type: "slot",
    source: "(89:10) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (90:10) <SecondaryText>


function create_default_slot_60(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Pretty much the same phone, but a different brand name and OS.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Pretty much the same phone, but a different brand name and OS.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_60.name,
    type: "slot",
    source: "(90:10) <SecondaryText>",
    ctx: ctx
  });
  return block;
} // (87:8) <Text>


function create_default_slot_59(ctx) {
  var t0;
  var t1;
  var current;
  var primarytext = new PrimaryText({
    props: {
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var secondarytext0 = new SecondaryText({
    props: {
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var secondarytext1 = new SecondaryText({
    props: {
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(primarytext.$$.fragment);
      t0 = space();
      create_component(secondarytext0.$$.fragment);
      t1 = space();
      create_component(secondarytext1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(primarytext.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(secondarytext0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(secondarytext1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(primarytext, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(secondarytext0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(secondarytext1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var primarytext_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        primarytext_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      primarytext.$set(primarytext_changes);
      var secondarytext0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        secondarytext0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext0.$set(secondarytext0_changes);
      var secondarytext1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        secondarytext1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      secondarytext1.$set(secondarytext1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(primarytext.$$.fragment, local);
      transition_in(secondarytext0.$$.fragment, local);
      transition_in(secondarytext1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(primarytext.$$.fragment, local);
      transition_out(secondarytext0.$$.fragment, local);
      transition_out(secondarytext1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(primarytext, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(secondarytext0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(secondarytext1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_59.name,
    type: "slot",
    source: "(87:8) <Text>",
    ctx: ctx
  });
  return block;
} // (86:6) <Item>


function create_default_slot_58(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_58.name,
    type: "slot",
    source: "(86:6) <Item>",
    ctx: ctx
  });
  return block;
} // (78:4) <List class="demo-list" threeLine nonInteractive>


function create_default_slot_57(ctx) {
  var t;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t = space();
      create_component(item1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(item1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(item1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_57.name,
    type: "slot",
    source: "(78:4) <List class=\\\"demo-list\\\" threeLine nonInteractive>",
    ctx: ctx
  });
  return block;
} // (99:6) <Subheader>


function create_default_slot_56(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Actors");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Actors");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_56.name,
    type: "slot",
    source: "(99:6) <Subheader>",
    ctx: ctx
  });
  return block;
} // (102:10) <Text>


function create_default_slot_55(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Bruce Willis");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Bruce Willis");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_55.name,
    type: "slot",
    source: "(102:10) <Text>",
    ctx: ctx
  });
  return block;
} // (101:8) <Item on:SMUI:action={() => clickedGroup = 'Bruce Willis'}>


function create_default_slot_54(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_54.name,
    type: "slot",
    source: "(101:8) <Item on:SMUI:action={() => clickedGroup = 'Bruce Willis'}>",
    ctx: ctx
  });
  return block;
} // (105:10) <Text>


function create_default_slot_53(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Tom Hanks");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tom Hanks");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_53.name,
    type: "slot",
    source: "(105:10) <Text>",
    ctx: ctx
  });
  return block;
} // (104:8) <Item on:SMUI:action={() => clickedGroup = 'Tom Hanks'}>


function create_default_slot_52(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_53]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_52.name,
    type: "slot",
    source: "(104:8) <Item on:SMUI:action={() => clickedGroup = 'Tom Hanks'}>",
    ctx: ctx
  });
  return block;
} // (108:10) <Text>


function create_default_slot_51(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Jack Nicholson");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Jack Nicholson");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(108:10) <Text>",
    ctx: ctx
  });
  return block;
} // (107:8) <Item on:SMUI:action={() => clickedGroup = 'Jack Nicholson'}>


function create_default_slot_50(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(107:8) <Item on:SMUI:action={() => clickedGroup = 'Jack Nicholson'}>",
    ctx: ctx
  });
  return block;
} // (111:10) <Text>


function create_default_slot_49(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Leonardo DiCaprio");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Leonardo DiCaprio");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(111:10) <Text>",
    ctx: ctx
  });
  return block;
} // (110:8) <Item on:SMUI:action={() => clickedGroup = 'Leonardo DiCaprio'}>


function create_default_slot_48(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(110:8) <Item on:SMUI:action={() => clickedGroup = 'Leonardo DiCaprio'}>",
    ctx: ctx
  });
  return block;
} // (114:10) <Text>


function create_default_slot_47(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Matt Damon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Matt Damon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(114:10) <Text>",
    ctx: ctx
  });
  return block;
} // (113:8) <Item on:SMUI:action={() => clickedGroup = 'Matt Damon'}>


function create_default_slot_46(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(113:8) <Item on:SMUI:action={() => clickedGroup = 'Matt Damon'}>",
    ctx: ctx
  });
  return block;
} // (100:6) <List class="demo-list">


function create_default_slot_45(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler_9*/
  ctx[18]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_10*/
  ctx[19]);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_11*/
  ctx[20]);
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action",
  /*SMUI_action_handler_12*/
  ctx[21]);
  var item4 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_46]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("SMUI:action",
  /*SMUI_action_handler_13*/
  ctx[22]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(item3.$$.fragment);
      t3 = space();
      create_component(item4.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item4.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var item4_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item3, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_45.name,
    type: "slot",
    source: "(100:6) <List class=\\\"demo-list\\\">",
    ctx: ctx
  });
  return block;
} // (117:6) <Subheader>


function create_default_slot_44(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Books");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Books");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(117:6) <Subheader>",
    ctx: ctx
  });
  return block;
} // (120:10) <Text>


function create_default_slot_43(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("To Kill a Mockingbird");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "To Kill a Mockingbird");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_43.name,
    type: "slot",
    source: "(120:10) <Text>",
    ctx: ctx
  });
  return block;
} // (119:8) <Item on:SMUI:action={() => clickedGroup = 'To Kill a Mockingbird'}>


function create_default_slot_42(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_42.name,
    type: "slot",
    source: "(119:8) <Item on:SMUI:action={() => clickedGroup = 'To Kill a Mockingbird'}>",
    ctx: ctx
  });
  return block;
} // (123:10) <Text>


function create_default_slot_41(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("The Great Gatsby");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "The Great Gatsby");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_41.name,
    type: "slot",
    source: "(123:10) <Text>",
    ctx: ctx
  });
  return block;
} // (122:8) <Item on:SMUI:action={() => clickedGroup = 'The Great Gatsby'}>


function create_default_slot_40(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(122:8) <Item on:SMUI:action={() => clickedGroup = 'The Great Gatsby'}>",
    ctx: ctx
  });
  return block;
} // (126:10) <Text>


function create_default_slot_39(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("1984");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "1984");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_39.name,
    type: "slot",
    source: "(126:10) <Text>",
    ctx: ctx
  });
  return block;
} // (125:8) <Item on:SMUI:action={() => clickedGroup = '1984'}>


function create_default_slot_38(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(125:8) <Item on:SMUI:action={() => clickedGroup = '1984'}>",
    ctx: ctx
  });
  return block;
} // (129:10) <Text>


function create_default_slot_37(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Catch-22");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Catch-22");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(129:10) <Text>",
    ctx: ctx
  });
  return block;
} // (128:8) <Item on:SMUI:action={() => clickedGroup = 'Catch-22'}>


function create_default_slot_36(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(128:8) <Item on:SMUI:action={() => clickedGroup = 'Catch-22'}>",
    ctx: ctx
  });
  return block;
} // (132:10) <Text>


function create_default_slot_35(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Alice's Adventures in Wonderland");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Alice's Adventures in Wonderland");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(132:10) <Text>",
    ctx: ctx
  });
  return block;
} // (131:8) <Item on:SMUI:action={() => clickedGroup = 'Alice\'s Adventures in Wonderland'}>


function create_default_slot_34(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(131:8) <Item on:SMUI:action={() => clickedGroup = 'Alice\\'s Adventures in Wonderland'}>",
    ctx: ctx
  });
  return block;
} // (118:6) <List class="demo-list">


function create_default_slot_33(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler_14*/
  ctx[23]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_15*/
  ctx[24]);
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_16*/
  ctx[25]);
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_36]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("SMUI:action",
  /*SMUI_action_handler_17*/
  ctx[26]);
  var item4 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("SMUI:action",
  /*SMUI_action_handler_18*/
  ctx[27]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(item3.$$.fragment);
      t3 = space();
      create_component(item4.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item4.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var item4_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        item4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item3, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(118:6) <List class=\\\"demo-list\\\">",
    ctx: ctx
  });
  return block;
} // (98:4) <Group>


function create_default_slot_32(ctx) {
  var t0;
  var t1;
  var t2;
  var current;
  var subheader0 = new Subheader({
    props: {
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list0 = new List({
    props: {
      class: "demo-list",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var subheader1 = new Subheader({
    props: {
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list1 = new List({
    props: {
      class: "demo-list",
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(subheader0.$$.fragment);
      t0 = space();
      create_component(list0.$$.fragment);
      t1 = space();
      create_component(subheader1.$$.fragment);
      t2 = space();
      create_component(list1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(subheader0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(list0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(subheader1.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(list1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(subheader0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(list0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(subheader1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(list1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var subheader0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        subheader0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      subheader0.$set(subheader0_changes);
      var list0_changes = {};

      if (dirty[0] &
      /*clickedGroup*/
      16 | dirty[1] &
      /*$$scope*/
      1024) {
        list0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list0.$set(list0_changes);
      var subheader1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        subheader1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      subheader1.$set(subheader1_changes);
      var list1_changes = {};

      if (dirty[0] &
      /*clickedGroup*/
      16 | dirty[1] &
      /*$$scope*/
      1024) {
        list1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list1.$set(list1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(subheader0.$$.fragment, local);
      transition_in(list0.$$.fragment, local);
      transition_in(subheader1.$$.fragment, local);
      transition_in(list1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(subheader0.$$.fragment, local);
      transition_out(list0.$$.fragment, local);
      transition_out(subheader1.$$.fragment, local);
      transition_out(list1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(subheader0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(list0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(subheader1, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(list1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(98:4) <Group>",
    ctx: ctx
  });
  return block;
} // (144:8) <Graphic>


function create_default_slot_31(ctx) {
  var updating_group;
  var current;

  function radio_group_binding(value) {
    /*radio_group_binding*/
    ctx[28].call(null, value);
  }

  var radio_props = {
    value: "Bruce Willis"
  };

  if (
  /*selectedRadio*/
  ctx[5] !== void 0) {
    radio_props.group =
    /*selectedRadio*/
    ctx[5];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedRadio*/
      32) {
        updating_group = true;
        radio_changes.group =
        /*selectedRadio*/
        ctx[5];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(144:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (147:8) <Label>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Bruce Willis");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Bruce Willis");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(147:8) <Label>",
    ctx: ctx
  });
  return block;
} // (143:6) <Item>


function create_default_slot_29(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(143:6) <Item>",
    ctx: ctx
  });
  return block;
} // (150:8) <Graphic>


function create_default_slot_28(ctx) {
  var updating_group;
  var current;

  function radio_group_binding_1(value) {
    /*radio_group_binding_1*/
    ctx[29].call(null, value);
  }

  var radio_props = {
    value: "Tom Hanks"
  };

  if (
  /*selectedRadio*/
  ctx[5] !== void 0) {
    radio_props.group =
    /*selectedRadio*/
    ctx[5];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding_1);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedRadio*/
      32) {
        updating_group = true;
        radio_changes.group =
        /*selectedRadio*/
        ctx[5];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(150:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (153:8) <Label>


function create_default_slot_27(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Tom Hanks");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tom Hanks");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(153:8) <Label>",
    ctx: ctx
  });
  return block;
} // (149:6) <Item>


function create_default_slot_26(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(149:6) <Item>",
    ctx: ctx
  });
  return block;
} // (156:8) <Graphic>


function create_default_slot_25(ctx) {
  var updating_group;
  var current;

  function radio_group_binding_2(value) {
    /*radio_group_binding_2*/
    ctx[30].call(null, value);
  }

  var radio_props = {
    value: "Jack Nicholson"
  };

  if (
  /*selectedRadio*/
  ctx[5] !== void 0) {
    radio_props.group =
    /*selectedRadio*/
    ctx[5];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding_2);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedRadio*/
      32) {
        updating_group = true;
        radio_changes.group =
        /*selectedRadio*/
        ctx[5];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_25.name,
    type: "slot",
    source: "(156:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (159:8) <Label>


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Jack Nicholson");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Jack Nicholson");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(159:8) <Label>",
    ctx: ctx
  });
  return block;
} // (155:6) <Item>


function create_default_slot_23(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(155:6) <Item>",
    ctx: ctx
  });
  return block;
} // (162:8) <Graphic>


function create_default_slot_22(ctx) {
  var updating_group;
  var current;

  function radio_group_binding_3(value) {
    /*radio_group_binding_3*/
    ctx[31].call(null, value);
  }

  var radio_props = {
    value: "Leonardo DiCaprio"
  };

  if (
  /*selectedRadio*/
  ctx[5] !== void 0) {
    radio_props.group =
    /*selectedRadio*/
    ctx[5];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding_3);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedRadio*/
      32) {
        updating_group = true;
        radio_changes.group =
        /*selectedRadio*/
        ctx[5];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(162:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (165:8) <Label>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Leonardo DiCaprio");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Leonardo DiCaprio");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(165:8) <Label>",
    ctx: ctx
  });
  return block;
} // (161:6) <Item>


function create_default_slot_20(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(161:6) <Item>",
    ctx: ctx
  });
  return block;
} // (168:8) <Graphic>


function create_default_slot_19(ctx) {
  var updating_group;
  var current;

  function radio_group_binding_4(value) {
    /*radio_group_binding_4*/
    ctx[32].call(null, value);
  }

  var radio_props = {
    value: "Matt Damon"
  };

  if (
  /*selectedRadio*/
  ctx[5] !== void 0) {
    radio_props.group =
    /*selectedRadio*/
    ctx[5];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding_4);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedRadio*/
      32) {
        updating_group = true;
        radio_changes.group =
        /*selectedRadio*/
        ctx[5];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(168:8) <Graphic>",
    ctx: ctx
  });
  return block;
} // (171:8) <Label>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Matt Damon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Matt Damon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(171:8) <Label>",
    ctx: ctx
  });
  return block;
} // (167:6) <Item>


function create_default_slot_17(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
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
  var block = {
    c: function create() {
      create_component(graphic.$$.fragment);
      t = space();
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(graphic.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(graphic, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var graphic_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(graphic.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(graphic.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(graphic, detaching);
      if (detaching) detach_dev(t);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(167:6) <Item>",
    ctx: ctx
  });
  return block;
} // (142:4) <List class="demo-list" radiolist>


function create_default_slot_16(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item3 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item4 = new Item({
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
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(item3.$$.fragment);
      t3 = space();
      create_component(item4.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item4.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var item4_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        item4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item3, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(142:4) <List class=\\\"demo-list\\\" radiolist>",
    ctx: ctx
  });
  return block;
} // (182:8) <Label>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Bruce Willis");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Bruce Willis");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(182:8) <Label>",
    ctx: ctx
  });
  return block;
} // (183:8) <Meta>


function create_default_slot_14(ctx) {
  var updating_group;
  var current;

  function checkbox_group_binding(value) {
    /*checkbox_group_binding*/
    ctx[33].call(null, value);
  }

  var checkbox_props = {
    value: "Bruce Willis"
  };

  if (
  /*selectedCheckbox*/
  ctx[6] !== void 0) {
    checkbox_props.group =
    /*selectedCheckbox*/
    ctx[6];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedCheckbox*/
      64) {
        updating_group = true;
        checkbox_changes.group =
        /*selectedCheckbox*/
        ctx[6];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(183:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (181:6) <Item>


function create_default_slot_13(ctx) {
  var t;
  var current;
  var label = new Label({
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
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_14]
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
      t = space();
      create_component(meta.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(meta.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var meta_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        meta_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(181:6) <Item>",
    ctx: ctx
  });
  return block;
} // (188:8) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Tom Hanks");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Tom Hanks");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(188:8) <Label>",
    ctx: ctx
  });
  return block;
} // (189:8) <Meta>


function create_default_slot_11(ctx) {
  var updating_group;
  var current;

  function checkbox_group_binding_1(value) {
    /*checkbox_group_binding_1*/
    ctx[34].call(null, value);
  }

  var checkbox_props = {
    value: "Tom Hanks"
  };

  if (
  /*selectedCheckbox*/
  ctx[6] !== void 0) {
    checkbox_props.group =
    /*selectedCheckbox*/
    ctx[6];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding_1);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedCheckbox*/
      64) {
        updating_group = true;
        checkbox_changes.group =
        /*selectedCheckbox*/
        ctx[6];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(189:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (187:6) <Item>


function create_default_slot_10(ctx) {
  var t;
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
  var meta = new Meta({
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
      create_component(label.$$.fragment);
      t = space();
      create_component(meta.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(meta.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var meta_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        meta_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(187:6) <Item>",
    ctx: ctx
  });
  return block;
} // (194:8) <Label>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Jack Nicholson");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Jack Nicholson");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(194:8) <Label>",
    ctx: ctx
  });
  return block;
} // (195:8) <Meta>


function create_default_slot_8(ctx) {
  var updating_group;
  var current;

  function checkbox_group_binding_2(value) {
    /*checkbox_group_binding_2*/
    ctx[35].call(null, value);
  }

  var checkbox_props = {
    value: "Jack Nicholson"
  };

  if (
  /*selectedCheckbox*/
  ctx[6] !== void 0) {
    checkbox_props.group =
    /*selectedCheckbox*/
    ctx[6];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding_2);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedCheckbox*/
      64) {
        updating_group = true;
        checkbox_changes.group =
        /*selectedCheckbox*/
        ctx[6];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(195:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (193:6) <Item>


function create_default_slot_7(ctx) {
  var t;
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var meta = new Meta({
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
      t = space();
      create_component(meta.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(meta.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var meta_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        meta_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(193:6) <Item>",
    ctx: ctx
  });
  return block;
} // (200:8) <Label>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Leonardo DiCaprio");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Leonardo DiCaprio");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(200:8) <Label>",
    ctx: ctx
  });
  return block;
} // (201:8) <Meta>


function create_default_slot_5(ctx) {
  var updating_group;
  var current;

  function checkbox_group_binding_3(value) {
    /*checkbox_group_binding_3*/
    ctx[36].call(null, value);
  }

  var checkbox_props = {
    value: "Leonardo DiCaprio"
  };

  if (
  /*selectedCheckbox*/
  ctx[6] !== void 0) {
    checkbox_props.group =
    /*selectedCheckbox*/
    ctx[6];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding_3);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedCheckbox*/
      64) {
        updating_group = true;
        checkbox_changes.group =
        /*selectedCheckbox*/
        ctx[6];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(201:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (199:6) <Item>


function create_default_slot_4(ctx) {
  var t;
  var current;
  var label = new Label({
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
  var meta = new Meta({
    props: {
      $$slots: {
        default: [create_default_slot_5]
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
      t = space();
      create_component(meta.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(meta.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var meta_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        meta_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(199:6) <Item>",
    ctx: ctx
  });
  return block;
} // (206:8) <Label>


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Matt Damon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Matt Damon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(206:8) <Label>",
    ctx: ctx
  });
  return block;
} // (207:8) <Meta>


function create_default_slot_2(ctx) {
  var updating_group;
  var current;

  function checkbox_group_binding_4(value) {
    /*checkbox_group_binding_4*/
    ctx[37].call(null, value);
  }

  var checkbox_props = {
    value: "Matt Damon"
  };

  if (
  /*selectedCheckbox*/
  ctx[6] !== void 0) {
    checkbox_props.group =
    /*selectedCheckbox*/
    ctx[6];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "group", checkbox_group_binding_4);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_group && dirty[0] &
      /*selectedCheckbox*/
      64) {
        updating_group = true;
        checkbox_changes.group =
        /*selectedCheckbox*/
        ctx[6];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(207:8) <Meta>",
    ctx: ctx
  });
  return block;
} // (205:6) <Item>


function create_default_slot_1(ctx) {
  var t;
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
  var meta = new Meta({
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
      create_component(label.$$.fragment);
      t = space();
      create_component(meta.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(meta.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(meta, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var meta_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        meta_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      meta.$set(meta_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(meta.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(meta.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(meta, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(205:6) <Item>",
    ctx: ctx
  });
  return block;
} // (180:4) <List class="demo-list" checklist>


function create_default_slot(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
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
  var item1 = new Item({
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
  var item2 = new Item({
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
  var item3 = new Item({
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
  var item4 = new Item({
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
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(item2.$$.fragment);
      t2 = space();
      create_component(item3.$$.fragment);
      t3 = space();
      create_component(item4.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(item4.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(item2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(item4, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var item4_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        item4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item4.$set(item4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(item2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item3, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(item4, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(180:4) <List class=\\\"demo-list\\\" checklist>",
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
  var t4;
  var pre0;
  var t5;
  var t6;
  var t7;
  var div1;
  var t8;
  var t9;
  var pre1;
  var t10;
  var t11;
  var t12;
  var div2;
  var t13;
  var t14;
  var div3;
  var t15;
  var updating_selectedIndex;
  var t16;
  var pre2;
  var t17;
  var t18;
  var t19;
  var t20;
  var t21;
  var div4;
  var t22;
  var t23;
  var div5;
  var t24;
  var t25;
  var pre3;
  var t26;
  var t27;
  var t28;
  var div6;
  var t29;
  var t30;
  var pre4;
  var t31;
  var t32;
  var t33;
  var div7;
  var t34;
  var t35;
  var pre5;
  var t36;
  var t37_value =
  /*selectedCheckbox*/
  ctx[6].join(", ") + "";
  var t37;
  var current;
  var list0 = new List({
    props: {
      class: "demo-list",
      $$slots: {
        default: [create_default_slot_96]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list1 = new List({
    props: {
      class: "demo-list",
      dense: true,
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list2 = new List({
    props: {
      class: "demo-list",
      nonInteractive: true,
      $$slots: {
        default: [create_default_slot_74]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function list3_selectedIndex_binding(value) {
    /*list3_selectedIndex_binding*/
    ctx[17].call(null, value);
  }

  var list3_props = {
    class: "demo-list",
    twoLine: true,
    avatarList: true,
    singleSelection: true,
    $$slots: {
      default: [create_default_slot_68]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*selectionIndex*/
  ctx[3] !== void 0) {
    list3_props.selectedIndex =
    /*selectionIndex*/
    ctx[3];
  }

  var list3 = new List({
    props: list3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(list3, "selectedIndex", list3_selectedIndex_binding);
  });
  var list4 = new List({
    props: {
      class: "demo-list",
      threeLine: true,
      nonInteractive: true,
      $$slots: {
        default: [create_default_slot_57]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group = new Group({
    props: {
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list5 = new List({
    props: {
      class: "demo-list",
      radiolist: true,
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var list6 = new List({
    props: {
      class: "demo-list",
      checklist: true,
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
      t1 = text("Lists");
      t2 = space();
      div0 = element("div");
      t3 = text("A simple list:\n    ");
      create_component(list0.$$.fragment);
      t4 = space();
      pre0 = element("pre");
      t5 = text("Clicked: ");
      t6 = text(
      /*clickedSimple*/
      ctx[0]);
      t7 = space();
      div1 = element("div");
      t8 = text("A dense list with graphics:\n    ");
      create_component(list1.$$.fragment);
      t9 = space();
      pre1 = element("pre");
      t10 = text("Clicked: ");
      t11 = text(
      /*clickedDense*/
      ctx[1]);
      t12 = space();
      div2 = element("div");
      t13 = text("A non-interactive list with activated item:\n    ");
      create_component(list2.$$.fragment);
      t14 = space();
      div3 = element("div");
      t15 = text("A two-line single selection list with avatars, disabled item, and meta:\n    ");
      create_component(list3.$$.fragment);
      t16 = space();
      pre2 = element("pre");
      t17 = text("Selected: ");
      t18 = text(
      /*selectionTwoLine*/
      ctx[2]);
      t19 = text(", value of selectedIndex: ");
      t20 = text(
      /*selectionIndex*/
      ctx[3]);
      t21 = space();
      div4 = element("div");
      t22 = text("A three-line list:\n    ");
      create_component(list4.$$.fragment);
      t23 = space();
      div5 = element("div");
      t24 = text("A list group:\n    ");
      create_component(group.$$.fragment);
      t25 = space();
      pre3 = element("pre");
      t26 = text("Clicked: ");
      t27 = text(
      /*clickedGroup*/
      ctx[4]);
      t28 = space();
      div6 = element("div");
      t29 = text("A radio list:\n    ");
      create_component(list5.$$.fragment);
      t30 = space();
      pre4 = element("pre");
      t31 = text("Selected: ");
      t32 = text(
      /*selectedRadio*/
      ctx[5]);
      t33 = space();
      div7 = element("div");
      t34 = text("A check list with trailing checkboxes:\n    ");
      create_component(list6.$$.fragment);
      t35 = space();
      pre5 = element("pre");
      t36 = text("Selected: ");
      t37 = text(t37_value);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Lists");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "A simple list:\n    ");
      claim_component(list0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t5 = claim_text(pre0_nodes, "Clicked: ");
      t6 = claim_text(pre0_nodes,
      /*clickedSimple*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t8 = claim_text(div1_nodes, "A dense list with graphics:\n    ");
      claim_component(list1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t10 = claim_text(pre1_nodes, "Clicked: ");
      t11 = claim_text(pre1_nodes,
      /*clickedDense*/
      ctx[1]);
      pre1_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "A non-interactive list with activated item:\n    ");
      claim_component(list2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t15 = claim_text(div3_nodes, "A two-line single selection list with avatars, disabled item, and meta:\n    ");
      claim_component(list3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t17 = claim_text(pre2_nodes, "Selected: ");
      t18 = claim_text(pre2_nodes,
      /*selectionTwoLine*/
      ctx[2]);
      t19 = claim_text(pre2_nodes, ", value of selectedIndex: ");
      t20 = claim_text(pre2_nodes,
      /*selectionIndex*/
      ctx[3]);
      pre2_nodes.forEach(detach_dev);
      t21 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t22 = claim_text(div4_nodes, "A three-line list:\n    ");
      claim_component(list4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t23 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t24 = claim_text(div5_nodes, "A list group:\n    ");
      claim_component(group.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t25 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre3_nodes = children(pre3);
      t26 = claim_text(pre3_nodes, "Clicked: ");
      t27 = claim_text(pre3_nodes,
      /*clickedGroup*/
      ctx[4]);
      pre3_nodes.forEach(detach_dev);
      t28 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t29 = claim_text(div6_nodes, "A radio list:\n    ");
      claim_component(list5.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t30 = claim_space(section_nodes);
      pre4 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre4_nodes = children(pre4);
      t31 = claim_text(pre4_nodes, "Selected: ");
      t32 = claim_text(pre4_nodes,
      /*selectedRadio*/
      ctx[5]);
      pre4_nodes.forEach(detach_dev);
      t33 = claim_space(section_nodes);
      div7 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      t34 = claim_text(div7_nodes, "A check list with trailing checkboxes:\n    ");
      claim_component(list6.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      t35 = claim_space(section_nodes);
      pre5 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre5_nodes = children(pre5);
      t36 = claim_text(pre5_nodes, "Selected: ");
      t37 = claim_text(pre5_nodes, t37_value);
      pre5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Lists - SMUI";
      attr_dev(h2, "class", "svelte-pr1nc6");
      add_location(h2, file, 5, 2, 72);
      attr_dev(div0, "class", "svelte-pr1nc6");
      add_location(div0, file, 7, 2, 90);
      attr_dev(pre0, "class", "status svelte-pr1nc6");
      add_location(pre0, file, 18, 2, 524);
      attr_dev(div1, "class", "svelte-pr1nc6");
      add_location(div1, file, 20, 2, 578);
      attr_dev(pre1, "class", "status svelte-pr1nc6");
      add_location(pre1, file, 43, 2, 1321);
      attr_dev(div2, "class", "svelte-pr1nc6");
      add_location(div2, file, 45, 2, 1374);
      attr_dev(div3, "class", "svelte-pr1nc6");
      add_location(div3, file, 57, 2, 1766);
      attr_dev(pre2, "class", "status svelte-pr1nc6");
      add_location(pre2, file, 73, 2, 2533);
      attr_dev(div4, "class", "svelte-pr1nc6");
      add_location(div4, file, 75, 2, 2633);
      attr_dev(div5, "class", "svelte-pr1nc6");
      add_location(div5, file, 95, 2, 3233);
      attr_dev(pre3, "class", "status svelte-pr1nc6");
      add_location(pre3, file, 137, 2, 4702);
      attr_dev(div6, "class", "svelte-pr1nc6");
      add_location(div6, file, 139, 2, 4755);
      attr_dev(pre4, "class", "status svelte-pr1nc6");
      add_location(pre4, file, 175, 2, 5686);
      attr_dev(div7, "class", "svelte-pr1nc6");
      add_location(div7, file, 177, 2, 5741);
      attr_dev(pre5, "class", "status svelte-pr1nc6");
      add_location(pre5, file, 213, 2, 6697);
      attr_dev(section, "class", "svelte-pr1nc6");
      add_location(section, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      append_dev(div0, t3);
      mount_component(list0, div0, null);
      append_dev(section, t4);
      append_dev(section, pre0);
      append_dev(pre0, t5);
      append_dev(pre0, t6);
      append_dev(section, t7);
      append_dev(section, div1);
      append_dev(div1, t8);
      mount_component(list1, div1, null);
      append_dev(section, t9);
      append_dev(section, pre1);
      append_dev(pre1, t10);
      append_dev(pre1, t11);
      append_dev(section, t12);
      append_dev(section, div2);
      append_dev(div2, t13);
      mount_component(list2, div2, null);
      append_dev(section, t14);
      append_dev(section, div3);
      append_dev(div3, t15);
      mount_component(list3, div3, null);
      append_dev(section, t16);
      append_dev(section, pre2);
      append_dev(pre2, t17);
      append_dev(pre2, t18);
      append_dev(pre2, t19);
      append_dev(pre2, t20);
      append_dev(section, t21);
      append_dev(section, div4);
      append_dev(div4, t22);
      mount_component(list4, div4, null);
      append_dev(section, t23);
      append_dev(section, div5);
      append_dev(div5, t24);
      mount_component(group, div5, null);
      append_dev(section, t25);
      append_dev(section, pre3);
      append_dev(pre3, t26);
      append_dev(pre3, t27);
      append_dev(section, t28);
      append_dev(section, div6);
      append_dev(div6, t29);
      mount_component(list5, div6, null);
      append_dev(section, t30);
      append_dev(section, pre4);
      append_dev(pre4, t31);
      append_dev(pre4, t32);
      append_dev(section, t33);
      append_dev(section, div7);
      append_dev(div7, t34);
      mount_component(list6, div7, null);
      append_dev(section, t35);
      append_dev(section, pre5);
      append_dev(pre5, t36);
      append_dev(pre5, t37);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list0_changes = {};

      if (dirty[0] &
      /*clickedSimple*/
      1 | dirty[1] &
      /*$$scope*/
      1024) {
        list0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list0.$set(list0_changes);
      if (!current || dirty[0] &
      /*clickedSimple*/
      1) set_data_dev(t6,
      /*clickedSimple*/
      ctx[0]);
      var list1_changes = {};

      if (dirty[0] &
      /*clickedDense*/
      2 | dirty[1] &
      /*$$scope*/
      1024) {
        list1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list1.$set(list1_changes);
      if (!current || dirty[0] &
      /*clickedDense*/
      2) set_data_dev(t11,
      /*clickedDense*/
      ctx[1]);
      var list2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        list2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list2.$set(list2_changes);
      var list3_changes = {};

      if (dirty[0] &
      /*selectionTwoLine*/
      4 | dirty[1] &
      /*$$scope*/
      1024) {
        list3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_selectedIndex && dirty[0] &
      /*selectionIndex*/
      8) {
        updating_selectedIndex = true;
        list3_changes.selectedIndex =
        /*selectionIndex*/
        ctx[3];
        add_flush_callback(function () {
          return updating_selectedIndex = false;
        });
      }

      list3.$set(list3_changes);
      if (!current || dirty[0] &
      /*selectionTwoLine*/
      4) set_data_dev(t18,
      /*selectionTwoLine*/
      ctx[2]);
      if (!current || dirty[0] &
      /*selectionIndex*/
      8) set_data_dev(t20,
      /*selectionIndex*/
      ctx[3]);
      var list4_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1024) {
        list4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list4.$set(list4_changes);
      var group_changes = {};

      if (dirty[0] &
      /*clickedGroup*/
      16 | dirty[1] &
      /*$$scope*/
      1024) {
        group_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group.$set(group_changes);
      if (!current || dirty[0] &
      /*clickedGroup*/
      16) set_data_dev(t27,
      /*clickedGroup*/
      ctx[4]);
      var list5_changes = {};

      if (dirty[0] &
      /*selectedRadio*/
      32 | dirty[1] &
      /*$$scope*/
      1024) {
        list5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list5.$set(list5_changes);
      if (!current || dirty[0] &
      /*selectedRadio*/
      32) set_data_dev(t32,
      /*selectedRadio*/
      ctx[5]);
      var list6_changes = {};

      if (dirty[0] &
      /*selectedCheckbox*/
      64 | dirty[1] &
      /*$$scope*/
      1024) {
        list6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list6.$set(list6_changes);
      if ((!current || dirty[0] &
      /*selectedCheckbox*/
      64) && t37_value !== (t37_value =
      /*selectedCheckbox*/
      ctx[6].join(", ") + "")) set_data_dev(t37, t37_value);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list0.$$.fragment, local);
      transition_in(list1.$$.fragment, local);
      transition_in(list2.$$.fragment, local);
      transition_in(list3.$$.fragment, local);
      transition_in(list4.$$.fragment, local);
      transition_in(group.$$.fragment, local);
      transition_in(list5.$$.fragment, local);
      transition_in(list6.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list0.$$.fragment, local);
      transition_out(list1.$$.fragment, local);
      transition_out(list2.$$.fragment, local);
      transition_out(list3.$$.fragment, local);
      transition_out(list4.$$.fragment, local);
      transition_out(group.$$.fragment, local);
      transition_out(list5.$$.fragment, local);
      transition_out(list6.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(list0);
      destroy_component(list1);
      destroy_component(list2);
      destroy_component(list3);
      destroy_component(list4);
      destroy_component(group);
      destroy_component(list5);
      destroy_component(list6);
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

var func = function func(val) {
  return val.substring(0, 1);
};

function instance($$self, $$props, $$invalidate) {
  var clickedSimple = "nothing yet";
  var clickedDense = "nothing yet";
  var optionsTwoLine = [{
    name: "Bruce Willis",
    description: "Actor",
    disabled: false
  }, {
    name: "Austin Powers",
    description: "Fictional Character",
    disabled: true
  }, {
    name: "Thomas Edison",
    description: "Inventor",
    disabled: false
  }, {
    name: "Stephen Hawking",
    description: "Scientist",
    disabled: false
  }];
  var selectionTwoLine = "Stephen Hawking";
  var selectionIndex = null;
  var clickedGroup = "nothing yet";
  var selectedRadio = "Tom Hanks";
  var selectedCheckbox = ["Tom Hanks"];

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate(0, clickedSimple = "Cut");
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate(0, clickedSimple = "Copy");
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate(0, clickedSimple = "Paste");
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate(0, clickedSimple = "Delete");
  };

  var SMUI_action_handler_4 = function SMUI_action_handler_4() {
    return $$invalidate(1, clickedDense = "Edit");
  };

  var SMUI_action_handler_5 = function SMUI_action_handler_5() {
    return $$invalidate(1, clickedDense = "Send");
  };

  var SMUI_action_handler_6 = function SMUI_action_handler_6() {
    return $$invalidate(1, clickedDense = "Archive");
  };

  var SMUI_action_handler_7 = function SMUI_action_handler_7() {
    return $$invalidate(1, clickedDense = "Delete");
  };

  var SMUI_action_handler_8 = function SMUI_action_handler_8(item) {
    return $$invalidate(2, selectionTwoLine = item.name);
  };

  function list3_selectedIndex_binding(value) {
    selectionIndex = value;
    $$invalidate(3, selectionIndex);
  }

  var SMUI_action_handler_9 = function SMUI_action_handler_9() {
    return $$invalidate(4, clickedGroup = "Bruce Willis");
  };

  var SMUI_action_handler_10 = function SMUI_action_handler_10() {
    return $$invalidate(4, clickedGroup = "Tom Hanks");
  };

  var SMUI_action_handler_11 = function SMUI_action_handler_11() {
    return $$invalidate(4, clickedGroup = "Jack Nicholson");
  };

  var SMUI_action_handler_12 = function SMUI_action_handler_12() {
    return $$invalidate(4, clickedGroup = "Leonardo DiCaprio");
  };

  var SMUI_action_handler_13 = function SMUI_action_handler_13() {
    return $$invalidate(4, clickedGroup = "Matt Damon");
  };

  var SMUI_action_handler_14 = function SMUI_action_handler_14() {
    return $$invalidate(4, clickedGroup = "To Kill a Mockingbird");
  };

  var SMUI_action_handler_15 = function SMUI_action_handler_15() {
    return $$invalidate(4, clickedGroup = "The Great Gatsby");
  };

  var SMUI_action_handler_16 = function SMUI_action_handler_16() {
    return $$invalidate(4, clickedGroup = "1984");
  };

  var SMUI_action_handler_17 = function SMUI_action_handler_17() {
    return $$invalidate(4, clickedGroup = "Catch-22");
  };

  var SMUI_action_handler_18 = function SMUI_action_handler_18() {
    return $$invalidate(4, clickedGroup = "Alice's Adventures in Wonderland");
  };

  function radio_group_binding(value) {
    selectedRadio = value;
    $$invalidate(5, selectedRadio);
  }

  function radio_group_binding_1(value) {
    selectedRadio = value;
    $$invalidate(5, selectedRadio);
  }

  function radio_group_binding_2(value) {
    selectedRadio = value;
    $$invalidate(5, selectedRadio);
  }

  function radio_group_binding_3(value) {
    selectedRadio = value;
    $$invalidate(5, selectedRadio);
  }

  function radio_group_binding_4(value) {
    selectedRadio = value;
    $$invalidate(5, selectedRadio);
  }

  function checkbox_group_binding(value) {
    selectedCheckbox = value;
    $$invalidate(6, selectedCheckbox);
  }

  function checkbox_group_binding_1(value) {
    selectedCheckbox = value;
    $$invalidate(6, selectedCheckbox);
  }

  function checkbox_group_binding_2(value) {
    selectedCheckbox = value;
    $$invalidate(6, selectedCheckbox);
  }

  function checkbox_group_binding_3(value) {
    selectedCheckbox = value;
    $$invalidate(6, selectedCheckbox);
  }

  function checkbox_group_binding_4(value) {
    selectedCheckbox = value;
    $$invalidate(6, selectedCheckbox);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("clickedSimple" in $$props) $$invalidate(0, clickedSimple = $$props.clickedSimple);
    if ("clickedDense" in $$props) $$invalidate(1, clickedDense = $$props.clickedDense);
    if ("optionsTwoLine" in $$props) $$invalidate(7, optionsTwoLine = $$props.optionsTwoLine);
    if ("selectionTwoLine" in $$props) $$invalidate(2, selectionTwoLine = $$props.selectionTwoLine);
    if ("selectionIndex" in $$props) $$invalidate(3, selectionIndex = $$props.selectionIndex);
    if ("clickedGroup" in $$props) $$invalidate(4, clickedGroup = $$props.clickedGroup);
    if ("selectedRadio" in $$props) $$invalidate(5, selectedRadio = $$props.selectedRadio);
    if ("selectedCheckbox" in $$props) $$invalidate(6, selectedCheckbox = $$props.selectedCheckbox);
  };

  return [clickedSimple, clickedDense, selectionTwoLine, selectionIndex, clickedGroup, selectedRadio, selectedCheckbox, optionsTwoLine, SMUI_action_handler, SMUI_action_handler_1, SMUI_action_handler_2, SMUI_action_handler_3, SMUI_action_handler_4, SMUI_action_handler_5, SMUI_action_handler_6, SMUI_action_handler_7, SMUI_action_handler_8, list3_selectedIndex_binding, SMUI_action_handler_9, SMUI_action_handler_10, SMUI_action_handler_11, SMUI_action_handler_12, SMUI_action_handler_13, SMUI_action_handler_14, SMUI_action_handler_15, SMUI_action_handler_16, SMUI_action_handler_17, SMUI_action_handler_18, radio_group_binding, radio_group_binding_1, radio_group_binding_2, radio_group_binding_3, radio_group_binding_4, checkbox_group_binding, checkbox_group_binding_1, checkbox_group_binding_2, checkbox_group_binding_3, checkbox_group_binding_4];
}

var List_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(List_1, _SvelteComponentDev);

  function List_1(options) {
    var _this;

    _classCallCheck(this, List_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List_1).call(this, options));
    if (!document.getElementById("svelte-pr1nc6-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "List_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return List_1;
}(SvelteComponentDev);

export default List_1;
