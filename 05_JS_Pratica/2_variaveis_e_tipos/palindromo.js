//Verificar se uma string é um palídromo 

// A primeira opção utiliza uma série de métodos 
//.split retorna em um array
//.reverse deixa o array ao contrário 
//.join junta o array para uma string novamente
function verificaPalindromo(string) {
	if (!string) return "Digite parâmetros corretos";
	console.log(string === string.split('').reverse().join(''));
}

verificaPalindromo('cat');


//A segunda solução utilizará for
function verificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

verificaPalindromo2('asa');
