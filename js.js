function leerMas() {
    var textoCompleto = document.getElementById("texto-completo");
    var botonLeerMas = document.getElementById("boton-leer-mas");
  
    if (textoCompleto.style.display === "none") {
      textoCompleto.style.display = "block";
      botonLeerMas.textContent = "Leer menos";
    } else {
      textoCompleto.style.display = "none";
      botonLeerMas.textContent = "Leer más";
    }
  }
  