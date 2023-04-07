import {React, useState} from "react"
import styles from "./BottomNavBar.module.scss"
import { BiUser, BiCartAlt } from "react-icons/bi"
import Cart from "../Cart/Cart"
import RegisterModal from "../RegisterModal/RegisterModal"

const BottomNavBar = props => {
  let [cartOpen, isCartOpen] = useState(false);
  let [cartOpenRegister, isCartOpenRegister] = useState(false);



  return (
    <div className={styles.bottomNavBar}>
      <button className={styles.button}>{props.language}</button>
      <button className={styles.button}>{props.currency}</button>
      <button className={styles.button}>
        <BiUser size='2em' onClick={()=> isCartOpenRegister(!cartOpenRegister)}/>
      </button>
      <button className={styles.button}>
        <BiCartAlt size='2em' onClick={()=> isCartOpen(!cartOpen)} />
      </button>
      <button className={styles.button}>
        {props.cartValue} {props.currency}
      </button>


      {cartOpen && (
        <Cart/>
      )}
      {cartOpenRegister && (
        <RegisterModal/>
      )}
    </div>
  )
}

export default BottomNavBar
