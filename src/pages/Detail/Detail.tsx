import React from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SectionDetail } from './SectionDetail';



const Detail: React.FC  = () => {
// const {id} = useParams<{id?: string}>();

	return <DetailStl>
    <SectionDetail/>

	</DetailStl>;
};

export const DetailStl = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

width: 100%;
height: 100vh;

`;

export default Detail;
