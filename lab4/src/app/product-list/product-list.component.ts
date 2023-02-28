import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];
  filteredProducts = [...products]
  pickedCategory ='None'

  share(name:string, url:string) {
    window.open(`https://telegram.me/share/url?url=Welcome, купи Ризе ${name} &text= по ссылке ${url}`)
   
  }
  filterList(){
    if(this.pickedCategory == 'None'){
      this.filteredProducts = this.products;
    }
    else{
      this.filteredProducts = this.products.filter(p  => p.category === this.pickedCategory);
    }
  }

  updateFilter(cat: string){
    this.pickedCategory = cat;
    this.filterList();
  }
  
  increaseLikes(name: string){
    this.products.filter(p => p.name == name).map(p => p.likes++);
  }

  deleteItem(id: number){
    this.products = this.products.filter(p => p.id != id);
    this.filterList();
  }
}



import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];
  filteredProducts = [...products]
  pickedCategory ='None'

  share(name:string, url:string) {
    window.open(`https://telegram.me/share/url?url=Welcome, купи Ризе ${name} &text= по ссылке ${url}`)
   
  }
  filterList(){
    if(this.pickedCategory == 'None'){
      this.filteredProducts = this.products;
    }
    else{
      this.filteredProducts = this.products.filter(p  => p.category === this.pickedCategory);
    }
  }

  updateFilter(cat: string){
    this.pickedCategory = cat;
    this.filterList();
  }
  
  increaseLikes(name: string){
    this.products.filter(p => p.name == name).map(p => p.likes++);
  }

  deleteItem(id: number){
    this.products = this.products.filter(p => p.id != id);
    this.filterList();
  }
}



