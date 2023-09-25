import { DataPort_Item } from '@/interface';
import React from 'react';
import styled from 'styled-components';
import { CardRecomend } from '../CardRecomend';
import {PiArrowCircleLeftFill,PiArrowCircleRightFill} from "react-icons/pi"

interface DataRecommendProps {
	DataPorts: DataPort_Item[];
}


const DataRecommend: React.FC<DataRecommendProps>  = ({DataPorts}) => {
	return <DataRecommendStl>
		<PiArrowCircleLeftFill size={"2.5rem"} className="arrow-page-1" />
    {
		DataPorts.map(item => (
		<CardRecomend
		id={item.id}
		title={item.title}
		image={item.image}
		key={item.id}
		/>
		))
	}
	<PiArrowCircleRightFill size={"2.5rem"} className="arrow-page-2"/>
	
	</DataRecommendStl>;
};

const DataRecommendStl = styled.div`

overflow: hidden;

display: flex;
justify-content: space-around;
align-items: center;
border-radius: 10px;

width: 100%;
height: fit-content;

.arrow-page-1 {
	margin:0 10px 0 0
}
.arrow-page-2 {
	margin:0 0 0 10px
}
.arrow-page-1, .arrow-page-2 {
	cursor: pointer
}

@media screen and (max-width: 1640px) {
    width:100%;
}

@media screen and (max-width: 1440px) {
    width:100%;
}

`;



export default DataRecommend;
