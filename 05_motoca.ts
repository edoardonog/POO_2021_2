class Pessoa {
    nome: string;
    idade: number;

    constructor(nome:string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    toString (): string {
        return `Pessoa ${this.nome} ${this.idade}`;
    }
}

class Motoca {
    pessoa: Pessoa | null;
    pot: number;
    tempo: number;

constructor (pot:number) {
    this.pessoa = null;
    this.pot = pot;
    this.tempo = 0;
    }
 
aluga (tempo:number): void {
    this.tempo += tempo;
    }

dirige (tempo:number): void {
    if (this.pessoa != null) {
        if(this.pessoa.idade <= 10) {
            if(this.tempo > 0) {
                if(tempo <= this.tempo) {
                    this.tempo -= tempo;
                    } else {
                        console.log ("A criança andou" + (tempo - this.tempo) + "O tempo e o minuto acabou!");
                        this.tempo = 0;
                    }
                } else {
                    console.log ("o tempo acabou");
                }
            } else {
                console.log("Quem ta na motoca não tem idade pra pilotar");
            }
        } else {
            console.log("Não tem ninguém na motoca");
        }
    }

buzina(): void {
    if(this.pessoa !=null) {
        let pem ="p";
        for (let i = 0; i < this.pot; i++){
            pem += "E";
        }
        console.log(pem+"A");
    } else {
        console.log ("não tem ninguém na motoca, silêncio...")
    }
}

in(pessoa: Pessoa):boolean {
    if(this.pessoa != null){
        console.log("Já tem uma pessoa na Motoca");
        return false;
    }

    this.pessoa = pessoa;

    console.log("A pessoa que se chama $(this.pessoa.nome), que tem $(this.pessoa.idade) anos, tá na motoca");
    return true;
}

  out (): Pessoa {
    if (this.pessoa != null){
        let pessoaOut = this.pessoa
        this.pessoa = null
        console.log ("Quem estava na motoca saiu!")
        return pessoaOut
    } else {
        console.log ("A moto está sem ninguém!")
    }
  }
toString ():  string {
      return `Pessoa que está na motoca ${this.pessoa}; Potência da motoca ${this.pot}; Tempo da motoca ${ this.tempo}`;
    }
}
