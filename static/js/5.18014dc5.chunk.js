(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{327:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return g}));var n=t(8),r=t(3),o=t(0),s=t.n(o),i=t(330),l=t.n(i),c=t(158),m=function(e){var a=e.input,t=e.meta,o=t.touched,i=t.error,c=e.controlType,m=Object(r.a)(e,["input","meta","controlType"]),g=o&&i;return s.a.createElement("div",{className:l.a.formControl+" "+(g?l.a.error:"")},s.a.createElement(c,Object(n.a)({},a,{},m)),g&&s.a.createElement("span",null,i))},g=function(e,a,t,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return s.a.createElement("div",null,s.a.createElement(c.a,Object.assign({placeholder:e,name:a,component:n,controlType:r,validate:t,type:o},i)),l)}},328:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},r=function(e){return function(a){if(a&&a.length>e)return"\u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u0430 "+e+" \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}}},330:function(e,a,t){e.exports={formControl:"FormsControls_formControl__1Wfj3",error:"FormsControls_error__2_D7_",formError:"FormsControls_formError__36Lbt"}},350:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1iKDV",dialogsItems:"Dialogs_dialogsItems__4zTg0",activeLink:"Dialogs_activeLink__32FVJ",dialog:"Dialogs_dialog__3-qaq",messages:"Dialogs_messages__2Olku",sendMessage:"Dialogs_sendMessage__35Jk3",textAreaWidthAuto:"Dialogs_textAreaWidthAuto__25Oxq",border:"Dialogs_border__1uG36"}},351:function(e,a,t){e.exports={activeLink:"DialogItem_activeLink__3FxEh",dialog:"DialogItem_dialog__vmEVD",imgDialog:"DialogItem_imgDialog__1DXaM",name:"DialogItem_name__2i5LR"}},352:function(e,a,t){e.exports={messages:"Message_messages__2_j6-",message:"Message_message__3vcQC",border:"Message_border__1_onV"}},433:function(e,a,t){"use strict";t.r(a);var n=t(101),r=t(0),o=t.n(r),s=t(350),i=t.n(s),l=t(351),c=t.n(l),m=t(27),g=function(e){return o.a.createElement("div",{className:c.a.dialog},o.a.createElement(m.b,{to:"/dialogs/"+e.id,activeClassName:c.a.activeLink},o.a.createElement("img",{src:e.imgSrc,className:c.a.imgDialog})," ",o.a.createElement("div",{className:c.a.name},e.name)))},u=t(352),d=t.n(u),_=function(e){var a=e.message;return o.a.createElement("div",{className:d.a.message+" "+d.a.border},a)},f=t(38),v=t(158),b=t(159),E=t(327),p=t(328),h=Object(p.a)(300),D=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(v.a,{component:E.a,controlType:"textarea",className:i.a.textAreaWidthAuto,name:"newMessageBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",validate:[p.b,h]}),o.a.createElement("div",null,o.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),M=function(e){var a=e.dialogsPage.dialogs.map((function(e){return o.a.createElement(g,{name:e.name,key:e.id,id:e.id,imgSrc:e.imgSrc})})),t=e.dialogsPage.messages.map((function(e){return o.a.createElement(_,{message:e.message,key:e.id,id:e.id})}));return e.isAuth?o.a.createElement("div",{className:i.a.dialogs},o.a.createElement("div",{className:i.a.dialogsItems+" "+i.a.border},a),o.a.createElement("div",{className:i.a.messages},o.a.createElement("div",{className:i.a.border},t),o.a.createElement("div",{className:i.a.sendMessage+" "+i.a.border},o.a.createElement(D,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))):o.a.createElement(f.a,{to:"/login"})},N=t(34),k=function(e){return{isAuth:e.auth.isAuth}},y=t(32),A=(t(69),function(e){return e.dialogsPage});a.default=Object(y.d)(Object(N.b)((function(e){return{dialogsPage:A(e)}}),{addMessage:n.a}),(function(e){return Object(N.b)(k)((function(a){return a.isAuth?o.a.createElement(e,a):o.a.createElement(f.a,{to:"/login"})}))}))(M)}}]);
//# sourceMappingURL=5.18014dc5.chunk.js.map