(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{944:function(e,t,c){"use strict";c.r(t);var n=c(713),s=c(2),a=(c(732),c(711)),r=(c(715),c(712)),l=c(942),i=c(943),o=c(138),j=c(716),b=(c(728),c(23)),d={borderBottom:"2px solid #eee",background:"#fafafa",margin:".75rem auto",padding:".6rem 1rem",borderRadius:"7px"},u=function(e){var t=e.text,c=t.titre,a=t.contenu,r=t.page,l=t.id,i=e.pages,o=e.dispatch,u=Object(s.useState)(""),m=Object(n.a)(u,2),p=m[0],O=m[1],x=Object(s.useState)(""),g=Object(n.a)(x,2),h=g[0],f=g[1],N=Object(s.useState)(r),y=Object(n.a)(N,2),v=y[0],k=y[1],S=Object(s.useState)(!1),w=Object(n.a)(S,2),T=w[0],F=w[1];return setTimeout((function(){F(!0)}),1700),T&&Object(b.jsxs)("div",{style:d,className:"container",children:[Object(b.jsxs)("form",{className:"container col-lg-12 justify-content-center",children:[Object(b.jsxs)("div",{className:"form-group  col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(b.jsx)("label",{htmlFor:"titre",className:"label-row ",children:"Titre:"}),Object(b.jsx)("input",{type:"text",name:"titre",placeholder:c,onChange:function(e){return O(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(b.jsx)("label",{htmlFor:"contenu",className:"label-row",children:"contenu:"}),Object(b.jsx)("input",{type:"text",name:"contenu",placeholder:a,onChange:function(e){return f(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group  col-lg-4 d-xs-block d-md-inline-block group-align",children:[Object(b.jsx)("label",{htmlFor:"",className:"label-row",children:"page:"}),Object(b.jsx)("select",{id:"page_select",name:"page",onChange:function(e){return k(parseInt(e.target.value))},page:v,value:v,children:null!=i&&i.map((function(e,t){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})]}),Object(b.jsx)("button",{style:{marginRight:"1em"},className:"btn btn-danger",type:"button",onClick:function(){o(Object(j.c)(l))},children:"Remove"}),Object(b.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){o(Object(j.i)(l,v,p,h))},children:"Update"})]})},m=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.texts})),c=Object(o.c)((function(e){return e.pages})),a=Object(s.useState)(c),r=Object(n.a)(a,2),d=(r[0],r[1],Object(s.useState)(!1)),m=Object(n.a)(d,2),p=m[0],O=m[1],x=Object(s.useState)(!1),g=Object(n.a)(x,2),h=g[0],f=g[1];return setTimeout((function(){f(!0)}),1700),Object(s.useEffect)((function(t){O(!0),e(Object(j.f)()),e(Object(j.g)()),O(!1)}),[p]),Object(b.jsxs)("section",{id:"textAddForm",className:"app-about-section angle-sp",style:{marginTop:"20px",paddingTop:"0"},children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsxs)("div",{className:"col-md-12 col-lg-12",style:{background:"#ffffff none repeat scroll 0 0",boxShadow:"0 0 5px rgba(0, 0, 0, 0.2)",padding:"30px"},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"doubleLine-title",style:{textAlign:"left",color:"#ff063c",fontWeight:"300",fontSize:"2em",paddingBottom:"30px"},children:"Texts"}),Object(b.jsx)("span",{style:{clear:"both"}})]}),Object(b.jsx)(l.d,{initialValues:{titre:"",contenu:"",page:""},validationSchema:i.b({titre:i.c().trim().matches(/^[A-Za-z- ]+$/,{message:Object(b.jsx)("p",{className:"errorMessage",children:'Please only type in letters, white spaces and "-"'})}).required(Object(b.jsx)("p",{className:"errorMessage",children:"This field is required"})),contenu:i.c().trim().matches(/^[A-Za-z- ]+$/,{message:Object(b.jsx)("p",{className:"errorMessage",children:'Please only type in letters, white spaces and "-"'})}).required(Object(b.jsx)("p",{className:"errorMessage",children:"Required"})),page:i.a().min(1,Object(b.jsx)("p",{className:"errorMessage",children:"error"})).required(Object(b.jsx)("p",{className:"errorMessage",children:"This field is required"}))}),onSubmit:function(t,c){c.setSubmitting;e(Object(j.a)(t))},children:function(e){return Object(b.jsxs)(l.c,{className:"col-lg-12 justify-content-center",children:[Object(b.jsxs)("div",{className:"form-group col-lg-6 d-md-inline-block",style:{color:"#3d009e"},children:[Object(b.jsx)("label",{htmlFor:"titre",children:"Titre"}),Object(b.jsx)(l.b,{name:"titre",type:"text",className:"form-control"}),Object(b.jsx)(l.a,{name:"titre"})]}),Object(b.jsxs)("div",{className:"form-group col-lg-6 d-md-inline-block",style:{color:"#3d009e"},children:[Object(b.jsx)("label",{htmlFor:"contenu",children:"contenu"}),Object(b.jsx)(l.b,{name:"contenu",type:"text",className:"form-control"}),Object(b.jsx)(l.a,{name:"contenu"})]}),Object(b.jsxs)("div",{className:"form-group col-lg-6",style:{color:"#3d009e"},children:[Object(b.jsx)("label",{htmlFor:"",className:"label-row",children:"page:"}),Object(b.jsx)(l.b,{as:"select",name:"page",className:"form-control",children:c.map((function(e,t){return Object(b.jsx)("option",{selected:!0,value:parseInt(e.id),children:e.name},t)}))}),Object(b.jsx)(l.a,{name:"page"})]}),Object(b.jsx)("button",{className:"btn btn-primary d-block",style:{margin:"1em auto"},type:"submit",children:"add text"})]})}})]})})})}),1==h&&Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{style:{display:"none"},className:"btn btn-primary",onClick:function(){e(Object(j.f)())},children:"voir"}),"undefined"==typeof c?console.log("error"):t.length>0&&t.map((function(t,n){return Object(b.jsx)(u,{text:t,pages:c,dispatch:e},n)}))]})]})},p=(c(719),function(e){return Object(b.jsx)(m,{})});t.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(a.j,{children:[Object(b.jsxs)(a.n,{children:["Texts - gestion",Object(b.jsx)(r.a,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(b.jsx)(p,{})]})})}}}]);
//# sourceMappingURL=46.86dde29e.chunk.js.map