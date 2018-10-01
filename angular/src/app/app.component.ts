import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'cas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {
    console.log(environment.production);
  }
}
