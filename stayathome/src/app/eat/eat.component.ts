import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.css']
})
export class EatComponent implements OnInit {

  constructor() { 
 
  }

  ngOnInit() {
       //获得slider插件对象
       var gallery = mui('.mui-slider');
       gallery.slider({
         interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
       });
  }

}
