import { DataViewType } from "@/interface";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => {
    const { name, value } = e.currentTarget;
    const newDetail = [...formValue.detail];

    const parsedValue = value !== "" ? parseFloat(value) : null;

    const updatedDetail = {
      ...newDetail[index],
      [name]: name === "releaser" ? parsedValue : value,
    };
    newDetail[index] = updatedDetail;

    setFormValue({
      ...formValue,
      detail: newDetail,
    });
  };

  const handleAddGenres = ( e: React.ChangeEvent<HTMLSelectElement>,index: number) => {
    const { value } = e.currentTarget;
    const newDetail = [...formValue.detail];
      
    newDetail[index] = {
      ...newDetail[index],
      genre: [...(newDetail[index].genre || []), value],
    };
    
    setFormValue({
      ...formValue,
      detail: newDetail,
    });
    
  }

  const handleDeleteGenres = () => {
    
  }

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

  const genreOptions = [
    "Acción",
    "Adult",
    "Ángeles",
    "Anime",
    "Apocalíptico",
    "Artes Marciales",
    "Aventura",
    "Bucle Temporal",
    "Cartoon",
    "Comedia",
    "Comic",
    "Cooking",
    "Demonios",
    "Deportes",
    "Detective",
    "Doujinshi",
    "Drama",
    "Ecchi",
    "Fantasía",
    "Gender Bender",
    "Harem",
    "Hermes Scans",
    "Histórico",
    "Horror",
    "Josei",
    "Live action",
    "Magia",
    "Mature",
    "Mazmorras",
    "Mecha",
    "Murim",
    "Mystery",
    "One shot",
    "Psicológico",
    "Recomendado",
    "Reencarnación",
    "Regresión",
    "Retornardo",
    "Romance",
    "School Life",
    "Sci-fi",
    "Seinen",
    "Shoujo",
    "Shoujo Ai",
    "Shounen",
    "Shounen Ai",
    "Sistema",
    "Slice of Life",
    "Smut",
    "Soft Yaoi",
    "Soft Yuri",
    "Supernatural",
    "Tragedia",
    "Vida Escolar",

    "Yaoi",
    "Yuri",
  ];

  const TypeSelect = ["Manga", "Manhua", "Manhwa", "Webtoon"];

  console.log(formValue.detail);

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
          <HiddenInput type="file" onChange={handleFileChange} />
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
                name="author"
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
                name="artist"
                onChange={(e) => handleDetailChange(e, index)}
                value={detail.artist}
              />
            </div>
          ))}
        </div>
        <div className="div-detailInput-genres">
          {formValue.detail.map((detail, index) => (
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
        {formValue.detail.map((detail, index) => (
          <div key={index} className="genres-add">
            {detail.genre.length ? (
              detail.genre.map((item, index) => {
                return (
                  <div key={index} className="genres-selected">
                    <div className="genre-s">
                      <span>{item}</span>
                    </div>
                    <div className="icon-eliminate">
                      <IoIosClose size="2em" />
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
        <div className="div-detailInput-releaser">
          {formValue.detail.map((detail, index) => (
            <div key={`detail-${index}`}>
              <input
                type="text"
                placeholder="Estreno"
                name="releaser"
                onChange={(e) => handleDetailChange(e, index)}
                value={
                  detail.releaser !== null ? detail.releaser.toString() : ""
                }
              />
            </div>
          ))}
        </div>
        <div className="div-detailInput-status">
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
          <div>
            {formValue.detail.map((detail, index) => (
              <div key={`detail-${index}`}>
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

        {/* {formValue.chapters.map((chapter, index) => (
          <div key={`chapter-${index}`}>
            <input
              type="number"
              placeholder="Chapter"
              name="chapter"
              onChange={addChapter}
              value={chapter.chapter || ""}
            />
          </div>
        ))} */}
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

  .genres-add {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    
    width: 30rem;
    /* height: 8rem; */
    border: 1px solid #e75353;

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
