import { ReactNode } from "react";
import styled from "styled-components";

interface FormWrapperProps {
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return <FormWrapperStl>{children}</FormWrapperStl>;
};

const FormWrapperStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* border: 1px solid #5a5858d2; */

  .div-infoTitle {
    display: flex;
    flex-direction: column;
  }

  .img-preview,
  .container-img {
    width: 70%;
    height: 80%;
    border-radius: 15px;

    object-fit: cover;
  }
  .div-titleInput,
  .div-detailInput-alternative,
  .div-detailInput-author,
  .div-detailInput-artist,
  .div-detailInput-genres,
  .div-detailInput-type,
  .div-detailInput-releaser,
  .div-detailInput-status,
  .div-textarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #e75353; */
    margin: 5px 0 5px 0;

    textarea {
      width: 20rem;
      padding: 12px 16px;
      border-radius: 8px;
      resize: none;
      color: #fff;
      height: 130px;
      border: 1px solid #414141;
      background-color: transparent;
      font-family: inherit;
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }
    label {
      align-self: flex-start;
      margin-bottom: 10px;
    }

    input,
    select {
      width: 350px;
      height: 35px;
      border-radius: 10px;
      border: transparent;
    }
  }

  .custum-file-upload {
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #e8e8e8;
    background-color: #212121;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -70px #e8e8e8;
  }

  .custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .icon svg {
    height: 80px;
    fill: #e8e8e8;
  }

  .custum-file-upload .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .text span {
    font-weight: 400;
    color: #e8e8e8;
  }

  .custum-file-upload input {
    display: none;
  }
`;

export default FormWrapper;
