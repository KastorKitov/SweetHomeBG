import './App.css';

import {Route,Router,Switch,} from 'react-router-dom';
import Header from './components/Header/Header';
import ApartamentPiece from './components/ApartamentPiece/ApartamentPiece';
import Filter from './components/Filter/Filter';
import SellApartament from './components/SellApartament/SellApartament';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Filter}/>
      <Route path="/apartaments/sell" exact component={SellApartament}/>
      <Route path="/test" exact component={ApartamentPiece}/>
      </Switch>
    </div>
  );
}

export default App;
