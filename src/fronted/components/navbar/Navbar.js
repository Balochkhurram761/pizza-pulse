import React, { useEffect, useState } from 'react'
import styles from "../../styles/navbar/Navbar.module.css"
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { NavbarMobile } from '../../navbarMobile/NavbarMobile';
import { Link } from 'react-router-dom';
import Login from '../login/Login';



const Navbar = () => {
    const [active, setactive] = useState('Home')
    const handleactive = (page) => {
        setactive(page)
    }
    const [menu, setmenu] = useState(false)
    const [user, setuser] = useState(false)
    const menubar = () => {
        setmenu(!menu)
    }
    const usermenu = () => {
        setuser(!user);
    }
    const closemenu = () => {
        setmenu(false)
    }

    return (

        <div className={styles.nav}>
            <div className={styles.menu} onClick={menubar}>
                {menu ? <CiMenuFries /> : <CiMenuFries />}


            </div>
            <div className={styles.logo}>
                <Link to="/"> <img src="/fImages/logo/logo1.png" alt="" /></Link>
            </div>
            <div className={styles.link}>
                <ul>
                    <li><Link to="/" onClick={() => handleactive('Home')} className={active === 'Home' ? styles.active : ''} >Home</Link></li>
                    <li><Link to="/menu" onClick={() => handleactive('Menu')}
                        className={active === 'Menu' ? styles.active : ''} >Menu</Link></li>
                    <li><Link to="/about" onClick={() => handleactive('About Us')}
                        className={active === 'About Us' ? styles.active : ''} >About Us</Link></li>
                    <li><a href="" onClick={() => handleactive('Gallery')}
                        className={active === 'Gallery' ? styles.active : ''}  >Gallery</a></li>
                    <li><a href="" onClick={() => handleactive('Reversation')}
                        className={active === 'Reversation' ? styles.active : ''} >Reversation </a></li>
                    <li><a href="" onClick={() => handleactive('Reviews')}
                        className={active === 'Reviews' ? styles.active : ''}>Reviews</a></li>

                </ul>
            </div>
            <div className={styles.social}>
                <ul>
                    <li><Link to="//wa.me/03054372019" target='_blank' ><CiPhone /></Link></li>
                    <li> <CiUser onClick={usermenu} /> </li>
                    <li><a href=""><IoBagOutline /></a></li>

                </ul>
            </div>
            {menu && (
                <NavbarMobile menubar={menu} onclose={() => setmenu(false)} />
            )}
            {user && (
                <Login usermenu={user} setUsermenu={() => setuser(false)} />

            )}
        </div>

    )
}

export default Navbar