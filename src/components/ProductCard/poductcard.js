import "./productcard.css";

const ProductCard = (props) => {
  const { productData } = props;
  const { id, image, title, description, category, price, rating } =
    productData;

  return (
    <>
      <li className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p>Rupees: {price} /-</p>
        <p>
          Rating: {rating.rate}, <span>{rating.count}</span>
        </p>
      </li>
    </>
  );
};
export default ProductCard;
