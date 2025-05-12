import React from 'react'
import styles from "../../styles/heroSection2/HeroSection.module.css"
import heroSection2Array from '../../arrayFronted/heroSection2/HeroSection'
const HeroSection2 = () => {
    return (
        <div className={styles.herosection} >
            {heroSection2Array.map((item, index) => {
                return (

                    <div className={styles.card}>
                        <a href="">
                            <div className={styles.img}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={styles.overlay}>
                                <div className={styles.body}>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        </a>
                    </div>


                )
            })}
        </div>
    )
}

export default HeroSection2