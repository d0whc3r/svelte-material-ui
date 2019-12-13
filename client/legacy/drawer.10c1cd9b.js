import { v as _inherits, w as _classCallCheck, x as _possibleConstructorReturn, y as _getPrototypeOf, i as init, z as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, s as safe_not_equal, M as space, W as text, I as create_component, N as claim_space, g as claim_element, h as children, X as claim_text, j as detach_dev, J as claim_component, O as attr_dev, l as add_location, m as insert_dev, K as mount_component, t as transition_in, u as transition_out, L as destroy_component, $ as set_data_dev, Z as set_style, F as binding_callbacks, H as bind, Q as add_flush_callback } from './index.0812fa32.js';
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
import { D as Drawer, A as AppContent, S as Scrim, C as Content, H as Header, T as Title, a as Subtitle } from './index.d9e04e30.js';
import './H2.5497cc82.js';
import { B as Button } from './index.6bfd94d7.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import './bare.3f24c973.js';
import './Button.238fe4ea.js';
import { L as Label } from './Label.cdd98476.js';
import './Icon.e7ebcf54.js';
import { L as List, T as Text, S as Separator, a as Subheader, G as Graphic } from './index.ec2d92bf.js';
import '@babel/runtime/regenerator';
import { I as Item } from './Item.02b48338.js';
import { H as H6 } from './H6.69d48ea5.js';

