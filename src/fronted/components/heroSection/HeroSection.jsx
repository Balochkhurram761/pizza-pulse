import React from 'react'
import styles from '../../styles/heroSection/HeroSection.module.css'
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
    return (
        <div className={styles.colr}>
            <div className={styles.container}>
                <div className={styles.herosection}>
                    <h1> <span> Pizza Delivery near you </span><br /> best pizza in town</h1>
                    <p>At pizza pulse , every Pizza is Baked to Perfection based on your preference with fresh Ingredients, Bold Flavors and we guarantee that your pizza will arrive hot and fresh, right to your door. We Create Delicious pizza and deliver it with speed in your area. Feel free to order from our pizza menu or take home.</p>
                    <a href=""> Read More <IoIosArrowForward /></a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection