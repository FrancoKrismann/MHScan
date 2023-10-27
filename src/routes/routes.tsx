import { Home } from "@/pages";
import { Library } from "@/pages/Library";
import { Detail } from "@/pages/Detail";
import { Layout } from "./layout";
import {createBrowserRouter,} from "react-router-dom";
import ErrorPage from "@/pages/Error/ErrorPage";


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
      }
    ]
  },
]);


