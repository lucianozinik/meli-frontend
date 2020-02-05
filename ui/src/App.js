import React from 'react';
import { Switch, Route } from 'react-router-dom';


import SearchBar from './components/serachBar/SearchBar';
import Home from './pages/home/HomePage';
import Details from './pages/details/DetailsPage';
import Results from './pages/results/ResultsPage';

import './App.css';

function App() {
  return (
    <>
      <SearchBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={Results} />
        <Route exact path='/items/:id' component={Details} />
      </Switch>
    </>
  );
}

export default App;
