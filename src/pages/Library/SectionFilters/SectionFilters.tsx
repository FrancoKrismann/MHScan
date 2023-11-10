import React from 'react';
import styled from 'styled-components';
import { GenresSelect } from './SelectsMenus/GenresSelect';
import { TypeSelect } from './SelectsMenus/TypeSelect';
import { StatusSelect } from './SelectsMenus/StatusSelect';

export type SectionFiltersProps = {
}

const SectionFilters: React.FC<SectionFiltersProps>  = ({}) => {
	return <SectionFiltersStl>
        <GenresSelect/>
		<TypeSelect/>
		<StatusSelect/>
	</SectionFiltersStl>;
};

export const SectionFiltersStl = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: fit-content;
`;

export default SectionFilters;
