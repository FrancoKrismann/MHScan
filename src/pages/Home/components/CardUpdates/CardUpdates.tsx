import React from "react";
import styled from "styled-components";

interface CardUpdatesProps {
  id: string;
  title: string;
  image: string;
  key: string;
}

const CardUpdates: React.FC<CardUpdatesProps> = ({ id, title, image, key }) => {
  return (
    <CardUpdatesStl key={key}>
      <img src={image} alt={id} />
      <div className="container-title">
        <p>{title}</p>
      </div>
    </CardUpdatesStl>
  );
};

const CardUpdatesStl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border: 1px solid #fff;
  border-radius: 30px;
  background: #212121;
  box-shadow: 5px 5px 20px rgb(25, 25, 25), -1px -10px 40px rgb(60, 60, 60);
  overflow: hidden;
  cursor: pointer;

  width: calc(26% - 5rem);
  height: 22rem;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }

  .container-title {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 180px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  }
`;

export default CardUpdates;
