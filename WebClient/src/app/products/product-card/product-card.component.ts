import { Component, Input, OnInit } from '@angular/core';
import { productinfo } from 'src/app/_models/productinfo';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  @Input() product :productinfo|undefined;
  constructor(){
    
  }

  ngOnInit(): void {
    
  }

}
