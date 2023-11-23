import { DataViewType } from "@/interface";
import React, {  useRef, useState } from "react";
import styled from "styled-components";
import DetailInputs from "../DetailInputs/DetailInputs";

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

  const handleAddGenres = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newDetail = [...formValue.detail];

    if (!newDetail[index].genre.includes(value)) {
      newDetail[index] = {
        ...newDetail[index],
        genre: [...(newDetail[index].genre || []), value],
      };
      setFormValue({
        ...formValue,
        detail: newDetail,
      });
    } else {
      return null;
    }
  };

  const handleDeleteGenres = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const value = e.currentTarget.getAttribute("data-value");
    const newDetail = [...formValue.detail];

    const updatedGenres = newDetail[index].genre.filter(
      (genre) => genre !== value
    );
    newDetail[index] = {
      ...newDetail[index],
      genre: updatedGenres,
    };
    setFormValue({
      ...formValue,
      detail: newDetail,
    });
  };

  const handleType = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newDetail = formValue.detail;

    newDetail[index] = {
      ...newDetail[index],
      type: value,
    };
    setFormValue({
      ...formValue,
      detail: newDetail,
    });
  };

  const handleStatus = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.currentTarget;
    const newDetail = formValue.detail;

    newDetail[index] = {
      ...newDetail[index],
      status: value,
    };
    setFormValue({
      ...formValue,
      detail: newDetail,
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

  const StatusSelect = ["Ongoing", "Completed", "Hiatus", "Canceled"];

  console.log(formValue);

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

        {/* <DetailInputs
          index={0}
          detail={formValue.detail}
          handleDetailChange={handleDetailChange}
          handleAddGenres={handleAddGenres}
          handleDeleteGenres={handleDeleteGenres}
          genreOptions={genreOptions}
          TypeSelect={TypeSelect}
          StatusSelect={StatusSelect}
          handleType={handleType}
          handleStatus={handleStatus}
        /> */}
      </form>
    </FormularioStl>
  );
};

const FormularioStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border: 1px solid #2c1b1b;
  align-items: center;

  textarea {
    resize: none;
    width: 20rem;
    height: 15rem;
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
