import { Component, OnInit } from '@angular/core';
import { typeProduct } from '../models/product';
import { ProductServiceComponent } from '../services/product-service/product-service.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: typeProduct[];
  constructor(private productService: ProductServiceComponent) {
    this.listProduct()
  }
  productStatus:boolean = true;
  title = "Hai ";
  listProduct() {
    this.productService.getProducts().subscribe((data) => {
  //    console.log(data);
      
        this.products = data;
        
    })
  }
  onDelete(id:number) {
    this.productService.deleteProduct(id).subscribe((data) => {
        this.products = this.products.filter(data => data.id !== id);
    })
    
    
  }
  // ProductList: {id:number, name:string, price:number, status: boolean}[]  = [
  //     {
  //       id:1,
  //       name:"Hai",
  //       price:1359,
  //       status:false
  //     },
  //     {
  //       id:2,
  //       name:"Hai2",
  //       price:13591,
  //       status:true
  //     }

  // ]
  // productDetail!: typeProduct | undefined
  onHandleClick(){
    
    this.productStatus = !this.productStatus
    
  }
  // onDelete(id:number) {
  //   console.log(id);
  //   this.ProductList = this.ProductList.filter(item => item.id != id)
  // }
  // change(event:any) {
  //     this.title = event.target.value
      
  // }
  // onAdd(bookForm:any) {
   
  //     this.ProductList.push(bookForm.value)
      
  // }

  // onShow(id:number) {
  //         this.productDetail = this.ProductList.find(item => item.id  === id)
  //         console.log(this.productDetail);
  // }
 

  ngOnInit(): void {
    this.listProduct();
  }

}
