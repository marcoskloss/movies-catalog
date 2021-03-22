import { useContext } from 'react'

import {MoviesContext} from '../contexts/MoviesContext'

import styles from '../styles/components/Card.module.css'

export default function Card({title, id}) {
  const { handleGenreChange } = useContext(MoviesContext)

  return (
    <div
      className={styles.container}
      onClick={() => handleGenreChange({id, title})}
    >
      <h2>{title}</h2>
    </div>
  )
} 