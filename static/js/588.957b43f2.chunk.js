"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{588:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),s=n(687),c=n.n(s),i=n(791),u=n(689),o=n(87),h=n(910),p=n(184),v=new h.Z,l=function(){var e,t,n=(0,u.TH)(),s=(0,i.useRef)(null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"movies"),h=(0,i.useState)({}),l=(0,a.Z)(h,2),d=l[0],f=l[1],x=(0,u.UO)().movieId;function k(){return(k=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getMovieDetails(x);case 3:t=e.sent,console.log(t),f(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}(0,i.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[x]);var y=d.vote_average,m=d.genres,b=d.poster_path,w=d.title,g=d.name,j=d.overview,Z=Math.round(y/10*100),_=m&&m.map((function(e){return e.name})).join(", "),L=b&&"https://image.tmdb.org/t/p/w200/".concat(b);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.rU,{to:s.current,children:"Go back"}),d&&(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:L,alt:w||g}),(0,p.jsx)("h2",{children:w||g}),(0,p.jsxs)("p",{children:["User Score: ",Z,"%"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:j})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("p",{children:_})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Additional Information"}),(0,p.jsx)(o.OL,{to:"/cast",children:"Cast"}),(0,p.jsx)(o.OL,{to:"/reviews",children:"Reviews"})]}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(u.j3,{})})]})}},910:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(861),a=n(671),s=n(466),c=n(687),i=n.n(c),u=n(243),o=function(){function e(){(0,a.Z)(this,e),this.key="f174cbacdc3a2b94891babbfd6b17080",this.baseURL="https://api.themoviedb.org/3/"}return(0,s.Z)(e,[{key:"getTrends",value:function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(this.baseURL,"trending/all/day?api_key=").concat(this.key));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovieByQuery",value:function(){var e=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(this.baseURL,"search/movie?api_key=").concat(this.key,"&query=").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(this.baseURL,"movie/").concat(t,"?api_key=").concat(this.key));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(this.baseURL,"movie/").concat(t,"/credits?api_key=").concat(this.key));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(this.baseURL,"movie/").concat(t,"/reviews?api_key=").concat(this.key));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=588.957b43f2.chunk.js.map