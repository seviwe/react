(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{103:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n(22),r=n(8),i=n(23),c={dialogs:[{id:1,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",imgSrc:i.a.getAvatarImage(0)},{id:2,name:"\u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430",imgSrc:i.a.getAvatarImage(1)},{id:3,name:"\u0416\u0435\u043d\u044f",imgSrc:i.a.getAvatarImage(3)},{id:4,name:"\u0410\u043d\u0434\u0440\u0435\u0439",imgSrc:i.a.getAvatarImage(4)},{id:5,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",imgSrc:i.a.getAvatarImage(2)},{id:6,name:"\u041c\u0430\u0440\u0438\u044f",imgSrc:i.a.getAvatarImage(1)}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0448\u044c\u0441\u044f?"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:e.messages.length+1,message:t.newMessageBody}])});default:return e}},s=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}}},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e.friendsPage.friends}},115:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(16),c=n(22),o=n(8),s=n(17),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)({},e,{},a):e}))};n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return S})),n.d(t,"d",(function(){return w}));var l="antiVK/users/FOLLOW",f="antiVK/users/UNFOLLOW",d="antiVK/users/SET_USERS",m="antiVK/users/SET_CURR_PAGE",p={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)({},e,{users:u(e.users,t.userId,"id",{followed:!0})});case f:return Object(o.a)({},e,{users:u(e.users,t.userId,"id",{followed:!1})});case d:return Object(o.a)({},e,{users:t.users});case m:return Object(o.a)({},e,{currentPage:t.currentPage});case"antiVK/users/SET_TOTAL_USERS_COUNT":return Object(o.a)({},e,{totalUsersCount:t.count});case"antiVK/users/TOGGLE_IS_FETCHING":return Object(o.a)({},e,{isFetching:t.isFetching});case"antiVK/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},h=function(e){return{type:l,userId:e}},E=function(e){return{type:f,userId:e}},b=function(e){return{type:m,currentPage:e}},v=function(e){return{type:"antiVK/users/TOGGLE_IS_FETCHING",isFetching:e}},_=function(e,t){return{type:"antiVK/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},O=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(v(!0)),n.next=3,s.d.getUsers(e,t);case 3:i=n.sent,a(v(!1)),a((r=i.items,{type:d,users:r})),a({type:"antiVK/users/SET_TOTAL_USERS_COUNT",count:i.totalCount});case 7:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(i(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,s.d.followUser.bind(e),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,s.d.unfollowUser.bind(e),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},120:function(e,t,n){e.exports=n.p+"static/media/preloader.52d81aac.svg"},121:function(e,t,n){e.exports={preloader:"Preloader_preloader__2HO6_"}},134:function(e,t,n){e.exports={navfriends:"Friend_navfriends__352Vk",navfriendsGrid:"Friend_navfriendsGrid__2C55u",friend:"Friend_friend__2zs29"}},135:function(e,t,n){e.exports={NavbarMusic:"NavbarMusic_NavbarMusic__3jfXr"}},17:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n(116),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b19640f8-e1c6-4c7e-b9f4-4fc65e7a380e"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page="+e+"&count="+t).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/"+e).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/"+e).then((function(e){return e.data}))}},c={getProfileUser:function(e){if(e)return r.get("profile/"+e).then((function(e){return e.data}))},getStatusUser:function(e){if(e)return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatusUser:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},o={getMe:function(){return r.get("auth/me")},getPhotoAuthUser:function(e){return r.get("profile/"+e).then((function(e){return e.data.photos.small}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},188:function(e,t,n){e.exports=n(277)},19:function(e,t,n){e.exports={nav:"Navbar_nav__1Udoi",item:"Navbar_item__1IIwC",activeLink:"Navbar_activeLink__4pqbA"}},23:function(e,t,n){"use strict";t.a={_image:{img:[{id:1,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF"},{id:2,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg"},{id:3,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPg3XBAD7Y_OBK42lSSsE6EmstHQFwDhos9-_U7qalNs8azhSk"},{id:4,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKs6g39CeptLQsVJ2m_w7Ib6RsPCuJuUsUsMq9aafQGVB9hhsg"},{id:5,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV"}]},getAvatarImage:function(e){return this._image.img[e].src}}},274:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);n(94),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(32),r=n(87),i=n(103),c=n(72),o=n(115),s=n(45),u=n(117),l=n(114),f=n(8),d={init:!1,isAuth:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INIT":return Object(f.a)({},e,{init:!0});default:return e}},p=Object(a.c)({profilePage:r.e,dialogsPage:i.b,friendsPage:c.a,usersPage:o.e,auth:s.a,form:l.a,app:m}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,h=Object(a.e)(p,g(Object(a.a)(u.a))),E=n(0),b=n.n(E),v=n(11),_=n.n(v),O=n(34),y=n(38),S=(n(274),n(71)),w=n(54),I=n(14),k=n(312),j=n(18),N=n(7),T=n(319),A=n(320),P=n(318),C=n(321),L=n(324),x=n(317),U=n(323),K=n(286),D=n(123),V=n.n(D),G=n(122),R=n.n(G),F=n(78),z=n.n(F),H=n(79),M=n.n(H),B=n(125),q=n.n(B),W=n(39),Q=n.n(W),J=n(322),Y=n(325),X=n(315),Z=n(124),$=n.n(Z),ee=Object(k.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(I.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(I.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(I.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(I.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(I.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),smallAvatar:{width:e.spacing(3),height:e.spacing(3)},orangeAvatar:{color:e.palette.getContrastText(X.a[500]),backgroundColor:X.a[500]}}})),te=Object(N.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px #3f51b5","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(x.a),ne=function(e){var t=ee(),n=b.a.useState(null),a=Object(w.a)(n,2),r=a[0],i=a[1],c=b.a.useState(null),o=Object(w.a)(c,2),s=o[0],u=o[1],l=Boolean(r),f=Boolean(s),d=function(e){i(e.currentTarget)},m=function(){u(null)},p=function(){i(null),m()},g="primary-search-account-menu",h=b.a.createElement(K.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:p},b.a.createElement(U.a,{onClick:p},b.a.createElement("a",{className:Q.a.noneHref},"Item 1")),b.a.createElement(U.a,{onClick:p},b.a.createElement("a",{className:Q.a.noneHref},"Item 2")),b.a.createElement(U.a,{onClick:p},b.a.createElement("a",{className:Q.a.noneHref},"Item 3")),b.a.createElement(U.a,{onClick:p},b.a.createElement("a",{className:Q.a.noneHref},"Item 4"))),E=b.a.createElement(K.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:m},b.a.createElement(U.a,null,b.a.createElement(P.a,{"aria-label":"show 0 new mails",color:"inherit"},b.a.createElement(x.a,{badgeContent:0,color:"secondary"},b.a.createElement(z.a,null))),b.a.createElement("p",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),b.a.createElement(U.a,null,b.a.createElement(P.a,{"aria-label":"show 0 new notifications",color:"inherit"},b.a.createElement(x.a,{badgeContent:0,color:"secondary"},b.a.createElement(M.a,null))),b.a.createElement("p",null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")),b.a.createElement(U.a,{onClick:d},b.a.createElement(P.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},b.a.createElement(R.a,null)),b.a.createElement("p",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")));return b.a.createElement("div",{className:t.grow+" "+Q.a.header},b.a.createElement(T.a,{position:"static"},b.a.createElement(A.a,null,b.a.createElement(C.a,{className:t.title,variant:"h6",noWrap:!0},b.a.createElement("a",{href:"http://localhost:3000/profile",className:Q.a.logoText},"AntiVK")),b.a.createElement("div",{className:t.search},b.a.createElement("div",{className:t.searchIcon},b.a.createElement(V.a,null)),b.a.createElement(L.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a...",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),b.a.createElement("div",{className:t.grow}),b.a.createElement("div",null,e.isAuth?b.a.createElement("div",null,b.a.createElement("div",{className:t.sectionDesktop},b.a.createElement(P.a,{"aria-label":"show 2 new mails",color:"inherit"},b.a.createElement(x.a,{badgeContent:0,color:"secondary"},b.a.createElement(z.a,null))),b.a.createElement(P.a,{"aria-label":"show 1 new notifications",color:"inherit"},b.a.createElement(x.a,{badgeContent:0,color:"secondary"},b.a.createElement(M.a,null))),b.a.createElement(P.a,{edge:"end","aria-label":"account of current user","aria-controls":g,"aria-haspopup":"true",onClick:d,color:"inherit"},e.profile&&b.a.createElement("span",{className:Q.a.loginName},e.login),b.a.createElement("div",null,!e.photo&&b.a.createElement(Y.a,null,"VA"),e.photo&&b.a.createElement(te,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},b.a.createElement(Y.a,{alt:"avatar",src:e.photo})))),b.a.createElement(P.a,{color:"default","aria-label":"upload picture",component:"span",onClick:function(){e.logout()}},b.a.createElement($.a,null))),b.a.createElement("div",{className:t.sectionMobile},b.a.createElement(P.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},b.a.createElement(q.a,null)))):b.a.createElement(J.a,{variant:"contained",href:"/login"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")))),E,h)},ae=n(55),re=n(93),ie=Object(O.b)((function(e){return{isAuth:Object(ae.b)(e),login:Object(ae.c)(e),userId:Object(ae.e)(e),profile:Object(re.c)(e),photo:Object(ae.d)(e)}}),{logout:s.d})((function(e){return b.a.createElement(ne,e)})),ce=n(19),oe=n.n(ce),se=n(28),ue=n(127),le=n.n(ue),fe=n(128),de=n.n(fe),me=n(129),pe=n.n(me),ge=n(132),he=n.n(ge),Ee=n(130),be=n.n(Ee),ve=n(131),_e=n.n(ve),Oe=n(133),ye=n.n(Oe),Se=function(e){return b.a.createElement("nav",{className:oe.a.nav},b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/profile",activeClassName:oe.a.activeLink},b.a.createElement(le.a,{fontSize:"small"}),"  \u041f\u0440\u043e\u0444\u0438\u043b\u044c")),b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/dialogs",activeClassName:oe.a.activeLink},b.a.createElement(de.a,{fontSize:"small"}),"  \u0414\u0438\u0430\u043b\u043e\u0433\u0438")),b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/friends",activeClassName:oe.a.activeLink},b.a.createElement(pe.a,{fontSize:"small"}),"  \u0414\u0440\u0443\u0437\u044c\u044f")),b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/news",activeClassName:oe.a.activeLink},b.a.createElement(be.a,{fontSize:"small"}),"  \u041b\u0435\u043d\u0442\u0430")),b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/music",activeClassName:oe.a.activeLink},b.a.createElement(_e.a,{fontSize:"small"}),"  \u041c\u0443\u0437\u044b\u043a\u0430")),b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/users",activeClassName:oe.a.activeLink},b.a.createElement(he.a,{fontSize:"small"}),"  \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),b.a.createElement("br",null),b.a.createElement("div",{className:oe.a.item},b.a.createElement(se.b,{to:"/settings",activeClassName:oe.a.activeLink},b.a.createElement(ye.a,{fontSize:"small"}),"  \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))},we=n(67),Ie=n.n(we),ke=n(134),je=n.n(ke),Ne=function(e){return b.a.createElement("div",{className:je.a.friend},b.a.createElement("img",{src:e.imgSrc})," ",e.name)},Te=function(e){var t=e.friendsPage.map((function(e){return b.a.createElement(Ne,{name:e.name,key:e.id,id:e.id,imgSrc:e.imgSrc})}));return b.a.createElement("div",{className:Ie.a.navfriends},"Friends ",b.a.createElement("span",{className:Ie.a.quantityFriends},e.friendsPage.length),b.a.createElement("div",{className:Ie.a.navfriendsGrid},t))},Ae=n(113),Pe=Object(O.b)((function(e){return{friendsPage:Object(Ae.a)(e)}}))(Te),Ce=n(135),Le=n.n(Ce),xe=function(){return b.a.createElement("div",{className:Le.a.NavbarMusic},"Music",b.a.createElement("ul",null,b.a.createElement("li",null,"Item 1"),b.a.createElement("li",null,"Item 2"),b.a.createElement("li",null,"Item 3"),b.a.createElement("li",null,"Item 4"),b.a.createElement("li",null,"Item 5")))},Ue=n(82),Ke=n.n(Ue),De=function(){return b.a.createElement("footer",{className:Ke.a.footer},b.a.createElement("div",{className:Ke.a.logo},"AntiVK 2020"))},Ve=b.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,434))})),Ge=b.a.lazy((function(){return n.e(11).then(n.bind(null,426))})),Re=b.a.lazy((function(){return n.e(12).then(n.bind(null,427))})),Fe=b.a.lazy((function(){return n.e(13).then(n.bind(null,428))})),ze=b.a.lazy((function(){return Promise.all([n.e(10),n.e(8)]).then(n.bind(null,435))})),He=b.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,432))})),Me=b.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,437))})),Be=b.a.lazy((function(){return n.e(9).then(n.bind(null,436))})),qe=Object(a.d)(y.g,Object(O.b)((function(e){return{init:e.app.init}}),{initApp:function(){return function(e){var t=e(Object(s.c)());Promise.all([t]).then((function(){e({type:"SET_INIT"})}))}}}))((function(e){return Object(E.useEffect)((function(){e.initApp()}),[e.initApp]),e.init?b.a.createElement("div",{className:"backColor"},b.a.createElement("div",{className:"app-wrapper"},b.a.createElement(ie,null),b.a.createElement(Se,null),b.a.createElement(Pe,null),b.a.createElement(xe,null),b.a.createElement("div",{className:"app-wrapper-content"},b.a.createElement(y.d,null,b.a.createElement(E.Suspense,{fallback:b.a.createElement(S.a,null)},b.a.createElement(y.b,{exact:!0,path:"/"},b.a.createElement(y.a,{to:"/profile"})),b.a.createElement(y.b,{path:"/dialogs",render:function(){return b.a.createElement(Ve,null)}}),b.a.createElement(y.b,{path:"/profile/:userId?",render:function(){return b.a.createElement(He,null)}}),b.a.createElement(y.b,{path:"/news",render:function(){return b.a.createElement(Ge,null)}}),b.a.createElement(y.b,{path:"/music",render:function(){return b.a.createElement(Fe,null)}}),b.a.createElement(y.b,{path:"/friends",render:function(){return b.a.createElement(Be,null)}}),b.a.createElement(y.b,{path:"/users",render:function(){return b.a.createElement(ze,null)}}),b.a.createElement(y.b,{path:"/settings",render:function(){return b.a.createElement(Re,null)}}),b.a.createElement(y.b,{path:"/login",render:function(){return b.a.createElement(Me,null)}})))),b.a.createElement(De,null))):b.a.createElement(S.a,null)}));_.a.render(b.a.createElement(se.a,{basename:"/react"},b.a.createElement(O.a,{store:h},b.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,n){e.exports={header:"Header_header__2jH2N",logoText:"Header_logoText__1OafQ",loginName:"Header_loginName__1vq2H",noneHref:"Header_noneHref__1kfeK"}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return E}));var a=n(9),r=n.n(a),i=n(16),c=n(8),o=n(17),s=n(50),u="antiVK/auth/GET_PHOTO",l={userId:null,email:null,login:null,isAuth:!1,photo:null,captchaUrl:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"antiVK/auth/SET_USERS_DATA":case"antiVK/auth/GET_CAPTCHA_URL":case u:return Object(c.a)({},e,{},t.payload);default:return e}},d=function(e,t,n,a){return{type:"antiVK/auth/SET_USERS_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},m=function(e){return{type:"antiVK/auth/GET_CAPTCHA_URL",payload:{captchaUrl:e}}},p=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getMe();case 2:if(0!==(n=e.sent).data.resultCode){e.next=10;break}return a=n.data.data,i=a.id,c=a.email,s=a.login,e.next=7,o.a.getPhotoAuthUser(i);case 7:l=e.sent,t({type:u,payload:{photo:l}}),t(d(i,c,s,!0));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t,n,a){return function(){var c=Object(i.a)(r.a.mark((function i(c){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n,a);case 2:0===(u=r.sent).resultCode?c(p()):(10===u.resultCode&&c(h()),l=u.messages.length>0?u.messages[0]:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u0432\u0435\u0434\u043e\u043c\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",c(Object(s.a)("login",{_error:l})));case 4:case"end":return r.stop()}}),i)})));return function(e){return c.apply(this,arguments)}}()},h=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(m(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o}));var a=function(e){return e.auth.isAuth},r=function(e){if(e.auth)return e.auth.captchaUrl},i=function(e){return e.auth.userId},c=function(e){return e.auth.login},o=function(e){return e.auth.photo}},67:function(e,t,n){e.exports={navfriends:"NavbarFriends_navfriends__3MXTc",navfriendsGrid:"NavbarFriends_navfriendsGrid__TfcAE",friend:"NavbarFriends_friend__1l5-P",quantityFriends:"NavbarFriends_quantityFriends__28eag"}},71:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(120),c=n.n(i),o=n(121),s=n.n(o);t.a=function(e){return r.a.createElement("div",{className:s.a.preloader},r.a.createElement("img",{src:c.a}))}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(23),r={friends:[{id:1,imgSrc:a.a.getAvatarImage(0),name:"\u041c\u0438\u0445\u0430\u0438\u043b",surname:"\u041f\u0430\u0432\u043b\u043e\u0432",status:"\u042f \u0431\u043e\u0441\u0441",location:{country:"\u0420\u043e\u0441\u0441\u0438\u044f",city:"\u041c\u0443\u0440\u043e\u043c"}},{id:2,imgSrc:a.a.getAvatarImage(3),name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",surname:"\u0418\u0432\u0430\u043d\u043e\u0432",status:"\u0412\u043e\u043b\u043a \u0432\u043e\u0435\u0442, \u0430 \u0441\u043e\u0431\u0430\u043a\u0430 \u043b\u0430\u0435\u0442",location:{country:"\u0420\u043e\u0441\u0441\u0438\u044f",city:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440"}},{id:3,imgSrc:a.a.getAvatarImage(1),name:"\u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430",surname:"\u042f\u0441\u043d\u0430\u044f",status:"\u042f \u0437\u0434\u0435\u0441\u044c \u043a\u043e\u0440\u043e\u043b\u044c",location:{country:"\u0420\u043e\u0441\u0441\u0438\u044f",city:"\u041c\u0443\u0440\u043e\u043c"}},{id:4,imgSrc:a.a.getAvatarImage(1),name:"\u0415\u043b\u0435\u043d\u0430",surname:"\u0413\u0440\u0435\u0431\u043d\u0438\u043a\u043e\u0432\u0430",status:"",location:{country:"\u0420\u043e\u0441\u0441\u0438\u044f",city:"\u041c\u043e\u0441\u043a\u0432\u0430"}},{id:5,imgSrc:a.a.getAvatarImage(2),name:"\u0416\u0435\u043d\u044f",surname:"\u041a\u0430\u0437\u0430\u043d\u0441\u043a\u0438\u0439",status:"\u041d\u0435 \u0431\u043e\u0439\u0441\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d",location:{country:"\u0420\u043e\u0441\u0441\u0438\u044f",city:"\u041c\u0443\u0440\u043e\u043c"}},{id:6,imgSrc:a.a.getAvatarImage(4),name:"\u041a\u0438\u0440\u0438\u043b\u043b",surname:"\u042d\u043b\u044c\u043c\u0430\u043d",status:"",location:{country:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430",city:"\u041a\u0438\u0435\u0432"}}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;arguments.length>1&&arguments[1];return e}},82:function(e,t,n){e.exports={footer:"Footer_footer__36Tjx",logo:"Footer_logo__1djo0"}},87:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return b})),n.d(t,"i",(function(){return _})),n.d(t,"h",(function(){return O})),n.d(t,"k",(function(){return y})),n.d(t,"j",(function(){return S})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return I})),n.d(t,"l",(function(){return k})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return N}));var a=n(9),r=n.n(a),i=n(16),c=n(22),o=n(8),s=n(17),u=n(50),l="antiVK/profile/ADD-POST",f="antiVK/profile/SET_USER_STATUS",d="antiVK/profile/SET_LIKE_POST",m="antiVK/profile/UNSET_LIKE_POST",p="antiVK/profile/DEL_POST",g={posts:[{id:1,message:"Hello World!",countLike:20,countDislike:6,userId:7836,setLike:!1,setDislike:!1},{id:2,message:"It's my first post.",countLike:12,countDislike:56,userId:7836,setLike:!1,setDislike:!1},{id:3,message:"Test message",countLike:50,countDislike:0,userId:7836,setLike:!1,setDislike:!1},{id:4,message:"Test message 2",countLike:0,countDislike:1,userId:7836,setLike:!1,setDislike:!1}],profile:null,status:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[{id:e.posts.length+1,message:t.newPostBody,countLike:0,countDislike:0,userId:7836,setLike:!1,setDislike:!1}])});case"antiVK/profile/SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case f:return Object(o.a)({},e,{status:t.status});case d:return Object(o.a)({},e,{posts:e.posts.filter((function(n){return n.id!==t.postId||n.setLike?e.posts:(n.countLike++,n.setLike=!0,Object(o.a)({},n))}))});case"antiVK/profile/SET_DISLIKE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(n){return n.id!==t.postId||n.setDislike?e.posts:(n.countDislike++,n.setDislike=!0,Object(o.a)({},n))}))});case m:return Object(o.a)({},e,{posts:e.posts.filter((function(n){return n.id===t.postId&&n.setLike?(n.countLike--,n.setLike=!1,Object(o.a)({},n)):e.posts}))});case"antiVK/profile/UNSET_DISLIKE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(n){return n.id===t.postId&&n.setDislike?(n.countDislike--,n.setDislike=!1,Object(o.a)({},n)):e.posts}))});case p:return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"antiVK/profile/SET_USER_PHOTO_AVATAR":return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});default:return e}},E=function(e){return{type:l,newPostBody:e}},b=function(e){return{type:p,postId:e}},v=function(e){return{type:f,status:e}},_=function(e){return{type:d,postId:e}},O=function(e){return{type:"antiVK/profile/SET_DISLIKE_POST",postId:e}},y=function(e){return{type:m,postId:e}},S=function(e){return{type:"antiVK/profile/UNSET_DISLIKE_POST",postId:e}},w=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfileUser(e);case 2:a=t.sent,n({type:"antiVK/profile/SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatusUser(e);case 2:a=t.sent,n(v(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.b.updateStatusUser(e);case 3:0===t.sent.data.resultCode&&n(v(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"antiVK/profile/SET_USER_PHOTO_AVATAR",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n,a){var i,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().auth.userId,t.next=3,s.b.saveProfile(e);case 3:0===(c=t.sent).data.resultCode?n(w(i)):n(Object(u.a)("updateContact",{_error:c.data.messages[0]}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},93:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c}));var a=function(e){return e.profilePage.profile},r=function(e){if(e.profilePage.profile)return e.profilePage.profile.photos.small},i=function(e){return e.profilePage.status},c=function(e){return e.profilePage.posts}},94:function(e,t,n){}},[[188,2,3]]]);
//# sourceMappingURL=main.b3b587e3.chunk.js.map