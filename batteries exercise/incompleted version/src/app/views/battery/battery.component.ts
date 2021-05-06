import { Input, Component, OnInit } from '@angular/core';
import { Battery } from '../../models/Battery';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  @Input() battery: Battery;

  constructor() { }

  ngOnInit(): void {
    console.log(this.battery);
  }


  public getBatteryStyle(): object{
    const inversePercentage = 100 - this.battery.getPercentage();
    return {
      'clip-path': `polygon(
        0 ${inversePercentage}%,
        100% ${inversePercentage}%,
        100% 100%,
        0 100%
      )`
    };


  }

}
