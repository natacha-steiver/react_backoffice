(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{749:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(723),c=n(713),o=n(724),l=n.n(o),s=n(2),r=(n(138),n(716)),i=(n(728),n(734)),u=n(35),p=n(750),d=n(23),b={borderBottom:"2px solid #eee",background:"#fafafa",margin:".75rem auto",padding:".6rem 1rem",borderRadius:"7px"};function j(e){var t=Object(p.useImage)({srcList:"http://localhost:8000/images/".concat(e.imgNew)}).src;return Object(d.jsx)("img",{src:t,style:{maxWidth:"5rem"}})}var m=function(e){var t=e.page,n=t.name,o=t.photo,p=t.id,m=(e.pages,e.dispatch),g=Object(s.useState)(""),h=Object(c.a)(g,2),O=h[0],f=h[1],x=Object(s.useState)(""),y=Object(c.a)(x,2),v=(y[0],y[1]),N=Object(s.useState)(""),S=Object(c.a)(N,2),k=(S[0],S[1],Object(s.useState)(!1)),w=Object(c.a)(k,2),A=w[0],F=w[1],T=Object(s.useState)(!1),_=Object(c.a)(T,2),C=(_[0],_[1]),D=Object(s.useState)(o),B=Object(c.a)(D,2),J=B[0],L=B[1],P=Object(i.a)(),E=P.register,R=P.handleSubmit,U=function(){var e=Object(a.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=new FormData).append("photo",t.image[0]),n.append("name",O),n.append("id",p),1!=A){e.next=8;break}return e.next=7,fetch("http://localhost:8000/api/pages",{method:"POST",headers:{Accept:"application/json"},body:n}).then((function(e){e.json().then((function(e){"undefined"!=typeof e.exception||"undefined"!=typeof e.errors?alert("erreur, v\xe9rifiez les champs entr\xe9s"):(L(e.photo),m({type:u.a.UPDATE_PAGE,payload:{id:e.id,name:e.name,photo:e.photo}}))}))}));case 7:e.sent;case 8:F(!1),C(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{style:b,className:"container",children:Object(d.jsxs)("form",{onSubmit:R(U),encType:"multipart/form-data",className:"container col-lg-12 justify-content-center",children:[Object(d.jsxs)("div",{className:"form-group  col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(d.jsx)("label",{htmlFor:"name",className:"label-row ",children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",placeholder:n,onChange:function(e){return f(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-group col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(d.jsx)("label",{htmlFor:"photo",className:"label-row",style:{display:"none"},children:"photo:"}),Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading... "}),children:Object(d.jsx)(j,{imgNew:J})}),Object(d.jsx)("input",{type:"file",id:"image",ref:E,name:"image",multiple:!1,onChange:function(e){return v(e.target.files[0])}})]}),Object(d.jsx)("button",{style:{marginRight:"1em"},className:"btn btn-danger",type:"submit",onClick:function(){F(!1),C(!0),m(Object(r.d)(p))},children:"Remove"}),Object(d.jsx)("button",{className:"btn btn-success",type:"submit",onClick:function(){F(!0),C(!1)},children:"Update"})]})})}},945:function(e,t,n){"use strict";n.r(t);var a=n(713),c=n(2),o=(n(732),n(711)),l=(n(715),n(712)),s=n(723),r=n(61),i=n(724),u=n.n(i),p=(n(437),n(138)),d=(n(749),n(716)),b=(n(728),n(35)),j=(n(750),n(23)),m={borderBottom:"2px solid #eee",background:"#fafafa",margin:".75rem auto",padding:".6rem 1rem",borderRadius:"7px"},g=function(e){var t=e.langue,n=t.langue_name,o=t.langue_iso,l=t.langue_id,i=e.pages,p=e.dispatch,g=Object(c.useState)(""),h=Object(a.a)(g,2),O=h[0],f=h[1],x=Object(c.useState)(""),y=Object(a.a)(x,2),v=y[0],N=y[1],S=Object(c.useState)(""),k=Object(a.a)(S,2),w=k[0],A=k[1],F=Object(c.useState)(!1),T=Object(a.a)(F,2),_=T[0],C=T[1],D=Object(c.useState)(""),B=Object(a.a)(D,2),J=B[0],L=B[1],P=Object(c.useState)(""),E=Object(a.a)(P,2),R=(E[0],E[1],Object(c.useState)(!1)),U=Object(a.a)(R,2),z=U[0],G=U[1],I=Object(c.useState)(!1),W=Object(a.a)(I,2),Z=(W[0],W[1]),K=Object(c.useState)(i),V=Object(a.a)(K,2),q=(V[0],V[1]),H=Object(c.useState)([]),M=Object(a.a)(H,2),Q=M[0],X=M[1];function Y(e){e.preventDefault();var t=e.target.files[0];i.length<Q.length?X([].concat(Object(r.a)(Q),[t]).slice(Q.length-i.length+1,Q.length+1)):X([].concat(Object(r.a)(Q),[t]))}function $(){return($=Object(s.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData,console.log(Q),Q.map((function(e,t){n.append("photo"+t,e)})),n.append("name",O),"",a=O.replace(/[^A-Z0-9]/gi,"_"),n.append("short_name",a),n.append("iso",v),c=i.length,J.length>c?(n.append("name_page",JSON.stringify(J.slice(J.length-c,J.length))),n.append("id_page",JSON.stringify(w.slice(w.length-c,w.length)))):(n.append("name_page",JSON.stringify(J)),n.append("id_page",JSON.stringify(w))),n.append("id",l),e.next=14,fetch("http://localhost:8000/api/langues",{method:"POST",headers:{Accept:"application/json"},body:n}).then((function(e){e.json().then((function(e){"undefined"!=typeof e.exception?alert("erreur, v\xe9rifiez les champs entr\xe9s"):(q(e[0].photo),p({type:b.a.UPDATE_LANGUE,payload:e[0]}))}))})).catch((function(e){console.log("error")}));case 14:e.sent,G(!1),Z(!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return setTimeout((function(){C(!0)}),1700),_&&Object(j.jsx)("div",{style:m,className:"container",children:Object(j.jsxs)("form",{onSubmit:function(e){return $.apply(this,arguments)},encType:"multipart/form-data",className:"container col-lg-12 justify-content-center",children:[Object(j.jsxs)("div",{className:"form-group  col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(j.jsx)("label",{htmlFor:"",className:"label-row ",children:"Nom de la langue:"}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:n,onChange:function(e){return f(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(j.jsx)("label",{htmlFor:"",className:"label-row",children:"ISO de la langue:"}),Object(j.jsx)("input",{type:"text",name:"iso",placeholder:o,onChange:function(e){return N(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group col-lg-12 d-xs-block d-md-inline-block group-align",children:[Object(j.jsx)("h4",{children:"pages  li\xe9s:"}),Array.from(i).map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"form-group  col-lg-4 d-xs-block d-md-inline-block group-align",style:{display:"inline-block"},children:[Object(j.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(j.jsx)("input",{name:e.name,placeholder:e.name,type:"text",onBlur:function(t){t.preventDefault(),L([].concat(Object(r.a)(J),[t.target.value])),A([].concat(Object(r.a)(w),[e.id])),console.log("nameNew"+O+"ids:"+w)}}),Object(j.jsx)("label",{htmlFor:"photo",className:"label-row",style:{display:"none"},children:"photo:"}),Object(j.jsx)("img",{src:"http://localhost:8000/images/".concat(e.photo),alt:e.photo,style:{marginLeft:"1em",maxWidth:"5rem"}})]}),Object(j.jsxs)("div",{className:"form-group  col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(j.jsx)("label",{htmlFor:"photo",className:"label-row",style:{display:"none"},children:"photo:"}),Object(j.jsx)("input",{type:"file",id:e.id,name:"image",multiple:!0,onChange:Y,style:{marginBottom:"2em",marginLeft:"2em"}})]})]},"container"+t)}))]}),Object(j.jsx)("button",{style:{marginRight:"1em",marginLeft:"1em"},className:"btn btn-danger",type:"button",onClick:function(){G(!1),Z(!0),p(Object(d.b)(l))},children:"Remove"}),Object(j.jsx)("button",{className:"btn btn-success",type:"submit",onClick:function(){G(!0),Z(!1),console.log(z)},children:"Update"})]})})},h=n(734),O=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.pages})),n=Object(p.c)((function(e){return e.langues})),o=Object(c.useState)(!1),l=Object(a.a)(o,2),i=l[0],m=l[1],O=Object(c.useState)(!1),f=Object(a.a)(O,2),x=f[0],y=f[1],v=Object(c.useState)(!1),N=Object(a.a)(v,2),S=(N[0],N[1],Object(c.useState)([])),k=Object(a.a)(S,2),w=k[0],A=k[1],F=Object(c.useState)(""),T=Object(a.a)(F,2),_=T[0],C=T[1],D=Object(c.useState)(""),B=Object(a.a)(D,2),J=B[0],L=B[1],P=Object(c.useState)(""),E=Object(a.a)(P,2),R=E[0],U=E[1];setTimeout((function(){y(!0)}),1700),Object(c.useEffect)((function(t){m(!0),e(Object(d.e)()),m(!1)}),[i]);var z=Object(h.a)(),G=z.register,I=z.handleSubmit,W=function(){var t=Object(s.a)(u.a.mark((function t(n){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),a=new FormData,Array.from(n.image).map((function(e,t){a.append("photo"+t,e)})),a.append("name",J),"",c=J.replace(/[^A-Z0-9]/gi,"_"),a.append("short_name",c),a.append("iso",R),a.append("page",JSON.stringify({names:_})),console.log(a.getAll("photos")),t.next=12,fetch("http://localhost:8000/api/langues",{method:"POST",headers:{Authorization:"Bearer ".concat(JSON.parse(document.cookie)),"Content-Type":"application/x-www-form-urlencoded"},body:a}).then((function(t){t.json().then((function(t){e({type:b.a.ADD_LANGUE,payload:t[t.length-1]})}))}));case 12:t.sent;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("section",{id:"langueAddForm",className:"app-about-section angle-sp",style:{marginTop:"20em",paddingTop:"0"},children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-12",style:{marginTop:"-70px"},children:Object(j.jsxs)("div",{className:"col-md-12 col-lg-12",style:{background:"#ffffff none repeat scroll 0 0",boxShadow:"0 0 5px rgba(0, 0, 0, 0.2)",padding:"30px"},children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"doubleLine-title",style:{textAlign:"left",color:"#ff063c",fontWeight:"300",fontSize:"2em",paddingBottom:"30px"},children:"langues"}),Object(j.jsx)("span",{children:" (ajouter 2 pages minimum avec leur photo respective (!\xe0 l'ordre d'ajout des photos invers\xe9))"}),Object(j.jsx)("span",{style:{clear:"both"}})]}),Object(j.jsxs)("form",{onSubmit:I(W),id:"form",encType:"multipart/form-data",className:"col-lg-12 justify-content-center",children:[Object(j.jsxs)("div",{className:"form-group col-lg-6 d-md-inline-block",style:{color:"#3d009e"},children:[Object(j.jsx)("label",{htmlFor:"nameApp",children:"Nom de la langue"}),Object(j.jsx)("input",{name:"nameApp",type:"text",onBlur:function(e){return L(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group col-lg-6 d-md-inline-block",style:{color:"#3d009e"},children:[Object(j.jsx)("label",{htmlFor:"iso",children:"ISO de la langue "}),Object(j.jsx)("input",{name:"iso",type:"text",onBlur:function(e){return U(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group col-lg-6 d-md-inline-block",style:{color:"#3d009e"},children:[Object(j.jsx)("h4",{children:"Pages:"}),Object(j.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(j.jsx)("input",{name:"name",type:"text",onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),C([].concat(Object(r.a)(_),[e.target.value])))}(e)}})]}),Object(j.jsx)("div",{className:"form-group col-lg-6 d-md-inline-block",style:{color:"#3d009e"},children:Object(j.jsx)("input",{type:"file",id:"image",ref:G,name:"image",multiple:!0,onBlur:function(e){return A([].concat(Object(r.a)(w),[e.target.files[0]]))}})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Vos pages:"}),Array.from(_).map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)("li",{children:e},t)},t+"conso")}))]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary d-block",style:{margin:"1em auto"},children:"Cr\xe9er"})]})]})})})}),1==x&&Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{style:{display:"none"},className:"btn btn-primary",onClick:function(){e(Object(d.e)()),console.log("conso1:"+JSON.stringify(t))},children:"voir"}),n.length>0&&n.map((function(t,n){return Object(j.jsx)(g,{langue:t,pages:t[0],dispatch:e},n)}))]})]})},f=(n(719),function(e){return Object(j.jsx)(O,{})});t.default=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.j,{children:[Object(j.jsxs)(o.n,{children:["Langues - gestion",Object(j.jsx)(l.a,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(j.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=31.5ce71b66.chunk.js.map