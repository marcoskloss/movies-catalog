import styles from '../styles/components/Card.module.css'

export default function Card({title}) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  )
} 