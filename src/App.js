
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      <div>
        <Navbar />
        <ItemListContainer />
      </div>
  );
}

export default App;

