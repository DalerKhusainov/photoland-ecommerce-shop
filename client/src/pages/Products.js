// REACT HOOKS
import { useState, useEffect } from "react";

// REACT ROUTER HOOKS
import { useParams } from "react-router-dom";

// USEFETCH HOOK
import useFetch from "../hooks/useFetch";

// COMPONENTS
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
  const [title, setTitle] = useState(null);

  // PARAMS VALUE
  const { id } = useParams();

  // GET DATA BASED ON CATEGORY ID
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );

  // SET THE TITLE WHEN THE DATA IS FETCHED
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  return (
    <div className="pt-40 mb-16 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main>
            {/* TITLE */}
            <div className="py-3 text-xl text-center uppercase lg:text-left">
              {title} Cameras
            </div>
            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
