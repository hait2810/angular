import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import {UpdateproductComponent} from './components/updateproduct/updateproduct.component'

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "products", component: ProductComponent},
  {path: "product/:id", component: ProductdetailComponent},
  {path: "product/add", component: AddproductComponent},
  {path: "product/:id/edit",component: UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
