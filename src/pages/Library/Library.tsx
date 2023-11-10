import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { SectionManga } from './SectionManga';
import { SectionFilters } from './SectionFilters';
import { DataView } from '@/data';



const Library: React.FC  = () => {

	useEffect(() => {
		window.scrollTo(0, 0); // Lleva el scroll al inicio
	}, []);

  

	return <LibraryStl>
    <SectionFilters/>
		<SectionManga DataView={DataView}/>
    <Outlet/>
	</LibraryStl>;
};

export const LibraryStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: fit-content;
`;

export default Library;
