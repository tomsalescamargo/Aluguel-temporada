import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import AccommodationCard from '../components/AccommodationCard'


// Função para normalizar textos (remove acentos e coloca em minúsculo)
const normalizeString = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

const HomePage = () => {
  const [accommodations, setAccommodations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = searchTerm 
          ? { cidade: normalizeString(searchTerm) }  // Aplica normalização
          : {}
        
        const response = await axios.get('http://localhost:5000/acomodacoes', {
          params,
          headers: {
            'Cache-Control': 'no-cache'  // Evita cache durante desenvolvimento
          }
        })
        
        console.log(response.data)
        setAccommodations(response.data)
      } catch (error) {
        console.error('Erro ao buscar acomodações:', error)
        setAccommodations([])  // Limpa resultados em caso de erro
      }
    }

    const debounceTimer = setTimeout(fetchData, 300)
    return () => clearTimeout(debounceTimer)
  }, [searchTerm])

  return (
    <div className="home-page">
      <h1>Encontre Sua Acomodação Ideal</h1>
      <SearchBar onSearch={(term) => setSearchTerm(term.trim())} className="search-bar"/>
      <div className="accommodations-grid">
        {accommodations.map((accommodation) => (
          <AccommodationCard key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
      {accommodations.length === 0 && searchTerm && (
        <p className="no-results">Nenhum resultado encontrado para "{searchTerm}"</p>
      )}
    </div>
  )
}

export default HomePage