import { defineComponent, defineAsyncComponent, shallowRef, ref, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import "hookable";
import { u as useHead } from "./index-BabADJUJ.js";
import { u as useGlboalStore, _ as _export_sfc } from "../server.mjs";
import "@unhead/shared";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "vue-router";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "登录中心"
    });
    const glboalStore = useGlboalStore();
    console.log(glboalStore);
    const FormLogin = defineAsyncComponent(() => import("./Login--hUcalO3.js"));
    defineAsyncComponent(() => import("./Register-Cyuv8axQ.js"));
    const componentId = shallowRef(FormLogin);
    const btnText = ref("注册");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login_view" }, _attrs))} data-v-05bea766><button class="toggle" type="button" data-v-05bea766>${ssrInterpolate(unref(btnText))}</button>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(componentId)), null, null), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05bea766"]]);
export {
  login as default
};
//# sourceMappingURL=login-DAViYdJm.js.map
