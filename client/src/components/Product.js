// REACT ROUTER
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group grad w-full h-[362px] rounded-[8px] overflow-hidden relative">
        {/* BADGE */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}
        {/* IMAGE */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt={product.attributes.title}
          />
        </div>
        {/* TEXT */}
        <div className="flex flex-col px-6 pb-9">
          {/* CATEGORY TITLE */}
          <div className="mb-2 text-sm capitalize text-accent">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* TITLE */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* PRICE */}
          <div className="text-lg text-accent">${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
