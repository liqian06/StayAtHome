import { FormControl,FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

import "rxjs/Rx";


//  // 自定义校验器
export function mobileValidators(control:FormControl){
    var reg = /^1(3|5|7|8)\d{9}$/;
    var valid  =  reg.test(control.value);
    console.log("usertel 的校验结果是 :"+valid);
    return valid?null:{usertel:true};
    // return valid;
}

// 比较 2次密码是否一致 
export function equalPasswordValidators(group:FormGroup):any{
    let password:FormControl = group.get("password") as FormControl;
    let confirmpwd:FormControl = group.get("confirmpwd") as FormControl;
    console.log(password);

    let valid:boolean = (password.value === confirmpwd.value)  ?true:false;
    
    console.log("密码校验的正则是: "+ valid);

    return valid?null : {equal:"密码和确认密码不匹配!"}
}