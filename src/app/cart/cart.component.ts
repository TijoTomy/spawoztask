import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems:any=[];
  constructor() { }

  ngOnInit(): void {
  this.getCartItems();
  }
  getCartItems(){
let cart:any=[];
cart=localStorage.getItem('cart')
this.cartItems=JSON.parse(cart)
  }

}
