function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();

   str1 = str1.replace(/[^a-z]/g, "");
   str2 = str2.replace(/[^a-z]/g, "");

   const arrayStr1 = str1.split("");
   const arrayStr2 = str2.split("");

   arrayStr1.sort();
   arrayStr2.sort();

   for (let i = 0; i < arrayStr1.length; i++) {
      if (arrayStr1[i] !== arrayStr2[i]) {
         return false;
      }
   }

   return true;
}

module.exports = esAnagrama;
