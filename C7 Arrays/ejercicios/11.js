function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  const array2 = array.map( material => material * 2 )

  return array2
}

module.exports = duplicarElementos;
