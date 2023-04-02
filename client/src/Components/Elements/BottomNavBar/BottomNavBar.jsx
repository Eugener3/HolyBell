import React from "react"
import styles from "./BottomNavBar.module.scss"
import { BiUser, BiCartAlt } from "react-icons/bi"

const BottomNavBar = props => {
  return (
    <div className={styles.bottomNavBar}>
      <button className={styles.button}>{props.language}</button>
      <button className={styles.button}>{props.currency}</button>
      <button className={styles.button}>
        <BiUser size='2em' />
      </button>
      <button className={styles.button}>
        <BiCartAlt size='2em' />
      </button>
      <button className={styles.button}>
        {props.cartValue} {props.currency}
      </button>
    </div>
  )
}

export default BottomNavBar
