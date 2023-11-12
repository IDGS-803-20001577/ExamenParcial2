import productsData from '../data/products.json';

const api = {
  searchItems: (query) => {
    return new Promise((resolve, reject) => {
      const results = productsData.products.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    });
  },

  getProductDetail: (id) => {
    return new Promise((resolve, reject) => {
      const product = productsData.products.find(item => item.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    });
  }
};

export default api;
