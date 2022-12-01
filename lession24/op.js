class Persona {

    constructor(nombre, apellido){
     
        this._nombre = nombre;
        this._apellido = apellido;
        
    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this.apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

}

class Empleado extends Persona{

    constructor(nombre, apellido, departamento){
        super(nombre, apellido);    // Llama al constructor de la clase padre
        this._departamento = departamento;  
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
    

}


let persona2 = new Empleado('Juan', 'Perez', 'Sistemas');
console.log(persona2.nombreCompleto());