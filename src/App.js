import './App.css';

import {Route,Link,NavLink,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact component={Filter}/>
      </Switch>
    </div>
  );
}

export default App;
