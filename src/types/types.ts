import { NAVBAR_BUTTONS } from "@/consts";
import { DataPort_Item, Type_Item } from "@/interface";

export type DataPortId = Pick<DataPort_Item, "id">

export type DataPortTitle = Pick<DataPort_Item, "title">

export type DataPortImage = Pick<DataPort_Item, "image">

export type DataPortAll = Pick<DataPort_Item, "image" | "title" |"id" >

export type For_Items = {
    [key in keyof typeof NAVBAR_BUTTONS]: Type_Item;
};