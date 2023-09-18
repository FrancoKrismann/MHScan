import React from 'react';
import styled from "styled-components";

// Se que queja si esta vacio la interfaz
export interface HomeProps {
}

const Home: React.FC<HomeProps>  = ({}) => {
	return <HomeStl>Home</HomeStl>;
};

export const HomeStl = styled.div`

`;

export default Home;
