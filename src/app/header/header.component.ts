import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from "../service/productservice.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    // this.productService.showHeader=true;
  }
  navigateCart(){
this.router.navigateByUrl('/cart')
  }
}
