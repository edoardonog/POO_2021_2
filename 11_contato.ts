class Fone {
    private label: string;
    private number: string;

    fone(label: string, number: string) {
        this.setLabel(label);
        this.setNumber(number);
    }

    //metodos
    public isValid(): boolean {
        if (Fone.validate(this.number)) {
            return true;
        } else {
            return false;
        }
    }

    static validate(fone: string): boolean {
        let strings_validas = "0123456789()."
        for (let i = 0; i < fone.length; i++) {
            if (strings_validas.indexOf(fone[i]) == -1) {
                console.log("esse número não é válido!")
                return false
            }
        }
        return true;
    }
    
    public toString(): string {
        return `${this.label}: ${this.number}`
    }

    //gets e sets
    public getLabel() {
        return this.label;
    }

    public getNumber() {
        return this.number;
    }

    public setLabel(valor: string) {
        this.label = valor;
    }

    public setNumber(valor: string) {
        this.number = valor;
    }
}

class Contato {
    private name: string;
    private fones: Array<Fone>

    contato(name: string, fones: Array<Fone>) {
        this.name = name;
        this.fones = Array<Fone>();
    }

    //metodos
    public addFone(fone: Fone) {
        if (fone.isValid()) {
            this.fones.push(fone);
        }
    }

    public removeFone(index: number) {
        if (index < this.fones.length) {
            this.fones.splice(index, 1);
        } else {
            console.log("O índice não existe!");
        }
    }

    public toString() {
        let saida = `- ${this.name}`;
        for (let i = 0; i < this.fones.length; i++) {
            saida += `[${this.fones.indexOf(this.fones[i])} : ${this.fones[i].getLabel()} : ${this.fones[i].getNumber()}]`
        }
        return saida;
    }

    //gets e sets
    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getFones() {
        return this.fones;
    }

    public setFones(fones: Array<Fone>) {
        for (let i = 0; i < this.fones.length; i++) {
            this.addFone(this.fones[i]);
        }
    }
}
