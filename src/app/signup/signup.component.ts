import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductserviceService} from "../service/productservice.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // loginForm = new FormGroup({
  //   userName: new FormControl('',[
  //     Validators.required]),
  //   password: new FormControl('',[
  //     Validators.required]),
  // });
  submitted:boolean = false;
  loginForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    address: new FormGroup({
      phone: new FormControl('',Validators.required),
      pincode: new FormControl('',Validators.required)
    }),
    shipadrs: new FormArray([]),
  });
  constructor(private router:Router,private productService:ProductserviceService) { }
data=[]
get f()
 { return this.loginForm.controls; }
get adres(){
  return this.loginForm.controls.address;
}
  ngOnInit(){
    this.productService.showHeader=false;
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
    
      // this.productService.headerDisplay.next()
      this.router.navigateByUrl('/products')
    }
    else{
      if(this.loginForm.controls.shipadrs.value.length==0){
        alert("add a shiping address")
      }
    }
    console.log(this.loginForm.value.address.phone)
  }
  onAddShipAdrs(){
    const control=new FormControl('',Validators.required);
    (<FormArray> this.loginForm.get('shipadrs')).push(control)
    this.data=this.loginForm.controls.shipadrs.value
  }
}
