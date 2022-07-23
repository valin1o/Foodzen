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
      "Meniul zilei este varianta perfecta pentru masa de pranz atat economic cat si din punct de vedere al aportului necesar de nutrienti pentru o zi. Avand in componenta ciorba, felul II, dumneavoastra va puteti bucura de un pranz gustos, sanatos si avantajos pe care il puteti comanda la birou sau acasa! Ciorba de legume, Valdostana / Cartofi la cuptor / Salata taraneasca",
      30,
      1,
      [
        'assets/meniul-zilei1_1.jpg',
        'assets/meniul-zilei1_2.jpg',
        'assets/meniul-zilei1_3.jpg',
      ],
      'assets/meniul-zilei1.jpg',
      "35 minute"
    ),
    new Product(
      2,
      'Platou Gratar',
      'Platoul cald de gratar este este pregatit pentru un numar de 4 persoane si contine: mici, mustar, cartofi prajiti. Toate platourile din gama de platouri aperitive si platouri calde contin numai produse de calitate superioara pregatite proaspat la comanda dumneavoastra.',
      50,
      1,
      [
        'assets/meniul-zilei2_1.jpg',
        'assets/meniul-zilei2_2.jpg',
        'assets/meniul-zilei2_3.jpg',
      ],
      'assets/meniul-zilei2.jpg',
      "30 minute"
    ),
    new Product(
      3,
      'Meniu Aripioare',
      'Aripioare de pui la gratar cu cartofi prajiti si sos din partea casei',
      30,
      1,
      [
        'assets/meniul-zilei3_1.jpg',
        'assets/meniul-zilei3_2.jpg',
        'assets/meniul-zilei3_3.jpg',
      ],
      'assets/meniul-zilei3.jpg',
      '35 minute'
    ),
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
