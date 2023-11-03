import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export type ChapterProps = {
}

const Chapter: React.FC<ChapterProps>  = ({}) => {


	const { id, chapter } = useParams<{ id?: string, chapter?: string }>();


	return <ChapterStl>
		{chapter}
		{id}
	</ChapterStl>;
};

export const ChapterStl = styled.div``;

export default Chapter;
