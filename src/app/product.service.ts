import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Meniul Zilei',
      'desc 1',
      30,
      1,
      [
        'assets/meniul-zilei1_1.jpg',
        'assets/meniul-zilei1_2.jpg',
        'assets/meniul-zilei1_3.jpg',
      ],
      'assets/meniul-zilei1'
    ),
    new Product(
      2,
      'Platou Gratar',
      'desc 2',
      50,
      1,
      [
        'assets/meniul-zilei2_1.jpg',
        'assets/meniul-zilei2_2.jpg',
        'assets/meniul-zilei2_3.jpg',
      ],
      'assets/meniul-zilei2'
    ),
    new Product(
      3,
      'Meniu Aripioare',
      'desc 3',
      30,
      1,
      [
        'assets/meniul-zilei3_1.jpg',
        'assets/meniul-zilei3_2.jpg',
        'assets/meniul-zilei3_3.jpg',
      ],
      'assets/meniul-zilei3'
    ),
  ];
  getFrontImage: any;

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
