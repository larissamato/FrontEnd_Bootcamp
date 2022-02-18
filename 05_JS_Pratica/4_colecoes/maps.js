//Utilização do map para verificar quais usuários são administradores 
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Larissa', 'SUDO');
userRoles.set('Rodrigo', 'ADMIN');
userRoles.set('Rosângela', 'ADMIN');
userRoles.set('Beatriz', 'USER');
userRoles.set('Paulo', 'USER');

console.log(getAdmins(userRoles));

//A diferença de map e set é que o último citado não aceita valores repetidos 