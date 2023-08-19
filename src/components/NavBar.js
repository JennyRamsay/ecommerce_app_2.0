import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components"

const NavBar = () => {

    return(
        <header>
            
            <PageNavBar>
                <ButtonStyleLinks key="home"><Link to="/">Home</Link></ButtonStyleLinks>
                <ButtonStyleLinks key="products"><Link to="/products">Random Products</Link></ButtonStyleLinks>
                <ButtonStyleLinks key="basket"><Link to="/basket">Your Basket</Link></ButtonStyleLinks>
            </PageNavBar>
        </header>
    )
};

const PageNavBar = styled.ul`
list-style: none;
margin: 5px;
display: flex;
justify-content: space-evenly;
flex-direction: column;
padding-left: 0;
color: black;
`

const ButtonStyleLinks = styled.li`
background-color: #f76b8a;
padding: 1em;
margin: 5px;
width: 5em;
border-radius: 25%;
`
export default NavBar;