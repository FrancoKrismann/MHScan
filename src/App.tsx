import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home } from "@/pages";
import { LayoutContainer } from "./styled-components";
import { router } from "./routes/routes";
import AuthContextProvider from "./hooks/authContext";

// export const router =  createBrowserRouter([
//   {
//     path:"/",
//     loader:"",
//     element:<Home/>,
//     children:[
//       {

//       }
//     ]
//   }
// ])

const App = (): JSX.Element => {
  return (
    <AuthContextProvider>
        <Header />
        <LayoutContainer>
          
        <RouterProvider router={router}/>

        

          
        </LayoutContainer>
        <Footer />
        
      </AuthContextProvider>
    
  );
};

export default App;
