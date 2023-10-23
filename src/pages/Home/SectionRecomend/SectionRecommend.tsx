/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { DataViewType } from "@/interface";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";
import { CardRecomend } from "../components/cardRecomend";

interface SectionRecommendProps {
  DataView: DataViewType[];
}

const SectionRecommend: React.FC<SectionRecommendProps> = ({ DataView }) => {
  // const [indexRecomend, setIndexRecomend] = useState<number>(0);

  //Recorre el indice segun el numero del estado local
  const [indexRecomend, setIndexRecomend] = useState(0);

  const [cardsNumbers, setCardNumbers] = useState<number>(0);

  //Para desabilitar el boton del paginado del lado derecho.
  // const maxIndex = DataPorts.length - 4
  const [maxIndex, setMaxIndex] = useState<number>(0);

  const updateCardsCount = () => {
    const widthWindow = window.innerWidth;
    setCardNumbers(widthWindow < 1260 ? 2 : 4);
    setMaxIndex(
      widthWindow < 1260 ? DataView.length - 2 : DataView.length - 4
    );
  };

  useEffect(() => {
    updateCardsCount(); // Llama a la función al principio para establecer el valor inicial

    const handleResize = () => {
      updateCardsCount(); // Llama a la función cada vez que cambie el tamaño de la ventana
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardsCount = indexRecomend + cardsNumbers;
  const DataSlice = DataView.slice(indexRecomend, cardsCount);

  const handleNextClick = (): void => {
    if (indexRecomend !== maxIndex)
      setIndexRecomend((prevIndex) => prevIndex + 1);
  };

  const handlePrevClick = (): void => {
    setIndexRecomend((prevIndex) => Math.max(prevIndex - 1, 0)); // Asegura que el índice no sea negativo
  };

  return (
    <ContainerMangaRecomend id="recomend-section">
      <div className="section-h2">
        <h2>RECOMENDADO</h2>
      </div>
      <DataRecommendStl>
        <PiArrowCircleLeftFill
          size="3em"
          style={{}}
          className={`${
            indexRecomend === 0 ? "arrow-left-disable" : "arrow-left"
          }`}
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
          className={`${
            indexRecomend === maxIndex ? "arrow-right-disable" : "arrow-right"
          }`}
          onClick={handleNextClick}
        />
      </DataRecommendStl>
    </ContainerMangaRecomend>
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

const ContainerMangaRecomend = styled.div`
  margin: 8rem 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
  height: fit-content;
  background-color: #262626;
  border-radius: 20px;
  
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  .section-h2 {
    width: 100%;
    h2 {
      margin: 0.83em 0 0.83em 2em;
      text-decoration-line: underline;
    }
  }
`;
const DataRecommendStl = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  width: 95%;
  height: fit-content;

  .arrow-left {
    animation: ${arrowFade} 0.3s ease-in-out;
  }
  .arrow-right {
    animation: ${arrowFade} 0.3s ease-in-out;
  }
  .arrow-left,
  .arrow-right {
    cursor: pointer;
  }

  .arrow-left-disable {
    opacity: 0.4;
  }

  .arrow-right-disable {
    opacity: 0.4;
  }

  @media screen and (max-width: 1640px) {
    width: 90%;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

export default SectionRecommend;
