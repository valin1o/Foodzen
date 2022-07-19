import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'product 1',
      'this is product 1',
      100,
      'condiments product 1'
    ),
    new Product(
      2,
      'product 2',
      'this is product 2',
      150,
      'condiments product 2'
    ),
    new Product(
      3,
      'product 3',
      'this is product 3',
      200,
      'condiments product 3'
    ),
    new Product(
      4,
      'product 4',
      'this is product 4',
      300,
      'condiments product 4'
    ),
    new Product(
      5,
      'product 5',
      'this is product 5',
      100,
      'condiments product 5'
    ),
    new Product(
      6,
      'product 6',
      'this is product 6',
      600,
      'condiments product 6'
    ),
    new Product(
      7,
      'product 7',
      'this is product 7',
      200,
      'condiments product 7'
    ),
    new Product(
      8,
      'product 8',
      'this is product 8',
      800,
      'condiments product 8'
    ),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
