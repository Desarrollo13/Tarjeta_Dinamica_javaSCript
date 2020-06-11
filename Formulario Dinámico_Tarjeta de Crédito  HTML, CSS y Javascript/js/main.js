//aca solo trabajamos para hacer girar la tarjeta
const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logomarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta #expiracion .mes'),
    yearExpiracion = document.querySelector('#tarjeta #expiracion .year'),
    ccv = document.querySelector('#tarjeta .ccv');
//volteamos la tarjeta para que el usuario pueda ver 
const mostrarfrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}





//Esto es para rotar la tarjeta

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
//Este es para abrir el formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

//queremos rellenar los select del mes generado dinamicamente
for (let i = 1; i <= 12; i++) {


    let opcion = document.createElement('option');
    //con esta instruccion createElement no permite crear una etiqueta
    opcion.value = i;
    //este innerText nos permite ingrear y trabajar con la letra mes    
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);

}
//queremos rellenar los select del año generado dinamicamente
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    //con esta instruccion createElement no permite crear una etiqueta
    opcion.value = i;
    //este innerText nos permite ingrear y trabajar con la letra mes    
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}
//imput numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {

    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput
        //Eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar letras
        .replace(/\D/g, '')
        //Ponemos espacios cada cuatros numeros 1111 1111 
        .replace(/([0-9]{4})/g, '$1 ')
        //Elimina el ultimo espaciado
        .trim();
    //Aca cuando escribo los numeros se visualizan en la tarjata

    numeroTarjeta.textContent = valorInput;
    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';
        logomarca.innerHTML = '';
    }
    //Valido el numero distinto de tarjeta si empieza con 4 o 5 es visa o mastercad etc
    if (valorInput[0] == 4) {
        logomarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logomarca.appendChild(imagen);

    } else
    if (valorInput[0] == 5) {
        logomarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logomarca.appendChild(imagen);
    }
    //volteamos la tarjeta para que el usuario vea la tarjeta
    mostrarfrente();
});
// input nombre de la tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;
    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Whick';

    }
    mostrarfrente();

});
// vamos a trabajar con el select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarfrente();

});
// vamos a trabajar con el select year
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarfrente();
});
// Este es codigo ccv
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }
    formulario.inputCCV.value = formulario.inputCCV.value
        // Borra los espacios
        .replace(/\s/g, '')
        //Eliminar letras
        .replace(/\D/g, '');
    ccv.textContent = formulario.inputCCV.value;

});