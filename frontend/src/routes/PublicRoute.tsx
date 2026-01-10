import { Outlet, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

const PublicRoute = () => {
  const { auth, loading } = useAuth()
  const navigate = useNavigate()

  if (auth && !loading) {
    navigate("/", { replace: true })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  return <Outlet />
}

export default PublicRoute