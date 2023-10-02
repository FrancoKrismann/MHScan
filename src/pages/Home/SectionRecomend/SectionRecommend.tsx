/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { DataPort_Item } from "@/interface";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";
import { CardRecomend } from "../components/cardRecomend";

interface SectionRecommendProps {
  DataPorts: DataPort_Item[];
}

const SectionRecommend: React.FC<SectionRecommendProps> = ({ DataPorts }) => {
  // const [indexRecomend, setIndexRecomend] = useState<number>(0);
  
  
  
  //Recorre el indice segun el numero del estado local
  const [indexRecomend, setIndexRecomend] = useState(0);
  
  const [cardsNumbers, setCardNumbers] = useState<number>(0)

  //Para desabilitar el boton del paginado del lado derecho.
  // const maxIndex = DataPorts.length - 4
  const [maxIndex, setMaxIndex] = useState<number>(0);
  
  const updateCardsCount = () => {
    const widthWindow = window.innerWidth;
    setCardNumbers(widthWindow < 1260 ? 2 : 4);
    setMaxIndex(widthWindow < 1260 ? DataPorts.length - 2 : DataPorts.length - 4); 
  }

  useEffect(() => {
    updateCardsCount(); // Llama a la función al principio para establecer el valor inicial

    const handleResize = () => {
      updateCardsCount(); // Llama a la función cada vez que cambie el tamaño de la ventana
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  const cardsCount = indexRecomend + cardsNumbers;
  const DataSlice = DataPorts.slice(indexRecomend, cardsCount)
  
const handleNextClick = ():void => {
	if(indexRecomend !== maxIndex) setIndexRecomend(prevIndex => prevIndex + 1);
  };

  const handlePrevClick = ():void => {
    setIndexRecomend(prevIndex => Math.max(prevIndex - 1, 0)); // Asegura que el índice no sea negativo
  };
  

 

  return (
    <DataRecommendStl>
      <PiArrowCircleLeftFill
        size="3em"
        style={{}}
        className={`${indexRecomend === 0 ? "arrow-left-disable" : "arrow-left"}`}
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
        size="3em"
		className={`${indexRecomend === maxIndex ? "arrow-right-disable" : "arrow-right"}`}
        onClick={handleNextClick}
      />
    </DataRecommendStl>
  );
};




const arrowFade = keyframes`
  0% {
    opacity: 0;
    
  }
  /* 50%{
	opacity: 0.5;
  } */
  100% {
    opacity: 1;
  }
  0%,100% {
    transition: cubic-bezier(0.35,-0.01, 0.58, 1)
  }
`;
const DataRecommendStl = styled.div`
  overflow: hidden;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  width: 95%;
  height: fit-content;
  
  

  .arrow-left {
    /* margin: 0 10px 0 0; */
    animation: ${arrowFade} 0.3s ease-in-out;
  }
  .arrow-right {
    /* margin: 0 10px 0 10px; */
    animation: ${arrowFade} 0.3s ease-in-out;
  }
  .arrow-left,
  .arrow-right {
    cursor: pointer;
  }

  .arrow-left-disable {
	/* margin: 0 10px 0 0; */
	opacity: 0.4;
  }

  .arrow-right-disable {
	/* margin: 0 0 0 10px; */
	opacity: 0.4;
  }

  @media screen and (max-width: 1640px) {
    /* .arrow-left-disable,.arrow-left {
      margin: 0 15px 0 0;
    } */

    width: 90%;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export default SectionRecommend;
