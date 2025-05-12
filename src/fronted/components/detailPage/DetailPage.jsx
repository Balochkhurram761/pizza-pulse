import React from 'react'
import styles from '../../styles/detailPage/DetailPage.module.css'
const DetailPage = () => {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <h1>Welcome To Pizz pulse <br />
                        <span> Best Pizza In Town </span>
                    </h1>
                    <p>At Pizza pulse , every Pizza is Baked to Perfection based on your preference with fresh Ingredients, Bold Flavors and we guarantee that your pizza will arrive hot and fresh, right to your door. We Create Delicious pizza and deliver it with speed in your area. Feel free to order from our pizza menu or take home</p>
                </div>
                <div className={styles.img}>
                    <img src="/fImages/about us/about1-banner1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default DetailPage