import React, { useEffect } from "react";
// import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { SectionDetail } from "./SectionDetail";
import Chaman from "@/assets/images/El camino del chamán.jpg";

const Detail: React.FC = () => {
  // const {id} = useParams<{id?: string}>();

  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll al inicio
  }, []);
  
  const DataDetail = {
    id: "1",
    image: Chaman,
    title: "El camino del Chaman",
    href: "El-camino-del-Chaman",

    chapters: [
      {
        chapter: 1,
        updateTime: 8,
      },
      {
        chapter: 2,
        updateTime: 2,
      },
    ],
  };

  const InfoDetail_items = {
    alternative: "Path of the Shaman, Wandering Warrior of Wudang",
    author: "Eunyeol",
    artist: "Hwaram",
    genre: [
      "Acción",
      "Artes Marciales",
      "Aventura",
      "Comedia",
      "Fantasía",
      "Manhwa",
      "Murim",
      "Reencarnación",
    ],
    type: " Manhwa",
    releaser: 2021,
    status: "OnGoing",
  };

  return (
    <DetailStl>
      <SectionDetail DataDetail={DataDetail}
       InfoDetail_items={InfoDetail_items}
        />
    </DetailStl>
  );
};

export const DetailStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: fit-content;
`;

export default Detail;
