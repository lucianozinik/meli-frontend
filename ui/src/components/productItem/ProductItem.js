import React from 'react';
import { withRouter } from 'react-router-dom';
import Currency from 'react-currency-formatter';
import free_shipping_image from '../../assets/ic_shipping.png'
import { Container, Content, ProductImage, DataContainer, Price, Title, LocationContainer, Location, Row, LogoShipping } from './productItem.styles';
const ProductItem = ({history, item}) => {
    console.log(item)
    console.log(item.price.amount.toFixed(item.price.decimals))

    const goToItem = (id) => {
        console.log(id)
        history.push(`/items/${id}`)
    }
    return(
        <Container>
            <Content onClick={() => goToItem(item.id)}>
                <ProductImage src={item.picture}/>
                <DataContainer>
                    <Row>
                        <Price><Currency
                                                    quantity={item.price.amount.toFixed(item.price.decimals)}          // Required
                                                    currency="USD"            // Optional (USD by default)
                                                    decimal=","               // Optional
                                                    group="."                 // Optional
                                                    />
                        </Price>
                        { item.free_shipping ? <LogoShipping src={free_shipping_image} /> : null }
                    </Row>
                    <Title>{item.title}</Title>
                </DataContainer>
                <LocationContainer>
                    <Location></Location>
                </LocationContainer>

            </Content>
        </Container>
    )
}

export default withRouter(ProductItem);