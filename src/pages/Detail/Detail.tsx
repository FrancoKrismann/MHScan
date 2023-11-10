import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { SectionDetail } from "./SectionDetail";
import { SectionChapters } from "./SectionChapters";
import { DataView } from "@/data";

const Detail: React.FC = () => {
  const {id : TitleManga} = useParams<{id?: string}>();

  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll al inicio
  }, []);

  const DataForDetail = DataView.filter(data => data.href === TitleManga)
    
  
  return (
    <DetailStl>
      <SectionDetail
        DataForDetail={DataForDetail}
      />
      <SectionChapters
      DataForDetail={DataForDetail}
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
