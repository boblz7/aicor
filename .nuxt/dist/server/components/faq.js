exports.ids = [4];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f5a09002", content, true, context)
};

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_6c398b44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_6c398b44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_6c398b44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_6c398b44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_6c398b44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p[data-v-6c398b44]{margin:0}.faq-container[data-v-6c398b44]{padding-top:100px}.faq-container .faq-content[data-v-6c398b44]{max-width:1410px;margin:0 auto}.faq-container .faq-content .text[data-v-6c398b44]{text-align:center;margin-bottom:80px}.faq-container .faq-content .faq-items[data-v-6c398b44]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:30px;gap:30px}.faq-container .faq-content .faq-items .item[data-v-6c398b44]{height:auto;padding:30px;border-bottom:1px solid #eaf5ff;overflow:hidden}.faq-container .faq-content .faq-items .item.expanded .item-question[data-v-6c398b44]{padding-bottom:25px}.faq-container .faq-content .faq-items .item .item-question[data-v-6c398b44]{display:flex;align-items:center;justify-content:space-between;transition:all .3s ease-in-out;cursor:pointer}.faq-container .faq-content .faq-items .item .item-question p[data-v-6c398b44]{font-size:18px;color:#0a307c;font-weight:500}.faq-container .faq-content .faq-items .item .item-question>i[data-v-6c398b44]{padding:5px;color:#007cee;background:#eaf5ff;border-radius:50%}.faq-container .faq-content .faq-items .item .item-answer p[data-v-6c398b44]{color:#647588;font-weight:300}@media only screen and (max-width:767px){.faq-container .faq-content .faq-items[data-v-6c398b44]{grid-template-columns:repeat(1,1fr)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq.vue?vue&type=template&id=6c398b44&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"faq-container",attrs:{"id":"faq"}},[_vm._ssrNode("<div class=\"faq-content\" data-v-6c398b44>","</div>",[_vm._ssrNode("<div class=\"text\" data-v-6c398b44><h2 data-v-6c398b44>FAQ</h2> <p data-v-6c398b44>Frequently Asked Questions</p></div> "),_vm._ssrNode("<div class=\"faq-items\" data-v-6c398b44>","</div>",[_vm._ssrNode("<div class=\"faqs-one\" data-v-6c398b44>","</div>",_vm._l((_vm.faqItems1),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,[{ expanded: item.expanded }, 'item']))+" data-v-6c398b44>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,[{ expanded: item.expanded }, 'item-question']))+" data-v-6c398b44>","</div>",[_vm._ssrNode("<p data-v-6c398b44>"+_vm._ssrEscape(_vm._s(item.question))+"</p> "),(item.expanded)?_c('v-icon',[_vm._v("mdi-minus")]):_c('v-icon',[_vm._v("mdi-plus")])],2),_vm._ssrNode(" "),_c('v-expand-transition',[(item.expanded)?_c('div',{staticClass:"item-answer"},[_c('p',[_vm._v(_vm._s(item.answer))])]):_vm._e()])],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"faqs-two\" data-v-6c398b44>","</div>",_vm._l((_vm.faqItems2),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,[{ expanded: item.expanded }, 'item']))+" data-v-6c398b44>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,[{ expanded: item.expanded }, 'item-question']))+" data-v-6c398b44>","</div>",[_vm._ssrNode("<p data-v-6c398b44>"+_vm._ssrEscape(_vm._s(item.question))+"</p> "),(item.expanded)?_c('v-icon',[_vm._v("mdi-minus")]):_c('v-icon',[_vm._v("mdi-plus")])],2),_vm._ssrNode(" "),_c('v-expand-transition',[(item.expanded)?_c('div',{staticClass:"item-answer"},[_c('p',[_vm._v(_vm._s(item.answer))])]):_vm._e()])],2)}),0)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Faq.vue?vue&type=template&id=6c398b44&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Faqvue_type_script_lang_js_ = ({
  data() {
    return {
      faqItems1: [{
        question: 'WHAT IS ELI IDENT?',
        answer: 'ELI IDENT is an Identification-as-a-Service (IaaS) and an Authentication-as-a-Service (Aaas) platform. Available as a mobile phone application.',
        expanded: false
      }, {
        question: 'HOW DOES ELI IDENT WORK?',
        answer: 'An User initiates an identification process via ELI on a business platform, receives an e-mail with instructions, downloads the mobile application from the Appstore or Google Play Store, runs the identification process and after approval a personal ELI ID will be created.',
        expanded: false
      }, {
        question: 'WHICH SERVICES ARE PROVIDED BY ELI IDENT?',
        answer: 'ELI IDENT offers OTP authentication, ID scan verification, KYC video verification. For more information visit: https://eli-ident.io/',
        expanded: false
      }, {
        question: 'CAN ELI IDENT BE INTEGRATED WITH THE EXISTING SYSTEM?',
        answer: 'The integration is done through API in a very seamless process. For more information visit https://eli-ident.io/ or contact our support team.',
        expanded: false
      }, {
        question: 'HOW MANY BROWSERS DOES ELI IDENT SUPPORT?',
        answer: 'ELI IDENT is supported across all browsers (updated to the latest versions).',
        expanded: false
      }, {
        question: "WHY CAN'T I COMPLETE MY IDENTIFICATION PROCESS?",
        answer: 'Most of the verification process fails due to poor internet connection or bad picture quality (for example, too blurry or due to low lighting). Please be in a bright environment, use a phone with a good camera, and make sure you have a fast internet connection. You need to live in one of our supported countries to open an account with us. <br/> We can only accept valid, not damaged national IDs and passports.',
        expanded: false
      }, {
        question: 'WHICH COUNTRIES ARE SUPPORTED BY ELI IDENT?',
        answer: 'All countries which can be chosen in the ELI Ident application. <br /> For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'CAN ELI IDENT BE INTEGRATED WITHIN AN EXISTING SYSTEM?',
        answer: 'Yes, ELI Ident can be integrated in the fist via API integration or SDK integration.',
        expanded: false
      }, {
        question: 'WHICH SERVICES ARE PROVIDED BY ELI IDENT?',
        answer: 'ELI Ident provides Identification-as-a-Service and Authentication-as-a-Service as a full platform. <br /> For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'WHICH DOCUMENTS ARE VERIFIED BY ELI IDENT?',
        answer: 'In the first phase passport and national ID. <br /> For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'HOW MUCH TIME DOES ELI IDENT TAKES TO VERIFY?',
        answer: 'The ELI Ident process takes just a few minutes. <br /> For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'WHAT IS THE VERIFICATION PROCESS?',
        answer: 'For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'WHAT KINDS OF VERIFICATION DOES ELI IDENT PROVIDE?',
        answer: 'ELI IDENT offers OTP authentication, ID scan verification, KYC video verification. <br /> For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'HOW LONG DOES ELI IDENT HOLD INFORMATION FOR?',
        answer: 'ELI IDENT stores user data on secured server infrastructures following all technical and regulative standards.',
        expanded: false
      }, {
        question: 'DOES ELI IDENT HAVE AN API/SDK?',
        answer: 'Yes, both integration methods are provided.',
        expanded: false
      }, {
        question: 'DOES ELI IDENT HAVE AN API/SDK?',
        answer: 'Yes, both integration methods are provided.',
        expanded: false
      }, {
        question: 'DOES ELI IDENT OFFER PRICING PACKAGES?',
        answer: 'For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'WHICH SECTORS/INDUSTRIES DOES ELI IDENT OFFER SERVICES TO?',
        answer: 'For further information visit: www.eli-ident.io .',
        expanded: false
      }, {
        question: 'HOW SECURE IS AICOR BANK APP?',
        answer: 'Your payments and personal information are kept safe, and your security is our priority as we developed comprehensive anti-fraud and AML measurements.',
        expanded: false
      }, {
        question: 'HOW DOES AICOR BANK WORK?',
        answer: 'Send and receive money, link credit cards and bank accounts. Choose from different payment methods and pay conveniently anytime and anywhere. Easily access your account balance and payment history. It’s easy for AICOR BANK holders to send and receive money. You just need an email address or phone number.',
        expanded: false
      }, {
        question: 'HOW TO GET PUSH MESSAGES in my AICOR BANK APP?',
        answer: 'Receive notifications about incoming and outgoing payments in real-time. Respond fast and keep going with your important activities. If you aren’t receiving these messages, first check that notifications are enabled for both your phone and the app. Then try some of our troubleshooting suggestions, depending on your smartphone: For IOS: <br /> Delete the app and restart your smartphone. Download and install the latest version of the app from the Apple App Store and connect your smartphone again. Check whether you’re logged into your AICOR Bank app. Make sure messaging for the app has been activated in the general settings of your smartphone. For android: <br /> Delete the app and restart your smartphone. Download and install the latest version of the app from the Appstore or Google Play Store and connect your smartphone again. Go to your Account settings and activate notification by tapping App settings then Notifications.',
        expanded: false
      }, {
        question: 'HOW TO OPEN MY AICOR BANK ACCOUNT?',
        answer: "You can open an account in the app (on your smartphone) if you: <br /> are at least 18 years old <br /> are a resident of a supported country <br /> own a compatible smartphone <br /> hold a supported ID <br /> don't already have a AICOR account <br /> can verify yourself in one of our supported languages <br /><br /> Sign-up for AICOR Bank account by following these steps: <br /> After entering and confirming your email, you need to enter your personal phone number and verify it by entering the code you received via SMS. Next, you need to prove your identity with our quick verification process where you need to provide your valid ID and go through our liveliness check. After you finish all the steps of the necessary verification process you can use all AICOR Bank app features. If you'd like more information, contact us directly.",
        expanded: false
      }, {
        question: 'HOW CAN I PROTECT MY IDENTITY?',
        answer: 'To protect your personal data, follow our guidelines: <br /> We will never ask you to prove your identity on behalf of other individuals or companies. Only complete the verification process if you want to open an AICOR Bank account for yourself. <br /> As the account owner, only you should create and have access to your login credentials. If you use login credentials that were given to you, these credentials may be used to reach your personal and legal information. <br /> We may ask for certain documents when your transaction is subject to a routine check. Only send valid documentation to verified AICOR email accounts. <br /> We will never ask for your username, password, or PIN codes outside the AICOR Bank app. Never provide this information on an external website or app, even if it looks AICOR related. <br /> Take care to monitor your financial statements. Make sure you recognize every transaction, no matter how small. <br /> If you received a suspicious request from a third party, or think your account may be compromised, please do not hesitate to contact us.',
        expanded: false
      }, {
        question: 'WHAT IS AICOR BANK?',
        answer: 'AICOR BANK is the next-generation digital banking application including several financial and non-financial services like money transfer, money exchange, card payments, customer loyalty programs and its own lifestyle-services platform.',
        expanded: false
      }, {
        question: 'WHAT IS THE AICOR BANK APP?',
        answer: 'AICOR BANK will be available as a mobile application.',
        expanded: false
      }, {
        question: 'WHEN WILL AICOR BANK APP BE AVAILABLE?',
        answer: 'AICOR plans to launch the AICOR BANK APP Beginning of 2022. For updates and more information subscribe for the AICOR Newsletter or follow AICOR on social media.',
        expanded: false
      }, {
        question: 'HOW TO GET STARTED USING AICOR BANK APP AFTER THE LAUNCH?',
        answer: '1.Download AICOR Bank app <br /> Get started with AICOR on your iOS or Android mobile device. You can download our app directly from the Google Play or App Store. <br /> 2.Create account <br /> It takes just a few minutes to sign up and verify your identity. <br /> 3.Pay and get paid <br /> Send and receive money, link credit cards and bank accounts. Choose from different payment methods and pay conveniently anytime and anywhere',
        expanded: false
      }, {
        question: 'ON WHAT DEVICES IS THE AICOR BANK MOBILE APP SUPPORTED?',
        answer: 'AICOR BANK APP will be supported on both Android and IOS mobile devices with the latest system updates. You can download our app directly from the Google Play or App Store.',
        expanded: false
      }, {
        question: 'HOW TO MAKE A PAYMENT TO ANOTHER AICOR USER?',
        answer: 'It’s easy for AICOR VOLET holders to send and receive money. You just need an email address or phone number and you are ready to go.',
        expanded: false
      }, {
        question: 'WHERE CAN I PAY WITH AICOR BANK APP?',
        answer: 'At any platform or business where VISA and Mastercard payments are accepted.',
        expanded: false
      }, {
        question: 'WHAT ARE THE REQUIREMENTS TO USE AICOR BANK APP?',
        answer: 'Being full-aged, neither listed on any Embargo or Sanction List nor listed on any POP list.',
        expanded: false
      }, {
        question: 'HOW SECURE IS AICOR BANK APP?',
        answer: 'AICOR BANK APP follows all required technical standards published by Financial Authorities globally regarding Financial Institutions.',
        expanded: false
      }, {
        question: 'ARE THERE PAYMENT LIMITS WHEN PAYING WITH AICOR BANK APP?',
        answer: 'The Limit overview can be found in the application and on the AICOR website after product launch.',
        expanded: false
      }, {
        question: 'ARE THERE TIME LIMITS WHEN PAYING WITH AICOR BANK APP?',
        answer: 'The User will be notified in the application about such limits.',
        expanded: false
      }, {
        question: 'HOW DO I ADD MONEY TO MY AICOR BANK APP?',
        answer: 'By selecting the “Top-Up”-Option in the application.',
        expanded: false
      }, {
        question: 'WHY DO I NEED TO VERIFY MY IDENTITY?',
        answer: 'Just following instructions in the application.',
        expanded: false
      }, {
        question: 'HOW DO I VERIFY MY IDENTITY?',
        answer: 'The User Identification will be done bei ELI Ident within the application.',
        expanded: false
      }, {
        question: 'WHAT COUNTRIES ARE SUPPORTED?',
        answer: 'All countries supported by ELI Ident. For more information visit: www.eli-ident.io .',
        expanded: false
      }],
      faqItems2: [{
        question: 'WHAT FOREIGN EXCHANGE RATE WILL I GET?',
        answer: 'The Exchange Rate overview can be found in the application and on the AICOR website after product launch.',
        expanded: false
      }, {
        question: 'WILL I BE CHARGED FOR EXCHANGING FOREIGN CURRENCIES?',
        answer: 'Yes, fees will be shown and can be found in the Fee overview in the application and on the AICOR website after product launch.',
        expanded: false
      }, {
        question: 'WHAT FIAT CURRENCIES ARE SUPPORTED FOR HOLDING AND EXCHANGE?',
        answer: 'Only these currencies which are shown in the application.',
        expanded: false
      }, {
        question: 'WHY HAS MY DEPOSIT FAILED?',
        answer: 'That can happen because of several reasons. The actual reason will shown in the application or the User gets instructed to contact the support for further information.',
        expanded: false
      }, {
        question: 'WHY IS MY DEPOSIT STILL PENDING?',
        answer: 'The pending period depends on the funding source.',
        expanded: false
      }, {
        question: 'WHY WAS I CHARGED A FEE FOR MY DEPOSIT?',
        answer: 'Deposit fees are related to the funding source. Exact fees can be found on the fee overview.',
        expanded: false
      }, {
        question: 'RECIPIENT HAS NOT RECEIVED THE MONEY?',
        answer: 'Sometimes money transfers can take up to 3 days or even long in case of cross border payments. If any reason is causing the delay, further instructions will be shown in the application.',
        expanded: false
      }, {
        question: 'I WANT TO CANCEL A TRANSFER, HOW CAN I DO THAT?',
        answer: 'By clicking on the “cancel” Button related to that transaction or by contacting the support. If the money has already left the system, then only a refund is possible.',
        expanded: false
      }, {
        question: 'WHY HAS MY TRANSFER FAILED?',
        answer: 'Typically the reason will be shown in the application or the support has to be contacted.',
        expanded: false
      }, {
        question: 'WHY HAS MY TRANSFER BEEN DECLINED?',
        answer: 'Typically the reason will be shown in the application or the support has to be contacted.',
        expanded: false
      }, {
        question: 'WHY IS MY TRANSFER STILL PENDING?',
        answer: 'Typically the reason will be shown in the application or the support has to be contacted.',
        expanded: false
      }, {
        question: 'WHY WAS I CHARGED A FEE FOR MY TRANSFER?',
        answer: 'Transfer fees are related to the type of transfer (instant or normal). Exact fees can be found on the fee overview, after product launch.',
        expanded: false
      }, {
        question: 'HOW TO REQUEST A PAYMENT WITH AICOR BANK?',
        answer: 'Clicking on the “Transfer” Button in the application and just following further instructions.',
        expanded: false
      }, {
        question: 'HOW TO VIEW YOUR PAYMENT AND TRANSACTION HISTORY?',
        answer: 'Clicking on the “Transfer HIstory” Button in the application and just following further instructions.',
        expanded: false
      }, {
        question: 'HOW TO MAKE A PAYMENT TO ANOTHER AICOR BANK USER?',
        answer: 'Clicking on the “Transfer” Button in the application and just following further instructions.',
        expanded: false
      }, {
        question: 'HOW CAN I ADD A NEW BANK ACCOUNT?',
        answer: 'Clicking on the “Profile” Button in the application and just following further instructions.',
        expanded: false
      }, {
        question: 'CAN I EDIT MY BANK ACCOUNT DETAILS?',
        answer: 'If this bank account is added previously to the User Profile, then just clicking on the “Edit” Button related to that bank account is needed.',
        expanded: false
      }, {
        question: 'HOW DO I PAY A RECIPIENT THAT DOES NOT USE AICOR BANK?',
        answer: 'Clicking on the “Transfer” Button in the application and just following further instructions.',
        expanded: false
      }, {
        question: 'HOW LONG DOES IT TAKE FOR A PAYMENT TO REACH MY RECIPIENT?',
        answer: "The duration of a transfer is related to the type of transfer (instant or normal), the country of the recipient's bank and its technical possibilities. If the instant payment is chosen then the transfer takes usually just a few minutes and in case that the recipient is an AICOR BANK customer then instantly.",
        expanded: false
      }, {
        question: 'IS THERE A FEE FOR MAKING PAYMENTS TO RECIPIENTS WHO ARE NOT AICOR BANK CUSTOMERS?',
        answer: 'Transfer fees are related to the type of transfer (instant or normal). Exact fees can be found on the fee overview, after product launch.',
        expanded: false
      }, {
        question: 'CAN I REVERSE A TRANSACTION?',
        answer: 'An initiated transaction can only be cancelled not reversed.',
        expanded: false
      }, {
        question: 'WHY IS MY ACCOUNT BLOCKED?',
        answer: 'That suspicious behaviour of an User leads to the disabling of its account. If this happens, then the support has to be contacted to possibly enable the account again.',
        expanded: false
      }, {
        question: "HOW CAN I REOPEN MY ACCOUNT AFTER I'VE CANCELED IT?",
        answer: 'Once an account is canceled the User has to pass the account opening process again.',
        expanded: false
      }, {
        question: 'HOW CAN I CANCEL MY ACCOUNT?',
        answer: 'By clicking on “Profile” and selecting Profile Settings. Further instructions will be shown in the application.',
        expanded: false
      }, {
        question: 'WILL MY ACCOUNT CLOSE IF I DO NOT USE IT FOR AN EXTENDED PERIOD OF TIME?',
        answer: 'If no suspicious behaviour is recorded the account stays activated. After passing a year the renevial of the user identification is required.',
        expanded: false
      }, {
        question: 'WHAT ARE THE FEES ASSOCIATED WITH AICOR BANK ACCOUNT?',
        answer: 'The fee overview can be found on in the application and on the AICOR website.',
        expanded: false
      }, {
        question: 'CAN I USE THE SAME EMAIL ADDRESS FOR MORE THAN ONE ACCOUNT?',
        answer: 'No, only one EMail address per User is allowed.',
        expanded: false
      }, {
        question: 'HOW DO I RESET MY PHONE NUMBER?',
        answer: 'By following instructions in the application or contacting the support.',
        expanded: false
      }, {
        question: 'HOW CAN I UPDATE/CHANGE MY ACCOUNT DETAILS?',
        answer: 'In the Profile Settings.',
        expanded: false
      }, {
        question: 'HOW CAN I UPDATE MY NAME?',
        answer: 'In the Profile Settings.',
        expanded: false
      }, {
        question: 'ON WHAT DEVICES IS THE AICOR BANK APP SUPPORTED?',
        answer: 'In the first phase the AICOR BANK APP will be available for IOS and Android Users. For updates subscribe the newsletter or follow AICOR on social media.',
        expanded: false
      }, {
        question: 'IF I WANT TO SIGN IN AS A DIFFERENT USER, HOW CAN I SWITCH ACCOUNTS?',
        answer: 'By logging out of the application, other login information can be entered.',
        expanded: false
      }, {
        question: 'IS THE MOBILE APP AVAILABLE IN MY LANGUAGE?',
        answer: 'The application will be available in the languages which can be chosen in the account opening process.',
        expanded: false
      }, {
        question: 'HOW CAN I SIGN TO MY ACCOUNT IF I FORGOT MY INFORMATION?',
        answer: 'By contacting the support.',
        expanded: false
      }, {
        question: 'WHAT SHOULD I DO IF I HAVE FORGOTTEN MY EMAIL ADDRESS?',
        answer: 'Contacting the support.',
        expanded: false
      }, {
        question: 'HOW DOES AICOR BANK STORES AND USE MY DATA?',
        answer: 'AICOR BANK stores user data on secured server infrastructures following all technical and regulative standards.',
        expanded: false
      }, {
        question: 'CAN AICOR BANK STAFF MONITOR MY ACCOUNT OR CONTROL MY TRANSACTIONS?',
        answer: 'Regarding KYC standards all actions done by an User the Bank has to monitor and calculate a certain risk level of each.',
        expanded: false
      }, {
        question: 'HOW DO I SEE TRANSACTION DETAILS?',
        answer: 'By following instructions in the application.',
        expanded: false
      }, {
        question: 'HOW DO I SEE MY EXCHANGE HISTORY?',
        answer: 'By following instructions in the application.',
        expanded: false
      }]
    };
  },

  methods: {
    handleQuestionClick(item) {
      item.expanded = !item.expanded;
      this.$forceUpdate();
    }

  }
});
// CONCATENATED MODULE: ./components/Faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Faqvue_type_script_lang_js_ = (Faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(7);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js + 1 modules
var VIcon = __webpack_require__(71);

