import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() data!:string;
  constructor() {}
  ngOnInit():void {

  }
  title = 'buoi1';
}



// tạo component ng g c header --skip-tests