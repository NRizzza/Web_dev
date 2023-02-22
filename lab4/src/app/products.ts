export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image : string;
  rating: number;
  url:string;
}

export const products = [
  {
    id: 1,
    name: 'Bacarat Rouge 540',
    price: 142000,
    description: 'Maison Francis Kurkdjian Baccarat Rouge 540 парфюмерная вода EDP 70 мл',
    image: 'assets/ph/bacarat.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-parfjumernaja-voda-edp-70-ml-17302860/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Dear Polly',
    price: 135999,
    description: 'Vilhelm Parfumerie Dear Polly парфюмерная вода EDP 100 мл',
    image: 'assets/ph/dear.jpg',
    rating: 4.98,
    url:"https://kaspi.kz/shop/p/vilhelm-parfumerie-dear-polly-parfjumernaja-voda-edp-100-ml-101800845/?c=750000000#!/item"
  },
  {
    id: 3,
    name: 'Byredo',
    price: 96995,
    description: 'Byredo Bal D’Afrique парфюмерная вода EDP 50 мл',
    image: 'assets/ph/byredo.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/byredo-bal-d-afrique-parfjumernaja-voda-edp-50-ml-17300872/?c=750000000#!/item"
  },
  {
    id: 4,
    name: 'Black Opium',
    price: 54582,
    description: 'Yves Saint Laurent Black Opium парфюмерная вода EDP 50 мл',
    image: 'assets/ph/black.jpg',
    rating:5
  },
  {
    id: 5,
    name: 'MONTALE',
    price: 44997,
    description: 'MONTALE Intense Cafe парфюмерная вода EDP 100 мл',
    image: 'assets/ph/montale.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/montale-intense-cafe-parfjumernaja-voda-edp-100-ml-17300132/?c=750000000#!/item"
  }
 
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/