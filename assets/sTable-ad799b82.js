import{d as ae,m as F,t as ne,v as O,B as le,C as oe,r as k,o as i,c as p,e as c,w as s,a as v,u as l,x as C,f,F as x,h as I,z as w,Q as se,b as ce,A as re,X as ie,q as P,U as z,_ as de}from"./index-88da504e.js";import{e as ue,a as pe,s as fe}from"./data-fb379dee.js";import{A as g}from"./type-1be1d189.js";import{a as ge}from"./axios-aba6f0e0.js";function me(S,b){const h=b&&"get";return a=>new Promise((r,_)=>{ge({method:h,url:S,params:{page:a.page?a.page-1:0,size:a.pageSize}}).then(function(d){r(d.data.result)}).catch(function(d){console.log(d),_(d)})})}const be={style:{"margin-bottom":"10px"}},he={key:1},_e={key:1},ye=ae({__name:"sTable",setup(S){const b="http://127.0.0.1:8090/api/v1/read?area=QNA3E&address=D100",h=[{title:"Address",dataIndex:"address",key:"address"},{title:"Value",dataIndex:"value",key:"value"}],a=F([]),r=F({copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1});function _(e){const t=n=>!(!(e.gender&&(e.gender===1||e.gender===2))&&n.label==="Delete"),o=[{icon:"clarity:note-edit-line",label:"Edit",onClick:$.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",label:"Delete",onClick:H.bind(null,e)}];return o.forEach(n=>{n.ifShow=t}),o}function d(e){return e.map(o=>({address:o.address,value:o.value}))}const B={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[N,{updateTableDataRecord:M,findTableDataRecord:Ee,reload:V}]=ne({title:"PLC Simulator Example.",columns:h,api:me(b),afterFetch:d,fetchSetting:B,actionColumn:{title:"Actions",dataIndex:"action",fixed:void 0},useSearchForm:!1,searchFormConfig:{labelWidth:120,schemas:fe,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}}}),G={schemas:ue,colon:!0,modalProps:{okText:"I'm sure.",cancelText:"Reject"}},[K,{openModal:T,closeModal:L,setModalProps:ke,changeLoading:A,changeOkLoading:R}]=O(),U={schemas:pe,colon:!0},Q=async(e,t)=>{console.log("handleOK in outer event callback",e,t),M(t.key,e),A(!0),R(!0),R(!1),A(!1)},q=(e,t)=>{console.log("handle cancel in outer event callback",e,t)},[W,{openModal:X,closeModal:ve}]=O(),Y=(e,t)=>{console.log("handleOK2 in outer event callback",e,t),M(t.key,e),L()},j=(e,t)=>{console.log("handle cancel in outer event callback",e,t)};function $(e){console.log("edit clicked!"),console.log(e),T(!0,{title:"Edit",record:e})}function H(e){console.log("delete action clicked!"),console.log(e)}function J(){ee(0,g.CREATE)}function Z(){console.log("delete",a)}const ee=(e,t,o)=>{console.log("id",e,"type",t);let n="Create";if(t==g.CREATE)n="Create";else if(t==g.COPY_CREATE)n="Copy create";else if(t==g.MODIFY)n="Modify";else throw new Error("illegal type.");const u={title:n,record:o||{}};t==g.CREATE?X(!0,u):T(!0,u)};function te(e){console.log(e),a.value=e;const t=e.length;t<=0?r.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}:t==1?r.value={copyEnabled:!0,createEnabled:!0,modifyEnabled:!0,deleteEnabled:!0}:r.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!0}}let y=null;return le(()=>{y=setInterval(()=>{V({reload:!1})},1e3)}),oe(()=>{y&&clearInterval(y)}),(e,t)=>{const o=k("a-button"),n=k("a-alert"),u=k("a-tag");return i(),p(x,null,[c(l(ie),{onRegister:l(N),rowSelection:{type:"checkbox",selectedRowKeys:a.value,onChange:te},clickToRowSelect:!1},{headerTop:s(()=>[v("div",be,[c(l(C),{type:"primary",onClick:J,disabled:!r.value.createEnabled,class:"button-s",preIcon:"ic:baseline-plus"},{default:s(()=>[f("Add Reg")]),_:1},8,["disabled"]),c(l(C),{type:"primary",danger:"",onClick:Z,disabled:!r.value.deleteEnabled,class:"button-s",preIcon:"ic:baseline-delete"},{default:s(()=>[f("Delete")]),_:1},8,["disabled"])]),c(n,{type:"info","show-icon":""},{message:s(()=>[a.value.length>0?(i(),p(x,{key:0},[v("span",null,"Selected "+I(a.value.length)+" items (pagination support.)",1),c(o,{type:"link",onClick:t[0]||(t[0]=E=>a.value=[]),size:"small"},{default:s(()=>[f("清空")]),_:1})],64)):(i(),p("span",he,"No items selected."))]),_:1})]),toolbar:s(()=>[v("div",null,[c(l(C),{type:"primary",class:"button-s"},{default:s(()=>[f(" Show details ")]),_:1})])]),bodyCell:s(({column:E,record:D})=>[E.key==="action"?(i(),w(l(se),{key:0,actions:_(D)},null,8,["actions"])):E.key==="tags"?(i(),p("span",_e,[(i(!0),p(x,null,ce(D.tags,m=>(i(),w(u,{key:m,color:m==="loser"?"volcano":m.length>5?"geekblue":"green"},{default:s(()=>[f(I(m.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):re("",!0)]),_:1},8,["onRegister","rowSelection"]),c(l(z),P({onRegister:l(K)},G,{onOk:Q,onCancel:q}),null,16,["onRegister"]),c(l(z),P({onRegister:l(W)},U,{onOk:Y,onCancel:j}),null,16,["onRegister"])],64)}}});const Te=de(ye,[["__scopeId","data-v-45632ed5"]]);export{Te as default};
