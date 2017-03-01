import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product/product-list.component';

//root module off app
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CartComponent, ProductListComponent],
  bootstrap: [AppComponent] //the root component that Angular creates and 
  //inserts into the index.html host web page
})

export class AppModule { }
