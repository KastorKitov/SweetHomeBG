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
    console.log(loggedIn)

    const onSellHandler = (e) => {
        e.preventDefault();
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
            console.log('yes')
                setCreated(true);
            })
        .catch(err=>console.log('something went wrong'))
    };
    return (
        <div>
            {!loggedIn?<Redirect to="/"/>:null}
            {created?<Redirect to="/"/>:null}
            <h1 className={style.headerForSell}>Sell your apartament or house</h1>
            <form className={style.form} onSubmit={onSellHandler}>
                <label htmlFor="name" className={style.sell}>Title</label>
                <input  className={style.inputForSale} type="text" name="name" placeholder="Title..." />
                <label htmlFor="Rooms" className={style.sell}>Rooms</label>
                <input className={style.inputForSale} type="number" name="rooms"  placeholder="Rooms..." />
                <label htmlFor="city" className={style.sell}>City</label>
                <input className={style.inputForSale} type="text" name="city"  placeholder="City..." />
                <label htmlFor="Price" className={style.sell}>Price</label>
                <input className={style.inputForSale} type="number" name="price"  placeholder="Price..." />
                <label htmlFor="imageURL" className={style.sell}>Image URL</label>
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