import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { mobileValidators } from '../validators/validators';
import { LoginService, LoginInfo } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder, private loginServiice:LoginService) {
    this.formModel = fb.group({
      usertel: ["", [mobileValidators, Validators.required]],
      userpwd: ["", [Validators.required]]
    })
  }

  ngOnInit() {
  }

  formSubmit() {
    console.log(this.formModel.value);
    // valid 表示判断当前 正则是否通过 
    let usertelIsValid = this.formModel.get("usertel").valid;
    let userpwdIsValid = this.formModel.get("userpwd").valid;
    console.log("手机校验结果是 :" + usertelIsValid);
    console.log("密码校验结果是 :" + userpwdIsValid);
    mui.ready(($)=> {
      if (usertelIsValid) {
        if (userpwdIsValid) {
          this.loginServiice.login(this.formModel.value).subscribe(
            data=>{
              $.toast(data.msg, { duration: '800', type: 'div' })
              if(data.code == 1){
                window.localStorage.setItem("usertel",this.formModel.value["usertel"])
                window.history.go(-1)
              }
            });

        } else {
          $.toast('请输入密码', { duration: '1000', type: 'div' })
        }
      } else {
        $.toast('手机号格式错误', { duration: '1000', type: 'div' })
      }
      return false;
    })
  }
  goback() {
    window.history.go(-1)
  }


}
