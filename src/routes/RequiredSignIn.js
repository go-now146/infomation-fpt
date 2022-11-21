import { Navigate, Outlet, useLocation } from "react-router-dom"

function RequiredSignIn() {
    const user = localStorage.getItem('accessToken')
    const location = useLocation()

    return (
        user ? <Outlet/> : <Navigate to='/' state={{from: location}} replace/>
    )
}

export default RequiredSignIn;