function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  
  let resultado = 1;

  for (let index = a; index <= b; index++) {

    resultado *= index;
    if (resultado == -0) {
      resultado = 0
    }
    
  }

  return resultado ;
}

module.exports = productoEntreNúmeros;