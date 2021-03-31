import './App.css';

import {Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import ApartamentPiece from './components/ApartamentPiece/ApartamentPiece';
import Filter from './components/Filter/Filter';
import SellApartament from './components/SellApartament/SellApartament';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Filter}/>
      <Route path="/apartaments/sell" exact component={SellApartament}/>
      <Route path="/test" exact component={ApartamentPiece}/>
      <Route path="/apartaments/details/:id" exact component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
