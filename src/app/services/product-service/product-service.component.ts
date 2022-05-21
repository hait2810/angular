import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { typeProduct } from 'src/app/models/product';

const apiUrl = 'http://localhost:3001/products';
@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ProductServiceComponent implements OnInit {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<typeProduct[]> {
    return this.http.get<typeProduct[]>(apiUrl);
  }
  getProduct(id:number | string):Observable<typeProduct> {
    return this.http.get<typeProduct>(`${apiUrl}/${id}`);
} 
  addProduct(product:typeProduct[]) {
      return this.http.post(apiUrl, product);
  }
  deleteProduct(id:number): Observable<typeProduct> { 
      return this.http.delete<typeProduct>(`${apiUrl}/${id}`);
  }
  updateProduct(product:typeProduct[], id:number | string) {
    return this.http.put(`${apiUrl}/${id}`, product)
  }
  ngOnInit(): void {  
  }

}
