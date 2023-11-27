//Navbar buttons
export interface Type_Item {
    literal: string
    href: string
}

export interface TypeSideButtons extends Type_Item {
    icons: React.ComponentType<any> | string;
}

// export interface DataPort_Item {
//     id:string
//     image:string
//     title:string
// }

//Cards Section Updates
// export interface DataUpdate_Item {
//     id:string
//     image:string
//     title:string
//     href:string
//     chapters:Chapters_Item[]
// }

//Cards Details
export interface InfoDetail_Item {
    alternative: string
    author: string
    artist: string
    genre: string[]
    type: string
    releaser: number | null
    status: string
    description: string
    [key: string]: string | string[] | number | null | undefined;
}
export interface Chapters_Item {
    chapter: number | null
    data: string[]
}
export interface DataViewType {
    image: File | null
    title: string
    href: string
    chapters: Chapters_Item[]
    detail: InfoDetail_Item
}


export interface DataChapters_Item {
    name: string
    href: string
    chapters: {
        chapterNumber: number;
        images: string[];
    }[];

}