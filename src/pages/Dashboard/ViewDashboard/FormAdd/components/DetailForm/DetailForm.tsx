import { DataViewDetails } from "@/types";
import styled from "styled-components";
import { ChangeEvent } from "react";
import { IoIosClose } from "react-icons/io";
import FormWrapper from "../../FormWrapper";

interface DetailInputsProps {
  detail: DataViewDetails["detail"];
  handleDetailChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleAddGenres: (event: ChangeEvent<HTMLSelectElement>) => void;
  genreOptions: string[];
  TypeSelect: string[];
  StatusSelect: string[];
}

const DetailForm: React.FC<DetailInputsProps> = ({
  detail,
  handleDetailChange,
  handleAddGenres,
  genreOptions,
  TypeSelect,
  StatusSelect,
}) => {
  
  const {
    alternative,
    artist,
    author,
    description,
    genre,
    releaser,
    status,
    type,
  } = detail;
  
  return (
    <FormWrapper>
      <DetailFormStl>
      <div className="div-detailInput-alternative">
          <label>Titulo alternativo</label>
          <input
            type="text"
            placeholder="Titulo alternativo"
            name="alternative"
            onChange={(e) => handleDetailChange(e)}
            value={alternative}
          />
      </div>
      <div className="div-detailInput-author">
          <label>Autor</label>
          <input
            type="text"
            placeholder="Autor"
            name="author"
            onChange={(e) => handleDetailChange(e)}
            value={author}
          />
      </div>
      <div className="div-detailInput-artist">
          <label>Artista</label>
          <input
            type="text"
            placeholder="Artista"
            name="artist"
            onChange={(e) => handleDetailChange(e)}
            value={artist}
          />
      </div>
     

      
      <div className="div-detailInput-type">
        <label>Tipo</label>
          <select name="type" value={type} onChange={(e) => handleDetailChange(e)}>
            <option value="">Seleccionar un tipo</option>
            {TypeSelect.map((option, optIndex) => (
              <option key={`type-${optIndex}`} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>
      <div className="div-detailInput-releaser">
        
          <label>Estreno</label>
          <input
            type="number"
            placeholder="Estreno"
            name="releaser"
            onChange={(e) => handleDetailChange(e)}
            value={releaser !== null ? releaser : ''}
          />
        
      </div>
      <div className="div-detailInput-status">
        <label>Estatus</label>
          <select
            name="status"
            value={status}
            onChange={(e) => handleDetailChange(e)}
          >
            <option value="">Seleccionar el estatus</option>
            {StatusSelect.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
      </div>

      <div className="div-detailInput-genres">
        <label>Generos</label>
          <select
            name="genre"
            value={genre}
            onChange={(e) => handleAddGenres(e)}
          >
            <option value="">Agregar un genero</option>
            {genreOptions.map((option, optIndex) => (
              <option key={`genre-${optIndex}`} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>

      <div className="div-textarea">
            <label>Descripcion</label>
            <textarea
              placeholder="Descripcion"
              name="description"
              defaultValue={description}
              onChange={(e) => handleDetailChange(e)}
            />
      </div>
      </DetailFormStl>
    </FormWrapper>
  );
};

const DetailFormStl = styled.div`
height: 45rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export default DetailForm;