// CONCATENATED MODULE: ./components/Faq.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(150)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c398b44",
  "21fdace2"
  
)

/* harmony default export */ var Faq = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VExpandTransition: transitions["a" /* VExpandTransition */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _util_colorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'colorable',
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        };
      } else if (color) {
        data.class = { ...data.class,
          [color]: true
        };
      }

      return data;
    },

    setTextColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          color: `${color}`,
          'caret-color': `${color}`
        };
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2);
        data.class = { ...data.class,
          [colorName + '--text']: true
        };

        if (colorModifier) {
          data.class['text--' + colorModifier] = true;
        }
      }

      return data;
    }

  }
}));

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This mixin provides `attrs$` and `listeners$` to work around
 * vue bug https://github.com/vuejs/vue/issues/10115
 */

function makeWatcher(property) {
  return function (val, oldVal) {
    for (const attr in oldVal) {
      if (!Object.prototype.hasOwnProperty.call(val, attr)) {
        this.$delete(this.$data[property], attr);
      }
    }

    for (const attr in val) {
      this.$set(this.$data[property], attr, val[attr]);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),

  created() {
    // Work around unwanted re-renders: https://github.com/vuejs/vue/issues/10115
    // Make sure to use `attrs$` instead of `$attrs` (confusing right?)
    this.$watch('$attrs', makeWatcher('attrs$'), {
      immediate: true
    });
    this.$watch('$listeners', makeWatcher('listeners$'), {
      immediate: true
    });
  }

}));

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VIcon/VIcon.sass
var VIcon = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(68);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js

