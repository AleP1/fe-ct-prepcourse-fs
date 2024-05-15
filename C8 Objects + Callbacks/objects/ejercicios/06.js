const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let cantidadPropiedades = 0;

  for (const propiedad in objeto) {
    
    if (objeto.hasOwnProperty(propiedad)) {
      cantidadPropiedades++;
    }
  }
  return cantidadPropiedades;
  
};

module.exports = contarPropiedades;
