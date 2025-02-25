import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import FavoritesButton from '../components/FavoritesButton'

const AccommodationDetail = () => {
  const { id } = useParams()
  const [accommodation, setAccommodation] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/acomodacoes/${id}`)
        setAccommodation(response.data)
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error)
      }
    }

    fetchData()
  }, [id])

  if (!accommodation) return <div>Carregando...</div>

  return (
    <div className="detail-page">
      <img src={accommodation.imagem} alt={accommodation.nome} />
      <h1>{accommodation.nome}</h1>
      <div className="detail-content">
        <p className="price">R$ {accommodation.preco_noite}/noite</p>
        <p className="location">{accommodation.localizacao}</p>
        <p className="description">{accommodation.descricao}</p>
        <div className="details">
          <span>Quartos: {accommodation.quartos} </span>
          <span>Banheiros: {accommodation.banheiros}</span>
        </div>
        <FavoritesButton accommodationId={accommodation.id} />
      </div>
    </div>
  )
}


export default AccommodationDetail