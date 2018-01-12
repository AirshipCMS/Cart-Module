import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cart : any;
  quantityRange : Array<number> = [];
  showClearCart : boolean = false;
  subscriptionProducts : Array<any> = [];
  products : Array<any> = [];

  constructor(public cartService: CartService) {
    let cart = this.cartService.getCart();
    this.cart = cart.cart;
    this.products = cart.products;
    this.subscriptionProducts = cart.subscriptionProducts;
    this.quantityRange = Array.from({ length: 20 }, (v, i) => i);
  }

  ngOnInit() {}

  ngDoCheck() {
    this.cartService.updateCart(this.cart);
  }

  deleteCartItem(item) {
    let cart = this.cartService.deleteCartItem(this.cart, item);
    this.cart = cart.cart;
    this.products = cart.products;
    this.subscriptionProducts = cart.subscriptionProducts;
  }

  toggleDialog() {
    this.showClearCart = !this.showClearCart;
  }

  clearCart() {
    this.cart.items = this.cartService.clearCart(this.cart);
    this.subscriptionProducts = [];
    this.products = [];
    this.toggleDialog();
  }

  itemCount() {
    let count = 0;
    this.cart.items.forEach((item) => {
      if(item.type !== 'plan') {
        count += parseInt(item.quantity);
      }
    });
    return count;
  }

  checkout() {
    window.location.href = '/checkout';
  }

  continueShopping() {
    window.location.href = '/';
  }

}
