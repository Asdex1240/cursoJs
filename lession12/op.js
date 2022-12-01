let persona = {

    nombre: 'Luis',
    apellido: 'Perez',
    email: 'luis@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Esto para agregar una propiedad
persona.telefono = '1234567890';
console.log(persona.telefono);

//Esto para eliminar una propiedad
delete persona.telefono;
console.log(persona);