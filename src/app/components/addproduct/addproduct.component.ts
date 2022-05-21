import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { typeProduct } from 'src/app/models/product';
import { ProductServiceComponent } from 'src/app/services/product-service/product-service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Output() onAdd = new EventEmitter()
  product:any = {

  }
  linkimg: any
  public files: any;
  CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hait-10/image/upload";
  CLOUDINARY_PRESET = "assjshihi";
  constructor(private productService: ProductServiceComponent,
    private _http: HttpClient) {
    this.files = []
  
  }
  onFileChanged(event:any){
    this.files = event.target.files[0];
   
    
  }

  ngOnInit(): void {
  }
  onSubmit() {
    
   const formData = new FormData();
    formData.append("file", this.files,this.files.name);
    formData.append("upload_preset", this.CLOUDINARY_PRESET);
    this._http.post(this.CLOUDINARY_API, formData).subscribe(data => {
       this.linkimg = data;
       console.log(this.linkimg.url);
       const product = {
        ...this.product, img: this.linkimg.url
      };
    
      
          this.productService.addProduct(product).subscribe(data => {
              
              
         })
        
    })

   
    
    
  }

}
