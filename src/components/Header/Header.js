import style from './Header.module.css';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className={style.siteHeader}>
            <nav className={style.navbar}>

                <section className={style.navbarDashboard}>
                    <div className={style.firstBar}>
                        <Link className={style.sweetHome} to='/'>SweetHome.BG</Link>
                        <Link className={style.button} to="#">My Appartaments</Link>
                        <Link className={style.button} to="#">Liked Appartaments</Link>
                        <Link className={style.button} to="#">Sell Appartament</Link>
                    </div>
                    <div className={style.secoundBar}>
                        <ul>
                            <li className={style.wellcome}>Welcome, username!</li>
                            <li><Link to="#"><i className={style.button}></i> Logout</Link></li>
                        </ul>
                    </div>
                </section>
                <section className={style.navbarAnonymous}>
                    <ul>
                        <li><a href="#"><i className="fas fa-user-plus"></i> Register</a></li>
                        <li><a href="#"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </section>
            </nav>
        </header>
    )
};

export default Header;