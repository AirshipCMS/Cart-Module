import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable()
export class CartService {
  constructor() { }

  getCart() {
    let cart = localStorage.getItem('ngStorage-cart') === null ? Cart : JSON.parse(localStorage.getItem('ngStorage-cart'));
    return cart;
  }

  calculateSubtotal(cart:any) {
    let subtotal = 0;
    if(cart){
      cart.items.forEach((item) => {
        let priceTimesQuantity = item.price.usd * item.quantity;
        subtotal += priceTimesQuantity
      });
    }
    return subtotal/100;
  }

  updateCart(cart) {
    localStorage.setItem('ngStorage-cart', JSON.stringify(cart));
  }

  deleteCartItem(cart, i) {
    return cart.items.splice(i, 0);
  }

  clearCart(cart) {
    return cart.items = [];
  }

}
