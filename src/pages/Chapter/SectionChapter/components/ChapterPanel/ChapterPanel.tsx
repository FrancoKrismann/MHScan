import React from 'react';
import styled from 'styled-components';

interface ChapterPanelProps {
	chapters: string[]
}

const ChapterPanel: React.FC<ChapterPanelProps>  = ({chapters}) => {

	console.log(chapters);
	
	return <ChapterPanelStl>
      {
		chapters.map((chapter, index) => {
			return (
				<div key={index} className='div-panel'>
					<img src={chapter} alt={chapter}/>
				</div>
			)
		})
	  }
	</ChapterPanelStl>;
};

const ChapterPanelStl = styled.div`


img {
	margin: 0 auto;
	
}

.div-panel {
	 
}
`;

export default ChapterPanel;
