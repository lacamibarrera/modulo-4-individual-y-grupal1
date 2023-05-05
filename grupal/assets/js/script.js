
function validarInput(input) {    
    if (input.trim() === '' || !isNaN(input)) {
        return false;
    } else {
        return true;
    }
}

const entradaBusqueda = document.getElementById('entradaUsuario');
const valorBusqueda = entradaBusqueda.value;

validarInput(valorBusqueda);