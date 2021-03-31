import style from './Login.module.css';
import {Redirect} from 'react-router-dom';
import { useState } from 'react';


function Login(props) {

    return (
        <div>
            <h1 className={style.headerForLogin}>Login in SweetHome.BG</h1>
            <form className={style.form}>
                <label htmlFor="username" className={style.login}>Username</label>
                <input  className={style.inputForLogin} type="text" name="username" placeholder="username..." />
                <label htmlFor="password" className={style.login}>Password</label>
                <input className={style.inputForLogin} type="password" name="password"  placeholder="password..." />
                <input  className={style.loginSubmit} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;