import { _ as _export_sfc, b as __nuxt_component_0 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import '@popperjs/core';
import '@ctrl/tinycolor';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "details",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-562ccfc5><span data-v-562ccfc5>\u8BE6\u60C5\u5217\u8868</span><div data-v-562ccfc5>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const details = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-562ccfc5"]]);

export { details as default };
//# sourceMappingURL=details-B7tIfN1C.mjs.map
