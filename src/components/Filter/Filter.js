import style from './Filter.module.css';
import ApartamentPiece from '../ApartamentPiece/ApartamentPiece';
import Footer from '../Footer/Footer';
import { useState , useEffect} from 'react';
function Filter(props) {

    const [apartaments,setApartament] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/apartaments/all')
        .then(res => res.json())
        .then(res => setApartament(res))
        .catch(err => console.log('cannot get Apartaments from DB'));
    },[]);

    const onSearchHandler = (e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/apartaments/search',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                {name:e.target.search.value},
                {rooms:e.target.numberRooms.value},
                {city:e.target.city.value},
                {priceFrom:e.target.priceFrom.value},
                {priceTo:e.target.priceTo.value},
            ])
        })
        .then(res=>res.json())
        .then(res=>setApartament(res));
    };

    return (
        <div>
        <main className={style.wrap}>
            <form className={style.search} onSubmit={onSearchHandler}>
            <input type="number" name="priceFrom" className={style.searchPrice} placeholder="Price from..."/>
            <input type="number" name="priceTo" className={style.searchPrice} placeholder="Price to..."/>
            <input type="text" name="city" className={style.searchPrice} placeholder="City..."/>
        <span className="input">
            <select type="text" className={style.searchBar} name="numberRooms">
                <option value="">Any Rooms</option>
                <option value="1">One Room</option>
                <option value="2">Two Rooms</option>
                <option value="3">Three Rooms</option>
            </select>
        </span>
        <input type="text" className={style.searchTerm} name="search" placeholder="Apartament Name..."/>
        <input type="submit" className={style.searchButton} value="Search"/>
      </form>
        </main>
        {apartaments.map(x=>{ return(<ApartamentPiece key={x._id}
            name={x.name}
            rooms={x.rooms}
            price={x.price}
            city={x.city}
            imageURL={x.imageURL}
        />)})
        }
        <Footer/>
        </div>
    )
};

export default Filter;