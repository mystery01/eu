webpackJsonp([5],{FiWv:function(t,e){},uUni:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("LOkV"),i=s("Au9i"),n={data:function(){return{phone:"",captcha:"",isLoading:!1,seconds:-1,themes:[{themeBgc:"#BCCA8C",value:"组织",evalue:"(Organizer)",left:.44,top:0,width:1.03},{themeBgc:"#D4A69A",value:"关系",evalue:"(Relating)",left:1.55,top:0,width:.88},{themeBgc:"#FDBF77",value:"自信",evalue:"(Confidence)",left:0,top:.33,width:1.03},{themeBgc:"#CCBC95",value:"存在",evalue:"(Presence)",left:1.13,top:.33,width:.88},{themeBgc:"#92B8A4",value:"成就",evalue:"(Achieving)",left:2.08,top:.33,width:1.03},{themeBgc:"#92B8A4",value:"竞争",evalue:"(Competing)",left:0,top:.66,width:1.03},{themeBgc:"#FDBF77",value:"关心",evalue:"(Caring)",left:1.13,top:.66,width:.88},{themeBgc:"#BCCA8C",value:"发现",evalue:"(Discover)",left:2.08,top:.66,width:1.03},{themeBgc:"#CCBC95",value:"可靠",evalue:"(Dependability)",left:.3,top:.99,width:1.23},{themeBgc:"#D4A69A",value:"展望",evalue:"(Future Thinker)",left:1.61,top:.99,width:1.18}],isLogin:!1}},computed:{},watch:{seconds:function(t){var e=this;setTimeout(function(){t>0&&e.timeRun()},1e3)}},created:function(){var t=this;document.title="盖洛普青少年测评",this.getList().then(function(e){0===e.code?(t.isLogin=!0,t.phone=e.data.parentPhone):401===e.code&&(t.isLogin=!1)})},methods:{goReport:function(){var t=this;if(this.isLogin)this.$router.push("/reports");else{if(this.checkCode())return Object(i.Toast)("请输入验证码！"),!1;this.login().then(function(e){0===e.code?t.$router.push("/reports"):401===e.code?(Object(i.Toast)("无查看权限!"),setTimeout(function(){t.$router.push("/main")},1e3)):402===e.code?(Object(i.Toast)("没有找到进行中的测验!"),setTimeout(function(){t.$router.push("/prepare")},1e3)):Object(i.Toast)(e.msg)})}},goTest:function(){var t=this;if(this.isLogin)this.$router.push("/prepare");else{if(!this.isLogin&&this.checkCode())return Object(i.Toast)("请输入验证码！"),!1;this.login().then(function(e){0===e.code?t.$router.push("/prepare"):401===e.code?(Object(i.Toast)("无查看权限!"),setTimeout(function(){t.$router.push("/main")},1e3)):402===e.code?(Object(i.Toast)("没有找到进行中的测验!"),setTimeout(function(){t.$router.push("/prepare")},1e3)):Object(i.Toast)(e.msg)})}},getCode:function(){var t=this;if(!this.checkMobile())return Object(i.Toast)("请输入正确的手机号！"),!1;this.getAuthCode().then(function(e){0===e.code?(Object(i.Toast)("验证码已发送！"),t.seconds=60):401===e.code?(Object(i.Toast)("无查看权限!"),setTimeout(function(){t.$router.push("/main")},1e3)):402===e.code?(Object(i.Toast)("没有找到进行中的测验!"),setTimeout(function(){t.$router.push("/prepare")},1e3)):Object(i.Toast)(e.msg)})},timeRun:function(){this.seconds=this.seconds-1},checkMobile:function(){return/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone)},checkCode:function(){return 0===this.captcha.replace(/\s/g,"").length},getAuthCode:function(){var t={};return t.parentPhone=this.phone,o.a.request({method:"post",url:"c/api/get_sms_auth_code",data:t})},login:function(){var t={};return t.parentPhone=this.phone,t.smsAuthCode=this.captcha,o.a.request({method:"post",url:"c/api/login",data:t})},getList:function(){return o.a.request({method:"GET",url:"c/api/query_exam_list"})}},components:{}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test_main"},[s("div",{staticClass:"title_bg"}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"main_des"},[s("div",{staticClass:"main_des_tittle"},[t._v("\n          盖洛普青少年测评\n        ")]),t._v(" "),s("div",{staticClass:"main_des_info"},[t._v("\n          盖洛普青少年测评一款基于积极心理学研发而成的，用于了解一个人自然而然地思考、感觉或行为的方式的测评。此测评可以辅助孩子了解自己的优势，用优势点亮人生，本测评相对市面测评有更久的历史，以及更细节，会测试动机层面，此次测评总共有10个主题，分别如下：\n        ")]),t._v(" "),s("div",{staticClass:"main_des_theme"},t._l(t.themes,function(e){return s("p",{key:e.value,staticClass:"des_theme",style:{background:e.themeBgc,width:e.width+"rem",top:e.top+"rem",left:e.left+"rem"}},[t._v("\n            "+t._s(e.value)+" "),s("span",[t._v(t._s(e.evalue))])])}))]),t._v(" "),s("div",{staticClass:"main_login"},[t.isLogin?t._e():s("div",{staticClass:"login_title"},[t._v("\n          手机登录\n        ")]),t._v(" "),s("div",{staticClass:"login_form"},[t.isLogin?s("div",{staticClass:"login_already"},[t._v("\n            您好，"),s("span",{staticClass:"login_user"},[t._v(t._s(t.phone))])]):s("div",[s("div",{staticClass:"form_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form_tel",attrs:{placeholder:"请输入手机号",type:"tel"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"form_code",attrs:{placeholder:"请输入验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),t._v(" "),t.seconds>0?s("mt-button",{staticClass:"form_code_load"},[t._v("剩余"+t._s(t.seconds)+"s")]):s("mt-button",{staticClass:"form_code_load",on:{click:t.getCode}},[t._v("获取验证码")])],1)]),t._v(" "),s("div",{staticClass:"form_buttons"},[s("mt-button",{staticClass:"button_common",on:{click:t.goReport}},[t._v("查看报告")]),t._v(" "),s("mt-button",{staticClass:"button_common button_orange",on:{click:t.goTest}},[t._v("开始测评")])],1)])])])]),t._v(" "),s("div",{staticClass:"title_buttom"})])},staticRenderFns:[]};var c=s("VU/8")(n,a,!1,function(t){s("FiWv")},"data-v-0485a4b4",null);e.default=c.exports}});