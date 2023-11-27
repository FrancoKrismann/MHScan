import React from "react";
import styled from "styled-components";
import FormWrapper from "../../FormWrapper";

interface PreviewFormProps {
  title: string;
  archivo: File | null;
}

const PreviewInfo: React.FC<PreviewFormProps> = ({ title, archivo }) => {
  console.log(archivo);
  if (!archivo) {
    return <div>No hay archivo seleccionado</div>;
  }
  if (typeof archivo === "string") {
    return <div>El archivo no es válido</div>;
  }
  const urlArchivo = URL.createObjectURL(archivo);
  return (
    <FormWrapper title="Preview Form">
      <PreviewFormStl>
        <h1>Titulo: {title}</h1>
        {/* <div className="container-img"> </div> */}
        <img className="img-preview" src={urlArchivo} alt={urlArchivo} />
      </PreviewFormStl>
    </FormWrapper>
  );
};

const PreviewFormStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 80%;
  /* border: 1px solid green; */
  background-color: #262626;
  border-radius: 15px;
  padding: 10px;

  
`;

export default PreviewInfo;
