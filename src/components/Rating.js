import styles from '../styles/components/Rating.module.css'

const heartIcons = [1,2,3,4,5]

export default function Rating({votes}) {
  const rating = votes / 2
  const filledIcons = Math.floor(rating)
  let hasPartiallyFilledIcon = Math.round(Number((rating - filledIcons).toFixed(1))) > 0

  return (
    <div className={styles.rating}>
      {heartIcons.map((item, index) => {
        if (index < filledIcons) {
          return (
            <img src="/assets/heart.svg" alt="Rating" key={index}/>
          )
        } else if (hasPartiallyFilledIcon) {
          hasPartiallyFilledIcon = !hasPartiallyFilledIcon
          return <img src="/assets/half-filled-heart.svg" alt="Rating" key={index}/>
        } else {
          return <img src="/assets/heart-outline.svg" alt="Rating" key={index}/>
        }
      })}
    </div>
  )
}