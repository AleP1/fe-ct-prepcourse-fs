function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:

  if (!objeto.hasOwnProperty(metodo)) {
    throw new Error(`El objeto no tiene la propiedad "${metodo}"`);
  }

  const funcionMetodo = objeto[metodo];


  if (typeof funcionMetodo !== 'function') {
    throw new Error(`La propiedad "${metodo}" no es una función`);
  }


  funcionMetodo();
}

module.exports = invocarMetodo;
