//aca solo trabajamos para hacer girar la tarjeta
const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
});