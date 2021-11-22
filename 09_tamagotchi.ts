class Pet {
    age: number;
    alive: boolean;
    cleanMax: number;
    diamonds: number;
    energy: number;
    energyMax: number;
    hungry: number;
    hungryMax: number;
    clean: number;

    public constructor(energy: number, hungry: number, clean: number) {
        this.age = 0;
        this.diamonds = 0;
        this.alive = true;
        this.hungryMax = hungry;
        this.cleanMax = clean;
        this.energy = energy;
        this.energyMax = energy;
        this.hungry = hungry;
        
        this.clean = clean;
    }
    public getClean(): number {
        return this.clean
    }
    public getCleanMax(): number {
        return this.cleanMax;
    }
    public getEnergy(): number {
        return this.energy;
    }
    public getEnergyMax(): number {
        return this.energyMax;
    }
    public getHungry(): number {
        return this.hungry;
    }
    public getHungryMax(): number {
        return this.hungryMax;
    }

    setEnergy(value: number) {
        if (value <= 0) {
            this.energy = 0;
            console.log("O Geraldo Tamagó morreu de fraqueza!");
            this.alive = false;
        } else if (value > this.energyMax) {
            this.energy = this.energyMax;
        } else {
            this.energy = value;
        }
    }

    setClean(value: number) {
        if (value <= 0) {
            this.energy = 0;
            console.log("O Geraldo Tamagó morreu de sujeira!");
            this.alive = false;
        } else if (value > this.energyMax) {
            this.clean = this.cleanMax;
        } else {
            this.clean = value;
        }
    }

    setHungry(value: number) {
        if (value <= 0) {
            this.hungry = 0;
            console.log("O Geraldo Tamagó morreu de fome!");
            this.alive = false;
        } else if (value > this.hungryMax) {
            this.hungry = this.hungryMax;
        } else {
            this.hungry = value;
        }
    }

    testAlive(): boolean {
        if (this.alive == true) {
            console.log("O Geraldinho tá vivo :)")
            return true;
        } else {
            console.log("O Geraldinho morreu :(")
            return false;
        }
    }

    eat() {
        if (this.testAlive()) {
            this.setEnergy(this.energy - 1);
            this.setHungry(this.hungry + 4);
            this.setClean(this.clean - 2);
            this.age++
            console.log("O Tamagó tá comendo :D")
        }
    }

    play() {
        if (this.testAlive()) {
            this.setEnergy(this.energy - 2);
            this.setHungry(this.hungry - 1);
            this.setClean(this.clean - 3);
            this.diamonds++
            this.age++
            console.log("Ele tá brincando")
        }
    }

    shower() {
        if (this.testAlive()) {
            this.setEnergy(this.energy - 3);
            this.setHungry(this.hungry - 1);
            this.setClean(this.clean = this.cleanMax);
            this.age += 2;
            console.log("Ele tá tomando banho!")
        }
    }
    sleep() {
        if (this.testAlive()) {
            if (this.energyMax <= this.energyMax - 5) {
                console.log("O Tamagó tá dormindo!");
            } else {
                console.log("Ele não tá com sono!")
            }
        }
    }

    toString(): string {
        return `Energia: ${this.energy}/${this.energyMax}, Saciedade: ${this.hungry}/${this.hungryMax}, Limpeza: ${this.clean}/${this.cleanMax}, Diamantes: ${this.diamonds}, Idade: ${this.age}`;
    }
}

//case inicio
let pet;
pet = new Pet(20, 10, 15);
console.log(pet + "");
//E:20/20, S:10/10, L:15/15, D:0, I:0
pet = new Pet(10, 20, 50);
console.log(pet + "");
//E:10/10, S:20/20, L:50/50, D:0, I:0

//case play - Brincar 
pet = new Pet(20, 10, 15);
pet.play();
console.log(pet + "");
//E:18/20, S:9/10, L:12/15, D:1, I:1
pet.play();
console.log(pet + "");
//E:16/20, S:8/10, L:9/15, D:2, I:2

//case comer 
pet.eat();
console.log(pet + "");
//E:15/20, S:10/10, L:7/15, D:2, I:3

//case dormir
pet.sleep();
console.log(pet + "");
//E:20/20, S:9/10, L:7/15, D:2, I:8

//case tomar banho
pet.shower();
console.log(pet + "");
//E:17/20, S:8/10, L:15/15, D:2, I:10

//case dormir sem sono
pet.sleep();
//fail: nao esta com sono

//case morrer
pet.play();
pet.play();
pet.play();
pet.play();
console.log(pet + "");
//E:9/20, S:4/10, L:3/15, D:6, I:14
pet.play();
//fail: pet morreu de sujeira
console.log(pet + "");
//E:7/20, S:3/10, L:0/15, D:7, I:15
pet.play();
//fail: pet esta morto
pet.eat();
//fail: pet esta morto
pet.shower();
//fail: pet esta morto
pet.sleep();
//fail: pet esta morto

//case exemplo2
pet = new Pet(5, 10, 10);
pet.play();
pet.play();
pet.play();
//fail: pet morreu de fraqueza
pet.play();
//fail: pet esta morto
console.log(pet + "");
//E:0/5, S:7/10, L:1/10, D:3, I:3

//case exemplo3
pet = new Pet(10, 3, 10);
pet.play();
pet.play();
pet.play();
//fail: pet morreu de fome
pet.play();
//fail: pet esta morto
console.log(pet + "");
//E:4/10, S:0/3, L:1/10, D:3, I:3
