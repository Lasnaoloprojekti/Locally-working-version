import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../context/userContext'

const PrivateRoutes = () => {
    const { auth } = useContext(userContext);

    //let auth = { 'token': true }
    return (
        auth.isAuthenticated ? <Outlet /> : <Navigate to='/login' />
    )
}


export default PrivateRoutes;