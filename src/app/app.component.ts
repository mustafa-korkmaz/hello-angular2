import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<product-list>
  </product-list><br/><cart></cart>
  <h1>{{getAppName()}}</h1>`,
})
export class AppComponent {
  getAppName(): string {
    return "hello angular2 app";
  }
}
