import { Library } from "@/pages/Library";
import { Detail } from "@/pages/Detail";
import { Layout } from "./layout";
import {createBrowserRouter,} from "react-router-dom";
import ErrorPage from "@/pages/Error/ErrorPage";
import { Home } from "@/pages";
import { Chapter } from "@/pages/Chapter";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"manga",
        element:<Library/>,
      
      },
      {
        path:"manga/:id",
        element:<Detail/>,
      },
      {
        path:"manga/:id/:chapter",
        element:<Chapter/>,
      }
    ]
  },
]);


