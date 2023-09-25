import styled from "styled-components";
import {Link} from "react-router-dom"


export const LayoutContainer = styled.div`

height: 100%;
width: 100%;
max-width:80%;

background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #434343, #434343); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

border-radius: 10px;

box-shadow: 1px 2px 2px 15px rgba(255,255,255,0.20);
-webkit-box-shadow: 4px 12px 20px 2px rgba(255,255,255,0.10);
-moz-box-shadow: 4px 12px 22px 15px rgba(255,255,255,0.16);/* @media screen and (max-width:1920px){
    max-width:80% ;
} */

/* @media screen and (max-width:1460px){
    max-width:1200px ;
}

@media screen and (max-width:1060px){
    max-width:900px ;
}
*/

@media screen and (max-width: 900px) {
    max-width:85% ;
}

@media screen and (max-width: 600px) {
    max-width:90% ;
}

@media screen and (max-width: 400px) {
    max-width:100% ;
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