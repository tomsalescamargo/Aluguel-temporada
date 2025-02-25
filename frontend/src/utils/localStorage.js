export const toggleFavorite = (accommodationId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const index = favorites.indexOf(accommodationId)

    if (index === -1) {
        favorites.push(accommodationId)
    } else {
        favorites.splice(index, 1)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}
  
export const isFavorite = (accommodationId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    return favorites.includes(accommodationId)
}