export async function getMoviesListByGenre(key, genre) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
  const data = await response.json()
  return data.results
}