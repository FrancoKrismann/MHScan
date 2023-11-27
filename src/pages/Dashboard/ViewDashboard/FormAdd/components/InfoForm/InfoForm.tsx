import styled from "styled-components";
import FormWrapper from "../../FormWrapper";
// import DetailInputs from "../DetailInputs/DetailInputs";

interface FormularioProps {
  handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickFile: (e: React.MouseEvent<HTMLLabelElement>) => void;
  title: string;
}

const InfoForm: React.FC<FormularioProps> = ({
  handleClickFile,
  handleFile,
  handleTitle,
  title,
}) => {
  return (
    <FormWrapper title="Info" >
      <div className="div-titleInput">
        <label>Titulo</label>
        <input
        autoFocus
        required
          type="text"
          placeholder="Titulo"
          onChange={handleTitle}
          value={title}
        />
      </div>
      <label>Portada</label>
      <FileInputWrapper onClick={handleClickFile}>
        <AddSymbol>+</AddSymbol>
        <HiddenInput type="file" onChange={handleFile} />
      </FileInputWrapper>
    </FormWrapper>
  );
};



const FileInputWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 100px;
  border: 1px solid #ccc;
  background-color: #383737;

  border-radius: 5px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #262626;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const AddSymbol = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;

export default InfoForm;
