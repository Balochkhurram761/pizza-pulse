import React, { useEffect } from 'react'
import styles from '../../fronted/styles/navbarMobile/NavbarMobile.module.css'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export const NavbarMobile = ({ menubar, onclose }) => {
    useEffect(() => {
        if (menubar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menubar]);
    return (

        <div className={`${styles.nav} ${menubar ? styles.active : styles.hide}`}>

            <div className={styles.logo} onClick={onclose}>
                <Link to="/"> <img src="/fImages/logo/logo1.png" alt="" /></Link>

            </div>
            <div className={styles.close} onClick={onclose} >
                <IoMdClose />

            </div>
            <div className={styles.link}>
                <ul>
                    <li><Link to="/" onClick={onclose} >Home</Link></li>
                    <hr />
                    <li><a href="" onClick={onclose} >Menu</a></li>
                    <hr />
                    <li><a href="" onClick={onclose} >About Us</a></li>
                    <hr />
                    <li><a href="" onClick={onclose} >Gallery</a></li>
                    <hr />
                    <li><a href="" onClick={onclose} >Reversation</a></li>
                    <hr />
                    <li><a href="" onClick={onclose} >Reviews</a></li>
                    <hr />
                    <li><a href="//wa.me/03054372019" target='_blank' onClick={onclose} >Contact Us</a></li>
                    <hr />
                </ul>
            </div>
        </div>
    )
}
