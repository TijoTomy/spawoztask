import { Component,OnInit } from '@angular/core';
import {ProductserviceService} from "./service/productservice.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spawoztask';
  constructor(public productService:ProductserviceService){

  }
  ngOnInit(){

  }
  getcurrenturl(){

  }

}
