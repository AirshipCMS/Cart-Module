import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Cart } from './cart';
import { environment } from '../../environments/environment';

@Injectable()
export class CartService {
  constructor(private http: Http) { }

  getCart() {
    let cart = localStorage.getItem('ngStorage-cart') === null ? Cart : JSON.parse(localStorage.getItem('ngStorage-cart'));
    return cart;
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

  deleteCartItem(cart, i) {
    return cart.items.splice(i, 0);
  }

  clearCart(cart) {
    return cart.items = [];
  }

  handleError(error: Response) {
    return Observable.throw(error);
  }

}
