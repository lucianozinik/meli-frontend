import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';



import SearchBar from './components/serachBar/SearchBar';
import Home from './pages/home/HomePage';
import Details from './pages/details/DetailsPage';
import Results from './pages/results/ResultsPage';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';


import './App.css';

const App = ({history}) => {



  return (
    <>
      <SearchBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items'   render={(props) => <Results {...props} />} />
        <Route exact path='/items/:id' component={Details} />
      </Switch>
    </>
  );
}

export default withRouter(App);
