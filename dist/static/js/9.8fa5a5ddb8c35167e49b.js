webpackJsonp([9],{WkrG:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Dd8w"),e=a.n(i),n=a("LOkV"),c=a("NYxO"),r={data:function(){return{isLoading:!1,themeList:[],name:""}},computed:e()({},Object(c.c)(["origin"])),watch:{},created:function(){document.title="少儿优势测评"},mounted:function(){this.fetchData()},methods:{handleJumpDetail:function(){var t=this.$route.params.id;this.$router.push("/detailShadow/"+t)},fetchData:function(){var t=this,s="c/api/get_simple_report?exam_id="+this.$route.params.id;n.a.request({url:s}).then(function(s){t.themeList=s.data.themeList,t.name=s.data.childName})}},components:{}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"report"},[i("div",{staticClass:"title_bg"}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"container"},[i("p",{staticClass:"result"},[t._v("少儿优势测评结果查询")]),t._v(" "),i("span",{staticClass:"name"},[i("span",[t._v(t._s(t.name))]),t._v("你是这样的独特存在")]),t._v(" "),i("div",{staticClass:"advantage"},[i("div",{staticClass:"bg"},[i("span",{staticClass:"top"}),t._v(" "),i("p",{staticClass:"word"}),t._v(" "),t._l(t.themeList,function(s,a){return i("div",{key:a,staticClass:"advantage_item"},[i("p",[t._v(t._s(s.name))]),t._v(" "),i("span",[t._v(t._s(s.intro))])])}),t._v(" "),i("span",{staticClass:"top"})],2)]),t._v(" "),i("div",{staticClass:"des"},[i("div",{staticClass:"text"},[t._v("完整报告会包含以下内容:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("p",{staticClass:"link",on:{click:t.handleJumpDetail}},[t._v("查看您孩子的完整报告示例")]),t._v(" "),i("p",{staticClass:"explain"},[t._v("\n          对报告内容有任何疑问及完整报告解析，欢迎添加小苹果助教微信（微信号：The_rainbow1）\n        ")]),t._v(" "),i("img",{staticClass:"qrcode",attrs:{src:a("bdrM"),alt:"二维码.jpg"}}),t._v(" "),t._m(4),t._v(" "),i("p",{staticClass:"originPrice"},[t._v("原价79.9")])])])]),t._v(" "),i("div",{staticClass:"title_buttom"})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"radius"}),this._v(" 您孩子的优势排序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"radius"}),this._v(" TOP3优势主题的详细解释")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"radius"}),this._v(" 给父母的行动计划与建议")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"radius"}),this._v(" 给孩子的行动计划与建议")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"price"},[this._v("完整报告限时售价 "),s("span",[this._v("39.9")]),this._v("元")])}]};var l=a("VU/8")(r,_,!1,function(t){a("wbH7")},"data-v-0e84ac3c",null);s.default=l.exports},wbH7:function(t,s){}});