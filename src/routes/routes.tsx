import { createBrowserRouter } from "react-router-dom";
import {Home} from "@/pages";


// type MyHome = InstanceType<typeof Home>;

export const router =  createBrowserRouter([
    {
      path:"/",
      element:<Home />,
      
    }
])