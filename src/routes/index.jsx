import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashBoardPage } from "../pages/DashBoardPage"
import { ProtectedRoute } from "../components/ProtectedRoutes"
import { UserProvider } from "../providers/UserContext"



export const RoutesMain = () => {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashBoard" element={<ProtectedRoute />}>
          <Route index element={<DashBoardPage />} /> 
        </Route>
      </Routes>
    </UserProvider>

  )
}