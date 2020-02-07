import React, {useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';

import Currency from 'react-currency-formatter';
import free_shipping_image from '../../assets/ic_shipping.png'

import { getProductById } from '../../services'; 
import { Container, Content } from './detailsPage.styles';
import { ProductImage, Row, InfoContainer, DescripD, TitleD, DescriptionContainer, Status, Title, PriceRow, Price, LogoShipping } from './detailsPage.styles';

const DetailsPage = ({match}) => {

  const [product, setProduct] = useState(null)

    console.log(match.params)
  useEffect(() => {
    const fetchData = async (query) => {
      const result = await getProductById(query);
      console.log(result.data)
      if(result.data){
          setProduct(result.data.items);
      }
    };
    fetchData(match.params.id);
  }, [match.params]);

    return (

        <Container>
            {
                product ? 
            
            <Content>
                <Row>
                    <ProductImage src={product.picture}>

                    </ProductImage>
                    <InfoContainer>
                        <Status>{product.condition}</Status>
                        <Title>{product.title}</Title>
                        <PriceRow>
                            <Price><Currency
                                                        quantity={product.price.amount.toFixed(product.price.decimals)}          // Required
                                                        currency="USD"            // Optional (USD by default)
                                                        decimal=","               // Optional
                                                        group="."                 // Optional
                                                        />
                            </Price>
                            { product.free_shipping ? <LogoShipping src={free_shipping_image} /> : null }
                        </PriceRow>

                    </InfoContainer>

                </Row>
                <DescriptionContainer>
                    <TitleD>

                    </TitleD>
                    <DescripD>

                    </DescripD>
                </DescriptionContainer>

            </Content>
            :
            null
            }
        </Container>
    )
}

export default DetailsPage;