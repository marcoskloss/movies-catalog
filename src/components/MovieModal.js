import styles from '../styles/components/MovieModal.module.css'

export default function MovieModal({title, description, release, isOpen, setIsOpen, imagePath, language}) {
  const backgroundUrl =  `https://image.tmdb.org/t/p/original/${imagePath}`
  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : styles.close}`}>
      <div className={styles.overlay}>
        <div className={styles.container}>

          <img 
            src="/assets/close-btn.svg" 
            alt="Close" 
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          />

          <div className={styles.poster} style={{backgroundImage: `url(${backgroundUrl})`}}/>

          <div className={styles.content}>
            <h1>{title}</h1>
            <p className={styles.description}>
              {description}
            </p>
            <div className={styles.about}>
              <p>Release Date: {release}</p>
              <p>Original Language: {language}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}