var file = "src/routes/demo/drawer.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1b94fsh-style";
  style.textContent = ".drawer-container.svelte-1b94fsh{position:relative;display:flex;height:350px;max-width:600px;border:1px solid rgba(0,0,0,.1);overflow:hidden;z-index:0}.svelte-1b94fsh .mdc-drawer--modal, .mdc-drawer-scrim{position:absolute}.svelte-1b94fsh .app-content{flex:auto;overflow:auto;position:relative;flex-grow:1}.main-content.svelte-1b94fsh{overflow:auto;padding:16px;height:100%;box-sizing:border-box}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZHJhd2VyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5EcmF3ZXJzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkRyYXdlcnM8L2gyPlxuXG4gIDxkaXY+XG4gICAgQSBwZXJtYW5lbnQgZHJhd2VyLlxuXG4gICAgPGRpdiBjbGFzcz1cImRyYXdlci1jb250YWluZXJcIj5cbiAgICAgIDxEcmF3ZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkID0gJ0dyYXkgS2l0dGVucyd9PlxuICAgICAgICAgICAgICA8VGV4dD5HcmF5IEtpdHRlbnM8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQgPSAnQSBTcGFjZSBSb2NrZXQnfT5cbiAgICAgICAgICAgICAgPFRleHQ+QSBTcGFjZSBSb2NrZXQ8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQgPSAnMTAwIFBvdW5kcyBvZiBHcmF2ZWwnfT5cbiAgICAgICAgICAgICAgPFRleHQ+MTAwIFBvdW5kcyBvZiBHcmF2ZWw8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQgPSAnQWxsIG9mIHRoZSBTaHJpbXAnfT5cbiAgICAgICAgICAgICAgPFRleHQ+QWxsIG9mIHRoZSBTaHJpbXA8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQgPSAnQSBQbGFuZXQgd2l0aCBhIE1hbGwnfT5cbiAgICAgICAgICAgICAgPFRleHQ+QSBQbGFuZXQgd2l0aCBhIE1hbGw8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L0RyYXdlcj5cblxuICAgICAgPEFwcENvbnRlbnQgY2xhc3M9XCJhcHAtY29udGVudFwiPlxuICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgIEFwcCBjb250ZW50LlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9BcHBDb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIEEgZGlzbWlzc2libGUgZHJhd2VyIHdpdGggYSBoZWFkZXIgYW5kIGFjdGl2YXRlZCBpdGVtcy5cblxuICAgIDxkaXYgY2xhc3M9XCJkcmF3ZXItY29udGFpbmVyXCI+XG4gICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJkaXNtaXNzaWJsZVwiIGJpbmQ6dGhpcz17bXlEcmF3ZXJ9IGJpbmQ6b3Blbj17bXlEcmF3ZXJPcGVufT5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICA8VGl0bGU+U3VwZXIgRHJhd2VyPC9UaXRsZT5cbiAgICAgICAgICA8U3VidGl0bGU+SXQncyB0aGUgYmVzdCBkcmF3ZXIuPC9TdWJ0aXRsZT5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoJ0dyYXkgS2l0dGVucycpfSBhY3RpdmF0ZWQ9e2FjdGl2ZSA9PT0gJ0dyYXkgS2l0dGVucyd9PlxuICAgICAgICAgICAgICA8VGV4dD5HcmF5IEtpdHRlbnM8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IHNldEFjdGl2ZSgnQSBTcGFjZSBSb2NrZXQnKX0gYWN0aXZhdGVkPXthY3RpdmUgPT09ICdBIFNwYWNlIFJvY2tldCd9PlxuICAgICAgICAgICAgICA8VGV4dD5BIFNwYWNlIFJvY2tldDwvVGV4dD5cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbjpjbGljaz17KCkgPT4gc2V0QWN0aXZlKCcxMDAgUG91bmRzIG9mIEdyYXZlbCcpfSBhY3RpdmF0ZWQ9e2FjdGl2ZSA9PT0gJzEwMCBQb3VuZHMgb2YgR3JhdmVsJ30+XG4gICAgICAgICAgICAgIDxUZXh0PjEwMCBQb3VuZHMgb2YgR3JhdmVsPC9UZXh0PlxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoJ0FsbCBvZiB0aGUgU2hyaW1wJyl9IGFjdGl2YXRlZD17YWN0aXZlID09PSAnQWxsIG9mIHRoZSBTaHJpbXAnfT5cbiAgICAgICAgICAgICAgPFRleHQ+QWxsIG9mIHRoZSBTaHJpbXA8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IHNldEFjdGl2ZSgnQSBQbGFuZXQgd2l0aCBhIE1hbGwnKX0gYWN0aXZhdGVkPXthY3RpdmUgPT09ICdBIFBsYW5ldCB3aXRoIGEgTWFsbCd9PlxuICAgICAgICAgICAgICA8VGV4dD5BIFBsYW5ldCB3aXRoIGEgTWFsbDwvVGV4dD5cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgIDwvRHJhd2VyPlxuXG4gICAgICA8QXBwQ29udGVudCBjbGFzcz1cImFwcC1jb250ZW50XCI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gbXlEcmF3ZXJPcGVuID0gIW15RHJhd2VyT3Blbn0+PExhYmVsPlRvZ2dsZSBEcmF3ZXI8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5BY3RpdmU6IHthY3RpdmV9PC9wcmU+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvQXBwQ29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBBIG1vZGFsIGRyYXdlciB3aXRoIGhlYWRlciwgYWN0aXZhdGVkIGl0ZW1zLCBzdWJoZWFkaW5nLCBpY29ucywgbGlzdCBncm91cHMuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZHJhd2VyLWNvbnRhaW5lclwiPlxuICAgICAgPERyYXdlciB2YXJpYW50PVwibW9kYWxcIiBiaW5kOnRoaXM9e215RHJhd2VyMn0gYmluZDpvcGVuPXtteURyYXdlcjJPcGVufT5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICA8VGl0bGU+U3VwZXIgTWFpbDwvVGl0bGU+XG4gICAgICAgICAgPFN1YnRpdGxlPkl0J3MgdGhlIGJlc3QgZmFrZSBtYWlsIGFwcCBkcmF3ZXIuPC9TdWJ0aXRsZT5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUyKCdJbmJveCcpfSBhY3RpdmF0ZWQ9e2FjdGl2ZTIgPT09ICdJbmJveCd9PlxuICAgICAgICAgICAgICA8R3JhcGhpYyBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+aW5ib3g8L0dyYXBoaWM+XG4gICAgICAgICAgICAgIDxUZXh0PkluYm94PC9UZXh0PlxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUyKCdTdGFyJyl9IGFjdGl2YXRlZD17YWN0aXZlMiA9PT0gJ1N0YXInfT5cbiAgICAgICAgICAgICAgPEdyYXBoaWMgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnN0YXI8L0dyYXBoaWM+XG4gICAgICAgICAgICAgIDxUZXh0PlN0YXI8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb246Y2xpY2s9eygpID0+IHNldEFjdGl2ZTIoJ1NlbnQgTWFpbCcpfSBhY3RpdmF0ZWQ9e2FjdGl2ZTIgPT09ICdTZW50IE1haWwnfT5cbiAgICAgICAgICAgICAgPEdyYXBoaWMgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnNlbmQ8L0dyYXBoaWM+XG4gICAgICAgICAgICAgIDxUZXh0PlNlbnQgTWFpbDwvVGV4dD5cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbjpjbGljaz17KCkgPT4gc2V0QWN0aXZlMignRHJhZnRzJyl9IGFjdGl2YXRlZD17YWN0aXZlMiA9PT0gJ0RyYWZ0cyd9PlxuICAgICAgICAgICAgICA8R3JhcGhpYyBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+ZHJhZnRzPC9HcmFwaGljPlxuICAgICAgICAgICAgICA8VGV4dD5EcmFmdHM8L1RleHQ+XG4gICAgICAgICAgICA8L0l0ZW0+XG5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgbmF2IC8+XG4gICAgICAgICAgICA8U3ViaGVhZGVyIGNvbXBvbmVudD17SDZ9PkxhYmVsczwvU3ViaGVhZGVyPlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUyKCdGYW1pbHknKX0gYWN0aXZhdGVkPXthY3RpdmUyID09PSAnRmFtaWx5J30+XG4gICAgICAgICAgICAgIDxHcmFwaGljIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5ib29rbWFyazwvR3JhcGhpYz5cbiAgICAgICAgICAgICAgPFRleHQ+RmFtaWx5PC9UZXh0PlxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUyKCdGcmllbmRzJyl9IGFjdGl2YXRlZD17YWN0aXZlMiA9PT0gJ0ZyaWVuZHMnfT5cbiAgICAgICAgICAgICAgPEdyYXBoaWMgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmJvb2ttYXJrPC9HcmFwaGljPlxuICAgICAgICAgICAgICA8VGV4dD5GcmllbmRzPC9UZXh0PlxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uOmNsaWNrPXsoKSA9PiBzZXRBY3RpdmUyKCdXb3JrJyl9IGFjdGl2YXRlZD17YWN0aXZlMiA9PT0gJ1dvcmsnfT5cbiAgICAgICAgICAgICAgPEdyYXBoaWMgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmJvb2ttYXJrPC9HcmFwaGljPlxuICAgICAgICAgICAgICA8VGV4dD5Xb3JrPC9UZXh0PlxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9EcmF3ZXI+XG5cbiAgICAgIDxTY3JpbSAvPlxuICAgICAgPEFwcENvbnRlbnQgY2xhc3M9XCJhcHAtY29udGVudFwiPlxuICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IG15RHJhd2VyMk9wZW4gPSAhbXlEcmF3ZXIyT3Blbn0+PExhYmVsPlRvZ2dsZSBEcmF3ZXI8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5BY3RpdmU6IHthY3RpdmUyfTwvcHJlPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDcwMHB4O1wiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgIEFuZCBzb21lIHN0dWZmIGF0IHRoZSBib3R0b20uXG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvQXBwQ29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBEcmF3ZXIsIHtBcHBDb250ZW50LCBDb250ZW50LCBIZWFkZXIsIFRpdGxlLCBTdWJ0aXRsZSwgU2NyaW19IGZyb20gJ0BzbXVpL2RyYXdlcic7XG4gIGltcG9ydCBCdXR0b24sIHtMYWJlbH0gZnJvbSAnQHNtdWkvYnV0dG9uJztcbiAgaW1wb3J0IExpc3QsIHtJdGVtLCBUZXh0LCBHcmFwaGljLCBTZXBhcmF0b3IsIFN1YmhlYWRlcn0gZnJvbSAnQHNtdWkvbGlzdCc7XG4gIGltcG9ydCBINiBmcm9tICdAc211aS9jb21tb24vSDYuc3ZlbHRlJztcblxuICBsZXQgY2xpY2tlZCA9ICdub3RoaW5nIHlldCc7XG4gIGxldCBteURyYXdlcjtcbiAgbGV0IG15RHJhd2VyT3BlbiA9IGZhbHNlO1xuICBsZXQgYWN0aXZlID0gJ0dyYXkgS2l0dGVucyc7XG4gIGxldCBteURyYXdlcjI7XG4gIGxldCBteURyYXdlcjJPcGVuID0gZmFsc2U7XG4gIGxldCBhY3RpdmUyID0gJ0luYm94JztcblxuICBmdW5jdGlvbiBzZXRBY3RpdmUodmFsdWUpIHtcbiAgICBhY3RpdmUgPSB2YWx1ZTtcbiAgICBteURyYXdlck9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFjdGl2ZTIodmFsdWUpIHtcbiAgICBhY3RpdmUyID0gdmFsdWU7XG4gICAgbXlEcmF3ZXIyT3BlbiA9IGZhbHNlO1xuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gICogOmdsb2JhbCgubWRjLWRyYXdlci0tbW9kYWwsIC5tZGMtZHJhd2VyLXNjcmltKSB7XG4gICAgLyogVGhpcyBpcyBub3QgbmVlZGVkIGZvciBhIHBhZ2Utd2lkZSBtb2RhbC4gKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAqIDpnbG9iYWwoLmFwcC1jb250ZW50KSB7XG4gICAgZmxleDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtFLGlCQUFpQixlQUFDLENBQUMsQUFDakIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLElBQUksQ0FDYixNQUFNLENBQUUsS0FBSyxDQUNiLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2hDLFFBQVEsQ0FBRSxNQUFNLENBQ2hCLE9BQU8sQ0FBRSxDQUFDLEFBQ1osQ0FBQyxBQUVELGVBQUMsQ0FBQyxBQUFRLHFDQUFxQyxBQUFFLENBQUMsQUFFaEQsUUFBUSxDQUFFLFFBQVEsQUFDcEIsQ0FBQyxBQUVELGVBQUMsQ0FBQyxBQUFRLFlBQVksQUFBRSxDQUFDLEFBQ3ZCLElBQUksQ0FBRSxJQUFJLENBQ1YsUUFBUSxDQUFFLElBQUksQ0FDZCxRQUFRLENBQUUsUUFBUSxDQUNsQixTQUFTLENBQUUsQ0FBQyxBQUNkLENBQUMsQUFFRCxhQUFhLGVBQUMsQ0FBQyxBQUNiLFFBQVEsQ0FBRSxJQUFJLENBQ2QsT0FBTyxDQUFFLElBQUksQ0FDYixNQUFNLENBQUUsSUFBSSxDQUNaLFVBQVUsQ0FBRSxVQUFVLEFBQ3hCLENBQUMifQ== */";
  append_dev(document.head, style);
} // (16:14) <Text>


