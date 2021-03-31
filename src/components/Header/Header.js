import style from './Header.module.css';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className={style.siteHeader}>
            <nav className={style.navbar}>

                <section className={style.navbarDashboard}>
                    <div className={style.firstBar}>
                        <Link className={style.sweetHome} to='/'>SweetHome.BG</Link>
                        <Link className={style.button} to="/">My Apartaments</Link>
                        <Link className={style.button} to="/">Liked Apartaments</Link>
                        <Link className={style.button} to="/apartaments/sell">Sell Apartament</Link>
                    </div>
                    <div className={style.secoundBar}>
                        <ul>
                            <li className={style.wellcome}>Welcome, username!</li>
                            <li><Link to="/"><i className={style.button}></i> Logout</Link></li>
                        </ul>
                    </div>
                </section>
                <section className={style.navbarAnonymous}>
                            <ul>
                            <li><a href="/user/register"><i className={style.a}></i> Register</a></li>
                            <li><a href="/user/login"><i className={style.a}></i> Login</a></li>
                        </ul>
                </section>
            </nav>
        </header>
    )
};

export default Header;