import{d as k,g as b,A as I,r as S,o as a,c as i,a as e,F as p,b as V,e as r,w as _,f as O,t as C,u as o,O as F,I as N,h as w,p as B,i as P,j,_ as A}from"./index.c7253c30.js";const z="0.1.0",D={"@nanta/ui":"0.1.0-rc.8",axios:"^1.1.3",vue:"^3.2.37","vue-i18n":"^9.1.9","vue-json-pretty":"^2.0.6","vue-router":"^4.1.1","vue-types":"^4.1.1"},v="0.1.0-rc.8",c={"@ant-design/icons-vue":"^6.1.0","@vueuse/core":"^9.4.0","ant-design-vue":"^3.2.13",vue:"^3.2.37"},E=n=>(B("data-v-41ace565"),n=n(),P(),n),L={class:"section-container"},M=E(()=>e("span",{style:{"font-size":"2.5rem"}}," nanta-ui: Ant-design based UI framework. ",-1)),R={class:"fbox-line"},T={class:"section-container",style:{"background-color":"#fff","margin-top":"10px"}},$=k({__name:"index",setup(n){D["@nanta/ui"];const m=c.vue,u=c["ant-design-vue"];console.log([{nantaVersion:v},{vueVersion:m},{antdVersion:u},{antdVersion:u}]);const f=b(w()),g=[{title:"Package Name",dataIndex:"name",key:"name"},{title:"Package Version",dataIndex:"version",key:"version",format:s=>j("span",{class:"version-style",style:"font-size: 1.5rem;color:#faad14"},s)}],l=[{name:"Docs version",version:z},{name:"@nanta/ui",version:v}],h=[{field:"name",label:"Package Name",component:"Input",colProps:{span:12}}],[y]=I({title:"@nant/ui version list.",columns:g,dataSource:l,pagination:!1,useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:h,autoSubmitOnEnter:!0,colon:!0,submitButtonOptions:{text:"search"},actionColOptions:{span:12,style:{"text-align":"left"}}}});for(let[s,d]of Object.entries(c))l.push({name:s,version:d});return(s,d)=>{const x=S("router-link");return a(),i(p,null,[e("div",L,[e("div",null,[M,e("div",R,[(a(!0),i(p,null,V(o(f),t=>(a(),i("div",{key:t.key},[r(o(F),{type:"dashed",icon:t.icon},{default:_(()=>[r(x,{to:t.path,style:{"margin-left":".5rem"}},{default:_(()=>[O(C(t.name),1)]),_:2},1032,["to"])]),_:2},1032,["icon"])]))),128))])])]),e("div",T,[r(o(N),{onRegister:o(y)},null,8,["onRegister"])])],64)}}});const q=A($,[["__scopeId","data-v-41ace565"]]);export{q as default};