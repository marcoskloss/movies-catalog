import styles from '../styles/components/MoviesCard.module.css'

import Rating from './Rating'

export default function MoviesCard({title, description, rating}) {
  return (
    <div className={styles.container}>
      <img src="assets/bg-test.jpg" alt={title}/>
      <div className={styles.content}>
        <h1>{title}</h1>
        <Rating rating={rating}/>
        <p>{description}</p>
      </div>
    </div>
  )
}