function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  const splitArray = texto.split("")
  const reverseArray = splitArray.reverse()
  const concatText = reverseArray.join("")
  
  return concatText
}

module.exports = invertirTexto;
