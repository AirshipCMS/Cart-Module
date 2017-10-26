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
  quantityRange : Array<number> = [];

  constructor(public cartService: CartService) {
    this.cart = this.cartService.getCart();
    Array.from({ length: 11 }, (v, i) => this.quantityRange.push(i));
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.cartService.updateCart(this.cart);
  }

  deleteCartItem(i:number) {
    this.cart.items = this.cartService.deleteCartItem(this.cart, i);
  }

  clearCart() {
    this.cart.items = this.cartService.clearCart(this.cart);
  }

}
