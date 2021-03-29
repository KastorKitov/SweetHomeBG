import style from './Header.module.css';

function Header(props) {
    return (
        <header className={style.siteHeader}>
            <nav className={style.navbar}>

                <section className={style.navbarDashboard}>
                    <div className={style.firstBar}>
                        <a className={style.sweetHome} href='/'>SweetHome.BG</a>
                        <a className={style.button} href="#">My Appartaments</a>
                        <a className={style.button} href="#">Liked Appartaments</a>
                        <a className={style.button} href="#">Sell Appartament</a>
                    </div>
                    <div className={style.secoundBar}>
                        <ul>
                            <li className={style.wellcome}>Welcome, username!</li>
                            <li><a href="#"><i className={style.button}></i> Logout</a></li>
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