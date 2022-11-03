import{d as ae,v as M,F as ne,B as oe,L as le,r as y,o as g,c as p,f as c,w as s,a as E,u as l,P as k,h as m,b as _,t as O,z as D,N as te,e as se,y as re,E as ce,q as R,I as S,_ as de}from"./index.4aceed01.js";const ie={1:"male",2:"female"},ge=[{field:"name",label:"Name",component:"Input",colProps:{span:8}},{field:"gender",label:"Gender",component:"Select",componentProps:{options:[{label:"male",value:1},{label:"female",value:2}]},colProps:{span:8}}],me=[{field:"name",label:"Name",component:"Input",colProps:{span:24}},{field:"age",label:"Age",component:"InputNumber",colProps:{span:24}},{field:"email",label:"Email",component:"Input",colProps:{span:24}},{field:"gender",label:"Gender",component:"Select",componentProps:{options:[{label:"male",value:1},{label:"female",value:2}]},colProps:{span:8}},{field:"address",label:"address",component:"InputTextArea",colProps:{span:24}}],ue=[{field:"name2",label:"Name2",component:"Input",colProps:{span:24}},{field:"age2",label:"Age2",component:"InputNumber",colProps:{span:24}}],pe=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Email",dataIndex:"email",key:"email",helpMessage:"use email address."},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags"},{title:"Gender",key:"gender",dataIndex:"gender",format:ie}],ke=[{key:"1",name:"John Brown",age:32,email:"john.brown@gmail.com",address:"New York No. 1 Lake Park",tags:["nice","developer"],gender:1},{key:"2",name:"Jim Green",email:"jim.green@gmail.com",age:42,address:"London No. 1 Lake Park",tags:["loser"],gender:1},{key:"3",name:"Joe Black",age:32,email:"joe.black@gmail.com",address:"Sidney No. 1 Lake Park",tags:["cool","teacher"],gender:2},{key:"4",name:"Aborn Jiang",age:32,email:"aborn.jiang@gmail.com",address:"Shanghai China",tags:["coder","engineer"]},{key:"5",name:"Jack Gre",age:32,email:"jack.gre@gmail.com",address:"Hangzhou China",tags:["coder","engineer"]},{key:"6",name:"Kitty Hello",age:32,email:"he@gmail.com",address:"Berlin No. 991 Geek Park",tags:["coder","engineer"],gender:3},{key:"7",name:"Mike",age:32,email:"mike@gmail.com",address:"Paris No. 1 Lake Park",tags:["coder","engineer"]},{key:"8",name:"Cook",age:67,email:"cook@gmail.com",address:"Taipei No. 101 Tower",tags:["coder","engineer"]},{key:"9",name:"Jack Ma",age:42,email:"jack.ma@gmail.com",address:"Paris No. 1 Lake Park",tags:["coder","engineer"]},{key:"10",name:"Xu",age:10,email:"xu@gmail.com",address:"Nanjing No. 1 Golden Park",tags:["coder","engineer"]},{key:"11",name:"Google",age:33,email:"google@gmail.com",address:"Osaka No. 1 Lake Park",tags:["coder","engineer"]},{key:"12",name:"Orode100",age:100,email:"100@gmail.com",address:"London No. 1 Center Park",tags:["coder","engineer"]}];var d=(n=>(n[n.COPY_CREATE=1]="COPY_CREATE",n[n.CREATE=2]="CREATE",n[n.MODIFY=3]="MODIFY",n[n.DELETE=4]="DELETE",n[n.DOWNLOAD=5]="DOWNLOAD",n))(d||{});const be=n=>new Promise(t=>setTimeout(t,n*1e3)),fe={style:{"margin-bottom":"10px"}},he={key:1},ye={key:1},Ee=ae({__name:"index",setup(n){const t=M([]),i=M({copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1});function L(e){const a=r=>!(!(e.gender&&(e.gender===1||e.gender===2))&&r.label==="Delete"),o=[{icon:"clarity:note-edit-line",label:"Edit",onClick:U.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",label:"Delete",onClick:q.bind(null,e)}];return o.forEach(r=>{r.ifShow=a}),o}function T(e){const a=e.map(o=>({key:o.articleid,name:o.title,age:o.id,email:o.space,address:o.desc.substring(0,10),tags:[o.tags],gender:1}));return console.log(a),a}const w={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[F,{updateTableDataRecord:C,deleteTableDataRecord:_e,findTableDataRecord:v}]=ne({title:"NantaTable Usage Example.",columns:pe,dataSource:ke,afterFetch:T,fetchSetting:w,actionColumn:{title:"Actions",dataIndex:"action",fixed:void 0},useSearchForm:!1,searchFormConfig:{labelWidth:120,schemas:ge,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}}}),A={schemas:me,colon:!0,modalProps:{okText:"I'm sure.",cancelText:"Reject"}},[B,G,{openModal:P,closeModal:Y,setModalProps:Ce,changeLoading:N,changeOkLoading:I}]=oe(),j={schemas:ue,colon:!0},z=async(e,a)=>{console.log("handleOK in outer event callback",e,a),C(a.key,e),N(!0),I(!0),await be(3),I(!1),N(!1)},J=(e,a)=>{console.log("handle cancel in outer event callback",e,a)},[K,{openModal:V,closeModal:ve}]=le(),W=(e,a)=>{console.log("handleOK2 in outer event callback",e,a),C(a.key,e),Y()},H=(e,a)=>{console.log("handle cancel in outer event callback",e,a)};function U(e){console.log("edit clicked!"),console.log(e),P(!0,{title:"Edit",record:e})}function q(e){console.log("delete action clicked!"),console.log(e)}function X(){if(console.log("copycreate"),t.value.length>0){const e=t.value[0],a=v(e);f(e,d.COPY_CREATE,a)}}function $(){f(0,d.CREATE)}function Q(){if(console.log("modify"),t.value.length>0){const e=t.value[0],a=v(e);f(e,d.MODIFY,a)}}function Z(){console.log("delete",t)}const f=(e,a,o)=>{console.log("id",e,"type",a);let r="Create";if(a==d.CREATE)r="Create";else if(a==d.COPY_CREATE)r="Copy create";else if(a==d.MODIFY)r="Modify";else throw new Error("illegal type.");const u={title:r,record:o||{}};a==d.CREATE?V(!0,u):P(!0,u)};function ee(e){console.log(e),t.value=e;const a=e.length;a<=0?i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}:a==1?i.value={copyEnabled:!0,createEnabled:!0,modifyEnabled:!0,deleteEnabled:!0}:i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!0}}return(e,a)=>{const o=y("a-button"),r=y("a-alert"),u=y("a-tag");return g(),p(_,null,[c(l(ce),{onRegister:l(F),rowSelection:{type:"checkbox",selectedRowKeys:t.value,onChange:ee},clickToRowSelect:!1},{headerTop:s(()=>[E("div",fe,[c(l(k),{type:"primary",onClick:X,disabled:!i.value.copyEnabled,class:"button-s",preIcon:"ic:baseline-content-copy"},{default:s(()=>[m("Copy create")]),_:1},8,["disabled"]),c(l(k),{type:"primary",onClick:$,disabled:!i.value.createEnabled,class:"button-s",preIcon:"ic:baseline-plus"},{default:s(()=>[m("Create new")]),_:1},8,["disabled"]),c(l(k),{color:"success",type:"primary",onClick:Q,disabled:!i.value.modifyEnabled,class:"button-s",preIcon:"ic:baseline-edit"},{default:s(()=>[m("Modify")]),_:1},8,["disabled"]),c(l(k),{type:"primary",danger:"",onClick:Z,disabled:!i.value.deleteEnabled,class:"button-s",preIcon:"ic:baseline-delete"},{default:s(()=>[m("Delete")]),_:1},8,["disabled"])]),c(r,{type:"info","show-icon":""},{message:s(()=>[t.value.length>0?(g(),p(_,{key:0},[E("span",null,"Selected "+O(t.value.length)+" items (pagination support.)",1),c(o,{type:"link",onClick:a[0]||(a[0]=h=>t.value=[]),size:"small"},{default:s(()=>[m("\u6E05\u7A7A")]),_:1})],64)):(g(),p("span",he,"No items selected."))]),_:1})]),toolbar:s(()=>[E("div",null,[c(l(k),{type:"primary",class:"button-s"},{default:s(()=>[m(" Show details ")]),_:1})])]),bodyCell:s(({column:h,record:x})=>[h.key==="action"?(g(),D(l(te),{key:0,actions:L(x)},null,8,["actions"])):h.key==="tags"?(g(),p("span",ye,[(g(!0),p(_,null,se(x.tags,b=>(g(),D(u,{key:b,color:b==="loser"?"volcano":b.length>5?"geekblue":"green"},{default:s(()=>[m(O(b.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):re("",!0)]),_:1},8,["onRegister","rowSelection"]),c(l(S),R({onRegister:l(B),onRegmethod:l(G)},A,{onOk:z,onCancel:J}),null,16,["onRegister","onRegmethod"]),c(l(S),R({onRegister:l(K)},j,{onOk:W,onCancel:H}),null,16,["onRegister"])],64)}}});const Ne=de(Ee,[["__scopeId","data-v-e7f00720"]]);export{Ne as default};