import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useGlboalStore, _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
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
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "@popperjs/core";
import "@ctrl/tinycolor";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useGlboalStore();
    const route = useRoute();
    route.params;
    const userinfo = ref();
    useHead({
      title: "个人信息"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = userinfo.value) == null ? void 0 : _a.id) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-container" }, _attrs))} data-v-23bf2628><img${ssrRenderAttr("src", userinfo.value.avatar)} alt="用户头像" data-v-23bf2628><div data-v-23bf2628><div data-v-23bf2628><span data-v-23bf2628>账号:${ssrInterpolate(userinfo.value.userId)}</span><span data-v-23bf2628>昵称：${ssrInterpolate(userinfo.value.username)}</span></div><div data-v-23bf2628> 邮箱：${ssrInterpolate(userinfo.value.email)}</div><div data-v-23bf2628> 留言： ${ssrInterpolate(userinfo.value.description)}</div></div></div>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23bf2628"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CfCxNwWA.js.map
