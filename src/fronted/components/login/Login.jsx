import React, { useEffect, useState } from 'react';
import styles from '../../styles/login/Login.module.css';
import { BiShowAlt, BiHide } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { IoMdArrowDropdown } from "react-icons/io";


import validationSchema, { validationSchema1 } from '../ValidationForm/ValidationForm.js';
import { useNavigate } from 'react-router-dom';


const Login = ({ usermenu, setUsermenu }) => {
    const naviage = useNavigate();
    const [Error, setError] = useState({})
    const [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const handlerform = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value
        });
    };
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
    const submitregister = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formdata, { abortEarly: false });
            const response = await axios.post("http://localhost:5000/api/auth/register", formdata);
            if (response.data.success) {
                toast.success("User Registered Successfully");
                setformdata({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });
            }
        } catch (error) {

            const newError = {};
            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            });
            setError(newError);
            toast.error("Please fix the validation errors.");

        }

    }
    const submitlogin = async (e) => {
        e.preventDefault();
        try {
            await validationSchema1.validate(formdata, { abortEarly: false });

            const response = await axios.post("http://localhost:5000/api/auth/login", formdata);

            if (response.data.success) {
                toast.success("login succesfully")
                naviage("/dashboard")
            } else {

                toast.error(response.data.message || "Invalid credentials");
            }

        } catch (error) {
            if (error.name === "ValidationError") {
                // Yup se aaya error
                const newError = {};
                error.inner.forEach((err) => {
                    newError[err.path] = err.message;
                });
                setError(newError);
            } else {
                // Server se aaya error
                toast.error("Invalid email or password");
            }
        }

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
                <>
                    <div className={`${styles.login} ${usermenu ? styles.show : styles.hide} `}>
                        <div className={styles.close} onClick={btnclose}><IoMdClose /></div>
                        <h1>Register</h1>
                        <form action="" onSubmit={submitregister} >
                            <div className={styles.inputs}>
                                <div className={styles.input}>
                                    <label htmlFor="">First Name</label>
                                    <input type="text" placeholder='Enter your Email' name='firstname' value={formdata.firstname} onChange={handlerform} />
                                </div>
                                {Error.firstname && (<p className={styles.error} >{Error.firstname}</p>)}
                                <div className={styles.input}>
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" placeholder='Enter your Email' name='lastname' value={formdata.lastname} onChange={handlerform} />
                                </div>
                                {Error.lastname && (<p className={styles.error} >{Error.lastname}</p>)}
                                <div className={styles.input}>
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='Enter your Email' name='email' value={formdata.email} onChange={handlerform} />
                                </div>
                                {Error.email && (<p className={styles.error} >{Error.email}</p>)}

                                <div className={styles.input}>
                                    <label htmlFor="">Password</label>
                                    <input type={PasswordShow ? "text" : "password"} placeholder='Enter your Password' name='password' value={formdata.password} onChange={handlerform} />
                                    <div className={styles.show} onClick={togglePassword} >
                                        {PasswordShow ? <BiShowAlt /> : <BiHide />}

                                    </div>


                                </div>
                                {Error.password && (<p className={styles.error} >{Error.password}</p>)}
                                <div className={styles.input}>
                                    <label htmlFor="">Confirm Passowrd</label>
                                    <input type={PasswordShow ? "text" : "password"} placeholder='Enter your Password' name='confirmPassword' value={formdata.confirmPassword} onChange={handlerform} />
                                    <div className={styles.show} onClick={togglePassword} >
                                        {PasswordShow ? <BiShowAlt /> : <BiHide />}
                                    </div>
                                    {/* <a href="">Forgot your password</a> */}
                                </div>
                                {Error.confirmPassword && (<p className={styles.error} >{Error.confirmPassword}</p>)}

                                <div className={styles.submission}>
                                    <button type='submit' >Register</button>
                                    <span onClick={toggleRegister} >
                                        Already have an account? Login
                                    </span>

                                </div>
                            </div>



                        </form>
                        <ToastContainer className={styles.to} />
                    </div>

                </>

            ) : (
                <div className={`${styles.login} ${usermenu ? styles.show : styles.hide}`}>
                    <div className={styles.close} onClick={btnclose} ><IoMdClose /></div>
                    <h1>Login</h1>
                    <form onSubmit={submitlogin}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Enter your Email' name='email' value={formdata.email} onChange={handlerform} />
                            </div>
                            {Error.email && (<p className={styles.error} >{Error.email}</p>)}

                            <div className={styles.input}>
                                <label htmlFor="">Password</label>
                                <input type={PasswordShow ? "text" : "password"} placeholder='Enter your Password' name='password' value={formdata.password} onChange={handlerform} />
                                <div className={styles.show} onClick={togglePassword} >
                                    {PasswordShow ? <BiShowAlt /> : <BiHide />}

                                </div>

                            </div>
                            {Error.password && (<p className={styles.error} >{Error.password}</p>)}

                            <a href="#">Forgot your password</a>
                            <div className={styles.submission}>
                                <button type="submit">Login</button>
                                <span onClick={toggleRegister} >
                                    New Customer? Create your Account
                                </span>
                            </div>
                        </div>
                    </form>
                    <ToastContainer className={styles.to} />
                </div>

            )}

        </>

    );
};

export default Login;
