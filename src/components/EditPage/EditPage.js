import style from './EditPage.module.css';
import { Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Footer from '../Footer/Footer';
import LoggedInContext from '../ContextLoggedIn';


function EditPage({ match }) {
    const [edited, setEdited] = useState(false);
    const [loggedIn,] = useContext(LoggedInContext);
    const [, setApartament] = useState({});
    const [errorMessage,setErrorMessage] = useState(null);

    const [Oname,setName] = useState('')
    const [Orooms,setRooms] = useState('')
    const [Ocity,setCity] = useState('')
    const [Oprice,setPrice] = useState('')
    const [OimageURL,setImageURL] = useState('')
    const [Odescription,setDescription] = useState('')

    useEffect(()=>{
        
        fetch('http://localhost:5000/apartaments/edit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([match.params.id])
        })
            .then(res => res.json())
            .then(res =>{
                setApartament(res)
                setName(res.name)
                setRooms(res.rooms)
                setCity(res.city)
                setPrice(res.price)
                setImageURL(res.imageURL)
                setDescription(res.description)
            })
            .catch(err => console.log('cannot get Apartament from DB'));
    },[])

    const onEditedHandler = (e) =>{
        e.preventDefault();
        if(e.target.name.value.length<6){
            setErrorMessage('Title Must Be Atleast 6 Characters Long!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.rooms.value.length!==1){
            setErrorMessage('Please Enter Rooms Number!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.city.value.length<4){
            setErrorMessage('Please Enter City!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.price.value.length<3){
            setErrorMessage('Please Enter Price!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        if(e.target.imageURL.value.length<10){
            setErrorMessage('Please Enter ImageURL!');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        fetch('http://localhost:5000/apartaments/editing', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                {name:e.target.name.value},
                {rooms:e.target.rooms.value},
                {city:e.target.city.value},
                {price:e.target.price.value},
                {imageURL:e.target.imageURL.value},
                {description:e.target.description.value},
                {houseId:match.params.id}
            ])
        })
        .then(setEdited(true))
        .catch(err=>console.log('something went wrong!'))

    }
    return (
        <div>
            {!loggedIn?<Redirect to="/"/>:null}
            {edited?<Redirect to="/"/>:null}
            <h1 className={style.headerForSell}>Edit your apartament or house</h1>
            {errorMessage?<div className={style.errorMessage}>{errorMessage}</div> : null}
            <form className={style.form} onSubmit={onEditedHandler}>
                <label htmlFor="name" className={style.sell}>Title</label>
                <input  className={style.inputForSale} type="text" name="name" value={Oname} onChange={e=>setName(e.target.value)}  placeholder="Title..." />
                <label htmlFor="Rooms" className={style.sell}>Rooms</label>
                <input className={style.inputForSale} type="number" name="rooms" value={Orooms} onChange={e=>setRooms(e.target.value)} placeholder="Rooms..." />
                <label htmlFor="city" className={style.sell}>City</label>
                <input className={style.inputForSale} type="text" name="city" value={Ocity} onChange={e=>setCity(e.target.value)}  placeholder="City..." />
                <label htmlFor="Price" className={style.sell}>Price</label>
                <input className={style.inputForSale} type="number" name="price" value={Oprice} onChange={e=>setPrice(e.target.value)} placeholder="Price..." />
                <label htmlFor="imageURL" className={style.sell}>Image URL</label>
                <input  className={style.inputForSale} type="text" name="imageURL" value={OimageURL} onChange={e=>setImageURL(e.target.value)} placeholder="Image URL" />
                <label htmlFor="description" className={style.sell}>Description</label>
                <textarea type="text" name="description" value={Odescription} onChange={e=>setDescription(e.target.value)} placeholder="Description..." />
                <input  className={style.sellSubmit} type="submit" value="Edit" />
            </form>
            <Footer/>
        </div>
    )
}

export default EditPage;