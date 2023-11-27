import { ReactNode } from "react";
import styled from "styled-components";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <FormWrapperStl>
      <h2>{title}</h2>
      <div className="component">{children}</div>
    </FormWrapperStl>
  );
};

const FormWrapperStl = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 100%;
  height: 100%;

  /* border: 1px solid #5a5858d2; */
  .component {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .img-preview {
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
  .div-detailInput-status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #e75353; */
    margin: 20px 0 10px 0;

    label {
      align-self: flex-start;
      margin-bottom: 10px;
    }

    input {
      width: 350px;
      height: 35px;
      border-radius: 10px;
      border: transparent;
    }
  }
  .div-textarea {
    textarea {
      /* resize: none;
    width: 20rem;
    height: 10rem; */
      width: 100%;
      padding: 12px 16px;
      border-radius: 8px;
      resize: none;
      color: #fff;
      height: 130px;
      border: 1px solid #414141;
      background-color: transparent;
      font-family: inherit;
    }
  }

  .genres-add {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    width: 32rem;
    height: fit-content;
    background: #5a5858d2;
    border-radius: 20px;
    /* border: 1px solid #e75353; */

    .genres-selected {
      display: flex;
      align-items: center;
      /* border: 1px solid #9fe753; */
      /* width: 8rem; */
      height: 3rem;
      border-radius: 10px;
      background: #615f5fd2;
      padding: 3px;
      /* margin: 5px; */

      .icon-eliminate {
        display: flex;
        justify-content: flex-end;
        /* align-items: center; */

        height: 100%;
        /* border: 1px solid #9fe753; */
        /* width: 30%; */
      }
      .genre-s {
        display: flex;
        justify-content: center;
        /* width: 70%; */
        margin: 0 10px 0 10px;

        span {
          font-size: 20px;
        }
      }
    }
    .react-icons {
      /* background: #ee0905; */
      border-radius: 50%;
      padding: 0;
      cursor: pointer;
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
