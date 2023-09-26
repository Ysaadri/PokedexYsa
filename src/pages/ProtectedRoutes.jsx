import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'

export const ProtectedRoutes = () => {
    const trainer = useSelector(store => store.trainer)

  if(trainer.length > 2){
    return <Outlet />

  }else {
    return <Navigate to='/' />

    }
  
}
export default ProtectedRoutes 