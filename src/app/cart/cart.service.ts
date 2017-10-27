import { Injectable } from '@angular/core';

import { Cart } from './cart';
import { environment } from '../../environments/environment';

@Injectable()
export class CartService {
  constructor() { }

  getCart() {
    let subscriptionProducts = [],
        products = []
    let cart = localStorage.getItem('ngStorage-cart') === null ? Cart : JSON.parse(localStorage.getItem('ngStorage-cart'));
    let splitItems = this.splitCartItemsByType(cart);
    subscriptionProducts = splitItems.subscriptionProducts;
    products = splitItems.products;
    return { cart, products, subscriptionProducts };
  }

  calculateSubtotal(cart:any) {
    let subtotal = 0;
    if(cart){
      cart.items.filter((item) => item.type !== 'plan').forEach((item) => {
        let priceTimesQuantity = item.price.usd * item.quantity;
        subtotal += priceTimesQuantity
      });
    }
    return subtotal/100;
  }

  updateCart(cart) {
    localStorage.setItem('ngStorage-cart', JSON.stringify(cart));
  }

  deleteCartItem(cart, item) {
    let i = cart.items.indexOf(item),
        subscriptionProducts = [],
        products = [];
    cart.items.splice(i, 1);
    let splitItems = this.splitCartItemsByType(cart);
    subscriptionProducts = splitItems.subscriptionProducts;
    products = splitItems.products;
    return { cart, products, subscriptionProducts }
  }

  clearCart(cart) {
    return cart.items = [];
  }

  splitCartItemsByType(cart) {
    let subscriptionProducts = [],
        products = [];
    cart.items.forEach((item) => {
      if(item.type === 'plan') {
        subscriptionProducts.push(item);
      } else {
        products.push(item);
      }
    });
    return { products, subscriptionProducts };
  }

}
