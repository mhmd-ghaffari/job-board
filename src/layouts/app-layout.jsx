import Header from "@/components/header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen px-3 sm:px-10">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by Mohammad
      </div>
    </div>
  )
}

export default AppLayout
