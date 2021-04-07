import style from "./MyApartamentsPiece.module.css";
import { Link } from 'react-router-dom';
import LoggedInContext from '../ContextLoggedIn';
import UserContext from '../ContextUserInformation';
import { useContext, useEffect, useState } from 'react';

function MyApartamentPiece({
    id,
    name,
    rooms,
    price,
    imageURL,
    city,
    handleRemove
}) {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [user, setUser] = useContext(UserContext);
    const [isLiked, setIsLiked] = useState(null);

    const likeHandler = (e) => {
        // e.preventDefault();
        fetch('http://localhost:5000/apartaments/liked', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([user._id, id])
        })
            .then(response => response.json())
            .then(response => setUser(response))
            .then(setIsLiked(oldState => oldState=true))
    }
    const removeHandler = () =>{
        fetch('http://localhost:5000/apartaments/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([user._id, id])
        })
    }
    useEffect(() => {
        if (loggedIn) {
            if(user.liked.length==1){
                if(user.liked[0]._id == id){
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
            <a className={style.btn} to={`/apartaments/edit/${id}`}>Edit</a>
            <a style={{backgroundColor:'#cc3333'}} className={style.btn} onClick={()=>handleRemove(id)}>Remove</a>
            {/* {loggedIn?<Link className={style.btn} onClick={likeHandler}>Like</Link>:null} */}
        </div>
    )
};
export default MyApartamentPiece;