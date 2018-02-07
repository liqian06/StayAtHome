import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs';
import "rxjs/Rx";

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  login(body):Observable<LoginInfo>{
    return this.http.post("http://39.106.207.39:3000/login",body)
      .map(res=>res.json())
  }

  code(params):Observable<LoginInfo>{
    return this.http.get("http://39.106.207.39:3000/stayatsendcode",{params})
    .map(res=>res.json())
  }

  register(body):Observable<LoginInfo>{
    return this.http.post("http://39.106.207.39:3000/register",body)
      .map(res=>res.json())
  }
}

export class LoginInfo{
  constructor(
    public code:number,
    public msg:string
  ){

  }
}
