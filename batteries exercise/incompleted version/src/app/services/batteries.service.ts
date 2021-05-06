import { Injectable } from '@angular/core';
import { Battery } from '../models/Battery';

@Injectable({
  providedIn: 'root'
})
export class BatteriesService {

  private readonly NUMBER_OF_BATTERIES = 20;
  private batteries: Battery[] = [];

  constructor() {
    this.initializeBatteries();
    
    setInterval( () => this.changeRandom(), 500);
  }

  private initializeBatteries(){
    for(let i = 0; i< this.NUMBER_OF_BATTERIES; i++){
      this.batteries.push(new Battery(i));
    }
  }
  
  private changeRandom(){
    for(let i = 0; i< this.NUMBER_OF_BATTERIES; i++){
      this.batteries[i].changeRandom();
    }
  }

  public getBatteries(){
    return this.batteries;
  }

}
