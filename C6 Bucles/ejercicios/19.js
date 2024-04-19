function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let result = 0

  for ( let index = 1; index <= n; index++ ) {
    
    result += index
  }

  return result
}

module.exports = sumarHastaN;
