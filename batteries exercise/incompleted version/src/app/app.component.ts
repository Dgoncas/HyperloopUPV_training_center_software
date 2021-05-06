import { Component } from '@angular/core';
import { BatteriesService } from './services/batteries.service';
import { Battery } from './models/Battery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'training';

  private batteries : Battery[];

  constructor( private batteriesService: BatteriesService){
    this.batteries = batteriesService.getBatteries();
  }

}
