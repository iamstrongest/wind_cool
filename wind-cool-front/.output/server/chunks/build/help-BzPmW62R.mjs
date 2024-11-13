import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "help",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { id } = route.params;
    ref(id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dae42431> \u5E2E\u52A9\u4E2D\u5FC3 </div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/help.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const help = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dae42431"]]);

export { help as default };
//# sourceMappingURL=help-BzPmW62R.mjs.map
