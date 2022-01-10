abstract  class Vehicles {
    private speed: number;
    private honk: string;
    private capacity: number;

    constructor(speed:number, honk: string, capacity:number){
        this.speed= speed;
        this.honk= honk;
        this.capacity = capacity;
    }

    abstract move(distance:number);

    getCapacity(){
        return this.capacity;
    }

    public toString() {
        return this.speed + ":" + this.honk + ":" + this.capacity + ":";        
    }
}

class Motorized extends Vehicles{
    private tank: number;
    private spent: number;

    constructor(speed:number, honk: string, capacity:number,tank:number, spent:number){
        super(speed, honk, capacity);
        this.tank = tank;
        this.spent = spent;
    }

    hasFuel():boolean {
        if (this.tank > 0){
            return true;
        } else {
            return false;
        }
    }

    move(distance:number){
        if(this.hasFuel()){
            let total_spent = this.getCapacity()*(distance * this.spent);
            
            if(total_spent < this.tank){
                this.tank -= total_spent;
            } else {
                console.log("Não há gasolina o suficiente! Vá ao Posto Ipiranga!")!
            }
        }
    }
}

class Fusca {
    private id: string;
    private brand: string;
    private color: string;


}
