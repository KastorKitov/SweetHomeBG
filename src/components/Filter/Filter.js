import style from './Filter.module.css';
import ApartamentPiece from '../ApartamentPiece/ApartamentPiece';
import { useState , useEffect} from 'react';
function Filter(props) {

    const [apartament,setApartament] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/apartaments/all')
        .then(res => res.json())
        .then(res => setApartament(res))
        .catch(err => console.log('cannot get Apartaments from DB'));
    },[]);
    return (
        <div>
        <main className={style.wrap}>
            <form action="/" className="search" method="GET">
            <input type="number" name="from" className={style.searchPrice} placeholder="Price from..."/>
        <input type="number" name="to" className={style.searchPrice} placeholder="Price to..."/>
        <span className="input">
            <select type="text" className={style.searchBar} name="category">
                <option value="1">One Room</option>
                <option value="2">Two Rooms</option>
                <option value="3">Three Rooms</option>
            </select>
        </span>
        <input type="text" className={style.searchTerm} name="search" placeholder="Search..."/>
        <input type="submit" className={style.searchButton} value="Search"/>
      </form>
        </main>
        {apartament.map(x=>{ return(<ApartamentPiece key={x._id}
            name={x.name}
            rooms={x.rooms}
            price={x.price}
            city={x.city}
            imageURL={x.imageURL}
        />)})
}
        </div>
    )
};

export default Filter;