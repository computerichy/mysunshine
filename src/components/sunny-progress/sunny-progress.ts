import { Component, Input } from '@angular/core';

/**
 * Generated class for the SunnyProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sunny-progress',
  templateUrl: 'sunny-progress.html'
})
export class SunnyProgressComponent {

  @Input('progress') progress;
 
  constructor() {
 
  }


}
