import { lazy } from 'react';



export const HomePage = lazy(() => import("./Home/Home"))

export const LibraryPage = lazy(() => import("./Library/Library"))

export const DetailPage = lazy(() => import("./Detail/Detail"))

export const ChapterPage = lazy(() => import("./Chapter/Chapter"))

export const PageDashboard = lazy(() => import("./Dashboard/Dashboard"))

export const PageMangasView = lazy(() => import("./Dashboard/ViewDashboard/MangasView/MangasView"))

export const PageFormAdd = lazy(() => import("./Dashboard/ViewDashboard/FormAdd/FormAdd"))

export const PageUsersView = lazy(() => import("./Dashboard/ViewDashboard/UsersView/UsersView"))

export const ErrorPage = lazy(() => import("./Error/ErrorPage"))