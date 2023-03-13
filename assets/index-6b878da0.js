import{d as le,m as M,q as te,n as se,W as D,r as h,o as r,c as u,e as c,w as l,a as _,u as n,_ as k,f as d,F as P,t as x,A as I,Q as ce,b as ie,B as re,X as de,v as T,z as w,k as me}from"./index-89b73d70.js";import{A as m}from"./type-1be1d189.js";import{s as ge}from"./sleep-d01c4b86.js";const pe=[{field:"name",label:"Name",component:"Input",colProps:{span:8}},{field:"gender",label:"Gender",component:"Select",componentProps:{options:[{label:"male",value:1},{label:"female",value:2}]},colProps:{span:8}}],ue=[{field:"id",label:"id",component:"Input",ifShow:!1,colProps:{span:24}},{field:"name",label:"Name",component:"Input",colProps:{span:24}},{field:"age",label:"Age",component:"InputNumber",colProps:{span:24}},{field:"email",label:"Email",component:"Input",colProps:{span:24}},{field:"gender",label:"Gender",component:"Select",componentProps:{options:[{label:"male",value:1},{label:"female",value:2}]},colProps:{span:12}},{field:"address",label:"address",component:"InputTextArea",colProps:{span:24}},{field:"tags",label:"Tags",component:"Select",colProps:{span:24},slot:"selectTag",placeholder:"Please input your tag and then press return."},{field:"date",label:"Date",component:"DatePicker",componentProps:{format:"YYYY/MM/DD"}},{field:"date2",label:"Date",component:"DatePicker",componentProps:{format:"YYYY-MM/DD"}},{field:"date3",label:"Date",component:"DatePicker",componentProps:{format:"YYYY:MM/DD"}}],ke=[{field:"name2",label:"Name2",component:"Input",colProps:{span:24}},{field:"age2",label:"Age2",component:"InputNumber",colProps:{span:24}}],fe={1:"male",2:"female"},be=[{label:"在职",value:1,key:"1"},{label:"离职",value:2,key:"2"},{label:"未知",value:0,key:"3"}],ye=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"邮件地址",dataIndex:"email",key:"email",helpMessage:"use email address."},{title:"家庭地址",dataIndex:"address",key:"address"},{title:"标签",key:"tags",dataIndex:"tags"},{title:"员工状态",key:"status",dataIndex:"status",format:be},{title:"性别",key:"gender",dataIndex:"gender",format:fe}],he=[{key:"1",name:"John Brown",age:32,email:"john.brown@gmail.com",address:"New York No. 1 Lake Park",tags:["nice","developer"],status:1,gender:1},{key:"2",name:"Jim Green",email:"jim.green@gmail.com",age:42,address:"London No. 1 Lake Park",tags:["loser"],status:2,gender:1},{key:"3",name:"Joe Black",age:32,email:"joe.black@gmail.com",address:"Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake ParkSidney No. 1 Lake Park ",tags:["cool","teacher"],gender:2},{key:"4",name:"Aborn Jiang",age:32,email:"aborn.jiang@gmail.com",address:"Shanghai China",tags:["coder","engineer"]},{key:"5",name:"Jack Gre",age:32,email:"jack.gre@gmail.com",address:"Hangzhou China",tags:["coder","engineer"]},{key:"6",name:"Kitty Hello",age:32,email:"he@gmail.com",address:"Berlin No. 991 Geek Park",tags:["coder","engineer"],gender:3},{key:"7",name:"Mike",age:32,email:"mike@gmail.com",address:"Paris No. 1 Lake Park",tags:["coder","engineer"]},{key:"8",name:"Cook",age:67,email:"cook@gmail.com",address:"Taipei No. 101 Tower",tags:["coder","engineer"]},{key:"9",name:"Jack Ma",age:42,email:"jack.ma@gmail.com",address:"Paris No. 1 Lake Park",tags:["coder","engineer"]},{key:"10",name:"Xu",age:10,email:"xu@gmail.com",address:"Nanjing No. 1 Golden Park",tags:["coder","engineer"]},{key:"11",name:"Google",age:33,email:"google@gmail.com",address:"Osaka No. 1 Lake Park",tags:["coder","engineer"]},{key:"12",name:"Orode100",age:100,email:"100@gmail.com",address:"London No. 1 Center Park",tags:["coder","engineer"]}],_e={style:{"margin-bottom":"10px"}},Pe={key:1},Ee={key:1},ve=le({__name:"index",setup(Ce){const t=M([]),i=M({copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}),A=te(()=>i.value.modifyEnabled?"success":"");function L(e){const a=s=>!(!(e.gender&&(e.gender===1||e.gender===2))&&s.label==="Delete"),o=[{icon:"clarity:note-edit-line",label:"Edit",onClick:H.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",label:"Delete",popConfirm:{title:"Are you sure to delete?",placement:"left",confirm:Q.bind(null,e)}},{icon:"ic:baseline-api",label:"Detail",onClick:ae.bind(null,e)}];return o.forEach(s=>{s.ifShow=a}),o}function Y(e){const a=e.map(o=>({key:o.articleid,name:o.title,age:o.id,email:o.space,address:o.desc.substring(0,10),tags:[o.tags],gender:1}));return console.log(a),a}const O={pageField:"page",sizeField:"pageSize",listField:"content",totalField:"totalElements"},[R,{updateTableDataRecord:E,deleteTableDataRecord:Ne,findTableDataRecord:v,getSearchFieldsValue:F}]=se({title:"NantaTable Usage Example.",columns:ye,dataSource:he,afterFetch:Y,fetchSetting:O,actionColumn:{title:"Actions",dataIndex:"action",fixed:void 0},useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:pe,autoSubmitOnEnter:!0,submitButtonOptions:{text:"search"}},pagination:{showTotal:e=>`Now total count is ${e}.`}}),G={schemas:ue,colon:!0,modalProps:{okText:"I'm sure.",cancelText:"Reject"}},[B,{openModal:C,closeModal:j,setModalProps:Se,changeLoading:N,changeOkLoading:S}]=D(),z={schemas:ke,colon:!0},J=async(e,a)=>{console.log("handleOK in outer event callback",e,a),E(a.key,e),N(!0),S(!0),await ge(3),S(!1),N(!1)},K=(e,a)=>{console.log("handle cancel in outer event callback",e,a)},[V,{openModal:U,closeModal:Me}]=D(),W=(e,a)=>{console.log("handleOK2 in outer event callback",e,a),E(a.key,e),j()},X=(e,a)=>{console.log("handle cancel in outer event callback",e,a)};function q(e){console.log("hand more clicked!",e)}function H(e){console.log("edit clicked!"),console.log(e);const a=F();console.log(a),C(!0,{title:"Edit",record:e})}function Q(e){console.log("delete action clicked!"),console.log(e)}function $(){if(console.log("copycreate"),t.value.length>0){const e=t.value[0],a=v(e);b(e,m.COPY_CREATE,a)}}function Z(){b(0,m.CREATE)}function ee(){if(console.log("modify"),t.value.length>0){const e=t.value[0],a=v(e);b(e,m.MODIFY,a)}}function ae(e){console.log("handle others",e)}function oe(){console.log("delete",t)}const b=(e,a,o)=>{console.log("id",e,"type",a);let s="Create";if(a==m.CREATE)s="Create";else if(a==m.COPY_CREATE)s="Copy create";else if(a==m.MODIFY)s="Modify";else throw new Error("illegal type.");const g={title:s,record:o||{}};a==m.CREATE?U(!0,g):C(!0,g)};function ne(e){console.log(e),t.value=e;const a=e.length;a<=0?i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!1}:a==1?i.value={copyEnabled:!0,createEnabled:!0,modifyEnabled:!0,deleteEnabled:!0}:i.value={copyEnabled:!1,createEnabled:!0,modifyEnabled:!1,deleteEnabled:!0}}return(e,a)=>{const o=h("a-button"),s=h("a-alert"),g=h("a-tag");return r(),u(P,null,[c(n(de),{onRegister:n(R),rowSelection:{type:"checkbox",selectedRowKeys:t.value,onChange:ne},clickToRowSelect:!1},{headerTop:l(()=>[_("div",_e,[c(n(k),{type:"primary",onClick:$,disabled:!i.value.copyEnabled,class:"button-s",preIcon:"ic:baseline-content-copy"},{default:l(()=>[d("复制新增")]),_:1},8,["disabled"]),c(n(k),{type:"primary",onClick:Z,disabled:!i.value.createEnabled,class:"button-s",preIcon:"ic:baseline-plus"},{default:l(()=>[d("新增")]),_:1},8,["disabled"]),c(n(k),{color:n(A),type:"primary",onClick:ee,disabled:!i.value.modifyEnabled,class:"button-s",preIcon:"ic:baseline-edit"},{default:l(()=>[d("修改")]),_:1},8,["color","disabled"]),c(n(k),{type:"primary",danger:"",onClick:oe,disabled:!i.value.deleteEnabled,class:"button-s",preIcon:"ic:baseline-delete"},{default:l(()=>[d("删除")]),_:1},8,["disabled"])]),c(s,{type:"info","show-icon":""},{message:l(()=>[t.value.length>0?(r(),u(P,{key:0},[_("span",null,"Selected "+x(t.value.length)+" items (pagination support.)",1),c(o,{type:"link",onClick:a[0]||(a[0]=y=>t.value=[]),size:"small"},{default:l(()=>[d("清空")]),_:1})],64)):(r(),u("span",Pe,"No items selected."))]),_:1})]),toolbar:l(()=>[_("div",null,[c(n(k),{type:"primary",class:"button-s"},{default:l(()=>[d(" Show details ")]),_:1})])]),bodyCell:l(({column:y,record:f})=>[y.key==="action"?(r(),I(n(ce),{key:0,actions:L(f),dropDownActions:[{label:"More",popConfirm:{title:"has more ?",confirm:q.bind(null,f)},ifShow:p=>f.status!=="enable"}]},null,8,["actions","dropDownActions"])):y.key==="tags"?(r(),u("span",Ee,[(r(!0),u(P,null,ie(f.tags,p=>(r(),I(g,{key:p,color:p==="loser"?"volcano":p.length>5?"geekblue":"green"},{default:l(()=>[d(x(p.toUpperCase()),1)]),_:2},1032,["color"]))),128))])):re("",!0)]),_:1},8,["onRegister","rowSelection"]),c(n(w),T({onRegister:n(B)},G,{onOk:J,onCancel:K}),null,16,["onRegister"]),c(n(w),T({onRegister:n(V)},z,{onOk:W,onCancel:X}),null,16,["onRegister"])],64)}}});const Te=me(ve,[["__scopeId","data-v-0b928285"]]);export{Te as default};
