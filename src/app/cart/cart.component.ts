import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  total: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((data) => {
      this.items = data;

      if (this.items) this.getTotal(this.items);
    });
  }

  onDelete(i: number) {
    this.items.splice(i, 1);
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }

  validateInput(event: any, i: number) {
    const qty = +event.target.value;
    if (qty < 1) {
      event.target.value = this.items[i].qty;
      return;
    }

    this.QtyUpdated(qty, i);
  }

  private QtyUpdated(qty: number, i: number) {
    this.items[i].qty = qty;

    this.cartService.setCartData(this.items);

    this.getTotal(this.items);
  }

  getTotal(data: any) {
    let subs = 0;

    for (const item of data) {
      subs += item.price * item.qty;

      this.total = subs;
    }
  }

  onCheckout() {}
}
