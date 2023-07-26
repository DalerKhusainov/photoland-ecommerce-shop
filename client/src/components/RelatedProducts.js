// USEFETCH HOOK
import useFetch from "../hooks/useFetch";

// COMPONENTS
import ProductSlider from "../components/ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  // GET PRODUCTS BY CATEGORY TITLE
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  return (
    <div className="mb-1">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center h2 xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
