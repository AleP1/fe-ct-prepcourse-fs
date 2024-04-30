function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let element = num;
  let numArray = []

  for (let index = 1; index < 11; index++) {

    if (element === index) {
      return "Se interrumpió la ejecución"

    } else {
      element += 2
      numArray.push(element)
    }

  }

  console.log(numArray)
  return numArray
}

module.exports = breakStatement;
