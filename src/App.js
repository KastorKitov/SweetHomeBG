import './App.css';

import {Route,Switch,} from 'react-router-dom';
import Header from './components/Header/Header';
import ApartamentPiece from './components/ApartamentPiece/ApartamentPiece';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Filter}/>
      <Route path="/test" exact component={ApartamentPiece}/>
      </Switch>
    </div>
  );
}

export default App;
