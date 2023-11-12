import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchResult.css'; 
import { useNavigate } from 'react-router-dom';
import StarRating from './StartRating';

const SearchResult = () => {
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.searchItems(search)
      .then((data) => setResults(data))
      .catch((error) => console.error(error));
  }, [search]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/items/${searchQuery}`);
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="input-group">
          <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" width="50" height="50" />

            <input
              type="text"
              className="form-control"
              placeholder="Buscar producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center">Bazar en línea</h1>
      <h2 className="text-center">Resultados para "{search}"</h2>
      
      <div className="row justify-content-center">
        {results.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.thumbnail} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Categoría: {item.category}</p>
                <div className="card-text">
                  <StarRating rating={item.rating} />
                </div>
                <Link to={`/item/${item.id}`} className="btn btn-primary">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
