// Función para calcular los días restantes hasta la Navidad
const calcularTiempoHastaNavidad = () => {
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Definir la fecha de la Navidad (25 de diciembre)
  const navidad = new Date(fechaActual.getFullYear(), 11, 25);

  // Calcular la diferencia en milisegundos entre las dos fechas
  const diferencia = navidad - fechaActual;

  // Calcular los días, horas, minutos y segundos restantes
  const segundosTotales = Math.floor(diferencia / 1000);
  const segundos = segundosTotales % 60;
  const minutosTotales = Math.floor(segundosTotales / 60);
  const minutos = minutosTotales % 60;
  const horasTotales = Math.floor(minutosTotales / 60);
  const horas = horasTotales % 24;
  const dias = Math.floor(horasTotales / 24);

  return {
    dias,
    horas,
    minutos,
    segundos,
  }
};
// Función para mostrar el contador detallado en la página
const mostrarContadorDetallado = () => {
  const contador = document.getElementById("contador-detallado");
  const tiempoHastaNavidad = calcularTiempoHastaNavidad();

  if (tiempoHastaNavidad.dias === 0) {
      contador.innerHTML = `<h2>¡Hoy es Navidad!</h2>`;
  } else if (tiempoHastaNavidad.dias === 1) {
      contador.innerHTML = `<h2>¡Mañana es navidad!</h2>`;
  } else {
     contador.innerHTML = `
     <div class="contenedor-temporizador">
      <div><span class="temporizador"> ${tiempoHastaNavidad.dias} </span> <span class="date"> Días </span></div>
      <div><span class="temporizador"> ${tiempoHastaNavidad.horas} </span> <span class="date">Horas </span></div>
      <div><span class="temporizador"> ${tiempoHastaNavidad.minutos} </span> <span class="date">Minutos </span></div>
      <div><span class="temporizador"> ${tiempoHastaNavidad.segundos} </span> <span class="date">Segundos </span></div>
    </div>
       <h2>Para la Navidad.</h2>`;
  }
}

// Llamar a la función para mostrar el contador detallado al cargar la página
setInterval(mostrarContadorDetallado, 1000);

// Llamar a la función para mostrar el contador detallado al cargar la página
mostrarContadorDetallado();