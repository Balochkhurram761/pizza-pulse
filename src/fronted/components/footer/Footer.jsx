import React from 'react'
import styles from '../../styles/footer/Footer.module.css'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";



const Footer = () => {
    return (

        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.sub}>
                        <h1>Subscribe to our Mailing List</h1>
                        <div className={styles.input}>
                            <input type="text" placeholder='Enter your Email' />
                            <button>join Now</button>
                        </div>
                    </div>
                    <div className={styles.link}>
                        <ul>
                            <li><a href="">Home </a></li>|
                            <li><a href="">Menu </a></li>|
                            <li><a href="">About </a></li>|
                            <li><a href="">Gallary </a></li>|
                            <li><a href="">Reservation </a></li>|
                            <li><a href="">Contact Us </a></li>|
                            <li><a href="">Reviews </a></li>|
                            <li><a href="">Login </a></li>|
                            <li><a href="">Track Order </a></li>|
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <ul>
                            <li><a href="">Home </a></li>
                            <li><a href="">Menu </a></li>
                            <li><a href="">About </a></li>
                            <li><a href="">Gallary </a></li>
                            <li><a href="">Reservation </a></li>
                            <li><a href="">Contact Us </a></li>
                            <li><a href="">Reviews </a></li>
                            <li><a href="">Login </a></li>
                            <li><a href="">Track Order </a></li>
                        </ul>
                    </div>
                    <div className={styles.detail}>
                        <a href=""><CiPhone /> 03054372019</a>
                        <a href=""><CiMail /> khurramjaffery12@gmail.com</a>
                        <a href=""><CiLocationOn />B-4, Ijaz Center, Main  Boulevard Gulberg, <br /> Lahore, Punjab, 54000</a>
                    </div>
                </div>


            </div>

            <div className={styles.copy}>
                <div className={styles.container}>
                    <p>© 2025 Pizza pulse , All Rights Reserved. <br /> RestauSolutions</p>
                </div>
            </div>


        </div>

    )
}

export default Footer