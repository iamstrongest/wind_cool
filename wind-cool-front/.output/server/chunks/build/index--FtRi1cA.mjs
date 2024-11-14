import { _ as _export_sfc, a as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import '@popperjs/core';
import '@ctrl/tinycolor';
import 'axios';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-nav-container" }, _attrs))} data-v-ebd97b35><nav data-v-ebd97b35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/user/login"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8DF3\u8F6C\u7528\u6237\u767B\u5F55\u9875\u9762`);
      } else {
        return [
          createTextVNode("\u8DF3\u8F6C\u7528\u6237\u767B\u5F55\u9875\u9762")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/user/help"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8DF3\u8F6C\u5E2E\u52A9\u4E2D\u5FC3`);
      } else {
        return [
          createTextVNode("\u8DF3\u8F6C\u5E2E\u52A9\u4E2D\u5FC3")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/user/1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8DF3\u8F6C\u7528\u62371`);
      } else {
        return [
          createTextVNode("\u8DF3\u8F6C\u7528\u62371")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ebd97b35"]]);

export { index as default };
//# sourceMappingURL=index--FtRi1cA.mjs.map
