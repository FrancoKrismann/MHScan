import React from "react";
import styled from "styled-components";
import FormWrapper from "../../../FormWrapper";
import { DataViewDetails } from "@/types";
import { IoIosClose } from "react-icons/io";

interface PreviewDetailProps {
  detail: DataViewDetails["detail"];
  handleDeleteGenres: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const PreviewDetail: React.FC<PreviewDetailProps> = ({
  detail,
  handleDeleteGenres,
}) => {
  const {
    alternative,
    artist,
    author,
    description,
    genre,
    releaser,
    status,
    type,
  } = detail;

  const InfoData = [
    alternative,
    author,
    artist,
    releaser,
    status,
    type,
    description,
  ];

  const info = [
    "Alternative:",
    "Author(s):",
    "Artist(s):",
    "Release:",
    "Status:",
    "Type:",
    "Description:",
    "Genre:",
  ];

  return (
    <FormWrapper>
      <PreviewDetailStl>
        <div className="container-list-item">
          <ul>
            {info.map((item, index) => {
              return (
                <li key={index} className="data-item">
                  <h4>{item}</h4>
                  <div className="data">
                    <p>{InfoData[index]}</p>
                    {index === 7 && (
                      <div className="genres-add">
                        {genre.map((genreItem, idx) => (
                          <div key={idx} className="genre-added">
                            <div className="genre">
                              <span>{genreItem}</span>
                            </div>
                            <div
                              className="icon-eliminate"
                              onClick={(item) => handleDeleteGenres(item)}
                              data-value={genreItem}
                            >
                              <IoIosClose
                                size="2.4em"
                                style={{ cursor: "pointer" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div>
          <h4>Genre(s):</h4>
        </div> */}
        {/* <div className="genres-add">
        {genre.length ? (
          detail.genre.map((item, index) => {
            return (
              <div key={index} className="genres-selected">
                <div className="genre-s">
                  <span>{item}</span>
                </div>
                <div
                  className="icon-eliminate"
                  onClick={(item) => handleDeleteGenres(item)}
                  data-value={item}
                >
                  <IoIosClose size="2.4em" />
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div> */}
      </PreviewDetailStl>
    </FormWrapper>
  );
};

export const PreviewDetailStl = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  height: 90%;
  width: 80%;
  /* border: 1px solid green; */
  background-color: #262626;
  border-radius: 15px;
  padding: 10px;

  .container-list-item {
    display: flex;
    height: fit-content;
  }
  .data-item {
    margin: 5px 0 15px 0;
    /**/
    .data {
      .genres-add {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        /* justify-content: center; */
        /* align-items: center; */
        background: #303030d2;
        height: 170px;
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }

        .genre-added {
          display: flex;
          justify-content: flex-start; /* Alinear los elementos a la izquierda */
          align-items: center;
          background: #494949d2;
          border-radius: 15px;
          height: 60px;
          width: 130px;
          /* Resto de tus estilos */

          .genre {
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 1px solid green; */
            height: 100%;
            width: 100%;
            span {
              font-size: 20px;
            }
          }

          .icon-eliminate {
            /* Ajustes para el ícono de eliminación */
            margin-left: auto; /* Otros estilos que quieras aplicar */
          }
        }
      }
    }
  }
`;

export default PreviewDetail;
