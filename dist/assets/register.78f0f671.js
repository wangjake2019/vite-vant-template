var e=(e,a,l)=>new Promise(((o,s)=>{var r=e=>{try{d(l.next(e))}catch(a){s(a)}},n=e=>{try{d(l.throw(e))}catch(a){s(a)}},d=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,n);d((l=l.apply(e,a)).next())}));import{L as a,t as l}from"./index.d5dc0894.js";import{v as o}from"./index.f511acbe.js";import{Y as s}from"./index.22f897c5.js";import{e as r,v as n,B as d,f as t,k as u,r as c,o as i,g as p,w as m,m as f,a as h,l as v,I as b}from"./vendor.def0bd7b.js";const g=b("获取验证码"),w={class:"form-btn"},y=b(" 注册 "),_={class:"handle"},x=b(" 同意"),V=v("a",{href:"javascript:;"},"《用户隐私协议》",-1),j={setup(b){r(),n();const j="onBlur",k=d({phone:"",password:"",code:""}),U={phone:[{validator:(e,a)=>e?!!o(e)||"手机号格式不正确！":"请填写手机号码！",trigger:j}],password:[{required:!0,message:"密码不能为空",trigger:j}],code:[{pattern:/\d{6}/,message:"验证码格式不正确",trigger:j}]},B=t((()=>{const{phone:e,password:a,code:l}=k;return!!(e&&a&&l)})),P=u(!1);function q(){return e(this,null,(function*(){try{l.success("短信发送成功")}catch(e){l.fail("获取短信失败，请稍后再试...")}}))}const z=a=>e(this,null,(function*(){try{l.success("注册成功")}catch(e){l.fail("注册失败，请稍后再试...")}}));return(e,l)=>{const o=c("van-field"),r=c("van-col"),n=c("van-button"),d=c("van-row"),t=c("van-cell-group"),u=c("van-form"),b=c("van-radio"),j=c("van-radio-group");return i(),p(f(a),null,{body:m((()=>[h(u,{"label-width":"0",onSubmit:z},{default:m((()=>[h(t,{inset:""},{default:m((()=>[h(o,{modelValue:f(k).phone,"onUpdate:modelValue":l[0]||(l[0]=e=>f(k).phone=e),rules:U.phone,name:"phone",label:"",placeholder:"手机号",maxlength:"11",clearable:""},null,8,["modelValue","rules"]),h(f(s),{password:f(k).password,rules:U.password,placeholder:"登录密码",label:"",maxlength:16,clearable:!0},null,8,["password","rules"]),h(d,{gutter:"20"},{default:m((()=>[h(r,{span:"16"},{default:m((()=>[h(o,{modelValue:f(k).code,"onUpdate:modelValue":l[1]||(l[1]=e=>f(k).code=e),rules:U.code,name:"code",label:"",placeholder:"验证码",maxlength:"6",clearable:""},null,8,["modelValue","rules"])])),_:1}),h(r,{span:"8"},{default:m((()=>[h(n,{disabled:!f(k).phone,plain:"",hairline:"",round:"",size:"small",onClick:q,class:"code-btn"},{default:m((()=>[g])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1}),v("div",w,[h(n,{round:"",block:"",type:"primary","native-type":"submit",class:"btn-item h50",disabled:!f(B)},{default:m((()=>[y])),_:1},8,["disabled"])])])),_:1})])),foot:m((()=>[v("div",null,[v("div",_,[h(j,{modelValue:P.value,"onUpdate:modelValue":l[2]||(l[2]=e=>P.value=e)},{default:m((()=>[h(b,{name:"1","checked-color":"var( --yu-yellow-color )"},{default:m((()=>[x,V])),_:1})])),_:1},8,["modelValue"])])])])),_:1})}}};export{j as default};
