//ESTRUTURAS DE DECISÃO
var jogador1=0;
var jogador2=-1;
var placar;
if(jogador1 != -1){
if(jogador1>0 && jogador2==0){
    console.log("Jogador 1 marcou ponto!");
    placar=jogador1>jogador2
}
else if(jogador2>0 && jogador1==0){
    console.log("Jogador 2 marcou ponto!");
    placar= jogador2>jogador1;
}
else{
    console.log("Ninguém marcou ponto!")
}

}

//IF TERNÁRIO 
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores inválidos");


switch(placar){
    case placar= jogador1>jogador2 : console.log("Jogador 1 ganhou!")
    break;
    case placar= jogador2>jogador1 : console.log("Jogador 2 ganhou!")
    break;
    default : 
    console.log("Ninguém ganhou!");
}

//ESTRUTURAS DE REPETIÇÃO 

//FOR
let array=['valor1','valor2','valor3','valor4','valor5'];
let object={propriedade1:'valor1', propriedade2:'valor2', propriedade3:'valor3'}

for(let indice=0;indice<array.length;indice++){
    console.log(indice);

}

//FOR IN
for(let i in array){
    console.log(i);
}
for(i in object){
    console.log(i);
}
//FOR OF
for(i of array){
console.log(i);
}
//Não dá pra usar o for/of em objetos
for(i of object.propriedade1){
    console.log(i);
}

//WHILE
var a=0;
while(a<10){
    a++;
    console.log(a);

}
//DO/WHILE
var b=0
do{
    b++;
    console.log(b);
}
while(b<5)
