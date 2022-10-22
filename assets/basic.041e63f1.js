import{M as j,P as L,b as U,y as D,O as H,p as I}from"./nanta.e02aa1ce.js";import{b as o,a7 as T,d as E,k as R,c as M,J as F,w as i,e as a,o as c,m as J,a as m,a0 as N,r as _,A as h,L as V,a1 as B,F as G,O as q}from"./index.9aa11744.js";var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"};const Y=W;function z(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),s.forEach(function(r){Q(l,r,t[r])})}return l}function Q(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var S=function(e,t){var s=z({},e,t.attrs);return o(T,z({},s,{icon:Y}),null)};S.displayName="SmileOutlined";S.inheritAttrs=!1;const X=S,Z=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"Name",component:"Input",defaultValue:"nanta",required:!0,placeholder:"Please input user name."},{field:"email",label:"Email",component:"Input"},{field:"age",label:"Age",component:"InputNumber",defaultValue:1},{field:"tags",label:"Tags",component:"Input"},{field:"field2",component:"RadioGroup",label:"RadioGroup_2",required:!0,componentProps:{options:[{label:"Check_1",value:"v1"},{label:"Check_2",value:"v2"}]}},{field:"address",label:"Address",component:"InputTextArea"}],K=E({__name:"BasicEditModal",emits:["register","ok","cancel"],setup(l,{emit:e}){const t=R(!0),s={showActionButtons:!1,colon:!0},r=M(()=>({...s})),[b,{setFieldsValue:v,updateSchema:P,resetFields:C,getFieldsValue:x,validateFields:O}]=j({labelWidth:100,schemas:Z}),[f,{closeModal:d}]=L(async n=>{C(),t.value=!!(n!=null&&n.isUpdate),console.log(n),n.record&&v(n.record)}),A=M(()=>a(t)?"Edit":"Create New"),u=async n=>{const k=await O();console.log(k),e("ok",n),d()},w=n=>{e("cancel",n)};return(n,k)=>(c(),F(a(U),{onRegister:a(f),onOk:u,onCancel:w,title:a(A)},{default:i(()=>[o(a(D),J({onRegister:a(b),onSubmit:u},a(r)),null,16,["onRegister"])]),_:1},8,["onRegister","title"]))}}),ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=N("path",{fill:"currentColor",d:"M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"},null,-1),ne=[te];function oe(l,e){return c(),m("svg",ee,ne)}const ae={name:"ri-delete-bin6-line",render:oe},le={style:{"margin-bottom":"1rem"}},se={key:0},re={key:0},ce={key:1},ie={key:2},de=["onClick"],pe=E({__name:"basic",setup(l){const e=[{name:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Email",dataIndex:"email",key:"email"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags"},{title:"Action",key:"action"}],t=[{key:"1",name:"John Brown",age:32,email:"john.brown@gmail.com",address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",email:"jim.green@gmail.com",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,email:"joe.black@gmail.com",address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],[s,{openModal:r}]=H(),b=()=>{console.log("basic modal show"),r(!0,{isUpdate:!1,record:null})},v=()=>{console.log("handle ok in outer event callback")},P=()=>{console.log("handle cancel in outer evnet callback")},C=d=>{console.log("id click deleted, ",d)},x=R(!1),O=()=>{console.log("showModal"),x.value=!0},f=d=>{console.log(d),r(!0,{isUpdate:!0,record:d})};return(d,A)=>{const u=_("a-button"),w=_("a-tag"),n=_("a-divider"),k=_("a-popconfirm"),$=_("a-table");return c(),m("div",null,[N("div",le,[o(u,{type:"primary",onClick:b,style:{"margin-right":".5rem"}},{default:i(()=>[o(a(I),{icon:"uil:plus"}),h("Create New ")]),_:1}),o(u,{color:"success",type:"primary",onClick:f,style:{"margin-right":".5rem"}},{default:i(()=>[o(a(I),{icon:"uil:edit"}),h("Edit ")]),_:1})]),o($,{columns:e,"data-source":t},{headerCell:i(({column:g})=>[g.key==="name"?(c(),m("span",se,[o(a(X)),h(" Name ")])):V("",!0)]),bodyCell:i(({column:g,record:y})=>[g.key==="name"?(c(),m("a",re,B(y.name),1)):g.key==="tags"?(c(),m("span",ce,[(c(!0),m(G,null,q(y.tags,p=>(c(),F(w,{key:p,color:p==="loser"?"volcano":p.length>5?"geekblue":"green"},{default:i(()=>[h(B(p.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):g.key==="action"?(c(),m("span",ie,[N("a",{onClick:p=>f(y)},"Edit",8,de),o(n,{type:"vertical"}),o(k,{title:"Sure to delete?",onConfirm:p=>C(y.key)},{default:i(()=>[o(a(ae),{style:{color:"red",cursor:"pointer"}})]),_:2},1032,["onConfirm"])])):V("",!0)]),_:1}),o(u,{type:"primary",onClick:O},{default:i(()=>[h("Open Modal")]),_:1}),o(K,{onRegister:a(s),onOk:v,onCancel:P},null,8,["onRegister"])])}}});export{pe as default};
