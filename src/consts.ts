import { For_Items } from "./types";
import { Type_Item } from "./interface";

export const NAVBAR_ITEMS = {
    LIBRARY: 'biblioteca',
    ABOUT:"sobre-nosotros ",
    CONTACT:"contactanos",
    PRIVACY:"politica-de-privacidad"
} as const

export const SESION_TYPE = {
    LOGIN:"Inicio de sesion",
    REGISTER:"Registrarse"
} as const

export const NAVBAR_BUTTONS: Record<string, Type_Item> = {
    [NAVBAR_ITEMS.LIBRARY]: {
        literal:NAVBAR_ITEMS.LIBRARY,
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


export const typedNavbarButtons: For_Items = NAVBAR_BUTTONS;

export const typedSesion:For_Items = SESION_ITEMS;


//Variable for Local Storage

export const MY_AUTH_APP = "MY_AUTH_APP";
