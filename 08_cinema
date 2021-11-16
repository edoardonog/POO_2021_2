class Client {
    fone: String;
    name: String;

    constructor (fone:String, name: String) {
        this.fone = fone;
        this.name = name;
    }

    toString() {
        return "o cliente ${this.name} cujo telefone é %{this.fone} fez uma reserva";
        }
}

class Sala {
    cadeiras: Array <Client | null>;
    capacidade: number;

    constructor (capacidade: number) {
        this.cadeiras = [];
        this.capacidade = capacidade;

        for (let i = 0; i < this.capacidade; i++){
            this.cadeiras.push(null);
        }
    }

    toString() {
        let saida = '[';
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] == null) {
                saida += "- " 
            } else {
                saida += this.cadeiras[i].name == " "
            }
        }
        return saida += '[';
    }

    reservar (name:String, index: number) boolean {
        for(let i= 0; i < this.cadeiras.length; i++ ) {
            if (this.cadeiras[index] != null) {
                console.log("essa cadeira já está ocupada!");
                return false;
            }
            if (this.cadeiras[index] != null && this.cadeiras[index].name == name) {
                console.log("essa pessoa já está na sala")
                return false;
            }
            this.cadeiras.push
            return true;
        }
    }

    cancelar(name: String) {
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] != null) {
                if (this.cadeiras[i].name == name)
                this.cadeiras[i] == null;
            }
        }
    }
}
