import { useState } from 'react'

import styles from '../styles/components/HamburguerMenu.module.css'

import Card from './Card'

export default function HamburguerMenu({genreList}) {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <>
      <div className={styles.container} onClick={() => setIsHidden(prevState => !prevState)}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
      </div>

      <div className={`${styles.content} ${isHidden ? styles.hidden : ''}`}>
        {genreList.map(genre => {
          return (
            <div onClick={() => setIsHidden(true)} key={genre.id}>
              <Card 
                title={genre.name} 
                id={genre.id} 
              />
            </div>
          )
        })}
      </div>
    </>
  )
}