function create_default_slot_63(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Gray Kittens");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Gray Kittens");
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
    id: create_default_slot_63.name,
    type: "slot",
    source: "(16:14) <Text>",
    ctx: ctx
  });
  return block;
} // (15:12) <Item href="javascript:void(0)" on:click={() => clicked = 'Gray Kittens'}>


function create_default_slot_62(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_62.name,
    type: "slot",
    source: "(15:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => clicked = 'Gray Kittens'}>",
    ctx: ctx
  });
  return block;
} // (19:14) <Text>


function create_default_slot_61(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A Space Rocket");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A Space Rocket");
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
    source: "(19:14) <Text>",
    ctx: ctx
  });
  return block;
} // (18:12) <Item href="javascript:void(0)" on:click={() => clicked = 'A Space Rocket'}>


function create_default_slot_60(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_60.name,
    type: "slot",
    source: "(18:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => clicked = 'A Space Rocket'}>",
    ctx: ctx
  });
  return block;
} // (22:14) <Text>


function create_default_slot_59(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("100 Pounds of Gravel");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "100 Pounds of Gravel");
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
    id: create_default_slot_59.name,
    type: "slot",
    source: "(22:14) <Text>",
    ctx: ctx
  });
  return block;
} // (21:12) <Item href="javascript:void(0)" on:click={() => clicked = '100 Pounds of Gravel'}>


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
      2) {
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
    source: "(21:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => clicked = '100 Pounds of Gravel'}>",
    ctx: ctx
  });
  return block;
} // (25:14) <Text>


function create_default_slot_57(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("All of the Shrimp");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "All of the Shrimp");
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
    id: create_default_slot_57.name,
    type: "slot",
    source: "(25:14) <Text>",
    ctx: ctx
  });
  return block;
} // (24:12) <Item href="javascript:void(0)" on:click={() => clicked = 'All of the Shrimp'}>


function create_default_slot_56(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_57]
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
      2) {
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
    id: create_default_slot_56.name,
    type: "slot",
    source: "(24:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => clicked = 'All of the Shrimp'}>",
    ctx: ctx
  });
  return block;
} // (28:14) <Text>


function create_default_slot_55(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A Planet with a Mall");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A Planet with a Mall");
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
    source: "(28:14) <Text>",
    ctx: ctx
  });
  return block;
} // (27:12) <Item href="javascript:void(0)" on:click={() => clicked = 'A Planet with a Mall'}>


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
      2) {
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
    source: "(27:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => clicked = 'A Planet with a Mall'}>",
    ctx: ctx
  });
  return block;
} // (14:10) <List>


