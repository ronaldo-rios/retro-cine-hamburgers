import { Outlet, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

const ProtectedRoute = () => {

const { auth, loading } = useAuth()
const navigate = useNavigate()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  if (!auth) {
    navigate("/login", { replace: true })
  }

  return <Outlet />
}

export default ProtectedRoute