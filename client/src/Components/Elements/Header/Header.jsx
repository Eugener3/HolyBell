import React from "react"
import styles from "./Header.module.scss"
import logo from "../../../images/logo.svg"

const Header = () => {
  return (
    <headers className={styles.header}>
      <div className={styles.beforeLogo}></div>
      <div className={styles.bigLogo}>
        <img src={logo} alt='' />
      </div>
      <div className={styles.afterLogo}></div>
    </headers>
  )
}

export default Header
