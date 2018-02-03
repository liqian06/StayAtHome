import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private homeLogoImg:string = "../../assets/img/home-logo.png";
  private arr:string[] = ["吃","喝","玩","乐","·","要","啥","有","啥"];
  private newArr:string = "";  
  private slideI:number = 0;     

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
        if(this.slideI < this.arr.length){
            this.newArr += this.arr[this.slideI];
            document.getElementById("slideFont").innerHTML = "[" + this.newArr + "]";
            this.slideI++;
        }else{
            this.slideI = 0;
            this.newArr = "";
        }
    },400)
  }



  

}
