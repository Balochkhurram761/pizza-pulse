import React, { useEffect, useState } from 'react';
import styles from '../../styles/login/Login.module.css';
import { BiShowAlt, BiHide } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";


const Login = ({ usermenu, setUsermenu }) => {
    const [ISregister, setISRegister] = useState(false);
    const [PasswordShow, setPasswordShow] = useState(false)
    const togglePassword = () => {
        setPasswordShow(!PasswordShow)
    }
    const toggleRegister = () => {
        setISRegister(!ISregister)

    };
    const btnclose = () => {
        setUsermenu(false);
        setISRegister(false);
    }

    useEffect(() => {
        if (usermenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [usermenu]);



    return (
        <>
            {ISregister ? (

                <div className={`${styles.login} ${usermenu ? styles.show : styles.hide} `}>
                    <div className={styles.close} onClick={btnclose}><IoMdClose /></div>
                    <h1>Register</h1>
                    <form action="">
                        <div className={styles.inputs}>

                            <div className={styles.input}>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Enter your Email' />
                            </div>

                            <div className={styles.input}>
                                <label htmlFor="">Password</label>
                                <input type={PasswordShow ? "text" : "password"} placeholder='Enter your Password' />
                                <div className={styles.show} onClick={togglePassword} >
                                    {PasswordShow ? <BiShowAlt /> : <BiHide />}
                                </div>
                                <a href="">Forgot your password</a>
                            </div>
                            <div className={styles.submission}>
                                <button>Register</button>
                                <span onClick={toggleRegister} >
                                    Already have an account? Login
                                </span>

                            </div>
                        </div>



                    </form>

                </div>


            ) : (
                <div className={`${styles.login} ${usermenu ? styles.show : styles.hide}`}>
                    <div className={styles.close} onClick={btnclose} ><IoMdClose /></div>
                    <h1>Login</h1>
                    <form>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <label>Email</label>
                                <input type="text" placeholder="Enter your Email" />
                            </div>
                            <div className={styles.input}>
                                <label>Password</label>
                                <input type={PasswordShow ? "text" : "password"} placeholder="Enter your Password" />
                                <div className={styles.show} onClick={togglePassword} >
                                    {PasswordShow ? <BiShowAlt /> : <BiHide />}
                                </div>
                                <a href="#">Forgot your password</a>
                            </div>
                            <div className={styles.submission}>
                                <button type="button">Login</button>
                                <span onClick={toggleRegister} >
                                    New Customer? Create your Account
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

            )}
        </>
    );
};

export default Login;
