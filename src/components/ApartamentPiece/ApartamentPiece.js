import style from "./ApartamentPiece.module.css";

function ApartamentPiece({
    name,
    rooms,
    price,
    imageURL,
    city
}) {

    return (
        <div className={style.cube}>
            <img className={style.cube} src={imageURL}
             alt={"NO IMAGE :("}/>
                <p className={style.name}>{name}</p>
                <p><span className={style.spanDif}>City:</span> {city}</p>
                <p><span className={style.spanDif}>Rooms:</span>{rooms}</p>
                <p><span className={style.spanDif}>Price:</span> {price} euro</p>
                <a className={style.btn} href="/products/details/{{_id}}">Details</a>
                <a className={style.btn} href="/products/{{_id}}/attach">Attach</a>
        </div>
    )
};
export default ApartamentPiece;