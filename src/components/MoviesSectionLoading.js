import styles from '../styles/components/MovieSectionLoading.module.css'

export default function MovieSectionLoading() {
  return (
    <div className={styles.container}>
      <h1>Select a genre to start!</h1>
      <img src="/assets/index-finger.svg" alt="Pointing"/>
    </div>
  )
}