(function(t){function e(e){for(var s,l,i=e[0],r=e[1],d=e[2],o=0,b=[];o<i.length;o++)l=i[o],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(b.length)b.shift()();return c.push.apply(c,d||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(s=!1)}s&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},c=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cbb753db"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var c,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=l(t);var d=new Error;c=function(e){r.onerror=r.onload=null,clearTimeout(o);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+c+")",d.name="ChunkLoadError",d.type=s,d.request=c,a[1](d)}n[t]=void 0}};var o=setTimeout((function(){c({type:"timeout",target:r})}),12e4);r.onerror=r.onload=c,document.head.appendChild(r)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=d;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},3823:function(t,e,a){"use strict";var s=a("43de"),n=a.n(s);n.a},"3fa5":function(t,e,a){"use strict";var s=a("782e"),n=a.n(s);n.a},"43de":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=c(t);return a(e)}function c(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=c,t.exports=n,n.id="4678"},"4a3c":function(t,e,a){"use strict";var s=a("7610"),n=a.n(s);n.a},"4e02":function(t,e,a){"use strict";var s=a("9d3e"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),a("router-link",{attrs:{to:"/taskboard"}},[t._v("Task Board")]),t._v("| "),a("router-link",{attrs:{to:"/induction"}},[t._v("Induct Projection")]),t._v("| "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},c=[],l=(a("034f"),a("2877")),i={},r=Object(l["a"])(i,n,c,!1,null,null,null),d=r.exports,o=(a("d3b7"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to DML2"}})],1)},b=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},p=[],v={name:"HelloWorld",props:{msg:String}},h=v,m=(a("3823"),Object(l["a"])(h,f,p,!1,null,"6e5887d6",null)),j=m.exports,g={name:"home",components:{HelloWorld:j}},C=g,_=Object(l["a"])(C,u,b,!1,null,null,null),k=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",[a("h1",[t._v("AA's")]),a("div",{ref:"cardBank",staticClass:"flex-container placeable"},[a("Card",{attrs:{associate:{name:"Hello World",login:"helwor",workdays:"Mon-Fri"}}})],1)])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{attrs:{title:"Stow"}},[a("caption",[a("h1",[t._v("Stow Path")])]),a("tr",[a("th",[t._v("Stow")]),a("th",[t._v("A")]),a("th",[t._v("B")]),a("th",[t._v("C")]),a("th",[t._v("D")]),a("th",[t._v("E")]),a("th",[t._v("G")]),a("th",[t._v("H")]),a("th",[t._v("J")])]),a("tr",[a("th",[t._v("1-2")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("3-4")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("5-6")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("7-8")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("9-10")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("Divert")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"not-available"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"},[a("caption",[t._v(" floor ")])]),a("td",{staticClass:"placeable"},[a("caption",[t._v(" dock ")])]),a("td",{staticClass:"not-available"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("Stage")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("Stage")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})])]),a("table",[a("caption",[a("h1",[t._v("Dock")])]),a("tr",[a("th"),a("th",[t._v("Belt 1")]),a("th",[t._v("Belt 2")]),a("th",[t._v("Belt 3")]),a("th",[t._v("Belt 4")]),a("th",[t._v("Belt 5")])]),a("tr",[a("th",[t._v("Unload")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("Induct")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("Divert")]),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"}),a("td",{staticClass:"placeable"})]),a("tr",[a("th",[t._v("Water Spider")]),a("td",{attrs:{colspan:"5"}})])])])}],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"draggable",rawName:"v-draggable",value:t.draggableValue,expression:"draggableValue"}],staticClass:"card"},[t._v(" Name: "+t._s(t.associate.info.name)+" "),a("br"),t._v(" Login: "+t._s(t.associate.login)+" ")])},D=[],T=a("a27f"),I={name:"card",props:["associate"],directives:{Draggable:T["Draggable"]},data:function(){return{draggableValue:{handle:void 0,onDragEnd:this.onDragEnd}}},methods:{onDragEnd:function(t,e,a){for(var s=!1,n=document.elementsFromPoint(a.clientX,a.clientY),c=0;c<n.length;c++){var l=n[c];l.classList.contains("placeable")&&(l.appendChild(this.$el),s=!0)}this.$el.style.position="inherit",s||(this.draggableValue.position=e-t)}}},x=I,z=(a("3fa5"),Object(l["a"])(x,R,D,!1,null,"261de33d",null)),S=z.exports,P=s["a"].extend(S),E=a("bc3a").default,O={name:"task-board",components:{Card:S},data:function(){return{associate:{name:"Hello World",login:"helworl",workdays:"mon-fri"},laneslots:["1-2","3-4","5-6","7-8","9-10"]}},created:function(){this.getAssociateData()},methods:{getAssociateData:function(){var t=this;E.get("http://localhost:8000/associates").then((function(e){console.log(e);for(var a=e.data,s=0;s<a.length;s++){console.log("Creating "+a[s].login);var n=new P({propsData:{associate:a[s]}});n.$mount(),t.$refs.cardBank.appendChild(n.$el)}}))}}},A=O,B=(a("4e02"),Object(l["a"])(A,w,y,!1,null,"6f0ce3fd",null)),L=B.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.inductionStarted,expression:"inductionStarted"}]},[a("h1",[t._v("Estimated Time Completed: "+t._s(t.estimatedTimeComplete))])]),a("hr"),a("div",[t._v(" Total Packages: "),a("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.totalPackages,expression:"totalPackages",modifiers:{number:!0,lazy:!0}}],attrs:{type:"text"},domProps:{value:t.totalPackages},on:{change:[function(e){t.totalPackages=t._n(e.target.value)},function(e){return t.updateTotalPackages(t.totalPackages)}],blur:function(e){return t.$forceUpdate()}}})]),a("div",[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.inductionStarted,expression:"!inductionStarted"}],on:{click:function(e){return t.beginInduction()}}},[t._v(" Begin Induction ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.inductionStarted,expression:"inductionStarted"}]},[a("div",[t._v(" Induct Rate: "),a("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.inductRate,expression:"inductRate",modifiers:{number:!0,lazy:!0}}],attrs:{type:"text",onclick:"this.select()"},domProps:{value:t.inductRate},on:{change:function(e){t.inductRate=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),a("button",{on:{click:function(e){return t.addInductRate(t.inductRate)}}},[t._v("Add Rate")]),a("br"),t._v("Total Inducted "),a("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.totalInducted,expression:"totalInducted",modifiers:{number:!0,lazy:!0}}],attrs:{type:"text"},domProps:{value:t.totalInducted},on:{change:function(e){t.totalInducted=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),a("button",{on:{click:function(e){return t.calculateEstimatedTime()}}},[t._v("Update")])]),a("hr"),a("div",[t._v(" Average Overall Rate: "+t._s(t.getAverageRate())+" "),a("br"),t._v(" Projected Inducted: "+t._s(t.projectedInducted)+" "),a("br"),t._v(" Actual Inducted: "+t._s(t.totalInducted)+" "),a("br"),t._v(" Difference: "+t._s(t.inductDifference)+" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.inductDifference>0,expression:"inductDifference > 0"}]},[t._v("Increase Induct Rate")])]),a("hr"),a("div",[t._v(" Ignore Rates Before: "),a("datetime",{attrs:{type:"datetime"},model:{value:t.ignoreRatesBefore,callback:function(e){t.ignoreRatesBefore=e},expression:"ignoreRatesBefore"}})],1),t._m(0),a("line-chart",{ref:"linechart",attrs:{data:t.chartData,min:0,label:"Average Rate"}})],1),a("hr")])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Average Rates")])])}],M=(a("13d5"),a("0d03"),a("a9e3"),a("9129"),a("d842")),H=a("30ef"),U=a.n(H),V=a("859b");s["a"].use(M["a"].use(U.a));var W={name:"induction-projection",components:{datetime:V["DateTime"]},data:function(){return{totalPackages:0,inductRates:[],totalInducted:0,inductRate:0,today:new Date,estimatedTimeComplete:(new Date).toLocaleTimeString(),projectedInducted:0,projectedLeft:0,actualLeft:0,inductDifference:0,inductionStarted:!1,chartData:[{name:"Rates",data:{}},{name:"Average Rate",data:{}}],startTime:null,ignoreRatesBelow:0,ignoreRatesBefore:null}},methods:{beginInduction:function(){this.inductionStarted=!0,this.startTime=new Date,this.ignoreRatesBefore=new Date},calculateEstimatedTime:function(){this.updateInducteLeftValues();var t=new Date;if(this.inductRates.length>2){var e=this.minutesRemaining();t.setMinutes(t.getMinutes()+e)}this.estimatedTimeComplete=t.toLocaleTimeString();var a=(new Date).toLocaleTimeString();this.chartData[1]["data"][a]=this.getAverageRate(),this.chartData[0]["data"][(new Date).toLocaleTimeString()]=this.inductRates[this.inductRates.length-1].rate,this.$refs.linechart.updateChart()},getAverageRate:function(){var t=0,e=new Date(this.ignoreRatesBefore),a=this.inductRates.reduce((function(a,s){return s.time>=e?(t++,a+s.rate):a}),0);return 0==t?0:Math.round(a/t)},addInductRate:function(t){this.inductRates.push({rate:t,time:(new Date).getTime(),elapsed:0==this.inductRates?0:(new Date).getTime()-this.inductRates[this.inductRates.length-1]}),this.calculateEstimatedTime()},minutesRemaining:function(){var t=this.getAverageRate();return Number.isNaN(t)?0:this.actualLeft/t*60},updateTotalPackages:function(t){this.totalPackages=t,this.updateInducteLeftValues()},updateInducteLeftValues:function(){this.projectedInducted=Math.round(this.getAverageRate()/60/60/1e3*(new Date-this.startTime)),this.actualLeft=this.totalPackages-this.totalInducted,this.inductDifference=this.projectedInducted-this.totalInducted},totalInductedChanged:function(t){var e,a=this;clearInterval(e),e=setTimeout((function(){a.calculateEstimatedTime()}),1e3)},getNiceTime:function(t){var e=new Date(t);return e.toLocaleTimeString()}}},q=W,F=(a("4a3c"),Object(l["a"])(q,$,N,!1,null,"69459b90",null)),G=F.exports;s["a"].use(o["a"]);var J=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/taskboard",name:"taskboard",component:L},{path:"/induction",name:"induction-projection",component:G}],X=new o["a"]({routes:J}),Y=X,K=a("2f62");s["a"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:Y,store:Q,render:function(t){return t(d)}}).$mount("#app")},7610:function(t,e,a){},"782e":function(t,e,a){},"85ec":function(t,e,a){},"9d3e":function(t,e,a){}});
//# sourceMappingURL=app.9881b02c.js.map