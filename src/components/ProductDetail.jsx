import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa el script de Bootstrap
import "./ProductDetail.css"; // Importa tu archivo CSS personalizado
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getProductDetail(id)
      .then((data) => {
        setProduct(data);
        // Inicializa el carrusel después de establecer los datos del producto
        const carousel = new window.bootstrap.Carousel(
          document.getElementById("imageCarousel")
        );
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/items/${searchQuery}`);
    }
    console.log(`Realizando búsqueda para: ${searchQuery}`);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="row">
          {" "}
          <div className="mt-4">
          <h3>
              <FontAwesomeIcon icon={faSearch} className="search-icon" /> Buscar otro producto
            </h3>
            <div className="input-group">
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
        <br />
        <div className="col-md-6">
          {/* Carrusel de imágenes */}
          <div
            id="imageCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`${product.title} - Imagen ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#imageCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Anterior</span>
            </a>
            <a
              className="carousel-control-next"
              href="#imageCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Siguiente</span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="price">Meses Sin Intereses</p>
          <p className="price">Precio: ${product.price}</p>
          <p>Descuento del: {product.discountPercentage}%</p>      
          <p>Marca: {product.brand}</p>
          <p>Stock: {product.stock}</p>
          <p>Categoría: {product.category}</p>
          <p className="description">{product.description} </p>
          <button className="btn btn-primary">Comprar</button>

          {/* Campo de búsqueda mejorado */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
