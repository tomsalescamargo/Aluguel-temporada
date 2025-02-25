import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage' // ou o caminho correto
import AccommodationDetail from './pages/AccommodationDetail' // ou o caminho correto
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bem-vindo ao Aluguel Temporada</h1>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acomodacoes/:id" element={<AccommodationDetail />} /> {/* Corrigido para "acomodacoes" */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
