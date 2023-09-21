import styled from "styled-components";
import {Link} from "react-router-dom"


export const LayoutContainer = styled.div`
/* background-color: red; */
height: 100%;
width: 100vh;
max-width:960px;

@media screen and (max-width:1920px){
    max-width:1380px ;
}
 //Agregar otro @media screen and (max-width:)
` 

export const LinkStyle = styled(Link)`
text-decoration: none;
text-transform: uppercase;
color: #ffff;
font-size: 18px;
font-weight: 600;

`