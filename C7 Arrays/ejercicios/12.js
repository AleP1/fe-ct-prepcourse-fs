function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const array2 = array.map( material => material.toUpperCase() )

  return array2
}

module.exports = convertirStringAMayusculas;
