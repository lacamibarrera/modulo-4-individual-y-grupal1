function Consultorio(nombre,paciente){
    this.nombre = nombre;
    this.paciente = paciente || [];
    this.getNombre =function(){
        return this.nombre;
    };
    this.getPaciente = function(){
    return this.paciente;
    };
    this.setNombre = function (nombre){
    this.nombre=nombre;
    };
    this.setPaciente=function (paciente){
        this.paciente.push(paciente);
    };
}
/* Busca paciente y retorna Pacientes encontrados */
    Consultorio.prototype.BuscarPaciente = function(nombre) {
    return this.paciente.find((paciente) => paciente.nombre === nombre);
};
    Consultorio.prototype.PacientesEncontrados = function(){

};

/* Pacientes Ficha Paciente */

function Paciente(nombre,edad,rut,diagnostico){
    this._nombre = nombre;
    this._rut = rut;
    this._edad = edad;
    this._diagnostico = diagnostico;
    this._fichaspacientes = [];


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
let paciente3 = new Paciente("Fernando Fernandez", 45, "7.777.777.1", "Displacia de Cadera");
   


    

    paciente1.fichapaciente();
    paciente2.fichapaciente();
    paciente3.fichapaciente();

    let Consultorio1 = new Consultorio();
    Consultorio1.setPaciente(paciente1);

    console.log(Consultorio1.BuscarPaciente("Juan Perez"));



