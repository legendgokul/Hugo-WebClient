import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { of } from 'rxjs';
import { productinfo } from '../_models/productinfo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public apiURL :string = "https://hugo-e-commerce.onrender.com/";

  constructor(private http :HttpClient) {
    
  }

  fetchProductList(){
   // return of([{"id":1,"description":"HOUSE OF SOUND HOS Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/h/x/d/49-hos-1-android-house-of-sound-yes-original-imagt9bp4huqj3qs.jpeg?q=70","price":999,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":2,"description":"Noise Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice Assistant Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/l5ld8y80/smartwatch/f/k/q/-original-imagg8d9hbkhfffg.jpeg?q=70","price":1199,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":3,"description":"Fastrack Revoltt X|1.83'' HD Display|SingleSync BT Calling|Advanced Chipset|Calculator Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/u/e/d/-original-imagtvj2pfm4haw6.jpeg?q=70","price":1099,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":4,"description":"beatXP Marv Neo 1.85'' HD Display Bluetooth Calling Smart Watch, Health Tracking & IP68 Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/f/1/3/4-6-bxp-marv-neo-rosegold-android-ios-beatxp-yes-original-imagt9fsq8t4ymgm.jpeg?q=70","price":899,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":5,"description":"Fire-Boltt Hurricane 1.3&quot; Curved Glass Display with 360 Health Training, 100+ Sports Modes Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/h/m/e/-original-imagkfm8fgvwjy8y.jpeg?q=70","price":1199,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":6,"description":"Boult Crown 1.95'' Screen, BT Calling, Working Crown, Zinc Alloy Frame, 900 Nits, SpO2 Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/r/8/e/-original-imagr5kzfx45wggg.jpeg?q=70","price":1299,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":7,"description":"Fire-Boltt Ninja Calling Pro Plus 1.83 inch Display Smartwatch Bluetooth Calling, AI Voice Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/f/x/c/-original-imagjvdyuxbj3men.jpeg?q=70","price":1199,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":8,"description":"Noise Crew 1.38&quot; Round Display with Bluetooth Calling, Metallic finish, IP68 Rating Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/x/9/4/-original-imagtdqkhz3xdkdt.jpeg?q=70","price":1199,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":9,"description":"Fire-Boltt Ninja Calling Pro Plus 1.83 inch Display Smartwatch Bluetooth Calling, AI Voice Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/m/r/t/-original-imagjvdyrfgx65zx.jpeg?q=70","price":1199,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"},{"id":10,"description":"boAt Storm Call 2 1.83'' HD Display,BT Calling,boAt Coins & DIY Watch Face Studio Smartwatch","image":"https://rukminim2.flixcart.com/image/500/500/xif0q/smartwatch/p/x/0/-original-imagrc7zn78vdrkr.jpeg?q=70","price":1299,"review":"Good","stockStatus":true,"category":"smartwatch","seller":"sellerName"}]);
       return this.http.get<productinfo[]>(this.apiURL+"fetchProducts");
  }
}
