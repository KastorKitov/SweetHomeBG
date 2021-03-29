import './App.css';

import {Route,Link,NavLink,Switch, Router} from 'react-router-dom';
import Header from './components/Header/Header';
import ApartamentPiece from './components/ApartamentPiece/ApartamentPiece';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/test" exact component={ApartamentPiece}/>
      </Switch>
    </div>
  );
}

export default App;
