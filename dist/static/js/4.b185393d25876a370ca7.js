webpackJsonp([4],{WkrG:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("LOkV"),i={data:function(){return{isLoading:!1,themeList:[],name:""}},computed:{},watch:{},created:function(){document.title="盖洛普优势评测报告"},mounted:function(){this.getList()},methods:{fetchData:function(t){var s=this,a="c/api/get_simple_report?exam_id="+t;e.a.request({url:a}).then(function(t){s.themeList=t.data.themeList,s.name=t.data.childName,console.log(t,"sdsdsdsd")})},getList:function(){var t=this;e.a.request({method:"GET",url:"c/api/query_exam_list"}).then(function(s){var a=s.data.examList[0].id;t.fetchData(a)})}},components:{}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"report"},[a("div",{staticClass:"title_bg"}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("p",{staticClass:"result"},[t._v("盖洛普青少年测评结果查询")]),t._v(" "),a("span",{staticClass:"name"},[a("span",[t._v(t._s(t.name))]),t._v("以下是你独一无二的优势")]),t._v(" "),a("div",{staticClass:"advantage"},[a("p",[t._v("优势证明")]),t._v(" "),t._l(t.themeList,function(s,e){return a("div",{key:e,staticClass:"advantage_item"},[a("p",[t._v(t._s(s.name))]),t._v(" "),a("span",[t._v(t._s(s.intro))])])})],2),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"title_buttom"})])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"des"},[a("div",{staticClass:"text"},[t._v("完成报告会包含以下内容:")]),t._v(" "),a("p",[a("span",{staticClass:"radius"}),t._v(" 孩子优势的详细解读")]),t._v(" "),a("p",[a("span",{staticClass:"radius"}),t._v(" 孩子优势的相关形容词(大家会这样形容你)")]),t._v(" "),a("p",[a("span",{staticClass:"radius"}),t._v(" 孩子优势的相关主题解读")]),t._v(" "),a("p",[a("span",{staticClass:"radius"}),t._v(" 孩子优势的行动计划与建议")]),t._v(" "),a("p",{staticClass:"explain"},[t._v("\n          想获取完整报告，请添加微信号: yesiran2011,或扫描下方二维码,完成转账,随后会微信给您发送报告,以及可以获得十五分钟的咨询时间\n        ")]),t._v(" "),a("span",{staticClass:"qrcode"}),t._v(" "),a("p",{staticClass:"price"},[t._v("完成报告限时售价 "),a("span",[t._v("30")]),t._v("元")]),t._v(" "),a("p",{staticClass:"originPrice"},[t._v("原价100")])])}]};var c=a("VU/8")(i,n,!1,function(t){a("yYVX")},"data-v-31c85dda",null);s.default=c.exports},yYVX:function(t,s){}});