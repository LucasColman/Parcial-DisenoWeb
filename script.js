/* 
Lucas COLMAN */

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensajeError = document.getElementById("mensajeError");
  mensajeError.textContent = "";

  if (nombre === "" || email === "") {
    mensajeError.textContent = "Por favor, completá todos los campos.";
    return false;
  }

  const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!regexEmail.test(email)) {
    mensajeError.textContent = "Correo electrónico no válido.";
    return false;
  }

  return true;
}


function calcularDescuento() {
  const precio = parseFloat(document.getElementById("precioBase").value);
  const descuento = parseFloat(document.getElementById("porcentajeDescuento").value);
  const resultado = document.getElementById("resultadoDescuento");

  if (isNaN(precio) || isNaN(descuento)) {
    resultado.textContent = "Ingresá valores válidos.";
    resultado.style.color = "red";
    return;
  }

  if (descuento < 0 || descuento > 100) {
    resultado.textContent = "El descuento debe estar entre 0 y 100%.";
    resultado.style.color = "red";
    return;
  }

  const precioFinal = precio - (precio * descuento / 100);
  resultado.textContent = `Precio final: $${precioFinal.toFixed(2)}`;
  resultado.style.color = "green";
}
