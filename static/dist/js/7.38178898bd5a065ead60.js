(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"343r":function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"nested-pie"}})},o=[]},AsgH:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"process-card"},t._l(t.data,(function(n,a){return e("div",{key:a,staticClass:"single-process"},[e("div",{staticClass:"num-process",style:{background:n.background,color:n.color}},[t._v(t._s(a+1))]),t._v(" "),e("div",{staticClass:"content-process"},[t._v(t._s(n.info))])])})),0)},o=[]},CWmS:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"process-card",props:{data:{type:Array,default:function(){return[]}}}}},IIpc:function(t,n,e){},cQSq:function(t,n,e){t.exports=e("lzse")(1163)},hlyK:function(t,n,e){"use strict";e.r(n);var a=e("tG5x"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n.default=o.a},jpbe:function(t,n,e){"use strict";e.r(n);var a=e("343r"),o=e("tZDy");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);var r=e("KHd+"),c=Object(r.a)(o.default,a.a,a.b,!1,null,"1ab047d6",null);n.default=c.exports},lE7b:function(t,n,e){"use strict";e.r(n);var a=e("CWmS"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n.default=o.a},lFGU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("kXyF"),o=e("cQSq");n.default={name:"nested-pie",props:{pieData:{type:Object,default:function(){return{}}},height:{type:Number,default:240},navToggle:{type:Boolean,default:!1}},data:function(){return{chart:null}},watch:{navToggle:{handler:function(t,n){var e=this;this.chart&&setTimeout((function(){e.chart.forceFit()}),200)},immediate:!0}},mounted:function(){this.initChart()},methods:{initChart:function(){var t=this,n=new o.DataView;n.source(t.pieData.data).transform({type:"percent",field:t.pieData.metric,dimension:t.pieData.legend,as:"percent"});var e=new a.Chart({container:"nested-pie",autoFit:!0,height:t.height});t.chart=e,e.data(n.rows),e.scale({percent:{formatter:function(t){return t=(100*t).toFixed(2)+"%"}}}),e.coordinate("theta",{radius:.6}),e.tooltip({showTitle:!1,showMarkers:!1}),e.legend({position:"right"}),e.interval().adjust("stack").position("percent").color(t.pieData.legend,["#5890ED","#5AD8A6","#5D7092"]).tooltip(t.pieData.legend+"*percent",(function(t,n){return{name:t,value:n=(100*n).toFixed(2)+"%"}})).style({lineWidth:1,stroke:"#fff"});var i=e.createView(),r=new o.DataView;r.source(t.pieData.data).transform({type:"percent",field:t.pieData.metric,dimension:t.pieData.dimension,as:"percent"}),i.data(r.rows),i.scale({percent:{formatter:function(t){return t=(100*t).toFixed(2)+"%"}}}),i.coordinate("theta",{innerRadius:.75/.9,radius:.9}),i.interval().adjust("stack").position("percent").color(t.pieData.dimension,["#8FB9FE","#A3B2FB","#9FE2C7","#78C270","#7585A2"]).tooltip(t.pieData.dimension+"*percent",(function(t,n){return{name:t,value:n=(100*n).toFixed(2)+"%"}})).style({lineWidth:1,stroke:"#fff"}),e.interaction("element-highlight"),e.render()}}}},nOgr:function(t,n,e){"use strict";e.r(n);var a=e("xnQX"),o=e("hlyK");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("uRL4");var r=e("KHd+"),c=Object(r.a)(o.default,a.a,a.b,!1,null,"7159cf95",null);n.default=c.exports},tG5x:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=u(e("m1cH")),o=u(e("6TWv")),i=u(e("Tbga")),r=u(e("jpbe")),c=u(e("jaUu")),s=u(e("+U2P")),l=u(e("x8Hl"));function u(t){return t&&t.__esModule?t:{default:t}}n.default={name:"home-third",components:{ProcessCard:l.default,Card:o.default,JobLine:i.default,NestedPie:r.default,StatsCard:c.default,DisplayCard:s.default},data:function(){return{btnDays:"7",cardList1:[{num:2014,name:"作业名称",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"作业名称解释，tooltips位置视情况调试",color:"rgba(58, 132, 255, 0.8)",background:"rgba(58, 132, 255, 0.3)"},{num:2046,name:"业务名称",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"",color:"rgba(58, 132, 255, 0.8)",background:"rgba(58, 132, 255, 0.3)"},{num:1024,name:"实例名称",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"",color:"rgba(58, 132, 255, 0.8)",background:"rgba(58, 132, 255, 0.3)"}],cardList2:[{num:2046,name:"业务名称",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"",color:"rgba(58, 132, 255, 0.8)",background:"rgba(58, 132, 255, 0.3)"},{num:1024,name:"实例名称",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"试",color:"rgba(58, 132, 255, 0.8)",background:"rgba(58, 132, 255, 0.3)"}],lineData:{data:[],dimension:"month",metric:"value",legend:"name",isArea:!0},tendData:{7:[{name:"作业一",month:"1st",value:1300},{name:"作业一",month:"2nd",value:200},{name:"作业一",month:"3rd",value:600},{name:"作业一",month:"4th",value:500},{name:"作业一",month:"5th",value:400},{name:"作业二",month:"1st",value:800},{name:"作业二",month:"2nd",value:600},{name:"作业二",month:"3rd",value:1100},{name:"作业二",month:"4th",value:300},{name:"作业二",month:"5th",value:1e3}],15:[{name:"作业一",month:"6th",value:300},{name:"作业一",month:"9th",value:1200},{name:"作业一",month:"13th",value:600},{name:"作业一",month:"14th",value:500},{name:"作业一",month:"15th",value:400},{name:"作业二",month:"6th",value:200},{name:"作业二",month:"9th",value:1600},{name:"作业二",month:"13th",value:1100},{name:"作业二",month:"14th",value:700},{name:"作业二",month:"15th",value:1e3}],30:[{name:"作业一",month:"17th",value:1300},{name:"作业一",month:"20th",value:200},{name:"作业一",month:"23th",value:800},{name:"作业一",month:"27th",value:500},{name:"作业一",month:"29th",value:1400},{name:"作业二",month:"17th",value:800},{name:"作业二",month:"20th",value:600},{name:"作业二",month:"23th",value:400},{name:"作业二",month:"27th",value:1300},{name:"作业二",month:"29th",value:1e3}]},pieData:{data:[{value:50,type:"类型1",name:"类型1-1"},{value:30,type:"类型1",name:"类型1-2"},{value:10,type:"类型2",name:"类型2-1"},{value:8,type:"类型2",name:"类型2-2"},{value:2,type:"类型3",name:"类型3-1"}],dimension:"name",metric:"value",legend:"type"},processData:[{info:"最重要的配置前提提示信息，卡片内只放主要信息。。",color:"#EA3636",background:"#FFDDDD"},{info:"次重要配置前提提示信息，字数控制在1-2行。",color:"#FF9C01",background:"#FFE8C3"},{info:"次要的配置提示信息，或操作指引步骤。。",color:"#3A84FF",background:"#E1ECFF"},{info:"其他信息。点击“查看详情”展开抽屉，显示具体配置或操作信息详情。",color:"#979BA5",background:"#F0F1F5"}],jobInfo:[{num:2046,name:"成功",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"",color:"#2DCB56"},{num:1024,name:"异常",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"",color:"#FF8000"},{num:4068,name:"进行中",icon:"iconfont icon-mianxingtubiao-zuoyejiankongdaping",info:"",color:"#3A84FF"}]}},watch:{btnDays:{handler:function(t){var n;(n=this.lineData.data).splice.apply(n,[0,this.lineData.data.length].concat((0,a.default)(this.tendData[t])))},immediate:!0}},created:function(){var t;(t=this.lineData.data).splice.apply(t,[0,this.lineData.data.length].concat((0,a.default)(this.tendData[this.btnDays])))},methods:{handleMoreInfo:function(){console.log("查看详情")},handleAddJob:function(){console.log("作业模块添加")},cardClick:function(){console.log("card click")}}}},tZDy:function(t,n,e){"use strict";e.r(n);var a=e("lFGU"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n.default=o.a},uRL4:function(t,n,e){},x8Hl:function(t,n,e){"use strict";e.r(n);var a=e("AsgH"),o=e("lE7b");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("IIpc");var r=e("KHd+"),c=Object(r.a)(o.default,a.a,a.b,!1,null,"0bc6422b",null);n.default=c.exports},xnQX:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home-third"}},[e("bk-container",{attrs:{flex:"",col:12,gutter:16,"ext-cls":"home-container"}},[e("bk-row",[e("bk-col",{attrs:{span:6}},[e("Card",{staticStyle:{padding:"0 0"},attrs:{"show-border":!1,"background-color":"inherit","show-header":!1}},[e("template",{slot:"content"},[e("stats-card",{attrs:{"card-list":t.cardList1,"display-direction":"vertical",shape:"hexagon"},on:{"card-click":t.cardClick}})],1)],2)],1),t._v(" "),e("bk-col",{attrs:{span:3}},[e("Card",{staticStyle:{padding:"0 0"},attrs:{"show-border":!1,"background-color":"inherit","show-header":!1}},[e("template",{slot:"content"},[e("stats-card",{staticStyle:{height:"230px"},attrs:{"card-list":t.cardList2,"show-vertical":!0,shape:"hexagon"}})],1)],2)],1),t._v(" "),e("bk-col",{attrs:{span:3}},[e("Card",{staticStyle:{height:"230px"},attrs:{title:"操作步骤指引"}},[e("template",{slot:"header"},[e("bk-button",{attrs:{text:!0,title:"primary","ext-cls":"font-btn"},on:{click:t.handleMoreInfo}},[t._v("查看详情\n                        ")])],1),t._v(" "),e("template",{slot:"content"},[e("process-card",{attrs:{data:t.processData}})],1)],2)],1)],1),t._v(" "),e("bk-row",[e("bk-col",{attrs:{span:6}},[e("Card",{attrs:{title:"作业类型分布"}},[e("template",{slot:"content"},[e("nested-pie",t._b({attrs:{height:300,"pie-data":t.pieData}},"nested-pie",t.$attrs,!1))],1)],2)],1),t._v(" "),e("bk-col",{attrs:{span:6}},[e("Card",{staticStyle:{padding:"16px 0"},attrs:{"show-header":!1}},[e("template",{slot:"content"},[e("bk-exception",{attrs:{type:"empty",scene:"part","ext-cls":"job-exception"}},[e("span",[t._v("暂无作业数据，请去")]),t._v(" "),e("bk-button",{attrs:{text:!0,"ext-cls":"job-btn"},on:{click:t.handleAddJob}},[t._v("作业模块添加\n                            ")])],1),t._v(" "),e("display-card",{staticStyle:{"padding-top":"13px","border-top":"1px solid #DCDEE5"},attrs:{"card-list":t.jobInfo,"show-icon":!1,height:78}})],1)],2)],1)],1),t._v(" "),e("bk-row",[e("bk-col",{attrs:{span:0}},[e("Card",{attrs:{title:"作业趋势图"}},[e("template",{slot:"header"},[e("div",{staticClass:"bk-button-group"},[e("bk-button",{class:"7"===t.btnDays?"is-selected":"",attrs:{size:"small"},on:{click:function(n){t.btnDays="7"}}},[t._v("\n                                近7天\n                            ")]),t._v(" "),e("bk-button",{class:"15"===t.btnDays?"is-selected":"",attrs:{size:"small"},on:{click:function(n){t.btnDays="15"}}},[t._v("\n                                近15天\n                            ")]),t._v(" "),e("bk-button",{class:"30"===t.btnDays?"is-selected":"",attrs:{size:"small"},on:{click:function(n){t.btnDays="30"}}},[t._v("\n                                近30天\n                            ")])],1)]),t._v(" "),e("template",{slot:"content"},[e("job-line",t._b({attrs:{"line-data":t.lineData}},"job-line",t.$attrs,!1))],1)],2)],1)],1)],1)],1)},o=[]}}]);
//# sourceMappingURL=7.38178898bd5a065ead60.js.map