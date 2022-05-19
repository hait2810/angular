import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Output() onAdd = new EventEmitter()
  product: {name:string,price:number} = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("hj", this.product);
    this.onAdd.emit(this.product)
  }

}
