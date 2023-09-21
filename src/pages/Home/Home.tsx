import React from 'react';
import styled from "styled-components";

// Se que queja si esta vacio la interfaz
// interface HomeProps {
// }
const HomeStl = styled.div`
display: flex;
justify-content: center;

height: 80vh;


`;
const Home: React.FC  = () => {
	return <HomeStl>
		HOME
	</HomeStl>;
};



export default Home;
