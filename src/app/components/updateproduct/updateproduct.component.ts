import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ProductServiceComponent } from 'src/app/services/product-service/product-service.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product:any = {}
  id:any
  constructor(private productService: ProductServiceComponent,
    private activatedRoute: ActivatedRoute
    ) { }

 

  
  onEdit() {
    this.productService.updateProduct(this.product,this.id).subscribe(data => {
      console.log("hj");
      
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => {
          this.product = data   
    })
  }

}
