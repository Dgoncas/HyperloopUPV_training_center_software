import { Input, Component, OnInit } from '@angular/core';
import { Battery } from 'src/app/models/Battery';



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



  public buildClipStyle(): object{

    return {
      'clip-path': this.buildClipPath()
    };
  }

  private buildClipPath(): string{
    const inversePercentage = 100 - this.battery.getPercentage();

    return `polygon(
        0 ${inversePercentage}%,
        100% ${inversePercentage}%,
        100% 100%,
        0 100%
      )`;
  }

  public buildColorStyle(): object{
    console.log(this.buildColor());
    return { 
      'background-color': this.buildColor() 
    };
  }

  private buildColor(){
    const percentage = this.battery.getPercentage() / 100;
    
    const currentColor = [255 / percentage / 2, 
                          255 * percentage * 2, 
                          0 ];

    return `rgb(${currentColor[0]},${currentColor[1]},${currentColor[2]})`
  }

}
