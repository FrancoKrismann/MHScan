
export interface Type_Item {
    literal: string
    href:string
}

export interface DataPort_Item {
    id:string
    image:string
    title:string
}

//Cards Section Updates
export interface Chapters_Item {
    chapter:number
    updateTime:number
}
export interface DataUpdate_Item {
    id:string
    image:string
    title:string
    href:string
    chapters:Chapters_Item[]
}
