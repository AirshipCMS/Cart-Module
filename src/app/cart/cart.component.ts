import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { environment } from '../../environments/environment';

declare var $;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cart : any;
  subtotal : number;
  quantityRange : Array<number> = [];
  confirmClearCart : boolean;
  dialogState : string = 'open';
  subscriptionProducts : Array<any> = [];
  products : Array<any> = [];

  constructor(public cartService: CartService) {
    this.cart = this.cartService.getCart();
    Array.from({ length: 21 }, (v, i) => this.quantityRange.push(i));
    this.cart.items.forEach((item) => {
      if(item.type === 'plan') {
        this.subscriptionProducts.push(item);
      } else {
        this.products.push(item);
      }
    });
  }

  ngOnInit() {
    $('#dialog-confirm').dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
    });
    this.toggleDialog();
  }

  ngDoCheck() {
    this.cartService.updateCart(this.cart);
  }

  deleteCartItem(i:number) {
    this.cart.items = this.cartService.deleteCartItem(this.cart, i);
  }

  toggleDialog() {
    this.dialogState = this.dialogState === 'open' ? 'close' : 'open'
    $('#dialog-confirm').dialog(this.dialogState);
  }

  clearCart() {
    this.cart.items = this.cartService.clearCart(this.cart);
    this.subscriptionProducts = [];
    this.products = [];
    this.toggleDialog();
  }

  checkout() {
    let encodedCart = encodeURIComponent(JSON.stringify((this.cart)));
    window.location.href = `https://${environment.domain}/checkout#/#${encodedCart}`;
  }

}
