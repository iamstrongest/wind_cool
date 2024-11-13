import { defineComponent, ref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
import "destr";
import "klona";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "help",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { id } = route.params;
    ref(id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dae42431> 帮助中心 </div>`);
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
export {
  help as default
};
//# sourceMappingURL=help-BzPmW62R.js.map
