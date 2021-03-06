import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Container, Content, InputContainer, Input, Button, LogoML } from './serachBar.styles';
import searchImg from '../../assets/ic_Search.png';
import logo from '../../assets/Logo_ML.png';
const SearchBar = ({history}) => {

    const [search, setSearch] = useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)

    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(history)
        if(search !== ''){

            history.push(`/items?search=${search}`)
        }

    }

    return (
        <Container>
            <Content>
                <LogoML src={logo} onClick={() => history.push("/")}/>
                <InputContainer>
                <form onSubmit={submitForm} style={{display:'flex'}}>
                    <Input
                        placeholder="Nunca dejes de buscar"
                        value={search}
                        onChange={handleInputChange}
                    />
                <Button onClick={submitForm}>
                    <img src={searchImg}/>
                </Button>
                </form>
                </InputContainer>

            </Content>
        </Container>
    )
}

export default withRouter(SearchBar);