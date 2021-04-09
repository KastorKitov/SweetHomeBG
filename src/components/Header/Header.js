import style from './Header.module.css';
import { Link , Redirect} from 'react-router-dom';
import UserContext from '../ContextUserInformation';
import LoggedInContext from '../ContextLoggedIn';
import { useContext , useState } from 'react';

function Header(props) {
    const [user, setUser] = useContext(UserContext);
    const [loggedIn,setLoggedIn] = useContext(LoggedInContext);
    const [onLogOut,setOnLogOut] = useState(false)
    const logOutHandler = () =>{
        setUser(null)
        setLoggedIn(false)
        document.cookie = `x-auth-token=`;
        setOnLogOut(true)
        
    }
    return (
        <header className={style.siteHeader}>
            <nav className={style.navbar}>
            {onLogOut?<Redirect to="/"/>:null}
                <section className={style.navbarDashboard}>
                    {loggedIn?
                    <div className={style.firstBar}>
                        <Link className={style.sweetHome} to="/">SweetHome.BG</Link>
                        <Link className={style.button} to="/">Browse Properties</Link>
                        <Link className={style.button} to={`/apartaments/mine/${user._id}`}>My Properties</Link>
                        <Link className={style.button} to={`/apartaments/liked/${user._id}`}>Liked Properties</Link>
                        <Link className={style.button} to="/apartaments/sell">Sell Property</Link>
                    </div>
                    :<div className={style.firstBar}>
                        <Link className={style.sweetHome} to='/'>SweetHome.BG</Link>
                        </div>}
                    <div className={style.secoundBar}>
                     {user?<ul>
                            <li className={style.wellcome}>Welcome, {user ? user.username : "Guest"}!</li>
                            {user ? <li><Link to="/" onClick={logOutHandler}><i className={style.button}></i> Logout</Link></li> : null}
                        </ul>:<ul><li><a href="/user/register"><i className={style.a}></i> Register</a></li>
                        <li><a href="/user/login"><i className={style.a}></i> Login</a></li></ul>}
                        {/* {!user ? <ul><li><a href="/user/register"><i className={style.a}></i> Register</a></li>
                        <li><a href="/user/login"><i className={style.a}></i> Login</a></li></ul> :null} */}
                    </div>
                </section>
                <section className={style.navbarAnonymous}>
                    {/* {!user ? <ul><li><a href="/user/register"><i className={style.a}></i> Register</a></li>
                        <li><a href="/user/login"><i className={style.a}></i> Login</a></li></ul> :null} */}
                        <ul> <li><a style={{ background: 234465 }}></a></li></ul>
                </section>
            </nav>
        </header>
    )
};

export default Header;