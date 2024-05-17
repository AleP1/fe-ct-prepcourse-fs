function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  const posts = objetoUsuario.posts;
  let totalLikes = 0;

  for (const post of posts) {
 
    const likesDelPost = post.likes;

    totalLikes += likesDelPost;
  }

  return totalLikes;

}

module.exports = sumarLikesDeUsuario;
