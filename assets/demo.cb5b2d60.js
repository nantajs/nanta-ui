import{d as i,s as m,k as u,o as p,x as _,m as f,u as t,l as g,_ as b}from"./index.b4d05e52.js";const h=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"Name",component:"Input",defaultValue:"nanta",required:!0,placeholder:"Please input user name."},{field:"email",label:"Email",component:"Input"},{field:"age",label:"Age",component:"InputNumber",defaultValue:1},{field:"tags",label:"Tags",component:"Input"},{field:"address",label:"Address",component:"InputTextArea"}],F=i({__name:"demo",setup(I){const[s,{setFieldsValue:o,updateSchema:R,resetFields:v,getFieldsValue:x,validateFields:k}]=m({labelWidth:120,schemas:h,actionColOptions:{span:24}}),a={resetFn:()=>(console.log("here is a customize resetFn called!"),o({age:0,email:"nanta@nantajs.dev",name:"Nanta"}),new Promise((e,n)=>{try{e()}catch(r){n(r)}})),colon:!0},l=u(()=>({...a})),c=e=>{console.log("values",e),console.log("handleSubmit btn clicked!")},d=()=>{console.log("handleReset but click")};return(e,n)=>(p(),_(t(g),f(t(l),{actionColOptions:{span:24},onRegister:t(s),onSubmit:c,onReset:d}),null,16,["onRegister"]))}});const V=b(F,[["__scopeId","data-v-150d1e1a"]]);export{V as default};
