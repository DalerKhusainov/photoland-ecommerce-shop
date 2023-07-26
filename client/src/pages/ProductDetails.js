// REACT HOOKS
import { useContext } from "react";

// REACT ROUTER HOOKS
import { useParams } from "react-router-dom";

// USEFETCH HOOK
import useFetch from "../hooks/useFetch";

// COMPONENTS
import RelatedProducts from "../components/RelatedProducts";

// FROM CONTEXT API
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  // GET PRODUCT DATA BASED ON THE ID
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) return <div className="container mx-auto">loading...</div>;

  // CATEGORY TITLE
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* TEXT */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex items-center justify-center">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 p-12 rounded-lg bg-primary xl:p-20">
            {/* CATEGORY TITLE */}
            <div className="mb-2 text-lg font-medium uppercase text-accent">
              {data[0].attributes.categories.data[0].attributes.title} Cameras
            </div>
            {/* TITLE */}
            <h2 className="mb-4 h2">{data[0].attributes.title}</h2>
            {/* DESCRIPTION */}
            <p className="mb-12">{data[0].attributes.description}</p>
            {/* PRICE & BTN */}
            <div className="flex items-center gap-x-8">
              {/* PRICE */}
              <div className="text-3xl font-semibold text-accent">
                ${data[0].attributes.price}
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* RELATED PRODUCTS */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
