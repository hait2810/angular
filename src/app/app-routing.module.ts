import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import {UpdateproductComponent} from './components/updateproduct/updateproduct.component'
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "products",  canActivate: [AuthGuard], component: ProductComponent},
  {path: "product/:id", component: ProductdetailComponent},
  {path: "product/add" ,  component: AddproductComponent},
  {path: "product/:id/edit",component: UpdateproductComponent},
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
