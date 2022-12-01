let persona = {

    nombre: 'Luis',
    apellido: 'Perez',
    email: 'luis@mail.com',
    edad: 28,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);