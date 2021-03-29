import style from "./ApartamentPiece.module.css";

function ApartamentPiece() {

    return (
        <div className={style.cube}>
            <img className={style.cube} src={'https://g5.homes.bg/2021-03-29_2/62380916o.jpg'}/>
                <p className={style.name}>name</p>
                <p><span className={style.spanDif}>Difficulty level:</span> difficulty Level</p>
                <a className={style.btn} href="/products/details/{{_id}}">Details</a>
                <a className={style.btn} href="/products/{{_id}}/attach">Attach</a>
        </div>
    )
};
export default ApartamentPiece;