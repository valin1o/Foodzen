export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  condiments: string;

  constructor(
    id = 404,
    name = '',
    description = '',
    price = 404,
    condiments = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.condiments = condiments;
  }
}
