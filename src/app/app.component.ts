import { Component } from '@angular/core';
import { typeProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buoi1';
  myName = "Hai"
  productN: typeProduct[] = [
    {
      id:1,
      name:"Hai",
      price:1359,
      status:false
    },
    {
      id:2,
      name:"Hai2",
      price:13591,
      status:true
    }
  ]
  onHandleAdd(product:any) {
    console.log(product);
    this.productN.push(product)
    
  }
}
