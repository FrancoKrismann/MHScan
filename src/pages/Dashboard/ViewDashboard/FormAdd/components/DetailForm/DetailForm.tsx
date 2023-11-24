import { DataViewDetails } from "@/types";
import styled from "styled-components";
import { ChangeEvent } from "react";
import { IoIosClose } from "react-icons/io";
import FormWrapper from "../../FormWrapper";

interface DetailInputsProps {
  detail: DataViewDetails["detail"];
  index: number;
  handleDetailChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => void;
  handleDeleteGenres: (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleAddGenres: (
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
  genreOptions: string[];
  TypeSelect: string[];
  StatusSelect: string[];
  handleType: (event: ChangeEvent<HTMLSelectElement>, index: number) => void;
  handleStatus: (event: ChangeEvent<HTMLSelectElement>, index: number) => void;
}

const DetailForm: React.FC<DetailInputsProps> = ({
  detail,
  handleDetailChange,
  handleDeleteGenres,
  handleAddGenres,
  genreOptions,
  TypeSelect,
  StatusSelect,
  handleType,
  handleStatus,
}) => {
  return (
    <FormWrapper title="Detail">
      <div className="div-detailInput-alternative">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            <label>Titulo alternativo</label>
            <input
              type="text"
              placeholder="Titulo alternativo"
              name="alternative"
              onChange={(e) => handleDetailChange(e, index)}
              value={detail.alternative}
            />
          </div>
        ))}
      </div>
      <div className="div-detailInput-author">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            <label>Autor</label>

            <input
              type="text"
              placeholder="Autor"
              name="author"
              onChange={(e) => handleDetailChange(e, index)}
              value={detail.author}
            />
          </div>
        ))}
      </div>
      <div className="div-detailInput-artist">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            <label>Artista</label>
            <input
              type="text"
              placeholder="Artista"
              name="artist"
              onChange={(e) => handleDetailChange(e, index)}
              value={detail.artist}
            />
          </div>
        ))}
      </div>
      <div className="div-detailInput-genres">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            
            <select
              name="genre"
              value={detail.genre}
              onChange={(e) => handleAddGenres(e, index)}
            >
              <option value="">Agregar un genero</option>
              {genreOptions.map((option, optIndex) => (
                <option key={`genre-${optIndex}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {detail.map((detail, indexCero) => (
        <div key={indexCero} className="genres-add">
          {detail.genre.length ? (
            detail.genre.map((item, index) => {
              return (
                <div key={index} className="genres-selected">
                  <div className="genre-s">
                    <span>{item}</span>
                  </div>
                  <div
                    className="icon-eliminate"
                    onClick={(item) => handleDeleteGenres(item, indexCero)}
                    data-value={item}
                  >
                    <IoIosClose size="2.4em" />
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      ))}
      <div className="div-detailInput-type">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            <select
              name="type"
              value={detail.type}
              onChange={(e) => handleType(e, index)}
            >
              <option value="">Seleccionar un tipo</option>
              {TypeSelect.map((option, optIndex) => (
                <option key={`type-${optIndex}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="div-detailInput-releaser">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            <label>Estreno</label>
            <input
              type="text"
              placeholder="Estreno"
              name="releaser"
              onChange={(e) => handleDetailChange(e, index)}
              value={detail.releaser !== null ? detail.releaser.toString() : ""}
            />
          </div>
        ))}
      </div>
      <div className="div-detailInput-status">
        {detail.map((detail, index) => (
          <div key={`detail-${index}`}>
            <select
              name="status"
              value={detail.status}
              onChange={(e) => handleStatus(e, index)}
            >
              <option value="">Seleccionar el estatus</option>
              {StatusSelect.map((option, optIndex) => (
                <option key={`type-${optIndex}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div>
        <div>
          {detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <label>Descripcion</label>
              <textarea
                placeholder="Descripcion"
                name="description"
                defaultValue={detail.description}
                onChange={(e) => handleDetailChange(e, index)}
              />
            </div>
          ))}
        </div>
      </div>
    </FormWrapper>
  );
};

const DetailInputsStl = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100%;
  width: 100%;

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
`;

export default DetailForm;
