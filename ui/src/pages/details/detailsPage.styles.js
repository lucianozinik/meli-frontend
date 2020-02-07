import styled from 'styled-components';
import { variables } from '../../generic.styles';


export const Container = styled.div`

`

export const Content = styled.div`
    max-width:${variables.maxWidth};
    margin:0 auto;
    padding:5px 0 ;
    display:flex;
    flex-direction:column;
    width:100%;


`


export const ProductImage = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    width:680px;
    height:680px;
    border-radius:4px;
    margin: ${variables.margin};


`

export const DescripD = styled.p`
    font-size:${variables.fsizeSmall2}

`
export const TitleD = styled.h1`
    font-size:${variables.fsizeBig1};

`
export const InfoContainer = styled.div`
    padding-left:${variables.padding};
`

export const DescriptionContainer = styled.div`
    padding-left:${variables.padding}
`

export const Row = styled.div`
    display:flex;

`

export const PriceRow = styled.div`

`

export const Status = styled.div`
    padding-top:${variables.padding};
    margin-bottom:${variables.margin};
    font-size:${variables.fsizeSmall2};

`
export const Title = styled.div`
    font-size:${variables.fsizeMid2};
    font-weight:500;
    padding-bottom:${variables.padding};

`
export const Price = styled.h1`
    font-size:${variables.fsizeMid2};
    padding-bottom:${variables.padding};
    margin:0;

`


export const LogoShipping = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-repeat:no-repeat;
    width:22px;

`

export const Button = styled.div`
    background-color: ${variables.blue};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:4px;
    cursor:pointer;
    transition:transform .1s ease-in;
    &:hover{
        transform:scale(1.02)
    }
    &:active{
        transform:scale(.99)
    }
    p{
        color:${variables.white};
    }


`