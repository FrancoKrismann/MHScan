
import { Layout } from "./layout";
import {createBrowserRouter,} from "react-router-dom";

// import { Home } from "@/pages";
import { ChapterPage,DetailPage,ErrorPage,HomePage,LibraryPage } from "@/pages";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"manga",
        element:<LibraryPage/>,
      
      },
      {
        path:"manga/:id",
        element:<DetailPage/>,
      },
      {
        path:"manga/:id/:chapter",
        element:<ChapterPage/>,
      }
    ]
  },
]);


