import './App.css';
import { useState , useEffect} from 'react';
import {Route,Router,Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SellApartament from './components/SellApartament/SellApartament';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MyApartaments from './components/MyApartaments/MyApartaments';
import LikedApartaments from './components/LikedApartaments/LikedApartaments';
import EditPage from './components/EditPage/EditPage';

import Testi from './components/Testi/Testi';

import UserContext from './components/ContextUserInformation';
import LoggedInContext from './components/ContextLoggedIn';

function App() {

  const [loggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState(null);
  return (
    <LoggedInContext.Provider value={[loggedIn,setLoggedIn]}>
    <UserContext.Provider value={[user,setUser]}>
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/apartaments/sell" exact component={SellApartament}/>
      <Route path="/apartaments/details/:id" exact component={Details}/>
      <Route path="/user/register" exact component={Register}/>
      <Route path="/user/login" exact component={Login}/>
      <Route path="/test" exact component={Testi}/>
      <Route path="/apartaments/mine/:id" exact component={MyApartaments}/>
      <Route path="/apartaments/liked/:id" exact component={LikedApartaments}/>
      <Route path="/apartaments/edit/:id" exact component={EditPage}/>
      </Switch>
    </div>
    </UserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
