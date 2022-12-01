let persona = {

    nombre: 'Luis',
    apellido: 'Perez',
    email: 'luis@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Imprimir objetos
console.log(persona.nombre + ' '+ persona.apellido);

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona)
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);