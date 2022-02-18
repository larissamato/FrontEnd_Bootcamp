/*//Array
let array = ['teste', 1, true];
console.log(array);

let array1= [1,3, ['array']];
console.log(array1[0]);*/

//Manipulando array
let Manipulacao = [5, 1, 20];
//console.log(Manipulacao);

//forEach Repetição para cada item ou índice
/*Manipulacao.forEach(function(item,index){console.log(item, index)});*/

//push adiciona mais um índice
Manipulacao.push(['oi']);
console.log(Manipulacao);

//pop retira um índice
Manipulacao.pop();
console.log(Manipulacao);

//shift retira um índice do início 
Manipulacao.shift();
console.log(Manipulacao);

//unshift adiciona um índice no início
Manipulacao.unshift('oi');
console.log(Manipulacao);

//indexOf Mostra qual é o índice do item
console.log(Manipulacao.indexOf('oi'));

//splice remove ou substitui um item pelo índice 
Manipulacao.splice(0,1);
console.log(Manipulacao);
//slice retorna uma parte de um array existente 
let novo = Manipulacao.slice(0,3);
console.log(novo);


//Objetos
let object={string:'string', number:1, boolean:true, array:['array'], objectInterno:{objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

//Desestruturação
var string = object.string;
console.log(string);
var {number,boolean}=object;
console.log(number,boolean);


