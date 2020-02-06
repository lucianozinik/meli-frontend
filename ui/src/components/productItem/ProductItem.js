import React from 'react';
import Currency from 'react-currency-formatter';
import free_shipping_image from '../../assets/ic_shipping.png'
import { Container, Content, ProductImage, DataContainer, Price, Title, LocationContainer, Location, Row, LogoShipping } from './productItem.styles';
const ProductItem = ({item}) => {
    console.log(item)
    return(
        <Container>
            <Content>
                <ProductImage src={item.picture}/>
                <DataContainer>
                    <Row>
                        <Price><Currency
                                                    quantity={item.price.amount}          // Required
                                                    currency="USD"            // Optional (USD by default)
                                                    pattern="^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$"        // Optional
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

export default ProductItem