import React from "react"
import styles from "./CardItem.module.scss"

const CardItem = props => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.blackout}>
        <div className={styles.buttonAboutWrapper}>
          <button className={styles.buttonAbout}>ПОДРОБНЕЕ</button>
        </div>

        <div className={styles.priceTag}>
          {props.price}
          {props.currency}
        </div>
        <div className={styles.cardVisual}>
          <img src={props.imgUrl} alt={props.price} className={styles.cardImage} />
        </div>
      </div>  
      <div className={styles.buttonWrapper}>
        <button className={styles.cardButton}>
          {props.productName}
        </button>
      </div>
    </div>
  )
}

export default CardItem