function create_default_slot_53(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      href: "javascript:void(0)",
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("click",
  /*click_handler*/
  ctx[9]);
  var item1 = new Item({
    props: {
      href: "javascript:void(0)",
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("click",
  /*click_handler_1*/
  ctx[10]);
  var item2 = new Item({
    props: {
      href: "javascript:void(0)",
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("click",
  /*click_handler_2*/
  ctx[11]);
  var item3 = new Item({
    props: {
      href: "javascript:void(0)",
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("click",
  /*click_handler_3*/
  ctx[12]);
  var item4 = new Item({
    props: {
      href: "javascript:void(0)",
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("click",
  /*click_handler_4*/
  ctx[13]);
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
      2) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var item4_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_53.name,
    type: "slot",
    source: "(14:10) <List>",
    ctx: ctx
  });
  return block;
} // (13:8) <Content>


function create_default_slot_52(ctx) {
  var current;
  var list = new List({
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
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      2) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_52.name,
    type: "slot",
    source: "(13:8) <Content>",
    ctx: ctx
  });
  return block;
} // (12:6) <Drawer>


function create_default_slot_51(ctx) {
  var current;
  var content = new Content({
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
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      2) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(12:6) <Drawer>",
    ctx: ctx
  });
  return block;
} // (34:6) <AppContent class="app-content">


function create_default_slot_50(ctx) {
  var main;
  var t0;
  var br;
  var t1;
  var pre;
  var t2;
  var t3;
  var block = {
    c: function create() {
      main = element("main");
      t0 = text("App content.\n          ");
      br = element("br");
      t1 = space();
      pre = element("pre");
      t2 = text("Clicked: ");
      t3 = text(
      /*clicked*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      t0 = claim_text(main_nodes, "App content.\n          ");
      br = claim_element(main_nodes, "BR", {
        class: true
      });
      t1 = claim_space(main_nodes);
      pre = claim_element(main_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t2 = claim_text(pre_nodes, "Clicked: ");
      t3 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(br, "class", "svelte-1b94fsh");
      add_location(br, file, 36, 10, 1153);
      attr_dev(pre, "class", "status svelte-1b94fsh");
      add_location(pre, file, 37, 10, 1170);
      attr_dev(main, "class", "main-content svelte-1b94fsh");
      add_location(main, file, 34, 8, 1092);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, t0);
      append_dev(main, br);
      append_dev(main, t1);
      append_dev(main, pre);
      append_dev(pre, t2);
      append_dev(pre, t3);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*clicked*/
      1) set_data_dev(t3,
      /*clicked*/
      ctx[0]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(34:6) <AppContent class=\\\"app-content\\\">",
    ctx: ctx
  });
  return block;
} // (50:10) <Title>


function create_default_slot_49(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Super Drawer");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Super Drawer");
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
    source: "(50:10) <Title>",
    ctx: ctx
  });
  return block;
} // (51:10) <Subtitle>


function create_default_slot_48(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("It's the best drawer.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "It's the best drawer.");
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
    id: create_default_slot_48.name,
    type: "slot",
    source: "(51:10) <Subtitle>",
    ctx: ctx
  });
  return block;
} // (49:8) <Header>


function create_default_slot_47(ctx) {
  var t;
  var current;
  var title = new Title({
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
  var subtitle = new Subtitle({
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
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t = space();
      create_component(subtitle.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(subtitle.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(subtitle, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var subtitle_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        subtitle_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      subtitle.$set(subtitle_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(subtitle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(subtitle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t);
      destroy_component(subtitle, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(49:8) <Header>",
    ctx: ctx
  });
  return block;
} // (56:14) <Text>


function create_default_slot_46(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Gray Kittens");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Gray Kittens");
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
    id: create_default_slot_46.name,
    type: "slot",
    source: "(56:14) <Text>",
    ctx: ctx
  });
  return block;
} // (55:12) <Item href="javascript:void(0)" on:click={() => setActive('Gray Kittens')} activated={active === 'Gray Kittens'}>


function create_default_slot_45(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_45.name,
    type: "slot",
    source: "(55:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive('Gray Kittens')} activated={active === 'Gray Kittens'}>",
    ctx: ctx
  });
  return block;
} // (59:14) <Text>


function create_default_slot_44(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A Space Rocket");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A Space Rocket");
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
    source: "(59:14) <Text>",
    ctx: ctx
  });
  return block;
} // (58:12) <Item href="javascript:void(0)" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>


function create_default_slot_43(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_43.name,
    type: "slot",
    source: "(58:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>",
    ctx: ctx
  });
  return block;
} // (62:14) <Text>


function create_default_slot_42(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("100 Pounds of Gravel");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "100 Pounds of Gravel");
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
    id: create_default_slot_42.name,
    type: "slot",
    source: "(62:14) <Text>",
    ctx: ctx
  });
  return block;
} // (61:12) <Item href="javascript:void(0)" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>


function create_default_slot_41(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_41.name,
    type: "slot",
    source: "(61:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>",
    ctx: ctx
  });
  return block;
} // (65:14) <Text>


function create_default_slot_40(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("All of the Shrimp");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "All of the Shrimp");
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
    id: create_default_slot_40.name,
    type: "slot",
    source: "(65:14) <Text>",
    ctx: ctx
  });
  return block;
} // (64:12) <Item href="javascript:void(0)" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>


function create_default_slot_39(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_39.name,
    type: "slot",
    source: "(64:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>",
    ctx: ctx
  });
  return block;
} // (68:14) <Text>


function create_default_slot_38(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("A Planet with a Mall");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "A Planet with a Mall");
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
    id: create_default_slot_38.name,
    type: "slot",
    source: "(68:14) <Text>",
    ctx: ctx
  });
  return block;
} // (67:12) <Item href="javascript:void(0)" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>


function create_default_slot_37(ctx) {
  var current;
  var text_1 = new Text({
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
      2) {
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
    id: create_default_slot_37.name,
    type: "slot",
    source: "(67:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>",
    ctx: ctx
  });
  return block;
} // (54:10) <List>


function create_default_slot_36(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var current;
  var item0 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active*/
      ctx[3] === "Gray Kittens",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("click",
  /*click_handler_5*/
  ctx[14]);
  var item1 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active*/
      ctx[3] === "A Space Rocket",
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("click",
  /*click_handler_6*/
  ctx[15]);
  var item2 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active*/
      ctx[3] === "100 Pounds of Gravel",
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("click",
  /*click_handler_7*/
  ctx[16]);
  var item3 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active*/
      ctx[3] === "All of the Shrimp",
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("click",
  /*click_handler_8*/
  ctx[17]);
  var item4 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active*/
      ctx[3] === "A Planet with a Mall",
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("click",
  /*click_handler_9*/
  ctx[18]);
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
      /*active*/
      8) item0_changes.activated =
      /*active*/
      ctx[3] === "Gray Kittens";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};
      if (dirty[0] &
      /*active*/
      8) item1_changes.activated =
      /*active*/
      ctx[3] === "A Space Rocket";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};
      if (dirty[0] &
      /*active*/
      8) item2_changes.activated =
      /*active*/
      ctx[3] === "100 Pounds of Gravel";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};
      if (dirty[0] &
      /*active*/
      8) item3_changes.activated =
      /*active*/
      ctx[3] === "All of the Shrimp";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var item4_changes = {};
      if (dirty[0] &
      /*active*/
      8) item4_changes.activated =
      /*active*/
      ctx[3] === "A Planet with a Mall";

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_36.name,
    type: "slot",
    source: "(54:10) <List>",
    ctx: ctx
  });
  return block;
} // (53:8) <Content>


