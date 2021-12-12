class Fone {
    private label: string;
    private number: string;

    constructor(label: string, number: string) {
        this.setLabel(label);
        this.setNumber(number);
    }

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

    public valido(): boolean {
        if (Fone.validacao(this.number)) {
            return true;
        } else {
            return false;
        }
    }

    static validacao(fone: string): boolean {
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
}

class Contato {
    private name: string;
    private fones: Array<Fone> = [];

    constructor(name: string, fones: Array<Fone>) {
        this.name = name;
        this.setFones(fones);
    }

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
        for (let i = 0; i < fones.length; i++) {
            this.addFone(fones[i]);
        }
    }

    public addFone(fone: Fone) {
        if (fone.valido()) {
            this.fones.push(fone);
        }
    }

    public remove_fone(index: number) {
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
}

class Agenda {
    private contatos: Map<string,Contato>;

    public constructor (){
        this.contatos = new Map<string,Contato>();
    }

    private findContact(name: string): Contato | null {
        if(this.contatos.has(name)) {
            return this.contatos.get(name);
        }
        return null;
    }

    public addContato(contato: Contato) {
        if(this.contatos.has(Contato.name)){
            let existente = this.contatos.get(Contato.name);
            for (let fone of Contato.fones) {
                existente.addFone(fone);
            }
        } else {
            this.contatos.set(Contato.name, contato)
        }
    }

    public rmvContato(contato: Contato) {
        if(this.contatos.delete.name)
            return true;
        return false;
    }

    public findByPattern(pattern): Array<Contato> {
        let result = new Array<Contato>();
        for(let contato of this.contatos.values()) {
            if(Contato.name.includes(pattern)){
                result.push(contato);
            }
        }
        return result;
    }

    public toString() {
        let saida: string = ""
        for (let i = 0; i < this.contatos.size; i++) {
            saida += `${this.contatos[i]}`
        }
        return saida;
    }
}

function nome(nome: any) {
    throw new Error("Function not implemented.");
}
