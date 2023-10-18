import React, { useState } from "react";
import styled from "styled-components";
import { Chapters } from "../components/Chapters";
import { Chapters_Item, DataUpdate_Item as DataDetail_Item } from "@/interface";
import {BiSort} from "react-icons/bi"

interface SectionChaptersProps {
  DataDetail: DataDetail_Item;
}

const SectionChapters: React.FC<SectionChaptersProps> = ({ DataDetail }) => {
  const { chapters } = DataDetail;

  const chaptersCount = chapters.length;


  const [isSortedDescending, setIsSortedDescending] = useState(true);

  const sortChapters = () => {
    setIsSortedDescending(isSortedDescending => !isSortedDescending);
  }

  const sortedChapters = [...chapters].sort((a, b) => (isSortedDescending ? b.chapter - a.chapter : a.chapter - b.chapter));
  
  
  return (
    <SectionChaptersStl>
		<div className="container-titleSection">
      
			<h2>{chaptersCount} Capitulos en total</h2>

      <BiSort size="2.5em" onClick={sortChapters} style={{cursor:"pointer"}}/>
		</div>
    <div className="container-border"></div>
    
		<div className="container-chapters">
			{sortedChapters.map(({ chapter, updateTime }, index) => {
        return <Chapters key={index} chapter={chapter} updateTime={updateTime} />;
      })}
		</div>
      
    </SectionChaptersStl>
  );
};

const SectionChaptersStl = styled.div`
  width: 70%;
  height: fit-content;

  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  

  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  border-radius: 20px;

  margin: 30px 0 10px 0;

  /* border: 1px solid yellow; */

  @media screen and (max-width: 1660px) {
    width: 80%;
  }

  @media screen and (max-width: 1440px) {
    width: 90%;
  }

  @media screen and (max-width: 1160px) {
    width: 100%;
  }

  .container-chapters {
	width: 80%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 19px;
  justify-items: center; /* Alinea las tarjetas hacia el inicio (izquierda) */

	/* border: 1px solid #fff; */
  margin-bottom: 30px;

  @media screen and (max-width: 1160px) {
    width: 95%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;

  }
  }

  .container-titleSection {
	width: 80%;
	display: flex;
  flex-direction: row;
  
  align-items: center;
  /* justify-content: space-between; */
  gap:60px;

	/* border: 1px solid blue; */
	h2 {
		/* text-decoration-line: underline; */
		font-size: 30px;
	}

  @media screen and (max-width: 1160px) {
      h2 {
        font-size: 20px;
      }
  }
  }

  .container-border {
    border:1px solid #fff;
    opacity:0.5;
    width:80%;
    margin:5px 0 30px 0;
  }
`;

export default SectionChapters;
