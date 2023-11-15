import { Aside_Items, For_Items } from "./types";
import { TypeSideButtons, Type_Item } from "./interface";
import {BiSolidAddToQueue, BiLibrary} from "react-icons/bi"
import {RiUserSettingsLine} from "react-icons/ri"


//Navbar Buttons
export const NAVBAR_ITEMS = {
    HOME:"/",
    LIBRARY: 'manga',
    ABOUT:"sobre-nosotros ",
    CONTACT:"contactanos",
    PRIVACY:"politica-de-privacidad"
} as const

//Type Sesion roles
export const SESION_TYPE = {
    LOGIN:"Inicio de sesion",
    REGISTER:"Registrarse"
} as const

//Dashboards Buttons Sidebar Buttons
export const IconsAside = {
    ADD:"Add",
    USERS:"Users",
    MANGAS:"Mangas"
} as const

export const NAVBAR_BUTTONS: Record<string, Type_Item> = {
    [NAVBAR_ITEMS.HOME]:{
        literal:"inicio",
        href:`${NAVBAR_ITEMS.HOME}`
    },
    [NAVBAR_ITEMS.LIBRARY]: {
        literal:"biblioteca", 
        href:`/${NAVBAR_ITEMS.LIBRARY}`
    },
    [NAVBAR_ITEMS.ABOUT]: {
        literal:"Sobre",
        href:`/${NAVBAR_ITEMS.ABOUT}`
    },
    [NAVBAR_ITEMS.CONTACT]: {
        literal:NAVBAR_ITEMS.CONTACT,
        href:`/${NAVBAR_ITEMS.CONTACT}`
    },
    [NAVBAR_ITEMS.PRIVACY]: {
        literal:"politica",
        href:`/${NAVBAR_ITEMS.PRIVACY}`
    },    
} as const


export const SESION_ITEMS: Record<string, Type_Item> = {
[SESION_TYPE.LOGIN]:{
    literal:SESION_TYPE.LOGIN,
    href:`/${SESION_TYPE.LOGIN}`
},
[SESION_TYPE.REGISTER]:{
    literal:SESION_TYPE.REGISTER,
    href:`/${SESION_TYPE.REGISTER}`
}
}

export const Side_Buttons: Record<string, TypeSideButtons> = {
    [IconsAside.ADD]:{
        literal:`${IconsAside.ADD}`,
        href:`/${IconsAside.ADD}`,
        icons:BiSolidAddToQueue
    },
    [IconsAside.MANGAS]: {
        literal:`${IconsAside.MANGAS}`, 
        href:``,
        icons:BiLibrary
    },
    [IconsAside.USERS]: {
        literal:`${IconsAside.USERS}`,
        href:`/${IconsAside.USERS}`,
        icons:RiUserSettingsLine
    },
} as const


export const typedNavbarButtons: For_Items = NAVBAR_BUTTONS;

export const typedSesion:For_Items = SESION_ITEMS;

//Buttons for Dashboard Sidebar
export const typedSideButtons:Aside_Items = Side_Buttons;

//Variable for Local Storage

export const MY_AUTH_APP = "MY_AUTH_APP";







