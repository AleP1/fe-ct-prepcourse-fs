function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  const orderedArray = numeros.sort()
  console.log(orderedArray)

  let viewNumbers = [];

  for (let i = 0; i < numeros.length; i++) {
    if (viewNumbers.includes(numeros[i])) {
      return numeros[i]
    } else {
      viewNumbers.push(numeros[i])
    }

  }

}
  module.exports = encontrarElementoRepetido;