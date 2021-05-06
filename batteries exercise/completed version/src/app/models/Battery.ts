import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Battery{

    private readonly MAX_VOLTAGE = 20;
    private readonly MAX_TEMPERATURE = 100;

    private id: number;
    private voltage: number | null;
    private temperature1: number | null;
    private temperature2: number | null;


    constructor(id: number){
        this.id = id;
        this.voltage = null;
        this.temperature1 = null;
        this.temperature2 = null;
    }


    public changeInfoRandom(speed: number){
        this.voltage = this.changeInRange(this.voltage , 0, this.MAX_VOLTAGE, speed);
        this.temperature1 = this.changeInRange(this.temperature1, 0, this.MAX_TEMPERATURE, speed);
        this.temperature2 = this.changeInRange(this.temperature2, 0, this.MAX_TEMPERATURE, speed);
    }

    private changeInRange(number: number, min: number, max: number, speed: number){
        let add = Math.floor(Math.random() * speed) + 1;
        if( Boolean( Math.round(Math.random()) ) ) add *= -1;

        number += add;

        if(number < min) number = min;
        if(number > max) number = max;

        return number;
    }



    public getId(){
        return this.id;
    }

    public getVoltage(){
        return this.voltage;
    }

    public getTemperature1(){
        return this.temperature1;
    }

    public getTemperature2(){
        return this.temperature2;
    }

    public getPercentage(){
        return Math.floor( this.voltage / this.MAX_VOLTAGE * 100);
    }



    public setVoltage(voltage: number){
        this.voltage = voltage;
    }

    public setTemperature1(temperature1: number){
        this.temperature1 = temperature1;
    }

    public setTemperature2(temperature2: number){
        this.temperature2 = temperature2;
    }

}