import Layout from "./Layout"
import DashboardPage from "./pages/DashboardPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"

export function App() {
  return (
    <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App