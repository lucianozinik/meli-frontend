import React,{ useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';

import queryString from 'query-string';
import { getProducts } from '../../services';

import { Container, Content, List } from './resultsPage.styles';
import ProductItem from '../../components/productItem/ProductItem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const ResultsPage = ({history}) => {

    const search = queryString.parse(history.location.search).search
    const [productsList, setProductsList] = useState([])
    const [breadCrumbs, setBreadCrumbs] = useState([])
  
  
    useEffect(() => {
      const fetchData = async (query) => {
        const result = await getProducts(query);
        console.log(result.data.items)
        if(result.data.items){
            setProductsList(result.data.items[0]);
        }
        if(result.data.categories) {
            setBreadCrumbs(result.data.categories)
        }
      };
      fetchData(search);
    }, [history.location]);
  
  
  
   
    return (
        <Container>
            <Content>
            <Breadcrumbs data={breadCrumbs}/>
            <List>
                { 
                    productsList.map(item => {
                        return (
                            <ProductItem key={ item.id } item={item}/>
                        )
                    })
                }
            </List>
            </Content>
        </Container>
    )
}

export default withRouter(ResultsPage);