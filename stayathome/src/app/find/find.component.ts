import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { MostNew, FindService } from '../service/find.service';
// import * as mui from "../../assets/js/mui.js"
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  private list:MostNew;
  private dataList:MostNew;
  private dataIndex:number;
  private muiControlContent:any;

  constructor(private findService:FindService) { }

  ngOnInit() {
    mui.ready(function() {
      mui('.mui-scroll-wrapper').scroll({
        bounce: true,
        indicators: true,
        // deceleration:mui.os.ios?0.003:0.0009
      });
      mui('.mui-scroll').on('tap','.mui-control-item:not(.mui-active)',function(){
        mui('.mui-slider').slider().gotoItem(this.getAttribute('data-index'));
        console.log(this.getAttribute('data-index'))
        this.dataIndex = this.getAttribute('data-index');
        console.log(this.dataIndex)

      
      });   
         
    })
    this.findService.getDataList().subscribe(data=>this.dataList = data[0]);
    this.dataIndex = mui(".mui-control-item.mui-active")[0].getAttribute("data-index");
    // this.muiControlContent = mui(".mui-control-item");
    // console.log(this.muiControlContent)

    
}




}
