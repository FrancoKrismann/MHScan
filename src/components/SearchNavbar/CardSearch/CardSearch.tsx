import { LinkStyle } from "@/styled-components";
import {
  DataViewChapters,
  DataViewDetails,
  DataViewHref,
  DataViewId,
  DataViewImage,
  DataViewTitle,
} from "@/types";
import React from "react";
import styled from "styled-components";

interface CardSearchProps {
  id: DataViewId["id"];
  image: DataViewImage["image"];
  title: DataViewTitle["title"];
  href: DataViewHref["href"];
  chapters: DataViewChapters["chapters"];
  detail: DataViewDetails["detail"];
  handleClickCard: () => void;}

const CardSearch: React.FC<CardSearchProps> = ({
  href,
  id,
  image,
  title,
  chapters,
  detail,
  handleClickCard
}) => {
  const TotalChapters = chapters.length;

  return (
    <LinkStyle to={`manga/${href}`} onClick={handleClickCard}>
      <CardSearchStl >
        <div className="container-left">
          <img src={image} alt={id} />
        </div>
        {detail.map((item, index) => (
          <div key={index} className="container-right">
            <p className="title">{title}</p>
            
			<div className="type">
            <span >{item.type}</span>
			</div>
            <span className="type-status">{item.status}</span>
            <span className="chapters">Capitulos: {TotalChapters}</span>
          </div>
        ))}
      </CardSearchStl>
    </LinkStyle>
  );
};

export const CardSearchStl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #262626;

  width: 30rem;
  height: 12rem;
  margin: 10px;

  @media (max-width: 1600px) {
    width: 25rem;
	height: 12rem;
  }

  @media (max-width: 1200px) {
    width: 18rem;
	height: 10rem;
	
  }

  .container-left {
    display: flex;
    flex: 1;
    height: 100%;
	margin: 0px;
	
    /* border: 1px solid #560796; */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }

  .container-right {
    /* border: 1px solid #06b880; */
    height: fit-content;
    display: flex;
	flex: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;

	margin-left: 10px;

	.title {
    font-size: 20px;
	text-transform: none;
	@media (max-width: 1200px) {
        font-size: 15px;
	
  }
    
	}

	.type {
		font-size: 17px;
	text-transform: none;
	--un-text-opacity: 1;
    color: rgba(125,211,252,var(--un-text-opacity));
	font-family: Cabin,sans-serif;
	background-color: #0284c71a;
	padding	:5px ;
	border-radius: 10px;
	margin: 5px;
	@media (max-width: 1200px) {
        font-size: 15px;
	
  }
}

	.type-status {
		font-size: 17px;
	text-transform: none;
	
	font-family: Cabin,sans-serif;
	background-color: #4ff80c20;
	padding	:5px ;
	border-radius: 10px;
	margin: 5px;

	@media (max-width: 1200px) {
        font-size: 15px;
	
  }
	}

	.chapters {
		font-size: 17px;
	text-transform: none;
	@media (max-width: 1200px) {
        font-size: 15px;
	
  }
	}
  }

  &:hover {
	background-color: #5f5c5c;
  }
`;

export default CardSearch;
