function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let newArray = 0

for (let index = 0; index < arrayOfNums.length; index++) {

  newArray = newArray + arrayOfNums[index];
  
}

return newArray
}

module.exports = agregarNumeros;
