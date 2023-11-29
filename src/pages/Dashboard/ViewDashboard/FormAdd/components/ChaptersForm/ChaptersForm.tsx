import React, { useState } from "react";
import FormWrapper from "../../FormWrapper";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { DataViewChapters } from "@/types";
import { AddChapter } from "./AddChapter";

interface ChaptersFormProps {
  chapters: DataViewChapters["chapters"];
}
const ChaptersForm: React.FC<ChaptersFormProps> = ({ chapters }) => {
  const [ActiveComponent, setActiveComponent] = useState(false);

  console.log(ActiveComponent);

  const handleComponent = (boolValue: boolean) => {
    setActiveComponent(boolValue);
  };

  return (
    <FormWrapper>
      <ChaptersFormStl>
        <div
          className="container-addChapter"
          onClick={() => handleComponent(true)}
        >
          <IoMdAdd size="3em" />
        </div>
        {ActiveComponent && (
          <AddChapter
            ChaptersArray={chapters}
            handleComponent={handleComponent}
          />
        )}

        <div className="container-Chapters">{chapters.length}</div>
      </ChaptersFormStl>
    </FormWrapper>
  );
};
// abrir componente y completar la info:
//           numero del capitulo y sus imagenes,
//           luego de eso generar un objeto y pushearlo al array de chapters
const ChaptersFormStl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .container-addChapter {
    display: flex;
    /* border: 1px solid black; */
    width: 80%;
    justify-content: center;
    align-items: center;
    background-color: #454545;
    height: 10rem;
    border-radius: 20px;
    box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
    cursor: pointer;
  }

  .container-Chapters {
    display: flex;
    border: 1px solid grey;
    height: 80%;
  }
`;
export default ChaptersForm;
