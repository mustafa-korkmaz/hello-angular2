import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { CartService } from '../cart/cart.service';
import { ProductListItem } from '../product/product';

@Component({
  selector: 'product-list',
  template: `
    <h4>Product List</h4>
   
    <ul *ngFor='let productListItem of productListItems | async'>
      <li>{{productListItem.product.name}} 
       <label>Stocks:
        <input [(ngModel)]="productListItem.itemCount">
      </label>
      <button (click)="addToCart(productListItem)">add to cart</button>
      </li>
    </ul>
  `,
  providers: [ProductService, CartService]
})
export class ProductListComponent implements OnInit {

  private productListItems: Promise<ProductListItem[]>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.productListItems = this.productService.getProductListItems();
  }
  addToCart(productlistItem: ProductListItem) {
    if (productlistItem.itemCount <= 0)
      return;
    console.log(productlistItem);
    productlistItem.itemCount -= 1;
    this.cartService.add(productlistItem.product);
  }
}
