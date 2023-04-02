import React from "react"
import styles from "./CardWrapper.module.scss"
import CardItem from "../CardItem/CardItem"
import Image from "../../../images/23krhtEjb4SgZcQ.webp"

const goods = [
  {
    price: "26.25",
    currency: "USD",
    imgUrl: Image,
    productName: "Ультра Черная Футболка",
  },
  {
    price: "24.15",
    currency: "EUR",
    imgUrl: Image,
    productName: "B.O.M.J Black",
  },
  {
    price: "3400",
    currency: "P",
    imgUrl: Image,
    productName: "Marginal Black",
  },
  {
    price: "11 939.09",
    currency: "KZT",
    imgUrl: Image,
    productName: "Black Mirror",
  },
  {
    price: "1000",
    currency: "BTC",
    imgUrl: Image,
    productName: "Трава у дома",
  },
]

const CardWrapper = () => {
  return (
    <div className={styles.cardWrapper}>
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
      <CardItem price='12000' currency={"P"} imgUrl={Image} />
    </div>
  )
}

export default CardWrapper
