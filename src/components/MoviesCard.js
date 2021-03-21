import styles from '../styles/components/MoviesCard.module.css'

import Rating from './Rating'

export default function MoviesCard() {
  return (
    <div className={styles.container}>
      <img src="assets/bg-test.jpg" alt="Filme tal"/>
      <div className={styles.content}>
        <h1>Título</h1>
        <Rating />
        <p>
          Lorem impsum textis sin sentidis escrivis rapium eres istos 
          tuti bene parmegiano regiano textis sin sentidis escrivis rapium eres istos 
          tuti bene parmegiano regiano.
        </p>
      </div>
    </div>
  )
}