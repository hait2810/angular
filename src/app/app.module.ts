import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductServiceComponent } from './services/product-service/product-service.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    AboutComponent,
    ProductComponent,
    ProductdetailComponent,
    AddproductComponent,
    ProductServiceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
