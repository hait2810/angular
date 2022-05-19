import { Component, OnInit, Input } from '@angular/core';
import { typeProduct } from 'src/app/models/product';
import { ProductServiceComponent } from 'src/app/services/product-service/product-service.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id:any;
  product:any
  // @Input('data') productN!: typeProduct[];
  // productDetail!: typeProduct | undefined
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceComponent
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => {
      console.log(data);
      
      this.product = data;
    })
  }
  // onShow(id:number) { 
  //   console.log(id);
  //   this.productDetail = this.productN.find(item => item.id === id);
  // }


}
