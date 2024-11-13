import { useSSRContext, defineComponent, defineAsyncComponent, shallowRef, ref, mergeProps, unref, createVNode, resolveDynamicComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { u as useHead } from './index-BabADJUJ.mjs';
import { _ as _export_sfc, u as useGlboalStore } from './server.mjs';
import '@unhead/shared';
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
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u767B\u5F55\u4E2D\u5FC3"
    });
    const glboalStore = useGlboalStore();
    console.log(glboalStore);
    const FormLogin = defineAsyncComponent(() => import('./Login-CulfxNIo.mjs'));
    defineAsyncComponent(() => import('./Register-ChTsWoIi.mjs'));
    const componentId = shallowRef(FormLogin);
    const btnText = ref("\u6CE8\u518C");
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

export { login as default };
//# sourceMappingURL=login-Cipfo51g.mjs.map
