import style from './Main.module.css';
import ApartamentPiece from '../ApartamentPiece/ApartamentPiece';
import Footer from '../Footer/Footer';
import { useState, useEffect, useContext } from 'react';
import {Redirect} from 'react-router-dom';
import LoggedInContext from '../ContextLoggedIn';
function Main() {

    const [apartaments, setApartament] = useState([]);
    // const [user, setUser] = useContext(UserContext);
    const [loggedIn,] = useContext(LoggedInContext);

    // function getCookie(name) {
    //     const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    //     return cookieValue ? cookieValue[2] : null;
    // }

    useEffect(() => {
        fetch('http://localhost:5000/apartaments/all')
            .then(res => res.json())
            .then(res => setApartament(res))
            .catch(err => console.log('cannot get Apartaments from DB'));

        // const token = getCookie('x-auth-token')
        // if (!token) {
        //     console.log('nqma token')
        //     return
        // }
        // fetch('http://localhost:5000/auth/auth', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify([token])
        // })
        //     .then(res => res.json())
        //     .then(user => {
        //         setUser(user)
        //         setLoggedIn(true)
        //         console.log('hello')
        //     })
    }, []);

    const onSearchHandler = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/apartaments/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                { name: e.target.search.value },
                { rooms: e.target.numberRooms.value },
                { city: e.target.city.value },
                { priceFrom: e.target.priceFrom.value },
                { priceTo: e.target.priceTo.value },
            ])
        })
            .then(res => res.json())
            .then(res => setApartament(res));
    };

    return (
        <div>
            {!loggedIn?<Redirect to="/"/>:null}
            <main className={style.wrap}>
                <form className={style.search} onSubmit={onSearchHandler}>
                    <input type="number" name="priceFrom" className={style.searchPrice} placeholder="Price from..." />
                    <input type="number" name="priceTo" className={style.searchPrice} placeholder="Price to..." />
                    <input type="text" name="city" className={style.searchPrice} placeholder="City..." />
                    <span className="input">
                        <select type="text" className={style.searchBar} name="numberRooms">
                            <option value="">Any Rooms</option>
                            <option value="1">One Room</option>
                            <option value="2">Two Rooms</option>
                            <option value="3">Three Rooms</option>
                            <option value="4">Four Rooms</option>
                            <option value="5">Five Rooms</option>
                        </select>
                    </span>
                    <input type="text" className={style.searchTerm} name="search" placeholder="Property Name..." />
                    <input type="submit" className={style.searchButton} value="Search" />
                </form>
            </main>
            {apartaments.map(x => {
                return (<ApartamentPiece key={x._id}
                    id={x._id}
                    name={x.name}
                    rooms={x.rooms}
                    price={x.price}
                    city={x.city}
                    imageURL={x.imageURL}
                    owner={x.owner}
                />)
            })
            }
            <Footer />
        </div>
    )
};

export default Main;