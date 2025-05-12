import React from 'react'
import styles from '../../styles/banner/Banner.module.css'
const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.img}>
                <img src="/fImages/banner/12.jpg" alt="" />
                <img src="/fImages/banner/13.jpg" alt="" />
            </div>
            <div className={styles.overlay}>
                <div className={styles.body}>
                    <h1>Welcome to  <span> pizza pulse </span></h1>
                    <p>At Pizza pulse, we serve the best pizzas in town, made with fresh ingredients and a lot of love. Our menu offers a wide variety of pizzas to satisfy every taste.</p>
                    <div className={styles.btn}> Order Now!</div>
                </div>
            </div>
        </div>
    )
}

export default Banner