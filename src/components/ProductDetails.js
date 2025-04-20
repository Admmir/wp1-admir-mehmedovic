import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  
  // Pronađi proizvod u nizu proizvoda
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return <div>Proizvod nije pronađen</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p className="description">{product.description}</p>
      <p className="price">Cijena: {product.price} KM</p>
      {/* Dodatni detalji proizvoda */}
    </div>
  );
};

export default ProductDetails;