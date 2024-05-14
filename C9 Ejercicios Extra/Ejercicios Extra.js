/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  const arrayToArrays = Object.entries(objeto)
  return arrayToArrays
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  const repetition = {};
  const stringLowerCase = string.toLowerCase();

  for (const caracter of stringLowerCase) {
    if (repetition.hasOwnProperty(caracter)) {
      repetition[caracter]++;
    } else {
      repetition[caracter] = 1;
    }
  }

  return repetition
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let upperCase = [];
  let lowerCase = [];
  const stringSplit = string.split("")

  for (let i = 0; i < string.length; i++) {
    if (stringSplit[i] === stringSplit[i].toUpperCase()) {
      upperCase.push(stringSplit[i]);
    } else {
      lowerCase.push(stringSplit[i]);
    }
  }

  // Unimos los arrays en el orden deseado: mayúsculas primero, luego minúsculas
  const newString = upperCase.join("") + lowerCase.join("");
  return newString;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  const fraseSplit = frase.split(" ");
  let fraseReverse = "";

  for (let i = 0; i < fraseSplit.length; i++) {
    const palabraInvertida = fraseSplit[i].split("").reverse().join("");
    fraseReverse += palabraInvertida + " ";
  }

  return fraseReverse.trim();
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  const numeroReverse = numero.toString().split("").reverse().join("")

  if (numero == numeroReverse) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const stringDelete = string.split("").filter( char => char !== "a" && char !== "b" && char !== "c" ).join("");

  return stringDelete
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let newArray = arrayOfStrings.sort((a, b) => a.length - b.length)

  return newArray
    
  }

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  let interseccion = [];

  for (let i = 0; i < array1.length; i++) {
    let elemento = array1[i];

    if (array2.includes(elemento)) {
      
      interseccion.push(elemento);
    }
  }

  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
