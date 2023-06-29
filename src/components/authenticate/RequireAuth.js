import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
    const { getAuth } = useAuth();
    const auth = getAuth();
    const location = useLocation();
    console.log("This from require auth \n")
    console.log(auth)
    return (
        
        auth?.user
                ? <Outlet/>
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;