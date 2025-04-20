
const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span className="price">{product.price} KM</span>
      <button className="details-btn">Detalji</button>
    </div>
  );
};

export default ProductCard;