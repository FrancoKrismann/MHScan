import { NAVBAR_BUTTONS } from "@/consts";
import { DataPort_Item, Type_Item ,DataUpdate_Item} from "@/interface";

//Type of Section Recomend Cards

export type DataPortId = Pick<DataPort_Item, "id">

export type DataPortTitle = Pick<DataPort_Item, "title">

export type DataPortImage = Pick<DataPort_Item, "image">

export type DataPortAll = Pick<DataPort_Item, "image" | "title" |"id" >


//NavBar buttons
export type For_Items = {
    [key in keyof typeof NAVBAR_BUTTONS]: Type_Item;
};

//Type of Section Updates Cards

export type DataUpdateId = Pick<DataUpdate_Item, "id">

export type DataUpdateTitle = Pick<DataUpdate_Item, "title">

export type DataUpdateImage = Pick<DataUpdate_Item, "image">

export type DataUpadteHref = Pick<DataUpdate_Item, "href">


