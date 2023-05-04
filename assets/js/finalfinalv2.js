 // Clase Consultorio
function Consultorio(nombrePaciente) {
    this._nombrePaciente = nombrePaciente;

  
}

Object.defineProperty(Consultorio.prototype,'prueba',{
    set: function(nuevoPaciente){
        this._nombrePaciente = nuevoPaciente;
    },
    get: function(){
        return this._nombrePaciente
    }
})

// Consultorio.prototype = {
//     get nombrePaciente() {
//         return this._nombrePaciente;
//     },
//     set cambiarNombre(nuevoNombre) {
//         this._nombre = nuevoNombre;
//     }
// }


let nuevoPaciente1 = new Consultorio("Fernando Fernandez");
let nuevoPaciente2 = new Consultorio("Juan Perez");
let nuevoPaciente3 = new Consultorio("Juanito Perez");
 console.log(nuevoPaciente1.prueba);
 console.log(nuevoPaciente1.prueba = "juan valdebenito");
 console.log(nuevoPaciente2.test);


/* Funcion que busca por nombre paciente"*/

function Buscarpaciente(nombre){
let pacientesEncontrados = [];

    for (let i = 0; i < Paciente.listaDePacientes.length; i++) {
        if (Paciente._listadepacientes[i].nombre.toLowerCase() === nombre.toLowerCase()) {
        pacientesEncontrados.push(Paciente._listadepacientes[i]);
    }
    }

    return pacientesEncontrados;
};

Paciente.prototype.mostrarPacientes= function(){
    return Paciente._listadepacientes;

}
   /* console.log(Buscarpaciente ("Fernando Fernandez"));*/

// Clase PACIENTE
function Paciente(nombre, rut, edad, diagnostico) {
    this._nombre = nombre;
    this._rut = rut;
    this._edad = edad;
    this._diagnostico = diagnostico;
    this._listadepacientes = [];


}

    Paciente.prototype = {
        get nombre() {
            return this._nombre;
    },
        set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    },
        get rut() {
            return this._rut;
    },
        set rut(nuevoRut) {
        this._rut = nuevoRut;
    },
        get edad() {
            return this._edad;
    },
        set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    },
        get diagnostico() {
            return this._diagnostico;
    },
        set diagnostico(nuevoDiagnostico) {
        this._diagnostico = nuevoDiagnostico;
    },
        fichapaciente(){
            console.log(`Nombre del Paciente :  ${this._nombre}  Edad :    ${this._edad}  años  R.U.T :    ${this._rut}   Diagnóstico : ${this._diagnostico}`)
        }
};





let paciente1 = new Paciente("Juan Perez", 30, "123456-8", "Gripe");
let paciente2 = new Paciente("Margarita Ruiz", 58, "7.896.523-8", "Hipertensión");
//let paciente3 = new Paciente("Fernando Fernandez", 45, "7.777.777.1", "Displacia de Cadera");
   


    

    paciente1.fichapaciente();
    paciente2.fichapaciente();

    Paciente._listadepacientes.push(paciente1, paciente2);

console.log(paciente1.Buscarpaciente("Fernando Fernandez"));

console.log(Paciente._listadepacientes);