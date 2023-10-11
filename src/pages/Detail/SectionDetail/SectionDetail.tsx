import React from "react";
import styled from "styled-components";
import { CardDetail } from "../components/CardDetail";
import Chaman from "@/assets/images/El camino del chamán.jpg";

const SectionDetail: React.FC = () => {
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
  const { title, image ,id} = DataDetail;

  return (
    <SectionDetailStl>
      <CardDetail title={title} image={image} id={id} />
    </SectionDetailStl>
  );
};

export const SectionDetailStl = styled.div`
  width: 80%;
  height: fit-content;

  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  border-radius: 20px;
`;

export default SectionDetail;
