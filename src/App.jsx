import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:search" element={<SearchResult />} />
        <Route path="/item/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
