/*Da erro pois as variáveis não possuem valores definidos.

let nome =
let  idade =

console.log(typeof nome)
console.log(typeof idade)*/

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qua é a sua idade? ");
//console.log(nome);
//console.log(idade);
console.log(typeof nome);
console.log(typeof idade);
/* Agora o codigo rodou perfeitamente com as variaveis defidas, e mesmo tendo uma ordem 
numerica em questão ela se torna do tipo string por se tratar de um comando prompt.*/

console.log("Olá,", nome, ",você tem", idade,"anos.");