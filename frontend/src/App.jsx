import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AccommodationDetail from './pages/AccommodationDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acomodacoes/:id" element={<AccommodationDetail />} />
      </Routes>
    </Router>
  )
}