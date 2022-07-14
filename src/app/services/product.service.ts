import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';
@Injectable({providedIn:'root'})

export class ProductService {
  products: Product[] = [
    {
      id: 0,
      title: 'sarmale',
      description: 'Descriere pentru sarmale',
      price: 30,
    },
    {
      id: 1,
      title: 'mamaliga',
      description: 'Descriere pentru mamaliga',
      price: 20,
    },
    {
      id: 2,
      title: 'branza',
      description: 'Descriere pentru branza',
      price: 70,
    },
  ];

  getProducts(){
    return this.products;
  }
}
