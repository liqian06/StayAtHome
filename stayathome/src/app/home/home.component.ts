import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { Observable } from 'rxjs';
import { Banner, HomeService, HomeList1, HomeList2 } from '../service/home.service';
// import * as mui from "../../assets/js/mui.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewChecked{

  private homeLogoImg:string = "http://39.106.207.39/img/home-logo.png";
  private arr:string[] = ["吃","喝","玩","乐","·","要","啥","有","啥"];
  private newArr:string = "";  
  private slideI:number = 0;   
  
  private banners:Banner[];
  private homeList1:HomeList1;
  private homeList2:HomeList2;

  private timer1;
  private timer2;

  constructor(private homeService:HomeService) { }

  ngOnInit() {

    this.homeService.getBanner().subscribe(data=>this.banners = data);

    this.homeService.getHomeList1().subscribe(data=>this.homeList1 = data[0]);

    this.homeService.getHomeList2().subscribe(data=>this.homeList2 = data[0]);

    this.timer1 = setTimeout(function(){
      // clearInterval(this.timer1)
      var gallery = mui('#slider');
      gallery.slider({
        interval:0//自动轮播周期，若为0则不自动播放，默认为0；
      });
    },300)
  }

  sao(){
    console.log("点击了扫一扫")
    // var scan = null;
    // console.log(document)
    // document.addEventListener("plusready",plusready,false);
    // function plusready(){ 
    //   console.log(123) 
    //   scan = new plus.barcode.Barcode("box");
    //   scan.start();
    // }
  }

  ngAfterViewChecked(){
    if(document.getElementById("slideFont")){
      clearInterval(this.timer2)
      this.setTime(); 
    }
  }
  
  setTime(){
    this.timer2=setInterval(()=>{
      clearInterval(this.timer2);
      if(document.getElementById("slideFont")){
        if(this.newArr.length < this.arr.length){
            this.newArr += this.arr[this.slideI];
            document.getElementById("slideFont").innerText = "[ " + this.newArr + " ]";
            this.slideI++;
        }else{
            this.slideI = 0;
            this.newArr = "";
        }
      }
    },400)
  }

}
