//Funcion constructor de objetos de tipo Persona
function Personas(nombre, apellido, email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

}

let padre = new Personas('Juan', 'Perez', 'padre@mail.com');
console.log(padre);

let madre = new Personas('Maria', 'Perez', 'madre@mail.com');
console.log(madre);


