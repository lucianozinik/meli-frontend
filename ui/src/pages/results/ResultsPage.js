import React, {useEffect, useState} from 'react'
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import { getProducts } from '../../services'
import { Container, Content, List } from './resultsPage.styles';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ProductItem from '../../components/productItem/ProductItem';

const ResultsPage = ({history}) => {
    console.log(history.location);
    const search = queryString.parse(history.location.search).search
    const [productsList, setProductsList] = useState([])
    const [breadCrumbs, setBreadCrumbs] = useState([])

    useEffect(() => {
        const fetchData = async (query) => {
          const result = await getProducts(query);
          console.log(result)
          setProductsList(result.items);
          setBreadCrumbs(result.categories)
        };
        fetchData(search);
      }, []);

    console.log(search)
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