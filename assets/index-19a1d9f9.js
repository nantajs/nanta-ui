import{d as ae,m as w,q as le,c as se,y as D,r as _,o as r,a as b,f as c,w as l,b as E,u as n,Q as g,h as d,F as k,t as O,G as R,H as ce,e as ie,I as re,i as de,x as A,B as F,_ as ue}from"./index-e70bc032.js";import{e as pe,a as fe,c as be,d as ge,s as me}from"./data-fb379dee.js";import{A as u}from"./type-1be1d189.js";const he=C=>new Promise(a=>setTimeout(a,C*1e3)),ye={style:{"margin-bottom":"10px"}},_e={key:1},Ee={key:1},ke=ae({__name:"index",setup(C){const a=w([]),i=w({copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}),I=le(()=>i.value.modifyEnabled?"success":"");function N(e){const o=s=>!(!(e.gender&&(e.gender===1||e.gender===2))&&s.label==="Delete"),t=[{icon:"clarity:note-edit-line",label:"Edit",onClick:W.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",label:"Delete",popConfirm:{title:"Are you sure to delete?",okText:"Yes",cancelText:"No",placement:"left",confirm:J.bind(null,e)}},{icon:"ic:baseline-api",label:"Detail",onClick:oe.bind(null,e)}];return t.forEach(s=>{s.ifShow=o}),t}function P(e){const o=e.map(t=>({key:t.articleid,name:t.title,age:t.id,email:t.space,address:t.desc.substring(0,10),tags:[t.tags],gender:1}));return console.log(o),o}const B={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[Y,{updateTableDataRecord:v,deleteTableDataRecord:Ce,findTableDataRecord:M}]=se({title:"NantaTable Usage Example.",columns:be,dataSource:ge,afterFetch:P,fetchSetting:B,actionColumn:{title:"Actions",dataIndex:"action",fixed:void 0},useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:me,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}},pagination:{showTotal:e=>`Now total count is ${e}.`}}),z={schemas:pe,colon:!0,modalProps:{okText:"I'm sure.",cancelText:"Reject"}},[K,{openModal:x,closeModal:V,setModalProps:ve,changeLoading:T,changeOkLoading:S}]=D(),L={schemas:fe,colon:!0},Q=async(e,o)=>{console.log("handleOK in outer event callback",e,o),v(o.key,e),T(!0),S(!0),await he(3),S(!1),T(!1)},U=(e,o)=>{console.log("handle cancel in outer event callback",e,o)},[$,{openModal:j,closeModal:Me}]=D(),q=(e,o)=>{console.log("handleOK2 in outer event callback",e,o),v(o.key,e),V()},G=(e,o)=>{console.log("handle cancel in outer event callback",e,o)};function H(e){console.log("hand more clicked!",e)}function W(e){console.log("edit clicked!"),console.log(e),x(!0,{title:"Edit",record:e})}function J(e){console.log("delete action clicked!"),console.log(e)}function X(){if(console.log("copycreate"),a.value.length>0){const e=a.value[0],o=M(e);h(e,u.COPY_CREATE,o)}}function Z(){h(0,u.CREATE)}function ee(){if(console.log("modify"),a.value.length>0){const e=a.value[0],o=M(e);h(e,u.MODIFY,o)}}function oe(e){console.log("handle others",e)}function te(){console.log("delete",a)}const h=(e,o,t)=>{console.log("id",e,"type",o);let s="Create";if(o==u.CREATE)s="Create";else if(o==u.COPY_CREATE)s="Copy create";else if(o==u.MODIFY)s="Modify";else throw new Error("illegal type.");const p={title:s,record:t||{}};o==u.CREATE?j(!0,p):x(!0,p)};function ne(e){console.log(e),a.value=e;const o=e.length;o<=0?i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}:o==1?i.value={copyEnabled:!0,createEnabled:!0,modifyEnabled:!0,deleteEnabled:!0}:i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!0}}return(e,o)=>{const t=_("a-button"),s=_("a-alert"),p=_("a-tag");return r(),b(k,null,[c(n(de),{onRegister:n(Y),rowSelection:{type:"checkbox",selectedRowKeys:a.value,onChange:ne},clickToRowSelect:!1},{headerTop:l(()=>[E("div",ye,[c(n(g),{type:"primary",onClick:X,disabled:!i.value.copyEnabled,class:"button-s",preIcon:"ic:baseline-content-copy"},{default:l(()=>[d("Copy create")]),_:1},8,["disabled"]),c(n(g),{type:"primary",onClick:Z,disabled:!i.value.createEnabled,class:"button-s",preIcon:"ic:baseline-plus"},{default:l(()=>[d("Create new")]),_:1},8,["disabled"]),c(n(g),{color:n(I),type:"primary",onClick:ee,disabled:!i.value.modifyEnabled,class:"button-s",preIcon:"ic:baseline-edit"},{default:l(()=>[d("Modify")]),_:1},8,["color","disabled"]),c(n(g),{type:"primary",danger:"",onClick:te,disabled:!i.value.deleteEnabled,class:"button-s",preIcon:"ic:baseline-delete"},{default:l(()=>[d("Delete")]),_:1},8,["disabled"])]),c(s,{type:"info","show-icon":""},{message:l(()=>[a.value.length>0?(r(),b(k,{key:0},[E("span",null,"Selected "+O(a.value.length)+" items (pagination support.)",1),c(t,{type:"link",onClick:o[0]||(o[0]=y=>a.value=[]),size:"small"},{default:l(()=>[d("清空")]),_:1})],64)):(r(),b("span",_e,"No items selected."))]),_:1})]),toolbar:l(()=>[E("div",null,[c(n(g),{type:"primary",class:"button-s"},{default:l(()=>[d(" Show details ")]),_:1})])]),bodyCell:l(({column:y,record:m})=>[y.key==="action"?(r(),R(n(ce),{key:0,actions:N(m),dropDownActions:[{label:"More",popConfirm:{title:"has more ?",confirm:H.bind(null,m)},ifShow:f=>m.status!=="enable"}]},null,8,["actions","dropDownActions"])):y.key==="tags"?(r(),b("span",Ee,[(r(!0),b(k,null,ie(m.tags,f=>(r(),R(p,{key:f,color:f==="loser"?"volcano":f.length>5?"geekblue":"green"},{default:l(()=>[d(O(f.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):re("",!0)]),_:1},8,["onRegister","rowSelection"]),c(n(F),A({onRegister:n(K)},z,{onOk:Q,onCancel:U}),null,16,["onRegister"]),c(n(F),A({onRegister:n($)},L,{onOk:q,onCancel:G}),null,16,["onRegister"])],64)}}});const we=ue(ke,[["__scopeId","data-v-fc856cba"]]);export{we as default};