import { NAVBAR_BUTTONS } from "@/consts";
import { Type_Item } from "@/interface";


export type For_Items = {
    [key in keyof typeof NAVBAR_BUTTONS]: Type_Item;
};