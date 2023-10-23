import { NAVBAR_BUTTONS } from "@/consts";
import { Type_Item , InfoDetail_Item, Chapters_Item, DataViewType} from "@/interface";

//Type of Section Recomend Cards

// export type DataPortId = Pick<DataPort_Item, "id">

// export type DataPortTitle = Pick<DataPort_Item, "title">

// export type DataPortImage = Pick<DataPort_Item, "image">

// export type DataPortAll = Pick<DataPort_Item, "image" | "title" |"id" >


//NavBar buttons
export type For_Items = {
    [key in keyof typeof NAVBAR_BUTTONS]: Type_Item;
};

//Type of Section Updates Cards

// export type DataUpdateId = Pick<DataUpdate_Item, "id">

// export type DataUpdateTitle = Pick<DataUpdate_Item, "title">

// export type DataUpdateImage = Pick<DataUpdate_Item, "image">

// export type DataUpadteHref = Pick<DataUpdate_Item, "href">

//Type of section Details

export type DataInfoAlternative = Pick<InfoDetail_Item, "alternative">

export type DataInfoAuthor = Pick<InfoDetail_Item, "author">

export type DataInfoArtist = Pick<InfoDetail_Item, "artist">

export type DataInfoGenre = Pick<InfoDetail_Item, "genre">

export type DataInfoType = Pick<InfoDetail_Item, "type">

export type DataInfoReleaser = Pick<InfoDetail_Item, "releaser">

export type DataInfoStatus = Pick<InfoDetail_Item, "status">

export type DataInfoDescription = Pick<InfoDetail_Item, "description">

//Type of Secton Chapters

export type DataChapterNumber = Pick<Chapters_Item, "chapter">

export type DataChapterUpdateTime = Pick<Chapters_Item, "updateTime">

//Type DataView 

export type DataViewId = Pick<DataViewType, "id">

export type DataViewImage = Pick<DataViewType, "image">

export type DataViewTitle = Pick<DataViewType, "title">

export type DataViewHref = Pick<DataViewType, "href">

export type DataViewChapters = Pick<DataViewType,"chapters">

export type DataViewDetails = Pick<DataViewType, "detail">



