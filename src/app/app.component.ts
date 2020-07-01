import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
    })
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

}
