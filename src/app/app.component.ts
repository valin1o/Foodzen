import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  itemInCart:number;
  constructor(private cartService: CartService) {}

  ngOnInit() {
  
  }
}
