import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';



import SearchBar from './components/serachBar/SearchBar';
import Home from './pages/home/HomePage';
import Details from './pages/details/DetailsPage';
import Results from './pages/results/ResultsPage';
import NotFound from './pages/notFound/notFound';


import './App.css';

const App = ({history}) => {



  return (
    <>
      <SearchBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items'   render={(props) => <Results {...props} />} />
        <Route exact path='/items/:id' component={Details} />
        <Route component={NotFound}/>
      </Switch>
    </>
  );
}

export default withRouter(App);
