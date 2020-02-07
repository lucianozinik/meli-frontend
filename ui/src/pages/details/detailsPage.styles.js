import styled from 'styled-components';
import { variables } from '../../generic.styles';


export const Container = styled.div`

`

export const Content = styled.div`
    max-width:${variables.maxWidth};
    margin:0 auto;
    padding:5px 0 ;
    display:flex;
    width:100%;

`


export const ProductImage = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-repeat:no-repeat;
    background-size:contain;
    width:680px;
    height:680px;
    border-radius:4px;
    margin: ${variables.margin};


`

export const DescripD = styled.div`

`
export const TitleD = styled.div`

`
export const InfoContainer = styled.div`

`

export const DescriptionContainer = styled.div`

`

export const Row = styled.div`
    display:flex;
    

`

export const PriceRow = styled.div`

`

export const Status = styled.div`

`
export const Title = styled.div`

`
export const Price = styled.div`

`


export const LogoShipping = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-repeat:no-repeat;
    width:22px;

`