import style from './Register.module.css';
import {Redirect} from 'react-router-dom';
import { useState } from 'react';


function Register(props) {

    const [created,setCreated] = useState(false);

    const onSellHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                {username:e.target.username.value},
                {password:e.target.password.value},
                {repeatPassword:e.target.repeatPassword.value},
            ])
        })
        .then(res=>res.json())
        .then(res=> {
            console.log('yes')
                setCreated(true);
            })
        .catch(err=>console.log('something went wrong'))
    };
    return (
        <div>
            {created?<Redirect to="/"/>:null}
            <h1 className={style.headerForRegister}>Register in SweetHome.BG</h1>
            <form className={style.form} onSubmit={onSellHandler}>
                <label htmlFor="username" className={style.register}>Username</label>
                <input  className={style.inputForRegister} type="text" name="username" placeholder="username..." />
                <label htmlFor="password" className={style.register}>Password</label>
                <input className={style.inputForRegister} type="password" name="password"  placeholder="password..." />
                <label htmlFor="repeatPassword" className={style.register}>Repeat Password</label>
                <input className={style.inputForRegister} type="password" name="repeatPassword"  placeholder="password..." />
                <input  className={style.registerSubmit} type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;