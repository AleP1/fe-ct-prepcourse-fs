function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let newArray = 0

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 10) {
      newArray += 1
    }
    
  }

  return newArray
}

module.exports = contarElementosMayoresA10;
