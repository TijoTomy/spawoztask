import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdescComponent } from './productdesc/productdesc.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"",redirectTo:"signup", pathMatch: 'full'},
  {path:"signup",component:SignupComponent},
  {path:"products",component:ProductlistComponent},
  {path:"product",component:ProductdescComponent},
  {path:"cart",component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
