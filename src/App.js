import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './Components/Home';
import {AddBrand} from './Components/AddBrand';
import {EditBrand} from './Components/EditBrand';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
      <Router>
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route path="/AddBrand" component={AddBrand} />
          <Route path="/edit/:id" component={EditBrand} />
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
