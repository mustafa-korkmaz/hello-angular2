import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{getAppName()}}</h1>`,
})
export class AppComponent {
  getAppName(): string {
    return "hello angular2 app";
  }
}
