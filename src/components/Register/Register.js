import style from './Register.module.css';
import { Redirect } from 'react-router-dom';
import { useState, useContext } from 'react';
import Footer from '../Footer/Footer';
import LoggedInContext from '../ContextLoggedIn';

function Register() {

    const [registered, setRegistered] = useState(false);
    const [loggedIn,] = useContext(LoggedInContext);
    const [errorMessage, setErrorMessage] = useState(null);

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let userNameRegex = /^[a-zA-Z0-9]+$/;
        let validUsername = e.target.username.value.match(userNameRegex);
        if (validUsername === null) {
            setErrorMessage('Username is Incorrect!')
            setTimeout(() => setErrorMessage(null), 3000);
            return
        }
        if (e.target.username.value.length < 5 && e.target.password.value.length < 5) {
            setErrorMessage('Username and Password are under 5 characters!')
            setTimeout(() => setErrorMessage(null), 3000);
            return
        }
        if (e.target.username.value.length < 5) {
            setErrorMessage('Username is under 5 characters!')
            setTimeout(() => setErrorMessage(null), 3000);
            return
        };
        if (e.target.password.value.length < 5) {
            setErrorMessage('Password is under 5 characters!')
            setTimeout(() => setErrorMessage(null), 3000);
            return
        }
        if (e.target.repeatPassword.value !== e.target.password.value) {
            setErrorMessage('Password doesn\'t match');
            setTimeout(() => setErrorMessage(null), 3000);
            return
        }
        fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                { username: e.target.username.value },
                { password: e.target.password.value },
                { repeatPassword: e.target.repeatPassword.value },
            ])
        })
            .then(res => res.json())
            .then(res => {
                if (res === 'Invalid') {
                    setErrorMessage('Username alredy in use!')
                    setTimeout(() => setErrorMessage(null), 3000);
                    return
                }
                console.log('succesfull registered!')
                setRegistered(true);
            })
            .catch(err => console.log('something went wrong'))
    };
    return (
        <div>
            {loggedIn ? <Redirect to="/" /> : null}
            {registered ? <Redirect to="/user/login" /> : null}
            <h1 className={style.headerForRegister}>Register in SweetHome.BG</h1>
            {errorMessage ? <div className={style.errorMessage}>{errorMessage}</div> : null}
            <form className={style.form} onSubmit={onRegisterHandler}>
                <label htmlFor="username" className={style.register}>Username</label>
                <input className={style.inputForRegister} type="text" name="username" placeholder="username..." />
                <label htmlFor="password" className={style.register}>Password</label>
                <input className={style.inputForRegister} type="password" name="password" placeholder="password..." />
                <label htmlFor="repeatPassword" className={style.register}>Repeat Password</label>
                <input className={style.inputForRegister} type="password" name="repeatPassword" placeholder="password..." />
                <input className={style.registerSubmit} type="submit" value="Register" />
            </form>
            <Footer />
        </div>
    )
}

export default Register;