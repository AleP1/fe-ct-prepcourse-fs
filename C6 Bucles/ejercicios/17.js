function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let typeColor = "";

  switch (color) {

    case "blue":
      typeColor = "This is blue";
      break;
    case "red":
      typeColor = "This is red";
      break;
    case "green":
      typeColor = "This is green";
      break;
    case "orange":
      typeColor = "This is orange";
      break;

    default:
      typeColor = "Color not found";
      break;
  }
  return typeColor;

}

module.exports = colors;
