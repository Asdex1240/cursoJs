
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Maria',
    apellido: 'Perez',
}
console.log(persona.nombreCompleto());
console.log(persona.nombreCompleto.call(persona2));