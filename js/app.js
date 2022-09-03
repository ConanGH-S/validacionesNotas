//! Prevent default
$('form').submit((e) => {
	e.preventDefault();
});

//? Nombre validar
$('#name').blur(() => {
	let nombreVal = $('#name').val();
	nombreVal === '' || nombreVal == 0 || !isNaN(nombreVal) || /^\s+$/.test(nombreVal) ? Swal.fire({ icon: 'error', title: 'Error', text: 'El nombre es incorrecto o está vacio' }) : '';
});

//? Apellido Validar
$('#lastName').blur(() => {
	let apellidoVal = $('#lastName').val();
	apellidoVal === '' || apellidoVal == 0 || !isNaN(apellidoVal) || /^\s+$/.test(apellidoVal) ? Swal.fire({ icon: 'error', title: 'Error', text: 'El apellido es incorrecto o está vacio' }) : '';
});

//? Grupo Validar
$('#group').blur(() => {
	let grupoVal = $('#group').val();
	grupoVal === '' || grupoVal == 0 || isNaN(grupoVal) || /^\s+$/.test(grupoVal) ? Swal.fire({ icon: 'error', title: 'Error', text: 'El grupo no es numerico o está vacio' }) : '';
});

//? Jornada Validar
$('#day').blur(() => {
	let jornadaVal = $('#day').val();
	jornadaVal === '' || jornadaVal == 0 || !isNaN(jornadaVal) || /^\s+$/.test(jornada) ? Swal.fire({ icon: 'error', title: 'Error', text: 'El nombre es incorrecto o está vacio' }) : '';
});

//* DECLARACION NOTAS

//? Nota 1 Validar
let calificacionNota1;
$('#nota1').keyup(() => {
	var nota1Val = $('#nota1').val();
	nota1Val === '' || nota1Val == 0 || isNaN(nota1Val) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La primera nota es incorrecta o está vacio' }) : '';
	nota1Val > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La primera nota debe ser menor o igual a 5' }) : '';
	calificacionNota1 = nota1Val * 0.1;
});

//? Nota 2 Validar
let calificacionNota2;
$('#nota2').keyup(() => {
	let nota2Val = $('#nota2').val();
	nota2Val === '' || nota2Val == 0 || isNaN(nota2Val) || /^\s+$/.test(nota2Val) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La segunda nota es incorrecta o está vacía' }) : '';
	nota2Val > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La segunda nota debe ser menor o igual a 5' }) : '';
	calificacionNota2 = nota2Val * 0.12;
});

//? Nota 3 Validar
let calificacionNota3;
$('#nota3').keyup(() => {
	let nota3Val = $('#nota3').val();
	nota3Val === '' || nota3Val == 0 || isNaN(nota3Val) || /^\s+$/.test(nota3Val) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La tercera nota es incorrecta o está vacía' }) : '';
	nota3Val > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La tercera nota debe ser menor o igual a 5' }) : '';
	calificacionNota3 = nota3Val * 0.1;
});

//? Parcial Validar
let calificacionParcialNota;
$('#parcial').keyup(() => {
	let notaParcialVal = $('#parcial').val();
	notaParcialVal === '' || notaParcialVal == 0 || isNaN(notaParcialVal) || /^\s+$/.test(notaParcialVal) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La tercera nota es incorrecta o está vacía' }) : '';
	notaParcialVal > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La tercera nota debe ser menor o igual a 5' }) : '';
	calificacionParcialNota = notaParcialVal * 0.18;
});

//? Nota 4 Validar
let calificacionNota4;
$('#nota4').keyup(() => {
	let nota4Val = $('#nota4').val();
	nota4Val === '' || nota4Val == 0 || isNaN(nota4Val) || /^\s+$/.test(nota4Val) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La cuarta nota es incorrecta o está vacía' }) : '';
	nota4Val > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La cuarta nota debe ser menor o igual a 5' }) : '';
	calificacionNota4 = nota4Val * 0.1;
});

//? Taller Validar
let calificacionTaller;
$('#taller').keyup(() => {
	let tallerVal = $('#taller').val();
	tallerVal === '' || tallerVal == 0 || isNaN(tallerVal) || /^\s+$/.test(tallerVal) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La nota del taller es incorrecta o está vacía' }) : '';
	tallerVal > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La nota del taller debe ser menor o igual a 5' }) : '';
	calificacionTaller = tallerVal * 0.15;
});

//? Nota final Validar
let calificacionFinal;
$('#notaFinal').keyup(() => {
	let finalVal = $('#notaFinal').val();
	finalVal === '' || finalVal == 0 || isNaN(finalVal) || /^\s+$/.test(finalVal) ? Swal.fire({ icon: 'error', title: 'Error', text: 'La nota final es incorrecta o está vacía' }) : '';
	finalVal > 5 ? Swal.fire({ icon: 'error', title: 'Error', text: 'La nota final debe ser menor o igual a 5' }) : '';
	calificacionFinal = finalVal * 0.25;
});

let notaFinal = document.querySelector('#notaFinal');
notaFinal.toggleAttribute('disabled');
notaFinal.classList.add('finalDisabled');

//? Validar datos antes de la nota final para habilitarlo
$('#taller').blur(() => {
	let NotaMomentaneo = calificacionNota1 + calificacionNota2 + calificacionNota3 + calificacionParcialNota + calificacionNota4 + calificacionTaller;
	if (NotaMomentaneo >= 3 && NotaMomentaneo !== null) {
		notaFinal.removeAttribute('disabled');
		notaFinal.classList.remove('finalDisabled');
	}
	NotaMomentaneo < 3 ? Swal.fire({text: 'El alumno ha perdido'}): '';
});

$('#btn').click(() => {
	let resultado = calificacionNota1 + calificacionNota2 + calificacionNota3 + calificacionParcialNota + calificacionNota4 + calificacionTaller + calificacionFinal;
	let divResultado = document.querySelector('.divResultado');
	divResultado.innerHTML = '<label for="">Resultado:</label><input type="text" id="resultado" disabled>';
	let resultadoVal = document.getElementById('resultado')
	resultadoVal.value = resultado
})
