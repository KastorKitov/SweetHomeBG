import style from "./LikedApartamentPiece.module.css";
import { Link } from 'react-router-dom';
import LoggedInContext from '../ContextLoggedIn';
import UserContext from '../ContextUserInformation';
import { useContext, useEffect, useState } from 'react';

function LikedApartamentPiece({
    id,
    name,
    rooms,
    price,
    imageURL,
    city
}) {
    const [loggedIn,] = useContext(LoggedInContext);
    const [user, setUser] = useContext(UserContext);
    const [isLiked, setIsLiked] = useState(null);

    const likeHandler = (e) => {
        fetch('http://localhost:5000/apartaments/liked', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([user._id, id])
        })
            .then(response => response.json())
            .then(response => setUser(response))
            .then(setIsLiked(oldState => oldState = true))
    }
    const UnLikeHandler = (e) => {
        fetch('http://localhost:5000/apartaments/unLiked', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([user._id, id])
        })
            .then(response => response.json())
            .then(response => setUser(response))
            .then(setIsLiked(oldState => oldState = false))
    }
    useEffect(() => {
        if (loggedIn) {
            if (user.liked.length === 1) {
                if (user.liked[0]._id === id) {
                    setIsLiked(true)
                };
            };
            if (user.liked.includes(id)) {
                setIsLiked(true)
            }
        };
    }, []);


    return (
        <div className={style.cube}>
            <img className={style.cube} src={imageURL} alt={"NO PIC :("} />
            <p className={style.name}>{name}</p>
            <p><span className={style.spanDif}>City:</span> {city}</p>
            <p><span className={style.spanDif}>Rooms:</span>{rooms}</p>
            <p><span className={style.spanDif}>Price:</span> {price} euro</p>
            <Link className={style.btn} to={`/apartaments/details/${id}`}>Details</Link>
            {loggedIn ?
                isLiked ?
                    <a style={{ backgroundColor: '#138fd6' }} className={style.btn} onClick={UnLikeHandler}>Unlike</a>
                    : <a className={style.btn} onClick={likeHandler}>Like</a>
            : null}
        </div>
    )
};
export default LikedApartamentPiece;