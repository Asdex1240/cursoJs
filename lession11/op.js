let persona = {

    nombre: 'Luis',
    apellido: 'Perez',
    email: 'luis@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona['nombre']);

for(nombrePropiedad in persona){
        
    console.log(persona[nombrePropiedad]);
}
