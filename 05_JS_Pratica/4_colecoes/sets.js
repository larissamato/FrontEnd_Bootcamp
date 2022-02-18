//Retornar outro array com apenas valores únicos 
function uniqueElements(array) {
	let unico = new Set(array);
	return [...unico]; //Os ... Fazem retornar o array e não o objeto 
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));
