import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, u as useGlboalStore } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useGlboalStore();
    const route = useRoute();
    route.params;
    const userinfo = ref();
    useHead({
      title: "\u4E2A\u4EBA\u4FE1\u606F"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = userinfo.value) == null ? void 0 : _a.id) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-container" }, _attrs))} data-v-a122f1a2><img${ssrRenderAttr("src", userinfo.value.avatar)} alt="\u7528\u6237\u5934\u50CF" data-v-a122f1a2><div data-v-a122f1a2><div data-v-a122f1a2><span data-v-a122f1a2>\u8D26\u53F7:${ssrInterpolate(userinfo.value.userId)}</span><span data-v-a122f1a2>\u6635\u79F0\uFF1A${ssrInterpolate(userinfo.value.username)}</span></div><div data-v-a122f1a2> \u90AE\u7BB1\uFF1A${ssrInterpolate(userinfo.value.email)}</div><div data-v-a122f1a2> \u7559\u8A00\uFF1A ${ssrInterpolate(userinfo.value.description)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a122f1a2"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DJHTRrl9.mjs.map
