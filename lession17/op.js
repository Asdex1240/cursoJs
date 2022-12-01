//Funcion constructor de objetos de tipo Persona
function Personas(nombre, apellido, email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
            
        return this.nombre + ' ' + this.apellido;

    }

}

let padre = new Personas('Juan', 'Perez', 'padre@mail.com');
console.log(padre.nombreCompleto());

let madre = new Personas('Maria', 'Perez', 'madre@mail.com');
console.log(madre.nombreCompleto());


