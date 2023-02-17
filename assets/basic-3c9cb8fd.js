import{e as t,E as L,o as l,c as d,a as k,G as j,I as D,f as m,r as p,d as $,q as R,k as H,w as i,u as c,n as v,y as C,t as w,F as G,b as T,x as q,m as F,L as J}from"./index-ded923fa.js";var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"};const Y=U;function O(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),s.forEach(function(r){Q(n,r,a[r])})}return n}function Q(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var b=function(e,a){var s=O({},e,a.attrs);return t(L,O({},s,{icon:Y}),null)};b.displayName="SmileOutlined";b.inheritAttrs=!1;const W=b,X={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Z=k("path",{fill:"currentColor",d:"M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"},null,-1),K=[Z];function ee(n,e){return l(),d("svg",X,K)}const te={name:"ri-delete-bin6-line",render:ee},ne=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"Name",component:"Input",defaultValue:"nanta",required:!0,placeholder:"Please input user name."},{field:"email",label:"Email",component:"Input"},{field:"age",label:"Age",component:"InputNumber",defaultValue:1},{field:"tags",label:"Tags",component:"Input"},{field:"field2",component:"RadioGroup",label:"RadioGroup_2",required:!0,componentProps:{options:[{label:"Check_1",value:"v1"},{label:"Check_2",value:"v2"}]}},{field:"address",label:"Address",component:"InputTextArea"}],ae=[{name:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",customRender:({text:n,record:e,index:a})=>(console.log(n),t(p("a-tooltip"),null,{default:()=>[j(t("template",null,[m("prompt text")]),[[D("slot"),"title"]]),m("Age: "),n]}))},{title:"Email",dataIndex:"email",key:"email"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags"},{title:"Action",key:"action"}],oe={style:{"margin-bottom":"1rem"}},le={key:0},se={key:0},re={key:1},ie={key:2},ce=["onClick"],me=$({__name:"basic",setup(n){const e={schemas:ne,colon:!0},a=[{key:"1",name:"John Brown",age:32,email:"john.brown@gmail.com",address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",email:"jim.green@gmail.com",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,email:"joe.black@gmail.com",address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],[s,{openModal:r,closeModal:x}]=R(),I=()=>{console.log("basic modal show"),r(!0,{title:"Create new",record:null})},N=(o,h)=>{console.log("basic table: handle ok in outer event callback",o,h),x()},S=(o,h)=>{console.log("basic table: handle cancel in outer evnet callback",o,h)},A=o=>{console.log("id click deleted, ",o)},P=H(!1),V=()=>{console.log("showModal"),P.value=!0},y=o=>{console.log(o),r(!0,{title:"Edit",record:o})};return(o,h)=>{const f=p("a-button"),z=p("a-tag"),M=p("a-divider"),B=p("a-popconfirm"),E=p("a-table");return l(),d("div",null,[k("div",oe,[t(f,{type:"primary",onClick:I,style:{"margin-right":".5rem"}},{default:i(()=>[t(c(v),{icon:"uil:plus"}),m("Create New ")]),_:1}),t(f,{color:"success",type:"primary",onClick:y,style:{"margin-right":".5rem"}},{default:i(()=>[t(c(v),{icon:"uil:edit"}),m("Edit ")]),_:1})]),t(E,{columns:c(ae),"data-source":a},{headerCell:i(({column:g})=>[g.key==="name"?(l(),d("span",le,[t(c(W)),m(" Name ")])):C("",!0)]),bodyCell:i(({column:g,record:_})=>[g.key==="name"?(l(),d("a",se,w(_.name),1)):g.key==="tags"?(l(),d("span",re,[(l(!0),d(G,null,T(_.tags,u=>(l(),q(z,{key:u,color:u==="loser"?"volcano":u.length>5?"geekblue":"green"},{default:i(()=>[m(w(u.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):g.key==="action"?(l(),d("span",ie,[k("a",{onClick:u=>y(_)},"Edit",8,ce),t(M,{type:"vertical"}),t(B,{title:"Sure to delete?",onConfirm:u=>A(_.key)},{default:i(()=>[t(c(te),{style:{color:"red",cursor:"pointer"}})]),_:2},1032,["onConfirm"])])):C("",!0)]),_:1},8,["columns"]),t(f,{type:"primary",onClick:V},{default:i(()=>[m("Open Modal")]),_:1}),t(c(J),F({onRegister:c(s)},e,{onOk:N,onCancel:S}),null,16,["onRegister"])])}}});export{me as default};