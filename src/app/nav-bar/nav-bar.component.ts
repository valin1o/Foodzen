import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  itemInCart: number;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems.subscribe((d) => {
      this.itemInCart = d.length;
    });
  }
}
