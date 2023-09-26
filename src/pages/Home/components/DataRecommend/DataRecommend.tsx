/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { DataPort_Item } from "@/interface";
import React, { useState } from "react";
import styled from "styled-components";
import { CardRecomend } from "./CardRecomend";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";

interface DataRecommendProps {
  DataPorts: DataPort_Item[];
}

const DataRecommend: React.FC<DataRecommendProps> = ({ DataPorts }) => {

  const [indexRecomend, setIndexRecomend] = useState(0);

  const maxIndex = DataPorts.length - 4
  const DataSlice = DataPorts.slice(indexRecomend, indexRecomend + 4)

  const handleNextClick = ():void => {
	if(indexRecomend !== maxIndex) setIndexRecomend(prevIndex => prevIndex + 1);
  };

  const handlePrevClick = ():void => {
    setIndexRecomend(prevIndex => Math.max(prevIndex - 1, 0)); // Asegura que el índice no sea negativo
  };


  return (
    <DataRecommendStl>
      <PiArrowCircleLeftFill
        size={"2.5rem"}
        className={`${indexRecomend === 0 ? "arrow-left-disable" : "arrow-page-1"}`}
        onClick={handlePrevClick}
      />
      {DataSlice.map((item) => (
        <CardRecomend
          id={item.id}
          title={item.title}
          image={item.image}
          key={item.id}
        />
      ))}
      <PiArrowCircleRightFill
        size={"2.5rem"}
		className={`${indexRecomend === maxIndex ? "arrow-right-disable" : "arrow-page-2"}`}
        onClick={handleNextClick}
      />
    </DataRecommendStl>
  );
};

const DataRecommendStl = styled.div`
  overflow: hidden;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  width: 100%;
  height: fit-content;
  
  
  transition: 0.3s ease-in-out;


  .arrow-page-1 {
    margin: 0 10px 0 0;
  }
  .arrow-page-2 {
    margin: 0 0 0 10px;
  }
  .arrow-page-1,
  .arrow-page-2 {
    cursor: pointer;
  }

  .arrow-left-disable {
	margin: 0 10px 0 0;
	opacity: 0.4;
  }

  .arrow-right-disable {
	margin: 0 0 0 10px;
	opacity: 0.4;
  }

  @media screen and (max-width: 1640px) {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export default DataRecommend;
