import{p as e,b as l,k as a,r as s,o,c as r,L as t,M as d,a as n,O as p}from"./vendor.def0bd7b.js";e("data-v-304a5e62");const u={class:"password-wrapper"};l();const c={props:{password:{type:String,default:""},maxlength:{type:Number,default:16},placeholder:{type:String,default:"密码"},label:{type:String,default:""},clearable:{type:Boolean,default:!0},rules:{type:Array,default:()=>[{required:!0,message:"密码不能为空",trigger:"onBlur"}]}},emits:["toggleShowPwd"],setup(e,{emit:l}){const c=a(!1);function m(){c.value=!c.value,l("toggleShowPwd",c.value)}return(l,a)=>{const i=s("van-field"),w=s("svg-icon");return o(),r("div",u,[t(n(i,{class:"password-item hide",modelValue:e.password,"onUpdate:modelValue":a[0]||(a[0]=e=>p(password)?password.value=e:null),type:"password",name:"password",label:e.label,placeholder:e.placeholder,clearable:e.clearable,maxlength:e.maxlength,rules:e.rules},null,8,["modelValue","label","placeholder","clearable","maxlength","rules"]),[[d,c.value]]),t(n(i,{class:"password-item show",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=e=>p(password)?password.value=e:null),type:"text",name:"password",label:e.label,placeholder:e.placeholder,clearable:e.clearable,maxlength:e.maxlength,rules:e.rules},null,8,["modelValue","label","placeholder","clearable","maxlength","rules"]),[[d,!c.value]]),n(w,{"icon-class":c.value?"close-eye":"open-eye","class-name":"pwd-icon",onClick:m},null,8,["icon-class"])])}},__scopeId:"data-v-304a5e62"},m=Object.assign(c,{install(e){e.component(c.name,c)}});export{m as Y};
