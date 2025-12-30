import { RouterProvider } from "react-router/dom"
import { Toaster } from "sonner"
import { AuthProvider } from "./contexts/AuthProvider"
import { router } from "./routes/router"

const App = () => {
  return (
    <>
    <AuthProvider>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App




