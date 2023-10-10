import "./App.css";
import AuthContextProvider from "./hooks/authContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = (): JSX.Element => {
  return (
    <AuthContextProvider>
      {/* <RoutesApp/> */}
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
