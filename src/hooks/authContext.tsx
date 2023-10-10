import { createContext , useCallback, useMemo, useState} from "react";
import { MY_AUTH_APP } from "@/consts";
import { getItem , setItem, setRemoveItem} from "@/utils/LocalStorage";


interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
 
interface AuthContextProviderProps {
    children: JSX.Element
}

export default function AuthContextProvider ({children}:AuthContextProviderProps)  {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => getItem(MY_AUTH_APP))

    const login = useCallback(function () {
        setItem(MY_AUTH_APP,true)
        setIsAuthenticated(true)
    },[])

    const logout = useCallback(function () {
        setRemoveItem(MY_AUTH_APP)
        setIsAuthenticated(false)
    },[])

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated
        }),
        [isAuthenticated, login, logout]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

