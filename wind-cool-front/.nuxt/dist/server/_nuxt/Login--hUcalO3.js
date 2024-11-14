import { reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, u as useGlboalStore, c as useRouter } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form_container" }, _attrs))} data-v-43e193f9><form data-v-43e193f9><div class="form_col" data-v-43e193f9><label for="account" data-v-43e193f9><input type="text"${ssrRenderAttr("value", unref(LoginForm).account)} id="account" placeholder="请输入账号或者邮箱" data-v-43e193f9></label></div><div class="form_col" data-v-43e193f9><label for="password" data-v-43e193f9><input type="password"${ssrRenderAttr("value", unref(LoginForm).password)} name="password" id="password" placeholder="输入密码" data-v-43e193f9></label></div><div class="form_col submit" data-v-43e193f9><label for="submit" data-v-43e193f9><button type="submit" name="submit" data-v-43e193f9>登录</button></label></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43e193f9"]]);
export {
  Login as default
};
//# sourceMappingURL=Login--hUcalO3.js.map
