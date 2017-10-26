import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cart : any;
  subtotal : number;

  constructor(public cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit() {
  }

  deleteCartItem() {

  }

  clearCart() {

  }

}
