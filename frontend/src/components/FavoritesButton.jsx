import { useState, useEffect } from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import { toggleFavorite, isFavorite } from '../utils/localStorage'


const FavoritesButton = ({ accommodationId }) => {
  const [favorited, setFavorited] = useState(false)

  useEffect(() => {
    setFavorited(isFavorite(accommodationId))
  }, [accommodationId])

  const handleClick = () => {
    toggleFavorite(accommodationId)
    setFavorited(!favorited)
  }

  return (
    <button 
        onClick={handleClick} 
        className="favorite-btn"  
        aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <HeartIcon className={`h-6 w-6 ${favorited ? 'text-red-500' : 'text-gray-400'}`} />
    </button>
  )
}

export default FavoritesButton