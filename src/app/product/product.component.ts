import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.products = this.productservice.getProducts();
  }
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  condiments: string;
}
