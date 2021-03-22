import styles from '../styles/components/MoviesCard.module.css'

import {truncate} from '../utils/truncate'

import Rating from './Rating'

export default function MoviesCard({title, description, rating}) {
  const truncatedDescription = truncate(description)

  return (
    <div className={styles.container}>
      <img src="assets/bg-test.jpg" alt={title}/>
      <div className={styles.content}>
        <h1>{title}</h1>
        <Rating rating={rating}/>
        <p>{truncatedDescription}</p>
      </div>
    </div>
  )
}