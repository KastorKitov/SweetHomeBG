import './App.css';

import {Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SellApartament from './components/SellApartament/SellApartament';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Testi from './components/Testi/Testi';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/apartaments/sell" exact component={SellApartament}/>
      <Route path="/apartaments/details/:id" exact component={Details}/>
      <Route path="/user/register" exact component={Register}/>
      <Route path="/user/login" exact component={Login}/>
      <Route path="/test" exact component={Testi}/>
      </Switch>
    </div>
  );
}

export default App;
