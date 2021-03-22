export async function getGenreList(key) {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
  return response
}
