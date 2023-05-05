function validarInput(){
    let entradaUsuario = document.getElementById('entradaUsuario');
    if (entradaUsuario.trim() === '' || !isNaN(entradaUsuario)){
        return false;
    } else {
        return true;
    }
}

validarInput();