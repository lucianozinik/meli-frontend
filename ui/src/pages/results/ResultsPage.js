import React, {useEffect, useState} from 'react'
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import { getProducts } from '../../services'

const ResultsPage = (props) => {
    const search = queryString.parse(props.location.search).search
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const fetchData = async (query) => {
          const result = await getProducts(query);
          setProductsList(result);
        };
        fetchData(search);
      }, []);

    console.log(search)
    return (
        <>
            { 
                productsList ? 
                <h1>Hay lista!</h1>
                :
                <h1> No hay lista</h1>
            }
        </>
    )
}

export default withRouter(ResultsPage);