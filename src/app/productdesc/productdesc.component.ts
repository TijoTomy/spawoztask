import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from "../service/productservice.service"

@Component({
  selector: 'app-productdesc',
  templateUrl: './productdesc.component.html',
  styleUrls: ['./productdesc.component.css']
})
export class ProductdescComponent implements OnInit {
productData:any={} as any;
  constructor(private productService:ProductserviceService) { }

  ngOnInit() {
    let data:any={};
    this.productService.showHeader=true;
    data= sessionStorage.getItem('selproduct')
    this.productData=JSON.parse(data)
  }

}
