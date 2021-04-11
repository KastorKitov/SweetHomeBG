import style from './LikedApartaments.module.css';
import Footer from '../Footer/Footer';
import LikedApartamentPiece from '../LikedApartamentPiece/LikedApartamentPiece';

import { useState, useContext, useEffect } from 'react';
import UserContext from '../ContextUserInformation';
import LoggedInContext from '../ContextLoggedIn';
import { Redirect } from 'react-router-dom';

function MyApartaments(props) {

    const [user,] = useContext(UserContext);
    const [loggedIn,] = useContext(LoggedInContext);

    const [apartaments, setApartament] = useState([]);
    const [noApartaments, setNoApartaments] = useState(null)

    useEffect(() => {
        if (loggedIn) {
            fetch(`http://localhost:5000/apartaments/liked/${user._id}`)
                .then(res => res.json())
                .then(res => {
                    setApartament(res)
                    if (res.length < 1) {
                        setNoApartaments(true);
                    };
                })
                .catch(err => console.log('cannot get Apartaments from DB'));
        }
    }, []);

    return (
        <div>
            {!loggedIn ? <Redirect to="/" /> : null}
            <h1 className={style.headerForLogin}>Liked Apartaments and Houses</h1>
            {noApartaments ? <div className={style.noApartaments}>No Apartaments Liked!</div> : null}
            {apartaments.map(x => {
                return (<LikedApartamentPiece key={x._id}
                    id={x._id}
                    name={x.name}
                    rooms={x.rooms}
                    price={x.price}
                    city={x.city}
                    imageURL={x.imageURL}
                />)
            })
            }
            <Footer style={{ position: 'absolute' }} />
        </div>
    )
}

export default MyApartaments;