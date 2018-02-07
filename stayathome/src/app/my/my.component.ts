import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }

  usetel:string = "登录/注册"
  ngOnInit() {
      if(window.localStorage.getItem("usertel")){
        this.usetel = window.localStorage.getItem("usertel")
      }
  }

}
