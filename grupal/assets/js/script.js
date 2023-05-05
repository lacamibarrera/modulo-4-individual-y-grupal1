function validarInput() {   
    const entradaBusqueda = document.getElementById('entradaUsuario');
    const valorBusqueda = entradaBusqueda.value;
    
    if (valorBusqueda.trim() === '' || !isNaN(valorBusqueda)) {
        return false;
    } else {
        return true;
    }
}

validarInput();