import { Navigate, Outlet } from "react-router"
import { useAuth } from "../hooks/useAuth"

const ProtectedRoute = () => {

const { auth, loading } = useAuth()

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!auth) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute