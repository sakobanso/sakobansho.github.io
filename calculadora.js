 const pantalla = document.getElementById("display");
  const contenedorImagen = document.getElementById("imagen-secreta");
  const audioSecreto = document.getElementById("audio-secreto");
  let resultadoMostrado = false;

  function agregar(valor) {
    if (resultadoMostrado) {
      pantalla.value = "";
      contenedorImagen.innerHTML = "";
      resultadoMostrado = false;
    }
    pantalla.value += valor;
  }

  function calcular() {
    try {
      let resultado = eval(pantalla.value);
      if (resultado === undefined || resultado === "") {
        pantalla.value = "Error";
      } else {
        pantalla.value = resultado;
      }
      resultadoMostrado = true;

      // Código secreto
      if (resultado === 12343) {
        // Mostrar imagen
        contenedorImagen.innerHTML = `<img src="./imagenes/gato-xd.gif" alt="Código secreto" style="max-width: 200px;">`;
        
        // Reproducir audio
        audioSecreto.currentTime = 0; // Reiniciar audio
        audioSecreto.play();
      } else {
        contenedorImagen.innerHTML = "";
      }

    } catch (error) {
      pantalla.value = "Error";
      resultadoMostrado = true;
      contenedorImagen.innerHTML = "";
    }
  }

  function limpiar() {
    pantalla.value = "";
    resultadoMostrado = false;
    contenedorImagen.innerHTML = "";
  }