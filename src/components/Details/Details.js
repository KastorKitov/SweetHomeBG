import { useState, useEffect } from 'react';
import style from './Details.module.css';
import {Link} from 'react-router-dom';

function Details({ match }) {

    const [apartament, setApartament] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/apartaments/one', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([match.params])
        })
            .then(res => res.json())
            .then(res => setApartament(res))
            .catch(err => console.log('cannot get Apartament from DB'));
    }, []);
    console.log(apartament)
    return (
        <main className={style.detailsMain} >
            <h1 className={style.detailsHeader} >{apartament.name}</h1>
            <img className={style.cube} src={apartament.imageURL}/>
                <div className={style.details}>
                    <p><span className={style.detailsSpan} >Description:</span>{apartament.description}</p>
                    <p><span className={style.detailsSpan} >Rooms:</span>{apartament.rooms}</p>
                    <p><span className={style.detailsSpan} >Price:</span> {apartament.price}</p>
                    <Link className={style.detailsButton} to="/">Back</Link>
                </div>
        </main>
    )
}

export default Details;