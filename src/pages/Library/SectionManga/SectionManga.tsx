import { DataViewType } from '@/interface';
import React from 'react';
import styled from 'styled-components';
import { CardLibrary } from '../components/CardLibrary';

interface SectionMangaProps {
	DataView: DataViewType[];
}

const SectionManga: React.FC<SectionMangaProps>  = ({DataView}) => {
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


const ContainerCards = styled.div`
  /* border: 1px solid #df0c0c; */

  display: flex;

  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;

  width: 90%;

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
