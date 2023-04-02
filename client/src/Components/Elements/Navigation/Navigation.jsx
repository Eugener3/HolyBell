import React from "react"
import styles from "./Navigation.module.scss"
import { BiChevronDown } from "react-icons/bi"

const Navigation = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navButtons}>
        <a href='1'>ФУТБОЛКИ</a>
        <a href='2'>СВИТШОТЫ</a>
        <a href='3'>ХУДИ</a>
        <a href='4'>РЮКЗАКИ</a>
        <a href='5'>ШТАНЫ/ШОРТЫ</a>
        <a href='6'>ПОЛО</a>
        <a href='7'>РУБАШКИ</a>
        <a href='8'>ПИЖАМА</a>
        <a href='9'>ШАПКИ</a>
        <a href='10'>КЕПКИ</a>
        <a href='11'>
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
