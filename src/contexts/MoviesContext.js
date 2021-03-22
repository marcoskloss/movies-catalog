import { createContext, useEffect, useState } from "react";

import { getMoviesListByGenre } from '../services/getMoviesListByGenre'

export const MoviesContext = createContext({})

export function MoviesProvider({children}) {
  const [activeGenre, setActiveGenre] = useState({})
  const [moviesList, setMoviesList] = useState([])
  
  async function handleGenreChange(genre) {
    setActiveGenre(genre)
  }

  useEffect(() => {
    (async () => {
      const list = await getMoviesListByGenre(process.env.REACT_APP_API_KEY, activeGenre.id) 
      setMoviesList(list)
    })()
  }, [activeGenre])

  return (
    <MoviesContext.Provider
      value={{
        handleGenreChange,
        activeGenre,
        moviesList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}