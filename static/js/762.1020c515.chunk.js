(self.webpackChunklearn_now=self.webpackChunklearn_now||[]).push([[762],{2780:function(n,e,t){"use strict";t.d(e,{E3:function(){return v},IW:function(){return b},MZ:function(){return g},UU:function(){return x},Z6:function(){return w},_C:function(){return j},l0:function(){return Z},nS:function(){return m},yU:function(){return y}});var r,i,o,c,u,s,a,l,d,p=t(168),f=t(1087),h=t(6444),g=(0,h.ZP)(f.rU)(r||(r=(0,p.Z)(["\n  width: 100%;\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 120px) / 2);\n  }\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(2)})),m=h.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  height: 100%;\n  list-style: none;\n  text-decoration: none;\n  overflow: hidden;\n  transition: box-shadow 0.3s, transform 0.3s;\n  &:hover {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.shadows.small})),v=h.ZP.div(o||(o=(0,p.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n  height: 250px;\n  video {\n    display: block;\n    width: 100%;\n    min-height: 100%;\n    object-fit: contain;\n  }\n  @media screen and (min-width: 768px) {\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)})),x=h.ZP.div(c||(c=(0,p.Z)(["\n  flex-grow: 1;\n  padding: "," ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow: hidden;\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(5)})),Z=h.ZP.div(u||(u=(0,p.Z)(["\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  padding-bottom: 5px;\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.dark})),w=h.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: ",";\n  border-top: 1px solid ",";\n  p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: ",";\n  }\n  span {\n    font-weight: 700;\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.accent})),j=h.ZP.p(a||(a=(0,p.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  font-size: ",";\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.accent})),b=h.ZP.ul(l||(l=(0,p.Z)(["\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(5)})),y=h.ZP.li(d||(d=(0,p.Z)(["\n  list-style: circle;\n"])))},8213:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r,i=t(2791),o=t(191),c=(t(3540),t(168)),u=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  width: ",";\n  height: auto;\n  padding-bottom: ",";\n\n  .vjs-poster img {\n    object-fit: cover;\n  }\n  @media screen and (min-width: 768px) {\n    width: ",";\n  }\n"])),(function(n){return n.preview?"auto":"320px"}),(function(n){return n.theme.spacing(5)}),(function(n){return n.preview?"auto":"700px"})),s=t(184),a=function(n){var e=n.options,t=n.onReady,r=n.preview,c=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(a.current){var n=a.current;n.autoplay(e.autoplay),n.src(e.sources)}else{var r=document.createElement("video-js");r.classList.add("vjs-big-play-centered"),c.current.appendChild(r);var i=a.current=(0,o.Z)(r,e,(function(){t&&t(i)}))}}),[e,t]),(0,i.useEffect)((function(){var n=a.current;return function(){n&&!n.isDisposed()&&(n.dispose(),a.current=null)}}),[a]),(0,s.jsx)(u,{preview:r,"data-vjs-player":!0,children:(0,s.jsx)("div",{ref:c})})}},6322:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return I}});var r,i,o,c,u,s,a=t(4165),l=t(5861),d=t(9439),p=t(2791),f=t(1598),h=t(605),g=t(7781),m=t(6856),v=t(3728),x=t(8213),Z=t(2780),w=t(7689),j=t(184),b=function(n){var e,t,r,i=n.course,o=(0,p.useRef)(null),c=(0,w.TH)(),u=i.id,s=i.previewImageLink,a=i.title,l=i.lessonsCount,d=i.meta,f=i.rating,h={autoplay:!1,controls:!1,responsive:!0,fluid:!0,poster:"".concat(s,"/cover.webp"),sources:[{src:null===(e=d.courseVideoPreview)||void 0===e?void 0:e.link,type:"application/x-mpegURL"}]};return(0,j.jsx)(Z.MZ,{to:"".concat(u),state:{from:c},children:(0,j.jsxs)(Z.nS,{children:[(0,j.jsx)(Z.E3,{children:null!==(t=d.courseVideoPreview)&&void 0!==t&&t.link?(0,j.jsx)(x.Z,{options:h,onReady:function(n){o.current=n,n.muted(!0),n.on("mouseover",(function(){n.play()})),n.on("mouseout",(function(){n.pause()}))},preview:!0}):(0,j.jsx)("img",{src:"".concat(s,"/cover.webp"),alt:a})}),(0,j.jsxs)(Z.UU,{children:[(0,j.jsx)(Z.l0,{children:a}),(0,j.jsxs)(Z.Z6,{children:[(0,j.jsxs)("p",{children:["Available Lessons:",(0,j.jsx)("span",{children:l}),(0,j.jsx)(m.wND,{size:20})]}),(0,j.jsxs)("p",{children:["Rating: ",(0,j.jsxs)("span",{children:[f.toFixed(1)," "]})," ",(0,j.jsx)(v.CvE,{size:20})]})]}),d.skills?(0,j.jsxs)("div",{children:[(0,j.jsx)(Z._C,{children:"Course skills:"}),(0,j.jsx)(Z.IW,{children:null===d||void 0===d||null===(r=d.skills)||void 0===r?void 0:r.map((function(n,e){return(0,j.jsx)(Z.yU,{children:(0,j.jsx)("p",{children:n})},e)}))})]}):(0,j.jsx)(Z._C,{children:"Please help us to attract new skills!"})]})]})})},y=t(7793),k=t(3433),P=function(n,e){var t=e-n+1;return Array.from({length:t},(function(e,t){return t+n}))},C="...",z=t(168),S=t(6444),U=S.ZP.ul(r||(r=(0,z.Z)(["\n  display: flex;\n  list-style-type: none;\n  justify-content: center;\n  align-items: center;\n  margin-top: ",";\n  list-style-type: none;\n"])),(function(n){return n.theme.spacing(4)})),R=S.ZP.li(i||(i=(0,z.Z)(["\n  padding: 0 ",";\n  height: ",";\n  text-align: center;\n  margin: auto ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: ",";\n  line-height: 1.43;\n  font-size: ",";\n  min-width: ",";\n  transition: background-color 0.3s, color 0.3s;\n  color: ",";\n  pointer-events: ",";\n  background-color: ",";\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.04);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(8)}),(function(n){return n.disabled?"gray":" rgba(0, 0, 0, 0.87);"}),(function(n){return n.disabled?"none":"auto"}),(function(n){return n.selected?"rgba(0, 0, 0, 0.08)":"transparent"})),A=(0,S.ZP)(R)(o||(o=(0,z.Z)(["\n  &:hover {\n    background-color: transparent;\n    cursor: default;\n  }\n"]))),E=function(n){var e=n.onPageChange,t=n.totalCount,r=n.siblingCount,i=void 0===r?1:r,o=n.currentPage,c=n.pageSize,u=function(n){var e=n.totalCount,t=n.pageSize,r=n.siblingCount,i=void 0===r?1:r,o=n.currentPage;return(0,p.useMemo)((function(){var n=Math.ceil(e/t);if(i+5>=n)return P(1,n);var r=Math.max(o-i,1),c=Math.min(o+i,n),u=r>2,s=c<n-2,a=1,l=n;if(!u&&s){var d=P(1,3+2*i);return[].concat((0,k.Z)(d),[C,n])}if(u&&!s){var p=P(n-(3+2*i)+1,n);return[a,C].concat((0,k.Z)(p))}if(u&&s){var f=P(r,c);return[a,C].concat((0,k.Z)(f),[C,l])}}),[e,t,i,o])}({currentPage:o,totalCount:t,siblingCount:i,pageSize:c});if(0===o||u.length<2)return null;var s=u[u.length-1];return(0,j.jsxs)(U,{children:[(0,j.jsx)(R,{disabled:1===o,onClick:function(){e(o-1)},children:(0,j.jsx)(m.aQX,{size:20})}),u.map((function(n,t){return n===C?(0,j.jsx)(A,{children:"\u2026"},t):(0,j.jsx)(R,{selected:n===o,onClick:function(){return e(n)},children:n},t)})),(0,j.jsx)(R,{disabled:o===s,onClick:function(){e(o+1)},children:(0,j.jsx)(m.Djl,{size:20})})]})},M=S.ZP.section(c||(c=(0,z.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: ",";\n  @media screen and (min-width: 768px) {\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n"])),(function(n){return n.theme.colors.yellow})),L=S.ZP.h1(u||(u=(0,z.Z)(["\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.colors.dark})),D=S.ZP.ul(s||(s=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: ",";\n  padding-top: ",";\n\n  @media screen and (min-width: 768px) {\n    padding-top: ",";\n  }\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(10)})),_=t(8174),H=(t(5462),t(1087)),I=function(){var n,e=(0,H.lr)(),t=(0,d.Z)(e,2),r=t[0],i=t[1],o=(0,p.useState)([]),c=(0,d.Z)(o,2),u=c[0],s=c[1],m=(0,p.useState)(!0),v=(0,d.Z)(m,2),x=v[0],Z=v[1],w=null!==(n=r.get("page"))&&void 0!==n?n:"1";(0,p.useEffect)((function(){var n=function(){var n=(0,l.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.H)();case 3:(e=n.sent).courses.sort((function(n,e){return Date.parse(n)-Date.parse(e)})),s(e.courses),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),_.Am.error(n.t0.message);case 11:return n.prev=11,Z(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var k=(0,p.useMemo)((function(){var n=10*(w-1),e=n+10;return u.slice(n,e)}),[w,u]);return(0,j.jsx)(M,{children:(0,j.jsxs)(f.W2,{children:[x&&(0,j.jsx)(y.Z,{}),(0,j.jsxs)(L,{children:[(0,j.jsx)(g.Z,{})," - Learning has never been more convenient!"]}),(0,j.jsx)(D,{children:k.map((function(n){return(0,j.jsx)(b,{course:n},n.id)}))}),(0,j.jsx)(E,{currentPage:Number(w),totalCount:u.length,pageSize:10,onPageChange:function(n){return function(n){i(""!==n?{page:n}:{})}(n)}})]})})}},605:function(n,e,t){"use strict";t.d(e,{H:function(){return s},Y:function(){return a}});var r=t(4165),i=t(5861),o=t(1243),c=t(8174);o.Z.defaults.baseURL="".concat("https://api.wisey.app/api/v1");var u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/auth/anonymous?platform=subscriptions");case 3:e=n.sent,t=e.data.token,o.Z.defaults.headers.common.Authorization="Bearer ".concat(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c.Am.error(n.t0.message);case 10:case"end":return n.stop()}var t}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u();case 3:return n.next=5,o.Z.get("/core/preview-courses");case 5:return e=n.sent,n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(0),c.Am.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u();case 3:return n.next=5,o.Z.get("/core/preview-courses/".concat(e));case 5:return t=n.sent,n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),c.Am.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},5893:function(){}}]);
//# sourceMappingURL=762.1020c515.chunk.js.map