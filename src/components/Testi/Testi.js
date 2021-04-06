import {useContext} from 'react';
import UserContext from '../ContextUserInformation';
import LoggedInContext from '../ContextLoggedIn';

function Testi(props){

const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
const [user,setUser] = useContext(UserContext);

    const testHandler = ()=>{
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
        <h1>Hello from Test</h1>
        <button onClick={testHandler}>asd</button>
        </div>
    )
}

export default Testi;