import styles from '../styles/components/Rating.module.css'

export default function Rating({rating}) {
  return (
    <div className={styles.rating}>
      <img src="/assets/heart.svg" alt="Heart"/>
      <img src="/assets/heart.svg" alt="Heart"/>
      <img src="/assets/heart.svg" alt="Heart"/>
      <img src="/assets/heart.svg" alt="Heart"/>
      <img src="/assets/heart.svg" alt="Heart"/>
    </div>
  )
}