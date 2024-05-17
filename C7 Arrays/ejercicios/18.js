function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let total = 0
  let prom = 0

  for (let index = 0; index < resultadosTest.length; index++) {
    total += resultadosTest[index];

  }

  prom = total / resultadosTest.length

  return prom
}

module.exports = promedioResultadosTest;
