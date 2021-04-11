import style from './MyApartaments.module.css';
import Footer from '../Footer/Footer';
import MyApartamentPiece from '../MyApartamentsPiece/MyApartamentsPiece';
import { Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../ContextUserInformation';
import LoggedInContext from '../ContextLoggedIn';

function MyApartaments() {

    const [user,] = useContext(UserContext);
    const [loggedIn,] = useContext(LoggedInContext);

    const [apartaments, setApartament] = useState([]);
    const [noApartaments, setNoApartaments] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/apartaments/id/${user._id}`)
            .then(res => res.json())
            .then(res => {
                setApartament(res)
                if (res.length < 1) {
                    setNoApartaments(true);
                };
            })
            .catch(err => console.log('cannot get Apartaments from DB'));
    }, []);

    function handleRemove(id) {
        let newApartaments = apartaments.filter((item) => item._id !== id);
        setApartament(newApartaments);
        fetch("http://localhost:5000/apartaments/delete", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([id])
        });
    };


    return (
        <div>
            {!loggedIn ? <Redirect to="/user/login" /> : null}
            <h1 className={style.headerForLogin}>My Apartaments and Houses</h1>
            {noApartaments ? <div className={style.noApartaments}>No Apartaments Added!</div> : null}
            {apartaments.map(x => {
                return (<MyApartamentPiece key={x._id}
                    id={x._id}
                    name={x.name}
                    rooms={x.rooms}
                    price={x.price}
                    city={x.city}
                    imageURL={x.imageURL}
                    handleRemove={handleRemove}
                />)
            })
            }
            <Footer />
        </div>
    )
}

export default MyApartaments;