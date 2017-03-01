import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductListItem } from './product';

const FETCH_LATENCY: number = 500;

@Injectable()
export class ProductService {

  getProducts() {
    return new Promise<Product[]>(resolve => {
      setTimeout(() => { resolve(this.getAllProducts()); }, FETCH_LATENCY); // as if we fetch from the server :)
    });
  }

  getProductListItems() {
    return new Promise<ProductListItem[]>(resolve => {
      setTimeout(() => { resolve(this.getAllProductListItems()); }, FETCH_LATENCY); // as if we fetch from the server :)
    });
  }

  getProduct(id: number | string) {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id));
  }

  private getAllProducts(): Product[] {
    var products: Product[] = [
      new Product(1, 8, "", ""),
      new Product(2, 10, "", ""),
      new Product(3, 12.00, "", ""),
      new Product(4, 14.25, "", ""),
      new Product(5, 15.50, "", ""),
    ];

    return products;
  }

  private getAllProductListItems(): ProductListItem[] {

    var productlistItems: ProductListItem[] = [];

    var productListItems = this.getProducts()
      .then(products => products.forEach(p => productlistItems.push(new ProductListItem(p, 10))));

    console.log(productlistItems);
    return productlistItems;
  }
}
