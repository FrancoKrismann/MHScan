"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { Chapters_Item } from "@/interface";

interface AddChapterProps {
  handleComponent: (boolValue: boolean) => void;
  setNewChapter: React.Dispatch<React.SetStateAction<Chapters_Item>>;
  NewChapter: Chapters_Item;
  HandleCreateChapter: () => void;
}

const AddChapter: React.FC<AddChapterProps> = ({
  handleComponent,
  setNewChapter,
  NewChapter,
  HandleCreateChapter
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Acceder al estado local newChapter y actualizarlo según los cambios en los inputs

    if (e.target.type === 'number') {
      // Manejar el cambio para input tipo number
      const newValue = parseInt(e.target.value, 10);
      setNewChapter(prevChapter => ({
        ...prevChapter,
        chapter: isNaN(newValue) ? 0 : newValue, // Manejar posibles errores al convertir a número
      }));
    } else if (e.target.type === 'file') {
      const files = e.target.files;

      if (files) {
        const fileList: File[] = Array.from(files); // Convertir a array solo si 'files' no es null
        // Iterar sobre cada archivo (imagen)
        setNewChapter(prevChapter => ({
          ...prevChapter,
          data:fileList // Manejar posibles errores al convertir a número
        }));
        
      }
    }
    }
    
  

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isClickInsideComponent =
        componentRef.current && componentRef.current.contains(e.target as Node);
      const isClickOnAddChapterButton =
        e.target &&
        (e.target as HTMLElement).classList.contains("container-addChapter");

      if (!isClickInsideComponent && !isClickOnAddChapterButton) {
        console.log("Se cierra");
        handleComponent(false); // Si el click es fuera del componente y no es el botón de AddChapter, se cierra
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleComponent]);

  return (
    <AddChapterStl>
      <div className="container-data" ref={componentRef}>
        <div className="decoration-div">
          <IoIosCloseCircle size="3em" onClick={() => handleComponent(false)} />
        </div>
        <div className="data">
          <div className="div-input">
            <label>Numero del capitulo</label>
            <input
              type="number"
              className="chapter-number"
              min={(NewChapter.chapter || 0) + 1}
              value={NewChapter.chapter}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <label htmlFor="file" className="file-upload-label">
            <div className="file-upload-design">
              <svg viewBox="0 0 640 512" height="1em">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
              </svg>
              <p>Drag and Drop</p>
              <p>or</p>
              <span className="browse-button">Browse file</span>
            </div>
            <input name="data" id="data" type="file" multiple onChange={(e) => handleInputChange(e)}/>
          </label>
        </div>
        <button type="button" onClick={HandleCreateChapter}>Agregar capitulo</button>
      </div>
    </AddChapterStl>
  );
};

const AddChapterStl = styled.div`
  position: fixed;
  width: 130vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-data {
    width: 20%;
    height: 25rem;
    background-color: #363535;
    border-radius: 20px;
    .decoration-div {
      display: flex;
      justify-content: flex-end;
      background: #711ccb;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      width: 100%;
      height: 50px;

      .react-icons {
        cursor: pointer;
        margin-right: 5px;
      }
    }

    .data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80%;

      .div-input {
        display: flex;
        flex-direction: column;
        height: 100px;
        margin-top: 50px;
        /* border: 1px solid green; */
        label {
          align-self: flex-start;
          margin-bottom: 10px;
        }
        .chapter-number {
          width: 350px;
          height: 35px;
          border-radius: 10px;
          border: transparent;
        }
      }

      .file-upload-label input {
        display: none;
      }
      .file-upload-label svg {
        height: 50px;
        fill: rgb(247, 247, 247);
        margin-bottom: 10px;
      }
      .file-upload-label {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(32, 32, 32, 0.5);
        border-radius: 15px;
        width: 60%;
        padding: 20px 0 20px 0;
        border-radius: 40px;
        border: 2px rgb(133, 132, 132, 0.4);
        box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);

        cursor: pointer;
      }
      .file-upload-design {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }
      .browse-button {
        background-color: rgb(82, 82, 82);
        padding: 5px 15px;
        border-radius: 10px;
        color: white;
        transition: all 0.3s;
      }
      .browse-button:hover {
        background-color: rgb(14, 14, 14);
      }
    }
  }
`;

export default AddChapter;
