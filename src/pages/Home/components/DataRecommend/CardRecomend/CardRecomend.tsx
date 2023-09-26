import React from "react";
import styled from "styled-components";

interface CardRecomendProps {
  id: string;
  title: string;
  image: string;
}

const CardRecomend: React.FC<CardRecomendProps> = ({ id, title, image }) => {
  return (
    <CardRecomendStl key={id}>
      <img src={image} alt={id} />
      <div className="container-title">
        {/* <h4></h4> */}
        <p>{title}</p>
      </div>
    </CardRecomendStl>
  );
};

const CardRecomendStl = styled.div`
  /* border: 1px solid #fff; */
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: calc(23% - 6rem);
  height: 19rem;
  /* height: 20rem; */
  border-radius: 30px;
  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  overflow: hidden;
  cursor: pointer;
  margin: 20px;


  @media screen and (max-width: 1640px) {
    width: calc(28% - 6rem);
    height: 20rem;
    margin:15px
}

  @media screen and (max-width: 1440px) {
    width: calc(20% - 20px);
    height: 17rem;
    margin:5px
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
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
