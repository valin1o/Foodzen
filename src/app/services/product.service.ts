import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';
@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [
    {
      id: 0,
      title: 'sarmale',
      description: 'Descriere pentru sarmale',
      price: 30,
      condiments: 'condimente sarmale',
    },
    {
      id: 1,
      title: 'mamaliga',
      description: 'Descriere pentru mamaliga',
      price: 20,
      condiments: 'condimente mamaliga',
    },
    {
      id: 2,
      title: 'branza',
      description: 'Descriere pentru branza',
      price: 70.02,
      condiments: 'condimente branza',
    },
    {
      id: 3,
      title: 'mici',
      description: 'Descriere pentru branza',
      price: 20.4,
      condiments: 'condimente branza',
    },
    {
      id: 4,
      title: 'mustar',
      description: 'Descriere pentru mustar',
      price: 10.2,
      condiments: 'condimente mustar',
    },
    {
      id: 5,
      title: 'carnati',
      description: 'Descriere pentru carnati',
      price: 30,
      condiments: 'condimente carnati',
    },
    {
      id: 6,
      title: 'legume',
      description: 'Descriere pentru legume',
      price: 20,
      condiments: 'condimente legume',
    },
    {
      id: 7,
      title: 'sos',
      description: 'Descriere pentru sos',
      price: 10,
      condiments: 'condimente sos',
    },
  ];

  getProducts() {
    return this.products;
  }
}
