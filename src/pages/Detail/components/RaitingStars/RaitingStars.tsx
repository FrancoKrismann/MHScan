import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

// interface RaitingStarsProps {}

const RaitingStars: React.FC = () => {
  const [raiting, setRaiting] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <RaitingStarsStl>
      <div className="container-raiting">
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ([...Array(5)] as number[]).map((star, index) => {
            const currentRaiting: number = index + 1;
            return (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRaiting}
                  onClick={() => {
                    setRaiting(currentRaiting);
                  }}
                />
                <FaStar
                  size="45"
                  color={
                    currentRaiting <= (hover ?? raiting ?? 0) ? "#ee225c" : "#e4e5e9"
                  }
                  onMouseEnter={() => {
                    setHover(currentRaiting);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                />
              </label>
            );
          })
        }
      </div>
      <div className="container-raiting-number">
        <p>{raiting}</p>
      </div>
    </RaitingStarsStl>
  );
};

export const RaitingStarsStl = styled.div`
  display: flex;
  /* justify-content: space-around; */
  justify-content: center;
  align-items: center;
  /* border: 1px solid #ea0b0b; */
  width: 70%;
  margin-top: 15px;
  .container-raiting {
    /* border: 1px solid #baf203; */

    /* width: 45%; */
  }

  .container-raiting-number {
    /* border: 1px solid #157c69; */

    width: 4rem;
    display: flex;
    align-items: center;
    p {
      font-size: 30px;
      margin: 0 0 0 20px;
    }
  }

  input[type="radio"] {
    display: none;
  }

  .react-icons {
    cursor: pointer;
  }
`;

export default RaitingStars;
