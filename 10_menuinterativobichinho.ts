const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Pet {
    age: number;
    alive: boolean;
    diamonds: number;
    clean: number;
    cleanMax: number;
    energy: number;
    energyMax: number;
    hungry: number;
    hungryMax: number;

    public constructor(energy: number, hungry: number, clean: number) {
        this.age = 0;
        this.diamonds = 0;
        this.alive = true;
        this.clean= clean;
        this.cleanMax = clean;
        this.energy = energy;
        this.energyMax = energy; 
        this.hungry = hungry;
        this.hungryMax = hungry;
    }

//sets
    setEnergy(value: number) {
        if (value <= 0) {
            this.energy = 0;
            console.log("Deu ruim: O bichinho morreu de fraqueza!");
            this.alive = false;
        } else if (value > this.energyMax) {
            this.energy = this.energyMax;
        } else {
            this.energy = value;
        }
    }

    setClean(value: number) {
        if (value <= 0) {
            this.clean = 0;
            console.log("Deu ruim: O bichinho morreu de sebosidade!");
            this.alive = false;
        } else if (value > this.cleanMax) {
            this.clean = this.cleanMax;
        } else {
            this.clean = value;
        }
    } 

    setHungry(value: number) {
        if (value <= 0) {
            this.hungry = 0;
            console.log("Deu ruim: O bichinho morreu de fome!");
            this.alive = false;
        } else if (value > this.hungryMax) {
            this.hungry = this.hungryMax;
        } else {
            this.hungry = value;
        }
    
    }

//gets
    public getClean():number {
        return this.clean;
    }

    public getCleanMax():number {
        return this.cleanMax;
    }

    public getEnergy():number {
    return this.energy;
    }

    public getEnergyMax():number {
        return this.energyMax;
    }

    public getHungry():number {
    return this.hungry;
    }

    public getHungryMax():number {
        return this.hungryMax;
    }

    toString(): string {
        return `Energia: ${this.energy}/${this.energyMax}, Saciedade: ${this.hungry}/${this.hungryMax}, Limpeza: ${this.clean}/${this.cleanMax}, Diamantes: ${this.diamonds}, Idade: ${this.age}`;
    }

//metodos

    testAlive(): boolean {
        if (this.alive == true) {
            console.log("O bicinho tá vivo uhuuuu")
            return true;
        } else {
            console.log("O bichinho tá morto da silva")
            return false;
        }
    }

    play() {
        if (this.testAlive()) {
            this.setEnergy(this.energy - 2);
            this.setHungry(this.hungry - 1);
            this.setClean(this.clean - 3);
            this.diamonds++
            this.age++
            console.log("Bichinho tá jogando bola")
        }
    }

    shower() {
        if (this.testAlive()) {
            this.setEnergy(this.energy - 3);
            this.setHungry(this.hungry - 1);
            this.setClean(this.clean = this.cleanMax);
            this.age += 2;
            console.log("O bichinho tá tomando banho")
        }   
    }

    eat() {
        if (this.testAlive()) {
            this.setEnergy(this.energy - 1);
            this.setHungry(this.hungry + 4);
            this.setClean(this.clean - 2);
            this.age++
            console.log("O Bichinho tá forrando o bucho")
        }
    }

    sleep() {
        if (this.testAlive()) {
            if (this.energyMax <= this.energyMax - 5) {
                console.log("O bichinho tá dormindo");
            } else {
                console.log("Ele não tá com sono!")
            }
    }
    }
}

class IO {
    create_pet(): Pet {
        write("Digite o nome do seu pet: ");
        let nome = input();
        write("Digite o max de saciedade: ");
        let saciedadeMax = +input();
        let pet = new Pet(nome, saciedadeMax);
        return pet
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  init <nome> <maxsaciedade>: cria um novo pet\n");
        write("  show: mostra o pet\n");
        write("  play: faz o pet brincar\n");
        write("  eat: faz o pet comer\n");
        write("  end: sai do programa\n");
    }

    shell() {
        let pet = new Pet("", 0);//this.create_pet();
        this.mostrar_help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") {
                this.mostrar_help();
            } else if (words[0] == "show") {
                write("" + pet + "\n");
            } else if (words[0] == "eat") {
                pet.comer();
            } else if (words[0] == "play") {
                pet.brincar();
            } else if (words[0] == "init") {
                let nome = words[1];
                let sacMax = +words[2];
                pet = new Pet(nome, sacMax);
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();
