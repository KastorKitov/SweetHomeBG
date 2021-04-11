import {useContext} from 'react';
import LoggedInContext from '../ContextLoggedIn';
import {Redirect} from 'react-router-dom';
import Footer from '../Footer/Footer';

function Testi(){

const [loggedIn,] = useContext(LoggedInContext);

    const testHandler = (e)=>{
        e.preventDefault();
        // if(loggedIn){
        //     console.log('it is true')
        //     setLoggedIn(oldState=>oldState=false)
        // }else{
        //     console.log('it is false')
        //     setLoggedIn(oldState=>oldState=true)
        // }
        // console.log(loggedIn)
        // // fetch('http://localhost:5000/test')
        // // .then(res=>res.json())
        // // .then(res=>console.log(res))
    }

    return(
        <div>
            {loggedIn ? <Redirect to="/" /> : null}
        <h1>Hello from Test</h1>
        <button onClick={testHandler}>asd</button>
        <Footer/>
        </div>
    )
}

export default Testi;