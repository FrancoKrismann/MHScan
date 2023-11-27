import React from "react";
import styled from "styled-components";
import FormWrapper from "../../../FormWrapper";
import { DataViewDetails } from "@/types";

interface PreviewDetailProps {
  detail: DataViewDetails["detail"];
}

const PreviewDetail: React.FC<PreviewDetailProps> = ({ detail }) => {
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
    genre.join(", "),
    releaser,
    status,
    type,
    description,
  ];

  const info = [
    "Alternative:",
    "Author(s):",
    "Artist(s):",
    "Genre(s):",
    "Release:",
    "Status:",
    "Type:",
    "Description:"
  ];

  return (
    <FormWrapper title="Preview Detail">
      <PreviewDetailStl>
	  <div className="container-list-item">
        <ul>
          {info.map((item, index) => {
            return (
              <li key={index}>
                <h4>{item}</h4>
                <p>{InfoData[index]}</p>
              </li>
            );
          })}
        </ul>
      </div>
	  </PreviewDetailStl>
    </FormWrapper>
  );
};

export const PreviewDetailStl = styled.div`
  border: 1px solid green;
  width: 100%;
  height: 100%;
`;

export default PreviewDetail;
