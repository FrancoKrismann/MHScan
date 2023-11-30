"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FormWrapper from "../../../FormWrapper";
import { Chapters_Item } from "@/interface";

interface PreviewChaptersProps {
  SelectChapterPreview: Chapters_Item[] | null | undefined;
}

const PreviewChapters: React.FC<PreviewChaptersProps> = ({
  SelectChapterPreview,
}) => {

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Si hay un cambio en las props, lleva el scroll al inicio
		if (containerRef.current) {
		  containerRef.current.scrollTop = 0;
		}
	  }, [SelectChapterPreview]);

  return (
    <FormWrapper>
      <PreviewChaptersStl>
        <div className="container-images" ref={containerRef}>
          {SelectChapterPreview?.map((chapter) =>
            chapter.data.map((file, indexImg) => {
              if (file instanceof Blob) {
                return (
                  <div className="div-img" key={indexImg}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Image ${indexImg}`}
                    />
                  </div>
                );
              }
              return null; // O manejo para otro tipo de datos, si es relevante
            })
          )}
        </div>
      </PreviewChaptersStl>
    </FormWrapper>
  );
};

export const PreviewChaptersStl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  

  .container-images {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    height: 45rem;
    overflow-y: scroll;
	margin: 10px 0 10px 0;
	padding: 5px;
    background-color: #454545;
	&::-webkit-scrollbar-track {
        background-color: transparent;
      }
  }

  .div-img {
    /* display: flex; */
    width: 100%;
    /* height: 100%; */
    /* margin-bottom: 1px; */
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default PreviewChapters;
