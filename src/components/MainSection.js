import styles from '../styles/components/MainSection.module.css'

import MoviesCard from './MoviesCard'

export default function MainSection() {
  return (
    <section className={styles.container}>
      <h1>aventura</h1>
      <div className={styles.moviesList}>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </section>
  )
}