import { Injectable } from '@angular/core';
import { Battery } from '../models/Battery';

@Injectable({
  providedIn: 'root'
})
export class BatteriesService {

  private readonly NUMBER_OF_BATTERIES = 15;
  private batteries: Battery[] = [];


  constructor() {
    this.initializeBatteries();

    setInterval(() => this.updateBatteriesInfo(2), 200);
  }



  private updateBatteriesInfo(speed: number){
    for(let battery of this.batteries){
      battery.changeInfoRandom(speed);
    }
  }



  private initializeBatteries(){
    for(let i = 0; i < this.NUMBER_OF_BATTERIES; i++){
      this.batteries.push(new Battery(i));
    }
  }



  public getBatteries(){
    return this.batteries;
  }

}
