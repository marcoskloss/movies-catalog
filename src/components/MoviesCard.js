import styles from '../styles/components/MoviesCard.module.css'

import {truncate} from '../utils/truncate'

import Rating from './Rating'
import MovieModal from './MovieModal'
import { useState } from 'react'

export default function MoviesCard({title, description, votes, imagePath, release_date, language}) {
  const truncatedDescription = truncate(description)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MovieModal 
        title={title}
        description={description}
        release={release_date}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imagePath={imagePath}
        language={language}
      />

      <div className={styles.container} onClick={() => setIsOpen(true)}>
        <div className={styles.overlay} />
        <img src={`https://image.tmdb.org/t/p/original/${imagePath}`} alt={title}/>
        <div className={styles.content}>
          <h1>{title}</h1>
          <Rating votes={votes}/>
          <p>{truncatedDescription}</p>
        </div>
      </div>
    </>
  )
}