const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por cidade..."
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Campo de busca por cidade"
      />
    </div>
  );
};

export default SearchBar