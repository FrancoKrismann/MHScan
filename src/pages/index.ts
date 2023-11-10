import { lazy } from 'react';



export const HomePage = lazy(() => import("./Home/Home"))

export const LibraryPage = lazy(() => import("./Library/Library"))

export const DetailPage = lazy(() => import("./Detail/Detail"))

export const ChapterPage = lazy(() => import("./Chapter/Chapter"))

export const ErrorPage = lazy(() => import("./Error/ErrorPage"))