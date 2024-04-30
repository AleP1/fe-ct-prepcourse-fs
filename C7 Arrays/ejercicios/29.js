function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:


    const diferenciaEsperada = 1;
    let numeroAnterior = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      const numeroActual = numeros[i];
      const diferencia = numeroActual - numeroAnterior;
  
      if (diferencia !== diferenciaEsperada) {
        return numeroAnterior + diferenciaEsperada;
      }
  
      numeroAnterior = numeroActual;
    }
  
    return null
  }


module.exports = encontrarNumeroFaltante;