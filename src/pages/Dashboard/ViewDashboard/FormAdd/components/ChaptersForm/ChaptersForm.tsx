import React from "react";
import FormWrapper from "../../FormWrapper";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";

const ChaptersForm: React.FC = () => {
  return (
    <FormWrapper>
      <ChaptersFormStl>
        <div className="container-addChapter">
          {/* <div className="file-upload-form">
            <label htmlFor="file" className="file-upload-label">
              <div className="file-upload-design">
                <IoMdAdd size="4em" />
                <span className="browse-button">Browse file</span>
              </div>
              <input id="file" type="file" />
            </label>
          </div> */}
          <IoMdAdd size="3em" />
        </div>
        <div className="container-Chapters">
          abrir componente y completar la info:
          numero del capitulo y sus imagenes,
          luego de eso generar un objeto y pushearlo al array de chapters
        </div>
      </ChaptersFormStl>
    </FormWrapper>
  );
};

const ChaptersFormStl = styled.div`
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

    .file-upload-form {
      width: 90%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #454545;
      border-radius: 15px;
      box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
    }
    .file-upload-label input {
      display: none;
    }
    .file-upload-label svg {
      height: 50px;
      fill: rgb(247, 247, 247);
      margin-bottom: 20px;
    }
    .file-upload-label {
      cursor: pointer;
      width: 100%;
      padding: 30px 0 30px 0;
      border-radius: 40px;
      border: 2px rgb(82, 82, 82);
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

  .container-Chapters {
    display: flex;
    border: 1px solid grey;
    height: 80%;
  }
`;
export default ChaptersForm;
