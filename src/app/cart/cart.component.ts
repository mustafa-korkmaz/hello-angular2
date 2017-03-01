import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product/product';

@Component({
  selector: 'cart',
  template: `
    <h4>Cart Items List</h4>
   
    <ul *ngFor='let product of products | async'>
      <li>{{product.name}}</li>
    </ul>
  `,
  providers: [CartService]
})
export class CartComponent implements OnInit {

  private products: Promise<Product[]>;

  constructor(private cartService: CartService) { }
  getCartText(): string {
    return "meraba esra";
  }

  ngOnInit() {
    //  this.products = this.productService.getProducts();
  }
}
