import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SellApartament from './components/SellApartament/SellApartament';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MyApartaments from './components/MyApartaments/MyApartaments';
import LikedApartaments from './components/LikedApartaments/LikedApartaments';
import EditPage from './components/EditPage/EditPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

import Testi from './components/Testi/Testi';

import UserContext from './components/ContextUserInformation';
import LoggedInContext from './components/ContextLoggedIn';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
  }

  useEffect(() => {
    const token = getCookie('x-auth-token')
    if (!token) {
      return
    }
    fetch('http://localhost:5000/auth/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([token])
    })
    .then(res=>res.json())
    .then(user=>{
      setUser(user)
      setLoggedIn(true)
    })
  }, [loggedIn])
  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      <UserContext.Provider value={[user, setUser]}>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/apartaments/sell" exact component={SellApartament} />
            <Route path="/apartaments/details/:id" exact component={Details} />
            <Route path="/user/register" exact component={Register} />
            <Route path="/user/login" exact component={Login} />
            <Route path="/test" exact component={Testi} />
            <Route path="/apartaments/mine/:id" exact component={MyApartaments} />
            <Route path="/apartaments/liked/:id" exact component={LikedApartaments} />
            <Route path="/apartaments/edit/:id" exact component={EditPage} />
            <Route path="*" component={ErrorPage} />

          </Switch>
        </div>
      </UserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
