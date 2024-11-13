import { useTemplateRef, reactive, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, u as useGlboalStore } from "../server.mjs";
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
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    useGlboalStore();
    useTemplateRef("file");
    const registerForm = reactive({
      password: "",
      email: "",
      username: ""
    });
    const base64 = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form_container" }, _attrs))} data-v-7f84d068><form data-v-7f84d068><div class="form_col file" data-v-7f84d068><label for="file" class="flie_label" data-v-7f84d068><span data-v-7f84d068>上传头像: </span><input type="file" name="file" id="file" data-v-7f84d068></label><label for="file" class="flie_label" data-v-7f84d068>`);
      if (unref(base64)) {
        _push(`<img${ssrRenderAttr("src", unref(base64))} alt="预览" data-v-7f84d068>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div><div class="form_col" data-v-7f84d068><label for="username" data-v-7f84d068><input type="text"${ssrRenderAttr("value", unref(registerForm).username)} id="username" name="username" placeholder="输入昵称" data-v-7f84d068></label></div><div class="form_col" data-v-7f84d068><label for="email" data-v-7f84d068><input type="email"${ssrRenderAttr("value", unref(registerForm).email)} id="email" name="email" placeholder="输入邮箱" data-v-7f84d068></label></div><div class="form_col" data-v-7f84d068><label for="password" data-v-7f84d068><input type="password"${ssrRenderAttr("value", unref(registerForm).password)} id="password" name="password" placeholder="输入密码" data-v-7f84d068></label></div><div class="form_col submit" data-v-7f84d068><label for="submit" data-v-7f84d068><button type="submit" name="submit" id="submit" data-v-7f84d068>注册</button></label></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f84d068"]]);
export {
  Register as default
};
//# sourceMappingURL=Register-ChTsWoIi.js.map
