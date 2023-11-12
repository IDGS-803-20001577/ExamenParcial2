import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import './Home.css'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/items/${searchQuery}`);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
      <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" width="50" height="50" />

        <h1>BAZAR ONLINE</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
