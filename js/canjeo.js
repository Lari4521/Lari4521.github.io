function canjearCodigo() {
  const codigoIngresado = document.getElementById("codigo").value.trim();
  const mensaje = document.getElementById("mensaje-canjeo");
  const botonDescarga = document.getElementById("descarga");

  const codigoValido = "FISICA2025";

  if (codigoIngresado === codigoValido) {
    mensaje.textContent = "¡Código válido! Puedes descargar el contenido completo.";
    mensaje.style.color = "green";
    botonDescarga.classList.remove("d-none");
  } else {
    mensaje.textContent = "Código inválido. Verifica con el vendedor.";
    mensaje.style.color = "red";
    botonDescarga.classList.add("d-none");
  }
}

function descargarArchivo() {
  const link = document.createElement('a');
  link.href = "fisica-completo.pdf";
  link.download = "fisica-completo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
