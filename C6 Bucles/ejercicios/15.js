function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  let Day = ""

  switch (numero) {
    case 1:
      Day = "Lunes";
      break;
      case 2:
        Day = "Martes";
      break;
      case 3:
        Day = "Miercoles";
      break;
      case 4:
        Day = "Jueves";
      break;
      case 5:
        Day = "Viernes";
      break;
      case 6:
        Day = "Sabado";
      break;
      case 7:
        Day = "Domingo";
      break;
      default:
      Day = "No es un dia de la semana";
      break;
  }
  return Day;
}

module.exports = obtenerDiaSemana;