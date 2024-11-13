import { reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useGlboalStore, c as useRouter } from './server.mjs';
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
import 'vue-router';

const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const LoginForm = reactive({
      account: "",
      password: ""
    });
    useGlboalStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form_container" }, _attrs))} data-v-e5297eb5><form data-v-e5297eb5><div class="form_col" data-v-e5297eb5><label for="accout" data-v-e5297eb5><input type="text"${ssrRenderAttr("value", unref(LoginForm).account)} id="accout" placeholder="\u8BF7\u8F93\u5165\u8D26\u53F7\u6216\u8005\u90AE\u7BB1" data-v-e5297eb5></label></div><div class="form_col" data-v-e5297eb5><label for="password" data-v-e5297eb5><input type="password"${ssrRenderAttr("value", unref(LoginForm).password)} name="password" id="password" placeholder="\u8F93\u5165\u5BC6\u7801" data-v-e5297eb5></label></div><div class="form_col submit" data-v-e5297eb5><label for="submit" data-v-e5297eb5><button type="submit" name="submit" data-v-e5297eb5>\u767B\u5F55</button></label></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5297eb5"]]);

export { Login as default };
//# sourceMappingURL=Login-CulfxNIo.mjs.map
