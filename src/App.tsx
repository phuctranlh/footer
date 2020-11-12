import React from 'react';
import './style/App.css';
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (

      <Router>

        <Switch>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
