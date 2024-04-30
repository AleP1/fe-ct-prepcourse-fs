function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  let equality = true

  for (let index = 0; index < array.length; index++) {

    if ( array[0] !== array[index] ) {
      equality = false

    }

    
  }
  return equality
}

module.exports = todosIguales;
