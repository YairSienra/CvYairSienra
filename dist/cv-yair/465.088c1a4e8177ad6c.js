"use strict";(self.webpackChunkCvYair=self.webpackChunkCvYair||[]).push([[465],{5465:(N,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>q});var g=a(6895),l=a(7340),r=a(433),t=a(1571),m=a(3810),v=a(4859);let b=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-errorLoginFail"]],decls:6,vars:1,consts:[["mat-dialog-actions","",1,"but"],["mat-button","",1,"but",3,"mat-dialog-close"]],template:function(e,i){1&e&&(t.TgZ(0,"section")(1,"p"),t._uU(2,"No existe un usuario con esas credenciales"),t.qZA(),t.TgZ(3,"div",0)(4,"button",1),t._uU(5,"Ok"),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("mat-dialog-close",!0))},dependencies:[m.ZT,m.H8,v.lW],styles:[".but[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),o})();var Z=a(7430),f=a(529),u=a(1174);function C(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Ingrese un email Valido"),t.qZA())}function w(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Ingrese su contrasena"),t.qZA())}const h=function(o){return{"is-invalid":o}};function T(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h2",8),t._uU(8,"Login"),t.qZA(),t.TgZ(9,"p",9),t._uU(10," Para ver mi hoja de vida debes loguearte "),t.qZA(),t.TgZ(11,"form",10),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.loguearse())}),t.TgZ(12,"div",11),t._UZ(13,"input",12),t.YNc(14,C,2,0,"div",13),t.TgZ(15,"label",14),t._uU(16,"Email"),t.qZA()(),t.TgZ(17,"div",11),t._UZ(18,"input",15),t.YNc(19,w,2,0,"div",13),t.TgZ(20,"label",16),t._uU(21,"Password"),t.qZA()(),t.TgZ(22,"button",17),t._uU(23," Login"),t.qZA()(),t.TgZ(24,"div",18)(25,"a",19),t._UZ(26,"i",20),t.qZA(),t.TgZ(27,"a",19),t._UZ(28,"i",21),t.qZA(),t.TgZ(29,"a",19),t._UZ(30,"i",22),t.qZA()()(),t.TgZ(31,"div")(32,"p",23),t._uU(33," No tenes cuenta aun? "),t.TgZ(34,"a",24),t._uU(35,"Registrate"),t.qZA()()()()()()()()()}if(2&o){const e=t.oxw();t.Q6J("@fade",void 0),t.xp6(11),t.Q6J("formGroup",e.login),t.xp6(2),t.Q6J("ngClass",t.VKq(6,h,e.loginError&&e.login.controls)),t.xp6(1),t.Q6J("ngIf",e.loginError),t.xp6(4),t.Q6J("ngClass",t.VKq(8,h,e.loginError&&e.login.controls)),t.xp6(1),t.Q6J("ngIf",e.passError)}}function E(o,n){1&o&&(t.TgZ(0,"div",24),t._uU(1,"El nombre completo es requerido"),t.qZA())}function _(o,n){1&o&&(t.TgZ(0,"div",24),t._uU(1,"No es un mail valido"),t.qZA())}function y(o,n){1&o&&(t.TgZ(0,"div",24),t._uU(1,"Debe ingresar su password de 7 a 15 caracteres al menos"),t.qZA())}const d=function(o){return{"is-invalid":o}},A=[{path:"",children:[{path:"login",component:(()=>{class o{constructor(e,i,s,c,I){this.u=e,this.http=i,this.route=s,this.formBuilder=c,this.errorLogin=I,this.loginError=!1,this.passError=!1}ngOnInit(){this.login=this.formBuilder.group({Email:["",[r.kI.email,r.kI.required,r.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],Password:["",[r.kI.required]]}),this.checkLocalStorage()}loguearse(){if(this.login.invalid){let s=this.login.get("Email"),c=this.login.get("Password");return this.loginError=!!s?.errors,void(this.passError=!!c?.errors)}var e=this.login.get("Email")?.value,i=this.login.get("Password")?.value;this.http.post("https://yairsienracv.azurewebsites.net/api/Usuario/login",{Email:e,Password:i}).subscribe(s=>{null!=s?(localStorage.setItem("token","token"),this.u.flag=!0,this.route.navigate([""])):this.openDialog()})}checkLocalStorage(){localStorage.getItem("token")&&(this.u.flag=!0)}openDialog(){this.errorLogin.open(b)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.W),t.Y36(f.eN),t.Y36(u.F0),t.Y36(r.QS),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:1,vars:1,consts:[["class","vh-100 gradient-custom","class","scroll",4,"ngIf"],[1,"scroll"],[1,"container","py-5","h-80"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"card","bg-dark","text-white",2,"border-radius","1rem"],[1,"card-body","p-5","text-center"],[1,"mb-md-5","mt-md-4","pb-5"],[1,"fw-bold","mb-2","text-uppercase"],[1,"text-white-50","mb-5"],[3,"formGroup","ngSubmit"],[1,"form-outline","form-white","mb-4"],["type","email","formControlName","Email",1,"form-control",3,"ngClass"],[4,"ngIf"],["for","typeEmailX",1,"form-label"],["type","password","formControlName","Password",1,"form-control",3,"ngClass"],["for","typePasswordX",1,"form-label"],["type","submit",1,"btn","btn-outline-light","btn-lg","px-5"],[1,"d-flex","justify-content-center","text-center","mt-4","pt-1"],["href","#!",1,"text-white"],[1,"fab","fa-facebook-f","fa-lg"],[1,"fab","fa-twitter","fa-lg","mx-4","px-2"],[1,"fab","fa-google","fa-lg"],[1,"mb-0"],["href","http://localhost:4200/auth/registro",1,"text-white-50","fw-bold"]],template:function(e,i){1&e&&t.YNc(0,T,36,10,"section",0),2&e&&t.Q6J("ngIf",!i.u.flag)},dependencies:[g.mk,g.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".scroll[_ngcontent-%COMP%]{scroll-behavior:unset}"],data:{animation:[(0,l.X$)("fade",[(0,l.eR)("void => *",[(0,l.oB)({opacity:0}),(0,l.jt)(2e3)])])]}}),o})()},{path:"registro",component:(()=>{class o{constructor(e,i,s){this.http=e,this.route=i,this.formBuilder=s,this.datos={NombreCompleto:"",Email:"",Password:""},this.emailError=!1,this.nameError=!1,this.password=!1}ngOnInit(){this.registro=this.formBuilder.group({NombreCompleto:["",[r.kI.minLength(5),r.kI.maxLength(15),r.kI.required]],Email:["",[r.kI.email,r.kI.required,r.kI.pattern(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim)]],Password:["",[r.kI.required,r.kI.minLength(7),r.kI.maxLength(15)]]})}onSubmit(){if(this.registro.invalid){var e=this.registro.get("NombreCompleto"),i=this.registro.get("Email"),s=this.registro.get("Password");return this.nameError=!!e?.errors,this.emailError=!!i?.errors,void(this.password=!!s?.errors)}this.registrarse()}registrarse(){this.datos=this.registro.getRawValue(),this.http.post("http://localhost:5243/api/Usuario/registro",{NombreCompleto:this.datos.NombreCompleto,Email:this.datos.Email,Password:this.datos.Password}).subscribe(e=>{}),this.route.navigate(["auth/login"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.eN),t.Y36(u.F0),t.Y36(r.QS))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registro"]],decls:37,vars:14,consts:[[1,"scroll"],[1,"container","py-5","h-80"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"card","bg-dark","text-white",2,"border-radius","1rem"],[1,"card-body","p-5","text-center"],[1,"mb-md-5","mt-md-4","pb-5"],[1,"fw-bold","mb-2","text-uppercase"],[1,"text-white-50","mb-5"],["novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],[1,"form-outline","form-white","mb-4"],["type","text","id","NombreCompleto","formControlName","NombreCompleto",1,"form-control","form-control-lg",3,"ngClass"],["class","text-danger",4,"ngIf"],["for","NombreCompleto",1,"form-label"],["type","email","id","typeEmailX","formControlName","Email","required","",1,"form-control","form-control-lg",3,"ngClass"],["for","typeEmailX",1,"form-label"],["type","password","id","typePasswordX","formControlName","Password","required","",1,"form-control","form-control-lg",3,"ngClass"],["for","typePasswordX",1,"form-label"],["type","submit",1,"btn","btn-outline-light","btn-lg","px-5"],[1,"d-flex","justify-content-center","text-center","mt-4","pt-1"],["href","#!",1,"text-white"],[1,"fab","fa-facebook-f","fa-lg"],[1,"fab","fa-twitter","fa-lg","mx-4","px-2"],[1,"fab","fa-google","fa-lg"],[1,"text-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2",7),t._uU(8,"Registro"),t.qZA(),t.TgZ(9,"p",8),t._uU(10," Para ver mi hoja de vida debes registrarte "),t.qZA(),t.TgZ(11,"form",9),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(12,"div",10),t._UZ(13,"input",11),t.YNc(14,E,2,0,"div",12),t.TgZ(15,"label",13),t._uU(16,"Nombre Completo"),t.qZA()(),t.TgZ(17,"div",10),t._UZ(18,"input",14),t.YNc(19,_,2,0,"div",12),t.TgZ(20,"label",15),t._uU(21,"Email"),t.qZA()(),t.TgZ(22,"div",10),t._UZ(23,"input",16),t.YNc(24,y,2,0,"div",12),t.TgZ(25,"label",17),t._uU(26,"Password"),t.qZA()(),t.TgZ(27,"button",18),t._uU(28," Registrarse "),t.qZA(),t.TgZ(29,"div",19)(30,"a",20),t._UZ(31,"i",21),t.qZA(),t.TgZ(32,"a",20),t._UZ(33,"i",22),t.qZA(),t.TgZ(34,"a",20),t._UZ(35,"i",23),t.qZA()()()(),t._UZ(36,"div"),t.qZA()()()()()()),2&e&&(t.Q6J("@fade",void 0),t.xp6(11),t.Q6J("formGroup",i.registro),t.xp6(2),t.Q6J("ngClass",t.VKq(8,d,i.nameError&&i.registro.controls)),t.xp6(1),t.Q6J("ngIf",i.nameError),t.xp6(4),t.Q6J("ngClass",t.VKq(10,d,i.emailError&&i.registro.controls)),t.xp6(1),t.Q6J("ngIf",i.emailError),t.xp6(4),t.Q6J("ngClass",t.VKq(12,d,i.password&&i.registro.controls)),t.xp6(1),t.Q6J("ngIf",i.password))},dependencies:[g.mk,g.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".scroll[_ngcontent-%COMP%]{scroll-behavior:unset}mat-dialog-container[_ngcontent-%COMP%]{background:black}"],data:{animation:[(0,l.X$)("fade",[(0,l.eR)("void => *",[(0,l.oB)({opacity:0}),(0,l.jt)(2e3)])])]}}),o})()},{path:"**",redirectTo:"login"}]}];let U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(A)]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,U,r.UX,r.u5]}),o})()}}]);