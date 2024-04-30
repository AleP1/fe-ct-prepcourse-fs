function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let newArray = []

  for (let index = 0; index < array.length; index++) {
    
    newArray.push(index * array[index])
    
  }

  return newArray
}

module.exports = multiplicarElementosPorIndice;
