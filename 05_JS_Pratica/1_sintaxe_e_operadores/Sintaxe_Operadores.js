//Atividade que compara se os números são iguais e confere se a soma deles é maior que 10 ou menor que 20 

//Função de comparação 
function Compara (num1, num2) {
	const primeiraFrase = Frase1(num1, num2);
	const segundaFrase = Frase2(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

//Funções para concatenação das frases
function Frase1(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function Frase2(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(Compara(11, 10));
