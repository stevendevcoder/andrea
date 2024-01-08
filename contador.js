const nextYear = (new Date()).getFullYear() + 1
const nextYearDate = new Date(nextYear, 0, 1)

setInterval(() => {
  const todayDate = new Date()
  const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime()) / 1000)

  // Verificar si ya ha llegado a cero
  if (secDiff <= 0) {
    // Si ha llegado a cero, detener el intervalo o realizar alguna acción adicional
    clearInterval(intervalId);
    console.log('¡Contador ha llegado a cero!');
  } else {
    const days = Math.floor((secDiff / (60 * 60)) / 24)
    const hours = Math.floor(secDiff / (60 * 60)) % 24
    const minutes = Math.floor(secDiff / 60) % 60
    const seconds = Math.floor(secDiff) % 60

    dayElement.innerText = days
    hourElement.innerText = hours
    minElement.innerText = minutes
    secElement.innerText = seconds
  }
}, 1000);

// Guardar el ID del intervalo para poder detenerlo más tarde si es necesario

