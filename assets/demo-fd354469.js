import{d as i,n as u,q as m,o as p,G as _,x as f,u as t,v as g,_ as b}from"./index-e70bc032.js";const h=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"Name",component:"Input",defaultValue:"nanta",required:!0,placeholder:"Please input user name."},{field:"email",label:"Email",component:"Input"},{field:"age",label:"Age",component:"InputNumber",defaultValue:1},{field:"tags",label:"Tags",component:"Input"},{field:"address",label:"Address",component:"InputTextArea"}],F=i({__name:"demo",setup(I){const[o,{setFieldsValue:s,updateSchema:v,resetFields:P,getFieldsValue:R,validateFields:x}]=u({labelWidth:120,schemas:h,actionColOptions:{span:24}}),a={resetFn:()=>(console.log("here is a customize resetFn called!"),s({age:0,email:"nanta@nantajs.dev",name:"Nanta"}),new Promise((e,n)=>{try{e()}catch(r){n(r)}})),colon:!0},l=m(()=>({...a})),c=e=>{console.log("values",e),console.log("handleSubmit btn clicked!")},d=()=>{console.log("handleReset but click")};return(e,n)=>(p(),_(t(g),f(t(l),{actionColOptions:{span:24},onRegister:t(o),onSubmit:c,onReset:d}),null,16,["onRegister"]))}});const V=b(F,[["__scopeId","data-v-150d1e1a"]]);export{V as default};