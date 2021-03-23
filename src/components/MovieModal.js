import styles from '../styles/components/MovieModal.module.css'

export default function MovieModal({title, description, release, isOpen, setIsOpen, imagePath, language}) {

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

          <img 
            src={`https://image.tmdb.org/t/p/original/${imagePath}`} 
            alt="" 
            className={styles.poster}
          />

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