function create_default_slot_35(ctx) {
  var current;
  var list = new List({
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
  var block = {
    c: function create() {
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*active*/
      8 | dirty[1] &
      /*$$scope*/
      2) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(53:8) <Content>",
    ctx: ctx
  });
  return block;
} // (48:6) <Drawer variant="dismissible" bind:this={myDrawer} bind:open={myDrawerOpen}>


function create_default_slot_34(ctx) {
  var t;
  var current;
  var header = new Header({
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
  var content = new Content({
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
      create_component(header.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(header.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(header, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var header_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        header_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      header.$set(header_changes);
      var content_changes = {};

      if (dirty[0] &
      /*active*/
      8 | dirty[1] &
      /*$$scope*/
      2) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(header.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(header.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(header, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(48:6) <Drawer variant=\\\"dismissible\\\" bind:this={myDrawer} bind:open={myDrawerOpen}>",
    ctx: ctx
  });
  return block;
} // (76:64) <Label>


function create_default_slot_33(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Toggle Drawer");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Toggle Drawer");
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
    id: create_default_slot_33.name,
    type: "slot",
    source: "(76:64) <Label>",
    ctx: ctx
  });
  return block;
} // (76:10) <Button on:click={() => myDrawerOpen = !myDrawerOpen}>


function create_default_slot_32(ctx) {
  var current;
  var label = new Label({
    props: {
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

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_32.name,
    type: "slot",
    source: "(76:10) <Button on:click={() => myDrawerOpen = !myDrawerOpen}>",
    ctx: ctx
  });
  return block;
} // (74:6) <AppContent class="app-content">


function create_default_slot_31(ctx) {
  var main;
  var t0;
  var br;
  var t1;
  var pre;
  var t2;
  var t3;
  var current;
  var button = new Button({
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
  button.$on("click",
  /*click_handler_10*/
  ctx[21]);
  var block = {
    c: function create() {
      main = element("main");
      create_component(button.$$.fragment);
      t0 = space();
      br = element("br");
      t1 = space();
      pre = element("pre");
      t2 = text("Active: ");
      t3 = text(
      /*active*/
      ctx[3]);
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      claim_component(button.$$.fragment, main_nodes);
      t0 = claim_space(main_nodes);
      br = claim_element(main_nodes, "BR", {
        class: true
      });
      t1 = claim_space(main_nodes);
      pre = claim_element(main_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t2 = claim_text(pre_nodes, "Active: ");
      t3 = claim_text(pre_nodes,
      /*active*/
      ctx[3]);
      pre_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(br, "class", "svelte-1b94fsh");
      add_location(br, file, 76, 10, 2860);
      attr_dev(pre, "class", "status svelte-1b94fsh");
      add_location(pre, file, 77, 10, 2877);
      attr_dev(main, "class", "main-content svelte-1b94fsh");
      add_location(main, file, 74, 8, 2720);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      mount_component(button, main, null);
      append_dev(main, t0);
      append_dev(main, br);
      append_dev(main, t1);
      append_dev(main, pre);
      append_dev(pre, t2);
      append_dev(pre, t3);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
      if (!current || dirty[0] &
      /*active*/
      8) set_data_dev(t3,
      /*active*/
      ctx[3]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(74:6) <AppContent class=\\\"app-content\\\">",
    ctx: ctx
  });
  return block;
} // (90:10) <Title>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Super Mail");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Super Mail");
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
    source: "(90:10) <Title>",
    ctx: ctx
  });
  return block;
} // (91:10) <Subtitle>


function create_default_slot_29(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("It's the best fake mail app drawer.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "It's the best fake mail app drawer.");
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
    id: create_default_slot_29.name,
    type: "slot",
    source: "(91:10) <Subtitle>",
    ctx: ctx
  });
  return block;
} // (89:8) <Header>


function create_default_slot_28(ctx) {
  var t;
  var current;
  var title = new Title({
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
  var subtitle = new Subtitle({
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
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t = space();
      create_component(subtitle.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(subtitle.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(subtitle, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var subtitle_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        subtitle_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      subtitle.$set(subtitle_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(subtitle.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(subtitle.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t);
      destroy_component(subtitle, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(89:8) <Header>",
    ctx: ctx
  });
  return block;
} // (96:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_27(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("inbox");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "inbox");
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
    source: "(96:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (97:14) <Text>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Inbox");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Inbox");
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(97:14) <Text>",
    ctx: ctx
  });
  return block;
} // (95:12) <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>


function create_default_slot_25(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_27]
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
        default: [create_default_slot_26]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(95:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>",
    ctx: ctx
  });
  return block;
} // (100:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("star");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "star");
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
    source: "(100:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (101:14) <Text>


function create_default_slot_23(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Star");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Star");
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
    id: create_default_slot_23.name,
    type: "slot",
    source: "(101:14) <Text>",
    ctx: ctx
  });
  return block;
} // (99:12) <Item href="javascript:void(0)" on:click={() => setActive2('Star')} activated={active2 === 'Star'}>


function create_default_slot_22(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_24]
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
        default: [create_default_slot_23]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_22.name,
    type: "slot",
    source: "(99:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Star')} activated={active2 === 'Star'}>",
    ctx: ctx
  });
  return block;
} // (104:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_21(ctx) {
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
    id: create_default_slot_21.name,
    type: "slot",
    source: "(104:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (105:14) <Text>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Sent Mail");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Sent Mail");
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(105:14) <Text>",
    ctx: ctx
  });
  return block;
} // (103:12) <Item href="javascript:void(0)" on:click={() => setActive2('Sent Mail')} activated={active2 === 'Sent Mail'}>


function create_default_slot_19(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_21]
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
        default: [create_default_slot_20]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(103:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Sent Mail')} activated={active2 === 'Sent Mail'}>",
    ctx: ctx
  });
  return block;
} // (108:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("drafts");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "drafts");
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
    source: "(108:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (109:14) <Text>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Drafts");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Drafts");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(109:14) <Text>",
    ctx: ctx
  });
  return block;
} // (107:12) <Item href="javascript:void(0)" on:click={() => setActive2('Drafts')} activated={active2 === 'Drafts'}>


function create_default_slot_16(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_18]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(107:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Drafts')} activated={active2 === 'Drafts'}>",
    ctx: ctx
  });
  return block;
} // (113:12) <Subheader component={H6}>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Labels");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Labels");
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
    source: "(113:12) <Subheader component={H6}>",
    ctx: ctx
  });
  return block;
} // (115:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("bookmark");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "bookmark");
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(115:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (116:14) <Text>


function create_default_slot_13(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Family");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Family");
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
    id: create_default_slot_13.name,
    type: "slot",
    source: "(116:14) <Text>",
    ctx: ctx
  });
  return block;
} // (114:12) <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>


function create_default_slot_12(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_14]
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
        default: [create_default_slot_13]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(114:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>",
    ctx: ctx
  });
  return block;
} // (119:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("bookmark");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "bookmark");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(119:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (120:14) <Text>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Friends");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Friends");
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(120:14) <Text>",
    ctx: ctx
  });
  return block;
} // (118:12) <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>


function create_default_slot_9(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_11]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(118:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>",
    ctx: ctx
  });
  return block;
} // (123:14) <Graphic class="material-icons" aria-hidden="true">


function create_default_slot_8(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("bookmark");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "bookmark");
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(123:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
    ctx: ctx
  });
  return block;
} // (124:14) <Text>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Work");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Work");
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(124:14) <Text>",
    ctx: ctx
  });
  return block;
} // (122:12) <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>


