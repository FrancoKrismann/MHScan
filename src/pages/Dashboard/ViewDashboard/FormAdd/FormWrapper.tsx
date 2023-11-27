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
    width: fit-content;
    display: flex;
    /* border: 1px solid #e75353; */
    margin: 20px 0 20px 0;

    input {
      width: 350px;
      height: 25px;
      border-radius: 10px;
    }
  }
  textarea {
    resize: none;
    width: 20rem;
    height: 10rem;
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
`;

export default FormWrapper;
