import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs';
import "rxjs/Rx";

@Injectable()
export class HomeService {

  constructor(private http:Http) { }

  getBanner():Observable<Banner[]>{
    return this.http.get("http://39.106.207.39:3000/bannerlist")
      .map(res=>res.json())
  }

  getHomeList1():Observable<HomeList1[]>{
    return this.http.get("http://39.106.207.39:3000/homesec")
      .map(res=>res.json())
  }

  getHomeList2():Observable<HomeList2[]>{
    return this.http.get("http://39.106.207.39:3000/homefirst")
      .map(res=>res.json())
  }

}

export class Banner{
  constructor(
    public ad_id:number,
    public ad_name:string,
    public ad_links:number,
    public ad_type:number,
    public ad_pic_links:string,
    public ad_sort:number,
    public describe:string,
    public click
  ){

  }
}

export class HomeList1{
  constructor(
   
  ){

  }
}

export class HomeList2{
  constructor(
   
  ){

  }
}