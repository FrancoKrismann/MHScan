import { DataViewType } from '@/interface';
import React from 'react';
import styled from 'styled-components';
import { CardLibrary } from '../components/CardLibrary';
import {BiErrorAlt} from "react-icons/bi"

interface SectionMangaProps {
	DataView?: DataViewType[] | Error | undefined;
}

const SectionManga: React.FC<SectionMangaProps>  = ({DataView}) => {

  if (DataView instanceof Error) {
    return <ErrorDiv>Error: {DataView.message}</ErrorDiv>;
  }

  if (!DataView || DataView.length === 0) {
    return <ErrorDiv>
      <BiErrorAlt size="5em" style={{color:"red"}}/>
      <h2>No hay datos disponibles</h2>
      </ErrorDiv>;
  }

	return <SectionMangaStl>
		<ContainerCards>
		{DataView.map((item) => (
          <CardLibrary
            id={item.id}
            image={item.image}
            title={item.title}
            chapters={item.chapters}
            href={item.href}
            detail={item.detail}
            key={item.id}
          />
        ))}
		</ContainerCards>
	</SectionMangaStl>;
};

const ErrorDiv = styled.div`
  margin: 10rem 0 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
  /* height: fit-content; */
  height: 35rem;
  background-color: #262626;
  border-radius: 20px;

`

const ContainerCards = styled.div`
  /* border: 1px solid #df0c0c; */

  display: flex;

  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;

  width: 100%;

  @media screen and (max-width: 1440px) {
    width: 95%;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

export const SectionMangaStl = styled.div`
  margin: 10rem 0 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 90%;
  /* height: fit-content; */
  /* height: 50rem; */
  background-color: #262626;
  border-radius: 20px;

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

export default SectionManga;
