(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)n=i[d],a[n]&&f.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],r=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var r={},a={app:0},o=[];function n(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0280":function(t,e,s){"use strict";s.r(e);var r=s("3827"),a=s.n(r);for(var o in r)"default"!==o&&function(t){s.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},"06e6":function(t,e,s){"use strict";var r=s("85b1"),a=s.n(r);a.a},"0d60":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.submitting?s("utility-loader-dots"):t._e(),s("form",{directives:[{name:"show",rawName:"v-show",value:!t.submitting,expression:"!submitting"}],attrs:{action:t.loginUrl},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("form-group",{attrs:{"label-title":"Email","form-errors":t.errors,"field-name":"email"}},[s("form-text",{attrs:{placeholder:"Email","field-name":"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("form-group",{attrs:{"label-title":"Password","form-errors":t.errors,"field-name":"password"}},[s("form-text",{attrs:{type:"password",placeholder:"Password","field-name":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("button",{staticClass:"btn btn-info"},[t._v("Login")])],1)],1)},a=[],o=(s("cadf"),s("551c"),s("4a67")),n={name:"LoginForm",data:function(){return{user:{},email:"test@test.co.uk",password:"123456",submitting:!1,loginUrl:"user/login",errors:new o["a"]}},methods:{login:function(){var t=this;this.submitting||(this.submitting=!0,axios.post(this.loginUrl,{email:this.email,password:this.password}).then(function(e){t.$store.commit("loggedIn",{authToken:e.data.api_token,response:e.data}),t.user=e.data,t.submitting=!1}).catch(function(e){e.response.data?422==e.response.status?t.errors.record(e.response.data):Flash.error(e.response.data):Flash.error("Login Failed. Please try again"),t.submitting=!1}))}}},i=n,c=s("2877"),l=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},"101b":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"category-string"},[t._v("Posted In\n        "),s("span",{staticClass:"category-link-span"},[s("router-link",{attrs:{to:"/category/all"}},[t._v("All")])],1),t._l(t.postCategories,function(e){return s("span",{staticClass:"category-link-span"},[s("router-link",{attrs:{to:"/category/"+e.slug}},[t._v(t._s(e.title))])],1)})],2)])},a=[],o={computed:{},props:{postCategories:{required:!0}}},n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"15ee":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader-dots-container"},[s("div",{staticClass:"lds-ellipsis loader-"},[s("div"),s("div"),s("div"),s("div")])])}];s.d(e,"a",function(){return r}),s.d(e,"b",function(){return a})},"260a":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.formErrors.has(t.errorKey)?s("div",{staticClass:"help-block"},[s("strong",{domProps:{textContent:t._s(t.formErrors.get(t.errorKey))}})]):t._e()])},a=[],o={name:"FormValidationError",props:{formErrors:{required:!0},errorKey:{required:!0}}},n=o,i=(s("2f30"),s("2877")),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"29fd":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.authenticated&&1==t.showModal?s("utility-modal",{on:{close:function(e){t.showModal=!1}}},[s("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.buttonText))]),s("category-form",{attrs:{slot:"body","active-record":t.activeRecord},on:{close:function(e){t.showModal=!1}},slot:"body"})],1):t._e(),t.authenticated?s("div",{staticClass:"category-button btn btn-info",on:{click:function(e){t.showModal=!0}}},[t._t("btn-text",[t._v(t._s(t.buttonText))])],2):t._e()],1)},a=[],o=s("6bde"),n=(s("cadf"),s("551c"),{props:{activeRecord:{}},computed:{buttonText:function(){return this.editingMode?"Edit Category":"Add Category"},editingMode:function(){return"object"==Object(o["a"])(this.activeRecord)},authUser:function(){return this.$store.state.authUser},authenticated:function(){return this.$store.state.authenticated}},data:function(){return{showModal:!1}}}),i=n,c=s("2877"),l=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},"2b80":function(t,e,s){},"2f30":function(t,e,s){"use strict";var r=s("8ea0"),a=s.n(r);a.a},"36fb":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.authenticated&&1==t.showModal?s("utility-modal",{on:{close:function(e){t.showModal=!1}}},[s("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.buttonText))]),s("post-form",{attrs:{slot:"body","active-record":t.activeRecord},on:{close:function(e){t.showModal=!1}},slot:"body"})],1):t._e(),t.authenticated?s("div",{staticClass:"btn btn-info",on:{click:function(e){t.showModal=!0}}},[t._t("btn-text",[t._v(t._s(t.buttonText))])],2):t._e()],1)},a=[],o=s("6bde"),n={props:{activeRecord:{}},computed:{buttonText:function(){return this.editingMode?"Edit Post":"Add Post"},editingMode:function(){return"object"==Object(o["a"])(this.activeRecord)},authUser:function(){return this.$store.state.authUser},authenticated:function(){return this.$store.state.authenticated}},data:function(){return{showModal:!1}}},i=n,c=s("2877"),l=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},3827:function(t,e){},"38c2":function(t,e,s){"use strict";var r=s("5acd"),a=s.n(r);a.a},4678:function(t,e,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return s(e)}function o(t){var e=r[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="4678"},"4a67":function(t,e,s){"use strict";s.d(e,"a",function(){return o});s("ac6a"),s("456d");var r=s("c665"),a=s("aa9a"),o=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(a["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){return this.errors[t]?"string"==typeof this.errors[t]?this.errors[t]:this.errors[t][0]:""}},{key:"record",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}()},"4daf":function(t,e,s){var r={"./Category/Button.vue":"29fd","./Category/Form.vue":"cf27","./Form/DeleteButton.vue":"6711","./Form/Group.vue":"6cd2","./Form/Text.vue":"92dd","./Form/Textarea.vue":"8c8f","./Form/ValidationError.vue":"260a","./Layout.vue":"ebad","./Login/Form.vue":"0d60","./Post/Button.vue":"36fb","./Post/CategoryString.vue":"101b","./Post/Form.vue":"d35c","./Post/Single.vue":"acef","./Utility/Loader.vue":"5b63","./Utility/LoaderDots.vue":"64a2","./Utility/Modal.vue":"e169"};function a(t){var e=o(t);return s(e)}function o(t){var e=r[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="4daf"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c");var r=s("2ef0"),a=s.n(r),o=s("1157"),n=s.n(o),i={blogApiUrl:function(){return"http://lewsblog.test:8080"==window.location.origin?"http://blogapi.test/api/":"http://blog.lcainswebdeveloper.co.uk/api/"}},c=s("bc3a"),l=s.n(c),u=s("4543");s("1310");var d={success:function(t){u.success(t)},error:function(t){u.error(t)},warning:function(t){u.warning(t)},info:function(t){u.message(t)},confirm:function(t){return new Promise(function(e,s){u.confirm("Are you sure?",t,function(){e()},function(){s()})})}},f=s("2b0e"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{staticClass:"vue-logo",attrs:{src:s("cf05")}}),t.$store.state.appReady?t._e():r("utility-loader-dots"),t.$store.state.appReady?r("div",[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | \n          "),t.authenticated?t._e():r("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showLoginForm=!0}}},[t._v("Login")]),t.authenticated?r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]):t._e(),t.authenticated?r("span",[t._v(" | Logged in as "+t._s(t.authUser.email))]):t._e()],1),t.showLoginForm&&!t.authenticated?r("utility-modal",{on:{close:function(e){t.showLoginForm=!1}}},[r("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Login")]),r("login-form",{attrs:{slot:"body"},slot:"body"})],1):t._e(),r("router-view",{key:t.$route.path})],1):t._e()],1)},h=[];s("ac22");var b={beforeCreate:function(){var t=this;null!=localStorage.getItem("api_token")&&this.$store.commit("checkAuth"),this.$store.dispatch("loadCategories").then(function(e){t.$store.dispatch("loadPosts")})},methods:{logout:function(){this.$store.commit("logout"),Flash.success("Logout successful")}},data:function(){return{showLoginForm:!1}},computed:{authUser:function(){return this.$store.state.authUser},authenticated:function(){return this.$store.state.authenticated}},mounted:function(){var t=this;Event.$on("refresh-categories",function(){t.$store.dispatch("loadCategories")}),Event.$on("refresh-posts",function(){t.$store.dispatch("loadPosts")})}},g=b,p=s("2877"),v=Object(p["a"])(g,m,h,!1,null,null,null),y=v.exports,j=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout")},k=[],C={beforeCreate:function(){this.$store.commit("setItem",{key:"activeCategory",value:"all"})},data:function(){return{}},computed:{},methods:{}},$=C,x=Object(p["a"])($,w,k,!1,null,null,null),P=x.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isReady?t._e():s("utility-loader-dots"),t.isReady?s("layout"):t._e()],1)},O=[],F=s("6bde"),M={name:"Category",beforeCreate:function(){this.$store.commit("setItem",{key:"activeCategory",value:this.$route.params.slug})},computed:{isReady:function(){return"object"==Object(F["a"])(this.$store.getters.filteredPosts)},activeCategory:function(){return this.$store.getters.activeCategoryData}},methods:{}},U=M,R=Object(p["a"])(U,E,O,!1,null,null,null),T=R.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isReady?t._e():s("utility-loader-dots"),t.isReady?s("layout",[s("div",{attrs:{slot:"posts"},slot:"posts"},[t.isReady?t._e():s("utility-loader-dots"),1==t.isReady?s("div",{staticClass:"blog-list"},[s("post-single",{attrs:{"blog-post":t.blogPost,"show-full":!0}})],1):t._e()],1)]):t._e()],1)},L=[],z=(s("7514"),{name:"Post",computed:{blogPost:function(){var t=this;return _.find(this.$store.state.posts,function(e){return e.slug==t.$route.params.slug})},isReady:function(){return!0}}}),D=z,S=Object(p["a"])(D,I,L,!1,null,null,null),A=S.exports;f["a"].use(j["a"]);var N=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/category/:slug",name:"category",component:T},{path:"/post/:slug",name:"post",component:A}]}),q=s("2f62");f["a"].use(q["a"]);var B=new q["a"].Store({state:{winWidth:n()(window).width(),authenticated:!1,authenticating:!1,authUser:{},appReady:!1,authToken:"",categories:[],posts:[],refreshingCategories:!1,refreshingPosts:!1,activeCategory:"all"},getters:{activeCategoryData:function(t){return _.find(t.categories,function(e){return e.slug==t.activeCategory})},orderedCategories:function(t){return _.orderBy(t.categories,["title"],["asc"])},filteredPosts:function(t,e){return"all"==t.activeCategory?_.orderBy(t.posts,["created_at"],["desc"]):void 0!=e.activeCategoryData&&"all"!=t.activeCategory?_.orderBy(e.activeCategoryData.posts,["created_at"],["desc"]):_.orderBy([],["created_at"],["desc"])},siteReponsiveMode:function(t){return t.winWidth<=1e3&&t.winWidth>767?"on-tablet":t.winWidth<=767?"on-mobile":"non-mobile"}},mutations:{updateWinWidth:function(t){t.winWidth=n()(window).width()},loggedIn:function(t,e){Flash.success("You have logged in successfully..."),t.authenticated=!0,t.authToken=e.response.token,t.authenticating=!1,t.authUser=e.response,localStorage.setItem("api_token",e.response.token),localStorage.setItem("user_id",e.response.id)},checkAuth:function(t){Flash.warning("Verifying ...."),t.authenticating=!0,axios.post("user/verify",{user_id:localStorage.getItem("user_id"),api_token:localStorage.getItem("api_token")}).then(function(e){Flash.success("Thank you "+e.data.email+". You have been verified."),t.authenticated=!0,t.authToken=localStorage.getItem("api_token"),t.authenticating=!1,t.authUser=e.data}).catch(function(e){Flash.error("Login Failed. Please login again"),t.authenticating=!1,localStorage.removeItem("api_token"),localStorage.removeItem("user_id"),t.authenticated=!1,t.authToken="",t.authUser={}})},logout:function(t){localStorage.removeItem("api_token"),localStorage.removeItem("user_id"),t.authenticated=!1,t.authToken="",t.authUser={}},pushTo:function(t,e){t[e.key].push(e.value)},setItem:function(t,e){t[e.key]=e.value}},actions:{loadCategories:function(t){return t.commit("setItem",{key:"refreshingCategories",value:!0}),new Promise(function(e,s){axios.get("/posts/categories").then(function(s){return t.commit("setItem",{key:"categories",value:s.data}),t.commit("setItem",{key:"refreshingCategories",value:!1}),e(s.data)}).catch(function(e){t.commit("setItem",{key:"refreshingCategories",value:!1})})})},loadPosts:function(t){return t.commit("setItem",{key:"refreshingPosts",value:!0}),new Promise(function(e,s){axios.get("/posts/blog-posts").then(function(e){t.commit("setItem",{key:"posts",value:e.data}),t.commit("setItem",{key:"appReady",value:!0}),t.commit("setItem",{key:"refreshingPosts",value:!1})}).catch(function(e){t.commit("setItem",{key:"refreshingPosts",value:!1})})})}}});window._=a.a,window.$=n.a,l.a.defaults.baseURL=i.blogApiUrl(),window.axios=l.a,window.Flash=d,window.Vue=f["a"],window.Event=new f["a"],s("a7ac"),s("9fea"),f["a"].config.productionTip=!1,new f["a"]({router:N,store:B,render:function(t){return t(y)}}).$mount("#app")},"5acd":function(t,e,s){},"5b63":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-spinner-container"},[s("div",{staticClass:"loading-spinner"}),t._t("default")],2)},a=[],o={name:"UtilityLoader",props:{}},n=o,i=(s("38c2"),s("2877")),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"64a2":function(t,e,s){"use strict";s.r(e);var r=s("15ee"),a=s("0280");for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);s("06e6");var n=s("2877"),i=Object(n["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},6711:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn btn-danger delete-record-button",on:{click:t.deleteRecord}},[s("i",{staticClass:"fas fa-trash-alt"})])},a=[],o={props:{deleteUrl:{required:!0}},methods:{deleteRecord:function(){var t=this;Flash.confirm("Are you sure you wish to delete this?").then(function(){t.$emit("delete-start"),axios.post(t.deleteUrl,{api_token:t.$store.state.authToken}).then(function(e){Flash.success(e.data),Event.$emit("refresh-categories"),Event.$emit("refresh-posts"),t.$emit("close"),t.$emit("delete-success"),t.$router.push("/category/all")}).catch(function(e){Flash.error(e.response.data),t.$emit("close"),t.$emit("delete-error")})})}}},n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"6cd2":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.labelTitle))]),t._t("default"),s("form-validation-error",{attrs:{"form-errors":t.formErrors,"error-key":t.fieldName}})],2)},a=[],o=(s("cadf"),s("551c"),{props:{labelTitle:{required:!0},formErrors:{default:Object},fieldName:{required:!0}}}),n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"85b1":function(t,e,s){},"8c8f":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("textarea",{staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"5"},on:{input:function(e){t.$emit("input",e.target.value)}}},[t._v("    "+t._s(t.value)+"\n")])},a=[],o={props:{fieldName:{required:!0},value:{}}},n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"8ea0":function(t,e,s){},"92dd":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}})},a=[],o={props:{fieldName:{required:!0},value:{}}},n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},"9fea":function(t,e,s){"use strict";s.r(e);s("a481"),s("ac6a"),s("cadf"),s("551c");var r=s("8103"),a=s.n(r),o=s("bba4"),n=s.n(o),i=s("2b0e");function c(t){t.keys().forEach(function(e){var s=t(e),r=a()(n()(e.replace(/^\.\/_/,"").replace(/\.\w+$/,"")));i["a"].component(r,s.default||s)})}var l=s("4daf");c(l)},a7ac:function(t,e,s){"use strict";s.r(e);s("6b54");var r=s("c1df"),a=s.n(r);Vue.filter("readableDate",function(t,e){var s=e||"DD/MM/Y";return t?a()(t).format(s):""}),Vue.filter("capitalize",function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""})},ac22:function(t,e,s){},acef:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-listing"},[t.showFull?s("small",{staticClass:"post-back"},[s("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$router.go(-1)}}},[t._v("< Back")])]):t._e(),s("small",{staticClass:"post-date-author"},[t._v(t._s(t._f("readableDate")(t.blogPost.created_at))+" by "+t._s(t.blogPost.user.name))]),s("h3",[t._v(t._s(t.blogPost.title))]),s("post-category-string",{attrs:{"post-categories":t.blogPost.categories}}),t.showFull?t._e():s("div",{staticClass:"post-abstract",domProps:{innerHTML:t._s(t.blogPost.abstract)}}),t.showFull?s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(t.blogPost.content)}}):t._e(),t.showFull?t._e():s("router-link",{attrs:{to:"/post/"+t.blogPost.slug}},[t._v("Read More")]),t.authenticated?s("div",[s("hr"),s("post-button",{attrs:{"active-record":t.blogPost}},[s("i",{staticClass:"fas fa-pencil-alt",attrs:{slot:"btn-text"},slot:"btn-text"})])],1):t._e()],1)},a=[],o={props:{blogPost:{required:!0},showFull:{default:!1}},computed:{authenticated:function(){return this.$store.state.authenticated}}},n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},cf27:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.submitting?s("utility-loader-dots"):t._e(),s("form",{directives:[{name:"show",rawName:"v-show",value:!t.submitting,expression:"!submitting"}],attrs:{action:t.formUrl},on:{submit:function(e){return e.preventDefault(),t.persist(e)}}},[s("form-group",{attrs:{"label-title":"Title","form-errors":t.errors,"field-name":"title"}},[s("form-text",{attrs:{placeholder:"Title","field-name":"title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._m(0),t.editingMode?s("form-delete-button",{attrs:{"delete-url":"category/"+this.activeRecord.id+"/delete"},on:{"delete-start":function(e){t.submitting=!0},"delete-error":function(e){t.submitting=!1},close:function(e){t.$emit("close")}}}):t._e()],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-info"},[s("i",{staticClass:"far fa-save"})])}],o=(s("7f7f"),s("6bde")),n=s("4a67"),i={name:"CategoryForm",props:{activeRecord:{}},mounted:function(){1==this.editingMode&&(this.title=this.activeRecord.title)},computed:{formUrl:function(){return this.editingMode?"category/"+this.activeRecord.id+"/update":"category/create"},editingMode:function(){return"object"==Object(o["a"])(this.activeRecord)}},data:function(){return{title:"",submitting:!1,errors:new n["a"]}},methods:{persist:function(){var t=this;this.errors=new n["a"],this.submitting||(this.submitting=!0,axios.post(this.formUrl,{title:this.title,api_token:this.$store.state.authToken}).then(function(e){Flash.success(e.data.title+" was saved successfully"),1==t.editingMode&&"category"==t.$route.name&&t.$router.push("/category/"+e.data.slug),Event.$emit("refresh-categories"),Event.$emit("refresh-posts"),t.$emit("close"),t.submitting=!1}).catch(function(e){e.response.data?422==e.response.status?t.errors.record(e.response.data):Flash.error(e.response.data.message):Flash.error("Unable to save the category. Please try again."),t.submitting=!1}))}}},c=i,l=s("2877"),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},d35c:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.submitting?s("utility-loader-dots"):t._e(),s("form",{directives:[{name:"show",rawName:"v-show",value:!t.submitting,expression:"!submitting"}],attrs:{action:t.formUrl},on:{submit:function(e){return e.preventDefault(),t.persist(e)}}},[s("form-group",{attrs:{"label-title":"Title","form-errors":t.errors,"field-name":"title"}},[s("form-text",{attrs:{placeholder:"Title","field-name":"title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("form-group",{attrs:{"label-title":"Abstract","form-errors":t.errors,"field-name":"abstract"}},[s("form-text",{attrs:{placeholder:"Abstract","field-name":"abstract"},model:{value:t.abstract,callback:function(e){t.abstract=e},expression:"abstract"}})],1),s("form-group",{attrs:{"label-title":"Content","form-errors":t.errors,"field-name":"content"}},[s("form-textarea",{attrs:{placeholder:"Content","field-name":"content"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),s("form-group",{attrs:{"label-title":"Categories","form-errors":t.errors,"field-name":"categories"}},[s("div",{staticClass:"row"},t._l(t.categoryList,function(e){return s("div",{staticClass:"col-xs-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.categories,expression:"categories"}],attrs:{type:"checkbox",id:"category-"+e.id},domProps:{value:e.id,checked:Array.isArray(t.categories)?t._i(t.categories,e.id)>-1:t.categories},on:{change:function(s){var r=t.categories,a=s.target,o=!!a.checked;if(Array.isArray(r)){var n=e.id,i=t._i(r,n);a.checked?i<0&&(t.categories=r.concat([n])):i>-1&&(t.categories=r.slice(0,i).concat(r.slice(i+1)))}else t.categories=o}}}),s("label",{attrs:{for:"category-"+e.id}},[t._v(" "+t._s(e.title))])])}))]),t._m(0),t.editingMode?s("form-delete-button",{attrs:{"delete-url":"blog-post/"+this.activeRecord.id+"/delete"},on:{"delete-start":function(e){t.submitting=!0},"delete-error":function(e){t.submitting=!1},close:function(e){t.$emit("close")}}}):t._e()],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-info"},[s("i",{staticClass:"far fa-save"})])}],o=(s("7f7f"),s("6bde")),n=(s("a481"),s("cadf"),s("551c"),s("4a67")),i={props:{activeRecord:{}},mounted:function(){1==this.editingMode&&(this.title=this.activeRecord.title,this.abstract=this.activeRecord.abstract,this.content=this.activeRecord.content.replace(/(<br ?\/?>)*/g,""),this.categories=this.activeRecord.categories.map(function(t){return t.id}))},name:"PostForm",data:function(){return{title:"",abstract:"",content:"",categories:[],submitting:!1,errors:new n["a"]}},computed:{formUrl:function(){return this.editingMode?"blog-post/"+this.activeRecord.id+"/update":"blog-post/create"},editingMode:function(){return"object"==Object(o["a"])(this.activeRecord)},categoryList:function(){return this.$store.getters.orderedCategories}},methods:{persist:function(){var t=this;this.errors=new n["a"],this.submitting||(this.submitting=!0,axios.post(this.formUrl,{title:this.title,abstract:this.abstract,content:this.content,categories:this.categories,api_token:this.$store.state.authToken}).then(function(e){Flash.success(e.data.title+" was saved successfully"),1==t.editingMode&&"post"==t.$route.name&&t.$router.push("/post/"+e.data.slug),Event.$emit("refresh-categories"),Event.$emit("refresh-posts"),t.$emit("close"),t.submitting=!1}).catch(function(e){e.response.data?422==e.response.status?t.errors.record(e.response.data):Flash.error(e.response.data.message):Flash.error("Unable to save the category. Please try again."),t.submitting=!1}))}}},c=i,l=s("2877"),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},e169:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container",attrs:{role:"document"}},[s("div",{staticClass:"internal-modal-content"},[s("div",{staticClass:"modal-header"},[s("button",{staticClass:"button small modal-close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.$emit("close")}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._t("header",[s("h5",{staticClass:"modal-title"},[t._v("Modal title")])])],2),s("div",{staticClass:"vue-modal-body"},[t._t("body",[s("p",[t._v("Modal body text goes here.")])])],2)])])])])])},a=[],o={name:"UtilityModal",props:{}},n=o,i=(s("e87c"),s("2877")),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},e87c:function(t,e,s){"use strict";var r=s("2b80"),a=s.n(r);a.a},ebad:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-4"},[s("category-button",[s("span",{attrs:{slot:"btn-text"},slot:"btn-text"},[s("i",{staticClass:"fas fa-plus"}),t._v(" Category")])]),t._t("categories",[1==t.$store.state.refreshingCategories?s("utility-loader-dots"):t._e(),t.$store.state.refreshingCategories?t._e():s("ul",{staticClass:"blog-list"},[s("li",[s("router-link",{attrs:{to:"/category/all"}},[t._v("("+t._s(t.$store.state.posts.length)+") All")])],1),t._l(t.$store.getters.orderedCategories,function(e){return s("li",[s("router-link",{attrs:{to:"/category/"+e.slug}},[t._v("("+t._s(e.posts.length)+") "+t._s(e.title))]),s("category-button",{attrs:{"active-record":e}},[s("i",{staticClass:"fas fa-pencil-alt",attrs:{slot:"btn-text"},slot:"btn-text"})])],1)})],2)])],2),s("div",{staticClass:"col-xs-8"},[t._t("posts",[s("post-button",[s("span",{attrs:{slot:"btn-text"},slot:"btn-text"},[s("i",{staticClass:"fas fa-plus"}),t._v(" Post")])]),1==t.$store.state.refreshingPosts?s("utility-loader-dots"):t._e(),s("div",{staticClass:"blog-list"},[0==t.$store.getters.filteredPosts.length?s("small",[t._v("No Posts available in this category")]):t._e(),t._l(t.$store.getters.filteredPosts,function(e){return t.$store.state.refreshingPosts?t._e():s("post-single",{key:e.id,attrs:{"blog-post":e}})})],2)])],2)])},a=[],o=(s("cadf"),s("551c"),{}),n=o,i=s("2877"),c=Object(i["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports}});
//# sourceMappingURL=app.826e5291.js.map