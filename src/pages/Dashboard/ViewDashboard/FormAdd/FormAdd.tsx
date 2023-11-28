import React, { useRef, useState } from "react";
import styled from "styled-components";
import Stepper from "./components/StepperComponent/Stepper";
import { DataViewType } from "@/interface";
import { useMultiStepForm } from "@/hooks/useMultiStepsForm";
import InfoForm from "./components/InfoForm/InfoForm";
import DetailForm from "./components/DetailForm/DetailForm";
import ChaptersForm from "./components/ChaptersForm/ChaptersForm";
import PreviewInfo from "./components/PreviewForm/PreviewInfo";
import { PreviewDetail } from "./components/PreviewForm/PreviewDetail";
import { PreviewChapters } from "./components/PreviewForm/PreviewChapters";

const INITIAL_DATA: DataViewType = {
  title: "",
  href: "",
  image: null,
  chapters: [
    {
      chapter: null,
      data: [],
    },
  ],
  detail: {
    alternative: "",
    author: "",
    artist: "",
    genre: [],
    type: "",
    releaser: null,
    status: "",
    description: "",
  },
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

const FormAdd: React.FC = ({}) => {
  const [data, setData] = useState(INITIAL_DATA);

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
      setData({
        ...data,
        image: file,
      });
    }
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Title = e.target.value;
    const Href = Title.replace(/\s/g, "-");
    console.log(Title);

    setData({
      ...data,
      title: Title,
      href: Href,
    });
  };

  const handleDetailChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.currentTarget;
    const newDetail = { ...data.detail };

    const updatedDetail = {
      ...newDetail,
      [name]: value,
    };
    newDetail[name] = updatedDetail[name];

    setData({
      ...data,
      detail: newDetail,
    });
  };

  const handleAddGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    const newDetail = { ...data.detail };

    if (!newDetail.genre.includes(value)) {
      const updatedGenres = [...newDetail.genre, value];

      const updatedDetail = {
        ...newDetail,
        genre: updatedGenres,
      };

      setData({
        ...data,
        detail: updatedDetail,
      });
    } else {
      return null;
    }
  };

  const handleDeleteGenres = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.getAttribute("data-value");
    console.log(value);
    
    const newDetail = { ...data.detail };
    const updatedGenres = newDetail.genre.filter((genre) => genre !== value);

    const updatedDetail = {
      ...newDetail,
      genre: updatedGenres,
    };
    setData({
      ...data,
      detail: updatedDetail,
    });
  };

  const stepsComponents = [
    {
      name: "InfoForm",
      componentForm: (
        <InfoForm
          handleFile={handleFileChange}
          handleTitle={handleTitle}
          handleClickFile={handleFileClick}
          title={data.title}
        />
      ),
      componentPreview: <PreviewInfo title={data.title} archivo={data.image} />,
    },
    {
      name: "DetailForm",
      componentForm: (
        <DetailForm
          detail={data.detail}
          handleDetailChange={handleDetailChange}
          handleAddGenres={handleAddGenres}
          genreOptions={genreOptions}
          TypeSelect={TypeSelect}
          StatusSelect={StatusSelect}
        />
      ),
      componentPreview: (
        <PreviewDetail
          detail={data.detail}
          handleDeleteGenres={handleDeleteGenres}
        />
      ),
    },
    {
      name: "ChaptersForm",
      componentForm: <ChaptersForm />,
      componentPreview: <PreviewChapters />,
    },
  ];
  const {
    back,
    currentStepIndex,
    next,
    componentForm,
    componentPreview,
    steps,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(stepsComponents);
  return (
    <FormAddStl>
      <div className="container-Stepper">
        <Stepper steps={steps} currentStepIndex={currentStepIndex} />
      </div>
      <div className="buttons-form">
        <button
          type="button"
          disabled={!isFirstStep}
          onClick={back}
          style={{
            opacity: isFirstStep ? "1" : "0.5",
            // Otros estilos
          }}
        >
          Atras
        </button>

        <button type="button" onClick={next}>
          {isLastStep ? "Finalizar" : "Siguiente"}
        </button>
      </div>
      <div className="div-container">
        <div className="container-addForm">
          <form>{componentForm}</form>
        </div>
        <div className="container-preview">{componentPreview}</div>
      </div>
    </FormAddStl>
  );
};

const FormAddStl = styled.div`
  display: flex;

  flex-direction: column;
  height: 100%;
  /* width: 100%; */
  .buttons-form {
    width: 100%;
    /* height: 10%; */
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    border: 1px solid #ef8383;

    button {
      width: 6rem;
      padding: 10px;
      background: #e03de6;
      border-radius: 15px;
      cursor: pointer;
    }
  }
  .container-Stepper {
    width: 100%;
    height: 15%;
  }
  .div-container {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* border: 1px solid #09cfe9; */

    .container-addForm {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 95%;
      width: 50%;
      /* border: 1px solid #fff; */
      border-right: 1px solid #fff;
      /* overflow: auto; */

      form {
        height: 90%;
      }
    }
    .container-preview {
      width: 50%;
      height: 100%;
      /* border: 1px solid #968608; */
    }
  }

  background: #303030d2;
`;

export default FormAdd;
