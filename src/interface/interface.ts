
export interface Type_Item {
    literal: string
    href:string
}

export interface DataPort_Item {
    id:string
    image:string
    title:string
}

export interface DataUpdate_Item {
    id:string
    image:string
    title:string
    chapters:[string]
}

export interface Chapters_Item {
    chapter:string
    href:string
    updateTime:string
}
