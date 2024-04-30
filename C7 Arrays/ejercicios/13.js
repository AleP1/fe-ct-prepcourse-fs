function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  const pares = [];

  for (let i = 0; i < array.length; i++) {
    const numero = array[i];
    pares.push(numero % 2 === 0 ? numero : null);
  }
  return pares.filter(numero => numero !== null);
}

module.exports = filtrarNumerosPares;
