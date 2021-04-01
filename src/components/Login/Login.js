import style from './Login.module.css';
import Footer from '../Footer/Footer';
import {Redirect} from 'react-router-dom';
import { useState } from 'react';

function Login(props) {

    const [isLogged,setIsLogged] = useState(false)

    const  onLoginHandler = async (e) => {
        e.preventDefault()
        const promise = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([e.target.username.value, e.target.password.value])
        })
        const authToken = promise.headers.get('Token');
        document.cookie = `x-auth-token=${authToken}`;

        const response = await promise.json();

        if(response.username){
            setIsLogged(true);
        };
    };

    return (
        <div>
            {isLogged?<Redirect to="/"/>:null   }
            <h1 className={style.headerForLogin}>Login in SweetHome.BG</h1>
            <form className={style.form} onSubmit={onLoginHandler} >
                <label htmlFor="username" className={style.login}>Username</label>
                <input className={style.inputForLogin} type="text" name="username" placeholder="username..." />
                <label htmlFor="password" className={style.login}>Password</label>
                <input className={style.inputForLogin} type="password" name="password" placeholder="password..." />
                <input className={style.loginSubmit} type="submit" value="Login" />
            </form>
            <Footer />
        </div>
    )
}

export default Login;