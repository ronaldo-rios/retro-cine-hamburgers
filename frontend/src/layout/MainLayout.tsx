import { Outlet } from "react-router"
import Header from "../components/Header"

const MainLayout = () => {
  return (
    <section className="flex flex-col min-h-screen bg-(--primary-color)">
        <Header />
        <main className="container mx-auto px-4 py-6 text-white">
            <Outlet />
        </main>
    </section>
  )
}

export default MainLayout