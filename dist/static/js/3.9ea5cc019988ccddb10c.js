webpackJsonp([3],{"9zh5":function(t,e){},AYo9:function(t,e){},FVc7:function(t,e){},FnGP:function(t,e){},Lmth:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{title:String,themeList:Array},data:function(){return{advantage:[{key:"独立",value:"你非常负责且容易被人信任,别人很容易依赖你"},{key:"独立",value:"你非常负责且容易被人信任,别人很容易依赖你"},{key:"独立",value:"你非常负责且容易被人信任,别人很容易依赖你"}]}},computed:{},watch:{},created:function(){},methods:{},components:{}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"advantage"},[s("div",{staticClass:"bg"},[s("span",{staticClass:"top"}),t._v(" "),s("p",{staticClass:"word"}),t._v(" "),t._l(t.themeList,function(e,a){return s("div",{key:a,staticClass:"advantage_item"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v(t._s(e.intro))])])}),t._v(" "),s("span",{staticClass:"top"})],2)])},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("f0YN")},"data-v-920caa58",null).exports,r={props:{title:String},data:function(){return{}},computed:{},watch:{},created:function(){},methods:{},components:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"report_menu"},[e("div",{staticClass:"report_title"},[this._v(this._s(this.title))]),this._v(" "),e("span",{staticClass:"under_line"})])},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(t){s("hOUq")},"data-v-0fc83cf8",null).exports,o={props:{},data:function(){return{title:"报告目录"}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("ReportTitle",{attrs:{title:t.title}}),t._v(" "),s("p",[t._v("您孩子的优势排序")]),t._v(" "),s("p",[t._v("TOP3优势主题的详细解释")]),t._v(" "),s("p",[t._v("给父母的行动计划与建议")]),t._v(" "),s("p",[t._v("给孩子的行动计划与建议")])],1)},staticRenderFns:[]};var d=s("VU/8")(o,v,!1,function(t){s("gPPg")},"data-v-2807f057",null).exports,u={props:{themeList:Array},data:function(){return{title:"TOP3优势主题的详细解释"}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"threeAdvantageDetail"},[s("ReportTitle",{attrs:{title:t.title}}),t._v(" "),t._l(t.themeList,function(e,a){return s("div",{key:a,staticClass:"keyWord"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n          "+t._s(e.description)+"\n          "),s("div",{staticClass:"shadow"},[t._v("完整报告解锁后可见")])])])})],2)},staticRenderFns:[]};var p=s("VU/8")(u,_,!1,function(t){s("9zh5")},"data-v-eaaf6b50",null).exports,h={props:{themeList:Array},data:function(){return{title:"他人眼中您孩子的样子",keyWord:[{key:"可靠",value:[1,2,3]},{key:"发现",value:[1,2,3]},{key:"关系",value:[1,2,3]}]}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"appearance"},[s("ReportTitle",{attrs:{title:t.title}}),t._v(" "),t._l(t.themeList,function(e,a){return s("div",{key:a,staticClass:"keyWord"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"content"},[t._l(e.adjList,function(e,a){return s("div",{key:a,staticClass:"des"},[t._v("\n            "+t._s(e)+"\n          ")])}),t._v(" "),s("div",{staticClass:"shadow"},[t._v("完整报告解锁后可见")])],2)])})],2)},staticRenderFns:[]};var f=s("VU/8")(h,m,!1,function(t){s("AYo9")},"data-v-064953cd",null).exports,C={props:{themeList:Array},data:function(){return{title:"给父母的行动计划与建议",keyWord:[{key:"可靠",value:"信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样"}],question:[{value:"信任对你来说很重要?"},{value:"信任对你来说很重要?"},{value:"信任对你来说很重要?"}]}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"advisePar"},[s("ReportTitle",{attrs:{title:t.title}}),t._v(" "),s("p",[t._v("您是孩子成长中最重要的人。孩子总是在与大人的交流中获得关于自己的认可和认知。若您关注孩子的思考、 感受和行为的方式，您的孩子会意识到自己的独特性，从而增加更多的自信。 ")]),t._v(" "),s("p",[t._v("我们建议您在发现孩子应用自己的优势主题时，及时的与孩子分享和沟通。这将对孩子有一生的积极影响。 您也可以只在我们的行动计划和建议中挑选1条，帮助孩子更好的发展和强化他们的优势。")]),t._v(" "),t._l(t.themeList,function(e,a){return s("div",{key:a,staticClass:"keyWord"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"content"},[t._l(e.parentActionList,function(e){return s("p",{key:e,staticClass:"childActionList"},[s("span",{staticClass:"radius"}),t._v(t._s(e))])}),t._v(" "),s("div",{staticClass:"question"},[s("p",{staticClass:"discuss"},[t._v("你可以和孩子一起讨论的问题")]),t._v(" "),t._l(e.discussionList,function(e,a){return s("div",{key:e,staticClass:"questionBox"},[s("p",{staticClass:"ques"},[t._v(t._s(a+1+". "+e))])])})],2),t._v(" "),s("div",{staticClass:"shadow"},[t._v("完整报告解锁后可见")])],2)])})],2)},staticRenderFns:[]};var y=s("VU/8")(C,L,!1,function(t){s("tzxu")},"data-v-535a48c1",null).exports,k={props:{themeList:Array},data:function(){return{title:"给孩子的行动计划与建议",keyWord:[{key:"可靠",value:"信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样"},{key:"可靠",value:"信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样"}]}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"adviseChr"},[s("ReportTitle",{attrs:{title:t.title}}),t._v(" "),t._l(t.themeList,function(e,a){return s("div",{key:a,staticClass:"keyWord"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"content"},[t._l(e.childActionList,function(e){return s("p",{key:e,staticClass:"childActionList"},[s("span",{staticClass:"radius"}),t._v(t._s(e))])}),t._v(" "),e.childExampleList.length>0?s("div",[s("p",{staticClass:"childActionTitle"},[t._v("一些实例参考")]),t._v(" "),t._l(e.childExampleList,function(e,a){return s("p",{key:a,staticClass:"childActionDes"},[s("span",{staticClass:"radius"}),t._v(t._s(e))])})],2):t._e(),t._v(" "),s("div",{staticClass:"shadow"},[t._v("完整报告解锁后可见")])],2)])})],2)},staticRenderFns:[]};var A=s("VU/8")(k,T,!1,function(t){s("mrR4")},"data-v-9e50b758",null).exports,R={props:{themeList:Array},data:function(){return{title:"给父母的行动计划与建议"}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("p",[this._v("少儿优势测评将帮助您了解您孩子自然而然产生的思考、感受和行为背后的驱动力及其表达方式。一共有十个优势主题。这份报告将帮助您了解孩子的前三个优势主题。 ")]),this._v(" "),e("p",[this._v("关注孩子的优势主题可以帮您更好的与孩子沟通，了解他/她想问题的思路，面对问题的感受，以及解决问题时的途径。您可能会因此发现您的孩子更擅长做一些事情，对某些事情更有热情。您也可能会由此意识到更好的引导和培养孩子的方式，真正做到因材施教。")]),this._v(" "),e("p",[this._v("希望在阅读本报告后，您能看到您孩子的独特性。然后根据他/她的优势，培养和发展他/她擅长的事物。最终实现您与孩子高质量的亲子互动，建立亲密的亲子关系。")])])}]};var w=s("VU/8")(R,g,!1,function(t){s("zluz")},"data-v-b68e72be",null).exports,x={props:{allThemeList:Array},data:function(){return{title:"您孩子的优势排序"}},computed:{},watch:{},created:function(){},methods:{},components:{ReportTitle:l}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"threeAdvantageDetail"},[s("ReportTitle",{attrs:{title:t.title}}),t._v(" "),s("div",{staticClass:"content"},[t._l(t.allThemeList,function(e,a){return s("div",{key:a,staticClass:"keyWord"},[s("p",[t._v(t._s(a+1)+".   "+t._s(e))])])}),t._v(" "),s("div",{staticClass:"shadow"},[t._v("完整报告解锁后可见")])],2)],1)},staticRenderFns:[]};var E=s("VU/8")(x,F,!1,function(t){s("FnGP")},"data-v-63c978ce",null).exports,V=s("LOkV"),P={data:function(){return{isLoading:!1,themeList:[],allThemeList:[],name:""}},computed:{},watch:{},created:function(){document.title="少儿优势测评"},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e="c/api/get_hidden_full_report?exam_id="+this.$route.params.id;V.a.request({url:e}).then(function(e){t.allThemeList=e.data.allThemeList,t.themeList=e.data.themeList,t.name=e.data.childName})}},components:{TopTen:E,Advantage:n,Words:w,Menu:d,ThreeAdvantageDetail:p,Appearance:f,AdviseChr:A,AdvisePar:y}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"report"},[s("div",{staticClass:"title_bg"}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("p",{staticClass:"result"},[t._v("少儿优势测评结果查询")]),t._v(" "),s("span",{staticClass:"name"},[s("span",[t._v(t._s(t.name))]),t._v("你是这样的独特存在")]),t._v(" "),s("Advantage",{attrs:{themeList:t.themeList}}),t._v(" "),s("Words"),t._v(" "),s("Menu"),t._v(" "),s("TopTen",{attrs:{allThemeList:t.allThemeList}}),t._v(" "),s("ThreeAdvantageDetail",{attrs:{themeList:t.themeList}}),t._v(" "),s("AdvisePar",{attrs:{themeList:t.themeList}}),t._v(" "),s("AdviseChr",{attrs:{themeList:t.themeList}})],1)]),t._v(" "),s("div",{staticClass:"title_buttom"})])},staticRenderFns:[]};var $=s("VU/8")(P,U,!1,function(t){s("FVc7")},"data-v-b77eb21c",null);e.default=$.exports},f0YN:function(t,e){},gPPg:function(t,e){},hOUq:function(t,e){},mrR4:function(t,e){},tzxu:function(t,e){},zluz:function(t,e){}});