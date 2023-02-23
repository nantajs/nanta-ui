import{d as le,k as w,m as ae,J as se,s as D,r as _,o as d,c as b,e as c,w as a,a as E,u as n,S as g,f as r,F as k,t as O,x as R,G as ce,b as ie,y as de,Y as re,n as A,H as F,_ as ue}from"./index-fffd78a0.js";import{e as pe,a as fe,c as be,d as ge,s as me}from"./data-fb379dee.js";import{A as u}from"./type-1be1d189.js";const he=C=>new Promise(l=>setTimeout(l,C*1e3)),ye={style:{"margin-bottom":"10px"}},_e={key:1},Ee={key:1},ke=le({__name:"index",setup(C){const l=w([]),i=w({copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}),I=ae(()=>i.value.modifyEnabled?"success":"");function P(e){const o=s=>!(!(e.gender&&(e.gender===1||e.gender===2))&&s.label==="Delete"),t=[{icon:"clarity:note-edit-line",label:"Edit",onClick:q.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",label:"Delete",popConfirm:{title:"Are you sure to delete?",placement:"left",confirm:Q.bind(null,e)}},{icon:"ic:baseline-api",label:"Detail",onClick:oe.bind(null,e)}];return t.forEach(s=>{s.ifShow=o}),t}function G(e){const o=e.map(t=>({key:t.articleid,name:t.title,age:t.id,email:t.space,address:t.desc.substring(0,10),tags:[t.tags],gender:1}));return console.log(o),o}const N={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[B,{updateTableDataRecord:v,deleteTableDataRecord:Ce,findTableDataRecord:M}]=se({title:"NantaTable Usage Example.",columns:be,dataSource:ge,afterFetch:G,fetchSetting:N,actionColumn:{title:"Actions",dataIndex:"action",fixed:void 0},useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:me,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}},pagination:{showTotal:e=>`Now total count is ${e}.`}}),Y={schemas:pe,colon:!0,modalProps:{okText:"I'm sure.",cancelText:"Reject"}},[z,{openModal:S,closeModal:K,setModalProps:ve,changeLoading:x,changeOkLoading:T}]=D(),V={schemas:fe,colon:!0},L=async(e,o)=>{console.log("handleOK in outer event callback",e,o),v(o.key,e),x(!0),T(!0),await he(3),T(!1),x(!1)},j=(e,o)=>{console.log("handle cancel in outer event callback",e,o)},[H,{openModal:J,closeModal:Me}]=D(),U=(e,o)=>{console.log("handleOK2 in outer event callback",e,o),v(o.key,e),K()},$=(e,o)=>{console.log("handle cancel in outer event callback",e,o)};function W(e){console.log("hand more clicked!",e)}function q(e){console.log("edit clicked!"),console.log(e),S(!0,{title:"Edit",record:e})}function Q(e){console.log("delete action clicked!"),console.log(e)}function X(){if(console.log("copycreate"),l.value.length>0){const e=l.value[0],o=M(e);h(e,u.COPY_CREATE,o)}}function Z(){h(0,u.CREATE)}function ee(){if(console.log("modify"),l.value.length>0){const e=l.value[0],o=M(e);h(e,u.MODIFY,o)}}function oe(e){console.log("handle others",e)}function te(){console.log("delete",l)}const h=(e,o,t)=>{console.log("id",e,"type",o);let s="Create";if(o==u.CREATE)s="Create";else if(o==u.COPY_CREATE)s="Copy create";else if(o==u.MODIFY)s="Modify";else throw new Error("illegal type.");const p={title:s,record:t||{}};o==u.CREATE?J(!0,p):S(!0,p)};function ne(e){console.log(e),l.value=e;const o=e.length;o<=0?i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}:o==1?i.value={copyEnabled:!0,createEnabled:!0,modifyEnabled:!0,deleteEnabled:!0}:i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!0}}return(e,o)=>{const t=_("a-button"),s=_("a-alert"),p=_("a-tag");return d(),b(k,null,[c(n(re),{onRegister:n(B),rowSelection:{type:"checkbox",selectedRowKeys:l.value,onChange:ne},clickToRowSelect:!1},{headerTop:a(()=>[E("div",ye,[c(n(g),{type:"primary",onClick:X,disabled:!i.value.copyEnabled,class:"button-s",preIcon:"ic:baseline-content-copy"},{default:a(()=>[r("Copy create")]),_:1},8,["disabled"]),c(n(g),{type:"primary",onClick:Z,disabled:!i.value.createEnabled,class:"button-s",preIcon:"ic:baseline-plus"},{default:a(()=>[r("Create new")]),_:1},8,["disabled"]),c(n(g),{color:n(I),type:"primary",onClick:ee,disabled:!i.value.modifyEnabled,class:"button-s",preIcon:"ic:baseline-edit"},{default:a(()=>[r("Modify")]),_:1},8,["color","disabled"]),c(n(g),{type:"primary",danger:"",onClick:te,disabled:!i.value.deleteEnabled,class:"button-s",preIcon:"ic:baseline-delete"},{default:a(()=>[r("Delete")]),_:1},8,["disabled"])]),c(s,{type:"info","show-icon":""},{message:a(()=>[l.value.length>0?(d(),b(k,{key:0},[E("span",null,"Selected "+O(l.value.length)+" items (pagination support.)",1),c(t,{type:"link",onClick:o[0]||(o[0]=y=>l.value=[]),size:"small"},{default:a(()=>[r("清空")]),_:1})],64)):(d(),b("span",_e,"No items selected."))]),_:1})]),toolbar:a(()=>[E("div",null,[c(n(g),{type:"primary",class:"button-s"},{default:a(()=>[r(" Show details ")]),_:1})])]),bodyCell:a(({column:y,record:m})=>[y.key==="action"?(d(),R(n(ce),{key:0,actions:P(m),dropDownActions:[{label:"More",popConfirm:{title:"has more ?",confirm:W.bind(null,m)},ifShow:f=>m.status!=="enable"}]},null,8,["actions","dropDownActions"])):y.key==="tags"?(d(),b("span",Ee,[(d(!0),b(k,null,ie(m.tags,f=>(d(),R(p,{key:f,color:f==="loser"?"volcano":f.length>5?"geekblue":"green"},{default:a(()=>[r(O(f.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):de("",!0)]),_:1},8,["onRegister","rowSelection"]),c(n(F),A({onRegister:n(z)},Y,{onOk:L,onCancel:j}),null,16,["onRegister"]),c(n(F),A({onRegister:n(H)},V,{onOk:U,onCancel:$}),null,16,["onRegister"])],64)}}});const we=ue(ke,[["__scopeId","data-v-d508b971"]]);export{we as default};
