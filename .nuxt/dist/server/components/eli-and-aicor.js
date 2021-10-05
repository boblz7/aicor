exports.ids = [2];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c6fdc196", content, true, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDQuNUgxMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS41IDFMMTMgNC41TDkuNSA4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eli_ident_iphonex_mockup.db553ee.png";

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/landing_page_aicor_bank_iphonex_mockup.cd9d65b.png";

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EliAndAicor_vue_vue_type_style_index_0_id_5cd895b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EliAndAicor_vue_vue_type_style_index_0_id_5cd895b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EliAndAicor_vue_vue_type_style_index_0_id_5cd895b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EliAndAicor_vue_vue_type_style_index_0_id_5cd895b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EliAndAicor_vue_vue_type_style_index_0_id_5cd895b7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(108);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(143);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".eli-and-aicor-container[data-v-5cd895b7]{width:100%;background:#fff;padding:400px 50px 50px}.eli-and-aicor-container .eli-and-aicor-content[data-v-5cd895b7]{max-width:1410px;margin:0 auto;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:343px 500px;background-size:auto}.eli-and-aicor-container .eli-and-aicor-content .item[data-v-5cd895b7]{height:620px;display:grid;grid-template-columns:repeat(2,1fr);align-items:center}.eli-and-aicor-container .eli-and-aicor-content .item.reverse .image-container[data-v-5cd895b7]{order:1}.eli-and-aicor-container .eli-and-aicor-content .item.reverse .text-container[data-v-5cd895b7]{display:flex;flex-direction:column;grid-gap:90px;gap:90px;padding-right:150px;padding-left:0;padding-top:120px}.eli-and-aicor-container .eli-and-aicor-content .item.reverse .text-container .text-content p[data-v-5cd895b7]{margin-bottom:0}.eli-and-aicor-container .eli-and-aicor-content .item>div[data-v-5cd895b7]{flex:1}.eli-and-aicor-container .eli-and-aicor-content .item .image-container[data-v-5cd895b7]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;pointer-events:none}.eli-and-aicor-container .eli-and-aicor-content .item .image-container .v-image[data-v-5cd895b7],.eli-and-aicor-container .eli-and-aicor-content .item .image-container img[data-v-5cd895b7]{position:absolute;width:1100px}.eli-and-aicor-container .eli-and-aicor-content .item .text-container[data-v-5cd895b7]{display:flex;flex-direction:column;grid-gap:50px;gap:50px;padding-left:150px;min-height:400px;z-index:10}.eli-and-aicor-container .eli-and-aicor-content .item .text-container .text-content h2[data-v-5cd895b7]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;position:relative;margin-bottom:20px}.eli-and-aicor-container .eli-and-aicor-content .item .text-container .text-content h2[data-v-5cd895b7]:after{content:\"\";width:50px;height:0;border:1px solid #0a307c;position:absolute;right:-100px}.eli-and-aicor-container .eli-and-aicor-content .item .text-container a span[data-v-5cd895b7]{padding-left:10px}@media only screen and (max-width:1023px){.eli-and-aicor-container[data-v-5cd895b7]{width:100%;background:#fff;padding:400px 50px 50px}.eli-and-aicor-container .eli-and-aicor-content[data-v-5cd895b7]{max-width:1410px;margin:0 auto;background-repeat:no-repeat;background-position:343px 500px;background-size:auto;background-image:none}.eli-and-aicor-container .eli-and-aicor-content .item[data-v-5cd895b7]{grid-template-columns:repeat(1,1fr);height:auto}.eli-and-aicor-container .eli-and-aicor-content .item.reverse .text-container[data-v-5cd895b7]{grid-gap:50px;gap:50px;padding:0}.eli-and-aicor-container .eli-and-aicor-content .item .image-container[data-v-5cd895b7]{display:none}.eli-and-aicor-container .eli-and-aicor-content .item .text-container[data-v-5cd895b7]{padding:0}}@media only screen and (max-width:1023px){.eli-and-aicor-container[data-v-5cd895b7]{padding:400px 20px 50px}.eli-and-aicor-container .eli-and-aicor-content[data-v-5cd895b7]{display:flex;flex-direction:column;grid-gap:50px;gap:50px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUzIiBoZWlnaHQ9IjMwOCIgdmlld0JveD0iMCAwIDU1MyAzMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMSIgZD0iTTU1MSAyOTUuMzk5QzQ4OS45MDkgMzA5LjMxOSAyNzAuNSAzMjIuNSAxOTEgMjQyLjVDMTI2LjI1NyAxNzcuMzUgMTgyLjY3MSAxNDIuODY0IDI0Mi41IDE5NEMyODYuNzA0IDIzMS43ODEgMjkxLjczNyAzMzYuMTYzIDE3NC41MjMgMjg1LjQ1N0M1Ny4zMDgzIDIzNC43NTEgMjcuNSA5OSAxLjUgMiIgc3Ryb2tlPSIjMEEzMDdDIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTAgMTAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EliAndAicor.vue?vue&type=template&id=5cd895b7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"eli-and-aicor-container",attrs:{"id":"eli_and_aicor"}},[_vm._ssrNode("<div class=\"eli-and-aicor-content\" data-v-5cd895b7>","</div>",_vm._l((_vm.items),function(item){return _vm._ssrNode("<div"+(_vm._ssrClass(null,[{ reverse: item.isOrderReversed }, 'item']))+" data-v-5cd895b7>","</div>",[_vm._ssrNode("<div class=\"image-container\" data-v-5cd895b7><img"+(_vm._ssrAttr("src",item.image))+" data-v-5cd895b7></div> "),_vm._ssrNode("<div class=\"text-container\" data-v-5cd895b7>","</div>",[_vm._ssrNode("<div class=\"text-content\" data-v-5cd895b7><h2 data-v-5cd895b7>"+_vm._ssrEscape(_vm._s(item.title))+"</h2> <p data-v-5cd895b7>"+(_vm._s(item.description))+"</p></div> "),_c('router-link',{staticClass:"classic color-white",attrs:{"to":item.link}},[_vm._v("\n          Learn More\n          "),_c('span',[_c('img',{attrs:{"src":__webpack_require__(138),"alt":""}})])])],2)],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EliAndAicor.vue?vue&type=template&id=5cd895b7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EliAndAicor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EliAndAicorvue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        image: __webpack_require__(139),
        title: 'ELI Ident',
        description: 'We offer a quick and secure way of identity verification using our in-house engineered AI models. <br /><br /> ELI Ident provides seamless customer onboarding experience, reduces costs, increase conversion and deters fraudulent attempts.',
        isOrderReversed: false,
        link: '/eli-ident'
      }, {
        image: __webpack_require__(140),
        title: 'AICOR Bank',
        description: 'AICOR has developed a proprietary payment processing infrastructure that will change the way businesses accept a wide variety of payments through a single channel, from start to finish.',
        isOrderReversed: true,
        link: '/aicor-bank'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/EliAndAicor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EliAndAicorvue_type_script_lang_js_ = (EliAndAicorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/EliAndAicor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EliAndAicorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5cd895b7",
  "4744afd5"
  
)

/* harmony default export */ var EliAndAicor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=eli-and-aicor.js.map