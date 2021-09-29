//javascript
let l = [1,2,3];
console.log(l);

//typecript
let l1:number[] = [2,3,4];
console.log(l1);

//Interação - JavaScript
for(let i=0; i<l1.length; i++){
    console.log(i, l1[i])
}

//for in
for(let i in l1){
    console.log(i, l1[i]);
}

//for off - quando precisa somente dos valroes de l1
for(let elemento of l1){
    console.log(elemento);
}


//operações sobre listas
let lista:number[] = [10,20,30];

//inserir elemento
lista.push(50);
console.log(lista);

//remover elemento
lista.splice(2,3);
console.log(lista);