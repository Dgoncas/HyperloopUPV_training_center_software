import { ThrowStmt } from "@angular/compiler";

export class Battery{

    private readonly TOTAL_VOLTAGE = 40;

    private id: number;
    private voltage: number = 0;
    private temperature1: number = 0;
    private temperature2: number = 0;

    constructor(id: number){
        this.id = id;

        this.voltage = null;
        this.temperature1 = null;
        this.temperature2 = null;
    }


    public getId(): number{
        return this.id;
    }
    public getVoltage(): number{
        return this.voltage;
    }
    public getTemperature1(): number{
        return this.temperature1;
    }
    public getTemperature2(): number{
        return this.temperature2;
    }

    public getPercentage(): number{
        let percentage = Math.floor(this.voltage  / this.TOTAL_VOLTAGE * 100);
        
        if(percentage > 100) percentage = 100;

        return percentage;
    }


    public changeRandom(){
        this.voltage += this.random(2);
        this.temperature1 += this.random(2);
        this.temperature2 += this.random(2);
    }

    private random(number: number): number{
        return Math.floor(Math.random() * number);
    }


    public updateInfo(voltage: number, temperature1:number, temperature2: number){
        this.voltage = voltage;
        this.temperature1 = temperature1;
        this.temperature2 = temperature2;
    }

}