import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    alert(`Odabrali ste: ${product.title}`);
  };

  return (
    <div className="products-container">
      <h2>Naši proizvodi</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
            isSelected={selectedProduct?.id === product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;