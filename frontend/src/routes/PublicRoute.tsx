import { Navigate, Outlet } from "react-router"
import { useAuth } from "../hooks/useAuth"

const PublicRoute = () => {
    const { auth, loading } = useAuth()

  if (loading) {
    return <div>Carregando...</div>
  }

  if (auth) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default PublicRoute