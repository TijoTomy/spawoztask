import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

public showHeader:boolean=false;
headerDisplay=new Subject;
  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get<any>(environment.apiUrl)
  }
}
