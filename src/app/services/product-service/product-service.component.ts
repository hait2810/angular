import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

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
  getProducts() {
    return this.http.get(apiUrl);
  }
  getProduct(id:number | string) {
    return this.http.get(`${apiUrl}/${id}`);
}
  ngOnInit(): void {  
  }

}
