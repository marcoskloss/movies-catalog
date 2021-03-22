import { useContext } from 'react'

import styles from '../styles/components/MoviesSection.module.css'

import MoviesCard from './MoviesCard'

import { MoviesContext } from '../contexts/MoviesContext'

export default function MoviesSection() {
  const { activeGenre, moviesList } = useContext(MoviesContext)

  return (
    <section className={styles.container}>
      <h1>{activeGenre.title}</h1>
      <div className={styles.moviesList}>
        {moviesList.map(movie => {
          return (
            <MoviesCard 
              title={movie.title} 
              description={movie.overview} 
              rating={movie.vote_average}
              key={movie.id}
           />
          )
        })}
      </div>
    </section>
  )
}
