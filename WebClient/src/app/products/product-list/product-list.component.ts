import { Component, OnInit } from '@angular/core';
import { productinfo } from 'src/app/_models/productinfo';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productList : productinfo[] = [];
  constructor(private _productService : ProductService){
    
  }

  ngOnInit(): void {
  this.LoadProducts();   
  }

  LoadProducts(){
    this._productService.fetchProductList().subscribe({
      next:resp =>{ 
        this.productList = resp;
        console.log(resp);},
      error:err=>{console.log(err);}
    });
  }

  
}
