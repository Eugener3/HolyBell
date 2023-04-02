import React from "react"
import styles from "./Navigation.module.scss"
import { BiChevronDown } from "react-icons/bi"

const Navigation = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navButtons}>
        <a href='#'>ФУТБОЛКИ</a>
        <a href='#'>СВИТШОТЫ</a>
        <a href='#'>ХУДИ</a>
        <a href='#'>РЮКЗАКИ</a>
        <a href='#'>ШТАНЫ/ШОРТЫ</a>
        <a href='#'>ПОЛО</a>
        <a href='#'>РУБАШКИ</a>
        <a href='#'>ПИЖАМА</a>
        <a href='#'>ШАПКИ</a>
        <a href='#'>КЕПКИ</a>
        <a href='#'>
          ТРУСЫ{" "}
          <span>
            <BiChevronDown size='11px' />
          </span>
        </a>
        <a href='#'>FAQ</a>
        <a href='#'>ВАШ ЗАКАЗ</a>
      </div>
    </div>
  )
}

export default Navigation
