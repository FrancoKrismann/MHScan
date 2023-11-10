import { useContext } from "react";
import { AuthContext } from "./authContext";

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext debe ser usado dentro de un AuthContextProvider");
  }
  return context;
}
