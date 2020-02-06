import styled from 'styled-components';
import { variables } from '../../generic.styles';



export const Container = styled.div`

`
export const Content = styled.div`
    display:flex;
    max-width:${variables.maxWidth};
    background-color:${variables.white};
    cursor:pointer;

`

export const LogoShipping = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-repeat:no-repeat;
    width:22px;

`
export const ProductImage = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-repeat:no-repeat;
    background-size:contain;
    width:180px;
    height:180px;
    border-radius:4px;
    margin: ${variables.margin};


`
export const DataContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;

`
export const Price = styled.h1`
    font-size:${variables.fsizeMid2};
    margin:0;

`
export const Title = styled.h2`
    font-size:${variables.fsizeMid1}


`

export const LocationContainer = styled.div`

`
export const Location = styled.p`
    font-size:${variables.fsizeSmall1};

`

export const Row = styled.div`
    display: flex;
    flex-direction:row;
    padding-bottom:${variables.padding};
    margin-top:32px

`