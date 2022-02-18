//tipos primitivos 

// booleanos
var VouF= false;
console.log(VouF);
//Mostra o tipo da variável
var VouF= false;
console.log(typeof(VouF));

// number 
var numero =1;
console.log(numero);
console.log(typeof(numero));

//string
var nome = 'larissa';
console.log(nome);
console.log(typeof(nome));

//Variáveis escopo local e global
var variavelvar;
console.log(variavelvar);

//Variável escopo local
let variavellet;
variavellet= 'lari';
console.log(variavellet);

//Variavel local e sem alteração
let variavelconst;
variavelconst= 'lar';
console.log(variavelconst);

// Escopo global e local
var escopoglobal = 'global';
console.log(escopoglobal);

function escopoLocal(){
    let escopolocalInterno= 'local';
    console.log(escopolocalInterno);
}
escopoLocal();

//Não inicie por nome 
//não use espaços
//não use palavras reservadas 
//Declarar as variáveis no topo do código

// Atribuição =
//Comparação  ==
var comparacao = '0'==0;
console.log(comparacao);
//Comparação Idêntica
var comparacaoI = '0'===0;
console.log(comparacaoI);

//Adição 
var adicao= 1+1;
console.log(adicao);
//Subtração 
var sub = 2-1;
console.log(sub);
//Multiplicação
var mult = 2*3;
console.log(mult);
//Divisão real
var div = 8/2;
console.log(div);
//Divisão inteira 
var resto = 11%4;
console.log(resto);
//Potenciação 
var pot = 3**5;
console.log(pot);

//Operadores relacionais 
// > , < , >= , <=


//Operacionais lógicos

//&&
var e=true &&false;
console.log(e);
// ||
var ou=true || false;
console.log(ou);
// !
var nao= !true;
console.log(nao);
 