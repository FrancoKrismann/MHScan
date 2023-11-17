import { DataViewType } from "@/interface";
import React, { useRef, useState } from "react";
import styled from "styled-components";

interface FormularioProps {}

const Formulario: React.FC<FormularioProps> = ({}) => {
  const [formValue, setFormValue] = useState<DataViewType>({
    title: "",
    href: "",
    image: null,
    chapters: [
      {
        chapter: null,
        data: [],
      },
    ],
    detail: [
      {
        alternative: "",
        author: "",
        artist: "",
        genre: [],
        type: "",
        releaser: null,
        status: "",
        description: [],
      },
    ],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log("Archivo seleccionado:", file);
    if (file) {
      // Aquí puedes manejar el archivo seleccionado (por ejemplo, subirlo)
      setFormValue({
        ...formValue,
        image: file,
      });
    }
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Title = e.target.value;
    const Href = Title.replace(/\s/g, "-");
    console.log(Title);

    setFormValue({
      ...formValue,
      title: Title,
      href: Href,
    });
  };

  const handleDetailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newDetail = [...formValue.detail];
    newDetail[index] = {
      ...newDetail[index],
      [e.target.name]: e.target.value,
    };
    setFormValue({
      ...formValue,
      detail: newDetail,
    });
  };

  const addChapter = () => {
    const updatedChapters = [...formValue.chapters];
    updatedChapters.push({
      chapter: null,
      data: [],
    });
    setFormValue({
      ...formValue,
      chapters: updatedChapters,
    });
  };

  return (
    <FormularioStl>
      <form>
        <div className="div-titleInput">
          <input
            type="text"
            placeholder="Titulo"
            onChange={handleTitle}
            value={formValue.title}
          />
        </div>

        <FileInputWrapper onClick={handleFileClick}>
          <AddSymbol>+</AddSymbol>
          <HiddenInput
            type="file"
            onChange={handleFileChange}
          />
        </FileInputWrapper>

        {/* Detalles */}
        <div className="div-detailInput-alternative">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Titulo alternativo"
                name="alternative"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.alternative}
              />
              {/* Agregar más campos para las propiedades de Detail según sea necesario */}
            </div>
          ))}
        </div>
        <div className="div-detailInput-author">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Autor"
                name="autor"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.author}
              />
            </div>
          ))}
        </div>
        <div className="div-detailInput-artist">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Artista"
                name="artista"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.artist}
              />
            </div>
          ))}
        </div>
		<div className="div-detailInput-genres">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Generos"
                name="alternative"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.genre}
              />
            </div>
			//Agrager select para generos
          ))}
        </div>
		<div className="div-detailInput-artist">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Tipo de comic"
                name="type"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.type}
              />
            </div>
          ))}
        </div>
		<div className="div-detailInput-artist">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Estreno"
                name="releaser"
                // onChange={}
                // value={detail.releaser}
              />
            </div>
          ))}
        </div>
		<div className="div-detailInput-artist">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Estatus"
                name="status"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.status}
              />
            </div>
          ))}
        </div>
		<div>
			<textarea/>
		</div>

        {/* Capítulos */}
        {formValue.chapters.map((chapter, index) => (
          <div key={`chapter-${index}`}>
            <input
              type="number"
              placeholder="Chapter"
              name="chapter"
              onChange={addChapter}
              value={chapter.chapter || ""}
            />
            {/* Agregar más campos para las propiedades de Chapters según sea necesario */}
          </div>
        ))}
      </form>
    </FormularioStl>
  );
};

const FormularioStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border: 1px solid #ccc;
  align-items: center;
  margin-top: 20px;

  .div-titleInput,
  .div-detailInput-alternative,
  .div-detailInput-author,
  .div-detailInput-artist,
  .div-detailInput-genres {
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

export default Formulario;
