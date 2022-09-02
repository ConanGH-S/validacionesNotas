let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
});



// Nombre
const nombre = document.querySelector('#name');
nombre.addEventListener('blur', nombreV);
function nombreV() {
	let nameV = document.querySelector('#name').value;
	// Nombre
	if (nameV === '' || nameV == 0 || !isNaN(nameV) || /^\s+$/.test(nameV)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El nombre es incorrecto o está vacio',
		});
		return false;
		nombre.style.borderColor = 'red';
	} else {
		nombre.style.borderColor = 'green';
	}
}

// Apellido
const apellido = document.querySelector('#lastName');
apellido.addEventListener('blur', apellidoV);
function apellidoV() {
	let lastNameV = document.querySelector('#lastName').value;
	if (lastNameV === '' || lastNameV == 0 || !isNaN(lastNameV) || /^\s+$/.test(lastNameV)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El apellido es incorrecto o está vacio',
		});
		apellido.style.borderColor = 'red';
	} else {
		apellido.style.borderColor = 'green';
	}
}

// Grupo
const grupo = document.querySelector('#group');
grupo.addEventListener('blur', grupoV);
function grupoV() {
	let groupV = document.querySelector('#group').value;
	if (groupV === '' || groupV == 0 || isNaN(groupV) || /^\s+$/.test(groupV)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El grupo no es numerico o está vacio',
		});
		grupo.style.borderColor = 'red';
	} else {
		grupo.style.borderColor = 'green';
	}
}

// Jornada
const jornada = document.querySelector('#day');
jornada.addEventListener('blur', jornadaV);
function jornadaV() {
	let dayV = document.querySelector('#day').value;
	if (dayV === '' || dayV == 0 || !isNaN(dayV) || /^\s+$/.test(dayV)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'El nombre es incorrecto o está vacio',
		});
		jornada.style.borderColor = 'red';
	} else {
		jornada.style.borderColor = 'green';
	}
}

// Nota 1
let nota1 = document.querySelector('#nota1');
let n1;
nota1.addEventListener('blur', nota1V);
function nota1V() {
	let valorNota1 = document.querySelector('#nota1').value;
	if (valorNota1 === '' || valorNota1 == 0 || isNaN(valorNota1) || /^\s+$/.test(valorNota1)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La primera nota es incorrecta o está vacio',
		});
		nota1.style.borderColor = 'red';
	} else {
		nota1.style.borderColor = 'green';
	}
	if (valorNota1 > 5) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La primera nota debe ser menor o igual a 5',
		});
		nota1.style.borderColor = 'red';
	}
	n1 = valorNota1 * 0.1;
}

// Nota 2
let nota2 = document.querySelector('#nota2');
let n2;
nota2.addEventListener('blur', nota2V);
function nota2V() {
	let valorNota2 = document.querySelector('#nota2').value;
	if (valorNota2 === '' || valorNota2 == 0 || isNaN(valorNota2) || /^\s+$/.test(valorNota2)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La segunda nota es incorrecta o está vacio',
		});
		nota2.style.borderColor = 'red';
	} else {
		nota2.style.borderColor = 'green';
	}
	if (valorNota2 > 5) {
		nota2.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La segunda nota debe ser menor o igual a 5',
		});
	}
	n2 = valorNota2 * 0.12;
}

// Parcial
const parcial = document.querySelector('#parcial');
let nParcial;
parcial.addEventListener('blur', parcialV);
function parcialV() {
	let valorParcial = document.querySelector('#parcial').value;
	if (valorParcial === '' || valorParcial == 0 || isNaN(valorParcial) || /^\s+$/.test(valorParcial)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La nota del parcial es incorrecta o está vacio',
		});
		parcial.style.borderColor = 'red';
	} else {
		parcial.style.borderColor = 'green';
	}
	if (valorParcial > 5) {
		parcial.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La nota del parcial debe ser menor o igual a 5',
		});
	}
	nParcial = valorParcial * 0.18;
}

// Nota 3
const nota3 = document.querySelector('#nota3');
let n3;
nota3.addEventListener('blur', nota3V);
function nota3V() {
	let valorNota3 = document.querySelector('#nota3').value;
	if (valorNota3 === '' || valorNota3 == 0 || isNaN(valorNota3) || /^\s+$/.test(valorNota3)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La tercera nota es incorrecta o está vacio',
		});
		nota3.style.borderColor = 'red';
	} else {
		nota3.style.borderColor = 'green';
	}
	if (valorNota3 > 5) {
		nota3.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La tercera nota debe ser menor o igual a 5',
		});
	}
	n3 = valorNota3 * 0.1;
}

// Nota 4
const nota4 = document.querySelector('#nota4');
let n4;
nota4.addEventListener('blur', nota4V);
function nota4V() {
	let valorNota4 = document.querySelector('#nota4').value;
	if (valorNota4 === '' || valorNota4 == 0 || isNaN(valorNota4) || /^\s+$/.test(valorNota4)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La cuarta nota es incorrecta o está vacio',
		});
		nota4.style.borderColor = 'red';
	} else {
		nota4.style.borderColor = 'green';
	}
	if (valorNota4 > 5) {
		nota4.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'La cuarta nota debe ser menor o igual a 5',
		});
	}
	n4 = valorNota4 * 0.1;
}

// Nota final
const notaFinal = document.querySelector('#notaFinal');
let nFinal;
notaFinal.addEventListener('blur', finalV);
function finalV() {
	let valorNFinal = document.querySelector('#notaFinal').value;
	if (valorNFinal === '' || valorNFinal == 0 || isNaN(valorNFinal) || /^\s+$/.test(valorNFinal)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Nota final es incorrecta o está vacio',
		});
		notaFinal.style.borderColor = 'red';
	} else {
		notaFinal.style.borderColor = 'green';
	}
	if (valorNFinal > 5) {
		notaFinal.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Nota final debe ser menor o igual a 5',
		});
	}
	nFinal = valorNFinal * 0.25;
}

notaFinal.toggleAttribute('disabled');

// Taller
const taller = document.querySelector('#taller');
let nTaller;
taller.addEventListener('blur', tallerV);
function tallerV() {
	let valorTaller = document.querySelector('#taller').value;
	if (valorTaller === '' || valorTaller == 0 || isNaN(valorTaller) || /^\s+$/.test(valorTaller)) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Nota del taller es incorrecta o está vacio',
		});
		taller.style.borderColor = 'red';
	} else {
		taller.style.borderColor = 'green';
	}
	if (valorTaller > 5) {
		taller.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Nota del taller debe ser menor o igual a 5',
		});
	}

	nTaller = valorTaller * 0.15;
}

taller.addEventListener('focusout', () => {
	let NotaMomentaneo = n1 + n2 + nParcial + n3 + n4 + nTaller;
	if (NotaMomentaneo >= 3 && notaFinal !== null) {
		notaFinal.removeAttribute('disabled');
	}
});

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
	//? suma
	let resultado = n1 + n2 + nParcial + n3 + n4 + nTaller + nFinal;
	let divResultado = document.querySelector('.divResultado');
	divResultado.innerHTML = '<label for="">Resultado:</label><input type="text" id="resultado" disabled>';
	let resultadoFinal = document.querySelector('#resultado');
	resultadoFinal.value = resultado;
});