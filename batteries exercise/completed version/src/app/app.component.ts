import { Component } from '@angular/core';
import { Battery } from './models/Battery';
import { BatteriesService } from './services/batteries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-center';

  public batteries: Battery[];

  constructor(private batteriesService: BatteriesService){
    this.batteries = batteriesService.getBatteries();
    console.log(this.batteries);
  }

}
