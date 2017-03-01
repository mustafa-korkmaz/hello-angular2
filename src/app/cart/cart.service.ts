import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

export class CartService implements OnInit {

  private products: Promise<Product[]>;

  ngOnInit() {
  }

  add(product: Product) {

  }
}
