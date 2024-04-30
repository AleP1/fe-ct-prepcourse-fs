function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let fraseConcatenada = "";

  for (let i = 0; i < palabras.length; i++) {
    fraseConcatenada += palabras[i];

    // Si no es la última palabra, agrega un espacio
    if (i < palabras.length - 1) {
      fraseConcatenada += " ";
    }
  }

  return fraseConcatenada;
}

module.exports = dePalabrasAFrase;
