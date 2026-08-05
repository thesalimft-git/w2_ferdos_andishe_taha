import Layout from "./Layout"
import DashboardPage from "./pages/DashboardPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export function App() {
  return (
    <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<DashboardPage />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App