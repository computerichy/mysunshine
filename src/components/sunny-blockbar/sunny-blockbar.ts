import { Component } from '@angular/core';

/**
 * Generated class for the SunnyBlockbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sunny-blockbar',
  templateUrl: 'sunny-blockbar.html'
})
export class SunnyBlockbarComponent {

  text: string;

  constructor() {
    console.log('Hello SunnyBlockbarComponent Component');
    this.text = 'Hello World';
  }

}
