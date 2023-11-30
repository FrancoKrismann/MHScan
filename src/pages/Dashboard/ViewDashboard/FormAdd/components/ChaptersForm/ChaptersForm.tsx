import React, { useState } from "react";
import FormWrapper from "../../FormWrapper";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { DataViewChapters } from "@/types";
import { AddChapter } from "./AddChapter";
import { Chapters_Item } from "@/interface";
import { IoMdClose } from "react-icons/io";

interface ChaptersFormProps {
  chaptersArray: DataViewChapters["chapters"];
  handleAddChapter: (newChapter: Chapters_Item) => void;
  handleSelectChapterPreview:(e: React.MouseEvent<HTMLDivElement>) => void;
}
const ChaptersForm: React.FC<ChaptersFormProps> = ({
  chaptersArray,
  handleAddChapter,
  handleSelectChapterPreview
}) => {
  const [ActiveComponent, setActiveComponent] = useState(false);

  const [NewChapter, setNewChapter] = useState<Chapters_Item>({
    chapter: 0,
    data: [],
  });
  const handleComponent = (boolValue: boolean) => {
    setActiveComponent(boolValue);
  };

  const HandleCreateChapter = (): void | null => {
    //Validar
    if (!NewChapter.chapter && !NewChapter.data)
      return console.log("error: Cannot create");

    handleAddChapter(NewChapter);
    setActiveComponent(false);
    setNewChapter({ chapter: 0, data: [] });
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
            NewChapter={NewChapter}
            setNewChapter={setNewChapter}
            handleComponent={handleComponent}
            HandleCreateChapter={HandleCreateChapter}
          />
        )}
        <div className="container-Chapters">
          {chaptersArray.length > 0 ? (
            chaptersArray.map((chapter, index) => (
              <div className="div-chapter" key={index} >
                <div className="container-items" data-value={chapter.chapter} onClick={(e) => handleSelectChapterPreview(e)}>
                  <h4>Capitulo: {chapter.chapter}</h4>
                <p>Imagenes: {chapter.data.length}</p>
                </div>
                
                <div className="icon-deleted">
                <IoMdClose size="2em" />
                </div>
              </div>
            ))
          ) : (
            <div className="div-notChapters">
              <h3>Agrega capitulos</h3>
            </div>
          )}
        </div>
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
  justify-content: flex-start;
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
  .div-notChapters {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    /* border: 1px solid red; */
  }

  .container-Chapters {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #454545;
    border-radius: 20px;
    height: 80%;
    width: 80%;
    margin-top: 20px;
    overflow: auto;

    .div-chapter {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 90%;
      height: 60px;
      background-color: #363535;
      margin: 10px 0 20px 0;
      cursor: pointer;
      border-radius: 15px;

      .container-items {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
      .icon-deleted {
        display: flex;
        align-self: flex-end;
        justify-content: center;
        align-items: center;
        border-left: 2px solid #fff;
        /* border: 1px solid #fff; */
        width: 80px;
        height: 100%;
      }
    }
  }
`;
export default ChaptersForm;
