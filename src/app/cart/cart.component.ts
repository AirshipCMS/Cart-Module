import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : any;
  subtotal : number;

  constructor() {
    this.cart = localStorage.getItem('ngStorage-cart') === null ? { items: [] } : JSON.parse(localStorage.getItem('ngStorage-cart'));
    console.log(this.cart)
  }

  ngOnInit() {
  }

  deleteCartItem() {

  }

  clearCart() {

  }

}
