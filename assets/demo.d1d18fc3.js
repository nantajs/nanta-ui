import{d as i,l as m,m as u,o as p,y as _,n as f,u as t,q as g,_ as h}from"./index.125a26ea.js";const b=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"Name",component:"Input",defaultValue:"nanta",required:!0,placeholder:"Please input user name."},{field:"email",label:"Email",component:"Input"},{field:"age",label:"Age",component:"InputNumber",defaultValue:1},{field:"tags",label:"Tags",component:"Input"},{field:"address",label:"Address",component:"InputTextArea"}],F=i({__name:"demo",setup(I){const[o,{setFieldsValue:s,updateSchema:R,resetFields:v,getFieldsValue:x,validateFields:P}]=m({labelWidth:120,schemas:b,actionColOptions:{span:24}}),a={resetFn:()=>(console.log("here is a customize resetFn called!"),s({age:0,email:"nanta@nantajs.dev",name:"Nanta"}),new Promise((e,n)=>{try{e()}catch(r){n(r)}})),colon:!0},l=u(()=>({...a})),c=e=>{console.log("values",e),console.log("handleSubmit btn clicked!")},d=()=>{console.log("handleReset but click")};return(e,n)=>(p(),_(t(g),f(t(l),{actionColOptions:{span:24},onRegister:t(o),onSubmit:c,onReset:d}),null,16,["onRegister"]))}});const O=h(F,[["__scopeId","data-v-150d1e1a"]]);export{O as default};
