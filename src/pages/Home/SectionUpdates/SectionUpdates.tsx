/* eslint-disable no-mixed-spaces-and-tabs */
import { DataUpdate_Item } from "@/interface";
import React from "react";
import styled from "styled-components";
import { CardUpdates } from "../components/CardUpdates";

interface SectionUpdatesProps {
  DataUpdates: DataUpdate_Item[];
}

const SectionUpdates: React.FC<SectionUpdatesProps> = ({ DataUpdates }) => {

  // const updatedDataUpdates = DataUpdates.map((item) => {
  //   const updatedChapters = item.chapters.map((chapter,update) => {

  //     const updatedChapter = {
  //       chapter ,
  //       href: `/library/${item.title}/chapters/${chapter}`,
  //       updateTime ,
  //     };
  //     return updatedChapter;
  //   });

  //   return {
  //     ...item,
  //     chapters: updatedChapters,
  //   };
  // });
console.log(DataUpdates);

  return (
    <SectionUpdatesStl>
      <ContainerCards>
		{
			DataUpdates.map(item => (
				<CardUpdates
				id={item.id}
				image={item.image}
				title={item.title}
        chapters={item.chapters}
        href={item.href}
				key={item.id}
				/>
			))
		}
	  </ContainerCards>
    </SectionUpdatesStl>
  );
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

const SectionUpdatesStl = styled.div`
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
    width: 95%;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

export default SectionUpdates;
