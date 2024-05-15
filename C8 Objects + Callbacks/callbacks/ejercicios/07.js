function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let stringAArray = []

   
   for (let index = 0; index < arrayOfStrings.length; index++) {
      const element = arrayOfStrings[index];
      
      const splitArrayItem = element.split("")
      if (splitArrayItem[0] === "a") {
         stringAArray.push( arrayOfStrings[index] )
      }
   }
   return stringAArray




}

module.exports = filter;
