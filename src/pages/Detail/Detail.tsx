import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';



const Detail: React.FC  = () => {
const {id} = useParams<{id?: string}>();

	return <DetailStl>
		<h1>Detail</h1>
		<h2>{id}</h2>

	</DetailStl>;
};

export const DetailStl = styled.div`
width: 100%;
height: 30rem;
`;

export default Detail;
