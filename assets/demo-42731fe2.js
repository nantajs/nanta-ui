import{d as i,U as u,q as m,o as p,A as _,v as f,u as n,s as g,k as b}from"./index-b9301c9d.js";const h=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"Name",component:"Input",defaultValue:"nanta",required:!0,placeholder:"Please input user name."},{field:"email",label:"Email",component:"Input"},{field:"age",label:"Age",component:"InputNumber",defaultValue:1},{field:"tags",label:"Tags",component:"Input"},{field:"address",label:"Address",component:"InputTextArea"}],F=i({__name:"demo",setup(v){const[s,{setFieldsValue:a,updateSchema:I,resetFields:R,getFieldsValue:k,validateFields:x}]=u({labelWidth:120,schemas:h,actionColOptions:{span:24}}),o={resetFn:()=>(console.log("here is a customize resetFn called!"),a({age:0,email:"nanta@nantajs.dev",name:"Nanta"}),new Promise((e,t)=>{try{e()}catch(r){t(r)}})),colon:!0},l=m(()=>({...o})),c=e=>{console.log("values",e),console.log("handleSubmit btn clicked!")},d=()=>{console.log("handleReset but click")};return(e,t)=>(p(),_(n(g),f(l.value,{actionColOptions:{span:24},onRegister:n(s),onSubmit:c,onReset:d}),null,16,["onRegister"]))}});const O=b(F,[["__scopeId","data-v-150d1e1a"]]);export{O as default};