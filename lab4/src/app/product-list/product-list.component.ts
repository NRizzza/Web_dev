import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share(name:string, url:string) {
    // window.alert('The product has been shared!');
    window.open(`https://telegram.me/share/url?url=Welcome, you should buy ${name} &text= on ${url}`)
   
  }

 
}
