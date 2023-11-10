import { DataChapters_Item } from '@/interface';
import React from 'react';
import styled from 'styled-components';
import { ChapterPanel } from './components/ChapterPanel';

interface SectionChapterProps {
	DataMangaChapter: DataChapters_Item[]
	CurrentChapter: number | undefined;
}

const SectionChapter: React.FC<SectionChapterProps>  = ({DataMangaChapter, CurrentChapter}) => {

	const chapters = DataMangaChapter[0].chapters
	
	console.log(chapters);
	
	return <SectionChapterStl>
           <ChapterPanel chapters={chapters} CurrentChapter={CurrentChapter}/>
	</SectionChapterStl>;
};

export const SectionChapterStl = styled.div`



/* border: 1px solid #fff; */
margin: 20px;
`;

export default SectionChapter;