/* harmony default export */ var sizeable = (external_vue_default.a.extend({
  name: 'sizeable',
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean
  },
  computed: {
    medium() {
      return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge);
    },

    sizeableClasses() {
      return {
        'v-size--x-small': this.xSmall,
        'v-size--small': this.small,
        'v-size--default': this.medium,
        'v-size--large': this.large,
        'v-size--x-large': this.xLarge
      };
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
 // Mixins




 // Util

 // Types



var SIZE_MAP;

(function (SIZE_MAP) {
  SIZE_MAP["xSmall"] = "12px";
  SIZE_MAP["small"] = "16px";
  SIZE_MAP["default"] = "24px";
  SIZE_MAP["medium"] = "28px";
  SIZE_MAP["large"] = "36px";
  SIZE_MAP["xLarge"] = "40px";
})(SIZE_MAP || (SIZE_MAP = {}));

function isFontAwesome5(iconType) {
  return ['fas', 'far', 'fal', 'fab', 'fad', 'fak'].some(val => iconType.includes(val));
}

function isSvgPath(icon) {
  return /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(icon) && /[\dz]$/i.test(icon) && icon.length > 4;
}

const VIcon_VIcon = Object(mixins["a" /* default */])(binds_attrs["a" /* default */], colorable["a" /* default */], sizeable, themeable["a" /* default */]
/* @vue/component */
).extend({
  name: 'v-icon',
  props: {
    dense: Boolean,
    disabled: Boolean,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    tag: {
      type: String,
      required: false,
      default: 'i'
    }
  },
  computed: {
    medium() {
      return false;
    },

    hasClickListener() {
      return Boolean(this.listeners$.click || this.listeners$['!click']);
    }

  },
  methods: {
    getIcon() {
      let iconName = '';
      if (this.$slots.default) iconName = this.$slots.default[0].text.trim();
      return Object(helpers["o" /* remapInternalIcon */])(this, iconName);
    },

    getSize() {
      const sizes = {
        xSmall: this.xSmall,
        small: this.small,
        medium: this.medium,
        large: this.large,
        xLarge: this.xLarge
      };
      const explicitSize = Object(helpers["l" /* keys */])(sizes).find(key => sizes[key]);
      return explicitSize && SIZE_MAP[explicitSize] || Object(helpers["d" /* convertToUnit */])(this.size);
    },

    // Component data for both font icon and SVG wrapper span
    getDefaultData() {
      return {
        staticClass: 'v-icon notranslate',
        class: {
          'v-icon--disabled': this.disabled,
          'v-icon--left': this.left,
          'v-icon--link': this.hasClickListener,
          'v-icon--right': this.right,
          'v-icon--dense': this.dense
        },
        attrs: {
          'aria-hidden': !this.hasClickListener,
          disabled: this.hasClickListener && this.disabled,
          type: this.hasClickListener ? 'button' : undefined,
          ...this.attrs$
        },
        on: this.listeners$
      };
    },

    getSvgWrapperData() {
      const fontSize = this.getSize();
      const wrapperData = { ...this.getDefaultData(),
        style: fontSize ? {
          fontSize,
          height: fontSize,
          width: fontSize
        } : undefined
      };
      this.applyColors(wrapperData);
      return wrapperData;
    },

    applyColors(data) {
      data.class = { ...data.class,
        ...this.themeClasses
      };
      this.setTextColor(this.color, data);
    },

    renderFontIcon(icon, h) {
      const newChildren = [];
      const data = this.getDefaultData();
      let iconType = 'material-icons'; // Material Icon delimiter is _
      // https://material.io/icons/

      const delimiterIndex = icon.indexOf('-');
      const isMaterialIcon = delimiterIndex <= -1;

      if (isMaterialIcon) {
        // Material icon uses ligatures.
        newChildren.push(icon);
      } else {
        iconType = icon.slice(0, delimiterIndex);
        if (isFontAwesome5(iconType)) iconType = '';
      }

      data.class[iconType] = true;
      data.class[icon] = !isMaterialIcon;
      const fontSize = this.getSize();
      if (fontSize) data.style = {
        fontSize
      };
      this.applyColors(data);
      return h(this.hasClickListener ? 'button' : this.tag, data, newChildren);
    },

    renderSvgIcon(icon, h) {
      const svgData = {
        class: 'v-icon__svg',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          role: 'img',
          'aria-hidden': true
        }
      };
      const size = this.getSize();

      if (size) {
        svgData.style = {
          fontSize: size,
          height: size,
          width: size
        };
      }

      return h(this.hasClickListener ? 'button' : 'span', this.getSvgWrapperData(), [h('svg', svgData, [h('path', {
        attrs: {
          d: icon
        }
      })])]);
    },

    renderSvgIconComponent(icon, h) {
      const data = {
        class: {
          'v-icon__component': true
        }
      };
      const size = this.getSize();

      if (size) {
        data.style = {
          fontSize: size,
          height: size,
          width: size
        };
      }

      this.applyColors(data);
      const component = icon.component;
      data.props = icon.props;
      data.nativeOn = data.on;
      return h(this.hasClickListener ? 'button' : 'span', this.getSvgWrapperData(), [h(component, data)]);
    }

  },

  render(h) {
    const icon = this.getIcon();

    if (typeof icon === 'string') {
      if (isSvgPath(icon)) {
        return this.renderSvgIcon(icon, h);
      }

      return this.renderFontIcon(icon, h);
    }

    return this.renderSvgIconComponent(icon, h);
  }

});
/* harmony default export */ var components_VIcon_VIcon = __webpack_exports__["a"] = (external_vue_default.a.extend({
  name: 'v-icon',
  $_wrapperFor: VIcon_VIcon,
  functional: true,

  render(h, {
    data,
    children
  }) {
    let iconName = ''; // Support usage of v-text and v-html

    if (data.domProps) {
      iconName = data.domProps.textContent || data.domProps.innerHTML || iconName; // Remove nodes so it doesn't
      // overwrite our changes

      delete data.domProps.textContent;
      delete data.domProps.innerHTML;
    }

    return h(VIcon_VIcon, data, iconName ? [iconName] : children);
  }

}));

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("6b715e77", content, true)

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:\"liga\";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:\"\";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=faq.js.map