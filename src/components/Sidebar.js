import styles from '../styles/components/Sidebar.module.css'

import { useEffect, useState } from 'react'

import Card from './Card'
import { getGenreList } from '../services/genreList'


export default function Sidebar() {
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    (async () => {
      const response = await getGenreList(process.env.REACT_APP_API_KEY)
      const data = await response.json()
      const genres = data.genres
      setGenreList(genres)
    })()
  }, [])

  return (
    <aside className={styles.sidebar}>
      <h1>Genres</h1>
      <div className={styles.container}>
        <div className={styles.scroll}>
          {genreList.map(genre => {
            return <Card title={genre.name} id={genre.id} key={genre.id}/>
          })}
        </div>
      </div>
    </aside>
  )
}