import { Component } from '@angular/core';

/**
 * Generated class for the MagicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'magic',
  templateUrl: 'magic.html'
})
export class MagicComponent {

  text: string;

  constructor() {
    console.log('Hello MagicComponent Component');
    this.text = 'Hello World';
  }

}
