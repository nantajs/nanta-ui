import{d as k,g as b,c as I,r as S,o as a,a as i,b as e,F as p,e as V,f as r,w as _,h as C,t as F,u as o,Q as N,i as j,j as w,p as B,k as O,l as P,_ as z}from"./index-36f579ee.js";const D="0.1.0",E={"@nanta/ui":"^0.1.0-rc.13",axios:"^1.1.3",dayjs:"^1.11.7",vue:"^3.2.44","vue-i18n":"^9.1.9","vue-json-pretty":"^2.0.6","vue-router":"^4.1.1","vue-types":"^4.1.1"},v="0.1.1",c={"@ant-design/icons-vue":"^6.1.0","@vueuse/core":"^9.4.0","ant-design-vue":"^3.2.14",vue:"^3.2.44"},L=n=>(B("data-v-41ace565"),n=n(),O(),n),M={class:"section-container"},Q=L(()=>e("span",{style:{"font-size":"2.5rem"}}," nanta-ui: Ant-design based UI framework. ",-1)),R={class:"fbox-line"},T={class:"section-container",style:{"background-color":"#fff","margin-top":"10px"}},$=k({__name:"index",setup(n){E["@nanta/ui"];const m=c.vue,l=c["ant-design-vue"];console.log([{nantaVersion:v},{vueVersion:m},{antdVersion:l},{antdVersion:l}]);const f=b(w()),g=[{title:"Package Name",dataIndex:"name",key:"name"},{title:"Package Version",dataIndex:"version",key:"version",format:s=>P("span",{class:"version-style",style:"font-size: 1.5rem;color:#faad14"},s)}],u=[{name:"Docs version",version:D},{name:"@nanta/ui",version:v}],h=[{field:"name",label:"Package Name",component:"Input",colProps:{span:12}}],[y]=I({title:"@nant/ui version list.",columns:g,dataSource:u,pagination:!1,useSearchForm:!0,searchFormConfig:{labelWidth:120,schemas:h,autoSubmitOnEnter:!0,colon:!0,submitButtonOptions:{text:"search"},actionColOptions:{span:12,style:{"text-align":"left"}}}});for(let[s,d]of Object.entries(c))u.push({name:s,version:d});return(s,d)=>{const x=S("router-link");return a(),i(p,null,[e("div",M,[e("div",null,[Q,e("div",R,[(a(!0),i(p,null,V(o(f),t=>(a(),i("div",{key:t.key},[r(o(N),{type:"dashed",icon:t.icon},{default:_(()=>[r(x,{to:t.path,style:{"margin-left":".5rem"}},{default:_(()=>[C(F(t.name),1)]),_:2},1032,["to"])]),_:2},1032,["icon"])]))),128))])])]),e("div",T,[r(o(j),{onRegister:o(y)},null,8,["onRegister"])])],64)}}});const W=z($,[["__scopeId","data-v-41ace565"]]);export{W as default};
