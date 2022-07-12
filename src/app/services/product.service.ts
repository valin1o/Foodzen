import { Product } from "../product/product.component";

export class ProductService {
    products: Product[] = [
        {
            id:0,
            title: "product #0",
            description: "Description product #0",
            price: 30
        },
        {
            id:1,
            title: "product #1",
            description: "Description product #1",
            price: 20
        }
    ]
}