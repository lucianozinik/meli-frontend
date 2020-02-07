import styled from 'styled-components';
import { variables } from '../../generic.styles';

export const Text = styled.p`
    margin: ${variables.margin} 0 ;
    font-size: ${variables.fsizeSmall2}
`

export const Container = styled.div`
    display:flex;
    justify-content:center;

`

export const Content = styled.div`
    display:flex;
    max-width:${variables.maxWidth};
    width:100%;

    cursor:pointer;

`