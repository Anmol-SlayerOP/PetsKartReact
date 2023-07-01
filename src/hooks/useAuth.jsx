import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";


const useAuth = () => {
    const { getAuth } = useContext(AuthContext);
    useDebugValue(getAuth(), auth => getAuth()?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;