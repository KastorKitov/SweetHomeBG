import style from "./MyApartamentsPiece.module.css";
import { Link , Redirect} from 'react-router-dom';
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
    handleRemove,
}) {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [user, setUser] = useContext(UserContext);
    const [removeBlock, setRemoveBlock] = useState(null);

    function beforeRemoveHandler() {
        setRemoveBlock(true);
        console.log(removeBlock)
    };
    function cancelRemove(){
        setRemoveBlock(null);
    }

    return (
        <div className={style.cube}>
            {!loggedIn?<Redirect to="/"/>:null}
            {removeBlock ? <form className={style.modalContent}>
             <div className={style.container}>
                <h1>Remove Property</h1>
                <p>Are you sure you want to remove this property?</p>

                <div className={style.clearfix}>
                    <button  onClick={cancelRemove} className={style.cancelbtn}>Cancel</button>
                    <button  onClick={()=>handleRemove(id)} className={style.deletebtn}>Remove</button>
                </div>
            </div>
            </form> : null}
            <img className={style.cube} src={imageURL} alt={"NO PIC :("} />
            <p className={style.name}>{name}</p>
            <p><span className={style.spanDif}>City:</span> {city}</p>
            <p><span className={style.spanDif}>Rooms:</span>{rooms}</p>
            <p><span className={style.spanDif}>Price:</span> {price} euro</p>
            <Link className={style.btn} to={`/apartaments/edit/${id}`}>Edit</Link>
            <a style={{backgroundColor:'#cc3333'}} className={style.btn} onClick={()=>beforeRemoveHandler()}>Remove</a>
            {/* <a style={{backgroundColor:'#cc3333'}} className={style.btn} onClick={()=>handleRemove(id)}>Remove</a> */}
            {/* {loggedIn?<Link className={style.btn} onClick={likeHandler}>Like</Link>:null} */}
        </div>
    )
};
export default MyApartamentPiece;