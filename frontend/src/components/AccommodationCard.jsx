import { Link } from 'react-router-dom';
import FavoritesButton from './FavoritesButton';


const AccommodationCard = ({ accommodation }) => {
  return (
    <div className="accommodation-card">
      <img src={accommodation.imagem} alt={accommodation.nome} />
      <div className="card-content">
        <h3>{accommodation.nome}</h3>
        <p className="price">R$ {accommodation.preco_noite}/noite</p>
        <p className="location">{accommodation.localizacao}</p>
        <div className="card-actions">
          <Link to={`/acomodacoes/${accommodation.id}`} className="details-btn">
            Ver Detalhes
          </Link>
          <FavoritesButton accommodationId={accommodation.id} />
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard