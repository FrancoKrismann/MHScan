import { LinkStyle } from "@/styled-components";
import {DataViewHref, DataViewId, DataViewImage, DataViewTitle } from "@/types";
import React from "react";
import styled, { keyframes } from "styled-components";

interface CardRecomendProps {
  id: DataViewId["id"];
  title: DataViewTitle["title"];
  image: DataViewImage["image"];
  href: DataViewHref["href"];
}

const CardRecomend: React.FC<CardRecomendProps> = ({ id, title, image,href }) => {
  return (
    <CardRecomendStl key={id}>
       <LinkStyle to={`manga/${href}`} className="container-img">
<img src={image} alt={id} />
      <div className="container-title">
        <p>{title}</p>
      </div>
       </LinkStyle>
      
    </CardRecomendStl>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    
  }
  100% {
    opacity: 1;
  }
  0%,100% {
    transition: cubic-bezier(0.35,-0.01, 0.58, 1)
  }
`;

const CardRecomendStl = styled.div`
  /* border: 1px solid #fff; */
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: calc(27% - 6rem);
  height: 22rem;
  border-radius: 30px;
  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  overflow: hidden;
  cursor: pointer;
  margin: 20px;

  
  animation: ${fadeIn} 0.3s ease-in-out;


  @media screen and (max-width: 1840px) {
    width: calc(28% - 6rem);
    height: 22rem;
    margin:15px
}

  @media screen and (max-width: 1640px) {
    width: calc(29% - 6rem);
    height: 22rem;
    margin:15px
}

  @media screen and (max-width: 1440px) {
    width: calc(22% - 20px);
    height: 21rem;
    margin:5px
}

@media screen and (max-width: 1240px) {
    width: calc(26% - 20px);
    height: 21rem;
}

@media screen and (max-width: 900px) {
    width: calc(36% - 20px);
    height: 24rem;
    margin:5px
}

.container-img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
}

  .container-title {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 180px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    transition: transform 0.3s;
    opacity: 0;
  }
  p {
    position: absolute;
    width: 100%;
    display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: 700;
    color: #e8dfdf;
    transition: opacity 0.3s;
    opacity: 0;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    p,
    .container-title {
      opacity: 1;
    }
  }


`;



export default CardRecomend;
