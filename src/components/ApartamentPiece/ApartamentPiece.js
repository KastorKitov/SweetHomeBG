import style from "./ApartamentPiece.module.css";
import {Link} from 'react-router-dom';
import LoggedInContext from '../ContextLoggedIn';
import { useContext } from 'react';

function ApartamentPiece({
    id,
    name,
    rooms,
    price,
    imageURL,
    city
}) {
    const [loggedIn,setLoggedIn] = useContext(LoggedInContext);

    return (
        <div className={style.cube}>
            <img className={style.cube} src={imageURL} alt={"NO PIC :("}/>
                <p className={style.name}>{name}</p>
                <p><span className={style.spanDif}>City:</span> {city}</p>
                <p><span className={style.spanDif}>Rooms:</span>{rooms}</p>
                <p><span className={style.spanDif}>Price:</span> {price} euro</p>
                <Link className={style.btn} to={`/apartaments/details/${id}`}>Details</Link>
                {loggedIn?<Link className={style.btn} to="/">Like</Link>:null}
        </div>
    )
};
export default ApartamentPiece;