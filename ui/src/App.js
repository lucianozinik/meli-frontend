import React,{ useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { getProducts } from './services'


import SearchBar from './components/serachBar/SearchBar';
import Home from './pages/home/HomePage';
import Details from './pages/details/DetailsPage';
import Results from './pages/results/ResultsPage';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';


import './App.css';

const App = ({history}) => {

  const search = queryString.parse(history.location.search).search
  const [productsList, setProductsList] = useState([])
  const [breadCrumbs, setBreadCrumbs] = useState([])


  useEffect(() => {
    const fetchData = async (query) => {
      const result = await getProducts(query);
      console.log(result.data.items)
      if(result.data.items[0]){
          setProductsList(result.data.items[0]);
      }
      if(result.data.categories) {
          setBreadCrumbs(result.data.categories)
      }
    };
    fetchData(search);
  }, [history.location]);




  return (
    <>
      <SearchBar />
      <Breadcrumbs data={breadCrumbs}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items'   render={(props) => <Results {...props} productsList={productsList} />} />
        <Route exact path='/items/:id' component={Details} />
      </Switch>
    </>
  );
}

export default withRouter(App);
