import Layout from "./Layout"
import DashboardPage from "./pages/DashboardPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"

export function App() {
  return (
    <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App