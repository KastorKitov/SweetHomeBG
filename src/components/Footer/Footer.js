import style from './Footer.module.css';

function Footer(props) {
    return (
        <div>
            <div className={style.clear}></div>
            <div className={style.footer}>
                <p>@Copyright 1999-2021 by Kastor Kitov. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;