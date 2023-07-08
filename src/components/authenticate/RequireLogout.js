import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireLogout = () => {
    const { getAuth } = useAuth();
    const auth = getAuth();
    const location = useLocation();
    console.log("This from require logout \n")
    console.log(auth)
    return (
        
        auth?.user
                ? <Navigate to="/" state={{ from: location }} replace />
                : <Outlet/>
        );
}

export default RequireLogout;