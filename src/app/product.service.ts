import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'name 1', 'desc 1', 100, 1, [
      'assets/mancare1_1.jpg',
      'assets/mancare1_1.jpg',
      'assets/mancare1_1.jpg',
    ]),
    new Product(2, 'name 2', 'desc 2', 200, 1, [
      'assets/mancare1_1.jpg',
      'assets/mancare1_1.jpg',
      'assets/mancare1_1.jpg',
    ]),
    new Product(3, 'name 3', 'desc 3', 320, 1, [
      'assets/mancare1_1.jpg',
      'assets/mancare1_1.jpg',
      'assets/mancare1_1.jpg',
    ]),
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
