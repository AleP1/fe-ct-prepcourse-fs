function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = []

  for (let index = 0; index < array.length; index++) {

    switch (array[index]) {
      case "Enero":
        meses.push(array[index])
        break;
      case "Marzo":
        meses.push(array[index])
        break;
      case "Noviembre":
        meses.push(array[index])
        break;
    }

  }

  if (meses.includes("Enero") && meses.includes("Marzo") && meses.includes("Noviembre")) {
    return meses
  } else {
    return "No se encontraron los meses pedidos"
  }
}

module.exports = mesesDelAño;
