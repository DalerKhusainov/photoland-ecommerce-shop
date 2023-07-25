// COMPONENTS
import ProductSlider from "../components/ProductSlider.js";

// useFetch HOOK
import useFetch from "../hooks/useFetch.js";

const LatestProducts = () => {
  // GETTING NEW PRODUCTS
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center h2 xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
