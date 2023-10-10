import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';



const Library: React.FC  = () => {
	return <LibraryStl>
		<h1>Libraries</h1>
		<Outlet/>
	</LibraryStl>;
};

export const LibraryStl = styled.div``;

export default Library;
