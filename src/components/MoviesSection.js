import { useContext } from 'react'

import styles from '../styles/components/MoviesSection.module.css'

import MoviesCard from './MoviesCard'
import MoviesSectionLoading from './MoviesSectionLoading'

import { MoviesContext } from '../contexts/MoviesContext'

export default function MoviesSection() {
  const { activeGenre, moviesList, hasGenreSelected } = useContext(MoviesContext)

  if (!hasGenreSelected) {
    return <MoviesSectionLoading />
  }

  return (
    <section className={styles.container}>
      <h1>{activeGenre.title}</h1>
      <div className={styles.moviesList}>
        {moviesList.map(movie => {
          return (
            <MoviesCard 
              title={movie.title} 
              description={movie.overview} 
              votes={movie.vote_average}
              imagePath={movie.poster_path}
              key={movie.id}
              release_date={movie.release_date}
              language={movie.original_language}
           />
          )
        })}
      </div>
    </section>
  )
}
