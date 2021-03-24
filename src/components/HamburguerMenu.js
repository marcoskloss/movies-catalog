import { useState } from 'react'

import styles from '../styles/components/HamburguerMenu.module.css'

import Card from './Card'

export default function HamburguerMenu({genreList}) {
  const [isHidden, setIsHidden] = useState(true)

  console.log(genreList.length);
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
            <div onClick={() => setIsHidden(true)}>
              <Card 
              title={genre.name} 
              id={genre.id} 
              key={genre.id} />
            </div>
          )
        })}
      </div>
    </>
  )
}