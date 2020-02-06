import React from 'react';
import { Text, Container, Content } from './breadcrumbs.styles';
const Breadcrumbs = ({data}) => {

    console.log ("breardCrumbs",data)
    return(
        <>
        <Container>
            <Content>
            {
                data.map( (item, index) =>  {
                    let text = `${item} ${index === data.length -1 ? '' : ' > '} `

                    return (
                    <Text> {text} </Text>
                    )
                })

            }
            </Content>
        </Container>

        </>
    )
}

export default Breadcrumbs;