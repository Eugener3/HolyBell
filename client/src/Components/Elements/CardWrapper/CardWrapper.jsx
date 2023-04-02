import React from "react"
import styles from "./CardWrapper.module.scss"
import CardItem from "../CardItem/CardItem"
import Image1 from "../../../images/23krhtEjb4SgZcQ.webp"
import Image2 from "../../../images/cGNahzAeoJFmDUy.webp"
import Image3 from "../../../images/ucPsORdrx3gjKUU.webp"

const goods = [
  {
    price: "26.25",
    currency: "USD",
    imgUrl: Image1,
    productName: "Ультра Черная Футболка",
  },
  {
    price: "24.15",
    currency: "EUR",
    imgUrl: Image2,
    productName: "B.O.M.J Black",
  },
  {
    price: "3400",
    currency: "P",
    imgUrl: Image3,
    productName: "Marginal Black",
  },
  {
    price: "11 939.09",
    currency: "KZT",
    imgUrl: Image1,
    productName: "Black Mirror",
  },
  {
    price: "1000",
    currency: "BTC",
    imgUrl: Image2,
    productName: "Трава у дома",
  },
]

const CardWrapper = () => {
  const goodsStore = goods.map((good, index) => 
    <CardItem
      price={good.price + " "}
      currency={good.currency}
      imgUrl={good.imgUrl}
      productName={good.productName}
    />
  )



  return (
    <div className={styles.cardWrapper}>
      {goodsStore}
    </div>
  )
}

export default CardWrapper
