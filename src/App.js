import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        {/* <Link to="/item/:id">Item</Link> */}
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/item/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
};

export default App;
