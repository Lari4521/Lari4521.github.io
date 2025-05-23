function canjearCodigo() {
  const codigo = document.getElementById('codigo').value.trim();
  const mensaje = document.getElementById('mensaje-canjeo');

  const codigoValido = "FISICA2025";

  if (localStorage.getItem("codigo_canjeado") === "true") {
    mensaje.className = "alert alert-warning";
    mensaje.innerText = "Este código ya fue usado. Solicita uno nuevo.";
    mensaje.classList.remove("d-none");
    return;
  }

  if (codigo === codigoValido) {
    mensaje.className = "alert alert-success";
    mensaje.innerText = "¡Código válido! Contenido desbloqueado.";
    mensaje.classList.remove("d-none");
    localStorage.setItem("codigo_canjeado", "true");
  } else {
    mensaje.className = "alert alert-danger";
    mensaje.innerText = "Código incorrecto.";
    mensaje.classList.remove("d-none");
  }
}
