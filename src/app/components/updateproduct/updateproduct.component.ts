import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ProductServiceComponent } from 'src/app/services/product-service/product-service.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product:any = {}
  id:any
  linkimg:any
  public files: any
  CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hait-10/image/upload";
  CLOUDINARY_PRESET = "assjshihi";
  constructor(private productService: ProductServiceComponent,
    private activatedRoute: ActivatedRoute,
    private _http: HttpClient
    ) { 
      this.files = []
    }
    onFileChanged(event:any) { 
      this.files = event.target.files[0]
    }
 

  
  onEdit() {
    // this.productService.updateProduct(this.product,this.id).subscribe(data => {
    //   console.log("hj");
      
    // })

    const formData = new FormData();
    formData.append('file', this.files, this.files.name);
    formData.append('upload_preset', this.CLOUDINARY_PRESET);
    this._http.post(this.CLOUDINARY_API,formData).subscribe(data => {
      this.linkimg = data;
      const product = {
        ...this.product, img: this.linkimg.url
      };
      this.productService.updateProduct(product, this.id).subscribe(data => {
        
      })
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => {
          this.product = data   
    })
  }

}
