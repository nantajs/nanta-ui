import{d as ae,k as w,l as se,J as ce,q as D,r as _,o as r,c as b,e as c,w as a,a as E,u as n,S as g,f as d,F as k,t as R,x as O,G as ie,b as re,y as de,Y as ue,m as A,v as F,_ as pe}from"./index-26bbef30.js";import{e as fe,a as be,c as ge,d as me,s as he}from"./data-fb379dee.js";import{A as u}from"./type-1be1d189.js";const ye=C=>new Promise(l=>setTimeout(l,C*1e3)),_e={style:{"margin-bottom":"10px"}},Ee={key:1},ke={key:1},Ce=ae({__name:"index",setup(C){const l=w([]),i=w({copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}),I=se(()=>i.value.modifyEnabled?"success":"");function P(e){const o=s=>!(!(e.gender&&(e.gender===1||e.gender===2))&&s.label==="Delete"),t=[{icon:"clarity:note-edit-line",label:"Edit",onClick:Q.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",label:"Delete",popConfirm:{title:"Are you sure to delete?",placement:"left",confirm:X.bind(null,e)}},{icon:"ic:baseline-api",label:"Detail",onClick:te.bind(null,e)}];return t.forEach(s=>{s.ifShow=o}),t}function G(e){const o=e.map(t=>({key:t.articleid,name:t.title,age:t.id,email:t.space,address:t.desc.substring(0,10),tags:[t.tags],gender:1}));return console.log(o),o}const N={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[B,{updateTableDataRecord:v,deleteTableDataRecord:ve,findTableDataRecord:M,getSearchFieldsValue:Y}]=ce({title:"NantaTable Usage Example.",columns:ge,dataSource:me,afterFetch:G,fetchSetting:N,actionColumn:{title:"Actions",dataIndex:"action",fixed:void 0},useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:he,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}},pagination:{showTotal:e=>`Now total count is ${e}.`}}),V={schemas:fe,colon:!0,modalProps:{okText:"I'm sure.",cancelText:"Reject"}},[z,{openModal:S,closeModal:K,setModalProps:Me,changeLoading:x,changeOkLoading:T}]=D(),L={schemas:be,colon:!0},j=async(e,o)=>{console.log("handleOK in outer event callback",e,o),v(o.key,e),x(!0),T(!0),await ye(3),T(!1),x(!1)},J=(e,o)=>{console.log("handle cancel in outer event callback",e,o)},[U,{openModal:$,closeModal:Se}]=D(),q=(e,o)=>{console.log("handleOK2 in outer event callback",e,o),v(o.key,e),K()},H=(e,o)=>{console.log("handle cancel in outer event callback",e,o)};function W(e){console.log("hand more clicked!",e)}function Q(e){console.log("edit clicked!"),console.log(e);const o=Y();console.log(o),S(!0,{title:"Edit",record:e})}function X(e){console.log("delete action clicked!"),console.log(e)}function Z(){if(console.log("copycreate"),l.value.length>0){const e=l.value[0],o=M(e);h(e,u.COPY_CREATE,o)}}function ee(){h(0,u.CREATE)}function oe(){if(console.log("modify"),l.value.length>0){const e=l.value[0],o=M(e);h(e,u.MODIFY,o)}}function te(e){console.log("handle others",e)}function ne(){console.log("delete",l)}const h=(e,o,t)=>{console.log("id",e,"type",o);let s="Create";if(o==u.CREATE)s="Create";else if(o==u.COPY_CREATE)s="Copy create";else if(o==u.MODIFY)s="Modify";else throw new Error("illegal type.");const p={title:s,record:t||{}};o==u.CREATE?$(!0,p):S(!0,p)};function le(e){console.log(e),l.value=e;const o=e.length;o<=0?i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}:o==1?i.value={copyEnabled:!0,createEnabled:!0,modifyEnabled:!0,deleteEnabled:!0}:i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!0}}return(e,o)=>{const t=_("a-button"),s=_("a-alert"),p=_("a-tag");return r(),b(k,null,[c(n(ue),{onRegister:n(B),rowSelection:{type:"checkbox",selectedRowKeys:l.value,onChange:le},clickToRowSelect:!1},{headerTop:a(()=>[E("div",_e,[c(n(g),{type:"primary",onClick:Z,disabled:!i.value.copyEnabled,class:"button-s",preIcon:"ic:baseline-content-copy"},{default:a(()=>[d("Copy create")]),_:1},8,["disabled"]),c(n(g),{type:"primary",onClick:ee,disabled:!i.value.createEnabled,class:"button-s",preIcon:"ic:baseline-plus"},{default:a(()=>[d("Create new")]),_:1},8,["disabled"]),c(n(g),{color:n(I),type:"primary",onClick:oe,disabled:!i.value.modifyEnabled,class:"button-s",preIcon:"ic:baseline-edit"},{default:a(()=>[d("Modify")]),_:1},8,["color","disabled"]),c(n(g),{type:"primary",danger:"",onClick:ne,disabled:!i.value.deleteEnabled,class:"button-s",preIcon:"ic:baseline-delete"},{default:a(()=>[d("Delete")]),_:1},8,["disabled"])]),c(s,{type:"info","show-icon":""},{message:a(()=>[l.value.length>0?(r(),b(k,{key:0},[E("span",null,"Selected "+R(l.value.length)+" items (pagination support.)",1),c(t,{type:"link",onClick:o[0]||(o[0]=y=>l.value=[]),size:"small"},{default:a(()=>[d("清空")]),_:1})],64)):(r(),b("span",Ee,"No items selected."))]),_:1})]),toolbar:a(()=>[E("div",null,[c(n(g),{type:"primary",class:"button-s"},{default:a(()=>[d(" Show details ")]),_:1})])]),bodyCell:a(({column:y,record:m})=>[y.key==="action"?(r(),O(n(ie),{key:0,actions:P(m),dropDownActions:[{label:"More",popConfirm:{title:"has more ?",confirm:W.bind(null,m)},ifShow:f=>m.status!=="enable"}]},null,8,["actions","dropDownActions"])):y.key==="tags"?(r(),b("span",ke,[(r(!0),b(k,null,re(m.tags,f=>(r(),O(p,{key:f,color:f==="loser"?"volcano":f.length>5?"geekblue":"green"},{default:a(()=>[d(R(f.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):de("",!0)]),_:1},8,["onRegister","rowSelection"]),c(n(F),A({onRegister:n(z)},V,{onOk:j,onCancel:J}),null,16,["onRegister"]),c(n(F),A({onRegister:n(U)},L,{onOk:q,onCancel:H}),null,16,["onRegister"])],64)}}});const De=pe(Ce,[["__scopeId","data-v-e56ca49b"]]);export{De as default};