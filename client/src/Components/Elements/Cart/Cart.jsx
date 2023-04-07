import React from 'react'
import styles from './Cart.module.scss'
import { BiArrowBack } from 'react-icons/bi'

const Cart = () => {
  return (
    <div className={styles.blacked}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.continueShopping}>
                <BiArrowBack color='black' size='2em'/>
                <p>продолжить покупки</p>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.myBuy}>
            <p>Мои покупки</p>
            <div className={styles.hr} style={{width: '90px', backgroundColor: 'black', height:'2px'}}></div>
          </div>
          <div className={styles.hr} style={{width: '300px', backgroundColor: 'black'}}></div>
        </div>
        
      </div>
    </div>
  )
}

export default Cart
