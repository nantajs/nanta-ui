import{d as k,g as b,J as S,r as I,o as a,c as i,a as e,F as p,b as V,e as r,w as _,f as C,t as F,u as o,S as N,Y as w,h as B,p as O,i as P,j,_ as z}from"./index-26bbef30.js";const D="0.1.0",m="0.1.6",c={"@ant-design/icons-vue":"^6.1.0","@vueuse/core":"^9.4.0","ant-design-vue":"^3.2.14",vue:"^3.2.44","vue-i18n":"9"},E=n=>(O("data-v-41ace565"),n=n(),P(),n),G={class:"section-container"},J=E(()=>e("span",{style:{"font-size":"2.5rem"}}," nanta-ui: Ant-design based UI framework. ",-1)),L={class:"fbox-line"},M={class:"section-container",style:{"background-color":"#fff","margin-top":"10px"}},R=k({__name:"index",setup(n){const v=c.vue,l=c["ant-design-vue"];console.log([{nantaVersion:m},{vueVersion:v},{antdVersion:l},{antdVersion:l}]);const f=b(B()),g=[{title:"Package Name",dataIndex:"name",key:"name"},{title:"Package Version",dataIndex:"version",key:"version",format:s=>j("span",{class:"version-style",style:"font-size: 1.5rem;color:#faad14"},s)}],d=[{name:"Docs version",version:D},{name:"@nanta/ui",version:m}],h=[{field:"name",label:"Package Name",component:"Input",colProps:{span:12}}],[x]=S({title:"@nant/ui version list.",columns:g,dataSource:d,pagination:!1,useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:h,autoSubmitOnEnter:!0,colon:!0,submitButtonOptions:{text:"search"},actionColOptions:{span:12,style:{"text-align":"left"}}}});for(let[s,u]of Object.entries(c))d.push({name:s,version:u});return(s,u)=>{const y=I("router-link");return a(),i(p,null,[e("div",G,[e("div",null,[J,e("div",L,[(a(!0),i(p,null,V(o(f),t=>(a(),i("div",{key:t.key},[r(o(N),{type:"dashed",icon:t.icon},{default:_(()=>[r(y,{to:t.path,style:{"margin-left":".5rem"}},{default:_(()=>[C(F(t.name),1)]),_:2},1032,["to"])]),_:2},1032,["icon"])]))),128))])])]),e("div",M,[r(o(w),{onRegister:o(x)},null,8,["onRegister"])])],64)}}});const A=z(R,[["__scopeId","data-v-41ace565"]]);export{A as default};