import{_ as v,h,M as y,G as R,r as V,o as f,c,a as e,k as l,j as x,I as m,J as d,L as D}from"./0goSeNrM.js";const I={class:"form_container"},S={class:"form_col file"},k={for:"file",class:"flie_label"},A={for:"file",class:"flie_label"},T=["src"],U={class:"form_col"},z={for:"username"},B={class:"form_col"},C={for:"email"},F={class:"form_col"},M={for:"password"},N={__name:"Register",setup(Z){const u=h(),_=y("file"),s=R({password:"",email:"",username:""}),n=V(),g=async()=>{const t=new FormData,a=_.value.files[0];if(!(a&&/^(image\/jpeg|image\/png|image\/gif|image\/bmp|image\/webp)$/.test(a.type))){alert("Valid image file.");return}if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s.email)){alert("Invalid email address.");return}if(s.password.length<6){alert("注册密码不能少于6位数");return}if(s.username.length==0){alert("注册昵称不能为空");return}t.append("file",a),t.append("fileName",a.name.split(".")[0]),t.append("timestamp",Date.now()),t.append("email",s.email),t.append("password",s.password),t.append("username",s.username);try{const r="/register",w={method:"post",body:t},i=await u.register(r,w);console.log("上传成功:",i.data),s.email="",s.password="",s.username="",i.data.code==200&&alert(i.data.message)}catch(r){console.error("上传失败:",r)}},b=t=>{const a=t.target.files[0],o=new FileReader;o.onload=function(p){const r=p.target.result;n.value=r},o.readAsDataURL(a)};return(t,a)=>(f(),c("div",I,[e("form",{onSubmit:D(g,["prevent"])},[e("div",S,[e("label",k,[a[3]||(a[3]=e("span",null,"上传头像: ",-1)),e("input",{type:"file",name:"file",ref:"file",id:"file",onChange:b},null,544)]),e("label",A,[l(n)?(f(),c("img",{key:0,src:l(n),alt:"预览"},null,8,T)):x("",!0)])]),e("div",U,[e("label",z,[m(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>l(s).username=o),id:"username",name:"username",placeholder:"输入昵称"},null,512),[[d,l(s).username]])])]),e("div",B,[e("label",C,[m(e("input",{type:"email","onUpdate:modelValue":a[1]||(a[1]=o=>l(s).email=o),id:"email",name:"email",placeholder:"输入邮箱"},null,512),[[d,l(s).email]])])]),e("div",F,[e("label",M,[m(e("input",{type:"password","onUpdate:modelValue":a[2]||(a[2]=o=>l(s).password=o),id:"password",name:"password",placeholder:"输入密码"},null,512),[[d,l(s).password]])])]),a[4]||(a[4]=e("div",{class:"form_col submit"},[e("label",{for:"submit"},[e("button",{type:"submit",name:"submit",id:"submit"},"注册")])],-1))],32)]))}},G=v(N,[["__scopeId","data-v-7f84d068"]]);export{G as default};