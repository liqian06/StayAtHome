import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { mobileValidators } from '../validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formModel: FormGroup;
  constructor(fb: FormBuilder, private loginService:LoginService) {
    this.formModel = fb.group({
      usertel: ["", [mobileValidators, Validators.required]],
      userpwd: ["", Validators.required],
      code:["", Validators.required]
    })
  }
  

  ngOnInit() {
  }

  goback(){
    window.history.go(-1)
  }

  getCode(){
    mui.ready(($)=> {
      console.log("code");
      var usertel = this.formModel.value["usertel"];
      this.loginService.code({usertel,type:"1"}).subscribe(
        data=>{
          console.log(data);
          $.toast(data.msg, { duration: '800', type: 'div' })
        }
      )
    })
  }

  formSubmit() {
    console.log(this.formModel.value);
    // valid 表示判断当前 正则是否通过 
    let usertelIsValid = this.formModel.get("usertel").valid;
    let userpwdIsValid = this.formModel.get("userpwd").valid;
    let codeIsValid = this.formModel.get("code").valid;
    console.log("手机校验结果是 :" + usertelIsValid);
    console.log("密码校验结果是 :" + userpwdIsValid);
    mui.ready(($)=> {
      if (usertelIsValid) {
        if (userpwdIsValid) {
          if(codeIsValid){
            this.loginService.register(this.formModel.value).subscribe(
              data=>{
                $.toast(data.msg, { duration: '800', type: 'div' })
                if(data.code == 1){
                  window.localStorage.setItem("usertel",this.formModel.value["usertel"])
                  window.location.href="/layout/my";
                }
              });
          }else{
            $.toast('请输入验证码', { duration: '1000', type: 'div' })
          }

        } else {
          $.toast('密码格式错误', { duration: '1000', type: 'div' })
        }
      } else {
        $.toast('手机号格式错误', { duration: '1000', type: 'div' })
      }
      return false;
    })
  }
}
