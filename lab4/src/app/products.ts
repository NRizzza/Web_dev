export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image : string;
  rating: number;
  url:string;
  category: string;
}

export const products = [
  {
    id: 1,
    name: 'Bacarat Rouge 540',
    price: 142000,
    description: 'Maison Francis Kurkdjian Baccarat Rouge 540 парфюмерная вода EDP 70 мл',
    image: 'assets/ph/bacarat.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-parfjumernaja-voda-edp-70-ml-17302860/?c=750000000#!/item",
    category: "Нишевые/сухие"
  },
  {
    id: 2,
    name: 'Dear Polly',
    price: 135999,
    description: 'Vilhelm Parfumerie Dear Polly парфюмерная вода EDP 100 мл',
    image: 'assets/ph/dear.jpg',
    rating: 4.98,
    url:"https://kaspi.kz/shop/p/vilhelm-parfumerie-dear-polly-parfjumernaja-voda-edp-100-ml-101800845/?c=750000000#!/item",
    category:"Брендовые/свежие"
  },
  {
    id: 3,
    name: 'Byredo',
    price: 96995,
    description: 'Byredo Bal D’Afrique парфюмерная вода EDP 50 мл',
    image: 'assets/ph/byredo.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/byredo-bal-d-afrique-parfjumernaja-voda-edp-50-ml-17300872/?c=750000000#!/item",
    category:"Нишевые/сухие"
  },
  {
    id: 4,
    name: 'Black Opium',
    price: 54582,
    description: 'Yves Saint Laurent Black Opium парфюмерная вода EDP 50 мл',
    image: 'assets/ph/black.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/yves-saint-laurent-black-opium-parfjumernaja-voda-edp-50-ml-17301512/?c=750000000#!/item",
    category:"Нишевые/свежие"
  },
  {
    id: 5,
    name: 'MONTALE',
    price: 44997,
    description: 'MONTALE Intense Cafe парфюмерная вода EDP 100 мл',
    image: 'assets/ph/montale.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/montale-intense-cafe-parfjumernaja-voda-edp-100-ml-17300132/?c=750000000#!/item",
    category:"Брендовые/сухие"
  },
  {
    id: 6,
    name: 'Black Dress',
    price: 21945,
    description: 'Guerlain La Petite Robe Noire Ma Robe Cocktail туалетная вода EDT 30 мл',
    image: 'assets/ph/dress.jpg',
    rating:4.65,
    url:"https://kaspi.kz/shop/p/guerlain-la-petite-robe-noire-ma-robe-cocktail-tualetnaja-voda-edt-30-ml-100868479/?c=750000000#!/item",
    category:"Брендовые/свежие"
  },
  {
    id: 7,
    name: 'Lancome',
    price: 51980,
    description: 'LANCOME La Vie Est Belle парфюмерная вода EDP 30 мл',
    image: 'assets/ph/lancome.jpg',
    rating:4.12,
    url:"https://kaspi.kz/shop/p/lancome-la-vie-est-belle-parfjumernaja-voda-edp-30-ml-17301543/?c=750000000#!/item",
    category:"Нишевые/свежие"
  },
  {
    id: 8,
    name: 'Molecule',
    price: 47266,
    description: 'Escentric Molecules Molecule 02 туалетная вода EDT 100 мл',
    image: 'assets/ph/molecule.jpg',
    rating:3.98,
    url:"https://kaspi.kz/shop/p/escentric-molecules-molecule-02-tualetnaja-voda-edt-100-ml-17300351/?c=750000000#!/item",
    category:"Нишевые/свежие"
  },
  {
    id: 9,
    name: 'Kirke',
    price: 60963,
    description: 'Tiziana Terenzi Kirke парфюмерная вода EDP 100 мл',
    image: 'assets/ph/kirke.jpg',
    rating:5,
    url:"https://kaspi.kz/shop/p/tiziana-terenzi-kirke-parfjumernaja-voda-edp-100-ml-17301541/?c=750000000#!/item",
    category:"Брендовые/сухие"
  },
  {
    id: 10,
    name: 'Lost Cherry',
    price: 163990,
    description: 'TOM FORD Lost Cherry парфюмерная вода EDP 50 мл',
    image: 'assets/ph/cherry.jpg',
    rating:4.81,
    url:"https://kaspi.kz/shop/p/tom-ford-lost-cherry-parfjumernaja-voda-edp-50-ml-17302405/?c=750000000#!/item",
    category:"Брендовые/сухие"
  }
];
