import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs';
import "rxjs/Rx";

@Injectable()
export class FindService {

  constructor(private http:Http) { }

  getDataList():Observable<MostNew>{
    return this.http.get("http://39.106.207.39:3000/findslist")
      .map(res=>res.json())
  }
}


export class MostNew{
  constructor(
    public dataList:string[]
  ){

  }
}