function adicionar (a:number, b:number):number{
    return a+b;
}
console.log(adicionar(2,3));

let adicionar1 = function (a:number, b:number): number {
    return a+b;
}

// Arrow Function
let adicionar2 = (a:number, b:number): number => {
    return a+b;
}

//Arrow Function 2.0 - para funções curtas
let adicionar3 = (a:number, b:number): number => (a+b);
