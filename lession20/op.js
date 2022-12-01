
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan@mail.com',
    edad: 28,
    nombreCompleto: function(profesion, telefono){
        return profesion + ' ; '+this.nombre + ' ' + this.apellido + ' ; '+telefono;
    }
}

let persona2 = {
    nombre: 'Maria',
    apellido: 'Perez',
}
console.log(persona.nombreCompleto('Programador', 123456));
console.log(persona.nombreCompleto.call(persona2, 'Ingeniero', 123456));