import style from './ErrorPage.module.css'
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
            <img className={style.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91om5tKQBy3nhxmjLa_Qlg1q10_ujWIsFYg&usqp=CAU' alt="404"/>
            <div className={style.msg}>
                Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to='/'>Home</Link> and try from there.</p>
            </div>
        </div>
    )
}

export default ErrorPage;