import React from 'react'
import { withRouter } from 'react-router-dom';

import { Container, Content, List } from './resultsPage.styles';
import ProductItem from '../../components/productItem/ProductItem';

const ResultsPage = ({history,productsList}) => {
   
    return (
        <Container>
            <Content>
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