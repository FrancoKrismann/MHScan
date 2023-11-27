"use client";
import React from 'react';
import styled from 'styled-components';
import FormWrapper from '../../../FormWrapper';

interface PreviewChaptersProps {
	// types...
}

const PreviewChapters: React.FC<PreviewChaptersProps>  = ({}) => {
	return (
		<FormWrapper title='Preview Chapters'>
			<PreviewChaptersStl>
 			PreviewChapters works!
 		</PreviewChaptersStl>
		</FormWrapper>
		
	);
};

export const PreviewChaptersStl = styled.div``;

export default PreviewChapters;
