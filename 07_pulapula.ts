class Kid {
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Trampoline {
    playing:Array<Kid> = [];
    waiting:Array<Kid> = [];

    arrive(kid: Kid){
        this.waiting.push(kid);
    }

    in() {
        let kid = this.waiting.shift();
        this.playing.push(kid);
    }

    out() {
        this.waiting.push(this.playing.shift);
    }

    remove(name: String): Kid {
        for( let kid of this.playing);
        if (kid.name == name){
        this.playing = this.playing.filter(kid => kid.name != name);
        }

        for( let kid of this.waiting);
        if (kid.name == name){
        this.waiting = this.waiting.filter(kid => kid.name != name);
        }
    }
}
