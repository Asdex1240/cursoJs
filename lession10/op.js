let persona = {

    nombre: 'Luis',
    apellido: 'Perez',
    email: 'luis@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto());


let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.apellido = 'Perez';
persona2.email = 'juan@mail.com';
persona2.edad = 33;

console.log(persona2.apellido);