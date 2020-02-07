import styled from 'styled-components';
import { variables } from '../../generic.styles';


export const Container = styled.div`
    background-color:${variables.yellow};

`

export const Content = styled.div`
    max-width:${variables.maxWidth};
    margin:0 auto;
    padding:5px 0 ;
    display:flex;
    width:100%;

`

export const InputContainer = styled.div`
    width:100%;

`

export const Form = styled.div`
    width:100%;
    display:flex;
`

export const Input = styled.input`
    width:100%;
    font-size:${variables.fsizeMid1};
    padding: 5px 15px;
    border: none;
`

export const Button = styled.button`
    padding:5px;
    border:none;
    text-decoration:none;
    cursor:pointer;
`

export const Img = styled.img`
    
`

export const LogoML = styled.div`
    background-image:url(${props => props.src});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    width:45px;
    margin: 5px;

`