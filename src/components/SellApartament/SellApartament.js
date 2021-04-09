import style from './SellApartament.module.css';
import {Redirect} from 'react-router-dom';
import { useState,useContext } from 'react';
import Footer from '../Footer/Footer';
import UserContext from '../ContextUserInformation';
import LoggedInContext from '../ContextLoggedIn';

function SellApartament(props) {

    const [created,setCreated] = useState(false);
    const [loggedIn,setLoggedIn] = useContext(LoggedInContext);
    const [user, setUser] = useContext(UserContext);
    const [errorMessage,setErrorMessage] = useState(null);

    const onSellHandler = (e) => {
        e.preventDefault();
        
        if(e.target.name.value.length<6){
            setErrorMessage('Title Must Be Atleast 6 Characters Long!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.rooms.value.length!=1){
            setErrorMessage('Please Enter Rooms Number!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.city.value.length<4){
            setErrorMessage('Please Enter City!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.price.value.length<3){
            setErrorMessage('Please Enter Price!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.imageURL.value.length<10){
            setErrorMessage('Please Enter ImageURL!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        fetch('http://localhost:5000/apartaments/sell', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                {name:e.target.name.value},
                {rooms:e.target.rooms.value},
                {city:e.target.city.value},
                {price:e.target.price.value},
                {imageURL:e.target.imageURL.value},
                {description:e.target.description.value},
                {owner:user._id}
            ])
        })
        .then(res=>res.json())
        .then(res=> {
            console.log('created!')
                setCreated(true);
            })
        .catch(err=>console.log('something went wrong!'))
    };
    return (
        <div>
            {!loggedIn?<Redirect to="/"/>:null}
            {created?<Redirect to="/"/>:null}
            <h1 className={style.headerForSell}>Sell your apartament or house</h1>
            {errorMessage?<div className={style.errorMessage}>{errorMessage}</div> : null}
            <form className={style.form} onSubmit={onSellHandler}>
                <label htmlFor="name" className={style.sell}>Title*</label>
                <input  className={style.inputForSale} type="text" name="name" placeholder="Title..." />
                <label htmlFor="Rooms" className={style.sell}>Rooms*</label>
                <input className={style.inputForSale} type="number" name="rooms"  placeholder="Rooms..." />
                <label htmlFor="city" className={style.sell}>City*</label>
                <input className={style.inputForSale} type="text" name="city"  placeholder="City..." />
                <label htmlFor="Price" className={style.sell}>Price*</label>
                <input className={style.inputForSale} type="number" name="price"  placeholder="Price..." />
                <label htmlFor="imageURL" className={style.sell}>Image URL*</label>
                <input  className={style.inputForSale} type="text" name="imageURL" placeholder="Image URL" />
                <label htmlFor="description" className={style.sell}>Description</label>
                <textarea type="text" name="description"  placeholder="Description..." />
                <input  className={style.sellSubmit} type="submit" value="Sell" />
            </form>
            <Footer/>
        </div>
    )
}

export default SellApartament;