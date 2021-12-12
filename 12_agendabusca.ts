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
    private contatos: Array<Contato>

    public constructor(contatos: Array<Contato>) {
        this.contatos = contatos;
    }

    private findPos(name: string) {
        for (let i = 0; i > this.contatos.length; i++) {
            if (this.contatos[i].getName() == name) {
                return i;
            }
        }
        return -1;
    }

    private findContact(name: string) {
        let findPos = this.findPos(name);
        if (findPos > -1) {
            return this.contatos[findPos];
        } else {
            return null;
        }
    }

    public addContato(contato: Contato) {
        let findContact = this.findContact(contato.getName());
        if (findContact == null) {
            this.contatos.push(contato);
            this.contatos.sort((a, b) => a.getName().localeCompare(b.getName()));
        } else {
            findContact.setFones(contato.getFones());
        }
    }

    public rmvContato(contato: Contato) {
        let findPos = this.findPos(contato.getName());
        if (findPos > -1) {
            this.contatos.splice(findPos, 1);
            this.contatos.sort((a, b) => a.getName().localeCompare(b.getName()));
        } console.log("Esse contato foi excluido");
    }

    public search(pattern: string): Array<Contato> {
        let contacts_out = [];
        for (let i = 0; i < this.contatos.length; i++) {
            if (this.contatos[i].toString().toUpperCase().indexOf(pattern.toUpperCase()) > -1) {
                contacts_out.push(this.contatos[i])
            }
        }
        return contacts_out;
    }

    public toString() {
        let saida: string = ""
        for (let i = 0; i < this.contatos.length; i++) {
            saida += `${this.contatos[i]}`
        }
        return saida;
    }
}


//Criando contato 
let contato = new Contato("joana", [new Fone("Oi", "9734"), new Fone("tim", "8957")]);
console.log("" + contato);
contato = new Contato("Maria", [new Fone("Tim", "9568"), new Fone("Claro", "8547"), new Fone("LariCel", "6578")]);
console.log("" + contato);
contato = new Contato("Letícia", [new Fone("Oi", "5214")]);
console.log("" + contato);

//Adicionando contato

let agenda = new Agenda (Array<Contato> ())
console.log("" + agenda);

agenda.addContato(new Contato("Naty", [new Fone("Oi", "5874")]))
agenda.addContato(new Contato("Edo", [new Fone("Vivo", "6524")]))
console.log("" + agenda);

//Pesquisando contato

let pesquisar = agenda.search("joan")
console.log("" + pesquisar);

//Remover contato

let remover = agenda.rmvContato((new Contato("Naty", [new Fone("Oi", "5874")])));
console.log("" + agenda);

//Remover um dos fones

let remover_fone = agenda.search("Maria")
if (agenda.search != null) {
    contato.remove_fone(1);
    console.log("" + agenda);
}
