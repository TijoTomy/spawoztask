import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from "../service/productservice.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
public productData:any=[];
  constructor(private productService:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.productService.showHeader=true;

this.getProducts()
  }
  selectProduct(product:any){
    // debugger
    sessionStorage.setItem("selproduct",JSON.stringify(product))
    this.router.navigateByUrl('/product')

    
  }
getProducts(){
  this.productService.getProducts().subscribe(data=>{
    this.productData=data;
    console.log(data)
    
  },
  (error)=>{
    this.ngOnInit();
  }
  )
}
addCart(product:any){
  let cartItem:any=[];
  // debugger
  if(!localStorage.getItem('cart')){
    cartItem.push(product)
    localStorage.setItem('cart',JSON.stringify(cartItem))
    this.router.navigateByUrl('/cart')
  }
  else{
    let catdata:any=[];
    catdata = localStorage.getItem('cart')
    cartItem= JSON.parse(catdata);
    if(cartItem.filter((data:any)=>data.id==product.id).length==0){
    cartItem.push(product)
    }
    localStorage.setItem('cart',JSON.stringify(cartItem))
    this.router.navigateByUrl('/cart')
  }
}
}
