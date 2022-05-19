import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "products", component: ProductComponent},
  {path: "product/:id", component: ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
