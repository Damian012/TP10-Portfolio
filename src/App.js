
import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div className="fondo">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </div>
    </Router>
  );
}
