import style from './Login.module.css';
import Footer from '../Footer/Footer';
import {Redirect} from 'react-router-dom';
import { useState,useContext } from 'react';
import UserContext from '../ContextUserInformation';
import LoggedInContext from '../ContextLoggedIn';

function Login() {
    const [,setUser] = useContext(UserContext);
    const [loggedIn,setLoggedIn] = useContext(LoggedInContext);
    const [errorMessage, setErrorMessage] = useState(null);

    const  onLoginHandler = async (e) => {
        e.preventDefault()
        const promise = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([e.target.username.value, e.target.password.value])
        })
        if(promise){
            const response = await promise.json()
            if(response.error==='error'){
                setErrorMessage('Incorrect Username or Password!');
                setTimeout(() => setErrorMessage(null), 3000);
                return;
            }else{
                const authToken = promise.headers.get('Token');
        document.cookie = `x-auth-token=${authToken}`;

        if(response){
            setUser(response);
            setLoggedIn(true);
        }else{
        }
            }
        }

        // setUsername(response.username);

        // if(response.username){
        //     setIsLogged(true);
        // };
    };

    return (
        <div>
            {loggedIn?<Redirect to="/"/>:null}
            <h1 className={style.headerForLogin}>Login in SweetHome.BG</h1>
            {errorMessage ? <div className={style.errorMessage}>{errorMessage}</div> : null}
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