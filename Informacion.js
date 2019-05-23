const {cursos} = require('./Miscursos');
const fs = require('fs');

setTimeout(function(){
	console.log(cursos[0].id + ' ' + cursos[0].nombre + ', consta de una duración de ' + cursos[0].duracion + ' y tiene un costo de ' + cursos[0].valor + '.');
}, 1000);

setTimeout(function(){
	console.log(cursos[1].id + ' ' + cursos[1].nombre + ', consta de una duración de ' + cursos[1].duracion + ' y tiene un costo de ' + cursos[1].valor + '.');
}, 3000);

setTimeout(function(){
	console.log(cursos[2].id + ' ' + cursos[2].nombre + ', consta de una duración de ' + cursos[2].duracion + ' y tiene un costo de ' + cursos[2].valor + '.');
}, 5000);

setTimeout(function(){
	console.log(cursos[3].id + ' ' + cursos[3].nombre + ', consta de una duración de ' + cursos[3].duracion + ' y tiene un costo de ' + cursos[3].valor + '.');
}, 7000);

const estudiantes = {
	id:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'c'
	}
}

const argv = require('yargs')
			.command('inscribir','inscribir estudiantes',estudiantes)
			.argv;

let createfile = (estudiante) =>{
	contenido = 'se ha inscrito el alumno ' + argv.n + ' con número de cédula ' + argv.c + 'al curso de php';
	fs.writeFile('Inscripciones.txt', contenido, (err)=>{
		if(err) throw('No puede inscribirse al curso');
		console.log('Se ha creado el archivo con éxito.');
	});
}