function create_default_slot_6(ctx) {
  var t;
  var current;
  var graphic = new Graphic({
    props: {
      class: "material-icons",
      "aria-hidden": "true",
      $$slots: {
        default: [create_default_slot_8]
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
      2) {
        graphic_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      graphic.$set(graphic_changes);
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(122:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>",
    ctx: ctx
  });
  return block;
} // (94:10) <List>


function create_default_slot_5(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  var t6;
  var t7;
  var current;
  var item0 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Inbox",
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("click",
  /*click_handler_11*/
  ctx[22]);
  var item1 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Star",
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("click",
  /*click_handler_12*/
  ctx[23]);
  var item2 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Sent Mail",
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("click",
  /*click_handler_13*/
  ctx[24]);
  var item3 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Drafts",
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item3.$on("click",
  /*click_handler_14*/
  ctx[25]);
  var separator = new Separator({
    props: {
      nav: true
    },
    $$inline: true
  });
  var subheader = new Subheader({
    props: {
      component: H6,
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var item4 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Family",
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item4.$on("click",
  /*click_handler_15*/
  ctx[26]);
  var item5 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Friends",
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item5.$on("click",
  /*click_handler_16*/
  ctx[27]);
  var item6 = new Item({
    props: {
      href: "javascript:void(0)",
      activated:
      /*active2*/
      ctx[6] === "Work",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item6.$on("click",
  /*click_handler_17*/
  ctx[28]);
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
      create_component(separator.$$.fragment);
      t4 = space();
      create_component(subheader.$$.fragment);
      t5 = space();
      create_component(item4.$$.fragment);
      t6 = space();
      create_component(item5.$$.fragment);
      t7 = space();
      create_component(item6.$$.fragment);
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
      claim_component(separator.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(subheader.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(item4.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(item5.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(item6.$$.fragment, nodes);
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
      mount_component(separator, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(subheader, target, anchor);
      insert_dev(target, t5, anchor);
      mount_component(item4, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(item5, target, anchor);
      insert_dev(target, t7, anchor);
      mount_component(item6, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item0_changes.activated =
      /*active2*/
      ctx[6] === "Inbox";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item1_changes.activated =
      /*active2*/
      ctx[6] === "Star";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item2_changes.activated =
      /*active2*/
      ctx[6] === "Sent Mail";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
      var item3_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item3_changes.activated =
      /*active2*/
      ctx[6] === "Drafts";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item3.$set(item3_changes);
      var subheader_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        subheader_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      subheader.$set(subheader_changes);
      var item4_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item4_changes.activated =
      /*active2*/
      ctx[6] === "Family";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item4.$set(item4_changes);
      var item5_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item5_changes.activated =
      /*active2*/
      ctx[6] === "Friends";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item5.$set(item5_changes);
      var item6_changes = {};
      if (dirty[0] &
      /*active2*/
      64) item6_changes.activated =
      /*active2*/
      ctx[6] === "Work";

      if (dirty[1] &
      /*$$scope*/
      2) {
        item6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item6.$set(item6_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      transition_in(item3.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(subheader.$$.fragment, local);
      transition_in(item4.$$.fragment, local);
      transition_in(item5.$$.fragment, local);
      transition_in(item6.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      transition_out(item3.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(subheader.$$.fragment, local);
      transition_out(item4.$$.fragment, local);
      transition_out(item5.$$.fragment, local);
      transition_out(item6.$$.fragment, local);
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
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(subheader, detaching);
      if (detaching) detach_dev(t5);
      destroy_component(item4, detaching);
      if (detaching) detach_dev(t6);
      destroy_component(item5, detaching);
      if (detaching) detach_dev(t7);
      destroy_component(item6, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(94:10) <List>",
    ctx: ctx
  });
  return block;
} // (93:8) <Content>


function create_default_slot_4(ctx) {
  var current;
  var list = new List({
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
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*active2*/
      64 | dirty[1] &
      /*$$scope*/
      2) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(93:8) <Content>",
    ctx: ctx
  });
  return block;
} // (88:6) <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>


function create_default_slot_3(ctx) {
  var t;
  var current;
  var header = new Header({
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
  var content = new Content({
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
  var block = {
    c: function create() {
      create_component(header.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(header.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(header, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var header_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        header_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      header.$set(header_changes);
      var content_changes = {};

      if (dirty[0] &
      /*active2*/
      64 | dirty[1] &
      /*$$scope*/
      2) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(header.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(header.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(header, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(88:6) <Drawer variant=\\\"modal\\\" bind:this={myDrawer2} bind:open={myDrawer2Open}>",
    ctx: ctx
  });
  return block;
} // (133:66) <Label>


function create_default_slot_2(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Toggle Drawer");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Toggle Drawer");
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
    id: create_default_slot_2.name,
    type: "slot",
    source: "(133:66) <Label>",
    ctx: ctx
  });
  return block;
} // (133:10) <Button on:click={() => myDrawer2Open = !myDrawer2Open}>


function create_default_slot_1(ctx) {
  var current;
  var label = new Label({
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

      if (dirty[1] &
      /*$$scope*/
      2) {
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(133:10) <Button on:click={() => myDrawer2Open = !myDrawer2Open}>",
    ctx: ctx
  });
  return block;
} // (131:6) <AppContent class="app-content">


function create_default_slot(ctx) {
  var main;
  var t0;
  var br;
  var t1;
  var pre;
  var t2;
  var t3;
  var t4;
  var div;
  var t5;
  var t6;
  var current;
  var button = new Button({
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
  button.$on("click",
  /*click_handler_18*/
  ctx[31]);
  var block = {
    c: function create() {
      main = element("main");
      create_component(button.$$.fragment);
      t0 = space();
      br = element("br");
      t1 = space();
      pre = element("pre");
      t2 = text("Active: ");
      t3 = text(
      /*active2*/
      ctx[6]);
      t4 = space();
      div = element("div");
      t5 = text(" ");
      t6 = text("\n          And some stuff at the bottom.");
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      claim_component(button.$$.fragment, main_nodes);
      t0 = claim_space(main_nodes);
      br = claim_element(main_nodes, "BR", {
        class: true
      });
      t1 = claim_space(main_nodes);
      pre = claim_element(main_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t2 = claim_text(pre_nodes, "Active: ");
      t3 = claim_text(pre_nodes,
      /*active2*/
      ctx[6]);
      pre_nodes.forEach(detach_dev);
      t4 = claim_space(main_nodes);
      div = claim_element(main_nodes, "DIV", {
        style: true,
        class: true
      });
      var div_nodes = children(div);
      t5 = claim_text(div_nodes, " ");
      div_nodes.forEach(detach_dev);
      t6 = claim_text(main_nodes, "\n          And some stuff at the bottom.");
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(br, "class", "svelte-1b94fsh");
      add_location(br, file, 133, 10, 5463);
      attr_dev(pre, "class", "status svelte-1b94fsh");
      add_location(pre, file, 134, 10, 5480);
      set_style(div, "height", "700px");
      attr_dev(div, "class", "svelte-1b94fsh");
      add_location(div, file, 135, 10, 5534);
      attr_dev(main, "class", "main-content svelte-1b94fsh");
      add_location(main, file, 131, 8, 5321);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      mount_component(button, main, null);
      append_dev(main, t0);
      append_dev(main, br);
      append_dev(main, t1);
      append_dev(main, pre);
      append_dev(pre, t2);
      append_dev(pre, t3);
      append_dev(main, t4);
      append_dev(main, div);
      append_dev(div, t5);
      append_dev(main, t6);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button_changes = {};

      if (dirty[1] &
      /*$$scope*/
      2) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
      if (!current || dirty[0] &
      /*active2*/
      64) set_data_dev(t3,
      /*active2*/
      ctx[6]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(131:6) <AppContent class=\\\"app-content\\\">",
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
  var div1;
  var t3;
  var div0;
  var t4;
  var t5;
  var div3;
  var t6;
  var div2;
  var updating_open;
  var t7;
  var t8;
  var div5;
  var t9;
  var div4;
  var updating_open_1;
  var t10;
  var t11;
  var current;
  var drawer0 = new Drawer({
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
  var appcontent0 = new AppContent({
    props: {
      class: "app-content",
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function drawer1_open_binding(value) {
    /*drawer1_open_binding*/
    ctx[20].call(null, value);
  }

  var drawer1_props = {
    variant: "dismissible",
    $$slots: {
      default: [create_default_slot_34]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*myDrawerOpen*/
  ctx[2] !== void 0) {
    drawer1_props.open =
    /*myDrawerOpen*/
    ctx[2];
  }

  var drawer1 = new Drawer({
    props: drawer1_props,
    $$inline: true
  });
  /*drawer1_binding*/

  ctx[19](drawer1);
  binding_callbacks.push(function () {
    return bind(drawer1, "open", drawer1_open_binding);
  });
  var appcontent1 = new AppContent({
    props: {
      class: "app-content",
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function drawer2_open_binding(value_1) {
    /*drawer2_open_binding*/
    ctx[30].call(null, value_1);
  }

  var drawer2_props = {
    variant: "modal",
    $$slots: {
      default: [create_default_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*myDrawer2Open*/
  ctx[5] !== void 0) {
    drawer2_props.open =
    /*myDrawer2Open*/
    ctx[5];
  }

  var drawer2 = new Drawer({
    props: drawer2_props,
    $$inline: true
  });
  /*drawer2_binding*/

  ctx[29](drawer2);
  binding_callbacks.push(function () {
    return bind(drawer2, "open", drawer2_open_binding);
  });
  var scrim = new Scrim({
    $$inline: true
  });
  var appcontent2 = new AppContent({
    props: {
      class: "app-content",
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
      t1 = text("Drawers");
      t2 = space();
      div1 = element("div");
      t3 = text("A permanent drawer.\n\n    ");
      div0 = element("div");
      create_component(drawer0.$$.fragment);
      t4 = space();
      create_component(appcontent0.$$.fragment);
      t5 = space();
      div3 = element("div");
      t6 = text("A dismissible drawer with a header and activated items.\n\n    ");
      div2 = element("div");
      create_component(drawer1.$$.fragment);
      t7 = space();
      create_component(appcontent1.$$.fragment);
      t8 = space();
      div5 = element("div");
      t9 = text("A modal drawer with header, activated items, subheading, icons, list groups.\n\n    ");
      div4 = element("div");
      create_component(drawer2.$$.fragment);
      t10 = space();
      create_component(scrim.$$.fragment);
      t11 = space();
      create_component(appcontent2.$$.fragment);
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
      t1 = claim_text(h2_nodes, "Drawers");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "A permanent drawer.\n\n    ");
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(drawer0.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      claim_component(appcontent0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, "A dismissible drawer with a header and activated items.\n\n    ");
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(drawer1.$$.fragment, div2_nodes);
      t7 = claim_space(div2_nodes);
      claim_component(appcontent1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t9 = claim_text(div5_nodes, "A modal drawer with header, activated items, subheading, icons, list groups.\n\n    ");
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(drawer2.$$.fragment, div4_nodes);
      t10 = claim_space(div4_nodes);
      claim_component(scrim.$$.fragment, div4_nodes);
      t11 = claim_space(div4_nodes);
      claim_component(appcontent2.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Drawers - SMUI";
      attr_dev(h2, "class", "svelte-1b94fsh");
      add_location(h2, file, 5, 2, 74);
      attr_dev(div0, "class", "drawer-container svelte-1b94fsh");
      add_location(div0, file, 10, 4, 129);
      attr_dev(div1, "class", "svelte-1b94fsh");
      add_location(div1, file, 7, 2, 94);
      attr_dev(div2, "class", "drawer-container svelte-1b94fsh");
      add_location(div2, file, 46, 4, 1345);
      attr_dev(div3, "class", "svelte-1b94fsh");
      add_location(div3, file, 43, 2, 1274);
      attr_dev(div4, "class", "drawer-container svelte-1b94fsh");
      add_location(div4, file, 86, 4, 3071);
      attr_dev(div5, "class", "svelte-1b94fsh");
      add_location(div5, file, 83, 2, 2979);
      attr_dev(section, "class", "svelte-1b94fsh");
      add_location(section, file, 4, 0, 62);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div1);
      append_dev(div1, t3);
      append_dev(div1, div0);
      mount_component(drawer0, div0, null);
      append_dev(div0, t4);
      mount_component(appcontent0, div0, null);
      append_dev(section, t5);
      append_dev(section, div3);
      append_dev(div3, t6);
      append_dev(div3, div2);
      mount_component(drawer1, div2, null);
      append_dev(div2, t7);
      mount_component(appcontent1, div2, null);
      append_dev(section, t8);
      append_dev(section, div5);
      append_dev(div5, t9);
      append_dev(div5, div4);
      mount_component(drawer2, div4, null);
      append_dev(div4, t10);
      mount_component(scrim, div4, null);
      append_dev(div4, t11);
      mount_component(appcontent2, div4, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var drawer0_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      2) {
        drawer0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      drawer0.$set(drawer0_changes);
      var appcontent0_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      2) {
        appcontent0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      appcontent0.$set(appcontent0_changes);
      var drawer1_changes = {};

      if (dirty[0] &
      /*active*/
      8 | dirty[1] &
      /*$$scope*/
      2) {
        drawer1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_open && dirty[0] &
      /*myDrawerOpen*/
      4) {
        updating_open = true;
        drawer1_changes.open =
        /*myDrawerOpen*/
        ctx[2];
        add_flush_callback(function () {
          return updating_open = false;
        });
      }

      drawer1.$set(drawer1_changes);
      var appcontent1_changes = {};

      if (dirty[0] &
      /*active, myDrawerOpen*/
      12 | dirty[1] &
      /*$$scope*/
      2) {
        appcontent1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      appcontent1.$set(appcontent1_changes);
      var drawer2_changes = {};

      if (dirty[0] &
      /*active2*/
      64 | dirty[1] &
      /*$$scope*/
      2) {
        drawer2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_open_1 && dirty[0] &
      /*myDrawer2Open*/
      32) {
        updating_open_1 = true;
        drawer2_changes.open =
        /*myDrawer2Open*/
        ctx[5];
        add_flush_callback(function () {
          return updating_open_1 = false;
        });
      }

      drawer2.$set(drawer2_changes);
      var appcontent2_changes = {};

      if (dirty[0] &
      /*active2, myDrawer2Open*/
      96 | dirty[1] &
      /*$$scope*/
      2) {
        appcontent2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      appcontent2.$set(appcontent2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(drawer0.$$.fragment, local);
      transition_in(appcontent0.$$.fragment, local);
      transition_in(drawer1.$$.fragment, local);
      transition_in(appcontent1.$$.fragment, local);
      transition_in(drawer2.$$.fragment, local);
      transition_in(scrim.$$.fragment, local);
      transition_in(appcontent2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(drawer0.$$.fragment, local);
      transition_out(appcontent0.$$.fragment, local);
      transition_out(drawer1.$$.fragment, local);
      transition_out(appcontent1.$$.fragment, local);
      transition_out(drawer2.$$.fragment, local);
      transition_out(scrim.$$.fragment, local);
      transition_out(appcontent2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(drawer0);
      destroy_component(appcontent0);
      /*drawer1_binding*/

      ctx[19](null);
      destroy_component(drawer1);
      destroy_component(appcontent1);
      /*drawer2_binding*/

      ctx[29](null);
      destroy_component(drawer2);
      destroy_component(scrim);
      destroy_component(appcontent2);
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
  var clicked = "nothing yet";
  var myDrawer;
  var myDrawerOpen = false;
  var active = "Gray Kittens";
  var myDrawer2;
  var myDrawer2Open = false;
  var active2 = "Inbox";

  function setActive(value) {
    $$invalidate(3, active = value);
    $$invalidate(2, myDrawerOpen = false);
  }

  function setActive2(value) {
    $$invalidate(6, active2 = value);
    $$invalidate(5, myDrawer2Open = false);
  }

  var click_handler = function click_handler() {
    return $$invalidate(0, clicked = "Gray Kittens");
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, clicked = "A Space Rocket");
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, clicked = "100 Pounds of Gravel");
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, clicked = "All of the Shrimp");
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate(0, clicked = "A Planet with a Mall");
  };

  var click_handler_5 = function click_handler_5() {
    return setActive("Gray Kittens");
  };

  var click_handler_6 = function click_handler_6() {
    return setActive("A Space Rocket");
  };

  var click_handler_7 = function click_handler_7() {
    return setActive("100 Pounds of Gravel");
  };

  var click_handler_8 = function click_handler_8() {
    return setActive("All of the Shrimp");
  };

  var click_handler_9 = function click_handler_9() {
    return setActive("A Planet with a Mall");
  };

  function drawer1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(1, myDrawer = $$value);
    });
  }

  function drawer1_open_binding(value) {
    myDrawerOpen = value;
    $$invalidate(2, myDrawerOpen);
  }

  var click_handler_10 = function click_handler_10() {
    return $$invalidate(2, myDrawerOpen = !myDrawerOpen);
  };

  var click_handler_11 = function click_handler_11() {
    return setActive2("Inbox");
  };

  var click_handler_12 = function click_handler_12() {
    return setActive2("Star");
  };

  var click_handler_13 = function click_handler_13() {
    return setActive2("Sent Mail");
  };

  var click_handler_14 = function click_handler_14() {
    return setActive2("Drafts");
  };

  var click_handler_15 = function click_handler_15() {
    return setActive2("Family");
  };

  var click_handler_16 = function click_handler_16() {
    return setActive2("Friends");
  };

  var click_handler_17 = function click_handler_17() {
    return setActive2("Work");
  };

  function drawer2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(4, myDrawer2 = $$value);
    });
  }

  function drawer2_open_binding(value_1) {
    myDrawer2Open = value_1;
    $$invalidate(5, myDrawer2Open);
  }

  var click_handler_18 = function click_handler_18() {
    return $$invalidate(5, myDrawer2Open = !myDrawer2Open);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
    if ("myDrawer" in $$props) $$invalidate(1, myDrawer = $$props.myDrawer);
    if ("myDrawerOpen" in $$props) $$invalidate(2, myDrawerOpen = $$props.myDrawerOpen);
    if ("active" in $$props) $$invalidate(3, active = $$props.active);
    if ("myDrawer2" in $$props) $$invalidate(4, myDrawer2 = $$props.myDrawer2);
    if ("myDrawer2Open" in $$props) $$invalidate(5, myDrawer2Open = $$props.myDrawer2Open);
    if ("active2" in $$props) $$invalidate(6, active2 = $$props.active2);
  };

  return [clicked, myDrawer, myDrawerOpen, active, myDrawer2, myDrawer2Open, active2, setActive, setActive2, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, click_handler_6, click_handler_7, click_handler_8, click_handler_9, drawer1_binding, drawer1_open_binding, click_handler_10, click_handler_11, click_handler_12, click_handler_13, click_handler_14, click_handler_15, click_handler_16, click_handler_17, drawer2_binding, drawer2_open_binding, click_handler_18];
}

var Drawer_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Drawer_1, _SvelteComponentDev);

  function Drawer_1(options) {
    var _this;

    _classCallCheck(this, Drawer_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drawer_1).call(this, options));
    if (!document.getElementById("svelte-1b94fsh-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Drawer_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Drawer_1;
}(SvelteComponentDev);

export default Drawer_1;
